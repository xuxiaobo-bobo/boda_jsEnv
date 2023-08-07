//全局对象配置
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
bodavm.memory.myFunction_toString_symbol=''
bodavm.toolsFunc.setProtoCache={}
bodavm.memory.initDone=false  //标签实现Illegal invocationat报错 配合issymbolProperty一起使用
bodavm.config.issymbolProperty = true  //改变这个值true:开,false:关闭 //过检测 r={};r.__proto__=document;r.location以及var cc={};cc.__proto__=Storage.prototype cc.setItem('name',123)  可能存在误报,报错后,查看报错堆栈
bodavm.memory.tag = []          //存放标签

bodavm.memory.innerListener=[]  //存放事件内创建的事件
bodavm.memory.listenerFlag= 'init' //判断当前事件的状态
bodavm.memory.globalobj = {}    //全局对象
bodavm.memory.domParser = ''    //存在parse5解析的dom
bodavm.memory.domParserScriptFlag = true  //判断当前是否处于domParserScriptFlag  script标签执行
bodavm.memory.notDefined = {}  //存在浏览器中不存在dom  如Database等
bodavm.memory.cache = {
    'OscillatorNode_frequency_get':{
        'res':'',
        'this':''
    },
    'MediaDevices_enumerateDevices':{
        'res':''
    },
    'Navigator_mediaDevices_get':'',
    'MessagePort_onmessage_set':{
        'res':'',
        'this':''
    },
    'Navigator_wakeLock_get':'',
    "window_customElements_get": '',
    "Document_body_get": {
        'this': '',
        "res": '',
        'domParserbody': ''
    },
    "Document_getElementById": {
        "id": {},
    },
    "Document_getElementsByName": {
        "eleName": {},
    },
    "Element_children_get":{},
    "Document_head_get": {
        'res': ''
    },
    'location': null,
    "Document_getElementsByName": "",
    "MessageChannel_port2_get": {
        'this': '',
        "res": ''
    },
    "MessageChannel_port1_get": {
        'this': '',
        "res": ''
    },
    "Element_getElementsByTagName": {
    },
    "Document_scripts_get":{

    },
    "Document_getElementsByClassName":{
        'this':'',
        'res':'',
        'ele':''
    },
    "Node_firstChild_get": {
        "this": '',
        "res": ''
    },
    "Node_nextSibling_get":{
        'this':'',
        'res':''
    },
    "Document_getElementsByTagName": {
    },
    "Node_parentNode_get": {
        'this': '',
        "res": ''
    },
    "Navigator_webkitPersistentStorage_get": {
        'this': '',
        "res": ''
    },
    "HTMLElement_style_get": {
        "this": '',
        "res": ''
    },
    "Navigator_getBattery": {
    },
    "Node_parentElement_get": {
        "this": '',
        "res": ''
    },
    "Navigator_connection_get": '',
    "window_document_get": '',
    "window_localStorage_get": '',
    "Navigator_plugins_get": '',
    "Navigator_locks_get": '',
    "Node_childNodes_get":{
        'this':'',
        'res':''
    }
} //变量缓存
bodavm.config.isdebug = false;  //是否开启debugger
// bodavm.config.getundefined=true  //暂未实现   
bodavm.config.proxy = false; //是否代理
bodavm.config.randomhook = false //hook随机值和时间
bodavm.config.printLog = true; //是否打开日志
bodavm.memory.proxyCache = {
 'enabledPlugin':'',
 'PluginArray':{},
 'Plugin':[],
 'PluginTimes':1
}//代理set属性的缓存

bodavm.memory.listenerProxy = {
    'mouseup':{
        'res':''
    },
    'mousedown':{
        'res':""
    },
    'mousemove': {
        'res': ''
    },
    'mouseup': {
        'res': ''
    },
    "click": {
        'res': ''
    },
    "load": {
        'res': ''
    },
    "readystatechange":{
        'res':''
    },
    "onload":{
        'res':''
    },
    "deviceorientation":{
        'res':''
    }
}//键盘事件等代理 这个代理默认开启 

bodavm.memory.asyncEvent = {
    HTMLElement: { onload: [],onkeydown:[],onchange:[],onclick:[],onerror:[],onresize:[] ,onmouseenter:[]},  //html元素事件 暂时只执行onload 其他的存放
    window:{onerror:[]},
    websocket:{onmessage:[]},
    document:{onmousemove:[]},
    MessageChannel:{onmessage:[]},
    OfflineAudioContext:{oncomplete :[]}

}; //异步事件存储  包含load等等

