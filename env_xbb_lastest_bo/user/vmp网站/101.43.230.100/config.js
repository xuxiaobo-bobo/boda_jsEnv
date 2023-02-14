//全局对象配置
var myloglist=[]
var myloglistindex=0
bodavm = {

    "toolsFunc": {}, //功能函数相关,插件
    "envFunc": {},//环境相关
    "config": {},   //配置相关
    "memory":{},
    "toolsPlugin": {} //Plugin相关
}
bodavm.config.isdebug=false;  //是否开启debugger

bodavm.config.proxy = false; //是否代理

bodavm.config.printLog=true; //是否打开日志
bodavm.memory.isproxy= {}
bodavm.memory.filterProxyProp=['toJSON','undefined','splice','String','fromCharCode','apply','prototype','__proto__','toString','Object','Array',"eval",'Symbol(Symbol.toStringTag)','Symbol.toStringTag','bodavm.memory.symbolData',"Symbol(Symbol.species)",'Symbol(Symbol.hasInstance)'] //需要过滤 的属性
bodavm.memory.symbolData=Symbol("data") //用来保存当前对象上的原型属性
bodavm.memory.globalInit={}
//存储tag标签
bodavm.memory.tag=[]
// bodavm.memory.localStorage={};
bodavm.memory.cookie1=''  //用来存储555
bodavm.memory.cookie2={} //用来存储"a=10"
bodavm.memory.cookie=''; //拼接cookie1 和cookie2

bodavm.memory.asyncEvent={};
bodavm.memory.globalInit.timeoutID=0;
// "Verdana;Helvetica Neue LT Pro 35 Thin;tahoma;verdana;times new roman;Courier New;Microsoft Himalaya;helvetica;LG-FZKaTong-M19-V2.2;Georgia;georgia;courier new;Arial;arial;cursive;times;fantasy;courier;serif;monospace;Times New Roman"
bodavm.memory.globalInit.fontList = ["SimHei", "SimSun", "NSimSun", "FangSong", "KaiTi",'Verdana','tahoma','helvetica','Georgia','georgia','Arial','arial','cursive','fantasy','courier','serif','monospace']; 
bodavm.memory.font={
    "font-family":'',
    "fontFamily":''
}


bodavm.memory.location={
    origin:"http://101.43.230.100",
    hash:"",
    pathname:"/",
    search:"",
    href:"http://101.43.230.100/",
    port:"",
    protocol:"http:",
    host:"101.43.230.100",
    ancestorOrigins:"{}",
    hostname:"101.43.230.100"
};

bodavm.memory.document={
    URL:"http://101.43.230.100/",
    referrer:"",
    documentURI:"http://101.43.230.100/",
    compatMode:"CSS1Compat",
    dir:"",
    title:"QQ会员等级 - QQ等级 - 好莱坞等级 查询",
    designMode:"off",
    readyState:"complete",
    contentType:"text/html",
    inputEncoding:"UTF-8",
    domain:"101.43.230.100",
    characterSet:"UTF-8",
    charset:"UTF-8",
    hidden:"false",
    onmousemove:"null",
    onselectionchange:"null",
    
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
    userAgent:"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    appVersion:"5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
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
    javaEnabled:false
};
bodavm.memory.window={
    indexedDB:{},
    name:"",
};

bodavm.memory.canvas={};
bodavm.memory.canvas2D={
    direction: "ltr",
    fillStyle: "#000000",
    filter: "none",
    font: "10px sans-serif",
    fontKerning: "auto",
    fontStretch: "normal",
    fontVariantCaps: "normal",
    globalAlpha: 1,
    globalCompositeOperation: "source-over",
    imageSmoothingEnabled: true,
    imageSmoothingQuality: "low",
    letterSpacing: "0px",
    lineCap: "butt",
    lineDashOffset: 0,
    lineJoin: "miter",
    lineWidth: 1,
    miterLimit: 10,
    shadowBlur: 0,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    strokeStyle: "#000000",
    textAlign: "start",
    textBaseline: "alphabetic",
    textRendering: "auto",
    wordSpacing: "0px",
}
// bodavm.memory.localStorage={}

