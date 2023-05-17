#include "CCefClientDelegate.h"

#include "QCefViewPrivate.h"

void
CCefClientDelegate::findResult(CefRefPtr<CefBrowser>& browser,
                               int identifier,
                               int count,
                               const CefRect& selectionRect,
                               int activeMatchOrdinal,
                               bool finalUpdate)
{
  if (!IsValidBrowser(browser))
    return;

  QRect rect(selectionRect.x, selectionRect.y, selectionRect.width, selectionRect.height);

  pCefViewPrivate_->q_ptr->findResult(browser->GetIdentifier(), identifier, count, rect, activeMatchOrdinal, finalUpdate);
}

