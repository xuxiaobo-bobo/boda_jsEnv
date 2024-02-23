
globalThis.bodaEnv = {
    "toolsFunc": {}, //功能函数相关,插件
    "envFunc": {},//环境相关
    "config": {},   //配置相关
    "memory": {},
    "toolsPlugin": {} //Plugin相关
}
bodaEnv.memory.regexRule={
    'url':/[\\\/]([^\\\/?]+)(?:\?|$)/ //https http://xxxxx//xx.js     //xxx//xx.js?xxxx
}  //正则匹配    
bodaEnv.memory.globlProtoObj={}
bodaEnv.config.proxy = false; //是否代理 只会处理 toolsFunc.proxy2 方法 基本上不用
bodaEnv.config.randomhook = false //hook随机值和时间
bodaEnv.memory.contentWindow_keys=[
    "window",
    "self",
    "document",
    "name",
    "location",
    "customElements",
    "history",
    "navigation",
    "locationbar",
    "menubar",
    "personalbar",
    "scrollbars",
    "statusbar",
    "toolbar",
    "status",
    "closed",
    "frames",
    "length",
    "top",
    "opener",
    "parent",
    "frameElement",
    "navigator",
    "origin",
    "external",
    "screen",
    "innerWidth",
    "innerHeight",
    "scrollX",
    "pageXOffset",
    "scrollY",
    "pageYOffset",
    "visualViewport",
    "screenX",
    "screenY",
    "outerWidth",
    "outerHeight",
    "devicePixelRatio",
    "clientInformation",
    "screenLeft",
    "screenTop",
    "styleMedia",
    "onsearch",
    "isSecureContext",
    "trustedTypes",
    "performance",
    "onappinstalled",
    "onbeforeinstallprompt",
    "crypto",
    "indexedDB",
    "sessionStorage",
    "localStorage",
    "onbeforexrselect",
    "onabort",
    "onbeforeinput",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncuechange",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onformdata",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onmousewheel",
    "onpause",
    "onplay",
    "onplaying",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onscroll",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onslotchange",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onvolumechange",
    "onwaiting",
    "onwebkitanimationend",
    "onwebkitanimationiteration",
    "onwebkitanimationstart",
    "onwebkittransitionend",
    "onwheel",
    "onauxclick",
    "ongotpointercapture",
    "onlostpointercapture",
    "onpointerdown",
    "onpointermove",
    "onpointerrawupdate",
    "onpointerup",
    "onpointercancel",
    "onpointerover",
    "onpointerout",
    "onpointerenter",
    "onpointerleave",
    "onselectstart",
    "onselectionchange",
    "onanimationend",
    "onanimationiteration",
    "onanimationstart",
    "ontransitionrun",
    "ontransitionstart",
    "ontransitionend",
    "ontransitioncancel",
    "onafterprint",
    "onbeforeprint",
    "onbeforeunload",
    "onhashchange",
    "onlanguagechange",
    "onmessage",
    "onmessageerror",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpopstate",
    "onrejectionhandled",
    "onstorage",
    "onunhandledrejection",
    "onunload",
    "crossOriginIsolated",
    "scheduler",
    "alert",
    "atob",
    "blur",
    "btoa",
    "cancelAnimationFrame",
    "cancelIdleCallback",
    "captureEvents",
    "clearInterval",
    "clearTimeout",
    "close",
    "confirm",
    "createImageBitmap",
    "fetch",
    "find",
    "focus",
    "getComputedStyle",
    "getSelection",
    "matchMedia",
    "moveBy",
    "moveTo",
    "open",
    "postMessage",
    "print",
    "prompt",
    "queueMicrotask",
    "releaseEvents",
    "reportError",
    "requestAnimationFrame",
    "requestIdleCallback",
    "resizeBy",
    "resizeTo",
    "scroll",
    "scrollBy",
    "scrollTo",
    "setInterval",
    "setTimeout",
    "stop",
    "structuredClone",
    "webkitCancelAnimationFrame",
    "webkitRequestAnimationFrame",
    "chrome",
    "fence",
    "caches",
    "cookieStore",
    "ondevicemotion",
    "ondeviceorientation",
    "ondeviceorientationabsolute",
    "launchQueue",
    "sharedStorage",
    "documentPictureInPicture",
    "onbeforematch",
    "getScreenDetails",
    "queryLocalFonts",
    "showDirectoryPicker",
    "showOpenFilePicker",
    "showSaveFilePicker",
    "originAgentCluster",
    "credentialless",
    "speechSynthesis",
    "oncontentvisibilityautostatechange",
    "onscrollend",
    "webkitRequestFileSystem",
    "webkitResolveLocalFileSystemURL"
] //iframe 下的keys



bodaEnv.memory.undefined=bodaallundefined
bodaEnv.memory.jsonCookie = {};// json格式的cookie
bodaEnv.memory.symbolData=Symbol('data')
bodaEnv.memory.WeakMap=new WeakMap()
bodaEnv.memory.ObjWeakMapProtoAttr=new WeakMap()

bodaEnv.memory.window={
    'onload':null
}
bodaEnv.memory.timeoutID =0
bodaEnv.memory.asyncEvent={
    setTimeout:[],
    MessageChannel:{
        onmessage:[]
    },
}

bodaEnv.memory.asyncEvent['listener']={
    'focus':[],
    'mousemove':[],
    'mousedown':[],
    'mouseup':[],
    'load':[],
    'deviceorientation':[],
    'message':[],
    'click':[],
    'input':[],
    'focusout':[],
    'focusin':[],
    'error':[],
    'onmousedown':[],
    'onselectstart':[],
    'onload':[],
    'onclick':[],
    'onerror':[],
    'onaudioprocess':[],
    'onselectionchange':[],
    'onresize':[],
    'onmouseenter':[],
    'onmousemove':[]



}
bodaEnv.memory.asyncEvent['websocket']={
    'onmessage':[]
}
bodaEnv.memory.allAttrObj=[] //存放所有getObjWeakMapProtoAttr setObjWeakMapProtoAttr  对象
bodaEnv.memory.filterProxyProp=['hasOwnProperty','hasOwnProperty_bo','__proto__', 'constructor', 'valueOf', bodaEnv.memory.symbolProperty, bodaEnv.memory.symbolProxy, bodaEnv.memory.symbolData, Symbol.toPrimitive, Symbol.toStringTag, "eval", 'toString', 'prototype','Symbol(data)',Symbol('data'),Symbol('Symbol.toStringTag'),"Symbol(Symbol.toStringTag)",bodaEnv.memory.myFunction_toString_symbol];
bodaEnv.memory.collection={}  //存放collction 
bodaEnv.memory.childrenCollectionMap=new Map()//存放Element.children
bodaEnv.memory.classListMap=new Map()  //存放classList
bodaEnv.memory.nodeListMap=new Map()  //存放nodeList
bodaEnv.memory.RTCPeerConnection=[]
bodaEnv.memory.scroll=[0,0]
bodaEnv.memory.all=[]
bodaEnv.memory.IDBRequest={}
bodaEnv.memory.IDBOpenDBRequest={}


bodaEnv.memory.iframe = {
    "contentWindow":[],
    "contentDocument": {
        'this': '',
        'res': ''
    },
    "thisWindow": {
        "this": [],
        // "res":''
    }
}  //存放iframe相关