bodavm.memory.contentWindow_keys = [
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
    "onbeforetoggle",
    "getScreenDetails",
    "queryLocalFonts",
    "showDirectoryPicker",
    "showOpenFilePicker",
    "showSaveFilePicker",
    "originAgentCluster",
    "speechSynthesis",
    "oncontentvisibilityautostatechange",
    "onscrollend",
    "openDatabase",
    "webkitRequestFileSystem",
    "webkitResolveLocalFileSystemURL"
]//过检测 Object.keys(iframe.contentWindow).length


// bodavm.memory.isproxy= {}
bodavm.memory.symbolProxy = Symbol("proxy")
bodavm.memory.symbolProperty = Symbol('Property')

bodavm.memory.symbolData = Symbol("data")

bodavm.memory.filterProxyProp = ['__proto__', 'constructor', 'valueOf', bodavm.memory.symbolProperty, bodavm.memory.symbolProxy, bodavm.memory.symbolData, Symbol.toPrimitive, Symbol.toStringTag, "eval", 'toString', 'prototype','Symbol(data)',Symbol('data'),Symbol('Symbol.toStringTag'),"Symbol(Symbol.toStringTag)",bodavm.memory.myFunction_toString_symbol];


//用来保存当前对象上的原型属性
bodavm.memory.globalInit = {}
bodavm.memory.globalInit.jsonCookie = {};// json格式的cookie
bodavm.config.settime_on = true  //执行定时器
bodavm.memory.userInit = {}


//存储tag标签
bodavm.memory.all = []
bodavm.memory.collection = {}
// bodavm.memory.localStorage={};

//存储input标签 过form检测
bodavm.memory.form = []


