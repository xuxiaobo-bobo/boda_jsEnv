//全局对象配置
debugger
var myloglist=[]
var myloglistindex=0
var myundefinedlist=[]
var bodavm = {
    "toolsFunc": {}, //功能函数相关,插件
    "envFunc": {},//环境相关
    "config": {},   //配置相关
    "memory":{},
    "toolsPlugin": {} //Plugin相关
}

bodavm.memory.tag=[]          //存放标签
bodavm.memory.globalobj={}    //全局对象
bodavm.memory.domParser=''    //存在parse5解析的dom
bodavm.memory.domParserScriptFlag=true  //判断当前是否处于domParserScriptFlag  script标签执行
bodavm.memory.notDefined={}  //存在浏览器中不存在dom  如Database等
bodavm.memory.cache={
    "Document_body_get":{
        'this':'',
        "res":'',
        'domParserbody':''
    },
    "Document_scripts_get":{
        'this':'',
        "res":[],
        'domParser':''
        
    },
    "Document_getElementById":{
        "id":{},
    },
    "Document_getElementsByName":{
        "eleName":{},
    }
} //缓存
bodavm.config.isdebug=false ;  //是否开启debugger
// bodavm.config.getundefined=true  //暂未实现   
bodavm.config.isrs=false  //判断当前网站是不是瑞数
bodavm.config.proxy = false; //是否代理
bodavm.config.issymbolProperty=false // 实现了一半,暂时不推荐使用 //是否开启 过检测 r={};r.__proto__=document;r.location

bodavm.config.randomhook=false //hook随机值和时间
bodavm.config.printLog=true; //是否打开日志
// bodavm.memory.isproxy= {}
bodavm.memory.symbolProxy=Symbol("proxy")

bodavm.memory.symbolProperty=Symbol('Property')

bodavm.memory.symbolData=Symbol("data") 

// if (bodavm.config.issymbolProperty && bodavm.config.proxy ){
bodavm.memory.filterProxyProp =['hasOwnProperty','__proto__','constructor','valueOf',bodavm.memory.symbolProperty,bodavm.memory.symbolProxy,bodavm.memory.symbolData,Symbol.toPrimitive,Symbol.toStringTag, "eval",'toString','prototype'];
// }else{
    // bodavm.memory.filterProxyProp =['prototype','hasOwnProperty',bodavm.memory.symbolProperty,bodavm.memory.symbolProxy,bodavm.memory.symbolData,Symbol.toPrimitive,Symbol.toStringTag, "eval"];// 需要过滤的属性
// }

//用来保存当前对象上的原型属性
bodavm.memory.globalInit={}
bodavm.memory.globalInit.jsonCookie = {};// json格式的cookie

bodavm.memory.userInit={}
//存储tag标签
bodavm.memory.all=[]

bodavm.memory.collection={}
// bodavm.memory.localStorage={};

bodavm.memory.asyncEvent={
    HTMLElement:{onload:[]}

};
bodavm.memory.globalInit.timeoutID=0;
// "Verdana;Helvetica Neue LT Pro 35 Thin;tahoma;verdana;times new roman;Courier New;Microsoft Himalaya;helvetica;LG-FZKaTong-M19-V2.2;Georgia;georgia;courier new;Arial;arial;cursive;times;fantasy;courier;serif;monospace;Times New Roman"
bodavm.memory.globalInit.fontList = ["SimHei", "SimSun", "NSimSun", "FangSong", "KaiTi",'Verdana', 'Helvetica Neue LT Pro 35 Thin', 'tahoma', 'verdana', 'times new roman', 'Courier New', 'Microsoft Himalaya', 'helvetica', 'LG-FZKaTong-M19-V2.2', 'Georgia', 'georgia', 'courier new', 'Arial', 'arial', 'cursive', 'times', 'fantasy', 'courier', 'serif', 'monospace', 'Times New Roman']

bodavm.memory.font={
    "font-family":'',
    "fontFamily":''
}
bodavm.memory.IDBRequest={
    onerror:"",
    onupgradeneeded:'',
    onsuccess:'',
}
bodavm.memory.IDBOpenDBRequest={
    onupgradeneeded:'',

}

bodavm.memory.location={
    origin:"http://www.fangdi.com.cn",
    hash:"",
    pathname:"/",
    search:"",
    href:"http://www.fangdi.com.cn/",
    port:"",
    protocol:"http:",
    host:"www.fangdi.com.cn",
    ancestorOrigins:"{}",
    hostname:"www.fangdi.com.cn"
};

bodavm.memory.document={
    URL:"http://www.fangdi.com.cn/",
    referrer:"",
    documentURI:"http://www.fangdi.com.cn/",
    compatMode:"CSS1Compat",
    dir:"",
    title:'',
    designMode:"off",
    readyState:"loading",
    contentType:"text/html",
    inputEncoding:"UTF-8",
    domain:"www.fangdi.com.cn",
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
    isExtended:undefined,
    orientation:{},
    onchange:undefined,
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
    name:"__bid_n=1851f71836a8ec02594207&$_YWTU=s.LG3L_743YOFKIPDJpIAHDVhzcP8iw0fsEKz_fqc39&$_cDro=0&vdFm=__bid_n%3D1851f71836a8ec02594207",
    innerWidth:1440,
    innerHeight:817,
    origin:"http://www.fangdi.com.cn",
    outerWidth:1440,
    outerHeight:920,
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
    frameElement:null,
    

};
bodavm.memory.localStorage={}

bodavm.memory.Performance={
    'getEntriesByType':[],
    'timeOrigin':1682492723085.3



};

