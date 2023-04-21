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
    HTMLIFrameElement_contentDocument_get:{}

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

bodavm.config.randomhook = true //hook随机值和时间
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
        function(){console.log(1111)},
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
    origin:"file://",
    hash:"",
    pathname:"/C:/Users/bobo/Desktop/%E9%98%BF%E9%87%8C%E6%BB%91%E5%9D%97.html",
    search:"",
    href:"file:///C:/Users/bobo/Desktop/%E9%98%BF%E9%87%8C%E6%BB%91%E5%9D%97.html",
    port:"",
    protocol:"file:",
    host:"",
    ancestorOrigins:"{}",
    hostname:""
};

bodavm.memory.document={
    URL:"file:///C:/Users/bobo/Desktop/%E9%98%BF%E9%87%8C%E6%BB%91%E5%9D%97.html",
    referrer:"",
    documentURI:"file:///C:/Users/bobo/Desktop/%E9%98%BF%E9%87%8C%E6%BB%91%E5%9D%97.html",
    compatMode:"CSS1Compat",
    dir:"",
    title:'Document',
    designMode:"off",
    readyState:"complete",
    contentType:"text/html",
    inputEncoding:"UTF-8",
    domain:"",
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
    origin:"null",
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
    frameElement:null,
    

};
bodavm.memory.localStorage={}

