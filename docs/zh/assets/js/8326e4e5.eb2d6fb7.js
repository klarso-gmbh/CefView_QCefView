"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[177],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=r.createContext({}),l=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,f=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),s=i,C=d["".concat(f,".").concat(s)]||d[s]||u[s]||a;return n?r.createElement(C,o(o({ref:t},p),{},{components:n})):r.createElement(C,o({ref:t},p))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8891:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},f="\u7b2c\u4e00\u4e2a\u9879\u76ee",l={unversionedId:"guide/FirstProject",id:"guide/FirstProject",title:"\u7b2c\u4e00\u4e2a\u9879\u76ee",description:"\u4f7f\u7528Qt Creator\u6216\u8005\u5176\u4ed6\u652f\u6301\u7684IDE\u521b\u5efa\u4e00\u4e2aGUI\u5e94\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guide/FirstProject.md",sourceDirName:"guide",slug:"/guide/FirstProject",permalink:"/QCefView/zh/docs/guide/FirstProject",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"default",previous:{title:"\u6307\u5f15",permalink:"/QCefView/zh/docs/guide/"},next:{title:"C++/Javascript\u4e92\u64cd\u4f5c",permalink:"/QCefView/zh/docs/guide/Interoperability"}},p=[{value:"\u521d\u59cb\u5316QCefContext\u5b9e\u4f8b",id:"\u521d\u59cb\u5316qcefcontext\u5b9e\u4f8b",children:[],level:2},{value:"\u521b\u5efaQCefView\u5b9e\u4f8b",id:"\u521b\u5efaqcefview\u5b9e\u4f8b",children:[],level:2},{value:"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684Web\u9875\u9762",id:"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684web\u9875\u9762",children:[],level:2},{value:"\u8fd0\u884c\u5e94\u7528",id:"\u8fd0\u884c\u5e94\u7528",children:[],level:2}],u={toc:p};function d(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c\u4e00\u4e2a\u9879\u76ee"},"\u7b2c\u4e00\u4e2a\u9879\u76ee"),(0,a.kt)("p",null,"\u4f7f\u7528Qt Creator\u6216\u8005\u5176\u4ed6\u652f\u6301\u7684IDE\u521b\u5efa\u4e00\u4e2aGUI\u5e94\u7528"),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316qcefcontext\u5b9e\u4f8b"},"\u521d\u59cb\u5316",(0,a.kt)("a",{parentName:"h2",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext")),"\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u4f7f\u7528QCefView\u7684\u7b2c\u4e00\u6b65\u5fc5\u987b\u521d\u59cb\u5316\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext")),"\u7684\u5b9e\u4f8b\uff0c\u8ddfQApplication\u4e00\u6837, \u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u751f\u547d\u5468\u671f\u5185\u5fc5\u987b\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext")),"\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <QApplication>\n#include <QCefContext.h>\n#include "MainWindow.h"\n\nint main(int argc, char* argv[])\n{\n  // build the application instance\n  QApplication a(argc, argv);\n\n  // build QCefConfig\n  QCefConfig config(argc, argv);\n  config.setUserAgent("QCefViewTest");\n  config.setLogLevel(QCefConfig::LOGSEVERITY_VERBOSE);\n  config.setBridgeObjectName("CallBridge");\n  config.setRemoteDebuggingPort(9000);\n\n  // initialize QCefContext instance with config\n  QCefContext cefContext(&a, &config);\n\n  // create main window \n  MainWindow w;\n  w.show();\n  \n  // enter the application event loop\n  int rc = a.exec();\n  \n  // exit application\n  return rc;\n}\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u521d\u59cb\u5316",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext")),"\u5b9e\u4f8b\u7684\u65f6\u5019\u9700\u8981\u4f20\u5165\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefConfig")),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefConfig")),"\u8bbe\u7f6e\u4e00\u4e9bCEF\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u4f8b\u5982\u53ef\u4e5f\u8bbe\u7f6e\u65e5\u5fd7\u7ea7\u522b\uff0c\u8c03\u8bd5\u7aef\u53e3\u7b49\u3002\u66f4\u591a\u8be6\u7ec6\u53c2\u6570\u8bf7\u53c2\u4e0eAPI\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefConfig")),"\u3002"),(0,a.kt)("p",null,"\u4e0d\u8981\u8bd5\u56fe\u4e3b\u52a8\u6790\u6784",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext")),"\u5b9e\u5217\uff0c\u8be5\u5b9e\u4f8b\u8ddf\u968fApplication\u7684\u751f\u547d\u5468\u671f\u5b58\u5728\u548c\u9500\u6bc1\uff0c\u5982\u679c\u63d0\u524d\u9500\u6bc1\u5219\u4f1a\u5bfc\u81f4CEF\u5185\u90e8\u72b6\u6001\u9519\u8bef\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efaqcefview\u5b9e\u4f8b"},"\u521b\u5efaQCefView\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u4e00\u65e6\u521d\u59cb\u5316",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext")),"\u5b8c\u6210\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefView"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefView")),"\u5bf9\u8c61\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'  // build the path to the web resource\n  QDir dir = QCoreApplication::applicationDirPath();\n#if defined(OS_MACOS)\n  QString uri = QString("file://") + QDir::toNativeSeparators(dir.filePath("../Resources/QCefViewTestPage.html"));\n#else\n  QString uri = QString("file://") + QDir::toNativeSeparators(dir.filePath("QCefViewTestPage.html"));\n#endif\n\n  // build settings for per QCefView\n  QCefSetting setting;\n  // here we just set the default background to blue\n  setting.setBackgroundColor(QColor::fromRgb(0, 0, 255));\n\n  // create the QCefView widget and add it to the layout container\n  cefViewWidget = new QCefView(uri, &setting, this);\n  ui.cefContainer->layout()->addWidget(cefViewWidget);\n  layout->addWidget(ui.cefContainer);\n')),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684web\u9875\u9762"},"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684Web\u9875\u9762"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684Web\u9875\u9762\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n  </head>\n  <body id="main" class="noselect">\n    <h1 align="center" style="font-size: 12pt">Web Area</h1>\n  </body>\n</html>\n')),(0,a.kt)("h2",{id:"\u8fd0\u884c\u5e94\u7528"},"\u8fd0\u884c\u5e94\u7528"),(0,a.kt)("p",null,"\u542f\u52a8\u5e94\u7528\uff0c\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u754c\u9762\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"First Project",src:n(8583).Z})))}d.isMDXComponent=!0},8583:function(e,t,n){t.Z=n.p+"assets/images/first-project-96bc40d62f5500d3af40112fe6aced13.png"}}]);