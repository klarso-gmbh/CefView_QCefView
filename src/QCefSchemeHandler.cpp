#include <QCefSchemeHandler.h>

#pragma region std_headers
#include <string.h>
#pragma endregion std_headers

#pragma region qt_headers
#pragma endregion qt_headers

#pragma region cef_headers
#include <include/cef_browser.h>
#include <include/cef_callback.h>
#include <include/cef_frame.h>
#include <include/cef_request.h>
#include <include/cef_resource_handler.h>
#include <include/cef_response.h>
#include <include/cef_scheme.h>
#include <include/wrapper/cef_helpers.h>

#pragma endregion cef_headers

class HandlerImplementation : public CefResourceHandler
{
public:
  HandlerImplementation(QCefSchemeHandler* handler)
    : handler_(handler)
  {}

  bool Open(CefRefPtr<CefRequest> request, bool& handle_request, CefRefPtr<CefCallback> callback) override
  {
    CEF_REQUIRE_IO_THREAD();

    handle_request = true;

    if (!handler_)
      return false;

    auto urlStr = QString::fromStdString(request->GetURL().ToString());

    bool result = handler_->Open(urlStr);

    return result;
  }

  void GetResponseHeaders(CefRefPtr<CefResponse> response, int64& response_length, CefString& redirectUrl) override
  {
    CEF_REQUIRE_IO_THREAD();

    if (!handler_) {
      response_length = 0;
      response->SetStatus(500);
      return;
    }

    int statusCode;
    int contentSize;
    QString mimeType;
    handler_->GetResponseHeaders(statusCode, contentSize, mimeType);
    response_length = contentSize;
    response->SetStatus(statusCode);
    response->SetMimeType(mimeType.toStdString());
    response->SetHeaderByName("Access-Control-Allow-Origin", "*", true);
  }

  bool Skip(int64 bytes_to_skip, int64& bytes_skipped, CefRefPtr<CefResourceSkipCallback> callback) override
  {
    bytes_skipped = -2;
    if (!handler_) {
      return false;
    }

    const bool result = handler_->Skip(bytes_to_skip);
    if (result) {
      bytes_skipped = bytes_to_skip;
    }

    return result;
  }

  bool Read(void* data_out, int bytes_to_read, int& bytes_read, CefRefPtr<CefResourceReadCallback> callback) override
  {
    bytes_read = -1;
    if (!handler_) {
      return false;
    }

    QByteArray data = handler_->Read(bytes_to_read);
    bytes_read = data.length();
    if (bytes_read) {
      memcpy(data_out, data.constData(), bytes_read);
    }

    return bytes_read > 0;
  }

  void Cancel() override
  {
    if (handler_) {
      handler_->Close();
    }
  }

private:
  QCefSchemeHandler* handler_;

private:
  IMPLEMENT_REFCOUNTING(HandlerImplementation);
};

class FactoryImplementation : public CefSchemeHandlerFactory
{
public:
  FactoryImplementation(QCefSchemeHandler::SchemeHandlerCreator delegatedHandlerCreator)
    : delegatedHandlerCreator_(delegatedHandlerCreator)
  {}

  CefRefPtr<CefResourceHandler> Create(CefRefPtr<CefBrowser> browser,
                                       CefRefPtr<CefFrame> frame,
                                       const CefString& scheme_name,
                                       CefRefPtr<CefRequest> request) override
  {
    QCefSchemeHandler* handler = delegatedHandlerCreator_();

    if (handler)
      return new HandlerImplementation(handler);
    else
      return nullptr;
  }

private:
  QCefSchemeHandler::SchemeHandlerCreator delegatedHandlerCreator_;

private:
  IMPLEMENT_REFCOUNTING(FactoryImplementation);
};

//////////////////////////////////////////////////////////////////////////
QCefSchemeHandler::QCefSchemeHandler() {}

QCefSchemeHandler::~QCefSchemeHandler() {}

bool
QCefSchemeHandler::Skip(const int bytesToSkip)
{
  return false;
}

void
QCefSchemeHandler::Close()
{}

bool
QCefSchemeHandler::registerSchemeHandler(const QString& scheme,
                                         SchemeHandlerCreator handlerCreator,
                                         const QString& domain)
{
  CefString strScheme;
  strScheme.FromString(scheme.toStdString());
  CefString strDomain;
  strDomain.FromString(domain.toStdString());

  return CefRegisterSchemeHandlerFactory(strScheme, strDomain, new FactoryImplementation(handlerCreator));
}
