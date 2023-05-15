//全局对象配置
threetime=+new Date()
debugger
// if (!isWindowSystem){
// // ldvm.toolsFunc.changeDescriptor(abc,"test",{configurable:true,writable:true});
// ldvm={
//     toolsFunc:{}
// }
// ldvm.toolsFunc.changeDescriptor=function(){}
// ldvm.toolsFunc.deleteProperty=function(){}
// }

// debugger
var myloglist = []
var myloglistindex = 0
var myundefinedlist = []
var bodavm = {

    "toolsFunc": {}, //功能函数相关,插件
    "envFunc": {},//环境相关
    "config": {},   //配置相关
    "memory": {},
    "toolsPlugin": {} //Plugin相关
}

bodavm.memory.tag = []          //存放标签
//存储all标签
bodavm.memory.all = []
bodavm.memory.formlist=[

] //存放form标签
bodavm.memory.globalobj = {}    //全局对象
bodavm.memory.cache={
    Navigator_storage_get:{
    },
    Navigator_bluetooth_get:{
    },
    Document_documentElement_get:{
    },
    Navigator_credentials_get:{},
    Document_body_get:{},
    Navigator_permissions_get:{},
    Navigator_locks_get:{},
    Navigator_getBattery:{},
    HTMLElement_style_get:{
        'this':''
    },
    Node_parentNode_get:{
        'res':{},
        'parent':''
    },
    Node_nextSibling_get:{},
    Document_head_get:{},
    Document_scrollingElement_get:{},
    HTMLIFrameElement_contentDocument_get:{},
    HTMLElement_style_get:{},
    location_ancestorOrigins_get:{
    
    }

}
bodavm.memory.collection={
    
}

// for (let che in bodavm.memory.cache){
//     bodavm.memory.cache[che]['this']=''
//     bodavm.memory.cache[che]['res']={}
// }

// debugger
bodavm.config.isdebug = false;  //是否开启debugger
bodavm.config.proxy = false; //是否代理
bodavm.config.settime_on=true   //是否开启settime
bodavm.config.isinit=true   //实现 var bobo__2 = {};bobo__2.__proto__ = Document.prototype;bobo__2.activeElement
// bodavm.config.getundefined=true  //暂未实现   


//网站为r4或者r5 设置为true 否则请关闭
bodavm.config.isrs = true  //判断当前网站是不是瑞数
//网站为r6 设置为true body设置为0 否则请把true改为false
bodavm.memory.rs6=false
bodavm.memory.rs6_body=0
bodavm.memory.contentWindow_keys=    [
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
    "credentialless",
    "caches",
    "cookieStore",
    "ondevicemotion",
    "ondeviceorientation",
    "ondeviceorientationabsolute",
    "launchQueue",
    "onbeforematch",
    "getScreenDetails",
    "queryLocalFonts",
    "showDirectoryPicker",
    "showOpenFilePicker",
    "showSaveFilePicker",
    "originAgentCluster",
    "speechSynthesis",
    "oncontentvisibilityautostatechange",
    "openDatabase",
    "webkitRequestFileSystem",
    "webkitResolveLocalFileSystemURL"
]  //过检测 Object.keys(iframe.contentWindow).length

bodavm.config.randomhook = false //hook随机值和时间
bodavm.config.printLog = true; //是否打开日志
// bodavm.memory.isproxy= {}
bodavm.memory.symbolProxy = Symbol("proxy")

bodavm.memory.symbolProperty = Symbol('Property')

bodavm.memory.symbolData = Symbol("data")

// if (bodavm.config.issymbolProperty && bodavm.config.proxy ){
bodavm.memory.filterProxyProp = ['hasOwnProperty', '__proto__', 'constructor', 'valueOf', bodavm.memory.symbolProperty, bodavm.memory.symbolProxy, bodavm.memory.symbolData, Symbol.toPrimitive, Symbol.toStringTag, "eval", 'toString', 'prototype'];
// }else{
// bodavm.memory.filterProxyProp =['prototype','hasOwnProperty',bodavm.memory.symbolProperty,bodavm.memory.symbolProxy,bodavm.memory.symbolData,Symbol.toPrimitive,Symbol.toStringTag, "eval"];// 需要过滤的属性
// }


// bodavm.memory.filterProxyProp=['toJSON','undefined','splice','String','fromCharCode','apply','prototype','__proto__','toString','Object','Array',"eval,'Symbol(Symbol.toStringTag)','Symbol.toStringTag','bodavm.memory.symbolData',"Symbol(Symbol.species),'Symbol(Symbol.hasInstance)'] //需要过滤 的属性
bodavm.memory.globalInit = {}
bodavm.memory.globalInit.jsonCookie = {};// json格式的cookie

bodavm.memory.userInit = {}

bodavm.memory.collection = {

}

// bodavm.memory.localStorage={};