bodavm.memory.iframe = {
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


// bodavm.memory.htmlElement = {
//     "onresize": null
// }
bodavm.memory.globalInit.timeoutID = 0;
// "Verdana;Helvetica Neue LT Pro 35 Thin;tahoma;verdana;times new roman;Courier New;Microsoft Himalaya;helvetica;LG-FZKaTong-M19-V2.2;Georgia;georgia;courier new;Arial;arial;cursive;times;fantasy;courier;serif;monospace;Times New Roman"
bodavm.memory.globalInit.fontList = ["SimHei", "SimSun", "NSimSun", "FangSong", "KaiTi", 'Verdana', 'Helvetica Neue LT Pro 35 Thin', 'tahoma', 'verdana', 'times new roman', 'Courier New', 'Microsoft Himalaya', 'helvetica', 'LG-FZKaTong-M19-V2.2', 'Georgia', 'georgia', 'courier new', 'Arial', 'arial', 'cursive', 'times', 'fantasy', 'courier', 'serif', 'monospace', 'Times New Roman', '"MT Extra", monospace', '"MT Extra", sans-serif', '"MT Extra", serif', 'Sylfaen, monospace', 'Sylfaen, sans-serif', 'Sylfaen, serif', '"Cambria Math", monospace', '"Cambria Math", sans-serif', '"Cambria Math", serif', 'SimSun-ExtB, sans-serif', 'PMingLiU-ExtB, monospace', 'PMingLiU-ExtB, sans-serif', 'PMingLiU-ExtB, serif', 'Marlett, monospace', 'Marlett, sans-serif', 'Marlett, serif', 'SimHei, sans-serif', '"Arial Narrow", monospace', '"Arial Narrow", sans-serif', '"Arial Narrow", serif', '"Microsoft JhengHei", monospace', '"Microsoft JhengHei", sans-serif', '"Microsoft JhengHei", serif', 'MingLiU-ExtB, sans-serif', 'MingLiU_HKSCS-ExtB, sans-serif', 'Calibri, monospace', 'Calibri, sans-serif', 'Calibri, serif', '"Segoe UI Symbol", monospace', '"Segoe UI Symbol", sans-serif', '"Segoe UI Symbol", serif', '"Arial Black", monospace', '"Arial Black", sans-serif', '"Arial Black", serif', 'Consolas, monospace', 'Consolas, sans-serif', 'Consolas, serif', 'Gabriola, monospace', 'Gabriola, sans-serif', 'Gabriola, serif', 'FangSong, sans-serif', 'KaiTi, sans-serif', 'NSimSun, sans-serif', '"Malgun Gothic", monospace', '"Malgun Gothic", sans-serif', '"Malgun Gothic", serif', '"MS UI Gothic", monospace', '"MS UI Gothic", sans-serif', '"MS UI Gothic", serif', '"Lucida Sans Unicode", monospace', '"Lucida Sans Unicode", sans-serif', '"Lucida Sans Unicode", serif']
bodavm.memory.fontsize = {
    'SimHei': [640, 160],
    'SimSun': [640, 160],
    'NSimSun': [640, 160],
    'FangSong': [640, 160],
    'KaiTi': [640, 160],
    'Verdana': [641, 194],
    'Helvetica Neue LT Pro 35 Thin': [641, 194],
    'tahoma': [565, 193],
    'verdana': [641, 194],
    'times new roman': [522, 177],
    'Courier New': [768, 181],
    'Microsoft Himalaya': [350, 160],
    'helvetica': [560, 179],
    'LG-FZKaTong-M19-V2.2': [560, 179],
    'Georgia': [589, 182],
    'georgia': [589, 182],
    'courier new': [768, 181],
    'Arial': [560, 179],
    'arial': [560, 179],
    'cursive': [640, 160],
    'times': [522, 177],
    'fantasy': [533, 195],
    'courier': [768, 181],
    'serif': [640, 160],
    'monospace': [640, 160],
    'Times New Roman': [522, 177],
    "\"MT Extra\", monospace": [681,276],
    "\"MT Extra\", sans-serif": [692,276],
    "\"MT Extra\", serif": [681,276],
    "Sylfaen, monospace": [556,211],
    "Sylfaen, sans-serif": [556,211],
    "Sylfaen, serif": [556,211],
    "\"Cambria Math\", monospace": [558,160],
    "\"Cambria Math\", sans-serif": [558,160],
    "\"Cambria Math\", serif": [558, 160],
    "SimSun-ExtB, sans-serif": [640, 160],
    "PMingLiU-ExtB, monospace": [501, 160],
    "PMingLiU-ExtB, sans-serif": [501, 160],
    "PMingLiU-ExtB, serif": [501, 160],
    "Marlett, monospace": [1200, 160],
    "Marlett, sans-serif": [1212, 160],
    "Marlett, serif": [1200, 160],
    "SimHei, sans-serif": [640, 160],
    "\"Arial Narrow\", monospace": [560, 179],
    "\"Arial Narrow\", sans-serif": [560, 179],
    "\"Arial Narrow\", serif": [560, 179],
    "\"Microsoft JhengHei\", monospace": [603, 213],
    "\"Microsoft JhengHei\", sans-serif": [603, 213],
    "\"Microsoft JhengHei\", serif": [603, 213],
    "MingLiU-ExtB, sans-serif": [640, 160],
    "MingLiU_HKSCS-ExtB, sans-serif": [640, 160],
    "Calibri, monospace": [524, 195],
    "Calibri, sans-serif": [524, 195],
    "Calibri, serif": [524, 195],
    "\"Segoe UI Symbol\", monospace": [562, 213],
    "\"Segoe UI Symbol\", sans-serif": [562, 213],
    "\"Segoe UI Symbol\", serif": [562, 213],
    "\"Arial Black\", monospace": [725, 225],
    "\"Arial Black\", sans-serif": [725, 225],
    "\"Arial Black\", serif": [725, 225],
    "Consolas, monospace": [704, 187],
    "Consolas, sans-serif": [704, 187],
    "Consolas, serif": [704, 187],
    "Gabriola, monospace": [387, 160],
    "Gabriola, sans-serif": [387, 160],
    "Gabriola, serif": [387, 160],
    "FangSong, sans-serif": [640, 160],
    "KaiTi, sans-serif": [640, 160],
    "NSimSun, sans-serif": [640, 160],
    "\"Malgun Gothic\", monospace": [572, 213],
    "\"Malgun Gothic\", sans-serif": [572, 213],
    "\"Malgun Gothic\", serif": [572, 213],
    "\"MS UI Gothic\", monospace": [571, 160],
    "\"MS UI Gothic\", sans-serif": [571, 160],
    "\"MS UI Gothic\", serif": [571, 160],
    "\"Lucida Sans Unicode\", monospace": [648, 246],
    "\"Lucida Sans Unicode\", sans-serif": [648, 246],
    "\"Lucida Sans Unicode\", serif": [648, 246]


}
bodavm.memory.scroll = [0, 50]   //模仿浏览器滚动 ,默认为0,50
bodavm.memory.HTMLAnchorElement = {
    "hash": '',
    "host": '',
    "hostname": '',
    "href": '',
    "origin": '',
    'pathname': '',
    'port': '',
    'protocol': '',
    'search': ''

}
bodavm.memory.font = {
    "font-family": '',
    "fontFamily": ''
}
bodavm.memory.IDBRequest = {
    onerror: "",
    onupgradeneeded: '',
    onsuccess: '',
}
bodavm.memory.IDBOpenDBRequest = {
    onupgradeneeded: '',

}
//上面代码别动


//以下代码配合changeDom一起使用,获取网站变量值


bodavm.memory.location={
    origin:"http://qikan.cqvip.com",
    hash:"",
    pathname:"/Qikan/Search/Advance",
    search:"?from=index",
    href:"http://qikan.cqvip.com/Qikan/Search/Advance?from=index",
    port:"",
    protocol:"http:",
    host:"qikan.cqvip.com",
    ancestorOrigins:'{}',
    hostname:"qikan.cqvip.com",
    _href:"http://qikan.cqvip.com/Qikan/Search/Advance?from=index",
    _search:"?from=index",

};

bodavm.memory.document={
    URL:"http://qikan.cqvip.com/Qikan/Search/Advance?from=index",
    referrer:"http://qikan.cqvip.com/Qikan/Search/Advance?from=index",
    documentURI:"http://qikan.cqvip.com/Qikan/Search/Advance?from=index",
    compatMode:"CSS1Compat",
    dir:"",
    title:'',
    designMode:"off",
    readyState:"loading",
    contentType:"text/html",
    inputEncoding:"UTF-8",
    domain:"qikan.cqvip.com",
    characterSet:"UTF-8",
    charset:"UTF-8",
    hidden:"false",
    onmousemove:null,
    onselectionchange:null,
    cookie:''
    
};

bodavm.memory.cookies_=bodavm.memory.document['cookie'].split(';')
if (bodavm.memory.cookies_[0]){
    for (var i = 0; i < bodavm.memory.cookies_.length; i++) {
        var cookie = bodavm.memory.cookies_[i].split("=");
        bodavm.memory.globalInit.jsonCookie[cookie[0]] = cookie[1];
      }
}



bodavm.memory.htmldivelement={
     align:"undefined",

};

bodavm.memory.history={
    scrollRestoration:"auto"
};

bodavm.memory.screen={
    pixelDepth:24,
    colorDepth:24,
    availLeft:0,
    availTop:0,
    isExtended:undefined,
    orientation:{},
    onchange:undefined,
};

bodavm.memory.navigator={
    language:"zh-CN",
    userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    appVersion:"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    vendor:"Google Inc.",
    appName:"Netscape",
    appCodeName:"Mozilla",
    cookieEnabled:true,
    languages:["zh-CN","zh"],
    productSub:"20030107",
    userAgentData:undefined,
    xr:undefined,
    platform:'Win32',
    webkitPersistentStorage:{},
    connection:{},
    javaEnabled:false,
    product:'Gecko',
    vendorSub:"",
    deviceMemory:undefined,
    maxTouchPoints:0
};
bodavm.memory.window={
    name:"$_YWTU=tJwmBQ4eczEzEKWGu0Ugf4dnMOJlHAGaVpPh8wtqHe3&$_YVTX=JG&vdFm=",
    origin:"http://qikan.cqvip.com",
    defaultStatus:undefined,
    defaultstatus:undefined,
    devicePixelRatio:1.5,
    isSecureContext:false,
    length:0,
    status:"",
    onmessage:null,
    onbeforeunload:null,
    closed:false,
    isSecureContext:false,
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
    // frameElement:null,
    isSecureContext:false,
    // customElements:null
    

};


bodavm.memory.localStorage={"length":0}


bodavm.memory.Performance={
    'getEntriesByType':[],
    'timeOrigin':1691400728172.6



};