bodavm.memory.Performance={
    'getEntriesByType':[{"name":"https://g.alicdn.com/sd/ncpc/nc.js?t=1678759200000","entryType":"resource","startTime":169.20000000018626,"duration":19.600000000093132,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":169.20000000018626,"domainLookupStart":169.20000000018626,"domainLookupEnd":169.20000000018626,"connectStart":169.20000000018626,"secureConnectionStart":169.20000000018626,"connectEnd":169.20000000018626,"requestStart":173.70000000018626,"responseStart":184.89999999990687,"responseEnd":188.8000000002794,"transferSize":0,"encodedBodySize":57254,"decodedBodySize":220966,"responseStatus":0,"serverTiming":[]},{"name":"https://g.alicdn.com/sd/nch5/index.js?t=1678759200000","entryType":"resource","startTime":169.89999999990687,"duration":131.3000000002794,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":169.89999999990687,"domainLookupStart":184.20000000018626,"domainLookupEnd":195.89999999990687,"connectStart":195.89999999990687,"secureConnectionStart":216.60000000009313,"connectEnd":247.89999999990687,"requestStart":248.10000000009313,"responseStart":283.89999999990687,"responseEnd":301.20000000018626,"transferSize":44312,"encodedBodySize":44012,"decodedBodySize":138349,"responseStatus":0,"serverTiming":[]},{"name":"https://g.alicdn.com/AWSC/AWSC/awsc.js","entryType":"resource","startTime":313,"duration":8.399999999906868,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":313,"domainLookupStart":313,"domainLookupEnd":313,"connectStart":313,"secureConnectionStart":313,"connectEnd":313,"requestStart":315.5,"responseStart":320.20000000018626,"responseEnd":321.39999999990687,"transferSize":0,"encodedBodySize":3547,"decodedBodySize":11985,"responseStatus":0,"serverTiming":[]},{"name":"https://gm.mmstat.com/fsp.1.1?code=13&msg=init%20monitor%3B&pid=sufeiPunish&page=file%3A%2F%2F%2FC%3A%2FUsers%2Fbobo%2FDesktop%2F%25E9%2598%25BF%25E9%2587%258C%25E6%25BB%2591%25E5%259D%2597.html&query=&hash=&referrer=&title=Document&ua=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36&c1=FFFF0N0N000000009594%3A1682047685984%3A0.48000457320939005&c2=FFFF0N0N000000009594","entryType":"resource","startTime":313.60000000009313,"duration":56.89999999990687,"initiatorType":"img","nextHopProtocol":"","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":313.60000000009313,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"secureConnectionStart":0,"connectEnd":0,"requestStart":0,"responseStart":0,"responseEnd":370.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"responseStatus":0,"serverTiming":[]},{"name":"https://gm.mmstat.com/fsp.1.1?code=13&msg=class%3D_nc%3Dnc_1-stage-1class%3Dstagestage1style%3Dsplay%3Ablock%3Bclass%3Dslerclass%3Dlabel%E5%8A%A0%E8%BD%BD%E4%B8%AD...class%3Dtrackclass%3Dbg-greenclass%3Dbuttonclass%3Dconnc-loangnc-confontcon-loa-c%3Dnc_1_n1t%3Dnc_1-stage-2class%3Dstagestage2style%3Dsplay%3Anone%3Bclass%3Dtextboxnputclass%3Dnputtype%3Dtextmaxlength%3D6autocomplete%3Doffautocorrect%3Doffautocaptalze%3Doffspellcheck%3Dfalseclass%3Dplaceholer%E9%AA%8C%E8%AF%81%E7%A0%81class%3Dcontpnc-confontcon-messageclass%3Dconclearnc-confontcon-close-whteclass%3Dconrefreshnc-confontcon-refreshmgclass%3Dcoewth%3D100heght%3D30alt%3Dclass%3Dopebuttonclass%3Dbtn-ok%E7%A1%AE%E5%AE%9Abuttonclass%3Dtps%E9%AA%8C%E8%AF%81%E7%A0%81%E9%94%99%E8%AF%AF%EF%BC%8C%E8%AF%B7%E9%87%8D%E6%96%B0%E8%BE%93%E5%85%A5%3Dnc_1-stage-3class%3Dstagestage3style%3Dsplay%3Anone%3Bclass%3Dttle%E9%9D%9E%E5%B8%B8%E6%8A%B1%E6%AD%89%EF%BC%8C%E8%BF%99%E5%87%BA%E9%94%99%E4%BA%86span%3Dnc_1_refresh1class%3Dmenurefreshspan%3Dnc_1_refresh2class%3Dconnc-confontcon-refreshspanspan%3Dnc_1_refresh3class%3Dlabel%E5%88%B7%E6%96%B0spanspanspanclass%3Dmenunc-sepspanspanclass%3Dmenufeebackspanclass%3Dconnc-confontcon-messagespanspanclass%3Dlabel%E5%8F%8D%E9%A6%88spanspan%3B&pid=sufeiPunish&page=file%3A%2F%2F%2FC%3A%2FUsers%2Fbobo%2FDesktop%2F%25E9%2598%25BF%25E9%2587%258C%25E6%25BB%2591%25E5%259D%2597.html&query=&hash=&referrer=&title=Document&ua=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36&c1=FFFF0N0N000000009594%3A1682047685984%3A0.48000457320939005&c2=FFFF0N0N000000009594","entryType":"resource","startTime":314.60000000009313,"duration":56.89999999990687,"initiatorType":"img","nextHopProtocol":"","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":314.60000000009313,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"secureConnectionStart":0,"connectEnd":0,"requestStart":0,"responseStart":0,"responseEnd":371.5,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"responseStatus":0,"serverTiming":[]},{"name":"file://at.alicdn.com/t/font_skgl4wg07pgv6lxr.woff","entryType":"resource","startTime":315.70000000018626,"duration":22155.5,"initiatorType":"css","nextHopProtocol":"","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":315.70000000018626,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"secureConnectionStart":0,"connectEnd":0,"requestStart":0,"responseStart":0,"responseEnd":22471.200000000186,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"responseStatus":0,"serverTiming":[]},{"name":"https://cf.aliyun.com/nocaptcha/initialize.jsonp?a=FFFF0N0N000000009594&t=FFFF0N0N000000009594%3A1682047685984%3A0.48000457320939005&scene=nc_register_h5&lang=cn&v=v1.2.21&href=file%3A%2F%2F%2FC%3A%2FUsers%2Fbobo%2FDesktop%2F%25E9%2598%25BF%25E9%2587%258C%25E6%25BB%2591%25E5%259D%2597.html&comm=%7B%22cntp%22%3A%22undefined%22%2C%22cneftp%22%3A%224g%22%2C%22btryc%22%3Atrue%2C%22btryl%22%3A0.17%7D&callback=__jsonp_933972498","entryType":"resource","startTime":328.20000000018626,"duration":148.60000000009313,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":328.20000000018626,"domainLookupStart":347.8000000002794,"domainLookupEnd":359.5,"connectStart":359.5,"secureConnectionStart":389.70000000018626,"connectEnd":437,"requestStart":437.20000000018626,"responseStart":473.60000000009313,"responseEnd":476.8000000002794,"transferSize":378,"encodedBodySize":78,"decodedBodySize":78,"responseStatus":0,"serverTiming":[]},{"name":"https://g.alicdn.com/AWSC/uab/1.140.0/collina.js","entryType":"resource","startTime":334,"duration":22.5,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":334,"domainLookupStart":334,"domainLookupEnd":334,"connectStart":334,"secureConnectionStart":334,"connectEnd":334,"requestStart":349,"responseStart":350,"responseEnd":356.5,"transferSize":0,"encodedBodySize":105494,"decodedBodySize":248730,"responseStatus":0,"serverTiming":[]},{"name":"https://g.alicdn.com/AWSC/WebUMID/1.93.0/um.js","entryType":"resource","startTime":334.5,"duration":19.600000000093132,"initiatorType":"script","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":334.5,"domainLookupStart":334.5,"domainLookupEnd":334.5,"connectStart":334.5,"secureConnectionStart":334.5,"connectEnd":334.5,"requestStart":349.10000000009313,"responseStart":350.10000000009313,"responseEnd":354.10000000009313,"transferSize":0,"encodedBodySize":67905,"decodedBodySize":177654,"responseStatus":0,"serverTiming":[]},{"name":"https://ynuf.aliapp.org/service/um.json","entryType":"resource","startTime":663.5,"duration":132.8000000002794,"initiatorType":"xmlhttprequest","nextHopProtocol":"h2","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":663.5,"domainLookupStart":665.3000000002794,"domainLookupEnd":676.5,"connectStart":676.5,"secureConnectionStart":709.2000000001863,"connectEnd":754.3999999999069,"requestStart":754.6000000000931,"responseStart":794.8999999999069,"responseEnd":796.3000000002794,"transferSize":436,"encodedBodySize":136,"decodedBodySize":136,"responseStatus":200,"serverTiming":[]},{"name":"file://at.alicdn.com/t/font_skgl4wg07pgv6lxr.ttf","entryType":"resource","startTime":22471.600000000093,"duration":4.600000000093132,"initiatorType":"css","nextHopProtocol":"","renderBlockingStatus":"non-blocking","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":22471.600000000093,"domainLookupStart":0,"domainLookupEnd":0,"connectStart":0,"secureConnectionStart":0,"connectEnd":0,"requestStart":0,"responseStart":0,"responseEnd":22476.200000000186,"transferSize":0,"encodedBodySize":0,"decodedBodySize":0,"responseStatus":0,"serverTiming":[]}],
    'timeOrigin':1682047685677.3



};