bodavm.memory.asyncEvent = {
    HTMLElement: { onload: [
     
    ] }

};
bodavm.memory.globalInit.timeoutID = 0;
// "Verdana;Helvetica Neue LT Pro 35 Thin;tahoma;verdana;times new roman;Courier New;Microsoft Himalaya;helvetica;LG-FZKaTong-M19-V2.2;Georgia;georgia;courier new;Arial;arial;cursive;times;fantasy;courier;serif;monospace;Times New Roman"
bodavm.memory.globalInit.fontList = 
["SimHei", "SimSun", "NSimSun", "FangSong", "KaiTi", 'Verdana', 'Helvetica Neue LT Pro 35 Thin',
 'tahoma', 'verdana', 'times new roman', 'Courier New', 'Microsoft Himalaya', 'helvetica', 'LG-FZKaTong-M19-V2.2',
 'Georgia', 'georgia', 'courier new', 'Arial', 'arial', 'cursive', 'times', 'fantasy', 'courier',
  'serif', 'monospace', 'Times New Roman']

bodavm.memory.fontsize = {
  'SimHei':[640,160],
  'SimSun':[640,160],
  'NSimSun':[640,160],
  'FangSong':[640,160],
  'KaiTi':[640,160],
  'Verdana':[641,194],
  'Helvetica Neue LT Pro 35 Thin':[641,194],
  'tahoma':[565,193],
  'verdana':[641,194],
  'times new roman':[522,177],
  'Courier New':[768,181],
  'Microsoft Himalaya':[350,160],
  'helvetica':[560,179],
  'LG-FZKaTong-M19-V2.2':[560,179],
  'Georgia':[589,182],
  'georgia':[589,182],
  'courier new':[768,181],
  'Arial':[560,179],
  'arial':[560,179],
  'cursive':[640,160],
  'times':[522,177],
  'fantasy':[533,195],
  'courier':[768,181],
  'serif':[640,160],
  'monospace':[640,160],
  'Times New Roman':[522,177]
    
}
bodavm.memory.IDBRequest = {
    onerror: "",
    onupgradeneeded: '',
    onsuccess: '',
}
bodavm.memory.IDBOpenDBRequest = {
    onupgradeneeded: '',

}
bodavm.memory.estimate={
    quota: 51539605094,
    usage: 341236,
    indexedDB:341236
    
}

bodavm.memory.location={
    origin:"https://www.e-food.gr",
    hash:"",
    pathname:"/",
    search:"",
    href:"https://www.e-food.gr/",
    port:"",
    protocol:"https:",
    host:"www.e-food.gr",
    ancestorOrigins:{"0":"https://www.e-food.gr"},
    hostname:"www.e-food.gr"
};

bodavm.memory.document={
    URL:"https://www.e-food.gr/",
    referrer:"https://www.e-food.gr/",
    documentURI:"https://www.e-food.gr/",
    compatMode:"BackCompat",
    dir:"",
    title:'',
    designMode:"off",
    readyState:"loading",
    contentType:"text/html",
    inputEncoding:"UTF-8",
    domain:"www.e-food.gr",
    characterSet:"UTF-8",
    charset:"UTF-8",
    hidden:"false",
    onmousemove:null,
    onselectionchange:null,
    
};

bodavm.memory.htmldivelement={
    align:"undefined",

};

bodavm.memory.history={
    scrollRestoration:"auto"
};

bodavm.memory.screen={
    width:1440,
    height:960,
    availWidth:1440,
    availHeight:920,
    pixelDepth:24,
    colorDepth:24,
    availLeft:0,
    availTop:0,
    isExtended:false,
    orientation:{},
    onchange:null,
};

bodavm.memory.navigator={
    language:"zh-CN",
    userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
    appVersion:"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
    vendor:"Google Inc.",
    appName:"Netscape",
    appCodeName:"Mozilla",
    cookieEnabled:true,
    languages:["zh-CN","zh"],
    productSub:"20030107",
    userAgentData:{"brands":[{"brand":"Chromium","version":"112"},{"brand":"Google Chrome","version":"112"},{"brand":"Not:A-Brand","version":"99"}],"mobile":false,"platform":"Windows"},
    xr:{},
    platform:'Win32',
    webkitPersistentStorage:{},
    connection:{},
    javaEnabled:false,
    product:'Gecko',
    vendorSub:"",
    deviceMemory:8,
    maxTouchPoints:0
};
bodavm.memory.window={
    name:"",
    innerWidth:1440,
    innerHeight:817,
    origin:"https://www.e-food.gr",
    outerWidth:1440,
    outerHeight:920,
    defaultStatus:undefined,
    defaultstatus:undefined,
    devicePixelRatio:1.5,
    isSecureContext:true,
    length:0,
    status:"",
    onmessage:null,
    onbeforeunload:null,
    closed:false,
    isSecureContext:true,
    onappinstalled:null,
    onbeforeinstallprompt:null,
    onbeforexrselect:null,
    onabort:null,
    onblur:null,
    oncancel:null,
    oncanplay:null,
    oncanplaythrough:null,
    onsearch:null,
    opener:null,
    // frameElement:[object HTMLIFrameElement],
    

};
bodavm.memory.localStorage={}

bodavm.memory.Performance={
    'getEntriesByType':[],
    'timeOrigin':1682672438597.305



};

