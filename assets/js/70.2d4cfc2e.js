(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{423:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"chrome-性能分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-性能分析"}},[t._v("#")]),t._v(" Chrome 性能分析")]),t._v(" "),s("h2",{attrs:{id:"lighthouse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lighthouse"}},[t._v("#")]),t._v(" LightHouse")]),t._v(" "),s("p",[s("strong",[t._v("LightHouse")]),t._v(" 是 Chrome 的一个插件,打开面板发现新家一个 "),s("strong",[t._v("Lifhhouse")]),t._v("的项,点击 "),s("strong",[t._v("Generate report")]),t._v(" 会给我们生成性能报告,并提出一些能够优化的建议,如下:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/optimization/LightHouse.png",alt:"LightHouse"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("如何不能科学上网,如何使用呢?")])]),t._v(" "),s("p",[t._v("这是我们可以使用 npm 安装依赖:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g lighthouse\n")])])]),s("p",[t._v("然后进行测试:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("lighthouse http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/www.quantdo.com.cn/")]),t._v("\n")])])]),s("p",[t._v("更详细的请参考 "),s("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse",target:"_blank",rel:"noopener noreferrer"}},[t._v("lighthouse"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"pagespeed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagespeed"}},[t._v("#")]),t._v(" PageSpeed")]),t._v(" "),s("p",[t._v("去 Chrome 搜索 pagespeed 选择 PageSpeed Insights (with PNaCl) 添加至 Chrome 即可")]),t._v(" "),s("p",[t._v("打开控制面板会发现新加一个 "),s("strong",[t._v("PageSpeed")]),t._v(" 的项,点击 "),s("strong",[t._v("START ANALYZING")]),t._v(" 会列出我们可以优化的点")]),t._v(" "),s("p",[s("img",{attrs:{src:"/optimization/PageSpeed.png",alt:"PageSpeed"}})]),t._v(" "),s("h2",{attrs:{id:"webpagetest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpagetest"}},[t._v("#")]),t._v(" WebPageTest")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpagetest"),s("OutboundLink")],1),t._v(" 是一款前端性能分析工具,可以在线测试,也可以独立搭建本地服务器. 多测试地点、全面性能报告,我愿称之为神器")]),t._v(" "),s("p",[s("img",{attrs:{src:"/optimization/webpageTest.png",alt:"webpageTest"}})]),t._v(" "),s("p",[t._v("我们可以点开具体报告查看里面每个资源加载的具体时间、文件大小。我只能说真香!")]),t._v(" "),s("h2",{attrs:{id:"performanceobserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performanceobserver"}},[t._v("#")]),t._v(" PerformanceObserver")]),t._v(" "),s("p",[t._v("可以利用 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceObserver/PerformanceObserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("PerformanceObserver"),s("OutboundLink")],1),t._v(" 来检测性能指标,如下:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("获取各种指标"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.staticfile.org/twitter-bootstrap/5.0.0-alpha1/css/bootstrap-reboot.min.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("aotu"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entry "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entryType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        observer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" entryTypes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resource'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mark'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mark")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xikun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("entryTypes")]),t._v(" 有如下几种:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mark")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("通过 performance.mark()")])]),t._v(" "),s("tr",[s("td",[t._v("measure")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("通过 performance.measure()")])]),t._v(" "),s("tr",[s("td",[t._v("resource")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("资源时间")])]),t._v(" "),s("tr",[s("td",[t._v("frame, navigation")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("文件的地址")])]),t._v(" "),s("tr",[s("td",[t._v("paint")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("获取绘制的时间,主要是 first-paint 和 first-contentful-paint")])]),t._v(" "),s("tr",[s("td",[t._v("longtask")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("在浏览器执行超过 50ms 的任务")])])])]),t._v(" "),s("p",[t._v("使用框架 "),s("strong",[t._v("web-vitals")])]),t._v(" "),s("p",[t._v("可以通过 npm 安装包使用 也可以直接使用")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getCLS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getFID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getLCP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://unpkg.com/web-vitals@0.2.4/dist/web-vitals.es5.min.js?module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCLS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLCP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("更多详细移步:"),s("a",{attrs:{href:"https://www.npmjs.com/package/web-vitals",target:"_blank",rel:"noopener noreferrer"}},[t._v("web-vitals"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"performance-timing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance-timing"}},[t._v("#")]),t._v(" performance.timing")]),t._v(" "),s("p",[t._v("我们可以使用浏览器的 API "),s("strong",[t._v("performance.timing")]),t._v(" 详细的记录 TCP连接,"),s("strong",[t._v("DOM解析")]),t._v(","),s("strong",[t._v("白屏")]),t._v(" 等时间")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DNS")]),t._v(" 解析耗时"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" domainLookupEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" domainLookupStart\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TCP")]),t._v(" 连接耗时"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" connectEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" connectStart\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SSL")]),t._v(" 安全连接耗时"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" connectEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" secureConnectionStart\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("网络请求耗时")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TTFB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" responseStart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" requestStart\n  数据传输耗时"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" responseEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" responseStart\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v(" 解析耗时"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" domInteractive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" responseEnd\n  资源加载耗时"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" loadEventStart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" domContentLoadedEventEnd\n  First Byte时间"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" responseStart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" domainLookupStart\n  白屏时间"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" responseEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" fetchStart\n  首次可交互时间"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" domInteractive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" fetchStart\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v(" Ready 时间"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" domContentLoadEventEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" fetchStart\n  页面完全加载时间"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" loadEventStart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" fetchStart\n  http 头部大小： transferSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" encodedBodySize\n  重定向次数：performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirectCount\n  重定向耗时"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" redirectEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" redirectStart\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js内存使用占比 ：'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usedJSHeapSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("totalJSHeapSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/optimization/way.png",alt:"way.png"}})]),t._v(" "),s("h2",{attrs:{id:"timeline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timeline"}},[t._v("#")]),t._v(" Timeline")]),t._v(" "),s("p",[t._v("网页动画能够做到每秒 "),s("strong",[t._v("60")]),t._v(" 帧,就会跟显示器同步刷新,一秒之内进行 "),s("strong",[t._v("60")]),t._v(" 次重新渲染,每秒重新渲染的时间 不能超过 "),s("strong",[t._v("16.66")]),t._v(" 毫秒")]),t._v(" "),s("ul",[s("li",[t._v("蓝色:网络通信和 HTML 解析")]),t._v(" "),s("li",[t._v("黄色:JavaScript 执行时间")]),t._v(" "),s("li",[t._v("紫色:样式计算和布局,即重排")]),t._v(" "),s("li",[t._v("绿色:重绘")])]),t._v(" "),s("p",[s("strong",[t._v("window.requestAnimationFrame")]),t._v(" 下一次渲染")]),t._v(" "),s("p",[s("strong",[t._v("window.requestIdleCallback")]),t._v("  下几次渲染")]),t._v(" "),s("h2",{attrs:{id:"思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),s("p",[t._v("如何做一个小型的"),s("strong",[t._v("监控系统")]),t._v("?")]),t._v(" "),s("ul",[s("li",[t._v("通过上述的方法拿到自己想要的指标")]),t._v(" "),s("li",[t._v("去服务器上请求 一个 1KB 大小的图片 并带上这些指标参数")]),t._v(" "),s("li",[t._v("使用 navigator.sendBeacon() 发送")]),t._v(" "),s("li",[t._v("Node 读取服务器日志 过滤有效的接口")]),t._v(" "),s("li",[t._v("对接口参数整理并进行分析")]),t._v(" "),s("li",[t._v("开启定时任务每天凌晨12.00 开始读取数据并绘制出图表")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("为什么使用 "),s("strong",[t._v("navigator.sendBeacon()")]),t._v(" 进行发送")])]),t._v(" "),s("p",[s("strong",[t._v("navigator.sendBeacon()")]),t._v(" 方法可用于通过HTTP将少量数据异步传输到Web服务器 而不占用进程")]),t._v(" "),s("p",[t._v("发送可以使用的优先级")]),t._v(" "),s("ol",[s("li",[t._v("navigator.sendBeacon()")]),t._v(" "),s("li",[t._v("ajax")]),t._v(" "),s("li",[t._v("fetch")])])])}),[],!1,null,null,null);a.default=e.exports}}]);