(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{489:function(t,s,n){"use strict";n.r(s);var a=n(25),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"workloopsync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#workloopsync"}},[t._v("#")]),t._v(" workLoopSync")]),t._v(" "),n("p",[t._v("前面已经讲过在 "),n("RouterLink",{attrs:{to:"/react/scheduleWork.html#performsyncworkonroot"}},[t._v("performSyncWorkOnRoot")]),t._v(" 分别会调用 "),n("strong",[t._v("workLoopSync")]),t._v(" 和 "),n("strong",[t._v("finishSyncRender")]),t._v(" 我们先从 "),n("strong",[t._v("开始")])],1),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("workLoopSync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 处理了一个Fiber， 返回下一个fiber，")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  采用深度优先遍历，先找child，sibling fiber")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    workInProgress "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这个地方就是一个 "),n("strong",[t._v("while")]),t._v(" 循环调用 "),n("strong",[t._v("performUnitOfWork")]),t._v(" 传入我们之前生成的 "),n("strong",[t._v("workInProgress")])]),t._v(" "),n("h2",{attrs:{id:"performunitofwork"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#performunitofwork"}},[t._v("#")]),t._v(" performUnitOfWork")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("unitOfWork"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一次render时, unitOfWork=HostRootFiber, alternate已经初始化")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" current "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// current.alternate => 上一次构建的这个Fiber节点")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("startWorkTimer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCurrentDebugFiberInDEV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enableProfilerTimer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" ProfileMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("startProfilerTimer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" renderExpirationTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopProfilerTimerIfRunningAndRecordDelta")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建Fiber节点， 打上了EffectTag标志")]),t._v("\n    next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" renderExpirationTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resetCurrentDebugFiberInDEV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memoizedProps "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pendingProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有next，意味着fiber tree已经构建完毕了")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("completeUnitOfWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  ReactCurrentOwner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("performUnitOfWork")]),t._v(" 对传入的 "),n("strong",[t._v("workInProgress")]),t._v(" Fiber节点进行深度优先循环处理")]),t._v(" "),n("ol",[n("li",[t._v("调用beginWork")]),t._v(" "),n("li",[t._v("创建FiberNode, 打上EffectTag标记")]),t._v(" "),n("li",[t._v("深度优先遍历")]),t._v(" "),n("li",[t._v("如果fiber创建完了，调用completeUnitOfWork")])]),t._v(" "),n("h2",{attrs:{id:"流程概览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程概览"}},[t._v("#")]),t._v(" 流程概览")]),t._v(" "),n("p",[t._v("上面这些可以把流程简化,如下:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("workLoop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("deadline")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" shouldYield "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否让出时间片或者控制权")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextUnitOfWork "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("shouldYield"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        nextUnitOfWork "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextUnitOfWork"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        shouldYield "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deadline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeRemaining")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//没有时间了，就要让出控制权")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果时间片到期了还有任务没有完成，就需要请求浏览器再次调度")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("nextUnitOfWork "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" workInProgressRoot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'render阶段结束'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//完成之后提交")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitRoot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每一帧都要执行")]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestIdleCallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workLoop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("timeout"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("workInProgress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("completeUnitOfWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" next\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestIdleCallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workLoop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("timeout"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("performUnitOfWork")]),t._v(" 方法会创建下一个 Fiber 节点并赋值给 "),n("strong",[t._v("workInProgress")]),t._v(",并将 "),n("strong",[t._v("workInProgress")]),t._v(" 与已创建的Fiber节点连接起来构成Fiber树。在 React 中自己实现了 "),n("a",{attrs:{href:"/blog/framework/SchedulerHostConfig.default"}},[t._v("requestIdleCallback")]),t._v(",这样就实现了可中断的递归，所以performUnitOfWork的工作可以分为两部分："),n("font",{attrs:{color:"red"}},[t._v("递")]),t._v("和"),n("font",{attrs:{color:"red"}},[t._v("归")])],1),t._v(" "),n("h3",{attrs:{id:"递阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#递阶段"}},[t._v("#")]),t._v(" 递阶段")]),t._v(" "),n("p",[t._v("首先从 "),n("strong",[t._v("rootFiber")]),t._v(" 开始向下深度优先遍历。为遍历到的每个 "),n("strong",[t._v("Fiber")]),t._v(" 节点调用 "),n("a",{attrs:{href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberBeginWork.new.js#L3058",target:"_blank",rel:"noopener noreferrer"}},[t._v("beginWork"),n("OutboundLink")],1),t._v("方法。")]),t._v(" "),n("p",[t._v("该方法会根据传入的Fiber节点创建子Fiber节点，并将这两个Fiber节点连接起来。")]),t._v(" "),n("p",[t._v("当遍历到叶子节点（即没有子组件的组件）时就会进入“归”阶段。")]),t._v(" "),n("h3",{attrs:{id:"归阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#归阶段"}},[t._v("#")]),t._v(" 归阶段")]),t._v(" "),n("p",[t._v("在"),n("strong",[t._v("归")]),t._v("阶段会调用 "),n("a",{attrs:{href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L652",target:"_blank",rel:"noopener noreferrer"}},[t._v("completeWork"),n("OutboundLink")],1),t._v("处理Fiber节点。")]),t._v(" "),n("p",[t._v("当某个Fiber节点执行完 "),n("strong",[t._v("completeWork")]),t._v(",如果其存在兄弟Fiber节点（即fiber.sibling !== null），会进入其兄弟Fiber的 "),n("strong",[t._v("递")]),t._v(" 阶段。")]),t._v(" "),n("p",[t._v("如果不存在兄弟 Fiber , 会进入父级Fiber的“归”阶段。")]),t._v(" "),n("p",[t._v("“递”和“归”阶段会交错执行直到“归”到rootFiber。至此，render阶段的工作就结束了。")]),t._v(" "),n("h3",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),n("p",[t._v("如下的 jsx 会生成以下的 fiber 结构")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      i am\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("KaSong"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nReactDOM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("对应的 Fiber 树结构:\n"),n("img",{attrs:{src:"/react/fibertree.jpeg",alt:"fibertree"}})]),t._v(" "),n("p",[t._v("这个结构刚好对应我们之前说的 "),n("RouterLink",{attrs:{to:"/react/Fiber.html"}},[t._v("Fiber")]),t._v(" 的数据结构")],1),t._v(" "),n("p",[t._v("render阶段会依次执行:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('1. rootFiber beginWork\n2. App Fiber beginWork\n3. div Fiber beginWork\n4. "i am" Fiber beginWork\n5. "i am" Fiber completeWork\n6. span Fiber beginWork\n7. span Fiber completeWork\n8. div Fiber completeWork\n9. App Fiber completeWork\n10. rootFiber completeWork\n')])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("React 只会在这个节点有兄弟节点的时候会创建 fiber 为独生子的时候不会创建fiber 直接返回null,这是React 的一个性能优化")])]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("React 会根据 jsx 编译生成的数据结构 生成 Fiber 树, 在创建过程中会从根到底生成,然后再回到根节点。 在此过程中会调用 "),n("strong",[t._v("beginWork")]),t._v(" 和 "),n("strong",[t._v("completeWork")]),t._v(" 后面再具体分析这两个方法如何工作的")])])}),[],!1,null,null,null);s.default=r.exports}}]);