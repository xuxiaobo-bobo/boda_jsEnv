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
bodavm.memory.domParserScriptFlag=true  //判断当前是否处于domParserScriptFlag
bodavm.memory.cache={
    "Document_body_get":{
        'this':'',
        "res":'',
        'domParserbody':''
    },
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

//主要用来保护伪造的函数 让其更难被识破
/*
保存原函数
修改原函数为自定义函数
自定义函数里面修改逻辑然后调用原函数
*/
;;
!function () {
    bodavm.toolsFunc.traverse2=function(node, callback) {
        if (!node.childNodes) {
            return;
        }
        if (node.nodeName=='script'){
                callback(node.parentNode);

        }else{
            callback(node)
        }
        // debugger
        for (let i = 0; i < node.childNodes.length; i++) {
            bodavm.toolsFunc.traverse(node.childNodes[i], callback);
        }
    }
    bodavm.toolsFunc.traverse=function(node, callback) {
        if (!node.childNodes) {
            return;
        }
    
        callback(node)
        
        // debugger
        for (let i = 0; i < node.childNodes.length; i++) {
            bodavm.toolsFunc.traverse(node.childNodes[i], callback);
        }
    }

    bodavm.toolsFunc.symbolProperty=function (obj,value){
        if (bodavm.config.issymbolProperty ==false){
            return obj
        };
        Object.defineProperty(obj,bodavm.memory.symbolProperty,{
            configurable:false,
            enumerable:false,
            value:value?value:1,
            writable:false
        },'bobo')
        
    }
    bodavm.toolsFunc.setProto=function setpro(dom){
        //设置原型链
        let tagpro=dom.toUpperCase()
        switch (tagpro) {
            case "DIV":
                return HTMLDivElement.prototype
            case "SCRIPT":
                return  HTMLScriptElement.prototype
            case "TITLE":
                return  HTMLTitleElement.prototype
            case "HEAD":
                return  HTMLHeadElement.prototype
            case 'META':
                return  HTMLMetaElement.prototype
            case 'LINK':
                return  HTMLLinkElement.prototype
            case "A":
                return  HTMLAnchorElement.prototype
            case "SPAN":
                return  HTMLSpanElement.prototype
            case "P":
                return  HTMLParagraphElement.prototype
            case "LI":
                return  HTMLLIElement.prototype
            case "UL":
                return  HTMLUListElement.prototype
            case 'IFRAME':
                return  HTMLIFrameElement.prototype
            case 'IMG':
                return  HTMLImageElement.prototype
            case "H1":
                return  HTMLHeadingElement.prototype
            case "H2":
                return  HTMLHeadingElement.prototype
            case "NOSCRIPT":
                return  HTMLElement.prototype
            case 'INPUT':
                return  HTMLInputElement.prototype
            case 'FORM':
                return  HTMLFormElement.prototype
            case 'STYLE':
                return  HTMLStyleElement.prototype
            case 'VIDEO':
                return  HTMLVideoElement.prototype
            case 'BODY':
                return  HTMLBodyElement.prototype
            case 'HTML':
                return  HTMLHtmlElement.prototype
            case "CANVAS":
                return  HTMLCanvasElement.prototype
            case "SECTION":
                return  HTMLElement.prototype
            case "I":
                return  HTMLElement.prototype
            case "FONT":
                return  HTMLFontElement.prototype
            case "EM":
                return  HTMLElement.prototype
            case "H6":
                return  HTMLHeadingElement.prototype
            case "OPTION":
                return  HTMLOptionElement.prototype
            case "SELECT":
                return  HTMLSelectElement.prototype
            case "BR":
                return  HTMLBRElement.prototype
            case "CLOB":
                return  HTMLUnknownElement.prototype
            case "MARQUEE":
                return  HTMLMarqueeElement.prototype
            case "STRONG":
                return  HTMLElement.prototype
            case "BUTTON":
                return  HTMLButtonElement.prototype
            case 'LEGEND':
                return  HTMLLegendElement.prototype
            case 'OPTGROUP':
                return  HTMLOptGroupElement.prototype
            case "FIELDSET":
                return  HTMLFieldSetElement.prototype
            case 'SUP':
                return  HTMLElement.prototype
            case "H3":
                return  HTMLHeadingElement.prototype
            case "ADDRESS":
                return  HTMLElement.prototype

            default:
                console.log(`setProto属性${tagpro}未实现`)
                break;
        }
    }


    //解析url
    bodavm.toolsFunc.parseUrl = function parseUrl(str) {
        if (!parseUrl || !parseUrl.options) {
            parseUrl.options = {
                strictMode: false,
                key: ["href", "protocol", "host", "userInfo", "user", "password", "hostname", "port", "relative", "pathname", "directory", "file", "search", "hash"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            };
        }
        if (!str) {
            return '';
        }
        var o = parseUrl.options,
            m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
            urlJson = {},
            i = 14;
        while (i--) urlJson[o.key[i]] = m[i] || "";
        urlJson[o.q.name] = {};
        urlJson[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
            if ($1) urlJson[o.q.name][$1] = $2;
        });
        delete urlJson["queryKey"];
        delete urlJson["userInfo"];
        delete urlJson["user"];
        delete urlJson["password"];
        delete urlJson["relative"];
        delete urlJson["directory"];
        delete urlJson["file"];
        urlJson["protocol"] += ":";
        urlJson["origin"] = urlJson["protocol"] + "//" + urlJson["host"];
        urlJson["search"] = urlJson["search"] && "?" + urlJson["search"];
        urlJson["hash"] = urlJson["hash"] && "#" + urlJson["hash"];
        return urlJson;
    }
 


    //获取原型对象上自身属性值
    bodavm.toolsFunc.getProtoAttr = function getProtoAttr(key) {
        return this[bodavm.memory.symbolData] && this[bodavm.memory.symbolData][key];
    }
    bodavm.toolsFunc.setProtoAttr = function setProtoAttr(key, value) {
        if (!(bodavm.memory.symbolData in this)) {
            Object.defineProperty(this, bodavm.memory.symbolData, {
                enumerable: false,
                configurable: false,
                writable: true,
                value: {},
            },'bobo'),
            Object.defineProperty(this,bodavm.memory.symbolProperty,{
                value:1,
                enumerable:false,
                writable:false,
                configurable:false
            },'bobo')

        }
        this[bodavm.memory.symbolData][key] = value;
    }

    //获取对象类型
    bodavm.toolsFunc.getType = function getType(obj) {
        return Object.prototype.toString.call(obj);
    }
    //过滤代理属性
    bodavm.toolsFunc.filterProxyProp = function filterProxyProp(prop) {
        for (let i = 0; i < bodavm.memory.filterProxyProp.length; i++) {
            if (bodavm.memory.filterProxyProp[i] === prop) {
                return true;
            }
        }
        return false
    }


    // //proxy代理
    bodavm.toolsFunc.proxy = function (obj, objName) {
        // bodavm.toolsFunc.symbolProperty(obj)
        // bodavm.memory.globalobj[objName]=obj
        if (bodavm.config.proxy == false) { return obj };
        if(bodavm.memory.symbolProxy in obj){// 判断对象obj是否是已代理的对象
            return obj[bodavm.memory.symbolProxy];
        }
        let handler = {
            get(target, prop, receiver) {
                if(prop =='_createHelper'){debugger}
                if (prop == 'onmessage'){debugger}
                let result = Reflect.get(target, prop, receiver)
                
                // if (target ==window.$_ts._$Aw){return result }
                if (bodavm.toolsFunc.filterProxyProp(prop)) {
                    return result;
                }
                if (prop ==hasOwnProperty){debugger}
                // let mylog=
                console.log('['+objName+']', '   获取属性:   ', prop, '   value:   ', result);

                    if (typeof result =='function' ){
                        myloglist.push({ 'type': 'get:'+objName , 'prop0': prop, 'prop1': result.toString() })

                    }
                    else {
                        if (!result){
                            myundefinedlist.push({ 'type': 'get:'+objName , 'prop0': prop, 'prop1': result })

                        }
                        myloglist.push({ 'type': 'get:'+objName , 'prop0': prop, 'prop1': result })


                    }

                if (result instanceof Object) {
                        // bodavm.toolsFunc.symbolProperty(result)

                        return bodavm.toolsFunc.proxy(result, `${objName}.${prop.toString()}`)
                }

                return result;
            },
            set(target, propKey, value, receiver) {
                // debugger
                if (objName=='window' && propKey){
                    bodavm.memory.window[propKey]=value
                }
                console.log('['+objName+']', "   设置属性:   ", propKey, "   value:   ", value);
                    if (typeof value =='function' ){
                        myloglist.push({ 'type': 'set:'+ objName, 'prop0': propKey, 'prop1': value.toString() })

                    }
                    else{
                        if (!value){
                            myundefinedlist.push({ 'type':'set:'+ objName , 'prop0': propKey, 'prop1': value })

                        }
                        myloglist.push({ 'type':'set:'+ objName , 'prop0': propKey, 'prop1': value })
                    }
                    
                    let res=Reflect.set(target, propKey, value, receiver);
                    // bodavm.toolsFunc.symbolProperty(res)
                return res
            }
        };
        // debugger
        let proxyObj = new Proxy(obj, handler);
        Object.defineProperty(obj, bodavm.memory.symbolProxy, {
            configurable:false,
            enumerable:false,
            writable:false,
            value:proxyObj
        },'bobo');
        return proxyObj;
    }

    // return bodavm.toolsFunc.dispatch(this,Document.prototype,"Document","implementation_get",arguments,)
    //env函数分发器
    bodavm.toolsFunc.dispatch = function dispatch(self, obj, objName, funcName, argList, defaultValue) {
        //obj Document.prototype
        //obj loction
        // debugger
        //bodavm.toolsFunc.dispatch(this,Document.prototype,"Document","write",arguments)}});
        let name = `${objName}_${funcName}`
        //实现r={} ,r.__proto__=Document.prototype ,r.location 报错
       
          //实现Document.prototype.activeElement()调用报错
        if (Object.getOwnPropertyDescriptor(obj, "constructor") !== undefined) {
            if (Object.getOwnPropertyDescriptor(self, "constructor") !== undefined) {
                return bodavm.toolsFunc.throwError("TypeError", "Illegal invocation")
            }
        }
        try {

            // if (bodavm.config.issymbolProperty){
            //     if(self[bodavm.memory.symbolProperty] ==undefined){
            //         debugger
            //         console.log(self,`  bodavm.toolsFunc.dispatch1 执行出错`,funcName);
            //         return bodavm.toolsFunc.throwError("TypeError", "Illegal invocation")
        
            //     }
            //     //实现r={} ;r.__proto__=document ,r.location 报错
            //     if (self.__proto__.constructor == self.__proto__.__proto__.constructor){
            //         debugger
            //         console.log(self,`  bodavm.toolsFunc.dispatch2  执行出错`,funcName);
            //         return bodavm.toolsFunc.throwError("TypeError", "Illegal invocation")
            //     }
    
            // }
     
            return bodavm.envFunc[name].apply(self, argList)


        } catch (e) {
            // 
                // debugger
                let log__ = `'[${name}]正在执行,错误信息${e.message}'`
                console.log(log__);
                bodavm.toolsFunc.printLog(log__)
            }
    }


    //定义对象属性 defineProperty
    bodavm.toolsFunc.defineProperty = function defineProperty(obj, prop, OldDescriptior) {
        // if (obj ==window){debugger}
        let newDescriptior = {};
        newDescriptior.configurable = bodavm.config.proxy || OldDescriptior.configurable;//如果开启代理必须是true
        newDescriptior.enumerable = OldDescriptior.enumerable;
        if (OldDescriptior.hasOwnProperty("writable")) {
            newDescriptior.writable = bodavm.config.proxy || OldDescriptior.writable;//如果开启代理必须是true
        }
        if (OldDescriptior.hasOwnProperty("value")) {
            let value = OldDescriptior.value;
            if (typeof value == "function") {
                    bodavm.toolsFunc.safeFunc(value, prop)
            }
            newDescriptior.value = value;
        }
        if (OldDescriptior.hasOwnProperty("get")) {
            let get = OldDescriptior.get;
            if (typeof get == "function") {
                bodavm.toolsFunc.safeFunc(get, `get ${prop}`)
            }
            newDescriptior.get = get;
        }
        if (OldDescriptior.hasOwnProperty("set")) {
            let set = OldDescriptior.set;
            if (typeof set == "function") {
                bodavm.toolsFunc.safeFunc(set, `set ${prop}`)
            }
            newDescriptior.set = set;
        }
            Object.defineProperty(obj, prop, newDescriptior,'bobo')

    };
    ;;
    //保护函数
    (() => {
        "use strict";
        const $toString = Function.toString;  //hook Function.toString 且命名为myToString
        //变量名取随机数防检测
        const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));

        //自定义函数
        //逻辑与短路运算      &&    如果表达式1结果为真,则返回表达式2,
        //逻辑或短路运算      ||    如果表达式1结果为真,则返回表达式1,
        //1 && 0 || 3    3

        /*如果this的类型为function 则返回this[myFunction_toString_symbol]
        然后判断this[myFunction_toString_symbol]是否为真,
        为真则返回this[myFunction_toString_symbol]的结果.
        */

        //如果this的类型不是function,则直接返回$toString.call(this)

        //$toString.call(this)就是对原函数调用

        const myToString = function () {
            return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);   //谁调用这个方法,this就是谁,比如boda调用,这个this就是boda
        };


        function set_native(func, key, value) {
            //定义描述符
            Object.defineProperty(func, key, {
                "enumerable": false,
                "configurable": true,
                "writable": true,
                "value": value
            },'bobo')
        };
        delete Function.prototype['toString']; //删除原型链上的toString
        set_native(Function.prototype, "toString", myToString); //自己定义个getter方法

        //myToString的 myFunction_toString_symbol属性设置为  function toString() { [native code] }
        //myFunction_toString_symbol= function toString() { [native code] }
        set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }"); //套个娃 保护一下我们定义的toString 否则就暴露了


        bodavm.toolsFunc.safefunction = (func, name) => {
            set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, name || ''}() { [native code] }`);
            set_native(func, 'name', `${myFunction_toString_symbol, name || ''}`);
            // }
        }; //导出函数到globalThis
    }).call(this);

    //对象重命名
    bodavm.toolsFunc.reNameObj = function reNameObj(obj, obname) {
        Object.defineProperty(obj.prototype, Symbol.toStringTag, {
            value: obname,
            configurable: true,
            writable: false,
            enumerable: false
        },'bobo')
    };
    //函数重命名 
    bodavm.toolsFunc.reNameFunc = function reNameFunc(func, name) {
        Object.defineProperty(func, "name", {
            value: name,
            configurable: true,
            writable: false,
            enumerable: false
        },'bobo')
    }
    //合并 保护方法
    bodavm.toolsFunc.safeFunc = function safeFunc(func, name) {
        bodavm.toolsFunc.safefunction(func, name)
        bodavm.toolsFunc.reNameFunc(func, name)
    }
    //合并 保护原型
    bodavm.toolsFunc.safeProto = function safeProto(obj, name) {
        // bodavm.memory.globalobj[name]=obj
        // bodavm.toolsFunc.symbolProperty(obj)
        bodavm.toolsFunc.safefunction(obj, name)
        bodavm.toolsFunc.reNameObj(obj, name)
    }


    //抛错
    bodavm.toolsFunc.throwError = function throwError(name, message) {
        let e = new Error();
        e.message = message;
        e.name = name;
        e.stack = `${name}: ${message}at <anonymous>:1:1`
        throw e
    }


    // base64编码解码
    bodavm.toolsFunc.base64 = {};
    bodavm.toolsFunc.base64.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    bodavm.toolsFunc.base64.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    bodavm.toolsFunc.base64.base64encode = function base64encode(str) {
        var out, i, len;
        var c1, c2, c3;

        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += bodavm.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                out += bodavm.toolsFunc.base64.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += bodavm.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                out += bodavm.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += bodavm.toolsFunc.base64.base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += bodavm.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
            out += bodavm.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += bodavm.toolsFunc.base64.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += bodavm.toolsFunc.base64.base64EncodeChars.charAt(c3 & 0x3F);
        };
        console.log(`bs64编码:${str}`,`编码后${out}`);
        return out;
    }
    bodavm.toolsFunc.base64.base64decode = function base64decode(str) {
        var c1, c2, c3, c4;
        var i, len, out;

        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            /* c1 */
            do {
                c1 = bodavm.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1)
                break;

            /* c2 */
            do {
                c2 = bodavm.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1)
                break;

            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = bodavm.toolsFunc.base64.base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1)
                break;

            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = bodavm.toolsFunc.base64.base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }
}();



// 浏览器接口具体的实现
!function () {

    bodavm.envFunc.Document_body_get=function (){
        // debugger
        domParserbody=null
        bodavm.toolsFunc.traverse2(bodavm.memory.domParser, node => {
            if (node.nodeName === 'body') {
              debugger
              domParserbody = node;
              // return node
            }
        });
        if (bodavm.memory.cache['Document_body_get']['this']==this &&bodavm.memory.cache['Document_body_get']['domParserbody']==domParserbody ){
            console.log_copy(`Document_body_get 已存在缓存,直接获取`);
            return bodavm.memory.cache['Document_body_get']['res']
        }
        let body={}
        body.__proto__=HTMLBodyElement.prototype;
        if (domParserbody==null){
            bodavm.memory.cache['Document_body_get']['this']=this
            bodavm.memory.cache['Document_body_get']['res']=null
            bodavm.memory.cache['Document_body_get']['domParserbody']=domParserbody
            console.log_copy(`Document_body_get ->`,`res->`,null);

            bodavm.toolsFunc.setProtoAttr(body,null) 
            return null
        }   
        bodavm.toolsFunc.setProtoAttr(body,domParserbody) 
        bodavm.memory.cache['Document_body_get']['this']=this
        bodavm.memory.cache['Document_body_get']['res']=body
        bodavm.memory.cache['Document_body_get']['domParserbody']=domParserbody

        console.log_copy(`Document_body_get ->`,`res->`,body);

        return body
    }
    
    
    bodavm.envFunc.Document_scripts_get=function (){
        // debugger
        domParserbody=null
        const result = [];
        bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
            debugger
            if (node.nodeName === 'script') {
                let mynode=new HTMLScriptElement('bobo')
                bodavm.toolsFunc.setProtoAttr(mynode,node)
                result.push(mynode);
            } 
        });
        // debugger
        return result
    }













    bodavm.envFunc.MimeTypeArray_namedItem = function MimeTypeArray_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.MimeTypeArray_item = function MimeTypeArray_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.Plugin_namedItem = function Plugin_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.Plugin_item = function Plugin_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.PluginArray_namedItem = function PluginArray_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.PluginArray_item = function PluginArray_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {
        return bodavm.memory.globalInit.mimeTypeArray;
    }
    bodavm.envFunc.MimeType_suffixes_get = function MimeType_suffixes_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "suffixes");
    }
    bodavm.envFunc.MimeType_enabledPlugin_get = function MimeType_enabledPlugin_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "enabledPlugin");
    }
    bodavm.envFunc.MimeType_description_get = function MimeType_description_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_length_get = function Plugin_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.Plugin_filename_get = function Plugin_filename_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "filename");
    }
    bodavm.envFunc.Plugin_description_get = function Plugin_description_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_name_get = function Plugin_name_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "name");
    }
    bodavm.envFunc.PluginArray_length_get = function PluginArray_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.MimeType_type_get = function MimeType_type_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "type");
    }
    bodavm.envFunc.MimeTypeArray_length_get = function MimeTypeArray_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }

}();
// 
;;
!function(){
// 创建pluginArray
// debugger
bodavm.toolsFunc.createPluginArray = function createPluginArray(){
    let pluginArray = {};
    pluginArray = Object.setPrototypeOf(pluginArray, PluginArray.prototype);
    bodavm.toolsFunc.setProtoAttr.call(pluginArray, "length", 0);
    return pluginArray;
}
// 添加Plugin
bodavm.toolsFunc.addPlugin = function addPlugin(plugin){
  
    let pluginArray = bodavm.memory.globalInit.pluginArray;
    if(pluginArray === undefined){
        pluginArray = bodavm.toolsFunc.createPluginArray();
    }
    let index = pluginArray.length;
    pluginArray[index] = plugin;
    Object.defineProperty(pluginArray, plugin.name, {value: plugin, writable: false, enumerable: false, configurable: true},'bobo');

    bodavm.toolsFunc.setProtoAttr.call(pluginArray, "length", index+1);
    bodavm.memory.globalInit.pluginArray = pluginArray;
    return pluginArray;
}
// 创建MimeTypeArray对象
bodavm.toolsFunc.createMimeTypeArray = function createMimeTypeArray(){
    let mimeTypeArray = {};
    mimeTypeArray = Object.setPrototypeOf(mimeTypeArray, MimeTypeArray.prototype);
    bodavm.toolsFunc.setProtoAttr.call(mimeTypeArray, "length", 0);
    return mimeTypeArray;
}
// 添加MimeType
bodavm.toolsFunc.addMimeType = function addMimeType(mimeType){

    let mimeTypeArray = bodavm.memory.globalInit.mimeTypeArray;
    if(mimeTypeArray === undefined){
        mimeTypeArray = bodavm.toolsFunc.createMimeTypeArray();
    }
    Object.defineProperty(mimeTypeArray,bodavm.memory.symbolProperty,{
        value:1,
        enumerable:false,
        writable:false,
        configurable:false
    },'bobo')
    let index = mimeTypeArray.length;
    let flag = true;
    for(let i=0;i<index;i++){
        if(mimeTypeArray[i].type === mimeType.type){
            flag = false;
        }
    }
    if(flag){
        mimeTypeArray[index] = mimeType;

        Object.defineProperty(mimeTypeArray, mimeType.type, {value: mimeType, writable: false, enumerable: false, configurable: true},'bobo');
     
        bodavm.toolsFunc.setProtoAttr.call(mimeTypeArray, "length", index+1);
    }
    bodavm.memory.globalInit.mimeTypeArray = mimeTypeArray;
    return mimeTypeArray;
}

// 创建MimeType
bodavm.toolsFunc.createMimeType = function createMimeType(mimeTypeJson, plugin){
    // 
    let mimeType = {};
    Object.setPrototypeOf(mimeType, MimeType.prototype);
    bodavm.toolsFunc.setProtoAttr.call(mimeType, "description", mimeTypeJson.description);
    bodavm.toolsFunc.setProtoAttr.call(mimeType, "suffixes", mimeTypeJson.suffixes);
    bodavm.toolsFunc.setProtoAttr.call(mimeType, "type", mimeTypeJson.type);
    bodavm.toolsFunc.setProtoAttr.call(mimeType, "enabledPlugin", plugin);
    bodavm.toolsFunc.addMimeType(mimeType);
    return mimeType;
}

// 创建plugin
bodavm.toolsPlugin.createPlugin = function createPlugin(data){
    let mimeTypes = data.mimeTypes;
    let plugin = {};
   
    plugin = Object.setPrototypeOf(plugin, Plugin.prototype);
    bodavm.toolsFunc.setProtoAttr.call(plugin, "description", data.description);
    bodavm.toolsFunc.setProtoAttr.call(plugin, "filename", data.filename);
    bodavm.toolsFunc.setProtoAttr.call(plugin, "name", data.name);
    bodavm.toolsFunc.setProtoAttr.call(plugin, "length", mimeTypes.length);
    for(let i=0; i<mimeTypes.length; i++){
        let mimeType = bodavm.toolsFunc.createMimeType(mimeTypes[i], plugin);
        plugin[i] = mimeType;
        Object.defineProperty(plugin, mimeTypes[i].type, {value: mimeType, writable: false, enumerable: false, configurable: true},'bobo');
       
    }
    bodavm.toolsFunc.addPlugin(plugin);
    return plugin;
}

}()



;;
!function () {
    var bolognum=0
    bodavm.toolsFunc.printLog = function printLog(logList) {
        let log = "";
        for (let i = 0; i < logList.length; i++) {
            if (logList[i] instanceof Object) {
                if (typeof logList[i] === "function") {
                    log += logList[i].toString() + ""
                } else {
                    log += bodavm.toolsFunc.getType(logList[i]) + "";
                }
            } else if (typeof logList[i] === "symbol") {
                log += logList[i].toString() + ""
            } else {
                log += logList[i] + "";
            }
        }
        log += "\r\n"
        bofs.appendFileSync(`D:/My_Dir/env_xbb_lastest_bo/run/log.txt`, log)
    }
    //hook console,让他自动调用printlog
    console.log_ = console.log;
    console.log = function log(type,...args) {

        // let index=args[0]?args[0]:args
        // if (typeof index =='string'&&  index.indexOf('属性:')!=-1){    
        // }else{
        // // debugger
        //     let arglenth=args.length
        //     let obj={'type':'env:'+type}

        //     for (let i = 0; i < arglenth; i++) {
                
        //         obj['prop'+i]=args[i]
        //         // if (args[i] ==undefined || args[i] ==null){
        //         //     myundefinedlist.push(obj)
        //         // }
        //     }
        //     // debugger
        //     myloglist.push(obj)
        // }


        // if (bodavm.memory.getundefined){
        //     if (arguments.indexOf(undefined) >0 || arguments.indexOf(null) >0){
        //         myundefinedlist.push(arguments)
        //     }
        // }
        if (bodavm.config.printLog ) {
            bodavm.toolsFunc.printLog(arguments)

        }

        //自动生成hook代码
        return console.log_.apply(this, arguments)
    };
    console.log_copy=console.log
    bodavm.toolsFunc.safeFunc(console.log,'log')
    // Object.defineProperty(console,'log',{
    //     get:function (){
    //         return console.log
    //     },
    //     // set:function (){
    //     //     return console.log
    //     // }
    // })
}();

//env相关代码
//EventTarget对象
EventTarget=function EventTarget(){}
bodavm.toolsFunc.safeProto(EventTarget,"EventTarget");
bodavm.toolsFunc.defineProperty(EventTarget.prototype,"addEventListener",{configurable:true, enumerable:true, writable:true, value:function () {return bodavm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","addEventListener",arguments)}});
bodavm.toolsFunc.defineProperty(EventTarget.prototype,"dispatchEvent",{configurable:true, enumerable:true, writable:true, value:function () {return bodavm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","dispatchEvent",arguments)}});
bodavm.toolsFunc.defineProperty(EventTarget.prototype,"removeEventListener",{configurable:true, enumerable:true, writable:true, value:function () {return bodavm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","removeEventListener",arguments)}});

WindowProperties = function WindowProperties() {
    return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")
    // throw ReferenceError(`WindowProperties is not defined
    // at <anonymous>:1:100`)
    ;
}
bodavm.toolsFunc.safeProto(WindowProperties, 'WindowProperties')
WindowProperties.prototype.__proto__=EventTarget.prototype;
WindowProperties.__proto__=EventTarget;
delete WindowProperties.prototype.constructor;

// Window对象
Window = function Window(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Window, "Window");
Window.prototype.__proto__=WindowProperties.prototype;
Window.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(Window, "TEMPORARY", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(Window, "PERSISTENT", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Window.prototype, "TEMPORARY", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(Window.prototype, "PERSISTENT", {configurable:false, enumerable:true, writable:false, value:1});

// self=window;
// window==self ; ///true
// window =new Proxy(window,{});
// window==self;//false
//需要连续赋值,可以过代理检测
// top=self=window=new Proxy(window,{})

// Node对象
Node = function Node(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Node, "Node");
Node.prototype.__proto__=EventTarget.prototype;
Node.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(Node, "ELEMENT_NODE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Node, "ATTRIBUTE_NODE", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(Node, "TEXT_NODE", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(Node, "CDATA_SECTION_NODE", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(Node, "ENTITY_REFERENCE_NODE", {configurable:false, enumerable:true, writable:false, value:5});
bodavm.toolsFunc.defineProperty(Node, "ENTITY_NODE", {configurable:false, enumerable:true, writable:false, value:6});
bodavm.toolsFunc.defineProperty(Node, "PROCESSING_INSTRUCTION_NODE", {configurable:false, enumerable:true, writable:false, value:7});
bodavm.toolsFunc.defineProperty(Node, "COMMENT_NODE", {configurable:false, enumerable:true, writable:false, value:8});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_NODE", {configurable:false, enumerable:true, writable:false, value:9});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_TYPE_NODE", {configurable:false, enumerable:true, writable:false, value:10});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_FRAGMENT_NODE", {configurable:false, enumerable:true, writable:false, value:11});
bodavm.toolsFunc.defineProperty(Node, "NOTATION_NODE", {configurable:false, enumerable:true, writable:false, value:12});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_DISCONNECTED", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_PRECEDING", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_FOLLOWING", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINS", {configurable:false, enumerable:true, writable:false, value:8});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINED_BY", {configurable:false, enumerable:true, writable:false, value:16});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {configurable:false, enumerable:true, writable:false, value:32});
bodavm.toolsFunc.defineProperty(Node.prototype, "nodeType", {configurable:true, enumerable:true, get:function nodeType (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nodeType_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "nodeName", {configurable:true, enumerable:true, get:function nodeName (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nodeName_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "baseURI", {configurable:true, enumerable:true, get:function baseURI (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "baseURI_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "isConnected", {configurable:true, enumerable:true, get:function isConnected (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "isConnected_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "ownerDocument", {configurable:true, enumerable:true, get:function ownerDocument (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "ownerDocument_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "parentNode", {configurable:true, enumerable:true, get:function parentNode (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "parentNode_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "parentElement", {configurable:true, enumerable:true, get:function parentElement (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "parentElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "childNodes", {configurable:true, enumerable:true, get:function childNodes (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "childNodes_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "firstChild", {configurable:true, enumerable:true, get:function firstChild (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "firstChild_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "lastChild", {configurable:true, enumerable:true, get:function lastChild (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "lastChild_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "previousSibling", {configurable:true, enumerable:true, get:function previousSibling (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "previousSibling_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "nextSibling", {configurable:true, enumerable:true, get:function nextSibling (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nextSibling_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Node.prototype, "nodeValue", {configurable:true, enumerable:true, get:function nodeValue (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nodeValue_get", arguments)}, set:function nodeValue (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nodeValue_set", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "textContent", {configurable:true, enumerable:true, get:function textContent (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "textContent_get", arguments)}, set:function textContent (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "textContent_set", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "ELEMENT_NODE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Node.prototype, "ATTRIBUTE_NODE", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(Node.prototype, "TEXT_NODE", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(Node.prototype, "CDATA_SECTION_NODE", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(Node.prototype, "ENTITY_REFERENCE_NODE", {configurable:false, enumerable:true, writable:false, value:5});
bodavm.toolsFunc.defineProperty(Node.prototype, "ENTITY_NODE", {configurable:false, enumerable:true, writable:false, value:6});
bodavm.toolsFunc.defineProperty(Node.prototype, "PROCESSING_INSTRUCTION_NODE", {configurable:false, enumerable:true, writable:false, value:7});
bodavm.toolsFunc.defineProperty(Node.prototype, "COMMENT_NODE", {configurable:false, enumerable:true, writable:false, value:8});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_NODE", {configurable:false, enumerable:true, writable:false, value:9});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_TYPE_NODE", {configurable:false, enumerable:true, writable:false, value:10});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_FRAGMENT_NODE", {configurable:false, enumerable:true, writable:false, value:11});
bodavm.toolsFunc.defineProperty(Node.prototype, "NOTATION_NODE", {configurable:false, enumerable:true, writable:false, value:12});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_PRECEDING", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINS", {configurable:false, enumerable:true, writable:false, value:8});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", {configurable:false, enumerable:true, writable:false, value:16});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {configurable:false, enumerable:true, writable:false, value:32});
bodavm.toolsFunc.defineProperty(Node.prototype, "appendChild", {configurable:true, enumerable:true, writable:true, value:function appendChild (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "appendChild", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "cloneNode", {configurable:true, enumerable:true, writable:true, value:function cloneNode (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "cloneNode", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "compareDocumentPosition", {configurable:true, enumerable:true, writable:true, value:function compareDocumentPosition (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "compareDocumentPosition", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "contains", {configurable:true, enumerable:true, writable:true, value:function contains (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "contains", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "getRootNode", {configurable:true, enumerable:true, writable:true, value:function getRootNode (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "getRootNode", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "hasChildNodes", {configurable:true, enumerable:true, writable:true, value:function hasChildNodes (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "hasChildNodes", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "insertBefore", {configurable:true, enumerable:true, writable:true, value:function insertBefore (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "insertBefore", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "isDefaultNamespace", {configurable:true, enumerable:true, writable:true, value:function isDefaultNamespace (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "isDefaultNamespace", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "isEqualNode", {configurable:true, enumerable:true, writable:true, value:function isEqualNode (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "isEqualNode", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "isSameNode", {configurable:true, enumerable:true, writable:true, value:function isSameNode (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "isSameNode", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "lookupNamespaceURI", {configurable:true, enumerable:true, writable:true, value:function lookupNamespaceURI (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "lookupNamespaceURI", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "lookupPrefix", {configurable:true, enumerable:true, writable:true, value:function lookupPrefix (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "lookupPrefix", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "normalize", {configurable:true, enumerable:true, writable:true, value:function normalize (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "normalize", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "removeChild", {configurable:true, enumerable:true, writable:true, value:function removeChild (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "removeChild", arguments)}});
bodavm.toolsFunc.defineProperty(Node.prototype, "replaceChild", {configurable:true, enumerable:true, writable:true, value:function replaceChild (){return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "replaceChild", arguments)}});


// Element对象
Element = function Element(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Element, "Element");
Element.prototype.__proto__=Node.prototype;
Element.__proto__=Node;
bodavm.toolsFunc.defineProperty(Element.prototype, "namespaceURI", {configurable:true, enumerable:true, get:function namespaceURI (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "namespaceURI_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "prefix", {configurable:true, enumerable:true, get:function prefix (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "prefix_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "localName", {configurable:true, enumerable:true, get:function localName (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "localName_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "tagName", {configurable:true, enumerable:true, get:function tagName (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "tagName_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "id", {configurable:true, enumerable:true, get:function id (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "id_get", arguments)}, set:function id (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "id_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "className", {configurable:true, enumerable:true, get:function className (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "className_get", arguments)}, set:function className (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "className_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "classList", {configurable:true, enumerable:true, get:function classList (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "classList_get", arguments)}, set:function classList (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "classList_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "slot", {configurable:true, enumerable:true, get:function slot (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "slot_get", arguments)}, set:function slot (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "slot_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "attributes", {configurable:true, enumerable:true, get:function attributes (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "attributes_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "shadowRoot", {configurable:true, enumerable:true, get:function shadowRoot (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "shadowRoot_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "part", {configurable:true, enumerable:true, get:function part (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "part_get", arguments)}, set:function part (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "part_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "assignedSlot", {configurable:true, enumerable:true, get:function assignedSlot (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "assignedSlot_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "innerHTML", {configurable:true, enumerable:true, get:function innerHTML (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "innerHTML_get", arguments)}, set:function innerHTML (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "innerHTML_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "outerHTML", {configurable:true, enumerable:true, get:function outerHTML (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "outerHTML_get", arguments)}, set:function outerHTML (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "outerHTML_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollTop", {configurable:true, enumerable:true, get:function scrollTop (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollTop_get", arguments)}, set:function scrollTop (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollTop_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollLeft", {configurable:true, enumerable:true, get:function scrollLeft (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollLeft_get", arguments)}, set:function scrollLeft (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollLeft_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollWidth", {configurable:true, enumerable:true, get:function scrollWidth (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollWidth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollHeight", {configurable:true, enumerable:true, get:function scrollHeight (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollHeight_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "clientTop", {configurable:true, enumerable:true, get:function clientTop (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "clientTop_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "clientLeft", {configurable:true, enumerable:true, get:function clientLeft (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "clientLeft_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "clientWidth", {configurable:true, enumerable:true, get:function clientWidth (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "clientWidth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "clientHeight", {configurable:true, enumerable:true, get:function clientHeight (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "clientHeight_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "attributeStyleMap", {configurable:true, enumerable:true, get:function attributeStyleMap (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "attributeStyleMap_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "onbeforecopy", {configurable:true, enumerable:true, get:function onbeforecopy (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforecopy_get", arguments)}, set:function onbeforecopy (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforecopy_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "onbeforecut", {configurable:true, enumerable:true, get:function onbeforecut (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforecut_get", arguments)}, set:function onbeforecut (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforecut_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "onbeforepaste", {configurable:true, enumerable:true, get:function onbeforepaste (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforepaste_get", arguments)}, set:function onbeforepaste (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onbeforepaste_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "onsearch", {configurable:true, enumerable:true, get:function onsearch (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onsearch_get", arguments)}, set:function onsearch (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onsearch_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "elementTiming", {configurable:true, enumerable:true, get:function elementTiming (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "elementTiming_get", arguments)}, set:function elementTiming (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "elementTiming_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "onfullscreenchange", {configurable:true, enumerable:true, get:function onfullscreenchange (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onfullscreenchange_get", arguments)}, set:function onfullscreenchange (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onfullscreenchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "onfullscreenerror", {configurable:true, enumerable:true, get:function onfullscreenerror (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onfullscreenerror_get", arguments)}, set:function onfullscreenerror (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onfullscreenerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenchange", {configurable:true, enumerable:true, get:function onwebkitfullscreenchange (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onwebkitfullscreenchange_get", arguments)}, set:function onwebkitfullscreenchange (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onwebkitfullscreenchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenerror", {configurable:true, enumerable:true, get:function onwebkitfullscreenerror (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onwebkitfullscreenerror_get", arguments)}, set:function onwebkitfullscreenerror (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "onwebkitfullscreenerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "children", {configurable:true, enumerable:true, get:function children (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "children_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "firstElementChild", {configurable:true, enumerable:true, get:function firstElementChild (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "firstElementChild_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "lastElementChild", {configurable:true, enumerable:true, get:function lastElementChild (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "lastElementChild_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "childElementCount", {configurable:true, enumerable:true, get:function childElementCount (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "childElementCount_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "previousElementSibling", {configurable:true, enumerable:true, get:function previousElementSibling (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "previousElementSibling_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "nextElementSibling", {configurable:true, enumerable:true, get:function nextElementSibling (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "nextElementSibling_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Element.prototype, "after", {configurable:true, enumerable:true, writable:true, value:function after (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "after", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "animate", {configurable:true, enumerable:true, writable:true, value:function animate (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "animate", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "append", {configurable:true, enumerable:true, writable:true, value:function append (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "append", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "attachShadow", {configurable:true, enumerable:true, writable:true, value:function attachShadow (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "attachShadow", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "before", {configurable:true, enumerable:true, writable:true, value:function before (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "before", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "closest", {configurable:true, enumerable:true, writable:true, value:function closest (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "closest", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "computedStyleMap", {configurable:true, enumerable:true, writable:true, value:function computedStyleMap (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "computedStyleMap", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttribute", {configurable:true, enumerable:true, writable:true, value:function getAttribute (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttribute", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttributeNS", {configurable:true, enumerable:true, writable:true, value:function getAttributeNS (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttributeNS", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttributeNames", {configurable:true, enumerable:true, writable:true, value:function getAttributeNames (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttributeNames", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttributeNode", {configurable:true, enumerable:true, writable:true, value:function getAttributeNode (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttributeNode", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAttributeNodeNS", {configurable:true, enumerable:true, writable:true, value:function getAttributeNodeNS (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttributeNodeNS", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getBoundingClientRect", {configurable:true, enumerable:true, writable:true, value:function getBoundingClientRect (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getBoundingClientRect", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getClientRects", {configurable:true, enumerable:true, writable:true, value:function getClientRects (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getClientRects", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getElementsByClassName", {configurable:true, enumerable:true, writable:true, value:function getElementsByClassName (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getElementsByClassName", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getElementsByTagName", {configurable:true, enumerable:true, writable:true, value:function getElementsByTagName (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getElementsByTagName", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getElementsByTagNameNS", {configurable:true, enumerable:true, writable:true, value:function getElementsByTagNameNS (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getElementsByTagNameNS", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getInnerHTML", {configurable:true, enumerable:true, writable:true, value:function getInnerHTML (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getInnerHTML", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "hasAttribute", {configurable:true, enumerable:true, writable:true, value:function hasAttribute (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "hasAttribute", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "hasAttributeNS", {configurable:true, enumerable:true, writable:true, value:function hasAttributeNS (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "hasAttributeNS", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "hasAttributes", {configurable:true, enumerable:true, writable:true, value:function hasAttributes (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "hasAttributes", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "hasPointerCapture", {configurable:true, enumerable:true, writable:true, value:function hasPointerCapture (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "hasPointerCapture", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentElement", {configurable:true, enumerable:true, writable:true, value:function insertAdjacentElement (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "insertAdjacentElement", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentHTML", {configurable:true, enumerable:true, writable:true, value:function insertAdjacentHTML (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "insertAdjacentHTML", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentText", {configurable:true, enumerable:true, writable:true, value:function insertAdjacentText (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "insertAdjacentText", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "matches", {configurable:true, enumerable:true, writable:true, value:function matches (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "matches", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "prepend", {configurable:true, enumerable:true, writable:true, value:function prepend (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "prepend", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "querySelector", {configurable:true, enumerable:true, writable:true, value:function querySelector (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "querySelector", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "querySelectorAll", {configurable:true, enumerable:true, writable:true, value:function querySelectorAll (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "querySelectorAll", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "releasePointerCapture", {configurable:true, enumerable:true, writable:true, value:function releasePointerCapture (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "releasePointerCapture", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "remove", {configurable:true, enumerable:true, writable:true, value:function remove (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "remove", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "removeAttribute", {configurable:true, enumerable:true, writable:true, value:function removeAttribute (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "removeAttribute", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "removeAttributeNS", {configurable:true, enumerable:true, writable:true, value:function removeAttributeNS (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "removeAttributeNS", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "removeAttributeNode", {configurable:true, enumerable:true, writable:true, value:function removeAttributeNode (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "removeAttributeNode", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "replaceChildren", {configurable:true, enumerable:true, writable:true, value:function replaceChildren (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "replaceChildren", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "replaceWith", {configurable:true, enumerable:true, writable:true, value:function replaceWith (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "replaceWith", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "requestFullscreen", {configurable:true, enumerable:true, writable:true, value:function requestFullscreen (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "requestFullscreen", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "requestPointerLock", {configurable:true, enumerable:true, writable:true, value:function requestPointerLock (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "requestPointerLock", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "scroll", {configurable:true, enumerable:true, writable:true, value:function scroll (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scroll", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollBy", {configurable:true, enumerable:true, writable:true, value:function scrollBy (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollBy", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollIntoView", {configurable:true, enumerable:true, writable:true, value:function scrollIntoView (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollIntoView", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollIntoViewIfNeeded", {configurable:true, enumerable:true, writable:true, value:function scrollIntoViewIfNeeded (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollIntoViewIfNeeded", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "scrollTo", {configurable:true, enumerable:true, writable:true, value:function scrollTo (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "scrollTo", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "setAttribute", {configurable:true, enumerable:true, writable:true, value:function setAttribute (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setAttribute", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "setAttributeNS", {configurable:true, enumerable:true, writable:true, value:function setAttributeNS (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setAttributeNS", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "setAttributeNode", {configurable:true, enumerable:true, writable:true, value:function setAttributeNode (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setAttributeNode", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "setAttributeNodeNS", {configurable:true, enumerable:true, writable:true, value:function setAttributeNodeNS (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setAttributeNodeNS", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "setPointerCapture", {configurable:true, enumerable:true, writable:true, value:function setPointerCapture (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "setPointerCapture", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "toggleAttribute", {configurable:true, enumerable:true, writable:true, value:function toggleAttribute (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "toggleAttribute", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "webkitMatchesSelector", {configurable:true, enumerable:true, writable:true, value:function webkitMatchesSelector (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "webkitMatchesSelector", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullScreen", {configurable:true, enumerable:true, writable:true, value:function webkitRequestFullScreen (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "webkitRequestFullScreen", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullscreen", {configurable:true, enumerable:true, writable:true, value:function webkitRequestFullscreen (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "webkitRequestFullscreen", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaAtomic", {configurable:true, enumerable:true, get:function ariaAtomic (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaAtomic_get", arguments)}, set:function ariaAtomic (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaAtomic_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaAutoComplete", {configurable:true, enumerable:true, get:function ariaAutoComplete (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaAutoComplete_get", arguments)}, set:function ariaAutoComplete (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaAutoComplete_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaBusy", {configurable:true, enumerable:true, get:function ariaBusy (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaBusy_get", arguments)}, set:function ariaBusy (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaBusy_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaChecked", {configurable:true, enumerable:true, get:function ariaChecked (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaChecked_get", arguments)}, set:function ariaChecked (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaChecked_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaColCount", {configurable:true, enumerable:true, get:function ariaColCount (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColCount_get", arguments)}, set:function ariaColCount (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColCount_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaColIndex", {configurable:true, enumerable:true, get:function ariaColIndex (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColIndex_get", arguments)}, set:function ariaColIndex (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColIndex_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaColSpan", {configurable:true, enumerable:true, get:function ariaColSpan (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColSpan_get", arguments)}, set:function ariaColSpan (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaColSpan_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaCurrent", {configurable:true, enumerable:true, get:function ariaCurrent (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaCurrent_get", arguments)}, set:function ariaCurrent (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaCurrent_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaDescription", {configurable:true, enumerable:true, get:function ariaDescription (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaDescription_get", arguments)}, set:function ariaDescription (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaDescription_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaDisabled", {configurable:true, enumerable:true, get:function ariaDisabled (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaDisabled_get", arguments)}, set:function ariaDisabled (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaDisabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaExpanded", {configurable:true, enumerable:true, get:function ariaExpanded (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaExpanded_get", arguments)}, set:function ariaExpanded (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaExpanded_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaHasPopup", {configurable:true, enumerable:true, get:function ariaHasPopup (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaHasPopup_get", arguments)}, set:function ariaHasPopup (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaHasPopup_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaHidden", {configurable:true, enumerable:true, get:function ariaHidden (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaHidden_get", arguments)}, set:function ariaHidden (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaHidden_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaInvalid", {configurable:true, enumerable:true, get:function ariaInvalid (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaInvalid_get", arguments)}, set:function ariaInvalid (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaInvalid_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaKeyShortcuts", {configurable:true, enumerable:true, get:function ariaKeyShortcuts (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaKeyShortcuts_get", arguments)}, set:function ariaKeyShortcuts (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaKeyShortcuts_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaLabel", {configurable:true, enumerable:true, get:function ariaLabel (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLabel_get", arguments)}, set:function ariaLabel (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLabel_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaLevel", {configurable:true, enumerable:true, get:function ariaLevel (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLevel_get", arguments)}, set:function ariaLevel (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLevel_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaLive", {configurable:true, enumerable:true, get:function ariaLive (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLive_get", arguments)}, set:function ariaLive (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaLive_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaModal", {configurable:true, enumerable:true, get:function ariaModal (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaModal_get", arguments)}, set:function ariaModal (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaModal_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaMultiLine", {configurable:true, enumerable:true, get:function ariaMultiLine (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaMultiLine_get", arguments)}, set:function ariaMultiLine (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaMultiLine_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaMultiSelectable", {configurable:true, enumerable:true, get:function ariaMultiSelectable (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaMultiSelectable_get", arguments)}, set:function ariaMultiSelectable (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaMultiSelectable_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaOrientation", {configurable:true, enumerable:true, get:function ariaOrientation (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaOrientation_get", arguments)}, set:function ariaOrientation (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaOrientation_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaPlaceholder", {configurable:true, enumerable:true, get:function ariaPlaceholder (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPlaceholder_get", arguments)}, set:function ariaPlaceholder (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPlaceholder_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaPosInSet", {configurable:true, enumerable:true, get:function ariaPosInSet (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPosInSet_get", arguments)}, set:function ariaPosInSet (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPosInSet_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaPressed", {configurable:true, enumerable:true, get:function ariaPressed (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPressed_get", arguments)}, set:function ariaPressed (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaPressed_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaReadOnly", {configurable:true, enumerable:true, get:function ariaReadOnly (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaReadOnly_get", arguments)}, set:function ariaReadOnly (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaReadOnly_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRelevant", {configurable:true, enumerable:true, get:function ariaRelevant (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRelevant_get", arguments)}, set:function ariaRelevant (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRelevant_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRequired", {configurable:true, enumerable:true, get:function ariaRequired (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRequired_get", arguments)}, set:function ariaRequired (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRequired_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRoleDescription", {configurable:true, enumerable:true, get:function ariaRoleDescription (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRoleDescription_get", arguments)}, set:function ariaRoleDescription (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRoleDescription_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRowCount", {configurable:true, enumerable:true, get:function ariaRowCount (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowCount_get", arguments)}, set:function ariaRowCount (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowCount_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRowIndex", {configurable:true, enumerable:true, get:function ariaRowIndex (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowIndex_get", arguments)}, set:function ariaRowIndex (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowIndex_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaRowSpan", {configurable:true, enumerable:true, get:function ariaRowSpan (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowSpan_get", arguments)}, set:function ariaRowSpan (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaRowSpan_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaSelected", {configurable:true, enumerable:true, get:function ariaSelected (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSelected_get", arguments)}, set:function ariaSelected (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSelected_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaSetSize", {configurable:true, enumerable:true, get:function ariaSetSize (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSetSize_get", arguments)}, set:function ariaSetSize (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSetSize_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaSort", {configurable:true, enumerable:true, get:function ariaSort (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSort_get", arguments)}, set:function ariaSort (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaSort_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaValueMax", {configurable:true, enumerable:true, get:function ariaValueMax (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueMax_get", arguments)}, set:function ariaValueMax (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueMax_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaValueMin", {configurable:true, enumerable:true, get:function ariaValueMin (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueMin_get", arguments)}, set:function ariaValueMin (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueMin_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaValueNow", {configurable:true, enumerable:true, get:function ariaValueNow (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueNow_get", arguments)}, set:function ariaValueNow (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueNow_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "ariaValueText", {configurable:true, enumerable:true, get:function ariaValueText (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueText_get", arguments)}, set:function ariaValueText (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "ariaValueText_set", arguments)}});
bodavm.toolsFunc.defineProperty(Element.prototype, "getAnimations", {configurable:true, enumerable:true, writable:true, value:function getAnimations (){return bodavm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAnimations", arguments)}});

// HTMLElement对象
HTMLElement = function HTMLElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLElement, "HTMLElement");
HTMLElement.prototype.__proto__=Element.prototype;
HTMLElement.__proto__=Element;
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "title", {configurable:true, enumerable:true, get:function title (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "title_get", arguments)}, set:function title (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "title_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "lang", {configurable:true, enumerable:true, get:function lang (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "lang_get", arguments)}, set:function lang (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "lang_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "translate", {configurable:true, enumerable:true, get:function translate (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "translate_get", arguments)}, set:function translate (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "translate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "dir", {configurable:true, enumerable:true, get:function dir (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "dir_get", arguments)}, set:function dir (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "dir_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "hidden", {configurable:true, enumerable:true, get:function hidden (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "hidden_get", arguments)}, set:function hidden (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "hidden_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "accessKey", {configurable:true, enumerable:true, get:function accessKey (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "accessKey_get", arguments)}, set:function accessKey (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "accessKey_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "draggable", {configurable:true, enumerable:true, get:function draggable (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "draggable_get", arguments)}, set:function draggable (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "draggable_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "spellcheck", {configurable:true, enumerable:true, get:function spellcheck (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "spellcheck_get", arguments)}, set:function spellcheck (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "spellcheck_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "autocapitalize", {configurable:true, enumerable:true, get:function autocapitalize (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "autocapitalize_get", arguments)}, set:function autocapitalize (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "autocapitalize_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "contentEditable", {configurable:true, enumerable:true, get:function contentEditable (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "contentEditable_get", arguments)}, set:function contentEditable (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "contentEditable_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "isContentEditable", {configurable:true, enumerable:true, get:function isContentEditable (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "isContentEditable_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "inputMode", {configurable:true, enumerable:true, get:function inputMode (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "inputMode_get", arguments)}, set:function inputMode (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "inputMode_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetParent", {configurable:true, enumerable:true, get:function offsetParent (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetParent_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetTop", {configurable:true, enumerable:true, get:function offsetTop (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetTop_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetLeft", {configurable:true, enumerable:true, get:function offsetLeft (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetLeft_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetWidth", {configurable:true, enumerable:true, get:function offsetWidth (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetWidth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetHeight", {configurable:true, enumerable:true, get:function offsetHeight (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "offsetHeight_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "innerText", {configurable:true, enumerable:true, get:function innerText (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "innerText_get", arguments)}, set:function innerText (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "innerText_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "outerText", {configurable:true, enumerable:true, get:function outerText (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "outerText_get", arguments)}, set:function outerText (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "outerText_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforexrselect", {configurable:true, enumerable:true, get:function onbeforexrselect (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforexrselect_get", arguments)}, set:function onbeforexrselect (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforexrselect_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onabort", {configurable:true, enumerable:true, get:function onabort (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onabort_get", arguments)}, set:function onabort (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onabort_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onblur", {configurable:true, enumerable:true, get:function onblur (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onblur_get", arguments)}, set:function onblur (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onblur_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncancel", {configurable:true, enumerable:true, get:function oncancel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncancel_get", arguments)}, set:function oncancel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplay", {configurable:true, enumerable:true, get:function oncanplay (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncanplay_get", arguments)}, set:function oncanplay (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncanplay_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplaythrough", {configurable:true, enumerable:true, get:function oncanplaythrough (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncanplaythrough_get", arguments)}, set:function oncanplaythrough (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncanplaythrough_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onclick", {configurable:true, enumerable:true, get:function onclick (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onclick_get", arguments)}, set:function onclick (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onclose", {configurable:true, enumerable:true, get:function onclose (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onclose_get", arguments)}, set:function onclose (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onclose_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextlost", {configurable:true, enumerable:true, get:function oncontextlost (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextlost_get", arguments)}, set:function oncontextlost (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextlost_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextmenu", {configurable:true, enumerable:true, get:function oncontextmenu (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextmenu_get", arguments)}, set:function oncontextmenu (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextmenu_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextrestored", {configurable:true, enumerable:true, get:function oncontextrestored (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextrestored_get", arguments)}, set:function oncontextrestored (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncontextrestored_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncuechange", {configurable:true, enumerable:true, get:function oncuechange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncuechange_get", arguments)}, set:function oncuechange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncuechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondblclick", {configurable:true, enumerable:true, get:function ondblclick (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondblclick_get", arguments)}, set:function ondblclick (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondblclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondrag", {configurable:true, enumerable:true, get:function ondrag (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondrag_get", arguments)}, set:function ondrag (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondrag_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragend", {configurable:true, enumerable:true, get:function ondragend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragend_get", arguments)}, set:function ondragend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragend_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragenter", {configurable:true, enumerable:true, get:function ondragenter (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragenter_get", arguments)}, set:function ondragenter (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragleave", {configurable:true, enumerable:true, get:function ondragleave (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragleave_get", arguments)}, set:function ondragleave (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragover", {configurable:true, enumerable:true, get:function ondragover (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragover_get", arguments)}, set:function ondragover (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragover_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragstart", {configurable:true, enumerable:true, get:function ondragstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragstart_get", arguments)}, set:function ondragstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondragstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondrop", {configurable:true, enumerable:true, get:function ondrop (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondrop_get", arguments)}, set:function ondrop (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondrop_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ondurationchange", {configurable:true, enumerable:true, get:function ondurationchange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondurationchange_get", arguments)}, set:function ondurationchange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ondurationchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onemptied", {configurable:true, enumerable:true, get:function onemptied (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onemptied_get", arguments)}, set:function onemptied (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onemptied_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onended", {configurable:true, enumerable:true, get:function onended (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onended_get", arguments)}, set:function onended (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onended_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onfocus", {configurable:true, enumerable:true, get:function onfocus (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onfocus_get", arguments)}, set:function onfocus (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onfocus_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onformdata", {configurable:true, enumerable:true, get:function onformdata (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onformdata_get", arguments)}, set:function onformdata (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onformdata_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oninput", {configurable:true, enumerable:true, get:function oninput (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oninput_get", arguments)}, set:function oninput (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oninput_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oninvalid", {configurable:true, enumerable:true, get:function oninvalid (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oninvalid_get", arguments)}, set:function oninvalid (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oninvalid_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeydown", {configurable:true, enumerable:true, get:function onkeydown (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeydown_get", arguments)}, set:function onkeydown (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeydown_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeypress", {configurable:true, enumerable:true, get:function onkeypress (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeypress_get", arguments)}, set:function onkeypress (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeypress_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeyup", {configurable:true, enumerable:true, get:function onkeyup (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeyup_get", arguments)}, set:function onkeyup (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onkeyup_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onload", {configurable:true, enumerable:true, get:function onload (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onload_get", arguments)}, set:function onload (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onload_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadeddata", {configurable:true, enumerable:true, get:function onloadeddata (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadeddata_get", arguments)}, set:function onloadeddata (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadeddata_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadedmetadata", {configurable:true, enumerable:true, get:function onloadedmetadata (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadedmetadata_get", arguments)}, set:function onloadedmetadata (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadedmetadata_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadstart", {configurable:true, enumerable:true, get:function onloadstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadstart_get", arguments)}, set:function onloadstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onloadstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousedown", {configurable:true, enumerable:true, get:function onmousedown (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousedown_get", arguments)}, set:function onmousedown (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousedown_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseenter", {configurable:true, enumerable:true, get:function onmouseenter (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseenter_get", arguments)}, set:function onmouseenter (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseleave", {configurable:true, enumerable:true, get:function onmouseleave (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseleave_get", arguments)}, set:function onmouseleave (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousemove", {configurable:true, enumerable:true, get:function onmousemove (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousemove_get", arguments)}, set:function onmousemove (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousemove_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseout", {configurable:true, enumerable:true, get:function onmouseout (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseout_get", arguments)}, set:function onmouseout (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseout_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseover", {configurable:true, enumerable:true, get:function onmouseover (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseover_get", arguments)}, set:function onmouseover (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseover_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseup", {configurable:true, enumerable:true, get:function onmouseup (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseup_get", arguments)}, set:function onmouseup (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmouseup_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousewheel", {configurable:true, enumerable:true, get:function onmousewheel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousewheel_get", arguments)}, set:function onmousewheel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onmousewheel_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpause", {configurable:true, enumerable:true, get:function onpause (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpause_get", arguments)}, set:function onpause (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpause_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onplay", {configurable:true, enumerable:true, get:function onplay (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onplay_get", arguments)}, set:function onplay (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onplay_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onplaying", {configurable:true, enumerable:true, get:function onplaying (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onplaying_get", arguments)}, set:function onplaying (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onplaying_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onprogress", {configurable:true, enumerable:true, get:function onprogress (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onprogress_get", arguments)}, set:function onprogress (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onprogress_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onratechange", {configurable:true, enumerable:true, get:function onratechange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onratechange_get", arguments)}, set:function onratechange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onratechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onreset", {configurable:true, enumerable:true, get:function onreset (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onreset_get", arguments)}, set:function onreset (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onreset_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onresize", {configurable:true, enumerable:true, get:function onresize (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onresize_get", arguments)}, set:function onresize (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onresize_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onscroll", {configurable:true, enumerable:true, get:function onscroll (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onscroll_get", arguments)}, set:function onscroll (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onscroll_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onsecuritypolicyviolation", {configurable:true, enumerable:true, get:function onsecuritypolicyviolation (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsecuritypolicyviolation_get", arguments)}, set:function onsecuritypolicyviolation (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsecuritypolicyviolation_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onseeked", {configurable:true, enumerable:true, get:function onseeked (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onseeked_get", arguments)}, set:function onseeked (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onseeked_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onseeking", {configurable:true, enumerable:true, get:function onseeking (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onseeking_get", arguments)}, set:function onseeking (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onseeking_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onselect", {configurable:true, enumerable:true, get:function onselect (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselect_get", arguments)}, set:function onselect (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselect_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onslotchange", {configurable:true, enumerable:true, get:function onslotchange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onslotchange_get", arguments)}, set:function onslotchange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onslotchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onstalled", {configurable:true, enumerable:true, get:function onstalled (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onstalled_get", arguments)}, set:function onstalled (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onstalled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onsubmit", {configurable:true, enumerable:true, get:function onsubmit (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsubmit_get", arguments)}, set:function onsubmit (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsubmit_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onsuspend", {configurable:true, enumerable:true, get:function onsuspend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsuspend_get", arguments)}, set:function onsuspend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onsuspend_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontimeupdate", {configurable:true, enumerable:true, get:function ontimeupdate (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontimeupdate_get", arguments)}, set:function ontimeupdate (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontimeupdate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontoggle", {configurable:true, enumerable:true, get:function ontoggle (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontoggle_get", arguments)}, set:function ontoggle (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontoggle_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onvolumechange", {configurable:true, enumerable:true, get:function onvolumechange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onvolumechange_get", arguments)}, set:function onvolumechange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onvolumechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwaiting", {configurable:true, enumerable:true, get:function onwaiting (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwaiting_get", arguments)}, set:function onwaiting (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwaiting_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationend", {configurable:true, enumerable:true, get:function onwebkitanimationend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationend_get", arguments)}, set:function onwebkitanimationend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationend_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationiteration", {configurable:true, enumerable:true, get:function onwebkitanimationiteration (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationiteration_get", arguments)}, set:function onwebkitanimationiteration (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationiteration_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationstart", {configurable:true, enumerable:true, get:function onwebkitanimationstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationstart_get", arguments)}, set:function onwebkitanimationstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkitanimationstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkittransitionend", {configurable:true, enumerable:true, get:function onwebkittransitionend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkittransitionend_get", arguments)}, set:function onwebkittransitionend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwebkittransitionend_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onwheel", {configurable:true, enumerable:true, get:function onwheel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwheel_get", arguments)}, set:function onwheel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onwheel_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onauxclick", {configurable:true, enumerable:true, get:function onauxclick (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onauxclick_get", arguments)}, set:function onauxclick (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onauxclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ongotpointercapture", {configurable:true, enumerable:true, get:function ongotpointercapture (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ongotpointercapture_get", arguments)}, set:function ongotpointercapture (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ongotpointercapture_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onlostpointercapture", {configurable:true, enumerable:true, get:function onlostpointercapture (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onlostpointercapture_get", arguments)}, set:function onlostpointercapture (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onlostpointercapture_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerdown", {configurable:true, enumerable:true, get:function onpointerdown (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerdown_get", arguments)}, set:function onpointerdown (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerdown_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointermove", {configurable:true, enumerable:true, get:function onpointermove (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointermove_get", arguments)}, set:function onpointermove (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointermove_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerup", {configurable:true, enumerable:true, get:function onpointerup (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerup_get", arguments)}, set:function onpointerup (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerup_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointercancel", {configurable:true, enumerable:true, get:function onpointercancel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointercancel_get", arguments)}, set:function onpointercancel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointercancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerover", {configurable:true, enumerable:true, get:function onpointerover (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerover_get", arguments)}, set:function onpointerover (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerover_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerout", {configurable:true, enumerable:true, get:function onpointerout (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerout_get", arguments)}, set:function onpointerout (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerout_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerenter", {configurable:true, enumerable:true, get:function onpointerenter (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerenter_get", arguments)}, set:function onpointerenter (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerleave", {configurable:true, enumerable:true, get:function onpointerleave (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerleave_get", arguments)}, set:function onpointerleave (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onselectstart", {configurable:true, enumerable:true, get:function onselectstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselectstart_get", arguments)}, set:function onselectstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselectstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onselectionchange", {configurable:true, enumerable:true, get:function onselectionchange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselectionchange_get", arguments)}, set:function onselectionchange (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onselectionchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationend", {configurable:true, enumerable:true, get:function onanimationend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationend_get", arguments)}, set:function onanimationend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationend_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationiteration", {configurable:true, enumerable:true, get:function onanimationiteration (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationiteration_get", arguments)}, set:function onanimationiteration (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationiteration_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationstart", {configurable:true, enumerable:true, get:function onanimationstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationstart_get", arguments)}, set:function onanimationstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onanimationstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionrun", {configurable:true, enumerable:true, get:function ontransitionrun (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionrun_get", arguments)}, set:function ontransitionrun (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionrun_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionstart", {configurable:true, enumerable:true, get:function ontransitionstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionstart_get", arguments)}, set:function ontransitionstart (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionend", {configurable:true, enumerable:true, get:function ontransitionend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionend_get", arguments)}, set:function ontransitionend (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitionend_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitioncancel", {configurable:true, enumerable:true, get:function ontransitioncancel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitioncancel_get", arguments)}, set:function ontransitioncancel (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "ontransitioncancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncopy", {configurable:true, enumerable:true, get:function oncopy (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncopy_get", arguments)}, set:function oncopy (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncopy_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "oncut", {configurable:true, enumerable:true, get:function oncut (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncut_get", arguments)}, set:function oncut (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "oncut_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpaste", {configurable:true, enumerable:true, get:function onpaste (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpaste_get", arguments)}, set:function onpaste (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpaste_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "dataset", {configurable:true, enumerable:true, get:function dataset (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "dataset_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "nonce", {configurable:true, enumerable:true, get:function nonce (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "nonce_get", arguments)}, set:function nonce (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "nonce_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "autofocus", {configurable:true, enumerable:true, get:function autofocus (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "autofocus_get", arguments)}, set:function autofocus (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "autofocus_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "tabIndex", {configurable:true, enumerable:true, get:function tabIndex (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "tabIndex_get", arguments)}, set:function tabIndex (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "tabIndex_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "style", {configurable:true, enumerable:true, get:function style (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "style_get", arguments)}, set:function style (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "style_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "attachInternals", {configurable:true, enumerable:true, writable:true, value:function attachInternals (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "attachInternals", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "blur", {configurable:true, enumerable:true, writable:true, value:function blur (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "blur", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "click", {configurable:true, enumerable:true, writable:true, value:function click (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "click", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "focus", {configurable:true, enumerable:true, writable:true, value:function focus (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "focus", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "inert", {configurable:true, enumerable:true, get:function inert (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "inert_get", arguments)}, set:function inert (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "inert_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "enterKeyHint", {configurable:true, enumerable:true, get:function enterKeyHint (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "enterKeyHint_get", arguments)}, set:function enterKeyHint (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "enterKeyHint_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "virtualKeyboardPolicy", {configurable:true, enumerable:true, get:function virtualKeyboardPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "virtualKeyboardPolicy_get", arguments)}, set:function virtualKeyboardPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "virtualKeyboardPolicy_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerrawupdate", {configurable:true, enumerable:true, get:function onpointerrawupdate (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerrawupdate_get", arguments)}, set:function onpointerrawupdate (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onpointerrawupdate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforematch", {configurable:true, enumerable:true, get:function onbeforematch (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforematch_get", arguments)}, set:function onbeforematch (){return bodavm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElement", "onbeforematch_set", arguments)}});

//HTMLCollection对象
HTMLCollection=function HTMLCollection(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLCollection,"HTMLCollection");
bodavm.toolsFunc.defineProperty(HTMLCollection.prototype,"length",{configurable:true, enumerable:true, get:function length () {return bodavm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","length_get",arguments,)},set:undefined});
bodavm.toolsFunc.defineProperty(HTMLCollection.prototype,"item",{configurable:true, enumerable:true, writable:true, value:function item() {return bodavm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","item",arguments)}});
bodavm.toolsFunc.defineProperty(HTMLCollection.prototype,"namedItem",{configurable:true, enumerable:true, writable:true, value:function namedItem() {return bodavm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","namedItem",arguments)}});

// HTMLAllCollection对象
HTMLAllCollection = function HTMLAllCollection(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLAllCollection, "HTMLAllCollection");
bodavm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollection", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollection", "item", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "namedItem", {configurable:true, enumerable:true, writable:true, value:function namedItem (){return bodavm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollection", "namedItem", arguments)}});

// HTMLAnchorElement对象
HTMLAnchorElement = function HTMLAnchorElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLAnchorElement, "HTMLAnchorElement");
HTMLAnchorElement.prototype.__proto__=HTMLElement.prototype;
HTMLAnchorElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "target", {configurable:true, enumerable:true, get:function target (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "target_get", arguments)}, set:function target (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "target_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "download", {configurable:true, enumerable:true, get:function download (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "download_get", arguments)}, set:function download (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "download_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "ping", {configurable:true, enumerable:true, get:function ping (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "ping_get", arguments)}, set:function ping (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "ping_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "rel", {configurable:true, enumerable:true, get:function rel (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "rel_get", arguments)}, set:function rel (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "rel_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "relList", {configurable:true, enumerable:true, get:function relList (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "relList_get", arguments)}, set:function relList (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "relList_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hreflang", {configurable:true, enumerable:true, get:function hreflang (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hreflang_get", arguments)}, set:function hreflang (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hreflang_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "type_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "referrerPolicy", {configurable:true, enumerable:true, get:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "referrerPolicy_get", arguments)}, set:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "referrerPolicy_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "text_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "coords", {configurable:true, enumerable:true, get:function coords (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "coords_get", arguments)}, set:function coords (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "coords_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "charset", {configurable:true, enumerable:true, get:function charset (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "charset_get", arguments)}, set:function charset (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "charset_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "rev", {configurable:true, enumerable:true, get:function rev (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "rev_get", arguments)}, set:function rev (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "rev_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "shape", {configurable:true, enumerable:true, get:function shape (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "shape_get", arguments)}, set:function shape (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "shape_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "origin", {configurable:true, enumerable:true, get:function origin (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "origin_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "protocol", {configurable:true, enumerable:true, get:function protocol (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "protocol_get", arguments)}, set:function protocol (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "protocol_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "username", {configurable:true, enumerable:true, get:function username (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "username_get", arguments)}, set:function username (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "username_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "password", {configurable:true, enumerable:true, get:function password (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "password_get", arguments)}, set:function password (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "password_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "host", {configurable:true, enumerable:true, get:function host (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "host_get", arguments)}, set:function host (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "host_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hostname", {configurable:true, enumerable:true, get:function hostname (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hostname_get", arguments)}, set:function hostname (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hostname_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "port", {configurable:true, enumerable:true, get:function port (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "port_get", arguments)}, set:function port (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "port_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "pathname", {configurable:true, enumerable:true, get:function pathname (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "pathname_get", arguments)}, set:function pathname (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "pathname_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "search", {configurable:true, enumerable:true, get:function search (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "search_get", arguments)}, set:function search (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "search_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hash", {configurable:true, enumerable:true, get:function hash (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hash_get", arguments)}, set:function hash (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hash_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "href", {configurable:true, enumerable:true, get:function href (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "href_get", arguments)}, set:function href (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "href_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "toString", {configurable:true, enumerable:true, writable:true, value:function toString (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "toString", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hrefTranslate", {configurable:true, enumerable:true, get:function hrefTranslate (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hrefTranslate_get", arguments)}, set:function hrefTranslate (){return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hrefTranslate_set", arguments)}});

// HTMLBodyElement对象
HTMLBodyElement = function HTMLBodyElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLBodyElement, "HTMLBodyElement");
HTMLBodyElement.prototype.__proto__=HTMLElement.prototype;
HTMLBodyElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "text_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "link", {configurable:true, enumerable:true, get:function link (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "link_get", arguments)}, set:function link (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "link_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "vLink", {configurable:true, enumerable:true, get:function vLink (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "vLink_get", arguments)}, set:function vLink (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "vLink_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "aLink", {configurable:true, enumerable:true, get:function aLink (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "aLink_get", arguments)}, set:function aLink (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "aLink_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "bgColor", {configurable:true, enumerable:true, get:function bgColor (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "bgColor_get", arguments)}, set:function bgColor (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "bgColor_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "background", {configurable:true, enumerable:true, get:function background (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "background_get", arguments)}, set:function background (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "background_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onblur", {configurable:true, enumerable:true, get:function onblur (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onblur_get", arguments)}, set:function onblur (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onblur_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onfocus", {configurable:true, enumerable:true, get:function onfocus (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onfocus_get", arguments)}, set:function onfocus (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onfocus_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onload", {configurable:true, enumerable:true, get:function onload (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onload_get", arguments)}, set:function onload (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onload_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onresize", {configurable:true, enumerable:true, get:function onresize (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onresize_get", arguments)}, set:function onresize (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onresize_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onscroll", {configurable:true, enumerable:true, get:function onscroll (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onscroll_get", arguments)}, set:function onscroll (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onscroll_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onafterprint", {configurable:true, enumerable:true, get:function onafterprint (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onafterprint_get", arguments)}, set:function onafterprint (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onafterprint_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onbeforeprint", {configurable:true, enumerable:true, get:function onbeforeprint (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onbeforeprint_get", arguments)}, set:function onbeforeprint (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onbeforeprint_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onbeforeunload", {configurable:true, enumerable:true, get:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onbeforeunload_get", arguments)}, set:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onbeforeunload_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onhashchange", {configurable:true, enumerable:true, get:function onhashchange (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onhashchange_get", arguments)}, set:function onhashchange (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onhashchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onlanguagechange", {configurable:true, enumerable:true, get:function onlanguagechange (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onlanguagechange_get", arguments)}, set:function onlanguagechange (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onlanguagechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onmessage", {configurable:true, enumerable:true, get:function onmessage (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onmessage_get", arguments)}, set:function onmessage (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onmessage_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onmessageerror", {configurable:true, enumerable:true, get:function onmessageerror (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onmessageerror_get", arguments)}, set:function onmessageerror (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onmessageerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onoffline", {configurable:true, enumerable:true, get:function onoffline (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onoffline_get", arguments)}, set:function onoffline (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onoffline_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "ononline", {configurable:true, enumerable:true, get:function ononline (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "ononline_get", arguments)}, set:function ononline (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "ononline_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpagehide", {configurable:true, enumerable:true, get:function onpagehide (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpagehide_get", arguments)}, set:function onpagehide (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpagehide_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpageshow", {configurable:true, enumerable:true, get:function onpageshow (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpageshow_get", arguments)}, set:function onpageshow (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpageshow_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpopstate", {configurable:true, enumerable:true, get:function onpopstate (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpopstate_get", arguments)}, set:function onpopstate (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onpopstate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onrejectionhandled", {configurable:true, enumerable:true, get:function onrejectionhandled (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onrejectionhandled_get", arguments)}, set:function onrejectionhandled (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onrejectionhandled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onstorage", {configurable:true, enumerable:true, get:function onstorage (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onstorage_get", arguments)}, set:function onstorage (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onstorage_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onunhandledrejection", {configurable:true, enumerable:true, get:function onunhandledrejection (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onunhandledrejection_get", arguments)}, set:function onunhandledrejection (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onunhandledrejection_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onunload", {configurable:true, enumerable:true, get:function onunload (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onunload_get", arguments)}, set:function onunload (){return bodavm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElement", "onunload_set", arguments)}});

// HTMLBRElement对象
HTMLBRElement = function HTMLBRElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLBRElement, "HTMLBRElement");
HTMLBRElement.prototype.__proto__=HTMLElement.prototype;
HTMLBRElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLBRElement.prototype, "clear", {configurable:true, enumerable:true, get:function clear (){return bodavm.toolsFunc.dispatch(this, HTMLBRElement.prototype, "HTMLBRElement", "clear_get", arguments)}, set:function clear (){return bodavm.toolsFunc.dispatch(this, HTMLBRElement.prototype, "HTMLBRElement", "clear_set", arguments)}});

// HTMLButtonElement对象
HTMLButtonElement = function HTMLButtonElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLButtonElement, "HTMLButtonElement");
HTMLButtonElement.prototype.__proto__=HTMLElement.prototype;
HTMLButtonElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "disabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "form", {configurable:true, enumerable:true, get:function form (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "form_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formAction", {configurable:true, enumerable:true, get:function formAction (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formAction_get", arguments)}, set:function formAction (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formAction_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formEnctype", {configurable:true, enumerable:true, get:function formEnctype (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formEnctype_get", arguments)}, set:function formEnctype (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formEnctype_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formMethod", {configurable:true, enumerable:true, get:function formMethod (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formMethod_get", arguments)}, set:function formMethod (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formMethod_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formNoValidate", {configurable:true, enumerable:true, get:function formNoValidate (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formNoValidate_get", arguments)}, set:function formNoValidate (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formNoValidate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formTarget", {configurable:true, enumerable:true, get:function formTarget (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formTarget_get", arguments)}, set:function formTarget (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "formTarget_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "type_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "value_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "willValidate", {configurable:true, enumerable:true, get:function willValidate (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "willValidate_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "validity", {configurable:true, enumerable:true, get:function validity (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "validity_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "validationMessage", {configurable:true, enumerable:true, get:function validationMessage (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "validationMessage_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "labels", {configurable:true, enumerable:true, get:function labels (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "labels_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "checkValidity", {configurable:true, enumerable:true, writable:true, value:function checkValidity (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "checkValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "reportValidity", {configurable:true, enumerable:true, writable:true, value:function reportValidity (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "reportValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "setCustomValidity", {configurable:true, enumerable:true, writable:true, value:function setCustomValidity (){return bodavm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElement", "setCustomValidity", arguments)}});

// HTMLCanvasElement对象
HTMLCanvasElement = function HTMLCanvasElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLCanvasElement, "HTMLCanvasElement");
HTMLCanvasElement.prototype.__proto__=HTMLElement.prototype;
HTMLCanvasElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "width_get", arguments)}, set:function width (){return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "width_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "height_get", arguments)}, set:function height (){return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "height_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "captureStream", {configurable:true, enumerable:true, writable:true, value:function captureStream (){return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "captureStream", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "getContext", {configurable:true, enumerable:true, writable:true, value:function getContext (){return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "getContext", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toBlob", {configurable:true, enumerable:true, writable:true, value:function toBlob (){return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "toBlob", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {configurable:true, enumerable:true, writable:true, value:function toDataURL (){return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "toDataURL", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "transferControlToOffscreen", {configurable:true, enumerable:true, writable:true, value:function transferControlToOffscreen (){return bodavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "transferControlToOffscreen", arguments)}});

// HTMLDivElement对象
HTMLDivElement = function HTMLDivElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLDivElement, "HTMLDivElement");
HTMLDivElement.prototype.__proto__=HTMLElement.prototype;
HTMLDivElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLDivElement.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElement", "align_set", arguments)}});

// HTMLFieldSetElement对象
HTMLFieldSetElement = function HTMLFieldSetElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLFieldSetElement, "HTMLFieldSetElement");
HTMLFieldSetElement.prototype.__proto__=HTMLElement.prototype;
HTMLFieldSetElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "disabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "form", {configurable:true, enumerable:true, get:function form (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "form_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "type_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "elements", {configurable:true, enumerable:true, get:function elements (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "elements_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "willValidate", {configurable:true, enumerable:true, get:function willValidate (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "willValidate_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "validity", {configurable:true, enumerable:true, get:function validity (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "validity_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "validationMessage", {configurable:true, enumerable:true, get:function validationMessage (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "validationMessage_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "checkValidity", {configurable:true, enumerable:true, writable:true, value:function checkValidity (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "checkValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "reportValidity", {configurable:true, enumerable:true, writable:true, value:function reportValidity (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "reportValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFieldSetElement.prototype, "setCustomValidity", {configurable:true, enumerable:true, writable:true, value:function setCustomValidity (){return bodavm.toolsFunc.dispatch(this, HTMLFieldSetElement.prototype, "HTMLFieldSetElement", "setCustomValidity", arguments)}});

// HTMLFontElement对象
HTMLFontElement = function HTMLFontElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLFontElement, "HTMLFontElement");
HTMLFontElement.prototype.__proto__=HTMLElement.prototype;
HTMLFontElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLFontElement.prototype, "color", {configurable:true, enumerable:true, get:function color (){return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "color_get", arguments)}, set:function color (){return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "color_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFontElement.prototype, "face", {configurable:true, enumerable:true, get:function face (){return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "face_get", arguments)}, set:function face (){return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "face_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFontElement.prototype, "size", {configurable:true, enumerable:true, get:function size (){return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "size_get", arguments)}, set:function size (){return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "size_set", arguments)}});

// HTMLFormElement对象
HTMLFormElement = function HTMLFormElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLFormElement, "HTMLFormElement");
HTMLFormElement.prototype.__proto__=HTMLElement.prototype;
HTMLFormElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "acceptCharset", {configurable:true, enumerable:true, get:function acceptCharset (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "acceptCharset_get", arguments)}, set:function acceptCharset (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "acceptCharset_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "action", {configurable:true, enumerable:true, get:function action (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "action_get", arguments)}, set:function action (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "action_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "autocomplete", {configurable:true, enumerable:true, get:function autocomplete (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "autocomplete_get", arguments)}, set:function autocomplete (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "autocomplete_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "enctype", {configurable:true, enumerable:true, get:function enctype (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "enctype_get", arguments)}, set:function enctype (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "enctype_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "encoding", {configurable:true, enumerable:true, get:function encoding (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "encoding_get", arguments)}, set:function encoding (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "encoding_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "method", {configurable:true, enumerable:true, get:function method (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "method_get", arguments)}, set:function method (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "method_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "noValidate", {configurable:true, enumerable:true, get:function noValidate (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "noValidate_get", arguments)}, set:function noValidate (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "noValidate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "target", {configurable:true, enumerable:true, get:function target (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "target_get", arguments)}, set:function target (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "target_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "elements", {configurable:true, enumerable:true, get:function elements (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "elements_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "checkValidity", {configurable:true, enumerable:true, writable:true, value:function checkValidity (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "checkValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "reportValidity", {configurable:true, enumerable:true, writable:true, value:function reportValidity (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "reportValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "requestSubmit", {configurable:true, enumerable:true, writable:true, value:function requestSubmit (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "requestSubmit", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "reset", {configurable:true, enumerable:true, writable:true, value:function reset (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "reset", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFormElement.prototype, "submit", {configurable:true, enumerable:true, writable:true, value:function submit (){return bodavm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElement", "submit", arguments)}});

// HTMLFrameSetElement对象
HTMLFrameSetElement = function HTMLFrameSetElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLFrameSetElement, "HTMLFrameSetElement");
HTMLFrameSetElement.prototype.__proto__=HTMLElement.prototype;
HTMLFrameSetElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "cols", {configurable:true, enumerable:true, get:function cols (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "cols_get", arguments)}, set:function cols (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "cols_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "rows", {configurable:true, enumerable:true, get:function rows (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "rows_get", arguments)}, set:function rows (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "rows_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onblur", {configurable:true, enumerable:true, get:function onblur (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onblur_get", arguments)}, set:function onblur (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onblur_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onfocus", {configurable:true, enumerable:true, get:function onfocus (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onfocus_get", arguments)}, set:function onfocus (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onfocus_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onload", {configurable:true, enumerable:true, get:function onload (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onload_get", arguments)}, set:function onload (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onload_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onresize", {configurable:true, enumerable:true, get:function onresize (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onresize_get", arguments)}, set:function onresize (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onresize_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onscroll", {configurable:true, enumerable:true, get:function onscroll (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onscroll_get", arguments)}, set:function onscroll (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onscroll_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onafterprint", {configurable:true, enumerable:true, get:function onafterprint (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onafterprint_get", arguments)}, set:function onafterprint (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onafterprint_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onbeforeprint", {configurable:true, enumerable:true, get:function onbeforeprint (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onbeforeprint_get", arguments)}, set:function onbeforeprint (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onbeforeprint_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onbeforeunload", {configurable:true, enumerable:true, get:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onbeforeunload_get", arguments)}, set:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onbeforeunload_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onhashchange", {configurable:true, enumerable:true, get:function onhashchange (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onhashchange_get", arguments)}, set:function onhashchange (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onhashchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onlanguagechange", {configurable:true, enumerable:true, get:function onlanguagechange (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onlanguagechange_get", arguments)}, set:function onlanguagechange (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onlanguagechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onmessage", {configurable:true, enumerable:true, get:function onmessage (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onmessage_get", arguments)}, set:function onmessage (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onmessage_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onmessageerror", {configurable:true, enumerable:true, get:function onmessageerror (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onmessageerror_get", arguments)}, set:function onmessageerror (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onmessageerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onoffline", {configurable:true, enumerable:true, get:function onoffline (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onoffline_get", arguments)}, set:function onoffline (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onoffline_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "ononline", {configurable:true, enumerable:true, get:function ononline (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "ononline_get", arguments)}, set:function ononline (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "ononline_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onpagehide", {configurable:true, enumerable:true, get:function onpagehide (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpagehide_get", arguments)}, set:function onpagehide (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpagehide_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onpageshow", {configurable:true, enumerable:true, get:function onpageshow (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpageshow_get", arguments)}, set:function onpageshow (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpageshow_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onpopstate", {configurable:true, enumerable:true, get:function onpopstate (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpopstate_get", arguments)}, set:function onpopstate (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onpopstate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onrejectionhandled", {configurable:true, enumerable:true, get:function onrejectionhandled (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onrejectionhandled_get", arguments)}, set:function onrejectionhandled (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onrejectionhandled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onstorage", {configurable:true, enumerable:true, get:function onstorage (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onstorage_get", arguments)}, set:function onstorage (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onstorage_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onunhandledrejection", {configurable:true, enumerable:true, get:function onunhandledrejection (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onunhandledrejection_get", arguments)}, set:function onunhandledrejection (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onunhandledrejection_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLFrameSetElement.prototype, "onunload", {configurable:true, enumerable:true, get:function onunload (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onunload_get", arguments)}, set:function onunload (){return bodavm.toolsFunc.dispatch(this, HTMLFrameSetElement.prototype, "HTMLFrameSetElement", "onunload_set", arguments)}});

// HTMLHeadElement对象
HTMLHeadElement = function HTMLHeadElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLHeadElement, "HTMLHeadElement");
HTMLHeadElement.prototype.__proto__=HTMLElement.prototype;
HTMLHeadElement.__proto__=HTMLElement;

// HTMLHeadingElement对象
HTMLHeadingElement = function HTMLHeadingElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLHeadingElement, "HTMLHeadingElement");
HTMLHeadingElement.prototype.__proto__=HTMLElement.prototype;
HTMLHeadingElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLHeadingElement.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, HTMLHeadingElement.prototype, "HTMLHeadingElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, HTMLHeadingElement.prototype, "HTMLHeadingElement", "align_set", arguments)}});

// HTMLHtmlElement对象
HTMLHtmlElement = function HTMLHtmlElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLHtmlElement, "HTMLHtmlElement");
HTMLHtmlElement.prototype.__proto__=HTMLElement.prototype;
HTMLHtmlElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLHtmlElement.prototype, "version", {configurable:true, enumerable:true, get:function version (){return bodavm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElement", "version_get", arguments)}, set:function version (){return bodavm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElement", "version_set", arguments)}});

// HTMLIFrameElement对象
HTMLIFrameElement = function HTMLIFrameElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLIFrameElement, "HTMLIFrameElement");
HTMLIFrameElement.prototype.__proto__=HTMLElement.prototype;
HTMLIFrameElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "src", {configurable:true, enumerable:true, get:function src (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "src_get", arguments)}, set:function src (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "src_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "srcdoc", {configurable:true, enumerable:true, get:function srcdoc (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "srcdoc_get", arguments)}, set:function srcdoc (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "srcdoc_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "sandbox", {configurable:true, enumerable:true, get:function sandbox (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "sandbox_get", arguments)}, set:function sandbox (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "sandbox_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "allowFullscreen", {configurable:true, enumerable:true, get:function allowFullscreen (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allowFullscreen_get", arguments)}, set:function allowFullscreen (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allowFullscreen_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "width_get", arguments)}, set:function width (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "width_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "height_get", arguments)}, set:function height (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "height_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "contentDocument", {configurable:true, enumerable:true, get:function contentDocument (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "contentDocument_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {configurable:true, enumerable:true, get:function contentWindow (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "contentWindow_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "referrerPolicy", {configurable:true, enumerable:true, get:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "referrerPolicy_get", arguments)}, set:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "referrerPolicy_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "csp", {configurable:true, enumerable:true, get:function csp (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "csp_get", arguments)}, set:function csp (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "csp_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "allow", {configurable:true, enumerable:true, get:function allow (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allow_get", arguments)}, set:function allow (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allow_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "featurePolicy", {configurable:true, enumerable:true, get:function featurePolicy (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "featurePolicy_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "align_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "scrolling", {configurable:true, enumerable:true, get:function scrolling (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "scrolling_get", arguments)}, set:function scrolling (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "scrolling_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "frameBorder", {configurable:true, enumerable:true, get:function frameBorder (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "frameBorder_get", arguments)}, set:function frameBorder (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "frameBorder_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "longDesc", {configurable:true, enumerable:true, get:function longDesc (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "longDesc_get", arguments)}, set:function longDesc (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "longDesc_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "marginHeight", {configurable:true, enumerable:true, get:function marginHeight (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "marginHeight_get", arguments)}, set:function marginHeight (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "marginHeight_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "marginWidth", {configurable:true, enumerable:true, get:function marginWidth (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "marginWidth_get", arguments)}, set:function marginWidth (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "marginWidth_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "getSVGDocument", {configurable:true, enumerable:true, writable:true, value:function getSVGDocument (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "getSVGDocument", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "loading", {configurable:true, enumerable:true, get:function loading (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "loading_get", arguments)}, set:function loading (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "loading_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "allowPaymentRequest", {configurable:true, enumerable:true, get:function allowPaymentRequest (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allowPaymentRequest_get", arguments)}, set:function allowPaymentRequest (){return bodavm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElement", "allowPaymentRequest_set", arguments)}});

// HTMLImageElement对象
HTMLImageElement = function HTMLImageElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLImageElement, "HTMLImageElement");
HTMLImageElement.prototype.__proto__=HTMLElement.prototype;
HTMLImageElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "alt", {configurable:true, enumerable:true, get:function alt (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "alt_get", arguments)}, set:function alt (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "alt_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "src", {configurable:true, enumerable:true, get:function src (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "src_get", arguments)}, set:function src (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "src_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "srcset", {configurable:true, enumerable:true, get:function srcset (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "srcset_get", arguments)}, set:function srcset (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "srcset_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "sizes", {configurable:true, enumerable:true, get:function sizes (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "sizes_get", arguments)}, set:function sizes (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "sizes_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "crossOrigin", {configurable:true, enumerable:true, get:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "crossOrigin_get", arguments)}, set:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "crossOrigin_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "useMap", {configurable:true, enumerable:true, get:function useMap (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "useMap_get", arguments)}, set:function useMap (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "useMap_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "isMap", {configurable:true, enumerable:true, get:function isMap (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "isMap_get", arguments)}, set:function isMap (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "isMap_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "width_get", arguments)}, set:function width (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "width_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "height_get", arguments)}, set:function height (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "height_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "naturalWidth", {configurable:true, enumerable:true, get:function naturalWidth (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "naturalWidth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "naturalHeight", {configurable:true, enumerable:true, get:function naturalHeight (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "naturalHeight_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "complete", {configurable:true, enumerable:true, get:function complete (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "complete_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "currentSrc", {configurable:true, enumerable:true, get:function currentSrc (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "currentSrc_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "referrerPolicy", {configurable:true, enumerable:true, get:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "referrerPolicy_get", arguments)}, set:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "referrerPolicy_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "decoding", {configurable:true, enumerable:true, get:function decoding (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "decoding_get", arguments)}, set:function decoding (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "decoding_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "lowsrc", {configurable:true, enumerable:true, get:function lowsrc (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "lowsrc_get", arguments)}, set:function lowsrc (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "lowsrc_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "align_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "hspace", {configurable:true, enumerable:true, get:function hspace (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "hspace_get", arguments)}, set:function hspace (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "hspace_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "vspace", {configurable:true, enumerable:true, get:function vspace (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "vspace_get", arguments)}, set:function vspace (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "vspace_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "longDesc", {configurable:true, enumerable:true, get:function longDesc (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "longDesc_get", arguments)}, set:function longDesc (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "longDesc_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "border", {configurable:true, enumerable:true, get:function border (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "border_get", arguments)}, set:function border (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "border_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "x", {configurable:true, enumerable:true, get:function x (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "x_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "y", {configurable:true, enumerable:true, get:function y (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "y_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "decode", {configurable:true, enumerable:true, writable:true, value:function decode (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "decode", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "fetchPriority", {configurable:true, enumerable:true, get:function fetchPriority (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "fetchPriority_get", arguments)}, set:function fetchPriority (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "fetchPriority_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "loading", {configurable:true, enumerable:true, get:function loading (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "loading_get", arguments)}, set:function loading (){return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "loading_set", arguments)}});




// HTMLInputElement对象
HTMLInputElement = function HTMLInputElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLInputElement, "HTMLInputElement");
HTMLInputElement.prototype.__proto__=HTMLElement.prototype;
HTMLInputElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "accept", {configurable:true, enumerable:true, get:function accept (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "accept_get", arguments)}, set:function accept (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "accept_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "alt", {configurable:true, enumerable:true, get:function alt (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "alt_get", arguments)}, set:function alt (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "alt_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "autocomplete", {configurable:true, enumerable:true, get:function autocomplete (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "autocomplete_get", arguments)}, set:function autocomplete (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "autocomplete_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "defaultChecked", {configurable:true, enumerable:true, get:function defaultChecked (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "defaultChecked_get", arguments)}, set:function defaultChecked (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "defaultChecked_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "checked", {configurable:true, enumerable:true, get:function checked (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "checked_get", arguments)}, set:function checked (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "checked_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "dirName", {configurable:true, enumerable:true, get:function dirName (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "dirName_get", arguments)}, set:function dirName (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "dirName_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "disabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "form", {configurable:true, enumerable:true, get:function form (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "form_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "files", {configurable:true, enumerable:true, get:function files (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "files_get", arguments)}, set:function files (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "files_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formAction", {configurable:true, enumerable:true, get:function formAction (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formAction_get", arguments)}, set:function formAction (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formAction_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formEnctype", {configurable:true, enumerable:true, get:function formEnctype (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formEnctype_get", arguments)}, set:function formEnctype (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formEnctype_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formMethod", {configurable:true, enumerable:true, get:function formMethod (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formMethod_get", arguments)}, set:function formMethod (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formMethod_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formNoValidate", {configurable:true, enumerable:true, get:function formNoValidate (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formNoValidate_get", arguments)}, set:function formNoValidate (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formNoValidate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formTarget", {configurable:true, enumerable:true, get:function formTarget (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formTarget_get", arguments)}, set:function formTarget (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "formTarget_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "height_get", arguments)}, set:function height (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "height_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "indeterminate", {configurable:true, enumerable:true, get:function indeterminate (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "indeterminate_get", arguments)}, set:function indeterminate (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "indeterminate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "list", {configurable:true, enumerable:true, get:function list (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "list_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "max", {configurable:true, enumerable:true, get:function max (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "max_get", arguments)}, set:function max (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "max_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "maxLength", {configurable:true, enumerable:true, get:function maxLength (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "maxLength_get", arguments)}, set:function maxLength (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "maxLength_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "min", {configurable:true, enumerable:true, get:function min (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "min_get", arguments)}, set:function min (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "min_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "minLength", {configurable:true, enumerable:true, get:function minLength (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "minLength_get", arguments)}, set:function minLength (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "minLength_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "multiple", {configurable:true, enumerable:true, get:function multiple (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "multiple_get", arguments)}, set:function multiple (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "multiple_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "pattern", {configurable:true, enumerable:true, get:function pattern (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "pattern_get", arguments)}, set:function pattern (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "pattern_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "placeholder", {configurable:true, enumerable:true, get:function placeholder (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "placeholder_get", arguments)}, set:function placeholder (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "placeholder_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "readOnly", {configurable:true, enumerable:true, get:function readOnly (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "readOnly_get", arguments)}, set:function readOnly (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "readOnly_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "required", {configurable:true, enumerable:true, get:function required (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "required_get", arguments)}, set:function required (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "required_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "size", {configurable:true, enumerable:true, get:function size (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "size_get", arguments)}, set:function size (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "size_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "src", {configurable:true, enumerable:true, get:function src (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "src_get", arguments)}, set:function src (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "src_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "step", {configurable:true, enumerable:true, get:function step (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "step_get", arguments)}, set:function step (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "step_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "type_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "defaultValue", {configurable:true, enumerable:true, get:function defaultValue (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "defaultValue_get", arguments)}, set:function defaultValue (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "defaultValue_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "value_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "valueAsDate", {configurable:true, enumerable:true, get:function valueAsDate (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "valueAsDate_get", arguments)}, set:function valueAsDate (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "valueAsDate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "valueAsNumber", {configurable:true, enumerable:true, get:function valueAsNumber (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "valueAsNumber_get", arguments)}, set:function valueAsNumber (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "valueAsNumber_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "width_get", arguments)}, set:function width (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "width_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "willValidate", {configurable:true, enumerable:true, get:function willValidate (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "willValidate_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "validity", {configurable:true, enumerable:true, get:function validity (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "validity_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "validationMessage", {configurable:true, enumerable:true, get:function validationMessage (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "validationMessage_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "labels", {configurable:true, enumerable:true, get:function labels (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "labels_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionStart", {configurable:true, enumerable:true, get:function selectionStart (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionStart_get", arguments)}, set:function selectionStart (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionStart_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionEnd", {configurable:true, enumerable:true, get:function selectionEnd (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionEnd_get", arguments)}, set:function selectionEnd (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionEnd_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionDirection", {configurable:true, enumerable:true, get:function selectionDirection (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionDirection_get", arguments)}, set:function selectionDirection (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "selectionDirection_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "align_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "useMap", {configurable:true, enumerable:true, get:function useMap (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "useMap_get", arguments)}, set:function useMap (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "useMap_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "webkitdirectory", {configurable:true, enumerable:true, get:function webkitdirectory (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "webkitdirectory_get", arguments)}, set:function webkitdirectory (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "webkitdirectory_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "incremental", {configurable:true, enumerable:true, get:function incremental (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "incremental_get", arguments)}, set:function incremental (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "incremental_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "checkValidity", {configurable:true, enumerable:true, writable:true, value:function checkValidity (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "checkValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "reportValidity", {configurable:true, enumerable:true, writable:true, value:function reportValidity (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "reportValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "select", {configurable:true, enumerable:true, writable:true, value:function select (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "select", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "setCustomValidity", {configurable:true, enumerable:true, writable:true, value:function setCustomValidity (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "setCustomValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "setRangeText", {configurable:true, enumerable:true, writable:true, value:function setRangeText (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "setRangeText", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "setSelectionRange", {configurable:true, enumerable:true, writable:true, value:function setSelectionRange (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "setSelectionRange", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "stepDown", {configurable:true, enumerable:true, writable:true, value:function stepDown (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "stepDown", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "stepUp", {configurable:true, enumerable:true, writable:true, value:function stepUp (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "stepUp", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "webkitEntries", {configurable:true, enumerable:true, get:function webkitEntries (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "webkitEntries_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLInputElement.prototype, "showPicker", {configurable:true, enumerable:true, writable:true, value:function showPicker (){return bodavm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElement", "showPicker", arguments)}});

// HTMLLegendElement对象
HTMLLegendElement = function HTMLLegendElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLLegendElement, "HTMLLegendElement");
HTMLLegendElement.prototype.__proto__=HTMLElement.prototype;
HTMLLegendElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLLegendElement.prototype, "form", {configurable:true, enumerable:true, get:function form (){return bodavm.toolsFunc.dispatch(this, HTMLLegendElement.prototype, "HTMLLegendElement", "form_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLLegendElement.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, HTMLLegendElement.prototype, "HTMLLegendElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, HTMLLegendElement.prototype, "HTMLLegendElement", "align_set", arguments)}});

// HTMLLIElement对象
HTMLLIElement = function HTMLLIElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLLIElement, "HTMLLIElement");
HTMLLIElement.prototype.__proto__=HTMLElement.prototype;
HTMLLIElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLLIElement.prototype, "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "value_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLIElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "type_set", arguments)}});

// HTMLLinkElement对象
HTMLLinkElement = function HTMLLinkElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLLinkElement, "HTMLLinkElement");
HTMLLinkElement.prototype.__proto__=HTMLElement.prototype;
HTMLLinkElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "disabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "href", {configurable:true, enumerable:true, get:function href (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "href_get", arguments)}, set:function href (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "href_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "crossOrigin", {configurable:true, enumerable:true, get:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "crossOrigin_get", arguments)}, set:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "crossOrigin_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "rel", {configurable:true, enumerable:true, get:function rel (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "rel_get", arguments)}, set:function rel (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "rel_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "relList", {configurable:true, enumerable:true, get:function relList (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "relList_get", arguments)}, set:function relList (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "relList_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "media", {configurable:true, enumerable:true, get:function media (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "media_get", arguments)}, set:function media (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "media_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "hreflang", {configurable:true, enumerable:true, get:function hreflang (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "hreflang_get", arguments)}, set:function hreflang (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "hreflang_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "type_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "as", {configurable:true, enumerable:true, get:function as (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "as_get", arguments)}, set:function as (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "as_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "referrerPolicy", {configurable:true, enumerable:true, get:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "referrerPolicy_get", arguments)}, set:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "referrerPolicy_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "sizes", {configurable:true, enumerable:true, get:function sizes (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "sizes_get", arguments)}, set:function sizes (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "sizes_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "imageSrcset", {configurable:true, enumerable:true, get:function imageSrcset (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "imageSrcset_get", arguments)}, set:function imageSrcset (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "imageSrcset_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "imageSizes", {configurable:true, enumerable:true, get:function imageSizes (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "imageSizes_get", arguments)}, set:function imageSizes (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "imageSizes_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "charset", {configurable:true, enumerable:true, get:function charset (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "charset_get", arguments)}, set:function charset (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "charset_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "rev", {configurable:true, enumerable:true, get:function rev (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "rev_get", arguments)}, set:function rev (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "rev_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "target", {configurable:true, enumerable:true, get:function target (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "target_get", arguments)}, set:function target (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "target_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "sheet", {configurable:true, enumerable:true, get:function sheet (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "sheet_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "integrity", {configurable:true, enumerable:true, get:function integrity (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "integrity_get", arguments)}, set:function integrity (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "integrity_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "fetchPriority", {configurable:true, enumerable:true, get:function fetchPriority (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "fetchPriority_get", arguments)}, set:function fetchPriority (){return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "fetchPriority_set", arguments)}});

// HTMLMarqueeElement对象
HTMLMarqueeElement = function HTMLMarqueeElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLMarqueeElement, "HTMLMarqueeElement");
HTMLMarqueeElement.prototype.__proto__=HTMLElement.prototype;
HTMLMarqueeElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "behavior", {configurable:true, enumerable:true, get:function behavior (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "behavior_get", arguments)}, set:function behavior (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "behavior_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "bgColor", {configurable:true, enumerable:true, get:function bgColor (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "bgColor_get", arguments)}, set:function bgColor (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "bgColor_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "direction", {configurable:true, enumerable:true, get:function direction (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "direction_get", arguments)}, set:function direction (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "direction_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "height_get", arguments)}, set:function height (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "height_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "hspace", {configurable:true, enumerable:true, get:function hspace (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "hspace_get", arguments)}, set:function hspace (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "hspace_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "loop", {configurable:true, enumerable:true, get:function loop (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "loop_get", arguments)}, set:function loop (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "loop_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "scrollAmount", {configurable:true, enumerable:true, get:function scrollAmount (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "scrollAmount_get", arguments)}, set:function scrollAmount (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "scrollAmount_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "scrollDelay", {configurable:true, enumerable:true, get:function scrollDelay (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "scrollDelay_get", arguments)}, set:function scrollDelay (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "scrollDelay_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "trueSpeed", {configurable:true, enumerable:true, get:function trueSpeed (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "trueSpeed_get", arguments)}, set:function trueSpeed (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "trueSpeed_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "vspace", {configurable:true, enumerable:true, get:function vspace (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "vspace_get", arguments)}, set:function vspace (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "vspace_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "width_get", arguments)}, set:function width (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "width_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "start", {configurable:true, enumerable:true, writable:true, value:function start (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "start", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMarqueeElement.prototype, "stop", {configurable:true, enumerable:true, writable:true, value:function stop (){return bodavm.toolsFunc.dispatch(this, HTMLMarqueeElement.prototype, "HTMLMarqueeElement", "stop", arguments)}});

// HTMLMediaElement对象
HTMLMediaElement = function HTMLMediaElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLMediaElement, "HTMLMediaElement");
HTMLMediaElement.prototype.__proto__=HTMLElement.prototype;
HTMLMediaElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_EMPTY", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_IDLE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_LOADING", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_NO_SOURCE", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_NOTHING", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_METADATA", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_CURRENT_DATA", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_FUTURE_DATA", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_ENOUGH_DATA", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "error", {configurable:true, enumerable:true, get:function error (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "error_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "src", {configurable:true, enumerable:true, get:function src (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "src_get", arguments)}, set:function src (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "src_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "currentSrc", {configurable:true, enumerable:true, get:function currentSrc (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "currentSrc_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "crossOrigin", {configurable:true, enumerable:true, get:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "crossOrigin_get", arguments)}, set:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "crossOrigin_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "networkState", {configurable:true, enumerable:true, get:function networkState (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "networkState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "preload", {configurable:true, enumerable:true, get:function preload (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "preload_get", arguments)}, set:function preload (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "preload_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "buffered", {configurable:true, enumerable:true, get:function buffered (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "buffered_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "readyState", {configurable:true, enumerable:true, get:function readyState (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "readyState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "seeking", {configurable:true, enumerable:true, get:function seeking (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "seeking_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "currentTime", {configurable:true, enumerable:true, get:function currentTime (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "currentTime_get", arguments)}, set:function currentTime (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "currentTime_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "duration", {configurable:true, enumerable:true, get:function duration (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "duration_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "paused", {configurable:true, enumerable:true, get:function paused (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "paused_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "defaultPlaybackRate", {configurable:true, enumerable:true, get:function defaultPlaybackRate (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "defaultPlaybackRate_get", arguments)}, set:function defaultPlaybackRate (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "defaultPlaybackRate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "playbackRate", {configurable:true, enumerable:true, get:function playbackRate (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "playbackRate_get", arguments)}, set:function playbackRate (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "playbackRate_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "played", {configurable:true, enumerable:true, get:function played (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "played_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "seekable", {configurable:true, enumerable:true, get:function seekable (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "seekable_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "ended", {configurable:true, enumerable:true, get:function ended (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "ended_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "autoplay", {configurable:true, enumerable:true, get:function autoplay (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "autoplay_get", arguments)}, set:function autoplay (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "autoplay_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "loop", {configurable:true, enumerable:true, get:function loop (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "loop_get", arguments)}, set:function loop (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "loop_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "controls", {configurable:true, enumerable:true, get:function controls (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "controls_get", arguments)}, set:function controls (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "controls_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "controlsList", {configurable:true, enumerable:true, get:function controlsList (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "controlsList_get", arguments)}, set:function controlsList (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "controlsList_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "volume", {configurable:true, enumerable:true, get:function volume (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "volume_get", arguments)}, set:function volume (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "volume_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "muted", {configurable:true, enumerable:true, get:function muted (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "muted_get", arguments)}, set:function muted (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "muted_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "defaultMuted", {configurable:true, enumerable:true, get:function defaultMuted (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "defaultMuted_get", arguments)}, set:function defaultMuted (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "defaultMuted_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "textTracks", {configurable:true, enumerable:true, get:function textTracks (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "textTracks_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "webkitAudioDecodedByteCount", {configurable:true, enumerable:true, get:function webkitAudioDecodedByteCount (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "webkitAudioDecodedByteCount_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "webkitVideoDecodedByteCount", {configurable:true, enumerable:true, get:function webkitVideoDecodedByteCount (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "webkitVideoDecodedByteCount_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "onencrypted", {configurable:true, enumerable:true, get:function onencrypted (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "onencrypted_get", arguments)}, set:function onencrypted (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "onencrypted_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "onwaitingforkey", {configurable:true, enumerable:true, get:function onwaitingforkey (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "onwaitingforkey_get", arguments)}, set:function onwaitingforkey (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "onwaitingforkey_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "srcObject", {configurable:true, enumerable:true, get:function srcObject (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "srcObject_get", arguments)}, set:function srcObject (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "srcObject_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_EMPTY", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_IDLE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_LOADING", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_NO_SOURCE", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_NOTHING", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_METADATA", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_CURRENT_DATA", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_FUTURE_DATA", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_ENOUGH_DATA", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "addTextTrack", {configurable:true, enumerable:true, writable:true, value:function addTextTrack (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "addTextTrack", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "canPlayType", {configurable:true, enumerable:true, writable:true, value:function canPlayType (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "canPlayType", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "captureStream", {configurable:true, enumerable:true, writable:true, value:function captureStream (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "captureStream", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "load", {configurable:true, enumerable:true, writable:true, value:function load (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "load", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "pause", {configurable:true, enumerable:true, writable:true, value:function pause (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "pause", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "play", {configurable:true, enumerable:true, writable:true, value:function play (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "play", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "preservesPitch", {configurable:true, enumerable:true, get:function preservesPitch (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "preservesPitch_get", arguments)}, set:function preservesPitch (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "preservesPitch_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "sinkId", {configurable:true, enumerable:true, get:function sinkId (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "sinkId_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "remote", {configurable:true, enumerable:true, get:function remote (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "remote_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "disableRemotePlayback", {configurable:true, enumerable:true, get:function disableRemotePlayback (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "disableRemotePlayback_get", arguments)}, set:function disableRemotePlayback (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "disableRemotePlayback_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "setSinkId", {configurable:true, enumerable:true, writable:true, value:function setSinkId (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "setSinkId", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "mediaKeys", {configurable:true, enumerable:true, get:function mediaKeys (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "mediaKeys_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "setMediaKeys", {configurable:true, enumerable:true, writable:true, value:function setMediaKeys (){return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "setMediaKeys", arguments)}});

// HTMLMetaElement对象
HTMLMetaElement = function HTMLMetaElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLMetaElement, "HTMLMetaElement");
HTMLMetaElement.prototype.__proto__=HTMLElement.prototype;
HTMLMetaElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "httpEquiv", {configurable:true, enumerable:true, get:function httpEquiv (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "httpEquiv_get", arguments)}, set:function httpEquiv (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "httpEquiv_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "content", {configurable:true, enumerable:true, get:function content (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "content_get", arguments)}, set:function content (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "content_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "scheme", {configurable:true, enumerable:true, get:function scheme (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "scheme_get", arguments)}, set:function scheme (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "scheme_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "media", {configurable:true, enumerable:true, get:function media (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "media_get", arguments)}, set:function media (){return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "media_set", arguments)}});

// HTMLOptGroupElement对象
HTMLOptGroupElement = function HTMLOptGroupElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLOptGroupElement, "HTMLOptGroupElement");
HTMLOptGroupElement.prototype.__proto__=HTMLElement.prototype;
HTMLOptGroupElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLOptGroupElement.prototype, "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLOptGroupElement.prototype, "HTMLOptGroupElement", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLOptGroupElement.prototype, "HTMLOptGroupElement", "disabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLOptGroupElement.prototype, "label", {configurable:true, enumerable:true, get:function label (){return bodavm.toolsFunc.dispatch(this, HTMLOptGroupElement.prototype, "HTMLOptGroupElement", "label_get", arguments)}, set:function label (){return bodavm.toolsFunc.dispatch(this, HTMLOptGroupElement.prototype, "HTMLOptGroupElement", "label_set", arguments)}});

// HTMLOptionElement对象
HTMLOptionElement = function HTMLOptionElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLOptionElement, "HTMLOptionElement");
HTMLOptionElement.prototype.__proto__=HTMLElement.prototype;
HTMLOptionElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "disabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "form", {configurable:true, enumerable:true, get:function form (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "form_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "label", {configurable:true, enumerable:true, get:function label (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "label_get", arguments)}, set:function label (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "label_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "defaultSelected", {configurable:true, enumerable:true, get:function defaultSelected (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "defaultSelected_get", arguments)}, set:function defaultSelected (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "defaultSelected_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "selected", {configurable:true, enumerable:true, get:function selected (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "selected_get", arguments)}, set:function selected (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "selected_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "value_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "text_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "index", {configurable:true, enumerable:true, get:function index (){return bodavm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElement", "index_get", arguments)}, set:undefined});

// HTMLParagraphElement对象
HTMLParagraphElement = function HTMLParagraphElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLParagraphElement, "HTMLParagraphElement");
HTMLParagraphElement.prototype.__proto__=HTMLElement.prototype;
HTMLParagraphElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLParagraphElement.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElement", "align_set", arguments)}});

// HTMLScriptElement对象
HTMLScriptElement = function HTMLScriptElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLScriptElement, "HTMLScriptElement");
HTMLScriptElement.prototype.__proto__=HTMLElement.prototype;
HTMLScriptElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLScriptElement, "supports", {configurable:true, enumerable:true, writable:true, value:function supports (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement, "HTMLScriptElement", "supports", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "src", {configurable:true, enumerable:true, get:function src (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "src_get", arguments)}, set:function src (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "src_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "type_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "noModule", {configurable:true, enumerable:true, get:function noModule (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "noModule_get", arguments)}, set:function noModule (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "noModule_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "charset", {configurable:true, enumerable:true, get:function charset (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "charset_get", arguments)}, set:function charset (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "charset_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "async", {configurable:true, enumerable:true, get:function async (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "async_get", arguments)}, set:function async (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "async_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "defer", {configurable:true, enumerable:true, get:function defer (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "defer_get", arguments)}, set:function defer (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "defer_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "crossOrigin", {configurable:true, enumerable:true, get:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "crossOrigin_get", arguments)}, set:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "crossOrigin_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "text_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "referrerPolicy", {configurable:true, enumerable:true, get:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "referrerPolicy_get", arguments)}, set:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "referrerPolicy_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "event", {configurable:true, enumerable:true, get:function event (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "event_get", arguments)}, set:function event (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "event_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "htmlFor", {configurable:true, enumerable:true, get:function htmlFor (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "htmlFor_get", arguments)}, set:function htmlFor (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "htmlFor_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "integrity", {configurable:true, enumerable:true, get:function integrity (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "integrity_get", arguments)}, set:function integrity (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "integrity_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "fetchPriority", {configurable:true, enumerable:true, get:function fetchPriority (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "fetchPriority_get", arguments)}, set:function fetchPriority (){return bodavm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElement", "fetchPriority_set", arguments)}});

// HTMLSelectElement对象
HTMLSelectElement = function HTMLSelectElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLSelectElement, "HTMLSelectElement");
HTMLSelectElement.prototype.__proto__=HTMLElement.prototype;
HTMLSelectElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "autocomplete", {configurable:true, enumerable:true, get:function autocomplete (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "autocomplete_get", arguments)}, set:function autocomplete (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "autocomplete_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "disabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "form", {configurable:true, enumerable:true, get:function form (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "form_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "multiple", {configurable:true, enumerable:true, get:function multiple (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "multiple_get", arguments)}, set:function multiple (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "multiple_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "required", {configurable:true, enumerable:true, get:function required (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "required_get", arguments)}, set:function required (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "required_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "size", {configurable:true, enumerable:true, get:function size (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "size_get", arguments)}, set:function size (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "size_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "type_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "options", {configurable:true, enumerable:true, get:function options (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "options_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "length_get", arguments)}, set:function length (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "length_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {configurable:true, enumerable:true, get:function selectedOptions (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "selectedOptions_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "selectedIndex", {configurable:true, enumerable:true, get:function selectedIndex (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "selectedIndex_get", arguments)}, set:function selectedIndex (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "selectedIndex_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "value_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "willValidate", {configurable:true, enumerable:true, get:function willValidate (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "willValidate_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "validity", {configurable:true, enumerable:true, get:function validity (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "validity_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "validationMessage", {configurable:true, enumerable:true, get:function validationMessage (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "validationMessage_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "labels", {configurable:true, enumerable:true, get:function labels (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "labels_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "add", {configurable:true, enumerable:true, writable:true, value:function add (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "add", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "checkValidity", {configurable:true, enumerable:true, writable:true, value:function checkValidity (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "checkValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "item", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "namedItem", {configurable:true, enumerable:true, writable:true, value:function namedItem (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "namedItem", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "remove", {configurable:true, enumerable:true, writable:true, value:function remove (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "remove", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "reportValidity", {configurable:true, enumerable:true, writable:true, value:function reportValidity (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "reportValidity", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "setCustomValidity", {configurable:true, enumerable:true, writable:true, value:function setCustomValidity (){return bodavm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElement", "setCustomValidity", arguments)}});

// HTMLSpanElement对象
HTMLSpanElement = function HTMLSpanElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLSpanElement, "HTMLSpanElement");
HTMLSpanElement.prototype.__proto__=HTMLElement.prototype;
HTMLSpanElement.__proto__=HTMLElement;

// HTMLStyleElement对象
HTMLStyleElement = function HTMLStyleElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLStyleElement, "HTMLStyleElement");
HTMLStyleElement.prototype.__proto__=HTMLElement.prototype;
HTMLStyleElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "disabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "media", {configurable:true, enumerable:true, get:function media (){return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "media_get", arguments)}, set:function media (){return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "media_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "type_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "sheet", {configurable:true, enumerable:true, get:function sheet (){return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "sheet_get", arguments)}, set:undefined});

// HTMLTitleElement对象
HTMLTitleElement = function HTMLTitleElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLTitleElement, "HTMLTitleElement");
HTMLTitleElement.prototype.__proto__=HTMLElement.prototype;
HTMLTitleElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTitleElement.prototype, "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, HTMLTitleElement.prototype, "HTMLTitleElement", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, HTMLTitleElement.prototype, "HTMLTitleElement", "text_set", arguments)}});

// HTMLUListElement对象
HTMLUListElement = function HTMLUListElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLUListElement, "HTMLUListElement");
HTMLUListElement.prototype.__proto__=HTMLElement.prototype;
HTMLUListElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLUListElement.prototype, "compact", {configurable:true, enumerable:true, get:function compact (){return bodavm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElement", "compact_get", arguments)}, set:function compact (){return bodavm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElement", "compact_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLUListElement.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElement", "type_set", arguments)}});

// HTMLUnknownElement对象
HTMLUnknownElement = function HTMLUnknownElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLUnknownElement, "HTMLUnknownElement");
HTMLUnknownElement.prototype.__proto__=HTMLElement.prototype;
HTMLUnknownElement.__proto__=HTMLElement;

// HTMLVideoElement对象
HTMLVideoElement = function HTMLVideoElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLVideoElement, "HTMLVideoElement");
HTMLVideoElement.prototype.__proto__=HTMLMediaElement.prototype;
HTMLVideoElement.__proto__=HTMLMediaElement;
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "width_get", arguments)}, set:function width (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "width_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "height_get", arguments)}, set:function height (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "height_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "videoWidth", {configurable:true, enumerable:true, get:function videoWidth (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "videoWidth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "videoHeight", {configurable:true, enumerable:true, get:function videoHeight (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "videoHeight_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "poster", {configurable:true, enumerable:true, get:function poster (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "poster_get", arguments)}, set:function poster (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "poster_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDecodedFrameCount", {configurable:true, enumerable:true, get:function webkitDecodedFrameCount (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitDecodedFrameCount_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDroppedFrameCount", {configurable:true, enumerable:true, get:function webkitDroppedFrameCount (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitDroppedFrameCount_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "playsInline", {configurable:true, enumerable:true, get:function playsInline (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "playsInline_get", arguments)}, set:function playsInline (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "playsInline_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitSupportsFullscreen", {configurable:true, enumerable:true, get:function webkitSupportsFullscreen (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitSupportsFullscreen_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDisplayingFullscreen", {configurable:true, enumerable:true, get:function webkitDisplayingFullscreen (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitDisplayingFullscreen_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "onenterpictureinpicture", {configurable:true, enumerable:true, get:function onenterpictureinpicture (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "onenterpictureinpicture_get", arguments)}, set:function onenterpictureinpicture (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "onenterpictureinpicture_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "onleavepictureinpicture", {configurable:true, enumerable:true, get:function onleavepictureinpicture (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "onleavepictureinpicture_get", arguments)}, set:function onleavepictureinpicture (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "onleavepictureinpicture_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "disablePictureInPicture", {configurable:true, enumerable:true, get:function disablePictureInPicture (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "disablePictureInPicture_get", arguments)}, set:function disablePictureInPicture (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "disablePictureInPicture_set", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "cancelVideoFrameCallback", {configurable:true, enumerable:true, writable:true, value:function cancelVideoFrameCallback (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "cancelVideoFrameCallback", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "requestVideoFrameCallback", {configurable:true, enumerable:true, writable:true, value:function requestVideoFrameCallback (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "requestVideoFrameCallback", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "getVideoPlaybackQuality", {configurable:true, enumerable:true, writable:true, value:function getVideoPlaybackQuality (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "getVideoPlaybackQuality", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "requestPictureInPicture", {configurable:true, enumerable:true, writable:true, value:function requestPictureInPicture (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "requestPictureInPicture", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitEnterFullScreen", {configurable:true, enumerable:true, writable:true, value:function webkitEnterFullScreen (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitEnterFullScreen", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitEnterFullscreen", {configurable:true, enumerable:true, writable:true, value:function webkitEnterFullscreen (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitEnterFullscreen", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitExitFullScreen", {configurable:true, enumerable:true, writable:true, value:function webkitExitFullScreen (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitExitFullScreen", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitExitFullscreen", {configurable:true, enumerable:true, writable:true, value:function webkitExitFullscreen (){return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitExitFullscreen", arguments)}});

// Image对象
Image = function Image(){}
bodavm.toolsFunc.safeProto(Image, "Image");
Image.prototype.__proto__=HTMLElement.prototype;
bodavm.toolsFunc.defineProperty(Image.prototype, "alt", {configurable:true, enumerable:true, get:function alt (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "alt_get", arguments)}, set:function alt (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "alt_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "src", {configurable:true, enumerable:true, get:function src (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "src_get", arguments)}, set:function src (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "src_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "srcset", {configurable:true, enumerable:true, get:function srcset (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "srcset_get", arguments)}, set:function srcset (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "srcset_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "sizes", {configurable:true, enumerable:true, get:function sizes (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "sizes_get", arguments)}, set:function sizes (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "sizes_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "crossOrigin", {configurable:true, enumerable:true, get:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "crossOrigin_get", arguments)}, set:function crossOrigin (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "crossOrigin_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "useMap", {configurable:true, enumerable:true, get:function useMap (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "useMap_get", arguments)}, set:function useMap (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "useMap_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "isMap", {configurable:true, enumerable:true, get:function isMap (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "isMap_get", arguments)}, set:function isMap (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "isMap_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "width_get", arguments)}, set:function width (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "width_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "height_get", arguments)}, set:function height (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "height_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "naturalWidth", {configurable:true, enumerable:true, get:function naturalWidth (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "naturalWidth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Image.prototype, "naturalHeight", {configurable:true, enumerable:true, get:function naturalHeight (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "naturalHeight_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Image.prototype, "complete", {configurable:true, enumerable:true, get:function complete (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "complete_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Image.prototype, "currentSrc", {configurable:true, enumerable:true, get:function currentSrc (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "currentSrc_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Image.prototype, "referrerPolicy", {configurable:true, enumerable:true, get:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "referrerPolicy_get", arguments)}, set:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "referrerPolicy_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "decoding", {configurable:true, enumerable:true, get:function decoding (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "decoding_get", arguments)}, set:function decoding (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "decoding_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "lowsrc", {configurable:true, enumerable:true, get:function lowsrc (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "lowsrc_get", arguments)}, set:function lowsrc (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "lowsrc_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "align_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "hspace", {configurable:true, enumerable:true, get:function hspace (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "hspace_get", arguments)}, set:function hspace (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "hspace_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "vspace", {configurable:true, enumerable:true, get:function vspace (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "vspace_get", arguments)}, set:function vspace (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "vspace_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "longDesc", {configurable:true, enumerable:true, get:function longDesc (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "longDesc_get", arguments)}, set:function longDesc (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "longDesc_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "border", {configurable:true, enumerable:true, get:function border (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "border_get", arguments)}, set:function border (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "border_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "x", {configurable:true, enumerable:true, get:function x (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "x_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Image.prototype, "y", {configurable:true, enumerable:true, get:function y (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "y_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Image.prototype, "decode", {configurable:true, enumerable:true, writable:true, value:function decode (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "decode", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "fetchPriority", {configurable:true, enumerable:true, get:function fetchPriority (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "fetchPriority_get", arguments)}, set:function fetchPriority (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "fetchPriority_set", arguments)}});
bodavm.toolsFunc.defineProperty(Image.prototype, "loading", {configurable:true, enumerable:true, get:function loading (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "loading_get", arguments)}, set:function loading (){return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "loading_set", arguments)}});

// Option对象
Option = function Option(){}
bodavm.toolsFunc.safeProto(Option, "Option");
Option.prototype.__proto__=HTMLElement.prototype;
bodavm.toolsFunc.defineProperty(Option.prototype, "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "disabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(Option.prototype, "form", {configurable:true, enumerable:true, get:function form (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "form_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Option.prototype, "label", {configurable:true, enumerable:true, get:function label (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "label_get", arguments)}, set:function label (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "label_set", arguments)}});
bodavm.toolsFunc.defineProperty(Option.prototype, "defaultSelected", {configurable:true, enumerable:true, get:function defaultSelected (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "defaultSelected_get", arguments)}, set:function defaultSelected (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "defaultSelected_set", arguments)}});
bodavm.toolsFunc.defineProperty(Option.prototype, "selected", {configurable:true, enumerable:true, get:function selected (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "selected_get", arguments)}, set:function selected (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "selected_set", arguments)}});
bodavm.toolsFunc.defineProperty(Option.prototype, "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "value_set", arguments)}});
bodavm.toolsFunc.defineProperty(Option.prototype, "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "text_set", arguments)}});
bodavm.toolsFunc.defineProperty(Option.prototype, "index", {configurable:true, enumerable:true, get:function index (){return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "index_get", arguments)}, set:undefined});

// NetworkInformation对象
NetworkInformation = function NetworkInformation(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(NetworkInformation, "NetworkInformation");
NetworkInformation.prototype.__proto__=EventTarget.prototype;
NetworkInformation.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "effectiveType", {configurable:true, enumerable:true, get:function effectiveType (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "effectiveType_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "rtt", {configurable:true, enumerable:true, get:function rtt (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "rtt_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "downlink", {configurable:true, enumerable:true, get:function downlink (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "downlink_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "saveData", {configurable:true, enumerable:true, get:function saveData (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "saveData_get", arguments)}, set:undefined});

//CustomElementRegistry对象
CustomElementRegistry=function CustomElementRegistry(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(CustomElementRegistry,"CustomElementRegistry");
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype,"define",{configurable:true, enumerable:true, writable:true, value:function define() {return bodavm.toolsFunc.dispatch(this,CustomElementRegistry.prototype,"CustomElementRegistry","define",arguments)}});
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype,"get",{configurable:true, enumerable:true, writable:true, value:function get() {return bodavm.toolsFunc.dispatch(this,CustomElementRegistry.prototype,"CustomElementRegistry","get",arguments)}});
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype,"upgrade",{configurable:true, enumerable:true, writable:true, value:function upgrade() {return bodavm.toolsFunc.dispatch(this,CustomElementRegistry.prototype,"CustomElementRegistry","upgrade",arguments)}});
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype,"whenDefined",{configurable:true, enumerable:true, writable:true, value:function whenDefined() {return bodavm.toolsFunc.dispatch(this,CustomElementRegistry.prototype,"CustomElementRegistry","whenDefined",arguments)}});
// customElements对象
var customElements = {}
customElements.__proto__=CustomElementRegistry.prototype;

//Event对象
Event=function Event(){
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError","Failed to construct 'Event': 1 argument required, but only 0 present.")}
    }
bodavm.toolsFunc.safeProto(Event,"Event");
bodavm.toolsFunc.defineProperty(Event,"NONE",{configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(Event,"CAPTURING_PHASE",{configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Event,"AT_TARGET",{configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(Event,"BUBBLING_PHASE",{configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(Event.prototype,"type",{configurable:true, enumerable:true, get:function type () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","type_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"target",{configurable:true, enumerable:true, get:function target () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","target_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"currentTarget",{configurable:true, enumerable:true, get:function currentTarget () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","currentTarget_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"eventPhase",{configurable:true, enumerable:true, get:function eventPhase () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","eventPhase_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"bubbles",{configurable:true, enumerable:true, get:function bubbles () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","bubbles_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"cancelable",{configurable:true, enumerable:true, get:function cancelable () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","cancelable_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"defaultPrevented",{configurable:true, enumerable:true, get:function defaultPrevented () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","defaultPrevented_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"composed",{configurable:true, enumerable:true, get:function composed () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","composed_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"timeStamp",{configurable:true, enumerable:true, get:function timeStamp () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","timeStamp_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"srcElement",{configurable:true, enumerable:true, get:function srcElement () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","srcElement_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Event.prototype,"returnValue",{configurable:true, enumerable:true, get:function returnValue () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","returnValue_get",arguments)},set:function returnValue () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","returnValue_set",arguments)},});
bodavm.toolsFunc.defineProperty(Event.prototype,"cancelBubble",{configurable:true, enumerable:true, get:function cancelBubble () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","cancelBubble_get",arguments)},set:function cancelBubble () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","cancelBubble_set",arguments)},});
bodavm.toolsFunc.defineProperty(Event.prototype,"NONE",{configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(Event.prototype,"CAPTURING_PHASE",{configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(Event.prototype,"AT_TARGET",{configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(Event.prototype,"BUBBLING_PHASE",{configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(Event.prototype,"composedPath",{configurable:true, enumerable:true, writable:true, value:function composedPath() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","composedPath",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"initEvent",{configurable:true, enumerable:true, writable:true, value:function initEvent() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","initEvent",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"preventDefault",{configurable:true, enumerable:true, writable:true, value:function preventDefault() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","preventDefault",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"stopImmediatePropagation",{configurable:true, enumerable:true, writable:true, value:function stopImmediatePropagation() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","stopImmediatePropagation",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"stopPropagation",{configurable:true, enumerable:true, writable:true, value:function stopPropagation() {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","stopPropagation",arguments)}});
bodavm.toolsFunc.defineProperty(Event.prototype,"path",{configurable:true, enumerable:true, get:function path () {return bodavm.toolsFunc.dispatch(this,Event.prototype,"Event","path_get",arguments)},set:undefined});

//UIEvent对象
UIEvent = function UIEvent() {
    if (arguments.length < 1) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'UIEvent': 1 argument required, but only 0 present.")
    }

}
bodavm.toolsFunc.safeProto(UIEvent, "UIEvent");
UIEvent.prototype.__proto__ = Event.prototype;
UIEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "view", { configurable: true, enumerable: true, get: function view() { return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "view_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "detail", { configurable: true, enumerable: true, get: function detail() { return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "detail_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "sourceCapabilities", { configurable: true, enumerable: true, get: function sourceCapabilities() { return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "sourceCapabilities_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "which", { configurable: true, enumerable: true, get: function which() { return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "which_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "initUIEvent", { configurable: true, enumerable: true, writable: true, value: function initUIEvent() { return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "initUIEvent", arguments) } });

// MouseEvent对象
MouseEvent = function MouseEvent() {

    if (arguments.length < 1) {

        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MouseEvent': 1 argument required, but only 0 present.")
    }
}
bodavm.toolsFunc.safeProto(MouseEvent, "MouseEvent");
MouseEvent.prototype.__proto__ = UIEvent.prototype;
MouseEvent.__proto__ = UIEvent;
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "screenX", { configurable: true, enumerable: true, get: function screenX() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "screenX_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "screenY", { configurable: true, enumerable: true, get: function screenY() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "screenY_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "clientX", { configurable: true, enumerable: true, get: function clientX() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "clientX_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "clientY", { configurable: true, enumerable: true, get: function clientY() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "clientY_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "ctrlKey", { configurable: true, enumerable: true, get: function ctrlKey() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "ctrlKey_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "shiftKey", { configurable: true, enumerable: true, get: function shiftKey() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "shiftKey_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "altKey", { configurable: true, enumerable: true, get: function altKey() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "altKey_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "metaKey", { configurable: true, enumerable: true, get: function metaKey() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "metaKey_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "button", { configurable: true, enumerable: true, get: function button() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "button_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "buttons", { configurable: true, enumerable: true, get: function buttons() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "buttons_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "relatedTarget", { configurable: true, enumerable: true, get: function relatedTarget() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "relatedTarget_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "pageX", { configurable: true, enumerable: true, get: function pageX() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "pageX_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "pageY", { configurable: true, enumerable: true, get: function pageY() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "pageY_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "x", { configurable: true, enumerable: true, get: function x() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "x_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "y", { configurable: true, enumerable: true, get: function y() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "y_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "offsetX", { configurable: true, enumerable: true, get: function offsetX() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "offsetX_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "offsetY", { configurable: true, enumerable: true, get: function offsetY() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "offsetY_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "movementX", { configurable: true, enumerable: true, get: function movementX() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "movementX_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "movementY", { configurable: true, enumerable: true, get: function movementY() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "movementY_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "fromElement", { configurable: true, enumerable: true, get: function fromElement() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "fromElement_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "toElement", { configurable: true, enumerable: true, get: function toElement() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "toElement_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "layerX", { configurable: true, enumerable: true, get: function layerX() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "layerX_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "layerY", { configurable: true, enumerable: true, get: function layerY() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "layerY_get", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "getModifierState", { configurable: true, enumerable: true, writable: true, value: function getModifierState() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "getModifierState", arguments) } });
bodavm.toolsFunc.defineProperty(MouseEvent.prototype, "initMouseEvent", { configurable: true, enumerable: true, writable: true, value: function initMouseEvent() { return bodavm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEvent", "initMouseEvent", arguments) } });

// Document对象
Document = function Document(){}
bodavm.toolsFunc.safeProto(Document, "Document");
Document.prototype.__proto__=Node.prototype;
Document.__proto__=Node;
bodavm.toolsFunc.defineProperty(Document.prototype, "implementation", {configurable:true, enumerable:true, get:function implementation (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "implementation_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "URL", {configurable:true, enumerable:true, get:function URL (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "URL_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "documentURI", {configurable:true, enumerable:true, get:function documentURI (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "documentURI_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "compatMode", {configurable:true, enumerable:true, get:function compatMode (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "compatMode_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "characterSet", {configurable:true, enumerable:true, get:function characterSet (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "characterSet_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "charset", {configurable:true, enumerable:true, get:function charset (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "charset_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "inputEncoding", {configurable:true, enumerable:true, get:function inputEncoding (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "inputEncoding_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "contentType", {configurable:true, enumerable:true, get:function contentType (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "contentType_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "doctype", {configurable:true, enumerable:true, get:function doctype (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "doctype_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "documentElement", {configurable:true, enumerable:true, get:function documentElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "documentElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "xmlEncoding", {configurable:true, enumerable:true, get:function xmlEncoding (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlEncoding_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "xmlVersion", {configurable:true, enumerable:true, get:function xmlVersion (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlVersion_get", arguments)}, set:function xmlVersion (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlVersion_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "xmlStandalone", {configurable:true, enumerable:true, get:function xmlStandalone (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlStandalone_get", arguments)}, set:function xmlStandalone (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlStandalone_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "domain", {configurable:true, enumerable:true, get:function domain (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "domain_get", arguments)}, set:function domain (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "domain_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "referrer", {configurable:true, enumerable:true, get:function referrer (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "referrer_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "cookie", {configurable:true, enumerable:true, get:function cookie (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "cookie_get", arguments)}, set:function cookie (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "cookie_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "lastModified", {configurable:true, enumerable:true, get:function lastModified (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "lastModified_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "readyState", {configurable:true, enumerable:true, get:function readyState (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "readyState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "title", {configurable:true, enumerable:true, get:function title (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "title_get", arguments)}, set:function title (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "title_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "dir", {configurable:true, enumerable:true, get:function dir (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "dir_get", arguments)}, set:function dir (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "dir_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "body", {configurable:true, enumerable:true, get:function body (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "body_get", arguments)}, set:function body (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "body_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "head", {configurable:true, enumerable:true, get:function head (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "head_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "images", {configurable:true, enumerable:true, get:function images (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "images_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "embeds", {configurable:true, enumerable:true, get:function embeds (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "embeds_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "plugins", {configurable:true, enumerable:true, get:function plugins (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "plugins_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "links", {configurable:true, enumerable:true, get:function links (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "links_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "forms", {configurable:true, enumerable:true, get:function forms (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "forms_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "scripts", {configurable:true, enumerable:true, get:function scripts (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "scripts_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "currentScript", {configurable:true, enumerable:true, get:function currentScript (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "currentScript_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "defaultView", {configurable:true, enumerable:true, get:function defaultView (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "defaultView_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "designMode", {configurable:true, enumerable:true, get:function designMode (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "designMode_get", arguments)}, set:function designMode (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "designMode_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onreadystatechange", {configurable:true, enumerable:true, get:function onreadystatechange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onreadystatechange_get", arguments)}, set:function onreadystatechange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onreadystatechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "anchors", {configurable:true, enumerable:true, get:function anchors (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "anchors_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "applets", {configurable:true, enumerable:true, get:function applets (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "applets_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "fgColor", {configurable:true, enumerable:true, get:function fgColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fgColor_get", arguments)}, set:function fgColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fgColor_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "linkColor", {configurable:true, enumerable:true, get:function linkColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "linkColor_get", arguments)}, set:function linkColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "linkColor_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "vlinkColor", {configurable:true, enumerable:true, get:function vlinkColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "vlinkColor_get", arguments)}, set:function vlinkColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "vlinkColor_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "alinkColor", {configurable:true, enumerable:true, get:function alinkColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "alinkColor_get", arguments)}, set:function alinkColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "alinkColor_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "bgColor", {configurable:true, enumerable:true, get:function bgColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "bgColor_get", arguments)}, set:function bgColor (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "bgColor_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "all", {configurable:true, enumerable:true, get:function all (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "all_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "scrollingElement", {configurable:true, enumerable:true, get:function scrollingElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "scrollingElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerlockchange", {configurable:true, enumerable:true, get:function onpointerlockchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerlockchange_get", arguments)}, set:function onpointerlockchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerlockchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerlockerror", {configurable:true, enumerable:true, get:function onpointerlockerror (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerlockerror_get", arguments)}, set:function onpointerlockerror (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerlockerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "hidden", {configurable:true, enumerable:true, get:function hidden (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "hidden_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "visibilityState", {configurable:true, enumerable:true, get:function visibilityState (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "visibilityState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "wasDiscarded", {configurable:true, enumerable:true, get:function wasDiscarded (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "wasDiscarded_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "featurePolicy", {configurable:true, enumerable:true, get:function featurePolicy (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "featurePolicy_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitVisibilityState", {configurable:true, enumerable:true, get:function webkitVisibilityState (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitVisibilityState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitHidden", {configurable:true, enumerable:true, get:function webkitHidden (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitHidden_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforecopy", {configurable:true, enumerable:true, get:function onbeforecopy (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforecopy_get", arguments)}, set:function onbeforecopy (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforecopy_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforecut", {configurable:true, enumerable:true, get:function onbeforecut (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforecut_get", arguments)}, set:function onbeforecut (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforecut_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforepaste", {configurable:true, enumerable:true, get:function onbeforepaste (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforepaste_get", arguments)}, set:function onbeforepaste (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforepaste_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onfreeze", {configurable:true, enumerable:true, get:function onfreeze (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfreeze_get", arguments)}, set:function onfreeze (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfreeze_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onresume", {configurable:true, enumerable:true, get:function onresume (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onresume_get", arguments)}, set:function onresume (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onresume_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onsearch", {configurable:true, enumerable:true, get:function onsearch (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsearch_get", arguments)}, set:function onsearch (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsearch_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onvisibilitychange", {configurable:true, enumerable:true, get:function onvisibilitychange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onvisibilitychange_get", arguments)}, set:function onvisibilitychange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onvisibilitychange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "fullscreenEnabled", {configurable:true, enumerable:true, get:function fullscreenEnabled (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreenEnabled_get", arguments)}, set:function fullscreenEnabled (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreenEnabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "fullscreen", {configurable:true, enumerable:true, get:function fullscreen (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreen_get", arguments)}, set:function fullscreen (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreen_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onfullscreenchange", {configurable:true, enumerable:true, get:function onfullscreenchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfullscreenchange_get", arguments)}, set:function onfullscreenchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfullscreenchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onfullscreenerror", {configurable:true, enumerable:true, get:function onfullscreenerror (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfullscreenerror_get", arguments)}, set:function onfullscreenerror (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfullscreenerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitIsFullScreen", {configurable:true, enumerable:true, get:function webkitIsFullScreen (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitIsFullScreen_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitCurrentFullScreenElement", {configurable:true, enumerable:true, get:function webkitCurrentFullScreenElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitCurrentFullScreenElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenEnabled", {configurable:true, enumerable:true, get:function webkitFullscreenEnabled (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitFullscreenEnabled_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenElement", {configurable:true, enumerable:true, get:function webkitFullscreenElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitFullscreenElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenchange", {configurable:true, enumerable:true, get:function onwebkitfullscreenchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitfullscreenchange_get", arguments)}, set:function onwebkitfullscreenchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitfullscreenchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenerror", {configurable:true, enumerable:true, get:function onwebkitfullscreenerror (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitfullscreenerror_get", arguments)}, set:function onwebkitfullscreenerror (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitfullscreenerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "rootElement", {configurable:true, enumerable:true, get:function rootElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "rootElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforexrselect", {configurable:true, enumerable:true, get:function onbeforexrselect (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforexrselect_get", arguments)}, set:function onbeforexrselect (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforexrselect_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onabort", {configurable:true, enumerable:true, get:function onabort (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onabort_get", arguments)}, set:function onabort (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onabort_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onblur", {configurable:true, enumerable:true, get:function onblur (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onblur_get", arguments)}, set:function onblur (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onblur_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncancel", {configurable:true, enumerable:true, get:function oncancel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncancel_get", arguments)}, set:function oncancel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncanplay", {configurable:true, enumerable:true, get:function oncanplay (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncanplay_get", arguments)}, set:function oncanplay (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncanplay_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncanplaythrough", {configurable:true, enumerable:true, get:function oncanplaythrough (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncanplaythrough_get", arguments)}, set:function oncanplaythrough (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncanplaythrough_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onclick", {configurable:true, enumerable:true, get:function onclick (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onclick_get", arguments)}, set:function onclick (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onclose", {configurable:true, enumerable:true, get:function onclose (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onclose_get", arguments)}, set:function onclose (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onclose_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncontextlost", {configurable:true, enumerable:true, get:function oncontextlost (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextlost_get", arguments)}, set:function oncontextlost (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextlost_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncontextmenu", {configurable:true, enumerable:true, get:function oncontextmenu (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextmenu_get", arguments)}, set:function oncontextmenu (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextmenu_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncontextrestored", {configurable:true, enumerable:true, get:function oncontextrestored (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextrestored_get", arguments)}, set:function oncontextrestored (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextrestored_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncuechange", {configurable:true, enumerable:true, get:function oncuechange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncuechange_get", arguments)}, set:function oncuechange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncuechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondblclick", {configurable:true, enumerable:true, get:function ondblclick (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondblclick_get", arguments)}, set:function ondblclick (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondblclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondrag", {configurable:true, enumerable:true, get:function ondrag (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondrag_get", arguments)}, set:function ondrag (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondrag_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragend", {configurable:true, enumerable:true, get:function ondragend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragend_get", arguments)}, set:function ondragend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragend_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragenter", {configurable:true, enumerable:true, get:function ondragenter (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragenter_get", arguments)}, set:function ondragenter (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragleave", {configurable:true, enumerable:true, get:function ondragleave (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragleave_get", arguments)}, set:function ondragleave (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragover", {configurable:true, enumerable:true, get:function ondragover (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragover_get", arguments)}, set:function ondragover (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragover_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragstart", {configurable:true, enumerable:true, get:function ondragstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragstart_get", arguments)}, set:function ondragstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondrop", {configurable:true, enumerable:true, get:function ondrop (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondrop_get", arguments)}, set:function ondrop (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondrop_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondurationchange", {configurable:true, enumerable:true, get:function ondurationchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondurationchange_get", arguments)}, set:function ondurationchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondurationchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onemptied", {configurable:true, enumerable:true, get:function onemptied (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onemptied_get", arguments)}, set:function onemptied (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onemptied_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onended", {configurable:true, enumerable:true, get:function onended (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onended_get", arguments)}, set:function onended (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onended_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onfocus", {configurable:true, enumerable:true, get:function onfocus (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfocus_get", arguments)}, set:function onfocus (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfocus_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onformdata", {configurable:true, enumerable:true, get:function onformdata (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onformdata_get", arguments)}, set:function onformdata (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onformdata_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oninput", {configurable:true, enumerable:true, get:function oninput (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oninput_get", arguments)}, set:function oninput (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oninput_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oninvalid", {configurable:true, enumerable:true, get:function oninvalid (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oninvalid_get", arguments)}, set:function oninvalid (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oninvalid_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onkeydown", {configurable:true, enumerable:true, get:function onkeydown (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeydown_get", arguments)}, set:function onkeydown (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeydown_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onkeypress", {configurable:true, enumerable:true, get:function onkeypress (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeypress_get", arguments)}, set:function onkeypress (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeypress_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onkeyup", {configurable:true, enumerable:true, get:function onkeyup (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeyup_get", arguments)}, set:function onkeyup (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeyup_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onload", {configurable:true, enumerable:true, get:function onload (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onload_get", arguments)}, set:function onload (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onload_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onloadeddata", {configurable:true, enumerable:true, get:function onloadeddata (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadeddata_get", arguments)}, set:function onloadeddata (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadeddata_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onloadedmetadata", {configurable:true, enumerable:true, get:function onloadedmetadata (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadedmetadata_get", arguments)}, set:function onloadedmetadata (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadedmetadata_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onloadstart", {configurable:true, enumerable:true, get:function onloadstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadstart_get", arguments)}, set:function onloadstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmousedown", {configurable:true, enumerable:true, get:function onmousedown (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousedown_get", arguments)}, set:function onmousedown (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousedown_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseenter", {configurable:true, enumerable:true, get:function onmouseenter (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseenter_get", arguments)}, set:function onmouseenter (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseleave", {configurable:true, enumerable:true, get:function onmouseleave (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseleave_get", arguments)}, set:function onmouseleave (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmousemove", {configurable:true, enumerable:true, get:function onmousemove (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousemove_get", arguments)}, set:function onmousemove (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousemove_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseout", {configurable:true, enumerable:true, get:function onmouseout (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseout_get", arguments)}, set:function onmouseout (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseout_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseover", {configurable:true, enumerable:true, get:function onmouseover (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseover_get", arguments)}, set:function onmouseover (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseover_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseup", {configurable:true, enumerable:true, get:function onmouseup (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseup_get", arguments)}, set:function onmouseup (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseup_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmousewheel", {configurable:true, enumerable:true, get:function onmousewheel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousewheel_get", arguments)}, set:function onmousewheel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousewheel_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpause", {configurable:true, enumerable:true, get:function onpause (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpause_get", arguments)}, set:function onpause (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpause_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onplay", {configurable:true, enumerable:true, get:function onplay (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onplay_get", arguments)}, set:function onplay (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onplay_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onplaying", {configurable:true, enumerable:true, get:function onplaying (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onplaying_get", arguments)}, set:function onplaying (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onplaying_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onprogress", {configurable:true, enumerable:true, get:function onprogress (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onprogress_get", arguments)}, set:function onprogress (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onprogress_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onratechange", {configurable:true, enumerable:true, get:function onratechange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onratechange_get", arguments)}, set:function onratechange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onratechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onreset", {configurable:true, enumerable:true, get:function onreset (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onreset_get", arguments)}, set:function onreset (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onreset_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onresize", {configurable:true, enumerable:true, get:function onresize (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onresize_get", arguments)}, set:function onresize (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onresize_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onscroll", {configurable:true, enumerable:true, get:function onscroll (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onscroll_get", arguments)}, set:function onscroll (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onscroll_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onsecuritypolicyviolation", {configurable:true, enumerable:true, get:function onsecuritypolicyviolation (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsecuritypolicyviolation_get", arguments)}, set:function onsecuritypolicyviolation (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsecuritypolicyviolation_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onseeked", {configurable:true, enumerable:true, get:function onseeked (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onseeked_get", arguments)}, set:function onseeked (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onseeked_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onseeking", {configurable:true, enumerable:true, get:function onseeking (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onseeking_get", arguments)}, set:function onseeking (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onseeking_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onselect", {configurable:true, enumerable:true, get:function onselect (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselect_get", arguments)}, set:function onselect (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselect_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onslotchange", {configurable:true, enumerable:true, get:function onslotchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onslotchange_get", arguments)}, set:function onslotchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onslotchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onstalled", {configurable:true, enumerable:true, get:function onstalled (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onstalled_get", arguments)}, set:function onstalled (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onstalled_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onsubmit", {configurable:true, enumerable:true, get:function onsubmit (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsubmit_get", arguments)}, set:function onsubmit (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsubmit_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onsuspend", {configurable:true, enumerable:true, get:function onsuspend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsuspend_get", arguments)}, set:function onsuspend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsuspend_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontimeupdate", {configurable:true, enumerable:true, get:function ontimeupdate (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontimeupdate_get", arguments)}, set:function ontimeupdate (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontimeupdate_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontoggle", {configurable:true, enumerable:true, get:function ontoggle (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontoggle_get", arguments)}, set:function ontoggle (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontoggle_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onvolumechange", {configurable:true, enumerable:true, get:function onvolumechange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onvolumechange_get", arguments)}, set:function onvolumechange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onvolumechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwaiting", {configurable:true, enumerable:true, get:function onwaiting (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwaiting_get", arguments)}, set:function onwaiting (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwaiting_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationend", {configurable:true, enumerable:true, get:function onwebkitanimationend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationend_get", arguments)}, set:function onwebkitanimationend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationend_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationiteration", {configurable:true, enumerable:true, get:function onwebkitanimationiteration (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationiteration_get", arguments)}, set:function onwebkitanimationiteration (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationiteration_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationstart", {configurable:true, enumerable:true, get:function onwebkitanimationstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationstart_get", arguments)}, set:function onwebkitanimationstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkittransitionend", {configurable:true, enumerable:true, get:function onwebkittransitionend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkittransitionend_get", arguments)}, set:function onwebkittransitionend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkittransitionend_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwheel", {configurable:true, enumerable:true, get:function onwheel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwheel_get", arguments)}, set:function onwheel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwheel_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onauxclick", {configurable:true, enumerable:true, get:function onauxclick (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onauxclick_get", arguments)}, set:function onauxclick (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onauxclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ongotpointercapture", {configurable:true, enumerable:true, get:function ongotpointercapture (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ongotpointercapture_get", arguments)}, set:function ongotpointercapture (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ongotpointercapture_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onlostpointercapture", {configurable:true, enumerable:true, get:function onlostpointercapture (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onlostpointercapture_get", arguments)}, set:function onlostpointercapture (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onlostpointercapture_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerdown", {configurable:true, enumerable:true, get:function onpointerdown (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerdown_get", arguments)}, set:function onpointerdown (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerdown_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointermove", {configurable:true, enumerable:true, get:function onpointermove (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointermove_get", arguments)}, set:function onpointermove (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointermove_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerup", {configurable:true, enumerable:true, get:function onpointerup (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerup_get", arguments)}, set:function onpointerup (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerup_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointercancel", {configurable:true, enumerable:true, get:function onpointercancel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointercancel_get", arguments)}, set:function onpointercancel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointercancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerover", {configurable:true, enumerable:true, get:function onpointerover (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerover_get", arguments)}, set:function onpointerover (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerover_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerout", {configurable:true, enumerable:true, get:function onpointerout (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerout_get", arguments)}, set:function onpointerout (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerout_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerenter", {configurable:true, enumerable:true, get:function onpointerenter (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerenter_get", arguments)}, set:function onpointerenter (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerleave", {configurable:true, enumerable:true, get:function onpointerleave (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerleave_get", arguments)}, set:function onpointerleave (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onselectstart", {configurable:true, enumerable:true, get:function onselectstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselectstart_get", arguments)}, set:function onselectstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselectstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onselectionchange", {configurable:true, enumerable:true, get:function onselectionchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselectionchange_get", arguments)}, set:function onselectionchange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselectionchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onanimationend", {configurable:true, enumerable:true, get:function onanimationend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationend_get", arguments)}, set:function onanimationend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationend_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onanimationiteration", {configurable:true, enumerable:true, get:function onanimationiteration (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationiteration_get", arguments)}, set:function onanimationiteration (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationiteration_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onanimationstart", {configurable:true, enumerable:true, get:function onanimationstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationstart_get", arguments)}, set:function onanimationstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontransitionrun", {configurable:true, enumerable:true, get:function ontransitionrun (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionrun_get", arguments)}, set:function ontransitionrun (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionrun_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontransitionstart", {configurable:true, enumerable:true, get:function ontransitionstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionstart_get", arguments)}, set:function ontransitionstart (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontransitionend", {configurable:true, enumerable:true, get:function ontransitionend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionend_get", arguments)}, set:function ontransitionend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionend_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontransitioncancel", {configurable:true, enumerable:true, get:function ontransitioncancel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitioncancel_get", arguments)}, set:function ontransitioncancel (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitioncancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncopy", {configurable:true, enumerable:true, get:function oncopy (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncopy_get", arguments)}, set:function oncopy (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncopy_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncut", {configurable:true, enumerable:true, get:function oncut (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncut_get", arguments)}, set:function oncut (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncut_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpaste", {configurable:true, enumerable:true, get:function onpaste (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpaste_get", arguments)}, set:function onpaste (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpaste_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "children", {configurable:true, enumerable:true, get:function children (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "children_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "firstElementChild", {configurable:true, enumerable:true, get:function firstElementChild (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "firstElementChild_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "lastElementChild", {configurable:true, enumerable:true, get:function lastElementChild (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "lastElementChild_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "childElementCount", {configurable:true, enumerable:true, get:function childElementCount (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "childElementCount_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "activeElement", {configurable:true, enumerable:true, get:function activeElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "activeElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "styleSheets", {configurable:true, enumerable:true, get:function styleSheets (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "styleSheets_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "pointerLockElement", {configurable:true, enumerable:true, get:function pointerLockElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "pointerLockElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "fullscreenElement", {configurable:true, enumerable:true, get:function fullscreenElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreenElement_get", arguments)}, set:function fullscreenElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreenElement_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "adoptedStyleSheets", {configurable:true, enumerable:true, get:function adoptedStyleSheets (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "adoptedStyleSheets_get", arguments)}, set:function adoptedStyleSheets (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "adoptedStyleSheets_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "fonts", {configurable:true, enumerable:true, get:function fonts (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fonts_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "adoptNode", {configurable:true, enumerable:true, writable:true, value:function adoptNode (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "adoptNode", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "append", {configurable:true, enumerable:true, writable:true, value:function append (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "append", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "captureEvents", {configurable:true, enumerable:true, writable:true, value:function captureEvents (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "captureEvents", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "caretRangeFromPoint", {configurable:true, enumerable:true, writable:true, value:function caretRangeFromPoint (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "caretRangeFromPoint", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "clear", {configurable:true, enumerable:true, writable:true, value:function clear (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "clear", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "close", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createAttribute", {configurable:true, enumerable:true, writable:true, value:function createAttribute (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createAttribute", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createAttributeNS", {configurable:true, enumerable:true, writable:true, value:function createAttributeNS (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createAttributeNS", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createCDATASection", {configurable:true, enumerable:true, writable:true, value:function createCDATASection (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createCDATASection", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createComment", {configurable:true, enumerable:true, writable:true, value:function createComment (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createComment", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createDocumentFragment", {configurable:true, enumerable:true, writable:true, value:function createDocumentFragment (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createDocumentFragment", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createElement", {configurable:true, enumerable:true, writable:true, value:function createElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createElement", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createElementNS", {configurable:true, enumerable:true, writable:true, value:function createElementNS (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createElementNS", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createEvent", {configurable:true, enumerable:true, writable:true, value:function createEvent (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createEvent", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createExpression", {configurable:true, enumerable:true, writable:true, value:function createExpression (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createExpression", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createNSResolver", {configurable:true, enumerable:true, writable:true, value:function createNSResolver (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createNSResolver", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createNodeIterator", {configurable:true, enumerable:true, writable:true, value:function createNodeIterator (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createNodeIterator", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createProcessingInstruction", {configurable:true, enumerable:true, writable:true, value:function createProcessingInstruction (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createProcessingInstruction", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createRange", {configurable:true, enumerable:true, writable:true, value:function createRange (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createRange", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createTextNode", {configurable:true, enumerable:true, writable:true, value:function createTextNode (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createTextNode", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "createTreeWalker", {configurable:true, enumerable:true, writable:true, value:function createTreeWalker (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createTreeWalker", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "elementFromPoint", {configurable:true, enumerable:true, writable:true, value:function elementFromPoint (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "elementFromPoint", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "elementsFromPoint", {configurable:true, enumerable:true, writable:true, value:function elementsFromPoint (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "elementsFromPoint", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "evaluate", {configurable:true, enumerable:true, writable:true, value:function evaluate (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "evaluate", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "execCommand", {configurable:true, enumerable:true, writable:true, value:function execCommand (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "execCommand", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "exitFullscreen", {configurable:true, enumerable:true, writable:true, value:function exitFullscreen (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "exitFullscreen", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "exitPointerLock", {configurable:true, enumerable:true, writable:true, value:function exitPointerLock (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "exitPointerLock", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementById", {configurable:true, enumerable:true, writable:true, value:function getElementById (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementById", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementsByClassName", {configurable:true, enumerable:true, writable:true, value:function getElementsByClassName (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementsByClassName", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementsByName", {configurable:true, enumerable:true, writable:true, value:function getElementsByName (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementsByName", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementsByTagName", {configurable:true, enumerable:true, writable:true, value:function getElementsByTagName (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementsByTagName", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementsByTagNameNS", {configurable:true, enumerable:true, writable:true, value:function getElementsByTagNameNS (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementsByTagNameNS", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "getSelection", {configurable:true, enumerable:true, writable:true, value:function getSelection (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getSelection", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "hasFocus", {configurable:true, enumerable:true, writable:true, value:function hasFocus (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "hasFocus", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "importNode", {configurable:true, enumerable:true, writable:true, value:function importNode (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "importNode", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "open", {configurable:true, enumerable:true, writable:true, value:function open (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "open", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "prepend", {configurable:true, enumerable:true, writable:true, value:function prepend (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "prepend", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandEnabled", {configurable:true, enumerable:true, writable:true, value:function queryCommandEnabled (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandEnabled", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandIndeterm", {configurable:true, enumerable:true, writable:true, value:function queryCommandIndeterm (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandIndeterm", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandState", {configurable:true, enumerable:true, writable:true, value:function queryCommandState (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandState", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandSupported", {configurable:true, enumerable:true, writable:true, value:function queryCommandSupported (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandSupported", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandValue", {configurable:true, enumerable:true, writable:true, value:function queryCommandValue (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandValue", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "querySelector", {configurable:true, enumerable:true, writable:true, value:function querySelector (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "querySelector", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "querySelectorAll", {configurable:true, enumerable:true, writable:true, value:function querySelectorAll (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "querySelectorAll", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "releaseEvents", {configurable:true, enumerable:true, writable:true, value:function releaseEvents (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "releaseEvents", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "replaceChildren", {configurable:true, enumerable:true, writable:true, value:function replaceChildren (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "replaceChildren", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitCancelFullScreen", {configurable:true, enumerable:true, writable:true, value:function webkitCancelFullScreen (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitCancelFullScreen", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitExitFullscreen", {configurable:true, enumerable:true, writable:true, value:function webkitExitFullscreen (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitExitFullscreen", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "write", {configurable:true, enumerable:true, writable:true, value:function write (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "write", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "writeln", {configurable:true, enumerable:true, writable:true, value:function writeln (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "writeln", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "fragmentDirective", {configurable:true, enumerable:true, get:function fragmentDirective (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fragmentDirective_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforematch", {configurable:true, enumerable:true, get:function onbeforematch (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforematch_get", arguments)}, set:function onbeforematch (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforematch_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "timeline", {configurable:true, enumerable:true, get:function timeline (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "timeline_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "pictureInPictureEnabled", {configurable:true, enumerable:true, get:function pictureInPictureEnabled (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "pictureInPictureEnabled_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "pictureInPictureElement", {configurable:true, enumerable:true, get:function pictureInPictureElement (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "pictureInPictureElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerrawupdate", {configurable:true, enumerable:true, get:function onpointerrawupdate (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerrawupdate_get", arguments)}, set:function onpointerrawupdate (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerrawupdate_set", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "exitPictureInPicture", {configurable:true, enumerable:true, writable:true, value:function exitPictureInPicture (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "exitPictureInPicture", arguments)}});
bodavm.toolsFunc.defineProperty(Document.prototype, "getAnimations", {configurable:true, enumerable:true, writable:true, value:function getAnimations (){return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getAnimations", arguments)}});

// HTMLDocument对象
HTMLDocument = function HTMLDocument(){
    if (arguments[0]=='bobo'){

    }else{
        return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")

    }
}
bodavm.toolsFunc.safeProto(HTMLDocument, "HTMLDocument");
HTMLDocument.prototype.__proto__=Document.prototype;
HTMLDocument.__proto__=Document;

// document对象
// document= {}



var document = {}

document.__proto__=HTMLDocument.prototype

Object.setPrototypeOf(document, HTMLDocument.prototype);
bodavm.toolsFunc.defineProperty(document,"location",{configurable:false, enumerable:true, get:function location () {return bodavm.toolsFunc.dispatch(this,document,"document","location_get",arguments,)},set:function location () {return bodavm.toolsFunc.dispatch(this,document,"document","location_set",arguments)},});
bodavm.toolsFunc.defineProperty(document,"f",{configurable:true, enumerable:true, writable:true, value:{},});
bodavm.toolsFunc.defineProperty(document,"jQuery110208558905071218827",{configurable:true, enumerable:true, writable:true, value:5});
bodavm.toolsFunc.defineProperty(document,"writeln",{configurable:true, enumerable:true, writable:true, value:function writeln() {return bodavm.toolsFunc.dispatch(this,document,"document","writeln",arguments)}});
bodavm.toolsFunc.defineProperty(document,"write",{configurable:true, enumerable:true, writable:true, value:function write() {return bodavm.toolsFunc.dispatch(this,document,"document","write",arguments)}});
//解析的root

// Location对象
Location = function Location(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Location, "Location");

// debugger
// location对象
var location = {}
location.__proto__=Location.prototype;
bodavm.toolsFunc.defineProperty(location, "valueOf", {configurable:false, enumerable:false, writable:false, value:function valueOf (){return bodavm.toolsFunc.dispatch(this, location, "location", "valueOf", arguments)}});
bodavm.toolsFunc.defineProperty(location, "ancestorOrigins", {configurable:false, enumerable:true, get:function ancestorOrigins (){return bodavm.toolsFunc.dispatch(this, location, "location", "ancestorOrigins_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(location, "href", {configurable:false, enumerable:true, get:function href (){return bodavm.toolsFunc.dispatch(this, location, "location", "href_get", arguments)}, set:function href (){return bodavm.toolsFunc.dispatch(this, location, "location", "href_set", arguments)}});
bodavm.toolsFunc.defineProperty(location, "origin", {configurable:false, enumerable:true, get:function origin (){return bodavm.toolsFunc.dispatch(this, location, "location", "origin_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(location, "protocol", {configurable:false, enumerable:true, get:function protocol (){return bodavm.toolsFunc.dispatch(this, location, "location", "protocol_get", arguments)}, set:function protocol (){return bodavm.toolsFunc.dispatch(this, location, "location", "protocol_set", arguments)}});
bodavm.toolsFunc.defineProperty(location, "host", {configurable:false, enumerable:true, get:function host (){return bodavm.toolsFunc.dispatch(this, location, "location", "host_get", arguments)}, set:function host (){return bodavm.toolsFunc.dispatch(this, location, "location", "host_set", arguments)}});
bodavm.toolsFunc.defineProperty(location, "hostname", {configurable:false, enumerable:true, get:function hostname (){return bodavm.toolsFunc.dispatch(this, location, "location", "hostname_get", arguments)}, set:function hostname (){return bodavm.toolsFunc.dispatch(this, location, "location", "hostname_set", arguments)}});
bodavm.toolsFunc.defineProperty(location, "port", {configurable:false, enumerable:true, get:function port (){return bodavm.toolsFunc.dispatch(this, location, "location", "port_get", arguments)}, set:function port (){return bodavm.toolsFunc.dispatch(this, location, "location", "port_set", arguments)}});
bodavm.toolsFunc.defineProperty(location, "pathname", {configurable:false, enumerable:true, get:function pathname (){return bodavm.toolsFunc.dispatch(this, location, "location", "pathname_get", arguments)}, set:function pathname (){return bodavm.toolsFunc.dispatch(this, location, "location", "pathname_set", arguments)}});
bodavm.toolsFunc.defineProperty(location, "search", {configurable:false, enumerable:true, get:function search (){return bodavm.toolsFunc.dispatch(this, location, "location", "search_get", arguments)}, set:function search (){return bodavm.toolsFunc.dispatch(this, location, "location", "search_set", arguments)}});
bodavm.toolsFunc.defineProperty(location, "hash", {configurable:false, enumerable:true, get:function hash (){return bodavm.toolsFunc.dispatch(this, location, "location", "hash_get", arguments)}, set:function hash (){return bodavm.toolsFunc.dispatch(this, location, "location", "hash_set", arguments)}});
bodavm.toolsFunc.defineProperty(location, "assign", {configurable:false, enumerable:true, writable:false, value:function assign (){return bodavm.toolsFunc.dispatch(this, location, "location", "assign", arguments)}});
bodavm.toolsFunc.defineProperty(location, "reload", {configurable:false, enumerable:true, writable:false, value:function reload (){return bodavm.toolsFunc.dispatch(this, location, "location", "reload", arguments)}});
bodavm.toolsFunc.defineProperty(location, "replace", {configurable:false, enumerable:true, writable:false, value:function replace (){return bodavm.toolsFunc.dispatch(this, location, "location", "replace", arguments)}});
bodavm.toolsFunc.defineProperty(location, "toString", {configurable:false, enumerable:true, writable:false, value:function toString (){return bodavm.toolsFunc.dispatch(this, location, "location", "toString", arguments)}});

//Storage对象
Storage=function Storage(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(Storage,"Storage");
bodavm.toolsFunc.defineProperty(Storage.prototype,"length",{configurable:true, enumerable:true, get:function length () {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","length_get",arguments,)},set:undefined});
bodavm.toolsFunc.defineProperty(Storage.prototype,"clear",{configurable:true, enumerable:true, writable:true, value:function clear() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","clear",arguments)}});
bodavm.toolsFunc.defineProperty(Storage.prototype,"getItem",{configurable:true, enumerable:true, writable:true, value:function getItem() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","getItem",arguments)}});
bodavm.toolsFunc.defineProperty(Storage.prototype,"key",{configurable:true, enumerable:true, writable:true, value:function key() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","key",arguments)}});
bodavm.toolsFunc.defineProperty(Storage.prototype,"removeItem",{configurable:true, enumerable:true, writable:true, value:function removeItem() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","removeItem",arguments)}});
bodavm.toolsFunc.defineProperty(Storage.prototype,"setItem",{configurable:true, enumerable:true, writable:true, value:function setItem() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","setItem",arguments)}});


var localStorage= {}
localStorage.__proto__=Storage.prototype;
// sessionStorage对象
var sessionStorage= {}
sessionStorage.__proto__=Storage.prototype;
// debugger;


// CharacterData对象
CharacterData = function CharacterData(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(CharacterData, "CharacterData");
CharacterData.prototype.__proto__=Node.prototype;
CharacterData.__proto__=Node;
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "data", {configurable:true, enumerable:true, get:function data (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "data_get", arguments)}, set:function data (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "data_set", arguments)}});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "previousElementSibling", {configurable:true, enumerable:true, get:function previousElementSibling (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "previousElementSibling_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "nextElementSibling", {configurable:true, enumerable:true, get:function nextElementSibling (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "nextElementSibling_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "after", {configurable:true, enumerable:true, writable:true, value:function after (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "after", arguments)}});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "appendData", {configurable:true, enumerable:true, writable:true, value:function appendData (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "appendData", arguments)}});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "before", {configurable:true, enumerable:true, writable:true, value:function before (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "before", arguments)}});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "deleteData", {configurable:true, enumerable:true, writable:true, value:function deleteData (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "deleteData", arguments)}});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "insertData", {configurable:true, enumerable:true, writable:true, value:function insertData (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "insertData", arguments)}});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "remove", {configurable:true, enumerable:true, writable:true, value:function remove (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "remove", arguments)}});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "replaceData", {configurable:true, enumerable:true, writable:true, value:function replaceData (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "replaceData", arguments)}});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "replaceWith", {configurable:true, enumerable:true, writable:true, value:function replaceWith (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "replaceWith", arguments)}});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "substringData", {configurable:true, enumerable:true, writable:true, value:function substringData (){return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "substringData", arguments)}});

// Text对象
Text = function Text(){}
bodavm.toolsFunc.safeProto(Text, "Text");
Text.prototype.__proto__=CharacterData.prototype;
Text.__proto__=CharacterData;
bodavm.toolsFunc.defineProperty(Text.prototype, "wholeText", {configurable:true, enumerable:true, get:function wholeText (){return bodavm.toolsFunc.dispatch(this, Text.prototype, "Text", "wholeText_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Text.prototype, "assignedSlot", {configurable:true, enumerable:true, get:function assignedSlot (){return bodavm.toolsFunc.dispatch(this, Text.prototype, "Text", "assignedSlot_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Text.prototype, "splitText", {configurable:true, enumerable:true, writable:true, value:function splitText (){return bodavm.toolsFunc.dispatch(this, Text.prototype, "Text", "splitText", arguments)}});



// BarProp对象
Database = function Database() { return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor") }
bodavm.toolsFunc.safeProto(Database, "Database");
bodavm.toolsFunc.defineProperty(Database.prototype, "version", { configurable: true, enumerable: true, get: function version() { return bodavm.toolsFunc.dispatch(this, Database.prototype, "Database", "version", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(Database.prototype, "readTransaction", { configurable: true, enumerable: true, writable: true, value: function readTransaction() { return bodavm.toolsFunc.dispatch(this, Database.prototype, "Database", "readTransaction", arguments) } });
bodavm.toolsFunc.defineProperty(Database.prototype, "transaction", { configurable: true, enumerable: true, writable: true, value: function transaction() { return bodavm.toolsFunc.dispatch(this, Database.prototype, "Database", "transaction", arguments) } });
bodavm.toolsFunc.defineProperty(Database.prototype, "changeVersion", { configurable: true, enumerable: true, writable: true, value: function changeVersion() { return bodavm.toolsFunc.dispatch(this, Database.prototype, "Database", "changeVersion", arguments) } });

var database = {}
database.__proto__ = Database.prototype
delete Database
// CloseEvent对象
CloseEvent = function CloseEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CloseEvent': 1 argument required, but only 0 present.")}
bodavm.toolsFunc.safeProto(CloseEvent, "CloseEvent");
CloseEvent.prototype.__proto__=Event.prototype;
CloseEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(CloseEvent.prototype, "wasClean", {configurable:true, enumerable:true, get:function wasClean (){return bodavm.toolsFunc.dispatch(this, CloseEvent.prototype, "CloseEvent", "wasClean_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CloseEvent.prototype, "code", {configurable:true, enumerable:true, get:function code (){return bodavm.toolsFunc.dispatch(this, CloseEvent.prototype, "CloseEvent", "code_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CloseEvent.prototype, "reason", {configurable:true, enumerable:true, get:function reason (){return bodavm.toolsFunc.dispatch(this, CloseEvent.prototype, "CloseEvent", "reason_get", arguments)}, set:undefined});

// Notification对象
Notification = function Notification(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Notification': 1 argument required, but only 0 present.")}
bodavm.toolsFunc.safeProto(Notification, "Notification");
Notification.prototype.__proto__=EventTarget.prototype;
Notification.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(Notification, "permission", {configurable:true, enumerable:true, get:function permission (){return bodavm.toolsFunc.dispatch(this, Notification, "Notification", "permission_get", arguments, 'denied')}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification, "maxActions", {configurable:true, enumerable:true, get:function maxActions (){return bodavm.toolsFunc.dispatch(this, Notification, "Notification", "maxActions_get", arguments, 2)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification, "requestPermission", {configurable:true, enumerable:true, writable:true, value:function requestPermission (){return bodavm.toolsFunc.dispatch(this, Notification, "Notification", "requestPermission", arguments)}});
bodavm.toolsFunc.defineProperty(Notification.prototype, "onclick", {configurable:true, enumerable:true, get:function onclick (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onclick_get", arguments)}, set:function onclick (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(Notification.prototype, "onshow", {configurable:true, enumerable:true, get:function onshow (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onshow_get", arguments)}, set:function onshow (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onshow_set", arguments)}});
bodavm.toolsFunc.defineProperty(Notification.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(Notification.prototype, "onclose", {configurable:true, enumerable:true, get:function onclose (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onclose_get", arguments)}, set:function onclose (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "onclose_set", arguments)}});
bodavm.toolsFunc.defineProperty(Notification.prototype, "title", {configurable:true, enumerable:true, get:function title (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "title_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "dir", {configurable:true, enumerable:true, get:function dir (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "dir_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "lang", {configurable:true, enumerable:true, get:function lang (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "lang_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "body", {configurable:true, enumerable:true, get:function body (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "body_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "tag", {configurable:true, enumerable:true, get:function tag (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "tag_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "icon", {configurable:true, enumerable:true, get:function icon (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "icon_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "badge", {configurable:true, enumerable:true, get:function badge (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "badge_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "vibrate", {configurable:true, enumerable:true, get:function vibrate (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "vibrate_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "timestamp", {configurable:true, enumerable:true, get:function timestamp (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "timestamp_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "renotify", {configurable:true, enumerable:true, get:function renotify (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "renotify_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "silent", {configurable:true, enumerable:true, get:function silent (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "silent_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "requireInteraction", {configurable:true, enumerable:true, get:function requireInteraction (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "requireInteraction_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "data", {configurable:true, enumerable:true, get:function data (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "data_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "actions", {configurable:true, enumerable:true, get:function actions (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "actions_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Notification.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "close", arguments)}});
bodavm.toolsFunc.defineProperty(Notification.prototype, "image", {configurable:true, enumerable:true, get:function image (){return bodavm.toolsFunc.dispatch(this, Notification.prototype, "Notification", "image_get", arguments)}, set:undefined});

// IDBDatabase对象
IDBDatabase = function IDBDatabase(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(IDBDatabase, "IDBDatabase");
IDBDatabase.prototype.__proto__=EventTarget.prototype;
IDBDatabase.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "name_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "version", {configurable:true, enumerable:true, get:function version (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "version_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "objectStoreNames", {configurable:true, enumerable:true, get:function objectStoreNames (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "objectStoreNames_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "onabort", {configurable:true, enumerable:true, get:function onabort (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onabort_get", arguments)}, set:function onabort (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onabort_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "onclose", {configurable:true, enumerable:true, get:function onclose (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onclose_get", arguments)}, set:function onclose (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onclose_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "onversionchange", {configurable:true, enumerable:true, get:function onversionchange (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onversionchange_get", arguments)}, set:function onversionchange (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onversionchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "close", arguments)}});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "createObjectStore", {configurable:true, enumerable:true, writable:true, value:function createObjectStore (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "createObjectStore", arguments)}});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "deleteObjectStore", {configurable:true, enumerable:true, writable:true, value:function deleteObjectStore (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "deleteObjectStore", arguments)}});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "transaction", {configurable:true, enumerable:true, writable:true, value:function transaction (){return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "transaction", arguments)}});

// IDBRequest对象
IDBRequest = function IDBRequest(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(IDBRequest, "IDBRequest");
IDBRequest.prototype.__proto__=EventTarget.prototype;
IDBRequest.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "result", {configurable:true, enumerable:true, get:function result (){return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "result_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "error", {configurable:true, enumerable:true, get:function error (){return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "error_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "source", {configurable:true, enumerable:true, get:function source (){return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "source_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "transaction", {configurable:true, enumerable:true, get:function transaction (){return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "transaction_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "readyState", {configurable:true, enumerable:true, get:function readyState (){return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "readyState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "onsuccess", {configurable:true, enumerable:true, get:function onsuccess (){return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onsuccess_get", arguments)}, set:function onsuccess (){return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onsuccess_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBRequest.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onerror_set", arguments)}});

// IDBOpenDBRequest对象
IDBOpenDBRequest = function IDBOpenDBRequest(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(IDBOpenDBRequest, "IDBOpenDBRequest");
IDBOpenDBRequest.prototype.__proto__=IDBRequest.prototype;
IDBOpenDBRequest.__proto__=IDBRequest;
bodavm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onblocked", {configurable:true, enumerable:true, get:function onblocked (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onblocked_get", arguments)}, set:function onblocked (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onblocked_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onupgradeneeded", {configurable:true, enumerable:true, get:function onupgradeneeded (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onupgradeneeded_get", arguments)}, set:function onupgradeneeded (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onupgradeneeded_set", arguments)}});

//IDBFactory对象
IDBFactory=function IDBFactory(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(IDBFactory,"IDBFactory");
bodavm.toolsFunc.defineProperty(IDBFactory.prototype,"cmp",{configurable:true, enumerable:true, writable:true, value:function cmp() {return bodavm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","cmp",arguments)}});
bodavm.toolsFunc.defineProperty(IDBFactory.prototype,"databases",{configurable:true, enumerable:true, writable:true, value:function databases() {return bodavm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","databases",arguments)}});
bodavm.toolsFunc.defineProperty(IDBFactory.prototype,"deleteDatabase",{configurable:true, enumerable:true, writable:true, value:function deleteDatabase() {return bodavm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","deleteDatabase",arguments)}});
bodavm.toolsFunc.defineProperty(IDBFactory.prototype,"open",{configurable:true, enumerable:true, writable:true, value:function open() {return bodavm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","open",arguments)}});


// indexedDB对象
var indexedDB = {}
indexedDB.__proto__=IDBFactory.prototype;

//History对象
History=function History(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(History,"History");
bodavm.toolsFunc.defineProperty(History.prototype,"length",{configurable:true, enumerable:true, get:function length () {return bodavm.toolsFunc.dispatch(this,History.prototype,"History","length_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(History.prototype,"scrollRestoration",{configurable:true, enumerable:true, get:function scrollRestoration () {return bodavm.toolsFunc.dispatch(this,History.prototype,"History","scrollRestoration_get",arguments)},set:function scrollRestoration () {return bodavm.toolsFunc.dispatch(this,History.prototype,"History","scrollRestoration_set",arguments)},});
bodavm.toolsFunc.defineProperty(History.prototype,"state",{configurable:true, enumerable:true, get:function state () {return bodavm.toolsFunc.dispatch(this,History.prototype,"History","state_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(History.prototype,"back",{configurable:true, enumerable:true, writable:true, value:function back() {return bodavm.toolsFunc.dispatch(this,History.prototype,"History","back",arguments)}});
bodavm.toolsFunc.defineProperty(History.prototype,"forward",{configurable:true, enumerable:true, writable:true, value:function forward() {return bodavm.toolsFunc.dispatch(this,History.prototype,"History","forward",arguments)}});
bodavm.toolsFunc.defineProperty(History.prototype,"go",{configurable:true, enumerable:true, writable:true, value:function go() {return bodavm.toolsFunc.dispatch(this,History.prototype,"History","go",arguments)}});
bodavm.toolsFunc.defineProperty(History.prototype,"pushState",{configurable:true, enumerable:true, writable:true, value:function pushState() {return bodavm.toolsFunc.dispatch(this,History.prototype,"History","pushState",arguments)}});
bodavm.toolsFunc.defineProperty(History.prototype,"replaceState",{configurable:true, enumerable:true, writable:true, value:function replaceState() {return bodavm.toolsFunc.dispatch(this,History.prototype,"History","replaceState",arguments)}});
// history对象
var history= {}
Object.setPrototypeOf(history, History.prototype);

// Screen对象
Screen = function Screen(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Screen, "Screen");
Screen.prototype.__proto__=EventTarget.prototype;
Screen.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(Screen.prototype, "availWidth", {configurable:true, enumerable:true, get:function availWidth (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availWidth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Screen.prototype, "availHeight", {configurable:true, enumerable:true, get:function availHeight (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availHeight_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Screen.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "width_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Screen.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "height_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Screen.prototype, "colorDepth", {configurable:true, enumerable:true, get:function colorDepth (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "colorDepth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Screen.prototype, "pixelDepth", {configurable:true, enumerable:true, get:function pixelDepth (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "pixelDepth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Screen.prototype, "availLeft", {configurable:true, enumerable:true, get:function availLeft (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availLeft_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Screen.prototype, "availTop", {configurable:true, enumerable:true, get:function availTop (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availTop_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Screen.prototype, "orientation", {configurable:true, enumerable:true, get:function orientation (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "orientation_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Screen.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Screen.prototype, "isExtended", {configurable:true, enumerable:true, get:function isExtended (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "isExtended_get", arguments)}, set:undefined});
// screen对象
var screen = {}
screen.__proto__=Screen.prototype;





// CSSStyleDeclaration对象
CSSStyleDeclaration = function CSSStyleDeclaration(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(CSSStyleDeclaration, "CSSStyleDeclaration");
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssText", {configurable:true, enumerable:true, get:function cssText (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "cssText_get", arguments)}, set:function cssText (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "cssText_set", arguments)}});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "parentRule", {configurable:true, enumerable:true, get:function parentRule (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "parentRule_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssFloat", {configurable:true, enumerable:true, get:function cssFloat (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "cssFloat_get", arguments)}, set:function cssFloat (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "cssFloat_set", arguments)}});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyPriority", {configurable:true, enumerable:true, writable:true, value:function getPropertyPriority (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "getPropertyPriority", arguments)}});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyValue", {configurable:true, enumerable:true, writable:true, value:function getPropertyValue (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "getPropertyValue", arguments)}});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "item", arguments)}});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "removeProperty", {configurable:true, enumerable:true, writable:true, value:function removeProperty (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "removeProperty", arguments)}});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {configurable:true, enumerable:true, writable:true, value:function setProperty (){return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "setProperty", arguments)}});







// CanvasRenderingContext2D对象
CanvasRenderingContext2D = function CanvasRenderingContext2D(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(CanvasRenderingContext2D, "CanvasRenderingContext2D");
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "canvas", {configurable:true, enumerable:true, get:function canvas (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "canvas_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "globalAlpha", {configurable:true, enumerable:true, get:function globalAlpha (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "globalAlpha_get", arguments)}, set:function globalAlpha (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "globalAlpha_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "globalCompositeOperation", {configurable:true, enumerable:true, get:function globalCompositeOperation (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "globalCompositeOperation_get", arguments)}, set:function globalCompositeOperation (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "globalCompositeOperation_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "filter", {configurable:true, enumerable:true, get:function filter (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "filter_get", arguments)}, set:function filter (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "filter_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingEnabled", {configurable:true, enumerable:true, get:function imageSmoothingEnabled (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "imageSmoothingEnabled_get", arguments)}, set:function imageSmoothingEnabled (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "imageSmoothingEnabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingQuality", {configurable:true, enumerable:true, get:function imageSmoothingQuality (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "imageSmoothingQuality_get", arguments)}, set:function imageSmoothingQuality (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "imageSmoothingQuality_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeStyle", {configurable:true, enumerable:true, get:function strokeStyle (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "strokeStyle_get", arguments)}, set:function strokeStyle (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "strokeStyle_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillStyle", {configurable:true, enumerable:true, get:function fillStyle (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fillStyle_get", arguments)}, set:function fillStyle (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fillStyle_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetX", {configurable:true, enumerable:true, get:function shadowOffsetX (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowOffsetX_get", arguments)}, set:function shadowOffsetX (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowOffsetX_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetY", {configurable:true, enumerable:true, get:function shadowOffsetY (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowOffsetY_get", arguments)}, set:function shadowOffsetY (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowOffsetY_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowBlur", {configurable:true, enumerable:true, get:function shadowBlur (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowBlur_get", arguments)}, set:function shadowBlur (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowBlur_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowColor", {configurable:true, enumerable:true, get:function shadowColor (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowColor_get", arguments)}, set:function shadowColor (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowColor_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineWidth", {configurable:true, enumerable:true, get:function lineWidth (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineWidth_get", arguments)}, set:function lineWidth (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineWidth_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineCap", {configurable:true, enumerable:true, get:function lineCap (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineCap_get", arguments)}, set:function lineCap (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineCap_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineJoin", {configurable:true, enumerable:true, get:function lineJoin (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineJoin_get", arguments)}, set:function lineJoin (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineJoin_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "miterLimit", {configurable:true, enumerable:true, get:function miterLimit (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "miterLimit_get", arguments)}, set:function miterLimit (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "miterLimit_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineDashOffset", {configurable:true, enumerable:true, get:function lineDashOffset (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineDashOffset_get", arguments)}, set:function lineDashOffset (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineDashOffset_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "font", {configurable:true, enumerable:true, get:function font (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "font_get", arguments)}, set:function font (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "font_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textAlign", {configurable:true, enumerable:true, get:function textAlign (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textAlign_get", arguments)}, set:function textAlign (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textAlign_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textBaseline", {configurable:true, enumerable:true, get:function textBaseline (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textBaseline_get", arguments)}, set:function textBaseline (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textBaseline_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "direction", {configurable:true, enumerable:true, get:function direction (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "direction_get", arguments)}, set:function direction (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "direction_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontKerning", {configurable:true, enumerable:true, get:function fontKerning (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontKerning_get", arguments)}, set:function fontKerning (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontKerning_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontStretch", {configurable:true, enumerable:true, get:function fontStretch (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontStretch_get", arguments)}, set:function fontStretch (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontStretch_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontVariantCaps", {configurable:true, enumerable:true, get:function fontVariantCaps (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontVariantCaps_get", arguments)}, set:function fontVariantCaps (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontVariantCaps_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "letterSpacing", {configurable:true, enumerable:true, get:function letterSpacing (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "letterSpacing_get", arguments)}, set:function letterSpacing (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "letterSpacing_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textRendering", {configurable:true, enumerable:true, get:function textRendering (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textRendering_get", arguments)}, set:function textRendering (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textRendering_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "wordSpacing", {configurable:true, enumerable:true, get:function wordSpacing (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "wordSpacing_get", arguments)}, set:function wordSpacing (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "wordSpacing_set", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "clip", {configurable:true, enumerable:true, writable:true, value:function clip (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "clip", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createConicGradient", {configurable:true, enumerable:true, writable:true, value:function createConicGradient (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createConicGradient", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createImageData", {configurable:true, enumerable:true, writable:true, value:function createImageData (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createImageData", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createLinearGradient", {configurable:true, enumerable:true, writable:true, value:function createLinearGradient (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createLinearGradient", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createPattern", {configurable:true, enumerable:true, writable:true, value:function createPattern (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createPattern", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createRadialGradient", {configurable:true, enumerable:true, writable:true, value:function createRadialGradient (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createRadialGradient", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "drawFocusIfNeeded", {configurable:true, enumerable:true, writable:true, value:function drawFocusIfNeeded (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "drawFocusIfNeeded", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "drawImage", {configurable:true, enumerable:true, writable:true, value:function drawImage (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "drawImage", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fill", {configurable:true, enumerable:true, writable:true, value:function fill (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fill", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillText", {configurable:true, enumerable:true, writable:true, value:function fillText (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fillText", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getContextAttributes", {configurable:true, enumerable:true, writable:true, value:function getContextAttributes (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "getContextAttributes", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getImageData", {configurable:true, enumerable:true, writable:true, value:function getImageData (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "getImageData", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getLineDash", {configurable:true, enumerable:true, writable:true, value:function getLineDash (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "getLineDash", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getTransform", {configurable:true, enumerable:true, writable:true, value:function getTransform (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "getTransform", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isContextLost", {configurable:true, enumerable:true, writable:true, value:function isContextLost (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "isContextLost", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isPointInPath", {configurable:true, enumerable:true, writable:true, value:function isPointInPath (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "isPointInPath", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isPointInStroke", {configurable:true, enumerable:true, writable:true, value:function isPointInStroke (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "isPointInStroke", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "measureText", {configurable:true, enumerable:true, writable:true, value:function measureText (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "measureText", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "putImageData", {configurable:true, enumerable:true, writable:true, value:function putImageData (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "putImageData", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "reset", {configurable:true, enumerable:true, writable:true, value:function reset (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "reset", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "roundRect", {configurable:true, enumerable:true, writable:true, value:function roundRect (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "roundRect", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "save", {configurable:true, enumerable:true, writable:true, value:function save (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "save", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "scale", {configurable:true, enumerable:true, writable:true, value:function scale (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "scale", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "setLineDash", {configurable:true, enumerable:true, writable:true, value:function setLineDash (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "setLineDash", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "setTransform", {configurable:true, enumerable:true, writable:true, value:function setTransform (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "setTransform", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "stroke", {configurable:true, enumerable:true, writable:true, value:function stroke (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "stroke", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeText", {configurable:true, enumerable:true, writable:true, value:function strokeText (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "strokeText", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "transform", {configurable:true, enumerable:true, writable:true, value:function transform (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "transform", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "translate", {configurable:true, enumerable:true, writable:true, value:function translate (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "translate", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "arc", {configurable:true, enumerable:true, writable:true, value:function arc (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "arc", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "arcTo", {configurable:true, enumerable:true, writable:true, value:function arcTo (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "arcTo", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "beginPath", {configurable:true, enumerable:true, writable:true, value:function beginPath (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "beginPath", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "bezierCurveTo", {configurable:true, enumerable:true, writable:true, value:function bezierCurveTo (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "bezierCurveTo", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "clearRect", {configurable:true, enumerable:true, writable:true, value:function clearRect (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "clearRect", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "closePath", {configurable:true, enumerable:true, writable:true, value:function closePath (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "closePath", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "ellipse", {configurable:true, enumerable:true, writable:true, value:function ellipse (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "ellipse", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillRect", {configurable:true, enumerable:true, writable:true, value:function fillRect (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fillRect", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineTo", {configurable:true, enumerable:true, writable:true, value:function lineTo (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineTo", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "moveTo", {configurable:true, enumerable:true, writable:true, value:function moveTo (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "moveTo", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "quadraticCurveTo", {configurable:true, enumerable:true, writable:true, value:function quadraticCurveTo (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "quadraticCurveTo", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "rect", {configurable:true, enumerable:true, writable:true, value:function rect (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "rect", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "resetTransform", {configurable:true, enumerable:true, writable:true, value:function resetTransform (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "resetTransform", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "restore", {configurable:true, enumerable:true, writable:true, value:function restore (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "restore", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "rotate", {configurable:true, enumerable:true, writable:true, value:function rotate (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "rotate", arguments)}});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeRect", {configurable:true, enumerable:true, writable:true, value:function strokeRect (){return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "strokeRect", arguments)}});

// WebGLRenderingContext对象
WebGLRenderingContext = function WebGLRenderingContext(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(WebGLRenderingContext, "WebGLRenderingContext");
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_BUFFER_BIT", {configurable:false, enumerable:true, writable:false, value:256});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BUFFER_BIT", {configurable:false, enumerable:true, writable:false, value:1024});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_BUFFER_BIT", {configurable:false, enumerable:true, writable:false, value:16384});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "POINTS", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINES", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_LOOP", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_STRIP", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLES", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLE_STRIP", {configurable:false, enumerable:true, writable:false, value:5});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLE_FAN", {configurable:false, enumerable:true, writable:false, value:6});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ZERO", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_COLOR", {configurable:false, enumerable:true, writable:false, value:768});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_SRC_COLOR", {configurable:false, enumerable:true, writable:false, value:769});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_ALPHA", {configurable:false, enumerable:true, writable:false, value:770});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_SRC_ALPHA", {configurable:false, enumerable:true, writable:false, value:771});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DST_ALPHA", {configurable:false, enumerable:true, writable:false, value:772});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_DST_ALPHA", {configurable:false, enumerable:true, writable:false, value:773});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DST_COLOR", {configurable:false, enumerable:true, writable:false, value:774});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_DST_COLOR", {configurable:false, enumerable:true, writable:false, value:775});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_ALPHA_SATURATE", {configurable:false, enumerable:true, writable:false, value:776});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_ADD", {configurable:false, enumerable:true, writable:false, value:32774});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION", {configurable:false, enumerable:true, writable:false, value:32777});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION_RGB", {configurable:false, enumerable:true, writable:false, value:32777});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION_ALPHA", {configurable:false, enumerable:true, writable:false, value:34877});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_SUBTRACT", {configurable:false, enumerable:true, writable:false, value:32778});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_REVERSE_SUBTRACT", {configurable:false, enumerable:true, writable:false, value:32779});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_DST_RGB", {configurable:false, enumerable:true, writable:false, value:32968});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_SRC_RGB", {configurable:false, enumerable:true, writable:false, value:32969});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_DST_ALPHA", {configurable:false, enumerable:true, writable:false, value:32970});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_SRC_ALPHA", {configurable:false, enumerable:true, writable:false, value:32971});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CONSTANT_COLOR", {configurable:false, enumerable:true, writable:false, value:32769});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_CONSTANT_COLOR", {configurable:false, enumerable:true, writable:false, value:32770});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CONSTANT_ALPHA", {configurable:false, enumerable:true, writable:false, value:32771});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_CONSTANT_ALPHA", {configurable:false, enumerable:true, writable:false, value:32772});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_COLOR", {configurable:false, enumerable:true, writable:false, value:32773});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ARRAY_BUFFER", {configurable:false, enumerable:true, writable:false, value:34962});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ELEMENT_ARRAY_BUFFER", {configurable:false, enumerable:true, writable:false, value:34963});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ARRAY_BUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:34964});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ELEMENT_ARRAY_BUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:34965});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STREAM_DRAW", {configurable:false, enumerable:true, writable:false, value:35040});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STATIC_DRAW", {configurable:false, enumerable:true, writable:false, value:35044});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DYNAMIC_DRAW", {configurable:false, enumerable:true, writable:false, value:35048});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BUFFER_SIZE", {configurable:false, enumerable:true, writable:false, value:34660});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BUFFER_USAGE", {configurable:false, enumerable:true, writable:false, value:34661});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CURRENT_VERTEX_ATTRIB", {configurable:false, enumerable:true, writable:false, value:34342});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT", {configurable:false, enumerable:true, writable:false, value:1028});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BACK", {configurable:false, enumerable:true, writable:false, value:1029});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT_AND_BACK", {configurable:false, enumerable:true, writable:false, value:1032});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_2D", {configurable:false, enumerable:true, writable:false, value:3553});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CULL_FACE", {configurable:false, enumerable:true, writable:false, value:2884});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND", {configurable:false, enumerable:true, writable:false, value:3042});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DITHER", {configurable:false, enumerable:true, writable:false, value:3024});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_TEST", {configurable:false, enumerable:true, writable:false, value:2960});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_TEST", {configurable:false, enumerable:true, writable:false, value:2929});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SCISSOR_TEST", {configurable:false, enumerable:true, writable:false, value:3089});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_FILL", {configurable:false, enumerable:true, writable:false, value:32823});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_ALPHA_TO_COVERAGE", {configurable:false, enumerable:true, writable:false, value:32926});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE", {configurable:false, enumerable:true, writable:false, value:32928});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NO_ERROR", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_ENUM", {configurable:false, enumerable:true, writable:false, value:1280});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_VALUE", {configurable:false, enumerable:true, writable:false, value:1281});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_OPERATION", {configurable:false, enumerable:true, writable:false, value:1282});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "OUT_OF_MEMORY", {configurable:false, enumerable:true, writable:false, value:1285});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CW", {configurable:false, enumerable:true, writable:false, value:2304});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CCW", {configurable:false, enumerable:true, writable:false, value:2305});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_WIDTH", {configurable:false, enumerable:true, writable:false, value:2849});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALIASED_POINT_SIZE_RANGE", {configurable:false, enumerable:true, writable:false, value:33901});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALIASED_LINE_WIDTH_RANGE", {configurable:false, enumerable:true, writable:false, value:33902});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CULL_FACE_MODE", {configurable:false, enumerable:true, writable:false, value:2885});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT_FACE", {configurable:false, enumerable:true, writable:false, value:2886});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_RANGE", {configurable:false, enumerable:true, writable:false, value:2928});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_WRITEMASK", {configurable:false, enumerable:true, writable:false, value:2930});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_CLEAR_VALUE", {configurable:false, enumerable:true, writable:false, value:2931});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_FUNC", {configurable:false, enumerable:true, writable:false, value:2932});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_CLEAR_VALUE", {configurable:false, enumerable:true, writable:false, value:2961});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_FUNC", {configurable:false, enumerable:true, writable:false, value:2962});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_FAIL", {configurable:false, enumerable:true, writable:false, value:2964});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_PASS_DEPTH_FAIL", {configurable:false, enumerable:true, writable:false, value:2965});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_PASS_DEPTH_PASS", {configurable:false, enumerable:true, writable:false, value:2966});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_REF", {configurable:false, enumerable:true, writable:false, value:2967});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_VALUE_MASK", {configurable:false, enumerable:true, writable:false, value:2963});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_WRITEMASK", {configurable:false, enumerable:true, writable:false, value:2968});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_FUNC", {configurable:false, enumerable:true, writable:false, value:34816});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_FAIL", {configurable:false, enumerable:true, writable:false, value:34817});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_PASS_DEPTH_FAIL", {configurable:false, enumerable:true, writable:false, value:34818});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_PASS_DEPTH_PASS", {configurable:false, enumerable:true, writable:false, value:34819});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_REF", {configurable:false, enumerable:true, writable:false, value:36003});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_VALUE_MASK", {configurable:false, enumerable:true, writable:false, value:36004});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_WRITEMASK", {configurable:false, enumerable:true, writable:false, value:36005});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VIEWPORT", {configurable:false, enumerable:true, writable:false, value:2978});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SCISSOR_BOX", {configurable:false, enumerable:true, writable:false, value:3088});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_CLEAR_VALUE", {configurable:false, enumerable:true, writable:false, value:3106});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_WRITEMASK", {configurable:false, enumerable:true, writable:false, value:3107});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_ALIGNMENT", {configurable:false, enumerable:true, writable:false, value:3317});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "PACK_ALIGNMENT", {configurable:false, enumerable:true, writable:false, value:3333});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_TEXTURE_SIZE", {configurable:false, enumerable:true, writable:false, value:3379});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VIEWPORT_DIMS", {configurable:false, enumerable:true, writable:false, value:3386});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SUBPIXEL_BITS", {configurable:false, enumerable:true, writable:false, value:3408});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RED_BITS", {configurable:false, enumerable:true, writable:false, value:3410});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "GREEN_BITS", {configurable:false, enumerable:true, writable:false, value:3411});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLUE_BITS", {configurable:false, enumerable:true, writable:false, value:3412});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALPHA_BITS", {configurable:false, enumerable:true, writable:false, value:3413});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_BITS", {configurable:false, enumerable:true, writable:false, value:3414});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BITS", {configurable:false, enumerable:true, writable:false, value:3415});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_UNITS", {configurable:false, enumerable:true, writable:false, value:10752});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_FACTOR", {configurable:false, enumerable:true, writable:false, value:32824});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_BINDING_2D", {configurable:false, enumerable:true, writable:false, value:32873});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_BUFFERS", {configurable:false, enumerable:true, writable:false, value:32936});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLES", {configurable:false, enumerable:true, writable:false, value:32937});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE_VALUE", {configurable:false, enumerable:true, writable:false, value:32938});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE_INVERT", {configurable:false, enumerable:true, writable:false, value:32939});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COMPRESSED_TEXTURE_FORMATS", {configurable:false, enumerable:true, writable:false, value:34467});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DONT_CARE", {configurable:false, enumerable:true, writable:false, value:4352});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FASTEST", {configurable:false, enumerable:true, writable:false, value:4353});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NICEST", {configurable:false, enumerable:true, writable:false, value:4354});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "GENERATE_MIPMAP_HINT", {configurable:false, enumerable:true, writable:false, value:33170});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BYTE", {configurable:false, enumerable:true, writable:false, value:5120});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_BYTE", {configurable:false, enumerable:true, writable:false, value:5121});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SHORT", {configurable:false, enumerable:true, writable:false, value:5122});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT", {configurable:false, enumerable:true, writable:false, value:5123});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INT", {configurable:false, enumerable:true, writable:false, value:5124});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_INT", {configurable:false, enumerable:true, writable:false, value:5125});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT", {configurable:false, enumerable:true, writable:false, value:5126});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_COMPONENT", {configurable:false, enumerable:true, writable:false, value:6402});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALPHA", {configurable:false, enumerable:true, writable:false, value:6406});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGB", {configurable:false, enumerable:true, writable:false, value:6407});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGBA", {configurable:false, enumerable:true, writable:false, value:6408});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LUMINANCE", {configurable:false, enumerable:true, writable:false, value:6409});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LUMINANCE_ALPHA", {configurable:false, enumerable:true, writable:false, value:6410});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_4_4_4_4", {configurable:false, enumerable:true, writable:false, value:32819});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_5_5_5_1", {configurable:false, enumerable:true, writable:false, value:32820});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_5_6_5", {configurable:false, enumerable:true, writable:false, value:33635});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAGMENT_SHADER", {configurable:false, enumerable:true, writable:false, value:35632});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_SHADER", {configurable:false, enumerable:true, writable:false, value:35633});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_ATTRIBS", {configurable:false, enumerable:true, writable:false, value:34921});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_UNIFORM_VECTORS", {configurable:false, enumerable:true, writable:false, value:36347});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VARYING_VECTORS", {configurable:false, enumerable:true, writable:false, value:36348});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {configurable:false, enumerable:true, writable:false, value:35661});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {configurable:false, enumerable:true, writable:false, value:35660});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_TEXTURE_IMAGE_UNITS", {configurable:false, enumerable:true, writable:false, value:34930});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_FRAGMENT_UNIFORM_VECTORS", {configurable:false, enumerable:true, writable:false, value:36349});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SHADER_TYPE", {configurable:false, enumerable:true, writable:false, value:35663});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DELETE_STATUS", {configurable:false, enumerable:true, writable:false, value:35712});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINK_STATUS", {configurable:false, enumerable:true, writable:false, value:35714});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VALIDATE_STATUS", {configurable:false, enumerable:true, writable:false, value:35715});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ATTACHED_SHADERS", {configurable:false, enumerable:true, writable:false, value:35717});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_UNIFORMS", {configurable:false, enumerable:true, writable:false, value:35718});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_ATTRIBUTES", {configurable:false, enumerable:true, writable:false, value:35721});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SHADING_LANGUAGE_VERSION", {configurable:false, enumerable:true, writable:false, value:35724});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CURRENT_PROGRAM", {configurable:false, enumerable:true, writable:false, value:35725});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NEVER", {configurable:false, enumerable:true, writable:false, value:512});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LESS", {configurable:false, enumerable:true, writable:false, value:513});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "EQUAL", {configurable:false, enumerable:true, writable:false, value:514});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LEQUAL", {configurable:false, enumerable:true, writable:false, value:515});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "GREATER", {configurable:false, enumerable:true, writable:false, value:516});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NOTEQUAL", {configurable:false, enumerable:true, writable:false, value:517});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "GEQUAL", {configurable:false, enumerable:true, writable:false, value:518});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALWAYS", {configurable:false, enumerable:true, writable:false, value:519});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "KEEP", {configurable:false, enumerable:true, writable:false, value:7680});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "REPLACE", {configurable:false, enumerable:true, writable:false, value:7681});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INCR", {configurable:false, enumerable:true, writable:false, value:7682});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DECR", {configurable:false, enumerable:true, writable:false, value:7683});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVERT", {configurable:false, enumerable:true, writable:false, value:5386});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INCR_WRAP", {configurable:false, enumerable:true, writable:false, value:34055});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DECR_WRAP", {configurable:false, enumerable:true, writable:false, value:34056});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VENDOR", {configurable:false, enumerable:true, writable:false, value:7936});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERER", {configurable:false, enumerable:true, writable:false, value:7937});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERSION", {configurable:false, enumerable:true, writable:false, value:7938});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST", {configurable:false, enumerable:true, writable:false, value:9728});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR", {configurable:false, enumerable:true, writable:false, value:9729});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST_MIPMAP_NEAREST", {configurable:false, enumerable:true, writable:false, value:9984});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR_MIPMAP_NEAREST", {configurable:false, enumerable:true, writable:false, value:9985});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST_MIPMAP_LINEAR", {configurable:false, enumerable:true, writable:false, value:9986});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR_MIPMAP_LINEAR", {configurable:false, enumerable:true, writable:false, value:9987});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_MAG_FILTER", {configurable:false, enumerable:true, writable:false, value:10240});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_MIN_FILTER", {configurable:false, enumerable:true, writable:false, value:10241});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_WRAP_S", {configurable:false, enumerable:true, writable:false, value:10242});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_WRAP_T", {configurable:false, enumerable:true, writable:false, value:10243});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE", {configurable:false, enumerable:true, writable:false, value:5890});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP", {configurable:false, enumerable:true, writable:false, value:34067});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_BINDING_CUBE_MAP", {configurable:false, enumerable:true, writable:false, value:34068});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_X", {configurable:false, enumerable:true, writable:false, value:34069});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_X", {configurable:false, enumerable:true, writable:false, value:34070});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Y", {configurable:false, enumerable:true, writable:false, value:34071});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {configurable:false, enumerable:true, writable:false, value:34072});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Z", {configurable:false, enumerable:true, writable:false, value:34073});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {configurable:false, enumerable:true, writable:false, value:34074});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_CUBE_MAP_TEXTURE_SIZE", {configurable:false, enumerable:true, writable:false, value:34076});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE0", {configurable:false, enumerable:true, writable:false, value:33984});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE1", {configurable:false, enumerable:true, writable:false, value:33985});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE2", {configurable:false, enumerable:true, writable:false, value:33986});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE3", {configurable:false, enumerable:true, writable:false, value:33987});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE4", {configurable:false, enumerable:true, writable:false, value:33988});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE5", {configurable:false, enumerable:true, writable:false, value:33989});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE6", {configurable:false, enumerable:true, writable:false, value:33990});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE7", {configurable:false, enumerable:true, writable:false, value:33991});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE8", {configurable:false, enumerable:true, writable:false, value:33992});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE9", {configurable:false, enumerable:true, writable:false, value:33993});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE10", {configurable:false, enumerable:true, writable:false, value:33994});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE11", {configurable:false, enumerable:true, writable:false, value:33995});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE12", {configurable:false, enumerable:true, writable:false, value:33996});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE13", {configurable:false, enumerable:true, writable:false, value:33997});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE14", {configurable:false, enumerable:true, writable:false, value:33998});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE15", {configurable:false, enumerable:true, writable:false, value:33999});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE16", {configurable:false, enumerable:true, writable:false, value:34000});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE17", {configurable:false, enumerable:true, writable:false, value:34001});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE18", {configurable:false, enumerable:true, writable:false, value:34002});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE19", {configurable:false, enumerable:true, writable:false, value:34003});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE20", {configurable:false, enumerable:true, writable:false, value:34004});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE21", {configurable:false, enumerable:true, writable:false, value:34005});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE22", {configurable:false, enumerable:true, writable:false, value:34006});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE23", {configurable:false, enumerable:true, writable:false, value:34007});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE24", {configurable:false, enumerable:true, writable:false, value:34008});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE25", {configurable:false, enumerable:true, writable:false, value:34009});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE26", {configurable:false, enumerable:true, writable:false, value:34010});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE27", {configurable:false, enumerable:true, writable:false, value:34011});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE28", {configurable:false, enumerable:true, writable:false, value:34012});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE29", {configurable:false, enumerable:true, writable:false, value:34013});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE30", {configurable:false, enumerable:true, writable:false, value:34014});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE31", {configurable:false, enumerable:true, writable:false, value:34015});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_TEXTURE", {configurable:false, enumerable:true, writable:false, value:34016});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "REPEAT", {configurable:false, enumerable:true, writable:false, value:10497});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CLAMP_TO_EDGE", {configurable:false, enumerable:true, writable:false, value:33071});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MIRRORED_REPEAT", {configurable:false, enumerable:true, writable:false, value:33648});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC2", {configurable:false, enumerable:true, writable:false, value:35664});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC3", {configurable:false, enumerable:true, writable:false, value:35665});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC4", {configurable:false, enumerable:true, writable:false, value:35666});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC2", {configurable:false, enumerable:true, writable:false, value:35667});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC3", {configurable:false, enumerable:true, writable:false, value:35668});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC4", {configurable:false, enumerable:true, writable:false, value:35669});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL", {configurable:false, enumerable:true, writable:false, value:35670});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC2", {configurable:false, enumerable:true, writable:false, value:35671});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC3", {configurable:false, enumerable:true, writable:false, value:35672});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC4", {configurable:false, enumerable:true, writable:false, value:35673});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT2", {configurable:false, enumerable:true, writable:false, value:35674});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT3", {configurable:false, enumerable:true, writable:false, value:35675});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT4", {configurable:false, enumerable:true, writable:false, value:35676});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLER_2D", {configurable:false, enumerable:true, writable:false, value:35678});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLER_CUBE", {configurable:false, enumerable:true, writable:false, value:35680});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_ENABLED", {configurable:false, enumerable:true, writable:false, value:34338});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_SIZE", {configurable:false, enumerable:true, writable:false, value:34339});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_STRIDE", {configurable:false, enumerable:true, writable:false, value:34340});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_TYPE", {configurable:false, enumerable:true, writable:false, value:34341});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {configurable:false, enumerable:true, writable:false, value:34922});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_POINTER", {configurable:false, enumerable:true, writable:false, value:34373});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:34975});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "IMPLEMENTATION_COLOR_READ_TYPE", {configurable:false, enumerable:true, writable:false, value:35738});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "IMPLEMENTATION_COLOR_READ_FORMAT", {configurable:false, enumerable:true, writable:false, value:35739});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COMPILE_STATUS", {configurable:false, enumerable:true, writable:false, value:35713});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LOW_FLOAT", {configurable:false, enumerable:true, writable:false, value:36336});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MEDIUM_FLOAT", {configurable:false, enumerable:true, writable:false, value:36337});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "HIGH_FLOAT", {configurable:false, enumerable:true, writable:false, value:36338});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LOW_INT", {configurable:false, enumerable:true, writable:false, value:36339});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MEDIUM_INT", {configurable:false, enumerable:true, writable:false, value:36340});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "HIGH_INT", {configurable:false, enumerable:true, writable:false, value:36341});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER", {configurable:false, enumerable:true, writable:false, value:36160});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER", {configurable:false, enumerable:true, writable:false, value:36161});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGBA4", {configurable:false, enumerable:true, writable:false, value:32854});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGB5_A1", {configurable:false, enumerable:true, writable:false, value:32855});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGB565", {configurable:false, enumerable:true, writable:false, value:36194});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_COMPONENT16", {configurable:false, enumerable:true, writable:false, value:33189});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_INDEX8", {configurable:false, enumerable:true, writable:false, value:36168});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_STENCIL", {configurable:false, enumerable:true, writable:false, value:34041});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_WIDTH", {configurable:false, enumerable:true, writable:false, value:36162});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_HEIGHT", {configurable:false, enumerable:true, writable:false, value:36163});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_INTERNAL_FORMAT", {configurable:false, enumerable:true, writable:false, value:36164});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_RED_SIZE", {configurable:false, enumerable:true, writable:false, value:36176});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_GREEN_SIZE", {configurable:false, enumerable:true, writable:false, value:36177});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_BLUE_SIZE", {configurable:false, enumerable:true, writable:false, value:36178});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_ALPHA_SIZE", {configurable:false, enumerable:true, writable:false, value:36179});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_DEPTH_SIZE", {configurable:false, enumerable:true, writable:false, value:36180});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_STENCIL_SIZE", {configurable:false, enumerable:true, writable:false, value:36181});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {configurable:false, enumerable:true, writable:false, value:36048});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {configurable:false, enumerable:true, writable:false, value:36049});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {configurable:false, enumerable:true, writable:false, value:36050});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {configurable:false, enumerable:true, writable:false, value:36051});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_ATTACHMENT0", {configurable:false, enumerable:true, writable:false, value:36064});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:36096});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:36128});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_STENCIL_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:33306});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NONE", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_COMPLETE", {configurable:false, enumerable:true, writable:false, value:36053});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:36054});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:36055});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {configurable:false, enumerable:true, writable:false, value:36057});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_UNSUPPORTED", {configurable:false, enumerable:true, writable:false, value:36061});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:36006});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:36007});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_RENDERBUFFER_SIZE", {configurable:false, enumerable:true, writable:false, value:34024});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_FRAMEBUFFER_OPERATION", {configurable:false, enumerable:true, writable:false, value:1286});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_FLIP_Y_WEBGL", {configurable:false, enumerable:true, writable:false, value:37440});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {configurable:false, enumerable:true, writable:false, value:37441});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CONTEXT_LOST_WEBGL", {configurable:false, enumerable:true, writable:false, value:37442});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {configurable:false, enumerable:true, writable:false, value:37443});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BROWSER_DEFAULT_WEBGL", {configurable:false, enumerable:true, writable:false, value:37444});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "canvas", {configurable:true, enumerable:true, get:function canvas (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "canvas_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferWidth", {configurable:true, enumerable:true, get:function drawingBufferWidth (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawingBufferWidth_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferHeight", {configurable:true, enumerable:true, get:function drawingBufferHeight (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawingBufferHeight_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_BUFFER_BIT", {configurable:false, enumerable:true, writable:false, value:256});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BUFFER_BIT", {configurable:false, enumerable:true, writable:false, value:1024});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_BUFFER_BIT", {configurable:false, enumerable:true, writable:false, value:16384});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POINTS", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINES", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_LOOP", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_STRIP", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLES", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLE_STRIP", {configurable:false, enumerable:true, writable:false, value:5});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLE_FAN", {configurable:false, enumerable:true, writable:false, value:6});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ZERO", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_COLOR", {configurable:false, enumerable:true, writable:false, value:768});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_SRC_COLOR", {configurable:false, enumerable:true, writable:false, value:769});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_ALPHA", {configurable:false, enumerable:true, writable:false, value:770});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_SRC_ALPHA", {configurable:false, enumerable:true, writable:false, value:771});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DST_ALPHA", {configurable:false, enumerable:true, writable:false, value:772});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_DST_ALPHA", {configurable:false, enumerable:true, writable:false, value:773});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DST_COLOR", {configurable:false, enumerable:true, writable:false, value:774});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_DST_COLOR", {configurable:false, enumerable:true, writable:false, value:775});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_ALPHA_SATURATE", {configurable:false, enumerable:true, writable:false, value:776});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_ADD", {configurable:false, enumerable:true, writable:false, value:32774});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION", {configurable:false, enumerable:true, writable:false, value:32777});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION_RGB", {configurable:false, enumerable:true, writable:false, value:32777});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION_ALPHA", {configurable:false, enumerable:true, writable:false, value:34877});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_SUBTRACT", {configurable:false, enumerable:true, writable:false, value:32778});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_REVERSE_SUBTRACT", {configurable:false, enumerable:true, writable:false, value:32779});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_DST_RGB", {configurable:false, enumerable:true, writable:false, value:32968});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_SRC_RGB", {configurable:false, enumerable:true, writable:false, value:32969});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_DST_ALPHA", {configurable:false, enumerable:true, writable:false, value:32970});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_SRC_ALPHA", {configurable:false, enumerable:true, writable:false, value:32971});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONSTANT_COLOR", {configurable:false, enumerable:true, writable:false, value:32769});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_CONSTANT_COLOR", {configurable:false, enumerable:true, writable:false, value:32770});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONSTANT_ALPHA", {configurable:false, enumerable:true, writable:false, value:32771});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_CONSTANT_ALPHA", {configurable:false, enumerable:true, writable:false, value:32772});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_COLOR", {configurable:false, enumerable:true, writable:false, value:32773});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ARRAY_BUFFER", {configurable:false, enumerable:true, writable:false, value:34962});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ELEMENT_ARRAY_BUFFER", {configurable:false, enumerable:true, writable:false, value:34963});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ARRAY_BUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:34964});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ELEMENT_ARRAY_BUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:34965});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STREAM_DRAW", {configurable:false, enumerable:true, writable:false, value:35040});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STATIC_DRAW", {configurable:false, enumerable:true, writable:false, value:35044});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DYNAMIC_DRAW", {configurable:false, enumerable:true, writable:false, value:35048});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BUFFER_SIZE", {configurable:false, enumerable:true, writable:false, value:34660});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BUFFER_USAGE", {configurable:false, enumerable:true, writable:false, value:34661});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CURRENT_VERTEX_ATTRIB", {configurable:false, enumerable:true, writable:false, value:34342});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT", {configurable:false, enumerable:true, writable:false, value:1028});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BACK", {configurable:false, enumerable:true, writable:false, value:1029});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT_AND_BACK", {configurable:false, enumerable:true, writable:false, value:1032});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_2D", {configurable:false, enumerable:true, writable:false, value:3553});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CULL_FACE", {configurable:false, enumerable:true, writable:false, value:2884});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND", {configurable:false, enumerable:true, writable:false, value:3042});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DITHER", {configurable:false, enumerable:true, writable:false, value:3024});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_TEST", {configurable:false, enumerable:true, writable:false, value:2960});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_TEST", {configurable:false, enumerable:true, writable:false, value:2929});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SCISSOR_TEST", {configurable:false, enumerable:true, writable:false, value:3089});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_FILL", {configurable:false, enumerable:true, writable:false, value:32823});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_ALPHA_TO_COVERAGE", {configurable:false, enumerable:true, writable:false, value:32926});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE", {configurable:false, enumerable:true, writable:false, value:32928});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NO_ERROR", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_ENUM", {configurable:false, enumerable:true, writable:false, value:1280});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_VALUE", {configurable:false, enumerable:true, writable:false, value:1281});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_OPERATION", {configurable:false, enumerable:true, writable:false, value:1282});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "OUT_OF_MEMORY", {configurable:false, enumerable:true, writable:false, value:1285});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CW", {configurable:false, enumerable:true, writable:false, value:2304});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CCW", {configurable:false, enumerable:true, writable:false, value:2305});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_WIDTH", {configurable:false, enumerable:true, writable:false, value:2849});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALIASED_POINT_SIZE_RANGE", {configurable:false, enumerable:true, writable:false, value:33901});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALIASED_LINE_WIDTH_RANGE", {configurable:false, enumerable:true, writable:false, value:33902});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CULL_FACE_MODE", {configurable:false, enumerable:true, writable:false, value:2885});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT_FACE", {configurable:false, enumerable:true, writable:false, value:2886});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_RANGE", {configurable:false, enumerable:true, writable:false, value:2928});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_WRITEMASK", {configurable:false, enumerable:true, writable:false, value:2930});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_CLEAR_VALUE", {configurable:false, enumerable:true, writable:false, value:2931});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_FUNC", {configurable:false, enumerable:true, writable:false, value:2932});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_CLEAR_VALUE", {configurable:false, enumerable:true, writable:false, value:2961});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_FUNC", {configurable:false, enumerable:true, writable:false, value:2962});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_FAIL", {configurable:false, enumerable:true, writable:false, value:2964});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_PASS_DEPTH_FAIL", {configurable:false, enumerable:true, writable:false, value:2965});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_PASS_DEPTH_PASS", {configurable:false, enumerable:true, writable:false, value:2966});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_REF", {configurable:false, enumerable:true, writable:false, value:2967});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_VALUE_MASK", {configurable:false, enumerable:true, writable:false, value:2963});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_WRITEMASK", {configurable:false, enumerable:true, writable:false, value:2968});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_FUNC", {configurable:false, enumerable:true, writable:false, value:34816});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_FAIL", {configurable:false, enumerable:true, writable:false, value:34817});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_FAIL", {configurable:false, enumerable:true, writable:false, value:34818});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_PASS", {configurable:false, enumerable:true, writable:false, value:34819});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_REF", {configurable:false, enumerable:true, writable:false, value:36003});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_VALUE_MASK", {configurable:false, enumerable:true, writable:false, value:36004});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_WRITEMASK", {configurable:false, enumerable:true, writable:false, value:36005});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VIEWPORT", {configurable:false, enumerable:true, writable:false, value:2978});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SCISSOR_BOX", {configurable:false, enumerable:true, writable:false, value:3088});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_CLEAR_VALUE", {configurable:false, enumerable:true, writable:false, value:3106});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_WRITEMASK", {configurable:false, enumerable:true, writable:false, value:3107});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_ALIGNMENT", {configurable:false, enumerable:true, writable:false, value:3317});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "PACK_ALIGNMENT", {configurable:false, enumerable:true, writable:false, value:3333});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_TEXTURE_SIZE", {configurable:false, enumerable:true, writable:false, value:3379});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VIEWPORT_DIMS", {configurable:false, enumerable:true, writable:false, value:3386});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SUBPIXEL_BITS", {configurable:false, enumerable:true, writable:false, value:3408});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RED_BITS", {configurable:false, enumerable:true, writable:false, value:3410});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GREEN_BITS", {configurable:false, enumerable:true, writable:false, value:3411});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLUE_BITS", {configurable:false, enumerable:true, writable:false, value:3412});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALPHA_BITS", {configurable:false, enumerable:true, writable:false, value:3413});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_BITS", {configurable:false, enumerable:true, writable:false, value:3414});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BITS", {configurable:false, enumerable:true, writable:false, value:3415});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_UNITS", {configurable:false, enumerable:true, writable:false, value:10752});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_FACTOR", {configurable:false, enumerable:true, writable:false, value:32824});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_BINDING_2D", {configurable:false, enumerable:true, writable:false, value:32873});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_BUFFERS", {configurable:false, enumerable:true, writable:false, value:32936});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLES", {configurable:false, enumerable:true, writable:false, value:32937});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE_VALUE", {configurable:false, enumerable:true, writable:false, value:32938});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE_INVERT", {configurable:false, enumerable:true, writable:false, value:32939});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COMPRESSED_TEXTURE_FORMATS", {configurable:false, enumerable:true, writable:false, value:34467});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DONT_CARE", {configurable:false, enumerable:true, writable:false, value:4352});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FASTEST", {configurable:false, enumerable:true, writable:false, value:4353});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NICEST", {configurable:false, enumerable:true, writable:false, value:4354});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GENERATE_MIPMAP_HINT", {configurable:false, enumerable:true, writable:false, value:33170});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BYTE", {configurable:false, enumerable:true, writable:false, value:5120});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_BYTE", {configurable:false, enumerable:true, writable:false, value:5121});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHORT", {configurable:false, enumerable:true, writable:false, value:5122});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT", {configurable:false, enumerable:true, writable:false, value:5123});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT", {configurable:false, enumerable:true, writable:false, value:5124});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_INT", {configurable:false, enumerable:true, writable:false, value:5125});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT", {configurable:false, enumerable:true, writable:false, value:5126});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_COMPONENT", {configurable:false, enumerable:true, writable:false, value:6402});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALPHA", {configurable:false, enumerable:true, writable:false, value:6406});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB", {configurable:false, enumerable:true, writable:false, value:6407});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGBA", {configurable:false, enumerable:true, writable:false, value:6408});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LUMINANCE", {configurable:false, enumerable:true, writable:false, value:6409});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LUMINANCE_ALPHA", {configurable:false, enumerable:true, writable:false, value:6410});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_4_4_4_4", {configurable:false, enumerable:true, writable:false, value:32819});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_5_5_5_1", {configurable:false, enumerable:true, writable:false, value:32820});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_5_6_5", {configurable:false, enumerable:true, writable:false, value:33635});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAGMENT_SHADER", {configurable:false, enumerable:true, writable:false, value:35632});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_SHADER", {configurable:false, enumerable:true, writable:false, value:35633});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_ATTRIBS", {configurable:false, enumerable:true, writable:false, value:34921});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_UNIFORM_VECTORS", {configurable:false, enumerable:true, writable:false, value:36347});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VARYING_VECTORS", {configurable:false, enumerable:true, writable:false, value:36348});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {configurable:false, enumerable:true, writable:false, value:35661});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {configurable:false, enumerable:true, writable:false, value:35660});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_TEXTURE_IMAGE_UNITS", {configurable:false, enumerable:true, writable:false, value:34930});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_FRAGMENT_UNIFORM_VECTORS", {configurable:false, enumerable:true, writable:false, value:36349});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHADER_TYPE", {configurable:false, enumerable:true, writable:false, value:35663});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DELETE_STATUS", {configurable:false, enumerable:true, writable:false, value:35712});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINK_STATUS", {configurable:false, enumerable:true, writable:false, value:35714});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VALIDATE_STATUS", {configurable:false, enumerable:true, writable:false, value:35715});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ATTACHED_SHADERS", {configurable:false, enumerable:true, writable:false, value:35717});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_UNIFORMS", {configurable:false, enumerable:true, writable:false, value:35718});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_ATTRIBUTES", {configurable:false, enumerable:true, writable:false, value:35721});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHADING_LANGUAGE_VERSION", {configurable:false, enumerable:true, writable:false, value:35724});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CURRENT_PROGRAM", {configurable:false, enumerable:true, writable:false, value:35725});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEVER", {configurable:false, enumerable:true, writable:false, value:512});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LESS", {configurable:false, enumerable:true, writable:false, value:513});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "EQUAL", {configurable:false, enumerable:true, writable:false, value:514});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LEQUAL", {configurable:false, enumerable:true, writable:false, value:515});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GREATER", {configurable:false, enumerable:true, writable:false, value:516});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NOTEQUAL", {configurable:false, enumerable:true, writable:false, value:517});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GEQUAL", {configurable:false, enumerable:true, writable:false, value:518});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALWAYS", {configurable:false, enumerable:true, writable:false, value:519});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "KEEP", {configurable:false, enumerable:true, writable:false, value:7680});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "REPLACE", {configurable:false, enumerable:true, writable:false, value:7681});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INCR", {configurable:false, enumerable:true, writable:false, value:7682});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DECR", {configurable:false, enumerable:true, writable:false, value:7683});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVERT", {configurable:false, enumerable:true, writable:false, value:5386});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INCR_WRAP", {configurable:false, enumerable:true, writable:false, value:34055});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DECR_WRAP", {configurable:false, enumerable:true, writable:false, value:34056});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VENDOR", {configurable:false, enumerable:true, writable:false, value:7936});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERER", {configurable:false, enumerable:true, writable:false, value:7937});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERSION", {configurable:false, enumerable:true, writable:false, value:7938});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST", {configurable:false, enumerable:true, writable:false, value:9728});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR", {configurable:false, enumerable:true, writable:false, value:9729});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST_MIPMAP_NEAREST", {configurable:false, enumerable:true, writable:false, value:9984});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR_MIPMAP_NEAREST", {configurable:false, enumerable:true, writable:false, value:9985});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST_MIPMAP_LINEAR", {configurable:false, enumerable:true, writable:false, value:9986});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR_MIPMAP_LINEAR", {configurable:false, enumerable:true, writable:false, value:9987});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_MAG_FILTER", {configurable:false, enumerable:true, writable:false, value:10240});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_MIN_FILTER", {configurable:false, enumerable:true, writable:false, value:10241});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_WRAP_S", {configurable:false, enumerable:true, writable:false, value:10242});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_WRAP_T", {configurable:false, enumerable:true, writable:false, value:10243});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE", {configurable:false, enumerable:true, writable:false, value:5890});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP", {configurable:false, enumerable:true, writable:false, value:34067});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_BINDING_CUBE_MAP", {configurable:false, enumerable:true, writable:false, value:34068});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_X", {configurable:false, enumerable:true, writable:false, value:34069});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_X", {configurable:false, enumerable:true, writable:false, value:34070});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Y", {configurable:false, enumerable:true, writable:false, value:34071});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {configurable:false, enumerable:true, writable:false, value:34072});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Z", {configurable:false, enumerable:true, writable:false, value:34073});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {configurable:false, enumerable:true, writable:false, value:34074});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_CUBE_MAP_TEXTURE_SIZE", {configurable:false, enumerable:true, writable:false, value:34076});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE0", {configurable:false, enumerable:true, writable:false, value:33984});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE1", {configurable:false, enumerable:true, writable:false, value:33985});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE2", {configurable:false, enumerable:true, writable:false, value:33986});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE3", {configurable:false, enumerable:true, writable:false, value:33987});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE4", {configurable:false, enumerable:true, writable:false, value:33988});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE5", {configurable:false, enumerable:true, writable:false, value:33989});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE6", {configurable:false, enumerable:true, writable:false, value:33990});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE7", {configurable:false, enumerable:true, writable:false, value:33991});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE8", {configurable:false, enumerable:true, writable:false, value:33992});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE9", {configurable:false, enumerable:true, writable:false, value:33993});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE10", {configurable:false, enumerable:true, writable:false, value:33994});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE11", {configurable:false, enumerable:true, writable:false, value:33995});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE12", {configurable:false, enumerable:true, writable:false, value:33996});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE13", {configurable:false, enumerable:true, writable:false, value:33997});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE14", {configurable:false, enumerable:true, writable:false, value:33998});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE15", {configurable:false, enumerable:true, writable:false, value:33999});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE16", {configurable:false, enumerable:true, writable:false, value:34000});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE17", {configurable:false, enumerable:true, writable:false, value:34001});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE18", {configurable:false, enumerable:true, writable:false, value:34002});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE19", {configurable:false, enumerable:true, writable:false, value:34003});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE20", {configurable:false, enumerable:true, writable:false, value:34004});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE21", {configurable:false, enumerable:true, writable:false, value:34005});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE22", {configurable:false, enumerable:true, writable:false, value:34006});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE23", {configurable:false, enumerable:true, writable:false, value:34007});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE24", {configurable:false, enumerable:true, writable:false, value:34008});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE25", {configurable:false, enumerable:true, writable:false, value:34009});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE26", {configurable:false, enumerable:true, writable:false, value:34010});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE27", {configurable:false, enumerable:true, writable:false, value:34011});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE28", {configurable:false, enumerable:true, writable:false, value:34012});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE29", {configurable:false, enumerable:true, writable:false, value:34013});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE30", {configurable:false, enumerable:true, writable:false, value:34014});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE31", {configurable:false, enumerable:true, writable:false, value:34015});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_TEXTURE", {configurable:false, enumerable:true, writable:false, value:34016});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "REPEAT", {configurable:false, enumerable:true, writable:false, value:10497});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CLAMP_TO_EDGE", {configurable:false, enumerable:true, writable:false, value:33071});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MIRRORED_REPEAT", {configurable:false, enumerable:true, writable:false, value:33648});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC2", {configurable:false, enumerable:true, writable:false, value:35664});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC3", {configurable:false, enumerable:true, writable:false, value:35665});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC4", {configurable:false, enumerable:true, writable:false, value:35666});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC2", {configurable:false, enumerable:true, writable:false, value:35667});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC3", {configurable:false, enumerable:true, writable:false, value:35668});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC4", {configurable:false, enumerable:true, writable:false, value:35669});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL", {configurable:false, enumerable:true, writable:false, value:35670});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC2", {configurable:false, enumerable:true, writable:false, value:35671});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC3", {configurable:false, enumerable:true, writable:false, value:35672});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC4", {configurable:false, enumerable:true, writable:false, value:35673});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT2", {configurable:false, enumerable:true, writable:false, value:35674});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT3", {configurable:false, enumerable:true, writable:false, value:35675});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT4", {configurable:false, enumerable:true, writable:false, value:35676});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLER_2D", {configurable:false, enumerable:true, writable:false, value:35678});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLER_CUBE", {configurable:false, enumerable:true, writable:false, value:35680});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_ENABLED", {configurable:false, enumerable:true, writable:false, value:34338});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_SIZE", {configurable:false, enumerable:true, writable:false, value:34339});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_STRIDE", {configurable:false, enumerable:true, writable:false, value:34340});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_TYPE", {configurable:false, enumerable:true, writable:false, value:34341});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {configurable:false, enumerable:true, writable:false, value:34922});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_POINTER", {configurable:false, enumerable:true, writable:false, value:34373});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:34975});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_TYPE", {configurable:false, enumerable:true, writable:false, value:35738});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_FORMAT", {configurable:false, enumerable:true, writable:false, value:35739});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COMPILE_STATUS", {configurable:false, enumerable:true, writable:false, value:35713});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LOW_FLOAT", {configurable:false, enumerable:true, writable:false, value:36336});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MEDIUM_FLOAT", {configurable:false, enumerable:true, writable:false, value:36337});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "HIGH_FLOAT", {configurable:false, enumerable:true, writable:false, value:36338});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LOW_INT", {configurable:false, enumerable:true, writable:false, value:36339});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MEDIUM_INT", {configurable:false, enumerable:true, writable:false, value:36340});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "HIGH_INT", {configurable:false, enumerable:true, writable:false, value:36341});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER", {configurable:false, enumerable:true, writable:false, value:36160});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER", {configurable:false, enumerable:true, writable:false, value:36161});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGBA4", {configurable:false, enumerable:true, writable:false, value:32854});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB5_A1", {configurable:false, enumerable:true, writable:false, value:32855});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB565", {configurable:false, enumerable:true, writable:false, value:36194});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_COMPONENT16", {configurable:false, enumerable:true, writable:false, value:33189});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_INDEX8", {configurable:false, enumerable:true, writable:false, value:36168});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_STENCIL", {configurable:false, enumerable:true, writable:false, value:34041});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_WIDTH", {configurable:false, enumerable:true, writable:false, value:36162});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_HEIGHT", {configurable:false, enumerable:true, writable:false, value:36163});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_INTERNAL_FORMAT", {configurable:false, enumerable:true, writable:false, value:36164});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_RED_SIZE", {configurable:false, enumerable:true, writable:false, value:36176});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_GREEN_SIZE", {configurable:false, enumerable:true, writable:false, value:36177});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_BLUE_SIZE", {configurable:false, enumerable:true, writable:false, value:36178});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_ALPHA_SIZE", {configurable:false, enumerable:true, writable:false, value:36179});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_DEPTH_SIZE", {configurable:false, enumerable:true, writable:false, value:36180});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_STENCIL_SIZE", {configurable:false, enumerable:true, writable:false, value:36181});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {configurable:false, enumerable:true, writable:false, value:36048});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {configurable:false, enumerable:true, writable:false, value:36049});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {configurable:false, enumerable:true, writable:false, value:36050});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {configurable:false, enumerable:true, writable:false, value:36051});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_ATTACHMENT0", {configurable:false, enumerable:true, writable:false, value:36064});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:36096});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:36128});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_STENCIL_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:33306});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NONE", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_COMPLETE", {configurable:false, enumerable:true, writable:false, value:36053});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:36054});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {configurable:false, enumerable:true, writable:false, value:36055});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {configurable:false, enumerable:true, writable:false, value:36057});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_UNSUPPORTED", {configurable:false, enumerable:true, writable:false, value:36061});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:36006});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_BINDING", {configurable:false, enumerable:true, writable:false, value:36007});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_RENDERBUFFER_SIZE", {configurable:false, enumerable:true, writable:false, value:34024});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_FRAMEBUFFER_OPERATION", {configurable:false, enumerable:true, writable:false, value:1286});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_FLIP_Y_WEBGL", {configurable:false, enumerable:true, writable:false, value:37440});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {configurable:false, enumerable:true, writable:false, value:37441});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONTEXT_LOST_WEBGL", {configurable:false, enumerable:true, writable:false, value:37442});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {configurable:false, enumerable:true, writable:false, value:37443});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BROWSER_DEFAULT_WEBGL", {configurable:false, enumerable:true, writable:false, value:37444});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "activeTexture", {configurable:true, enumerable:true, writable:true, value:function activeTexture (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "activeTexture", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "attachShader", {configurable:true, enumerable:true, writable:true, value:function attachShader (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "attachShader", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindAttribLocation", {configurable:true, enumerable:true, writable:true, value:function bindAttribLocation (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindAttribLocation", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindRenderbuffer", {configurable:true, enumerable:true, writable:true, value:function bindRenderbuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindRenderbuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendColor", {configurable:true, enumerable:true, writable:true, value:function blendColor (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendColor", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendEquation", {configurable:true, enumerable:true, writable:true, value:function blendEquation (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendEquation", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendEquationSeparate", {configurable:true, enumerable:true, writable:true, value:function blendEquationSeparate (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendEquationSeparate", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendFunc", {configurable:true, enumerable:true, writable:true, value:function blendFunc (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendFunc", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendFuncSeparate", {configurable:true, enumerable:true, writable:true, value:function blendFuncSeparate (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendFuncSeparate", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bufferData", {configurable:true, enumerable:true, writable:true, value:function bufferData (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bufferData", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bufferSubData", {configurable:true, enumerable:true, writable:true, value:function bufferSubData (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bufferSubData", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "checkFramebufferStatus", {configurable:true, enumerable:true, writable:true, value:function checkFramebufferStatus (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "checkFramebufferStatus", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compileShader", {configurable:true, enumerable:true, writable:true, value:function compileShader (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "compileShader", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compressedTexImage2D", {configurable:true, enumerable:true, writable:true, value:function compressedTexImage2D (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "compressedTexImage2D", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compressedTexSubImage2D", {configurable:true, enumerable:true, writable:true, value:function compressedTexSubImage2D (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "compressedTexSubImage2D", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "copyTexImage2D", {configurable:true, enumerable:true, writable:true, value:function copyTexImage2D (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "copyTexImage2D", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "copyTexSubImage2D", {configurable:true, enumerable:true, writable:true, value:function copyTexSubImage2D (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "copyTexSubImage2D", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createBuffer", {configurable:true, enumerable:true, writable:true, value:function createBuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createBuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createFramebuffer", {configurable:true, enumerable:true, writable:true, value:function createFramebuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createFramebuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createProgram", {configurable:true, enumerable:true, writable:true, value:function createProgram (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createProgram", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createRenderbuffer", {configurable:true, enumerable:true, writable:true, value:function createRenderbuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createRenderbuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createShader", {configurable:true, enumerable:true, writable:true, value:function createShader (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createShader", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createTexture", {configurable:true, enumerable:true, writable:true, value:function createTexture (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createTexture", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "cullFace", {configurable:true, enumerable:true, writable:true, value:function cullFace (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "cullFace", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteBuffer", {configurable:true, enumerable:true, writable:true, value:function deleteBuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteBuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteFramebuffer", {configurable:true, enumerable:true, writable:true, value:function deleteFramebuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteFramebuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteProgram", {configurable:true, enumerable:true, writable:true, value:function deleteProgram (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteProgram", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteRenderbuffer", {configurable:true, enumerable:true, writable:true, value:function deleteRenderbuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteRenderbuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteShader", {configurable:true, enumerable:true, writable:true, value:function deleteShader (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteShader", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteTexture", {configurable:true, enumerable:true, writable:true, value:function deleteTexture (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteTexture", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthFunc", {configurable:true, enumerable:true, writable:true, value:function depthFunc (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "depthFunc", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthMask", {configurable:true, enumerable:true, writable:true, value:function depthMask (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "depthMask", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthRange", {configurable:true, enumerable:true, writable:true, value:function depthRange (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "depthRange", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "detachShader", {configurable:true, enumerable:true, writable:true, value:function detachShader (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "detachShader", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "disable", {configurable:true, enumerable:true, writable:true, value:function disable (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "disable", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "enable", {configurable:true, enumerable:true, writable:true, value:function enable (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "enable", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "finish", {configurable:true, enumerable:true, writable:true, value:function finish (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "finish", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "flush", {configurable:true, enumerable:true, writable:true, value:function flush (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "flush", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "framebufferRenderbuffer", {configurable:true, enumerable:true, writable:true, value:function framebufferRenderbuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "framebufferRenderbuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "framebufferTexture2D", {configurable:true, enumerable:true, writable:true, value:function framebufferTexture2D (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "framebufferTexture2D", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "frontFace", {configurable:true, enumerable:true, writable:true, value:function frontFace (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "frontFace", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "generateMipmap", {configurable:true, enumerable:true, writable:true, value:function generateMipmap (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "generateMipmap", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getActiveAttrib", {configurable:true, enumerable:true, writable:true, value:function getActiveAttrib (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getActiveAttrib", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getActiveUniform", {configurable:true, enumerable:true, writable:true, value:function getActiveUniform (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getActiveUniform", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getAttachedShaders", {configurable:true, enumerable:true, writable:true, value:function getAttachedShaders (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getAttachedShaders", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getAttribLocation", {configurable:true, enumerable:true, writable:true, value:function getAttribLocation (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getAttribLocation", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getBufferParameter", {configurable:true, enumerable:true, writable:true, value:function getBufferParameter (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getBufferParameter", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getContextAttributes", {configurable:true, enumerable:true, writable:true, value:function getContextAttributes (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getContextAttributes", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getError", {configurable:true, enumerable:true, writable:true, value:function getError (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getError", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getExtension", {configurable:true, enumerable:true, writable:true, value:function getExtension (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getExtension", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getFramebufferAttachmentParameter", {configurable:true, enumerable:true, writable:true, value:function getFramebufferAttachmentParameter (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getFramebufferAttachmentParameter", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getParameter", {configurable:true, enumerable:true, writable:true, value:function getParameter (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getParameter", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getProgramInfoLog", {configurable:true, enumerable:true, writable:true, value:function getProgramInfoLog (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getProgramInfoLog", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getProgramParameter", {configurable:true, enumerable:true, writable:true, value:function getProgramParameter (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getProgramParameter", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getRenderbufferParameter", {configurable:true, enumerable:true, writable:true, value:function getRenderbufferParameter (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getRenderbufferParameter", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderInfoLog", {configurable:true, enumerable:true, writable:true, value:function getShaderInfoLog (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getShaderInfoLog", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderParameter", {configurable:true, enumerable:true, writable:true, value:function getShaderParameter (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getShaderParameter", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderPrecisionFormat", {configurable:true, enumerable:true, writable:true, value:function getShaderPrecisionFormat (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getShaderPrecisionFormat", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderSource", {configurable:true, enumerable:true, writable:true, value:function getShaderSource (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getShaderSource", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getSupportedExtensions", {configurable:true, enumerable:true, writable:true, value:function getSupportedExtensions (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getSupportedExtensions", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getTexParameter", {configurable:true, enumerable:true, writable:true, value:function getTexParameter (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getTexParameter", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getUniform", {configurable:true, enumerable:true, writable:true, value:function getUniform (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getUniform", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getUniformLocation", {configurable:true, enumerable:true, writable:true, value:function getUniformLocation (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getUniformLocation", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getVertexAttrib", {configurable:true, enumerable:true, writable:true, value:function getVertexAttrib (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getVertexAttrib", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getVertexAttribOffset", {configurable:true, enumerable:true, writable:true, value:function getVertexAttribOffset (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getVertexAttribOffset", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "hint", {configurable:true, enumerable:true, writable:true, value:function hint (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "hint", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isBuffer", {configurable:true, enumerable:true, writable:true, value:function isBuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isBuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isContextLost", {configurable:true, enumerable:true, writable:true, value:function isContextLost (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isContextLost", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isEnabled", {configurable:true, enumerable:true, writable:true, value:function isEnabled (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isEnabled", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isFramebuffer", {configurable:true, enumerable:true, writable:true, value:function isFramebuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isFramebuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isProgram", {configurable:true, enumerable:true, writable:true, value:function isProgram (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isProgram", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isRenderbuffer", {configurable:true, enumerable:true, writable:true, value:function isRenderbuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isRenderbuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isShader", {configurable:true, enumerable:true, writable:true, value:function isShader (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isShader", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isTexture", {configurable:true, enumerable:true, writable:true, value:function isTexture (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isTexture", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "lineWidth", {configurable:true, enumerable:true, writable:true, value:function lineWidth (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "lineWidth", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "linkProgram", {configurable:true, enumerable:true, writable:true, value:function linkProgram (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "linkProgram", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "pixelStorei", {configurable:true, enumerable:true, writable:true, value:function pixelStorei (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "pixelStorei", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "polygonOffset", {configurable:true, enumerable:true, writable:true, value:function polygonOffset (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "polygonOffset", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "readPixels", {configurable:true, enumerable:true, writable:true, value:function readPixels (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "readPixels", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "renderbufferStorage", {configurable:true, enumerable:true, writable:true, value:function renderbufferStorage (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "renderbufferStorage", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "sampleCoverage", {configurable:true, enumerable:true, writable:true, value:function sampleCoverage (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "sampleCoverage", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "shaderSource", {configurable:true, enumerable:true, writable:true, value:function shaderSource (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "shaderSource", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilFunc", {configurable:true, enumerable:true, writable:true, value:function stencilFunc (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilFunc", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilFuncSeparate", {configurable:true, enumerable:true, writable:true, value:function stencilFuncSeparate (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilFuncSeparate", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilMask", {configurable:true, enumerable:true, writable:true, value:function stencilMask (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilMask", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilMaskSeparate", {configurable:true, enumerable:true, writable:true, value:function stencilMaskSeparate (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilMaskSeparate", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilOp", {configurable:true, enumerable:true, writable:true, value:function stencilOp (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilOp", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilOpSeparate", {configurable:true, enumerable:true, writable:true, value:function stencilOpSeparate (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilOpSeparate", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texImage2D", {configurable:true, enumerable:true, writable:true, value:function texImage2D (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "texImage2D", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texParameterf", {configurable:true, enumerable:true, writable:true, value:function texParameterf (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "texParameterf", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texParameteri", {configurable:true, enumerable:true, writable:true, value:function texParameteri (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "texParameteri", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texSubImage2D", {configurable:true, enumerable:true, writable:true, value:function texSubImage2D (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "texSubImage2D", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "useProgram", {configurable:true, enumerable:true, writable:true, value:function useProgram (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "useProgram", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "validateProgram", {configurable:true, enumerable:true, writable:true, value:function validateProgram (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "validateProgram", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindBuffer", {configurable:true, enumerable:true, writable:true, value:function bindBuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindBuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindFramebuffer", {configurable:true, enumerable:true, writable:true, value:function bindFramebuffer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindFramebuffer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindTexture", {configurable:true, enumerable:true, writable:true, value:function bindTexture (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindTexture", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clear", {configurable:true, enumerable:true, writable:true, value:function clear (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "clear", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearColor", {configurable:true, enumerable:true, writable:true, value:function clearColor (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "clearColor", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearDepth", {configurable:true, enumerable:true, writable:true, value:function clearDepth (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "clearDepth", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearStencil", {configurable:true, enumerable:true, writable:true, value:function clearStencil (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "clearStencil", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "colorMask", {configurable:true, enumerable:true, writable:true, value:function colorMask (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "colorMask", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "disableVertexAttribArray", {configurable:true, enumerable:true, writable:true, value:function disableVertexAttribArray (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "disableVertexAttribArray", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawArrays", {configurable:true, enumerable:true, writable:true, value:function drawArrays (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawArrays", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawElements", {configurable:true, enumerable:true, writable:true, value:function drawElements (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawElements", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "enableVertexAttribArray", {configurable:true, enumerable:true, writable:true, value:function enableVertexAttribArray (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "enableVertexAttribArray", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "scissor", {configurable:true, enumerable:true, writable:true, value:function scissor (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "scissor", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1f", {configurable:true, enumerable:true, writable:true, value:function uniform1f (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform1f", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1fv", {configurable:true, enumerable:true, writable:true, value:function uniform1fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform1fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1i", {configurable:true, enumerable:true, writable:true, value:function uniform1i (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform1i", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1iv", {configurable:true, enumerable:true, writable:true, value:function uniform1iv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform1iv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2f", {configurable:true, enumerable:true, writable:true, value:function uniform2f (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform2f", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2fv", {configurable:true, enumerable:true, writable:true, value:function uniform2fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform2fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2i", {configurable:true, enumerable:true, writable:true, value:function uniform2i (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform2i", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2iv", {configurable:true, enumerable:true, writable:true, value:function uniform2iv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform2iv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3f", {configurable:true, enumerable:true, writable:true, value:function uniform3f (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform3f", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3fv", {configurable:true, enumerable:true, writable:true, value:function uniform3fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform3fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3i", {configurable:true, enumerable:true, writable:true, value:function uniform3i (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform3i", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3iv", {configurable:true, enumerable:true, writable:true, value:function uniform3iv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform3iv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4f", {configurable:true, enumerable:true, writable:true, value:function uniform4f (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform4f", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4fv", {configurable:true, enumerable:true, writable:true, value:function uniform4fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform4fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4i", {configurable:true, enumerable:true, writable:true, value:function uniform4i (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform4i", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4iv", {configurable:true, enumerable:true, writable:true, value:function uniform4iv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform4iv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix2fv", {configurable:true, enumerable:true, writable:true, value:function uniformMatrix2fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniformMatrix2fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix3fv", {configurable:true, enumerable:true, writable:true, value:function uniformMatrix3fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniformMatrix3fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix4fv", {configurable:true, enumerable:true, writable:true, value:function uniformMatrix4fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniformMatrix4fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib1f", {configurable:true, enumerable:true, writable:true, value:function vertexAttrib1f (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib1f", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib1fv", {configurable:true, enumerable:true, writable:true, value:function vertexAttrib1fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib1fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib2f", {configurable:true, enumerable:true, writable:true, value:function vertexAttrib2f (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib2f", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib2fv", {configurable:true, enumerable:true, writable:true, value:function vertexAttrib2fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib2fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib3f", {configurable:true, enumerable:true, writable:true, value:function vertexAttrib3f (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib3f", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib3fv", {configurable:true, enumerable:true, writable:true, value:function vertexAttrib3fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib3fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib4f", {configurable:true, enumerable:true, writable:true, value:function vertexAttrib4f (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib4f", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib4fv", {configurable:true, enumerable:true, writable:true, value:function vertexAttrib4fv (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib4fv", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttribPointer", {configurable:true, enumerable:true, writable:true, value:function vertexAttribPointer (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttribPointer", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "viewport", {configurable:true, enumerable:true, writable:true, value:function viewport (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "viewport", arguments)}});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "makeXRCompatible", {configurable:true, enumerable:true, writable:true, value:function makeXRCompatible (){return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "makeXRCompatible", arguments)}});

// MediaQueryList对象
MediaQueryList = function MediaQueryList(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(MediaQueryList, "MediaQueryList");
MediaQueryList.prototype.__proto__=EventTarget.prototype;
MediaQueryList.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "media", {configurable:true, enumerable:true, get:function media (){return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "media_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "matches", {configurable:true, enumerable:true, get:function matches (){return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "matches_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "addListener", {configurable:true, enumerable:true, writable:true, value:function addListener (){return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "addListener", arguments)}});
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "removeListener", {configurable:true, enumerable:true, writable:true, value:function removeListener (){return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "removeListener", arguments)}});

// CSSRuleList对象
CSSRuleList = function CSSRuleList(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(CSSRuleList, "CSSRuleList");
bodavm.toolsFunc.defineProperty(CSSRuleList.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, CSSRuleList.prototype, "CSSRuleList", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CSSRuleList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, CSSRuleList.prototype, "CSSRuleList", "item", arguments)}});

// Attr对象
Attr = function Attr(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Attr, "Attr");
Attr.prototype.__proto__=Node.prototype;
Attr.__proto__=Node;
bodavm.toolsFunc.defineProperty(Attr.prototype, "namespaceURI", {configurable:true, enumerable:true, get:function namespaceURI (){return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "namespaceURI_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Attr.prototype, "prefix", {configurable:true, enumerable:true, get:function prefix (){return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "prefix_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Attr.prototype, "localName", {configurable:true, enumerable:true, get:function localName (){return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "localName_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Attr.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "name_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Attr.prototype, "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "value_set", arguments)}});
bodavm.toolsFunc.defineProperty(Attr.prototype, "ownerElement", {configurable:true, enumerable:true, get:function ownerElement (){return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "ownerElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Attr.prototype, "specified", {configurable:true, enumerable:true, get:function specified (){return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "specified_get", arguments)}, set:undefined});

// Navigation对象
Navigation = function Navigation(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Navigation, "Navigation");
Navigation.prototype.__proto__=EventTarget.prototype;
Navigation.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(Navigation.prototype, "currentEntry", {configurable:true, enumerable:true, get:function currentEntry (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "currentEntry_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "transition", {configurable:true, enumerable:true, get:function transition (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "transition_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "canGoBack", {configurable:true, enumerable:true, get:function canGoBack (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "canGoBack_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "canGoForward", {configurable:true, enumerable:true, get:function canGoForward (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "canGoForward_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "onnavigate", {configurable:true, enumerable:true, get:function onnavigate (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigate_get", arguments)}, set:function onnavigate (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigate_set", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "onnavigatesuccess", {configurable:true, enumerable:true, get:function onnavigatesuccess (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigatesuccess_get", arguments)}, set:function onnavigatesuccess (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigatesuccess_set", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "onnavigateerror", {configurable:true, enumerable:true, get:function onnavigateerror (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigateerror_get", arguments)}, set:function onnavigateerror (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "onnavigateerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "oncurrententrychange", {configurable:true, enumerable:true, get:function oncurrententrychange (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "oncurrententrychange_get", arguments)}, set:function oncurrententrychange (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "oncurrententrychange_set", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "back", {configurable:true, enumerable:true, writable:true, value:function back (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "back", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "entries", {configurable:true, enumerable:true, writable:true, value:function entries (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "entries", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "forward", {configurable:true, enumerable:true, writable:true, value:function forward (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "forward", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "navigate", {configurable:true, enumerable:true, writable:true, value:function navigate (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "navigate", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "reload", {configurable:true, enumerable:true, writable:true, value:function reload (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "reload", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "traverseTo", {configurable:true, enumerable:true, writable:true, value:function traverseTo (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "traverseTo", arguments)}});
bodavm.toolsFunc.defineProperty(Navigation.prototype, "updateCurrentEntry", {configurable:true, enumerable:true, writable:true, value:function updateCurrentEntry (){return bodavm.toolsFunc.dispatch(this, Navigation.prototype, "Navigation", "updateCurrentEntry", arguments)}});
var navigation={}
navigation.__proto__=Navigation.prototype


// MediaStream对象
MediaStream = function MediaStream(){}
bodavm.toolsFunc.safeProto(MediaStream, "MediaStream");
MediaStream.prototype.__proto__=EventTarget.prototype;
MediaStream.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "id", {configurable:true, enumerable:true, get:function id (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "id_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "active", {configurable:true, enumerable:true, get:function active (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "active_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "onaddtrack", {configurable:true, enumerable:true, get:function onaddtrack (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onaddtrack_get", arguments)}, set:function onaddtrack (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onaddtrack_set", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "onremovetrack", {configurable:true, enumerable:true, get:function onremovetrack (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onremovetrack_get", arguments)}, set:function onremovetrack (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onremovetrack_set", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "onactive", {configurable:true, enumerable:true, get:function onactive (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onactive_get", arguments)}, set:function onactive (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onactive_set", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "oninactive", {configurable:true, enumerable:true, get:function oninactive (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "oninactive_get", arguments)}, set:function oninactive (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "oninactive_set", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "addTrack", {configurable:true, enumerable:true, writable:true, value:function addTrack (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "addTrack", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "clone", {configurable:true, enumerable:true, writable:true, value:function clone (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "clone", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "getAudioTracks", {configurable:true, enumerable:true, writable:true, value:function getAudioTracks (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "getAudioTracks", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "getTrackById", {configurable:true, enumerable:true, writable:true, value:function getTrackById (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "getTrackById", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "getTracks", {configurable:true, enumerable:true, writable:true, value:function getTracks (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "getTracks", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "getVideoTracks", {configurable:true, enumerable:true, writable:true, value:function getVideoTracks (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "getVideoTracks", arguments)}});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "removeTrack", {configurable:true, enumerable:true, writable:true, value:function removeTrack (){return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "removeTrack", arguments)}});

// TrustedTypePolicyFactory对象
TrustedTypePolicyFactory = function TrustedTypePolicyFactory(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(TrustedTypePolicyFactory, "TrustedTypePolicyFactory");
TrustedTypePolicyFactory.prototype.__proto__=EventTarget.prototype;
TrustedTypePolicyFactory.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "emptyHTML", {configurable:true, enumerable:true, get:function emptyHTML (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "emptyHTML_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "emptyScript", {configurable:true, enumerable:true, get:function emptyScript (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "emptyScript_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "defaultPolicy", {configurable:true, enumerable:true, get:function defaultPolicy (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "defaultPolicy_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "createPolicy", {configurable:true, enumerable:true, writable:true, value:function createPolicy (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "createPolicy", arguments)}});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "getAttributeType", {configurable:true, enumerable:true, writable:true, value:function getAttributeType (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "getAttributeType", arguments)}});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "getPropertyType", {configurable:true, enumerable:true, writable:true, value:function getPropertyType (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "getPropertyType", arguments)}});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "getTypeMapping", {configurable:true, enumerable:true, writable:true, value:function getTypeMapping (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "getTypeMapping", arguments)}});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "isHTML", {configurable:true, enumerable:true, writable:true, value:function isHTML (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "isHTML", arguments)}});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "isScript", {configurable:true, enumerable:true, writable:true, value:function isScript (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "isScript", arguments)}});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "isScriptURL", {configurable:true, enumerable:true, writable:true, value:function isScriptURL (){return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "isScriptURL", arguments)}});

var trustedTypes = {}
trustedTypes.__proto__ = TrustedTypePolicyFactory.prototype


// Scheduler对象
Scheduler = function Scheduler(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Scheduler, "Scheduler");
bodavm.toolsFunc.defineProperty(Scheduler.prototype, "postTask", {configurable:true, enumerable:true, writable:true, value:function postTask (){return bodavm.toolsFunc.dispatch(this, Scheduler.prototype, "Scheduler", "postTask", arguments)}});


// scheduler对象
var scheduler = {}
scheduler.__proto__=Scheduler.prototype;

// CookieStore对象
CookieStore = function CookieStore(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(CookieStore, "CookieStore");
CookieStore.prototype.__proto__=EventTarget.prototype;
CookieStore.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "delete", {configurable:true, enumerable:true, writable:true, value:function  (){return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "delete", arguments)}});
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "get", {configurable:true, enumerable:true, writable:true, value:function get (){return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "get", arguments)}});
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "getAll", {configurable:true, enumerable:true, writable:true, value:function getAll (){return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "getAll", arguments)}});
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "set", {configurable:true, enumerable:true, writable:true, value:function set (){return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "set", arguments)}});
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "onchange_set", arguments)}});
// cookieStore对象
var cookieStore = {}
cookieStore.__proto__=CookieStore.prototype;

// CacheStorage对象
// debugger
CacheStorage = function CacheStorage(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(CacheStorage, "CacheStorage");
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "delete", {configurable:true, enumerable:true, writable:true, value:function  (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "delete", arguments)}});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "has", {configurable:true, enumerable:true, writable:true, value:function has (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "has", arguments)}});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "keys", {configurable:true, enumerable:true, writable:true, value:function keys (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "keys", arguments)}});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "match", {configurable:true, enumerable:true, writable:true, value:function match (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "match", arguments)}});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "open", {configurable:true, enumerable:true, writable:true, value:function open (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "open", arguments)}});
// caches对象
var caches = {}
caches.__proto__=CacheStorage.prototype;

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach((fun) => {
        fun();
      });
    }
  };

  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fun) => {
        fun();
      });
    }
  };

  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}

bodavm.toolsFunc.safeFunc(Promise,'Promise')
// globalMy.rename(Promise.prototype,"Promise")


//原型上面的方法
//用settimeout来模拟异步调用,保证链式调用，即then方法中要返回一个新的promise，并将then方法的返回值进行resolve
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled != 'function') {
    onFulfilled = function (value) {
      return value;
    };
  }
  if (typeof onRejected != 'function') {
    onRejected = function (reason) {
      throw reason;
    };
  }
  const promise2 = new Promise((resolve, reject) => {
    switch (this.state) {
      case FULFILLED:
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case REJECTED:
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case PENDING:
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
        break;
    }
  });
  return promise2;
};
bodavm.toolsFunc.safeFunc(Promise.prototype.then,'then')

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};
bodavm.toolsFunc.safeFunc(Promise.prototype.catch,'catch')


Promise.prototype.finally = function (fn) {
  return this.then(
    (value) => {
      fn();
      return value;
    },
    (reason) => {
      fn();
      throw reason;
    }
  );
};
bodavm.toolsFunc.safeFunc(Promise.prototype.finally,'finally')


//静态方法
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
};
bodavm.toolsFunc.safeFunc(Promise.resolve,'resolve')

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};
bodavm.toolsFunc.safeFunc(Promise.reject,'reject')

//接受一个promise数组，当所有promise状态resolve后，执行resolve
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            result[i] = data;
            if (++index === promises.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};
bodavm.toolsFunc.safeFunc(Promise.all,'all')

//接受一个promise数组，当有一个promise状态resolve后，执行resolve
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve();
    } else {
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};
bodavm.toolsFunc.safeFunc(Promise.race,'race')

bodavm.toolsFunc.safeFunc(Promise)
// globalMy.rename(Promise.prototype,"Promise")


// OffscreenCanvasRenderingContext2D对象
OffscreenCanvasRenderingContext2D = function OffscreenCanvasRenderingContext2D(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(OffscreenCanvasRenderingContext2D, "OffscreenCanvasRenderingContext2D");
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "canvas", {configurable:true, enumerable:true, get:function canvas (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "canvas_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "globalAlpha", {configurable:true, enumerable:true, get:function globalAlpha (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "globalAlpha_get", arguments)}, set:function globalAlpha (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "globalAlpha_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "globalCompositeOperation", {configurable:true, enumerable:true, get:function globalCompositeOperation (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "globalCompositeOperation_get", arguments)}, set:function globalCompositeOperation (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "globalCompositeOperation_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "filter", {configurable:true, enumerable:true, get:function filter (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "filter_get", arguments)}, set:function filter (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "filter_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "imageSmoothingEnabled", {configurable:true, enumerable:true, get:function imageSmoothingEnabled (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingEnabled_get", arguments)}, set:function imageSmoothingEnabled (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingEnabled_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "imageSmoothingQuality", {configurable:true, enumerable:true, get:function imageSmoothingQuality (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingQuality_get", arguments)}, set:function imageSmoothingQuality (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingQuality_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "strokeStyle", {configurable:true, enumerable:true, get:function strokeStyle (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "strokeStyle_get", arguments)}, set:function strokeStyle (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "strokeStyle_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "fillStyle", {configurable:true, enumerable:true, get:function fillStyle (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fillStyle_get", arguments)}, set:function fillStyle (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fillStyle_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "shadowOffsetX", {configurable:true, enumerable:true, get:function shadowOffsetX (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetX_get", arguments)}, set:function shadowOffsetX (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetX_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "shadowOffsetY", {configurable:true, enumerable:true, get:function shadowOffsetY (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetY_get", arguments)}, set:function shadowOffsetY (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetY_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "shadowBlur", {configurable:true, enumerable:true, get:function shadowBlur (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "shadowBlur_get", arguments)}, set:function shadowBlur (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "shadowBlur_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "shadowColor", {configurable:true, enumerable:true, get:function shadowColor (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "shadowColor_get", arguments)}, set:function shadowColor (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "shadowColor_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "lineWidth", {configurable:true, enumerable:true, get:function lineWidth (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "lineWidth_get", arguments)}, set:function lineWidth (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "lineWidth_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "lineCap", {configurable:true, enumerable:true, get:function lineCap (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "lineCap_get", arguments)}, set:function lineCap (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "lineCap_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "lineJoin", {configurable:true, enumerable:true, get:function lineJoin (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "lineJoin_get", arguments)}, set:function lineJoin (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "lineJoin_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "miterLimit", {configurable:true, enumerable:true, get:function miterLimit (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "miterLimit_get", arguments)}, set:function miterLimit (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "miterLimit_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "lineDashOffset", {configurable:true, enumerable:true, get:function lineDashOffset (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "lineDashOffset_get", arguments)}, set:function lineDashOffset (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "lineDashOffset_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "font", {configurable:true, enumerable:true, get:function font (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "font_get", arguments)}, set:function font (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "font_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "textAlign", {configurable:true, enumerable:true, get:function textAlign (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "textAlign_get", arguments)}, set:function textAlign (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "textAlign_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "textBaseline", {configurable:true, enumerable:true, get:function textBaseline (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "textBaseline_get", arguments)}, set:function textBaseline (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "textBaseline_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "direction", {configurable:true, enumerable:true, get:function direction (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "direction_get", arguments)}, set:function direction (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "direction_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "fontKerning", {configurable:true, enumerable:true, get:function fontKerning (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fontKerning_get", arguments)}, set:function fontKerning (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fontKerning_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "fontStretch", {configurable:true, enumerable:true, get:function fontStretch (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fontStretch_get", arguments)}, set:function fontStretch (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fontStretch_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "fontVariantCaps", {configurable:true, enumerable:true, get:function fontVariantCaps (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fontVariantCaps_get", arguments)}, set:function fontVariantCaps (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fontVariantCaps_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "letterSpacing", {configurable:true, enumerable:true, get:function letterSpacing (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "letterSpacing_get", arguments)}, set:function letterSpacing (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "letterSpacing_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "textRendering", {configurable:true, enumerable:true, get:function textRendering (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "textRendering_get", arguments)}, set:function textRendering (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "textRendering_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "wordSpacing", {configurable:true, enumerable:true, get:function wordSpacing (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "wordSpacing_get", arguments)}, set:function wordSpacing (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "wordSpacing_set", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "clip", {configurable:true, enumerable:true, writable:true, value:function clip (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "clip", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "createConicGradient", {configurable:true, enumerable:true, writable:true, value:function createConicGradient (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "createConicGradient", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "createImageData", {configurable:true, enumerable:true, writable:true, value:function createImageData (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "createImageData", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "createLinearGradient", {configurable:true, enumerable:true, writable:true, value:function createLinearGradient (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "createLinearGradient", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "createPattern", {configurable:true, enumerable:true, writable:true, value:function createPattern (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "createPattern", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "createRadialGradient", {configurable:true, enumerable:true, writable:true, value:function createRadialGradient (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "createRadialGradient", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "drawImage", {configurable:true, enumerable:true, writable:true, value:function drawImage (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "drawImage", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "fill", {configurable:true, enumerable:true, writable:true, value:function fill (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fill", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "fillText", {configurable:true, enumerable:true, writable:true, value:function fillText (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fillText", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "getImageData", {configurable:true, enumerable:true, writable:true, value:function getImageData (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "getImageData", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "getLineDash", {configurable:true, enumerable:true, writable:true, value:function getLineDash (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "getLineDash", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "getTransform", {configurable:true, enumerable:true, writable:true, value:function getTransform (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "getTransform", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "isContextLost", {configurable:true, enumerable:true, writable:true, value:function isContextLost (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "isContextLost", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "isPointInPath", {configurable:true, enumerable:true, writable:true, value:function isPointInPath (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "isPointInPath", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "isPointInStroke", {configurable:true, enumerable:true, writable:true, value:function isPointInStroke (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "isPointInStroke", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "measureText", {configurable:true, enumerable:true, writable:true, value:function measureText (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "measureText", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "putImageData", {configurable:true, enumerable:true, writable:true, value:function putImageData (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "putImageData", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "reset", {configurable:true, enumerable:true, writable:true, value:function reset (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "reset", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "roundRect", {configurable:true, enumerable:true, writable:true, value:function roundRect (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "roundRect", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "save", {configurable:true, enumerable:true, writable:true, value:function save (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "save", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "scale", {configurable:true, enumerable:true, writable:true, value:function scale (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "scale", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "setLineDash", {configurable:true, enumerable:true, writable:true, value:function setLineDash (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "setLineDash", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "setTransform", {configurable:true, enumerable:true, writable:true, value:function setTransform (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "setTransform", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "stroke", {configurable:true, enumerable:true, writable:true, value:function stroke (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "stroke", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "strokeText", {configurable:true, enumerable:true, writable:true, value:function strokeText (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "strokeText", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "transform", {configurable:true, enumerable:true, writable:true, value:function transform (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "transform", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "translate", {configurable:true, enumerable:true, writable:true, value:function translate (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "translate", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "arc", {configurable:true, enumerable:true, writable:true, value:function arc (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "arc", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "arcTo", {configurable:true, enumerable:true, writable:true, value:function arcTo (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "arcTo", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "beginPath", {configurable:true, enumerable:true, writable:true, value:function beginPath (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "beginPath", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "bezierCurveTo", {configurable:true, enumerable:true, writable:true, value:function bezierCurveTo (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "bezierCurveTo", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "clearRect", {configurable:true, enumerable:true, writable:true, value:function clearRect (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "clearRect", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "closePath", {configurable:true, enumerable:true, writable:true, value:function closePath (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "closePath", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "ellipse", {configurable:true, enumerable:true, writable:true, value:function ellipse (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "ellipse", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "fillRect", {configurable:true, enumerable:true, writable:true, value:function fillRect (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "fillRect", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "lineTo", {configurable:true, enumerable:true, writable:true, value:function lineTo (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "lineTo", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "moveTo", {configurable:true, enumerable:true, writable:true, value:function moveTo (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "moveTo", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "quadraticCurveTo", {configurable:true, enumerable:true, writable:true, value:function quadraticCurveTo (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "quadraticCurveTo", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "rect", {configurable:true, enumerable:true, writable:true, value:function rect (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "rect", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "resetTransform", {configurable:true, enumerable:true, writable:true, value:function resetTransform (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "resetTransform", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "restore", {configurable:true, enumerable:true, writable:true, value:function restore (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "restore", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "rotate", {configurable:true, enumerable:true, writable:true, value:function rotate (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "rotate", arguments)}});
bodavm.toolsFunc.defineProperty(OffscreenCanvasRenderingContext2D.prototype, "strokeRect", {configurable:true, enumerable:true, writable:true, value:function strokeRect (){return bodavm.toolsFunc.dispatch(this, OffscreenCanvasRenderingContext2D.prototype, "OffscreenCanvasRenderingContext2D", "strokeRect", arguments)}});


DeprecatedStorageInfo = function DeprecatedStorageInfo() { }
bodavm.toolsFunc.safeProto(DeprecatedStorageInfo, "DeprecatedStorageInfo");

bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo, "TEMPORARY", { configurable: false, enumerable: true, writable: false, value: 0 });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo, "PERSISTENT", { configurable: false, enumerable: true, writable: false, value: 1 });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo.prototype, "TEMPORARY", { configurable: false, enumerable: true, writable: false, value: 0 });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo.prototype, "PERSISTENT", { configurable: false, enumerable: true, writable: false, value: 1 });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo.prototype, "queryUsageAndQuota", { writable: true, enumerable: true, configurable: true, value: function queryUsageAndQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageInfo.prototype, "DeprecatedStorageInfo", "queryUsageAndQuota", arguments) } });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo.prototype, "requestQuota", { writable: true, enumerable: true, configurable: true, value: function requestQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageInfo.prototype, "DeprecatedStorageInfo", "requestQuota", arguments) } });

var webkitStorageInfo = {}
webkitStorageInfo.__proto__ = DeprecatedStorageInfo.prototype

delete DeprecatedStorageInfo

SpeechSynthesis = function SpeechSynthesis() { return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor") }
bodavm.toolsFunc.safeProto(SpeechSynthesis, "SpeechSynthesis");
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "cancel", { writable: true, enumerable: true, configurable: true, value: function cancel() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "cancel", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "getVoices", { writable: true, enumerable: true, configurable: true, value: function getVoices() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "getVoices", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "pause", { writable: true, enumerable: true, configurable: true, value: function pause() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "pause", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "resume", { writable: true, enumerable: true, configurable: true, value: function resume() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "resume", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "speak", { writable: true, enumerable: true, configurable: true, value: function speak() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "speak", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "paused", { set: undefined, enumerable: true, configurable: true, get: function paused() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "paused_get  ", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "pending", { set: undefined, enumerable: true, configurable: true, get: function pending() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "pending_get  ", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "speaking", { set: undefined, enumerable: true, configurable: true, get: function speaking() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "speaking_get  ", arguments) } });
bodavm.toolsFunc.defineProperty(SpeechSynthesis.prototype, "onvoiceschanged", { configurable: true, enumerable: true, get: function onvoiceschanged() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "onvoiceschanged_get  ", arguments) }, set: function onvoiceschanged() { return bodavm.toolsFunc.dispatch(this, SpeechSynthesis.prototype, "SpeechSynthesis", "onvoiceschanged_set", arguments) } });


// speechSynthesis对象
var speechSynthesis = {}
speechSynthesis.__proto__=SpeechSynthesis.prototype;

delete SpeechSynthesis
// VisualViewport对象
VisualViewport = function VisualViewport(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(VisualViewport, "VisualViewport");
VisualViewport.prototype.__proto__=EventTarget.prototype;
VisualViewport.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "offsetLeft", {configurable:true, enumerable:true, get:function offsetLeft (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "offsetLeft_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "offsetTop", {configurable:true, enumerable:true, get:function offsetTop (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "offsetTop_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "pageLeft", {configurable:true, enumerable:true, get:function pageLeft (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "pageLeft_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "pageTop", {configurable:true, enumerable:true, get:function pageTop (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "pageTop_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "width_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "height_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "scale", {configurable:true, enumerable:true, get:function scale (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "scale_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "onresize", {configurable:true, enumerable:true, get:function onresize (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "onresize_get", arguments)}, set:function onresize (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "onresize_set", arguments)}});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "onscroll", {configurable:true, enumerable:true, get:function onscroll (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "onscroll_get", arguments)}, set:function onscroll (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "onscroll_set", arguments)}});

var visualViewport={}
visualViewport.__proto__ = VisualViewport.prototype
// BeforeInstallPromptEvent对象
BeforeInstallPromptEvent = function BeforeInstallPromptEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BeforeInstallPromptEvent': 1 argument required, but only 0 present.")}
bodavm.toolsFunc.safeProto(BeforeInstallPromptEvent, "BeforeInstallPromptEvent");
BeforeInstallPromptEvent.prototype.__proto__=Event.prototype;
BeforeInstallPromptEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "platforms", {configurable:true, enumerable:true, get:function platforms (){return bodavm.toolsFunc.dispatch(this, BeforeInstallPromptEvent.prototype, "BeforeInstallPromptEvent", "platforms_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "userChoice", {configurable:true, enumerable:true, get:function userChoice (){return bodavm.toolsFunc.dispatch(this, BeforeInstallPromptEvent.prototype, "BeforeInstallPromptEvent", "userChoice_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "prompt", {configurable:true, enumerable:true, writable:true, value:function prompt (){return bodavm.toolsFunc.dispatch(this, BeforeInstallPromptEvent.prototype, "BeforeInstallPromptEvent", "prompt", arguments)}});

// BarProp对象
BarProp = function BarProp(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(BarProp, "BarProp");
bodavm.toolsFunc.defineProperty(BarProp.prototype, "visible", {configurable:true, enumerable:true, get:function visible (){return bodavm.toolsFunc.dispatch(this, BarProp.prototype, "BarProp", "visible_get", arguments)}, set:undefined});
// locationbar对象
var locationbar = {}
locationbar.__proto__=BarProp.prototype;


var menubar={}
menubar.__proto__= BarProp.prototype;

var statusbar={}
statusbar.__proto__=BarProp.prototype


var toolbar={}
toolbar.__proto__=BarProp.prototype
// BaseAudioContext对象
BaseAudioContext = function BaseAudioContext(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(BaseAudioContext, "BaseAudioContext");
BaseAudioContext.prototype.__proto__=EventTarget.prototype;
BaseAudioContext.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "destination", {configurable:true, enumerable:true, get:function destination (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "destination_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "currentTime", {configurable:true, enumerable:true, get:function currentTime (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "currentTime_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "sampleRate", {configurable:true, enumerable:true, get:function sampleRate (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "sampleRate_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "listener", {configurable:true, enumerable:true, get:function listener (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "listener_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "state", {configurable:true, enumerable:true, get:function state (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "state_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "onstatechange", {configurable:true, enumerable:true, get:function onstatechange (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "onstatechange_get", arguments)}, set:function onstatechange (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "onstatechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createAnalyser", {configurable:true, enumerable:true, writable:true, value:function createAnalyser (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createAnalyser", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createBiquadFilter", {configurable:true, enumerable:true, writable:true, value:function createBiquadFilter (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createBiquadFilter", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createBuffer", {configurable:true, enumerable:true, writable:true, value:function createBuffer (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createBuffer", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createBufferSource", {configurable:true, enumerable:true, writable:true, value:function createBufferSource (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createBufferSource", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createChannelMerger", {configurable:true, enumerable:true, writable:true, value:function createChannelMerger (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createChannelMerger", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createChannelSplitter", {configurable:true, enumerable:true, writable:true, value:function createChannelSplitter (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createChannelSplitter", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createConstantSource", {configurable:true, enumerable:true, writable:true, value:function createConstantSource (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createConstantSource", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createConvolver", {configurable:true, enumerable:true, writable:true, value:function createConvolver (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createConvolver", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createDelay", {configurable:true, enumerable:true, writable:true, value:function createDelay (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createDelay", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createDynamicsCompressor", {configurable:true, enumerable:true, writable:true, value:function createDynamicsCompressor (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createDynamicsCompressor", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createGain", {configurable:true, enumerable:true, writable:true, value:function createGain (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createGain", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createIIRFilter", {configurable:true, enumerable:true, writable:true, value:function createIIRFilter (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createIIRFilter", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createOscillator", {configurable:true, enumerable:true, writable:true, value:function createOscillator (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createOscillator", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createPanner", {configurable:true, enumerable:true, writable:true, value:function createPanner (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createPanner", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createPeriodicWave", {configurable:true, enumerable:true, writable:true, value:function createPeriodicWave (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createPeriodicWave", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createScriptProcessor", {configurable:true, enumerable:true, writable:true, value:function createScriptProcessor (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createScriptProcessor", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createStereoPanner", {configurable:true, enumerable:true, writable:true, value:function createStereoPanner (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createStereoPanner", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createWaveShaper", {configurable:true, enumerable:true, writable:true, value:function createWaveShaper (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createWaveShaper", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "decodeAudioData", {configurable:true, enumerable:true, writable:true, value:function decodeAudioData (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "decodeAudioData", arguments)}});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "audioWorklet", {configurable:true, enumerable:true, get:function audioWorklet (){return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "audioWorklet_get", arguments)}, set:undefined});

// BluetoothUUID对象
BluetoothUUID = function BluetoothUUID(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(BluetoothUUID, "BluetoothUUID");
bodavm.toolsFunc.defineProperty(BluetoothUUID, "canonicalUUID", {configurable:true, enumerable:true, writable:true, value:function canonicalUUID (){return bodavm.toolsFunc.dispatch(this, BluetoothUUID, "BluetoothUUID", "canonicalUUID", arguments)}});
bodavm.toolsFunc.defineProperty(BluetoothUUID, "getCharacteristic", {configurable:true, enumerable:true, writable:true, value:function getCharacteristic (){return bodavm.toolsFunc.dispatch(this, BluetoothUUID, "BluetoothUUID", "getCharacteristic", arguments)}});
bodavm.toolsFunc.defineProperty(BluetoothUUID, "getDescriptor", {configurable:true, enumerable:true, writable:true, value:function getDescriptor (){return bodavm.toolsFunc.dispatch(this, BluetoothUUID, "BluetoothUUID", "getDescriptor", arguments)}});
bodavm.toolsFunc.defineProperty(BluetoothUUID, "getService", {configurable:true, enumerable:true, writable:true, value:function getService (){return bodavm.toolsFunc.dispatch(this, BluetoothUUID, "BluetoothUUID", "getService", arguments)}});



StyleMedia = function StyleMedia() { return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor") }
bodavm.toolsFunc.safeProto(StyleMedia, "StyleMedia");
bodavm.toolsFunc.defineProperty(StyleMedia.prototype, "matchMedium", { configurable: true, enumerable: true, get: function matchMedium() { return bodavm.toolsFunc.dispatch(this, StyleMedia.prototype, "StyleMedia", "matchMedium", arguments) }, set: undefined });

// styleMedia对象
var styleMedia = {}
styleMedia.__proto__=StyleMedia.prototype;

// Audio对象
Audio = function Audio(){}
bodavm.toolsFunc.safeProto(Audio, "Audio");
Audio.prototype.__proto__=HTMLMediaElement.prototype;

// Crypto对象
Crypto = function Crypto(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Crypto, "Crypto");
bodavm.toolsFunc.defineProperty(Crypto.prototype, "getRandomValues", {configurable:true, enumerable:true, writable:true, value:function getRandomValues (){return bodavm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "getRandomValues", arguments)}});
bodavm.toolsFunc.defineProperty(Crypto.prototype, "subtle", {configurable:true, enumerable:true, get:function subtle (){return bodavm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "subtle_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Crypto.prototype, "randomUUID", {configurable:true, enumerable:true, writable:true, value:function randomUUID (){return bodavm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "randomUUID", arguments)}});

var crypto={}
crypto.__proto__ = Crypto.prototype
// CDATASection对象
CDATASection = function CDATASection(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(CDATASection, "CDATASection");
CDATASection.prototype.__proto__=Text.prototype;
CDATASection.__proto__=Text;

// Comment对象
Comment = function Comment(){}
bodavm.toolsFunc.safeProto(Comment, "Comment");
Comment.prototype.__proto__=CharacterData.prototype;
Comment.__proto__=CharacterData;

// DocumentFragment对象
DocumentFragment = function DocumentFragment(){}
bodavm.toolsFunc.safeProto(DocumentFragment, "DocumentFragment");
DocumentFragment.prototype.__proto__=Node.prototype;
DocumentFragment.__proto__=Node;
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "children", {configurable:true, enumerable:true, get:function children (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "children_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "firstElementChild", {configurable:true, enumerable:true, get:function firstElementChild (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "firstElementChild_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "lastElementChild", {configurable:true, enumerable:true, get:function lastElementChild (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "lastElementChild_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "childElementCount", {configurable:true, enumerable:true, get:function childElementCount (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "childElementCount_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "append", {configurable:true, enumerable:true, writable:true, value:function append (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "append", arguments)}});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "getElementById", {configurable:true, enumerable:true, writable:true, value:function getElementById (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "getElementById", arguments)}});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "prepend", {configurable:true, enumerable:true, writable:true, value:function prepend (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "prepend", arguments)}});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "querySelector", {configurable:true, enumerable:true, writable:true, value:function querySelector (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "querySelector", arguments)}});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "querySelectorAll", {configurable:true, enumerable:true, writable:true, value:function querySelectorAll (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "querySelectorAll", arguments)}});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "replaceChildren", {configurable:true, enumerable:true, writable:true, value:function replaceChildren (){return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "replaceChildren", arguments)}});

// DocumentType对象
DocumentType = function DocumentType(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(DocumentType, "DocumentType");
DocumentType.prototype.__proto__=Node.prototype;
DocumentType.__proto__=Node;
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "name_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "publicId", {configurable:true, enumerable:true, get:function publicId (){return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "publicId_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "systemId", {configurable:true, enumerable:true, get:function systemId (){return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "systemId_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "after", {configurable:true, enumerable:true, writable:true, value:function after (){return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "after", arguments)}});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "before", {configurable:true, enumerable:true, writable:true, value:function before (){return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "before", arguments)}});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "remove", {configurable:true, enumerable:true, writable:true, value:function remove (){return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "remove", arguments)}});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "replaceWith", {configurable:true, enumerable:true, writable:true, value:function replaceWith (){return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "replaceWith", arguments)}});

// DOMParser对象
DOMParser = function DOMParser(){}
bodavm.toolsFunc.safeProto(DOMParser, "DOMParser");
bodavm.toolsFunc.defineProperty(DOMParser.prototype, "parseFromString", {configurable:true, enumerable:true, writable:true, value:function parseFromString (){return bodavm.toolsFunc.dispatch(this, DOMParser.prototype, "DOMParser", "parseFromString", arguments)}});

// External对象
External = function External(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(External, "External");
bodavm.toolsFunc.defineProperty(External.prototype, "AddSearchProvider", {configurable:true, enumerable:true, writable:true, value:function AddSearchProvider (){return bodavm.toolsFunc.dispatch(this, External.prototype, "External", "AddSearchProvider", arguments)}});
bodavm.toolsFunc.defineProperty(External.prototype, "IsSearchProviderInstalled", {configurable:true, enumerable:true, writable:true, value:function IsSearchProviderInstalled (){return bodavm.toolsFunc.dispatch(this, External.prototype, "External", "IsSearchProviderInstalled", arguments)}});
// external对象
var external = {}
external.__proto__=External.prototype;

// WebSocket对象
WebSocket = function WebSocket(){
    if(arguments.length<1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WebSocket': 1 argument required, but only 0 present.")}

    }
bodavm.toolsFunc.safeProto(WebSocket, "WebSocket");
WebSocket.prototype.__proto__=EventTarget.prototype;
WebSocket.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(WebSocket, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebSocket, "OPEN", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(WebSocket, "CLOSING", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(WebSocket, "CLOSED", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "url", {configurable:true, enumerable:true, get:function url (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "url_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "readyState", {configurable:true, enumerable:true, get:function readyState (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "readyState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "bufferedAmount", {configurable:true, enumerable:true, get:function bufferedAmount (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bufferedAmount_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "onopen", {configurable:true, enumerable:true, get:function onopen (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onopen_get", arguments)}, set:function onopen (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onopen_set", arguments)}});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "onclose", {configurable:true, enumerable:true, get:function onclose (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onclose_get", arguments)}, set:function onclose (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onclose_set", arguments)}});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "extensions", {configurable:true, enumerable:true, get:function extensions (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "extensions_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "protocol", {configurable:true, enumerable:true, get:function protocol (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "protocol_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "onmessage", {configurable:true, enumerable:true, get:function onmessage (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onmessage_get", arguments)}, set:function onmessage (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onmessage_set", arguments)}});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "binaryType", {configurable:true, enumerable:true, get:function binaryType (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "binaryType_get", arguments)}, set:function binaryType (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "binaryType_set", arguments)}});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "OPEN", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "CLOSING", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "CLOSED", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "close", arguments)}});
bodavm.toolsFunc.defineProperty(WebSocket.prototype, "send", {configurable:true, enumerable:true, writable:true, value:function send (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "send", arguments)}});

// SourceBuffer对象
SourceBuffer = function SourceBuffer(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SourceBuffer, "SourceBuffer");
SourceBuffer.prototype.__proto__=EventTarget.prototype;
SourceBuffer.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "mode", {configurable:true, enumerable:true, get:function mode (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "mode_get", arguments)}, set:function mode (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "mode_set", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "updating", {configurable:true, enumerable:true, get:function updating (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "updating_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "buffered", {configurable:true, enumerable:true, get:function buffered (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "buffered_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "timestampOffset", {configurable:true, enumerable:true, get:function timestampOffset (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "timestampOffset_get", arguments)}, set:function timestampOffset (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "timestampOffset_set", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "appendWindowStart", {configurable:true, enumerable:true, get:function appendWindowStart (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendWindowStart_get", arguments)}, set:function appendWindowStart (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendWindowStart_set", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "appendWindowEnd", {configurable:true, enumerable:true, get:function appendWindowEnd (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendWindowEnd_get", arguments)}, set:function appendWindowEnd (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendWindowEnd_set", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdatestart", {configurable:true, enumerable:true, get:function onupdatestart (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdatestart_get", arguments)}, set:function onupdatestart (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdatestart_set", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdate", {configurable:true, enumerable:true, get:function onupdate (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdate_get", arguments)}, set:function onupdate (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdate_set", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdateend", {configurable:true, enumerable:true, get:function onupdateend (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdateend_get", arguments)}, set:function onupdateend (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdateend_set", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onabort", {configurable:true, enumerable:true, get:function onabort (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onabort_get", arguments)}, set:function onabort (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onabort_set", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "abort", {configurable:true, enumerable:true, writable:true, value:function abort (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "abort", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "appendBuffer", {configurable:true, enumerable:true, writable:true, value:function appendBuffer (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendBuffer", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "changeType", {configurable:true, enumerable:true, writable:true, value:function changeType (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "changeType", arguments)}});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "remove", {configurable:true, enumerable:true, writable:true, value:function remove (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "remove", arguments)}});

// DOMStringList对象
DOMStringList = function DOMStringList(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(DOMStringList, "DOMStringList");
bodavm.toolsFunc.defineProperty(DOMStringList.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, DOMStringList.prototype, "DOMStringList", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DOMStringList.prototype, "contains", {configurable:true, enumerable:true, writable:true, value:function contains (){return bodavm.toolsFunc.dispatch(this, DOMStringList.prototype, "DOMStringList", "contains", arguments)}});
bodavm.toolsFunc.defineProperty(DOMStringList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, DOMStringList.prototype, "DOMStringList", "item", arguments)}});

// Headers对象
Headers = function Headers(){}
bodavm.toolsFunc.safeProto(Headers, "Headers");
bodavm.toolsFunc.defineProperty(Headers.prototype, "append", {configurable:true, enumerable:true, writable:true, value:function append (){return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "append", arguments)}});
bodavm.toolsFunc.defineProperty(Headers.prototype, "delete", {configurable:true, enumerable:true, writable:true, value:function  (){return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "delete", arguments)}});
bodavm.toolsFunc.defineProperty(Headers.prototype, "get", {configurable:true, enumerable:true, writable:true, value:function get (){return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "get", arguments)}});
bodavm.toolsFunc.defineProperty(Headers.prototype, "has", {configurable:true, enumerable:true, writable:true, value:function has (){return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "has", arguments)}});
bodavm.toolsFunc.defineProperty(Headers.prototype, "set", {configurable:true, enumerable:true, writable:true, value:function set (){return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "set", arguments)}});
bodavm.toolsFunc.defineProperty(Headers.prototype, "entries", {configurable:true, enumerable:true, writable:true, value:function entries (){return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "entries", arguments)}});
bodavm.toolsFunc.defineProperty(Headers.prototype, "forEach", {configurable:true, enumerable:true, writable:true, value:function forEach (){return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "forEach", arguments)}});
bodavm.toolsFunc.defineProperty(Headers.prototype, "keys", {configurable:true, enumerable:true, writable:true, value:function keys (){return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "keys", arguments)}});
bodavm.toolsFunc.defineProperty(Headers.prototype, "values", {configurable:true, enumerable:true, writable:true, value:function values (){return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "values", arguments)}});

// IDBObjectStore对象
IDBObjectStore = function IDBObjectStore(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(IDBObjectStore, "IDBObjectStore");
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "keyPath", {configurable:true, enumerable:true, get:function keyPath (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "keyPath_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "indexNames", {configurable:true, enumerable:true, get:function indexNames (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "indexNames_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "transaction", {configurable:true, enumerable:true, get:function transaction (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "transaction_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "autoIncrement", {configurable:true, enumerable:true, get:function autoIncrement (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "autoIncrement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "add", {configurable:true, enumerable:true, writable:true, value:function add (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "add", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "clear", {configurable:true, enumerable:true, writable:true, value:function clear (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "clear", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "count", {configurable:true, enumerable:true, writable:true, value:function count (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "count", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "createIndex", {configurable:true, enumerable:true, writable:true, value:function createIndex (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "createIndex", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "delete", {configurable:true, enumerable:true, writable:true, value:function (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "delete", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "deleteIndex", {configurable:true, enumerable:true, writable:true, value:function deleteIndex (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "deleteIndex", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "get", {configurable:true, enumerable:true, writable:true, value:function get (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "get", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "getAll", {configurable:true, enumerable:true, writable:true, value:function getAll (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "getAll", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "getAllKeys", {configurable:true, enumerable:true, writable:true, value:function getAllKeys (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "getAllKeys", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "getKey", {configurable:true, enumerable:true, writable:true, value:function getKey (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "getKey", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "index", {configurable:true, enumerable:true, writable:true, value:function index (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "index", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "openCursor", {configurable:true, enumerable:true, writable:true, value:function openCursor (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "openCursor", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "openKeyCursor", {configurable:true, enumerable:true, writable:true, value:function openKeyCursor (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "openKeyCursor", arguments)}});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "put", {configurable:true, enumerable:true, writable:true, value:function put (){return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "put", arguments)}});

// IDBTransaction对象
IDBTransaction = function IDBTransaction(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(IDBTransaction, "IDBTransaction");
IDBTransaction.prototype.__proto__=EventTarget.prototype;
IDBTransaction.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "objectStoreNames", {configurable:true, enumerable:true, get:function objectStoreNames (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "objectStoreNames_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "mode", {configurable:true, enumerable:true, get:function mode (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "mode_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "durability", {configurable:true, enumerable:true, get:function durability (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "durability_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "db", {configurable:true, enumerable:true, get:function db (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "db_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "error", {configurable:true, enumerable:true, get:function error (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "error_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "onabort", {configurable:true, enumerable:true, get:function onabort (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "onabort_get", arguments)}, set:function onabort (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "onabort_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "oncomplete", {configurable:true, enumerable:true, get:function oncomplete (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "oncomplete_get", arguments)}, set:function oncomplete (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "oncomplete_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "abort", {configurable:true, enumerable:true, writable:true, value:function abort (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "abort", arguments)}});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "commit", {configurable:true, enumerable:true, writable:true, value:function commit (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "commit", arguments)}});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "objectStore", {configurable:true, enumerable:true, writable:true, value:function objectStore (){return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "objectStore", arguments)}});

// IDBVersionChangeEvent对象
IDBVersionChangeEvent = function IDBVersionChangeEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'IDBVersionChangeEvent': 1 argument required, but only 0 present.")}
bodavm.toolsFunc.safeProto(IDBVersionChangeEvent, "IDBVersionChangeEvent");
IDBVersionChangeEvent.prototype.__proto__=Event.prototype;
IDBVersionChangeEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "oldVersion", {configurable:true, enumerable:true, get:function oldVersion (){return bodavm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "oldVersion_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "newVersion", {configurable:true, enumerable:true, get:function newVersion (){return bodavm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "newVersion_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "dataLoss", {configurable:true, enumerable:true, get:function dataLoss (){return bodavm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "dataLoss_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "dataLossMessage", {configurable:true, enumerable:true, get:function dataLossMessage (){return bodavm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "dataLossMessage_get", arguments)}, set:undefined});

// TextTrackList对象
TextTrackList = function TextTrackList(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(TextTrackList, "TextTrackList");
TextTrackList.prototype.__proto__=EventTarget.prototype;
TextTrackList.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "onaddtrack", {configurable:true, enumerable:true, get:function onaddtrack (){return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onaddtrack_get", arguments)}, set:function onaddtrack (){return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onaddtrack_set", arguments)}});
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "onremovetrack", {configurable:true, enumerable:true, get:function onremovetrack (){return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onremovetrack_get", arguments)}, set:function onremovetrack (){return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onremovetrack_set", arguments)}});
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "getTrackById", {configurable:true, enumerable:true, writable:true, value:function getTrackById (){return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "getTrackById", arguments)}});

// SpeechSynthesisUtterance对象
SpeechSynthesisUtterance = function SpeechSynthesisUtterance(){}
bodavm.toolsFunc.safeProto(SpeechSynthesisUtterance, "SpeechSynthesisUtterance");
SpeechSynthesisUtterance.prototype.__proto__=EventTarget.prototype;
SpeechSynthesisUtterance.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "text_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "lang", {configurable:true, enumerable:true, get:function lang (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "lang_get", arguments)}, set:function lang (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "lang_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "voice", {configurable:true, enumerable:true, get:function voice (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "voice_get", arguments)}, set:function voice (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "voice_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "volume", {configurable:true, enumerable:true, get:function volume (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "volume_get", arguments)}, set:function volume (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "volume_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "rate", {configurable:true, enumerable:true, get:function rate (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "rate_get", arguments)}, set:function rate (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "rate_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "pitch", {configurable:true, enumerable:true, get:function pitch (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "pitch_get", arguments)}, set:function pitch (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "pitch_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onstart", {configurable:true, enumerable:true, get:function onstart (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onstart_get", arguments)}, set:function onstart (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onend", {configurable:true, enumerable:true, get:function onend (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onend_get", arguments)}, set:function onend (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onend_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onpause", {configurable:true, enumerable:true, get:function onpause (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onpause_get", arguments)}, set:function onpause (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onpause_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onresume", {configurable:true, enumerable:true, get:function onresume (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onresume_get", arguments)}, set:function onresume (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onresume_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onmark", {configurable:true, enumerable:true, get:function onmark (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onmark_get", arguments)}, set:function onmark (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onmark_set", arguments)}});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onboundary", {configurable:true, enumerable:true, get:function onboundary (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onboundary_get", arguments)}, set:function onboundary (){return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onboundary_set", arguments)}});

// MediaEncryptedEvent对象
MediaEncryptedEvent = function MediaEncryptedEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaEncryptedEvent': 1 argument required, but only 0 present.")}
bodavm.toolsFunc.safeProto(MediaEncryptedEvent, "MediaEncryptedEvent");
MediaEncryptedEvent.prototype.__proto__=Event.prototype;
MediaEncryptedEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(MediaEncryptedEvent.prototype, "initDataType", {configurable:true, enumerable:true, get:function initDataType (){return bodavm.toolsFunc.dispatch(this, MediaEncryptedEvent.prototype, "MediaEncryptedEvent", "initDataType_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(MediaEncryptedEvent.prototype, "initData", {configurable:true, enumerable:true, get:function initData (){return bodavm.toolsFunc.dispatch(this, MediaEncryptedEvent.prototype, "MediaEncryptedEvent", "initData_get", arguments)}, set:undefined});

// MutationObserver对象
MutationObserver = function MutationObserver(){
    
    if(arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MutationObserver': 1 argument required, but only 0 present.")}

    }
bodavm.toolsFunc.safeProto(MutationObserver, "MutationObserver");
bodavm.toolsFunc.defineProperty(MutationObserver.prototype, "disconnect", {configurable:true, enumerable:true, writable:true, value:function disconnect (){return bodavm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserver", "disconnect", arguments)}});
bodavm.toolsFunc.defineProperty(MutationObserver.prototype, "observe", {configurable:true, enumerable:true, writable:true, value:function observe (){return bodavm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserver", "observe", arguments)}});
bodavm.toolsFunc.defineProperty(MutationObserver.prototype, "takeRecords", {configurable:true, enumerable:true, writable:true, value:function takeRecords (){return bodavm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserver", "takeRecords", arguments)}});

// NamedNodeMap对象
NamedNodeMap = function NamedNodeMap(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(NamedNodeMap, "NamedNodeMap");
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "getNamedItem", {configurable:true, enumerable:true, writable:true, value:function getNamedItem (){return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "getNamedItem", arguments)}});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "getNamedItemNS", {configurable:true, enumerable:true, writable:true, value:function getNamedItemNS (){return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "getNamedItemNS", arguments)}});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "item", arguments)}});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "removeNamedItem", {configurable:true, enumerable:true, writable:true, value:function removeNamedItem (){return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "removeNamedItem", arguments)}});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "removeNamedItemNS", {configurable:true, enumerable:true, writable:true, value:function removeNamedItemNS (){return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "removeNamedItemNS", arguments)}});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "setNamedItem", {configurable:true, enumerable:true, writable:true, value:function setNamedItem (){return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "setNamedItem", arguments)}});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "setNamedItemNS", {configurable:true, enumerable:true, writable:true, value:function setNamedItemNS (){return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "setNamedItemNS", arguments)}});

// NodeList对象
NodeList = function NodeList(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(NodeList, "NodeList");
bodavm.toolsFunc.defineProperty(NodeList.prototype, "entries", {configurable:true, enumerable:true, writable:true, value:function entries (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "entries", arguments)}});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "keys", {configurable:true, enumerable:true, writable:true, value:function keys (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "keys", arguments)}});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "values", {configurable:true, enumerable:true, writable:true, value:function values (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "values", arguments)}});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "forEach", {configurable:true, enumerable:true, writable:true, value:function forEach (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "forEach", arguments)}});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "item", arguments)}});



// OfflineAudioContext对象
OfflineAudioContext = function OfflineAudioContext(){
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OfflineAudioContext': 1 argument required, but only 0 present.")}
    }
    
bodavm.toolsFunc.safeProto(OfflineAudioContext, "OfflineAudioContext");
OfflineAudioContext.prototype.__proto__=BaseAudioContext.prototype;
OfflineAudioContext.__proto__=BaseAudioContext;
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "oncomplete", {configurable:true, enumerable:true, get:function oncomplete (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "oncomplete_get", arguments)}, set:function oncomplete (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "oncomplete_set", arguments)}});
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "resume", {configurable:true, enumerable:true, writable:true, value:function resume (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "resume", arguments)}});
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "startRendering", {configurable:true, enumerable:true, writable:true, value:function startRendering (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "startRendering", arguments)}});
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "suspend", {configurable:true, enumerable:true, writable:true, value:function suspend (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "suspend", arguments)}});

// Path2D对象
Path2D = function Path2D(){}
bodavm.toolsFunc.safeProto(Path2D, "Path2D");
bodavm.toolsFunc.defineProperty(Path2D.prototype, "addPath", {configurable:true, enumerable:true, writable:true, value:function addPath (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "addPath", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "roundRect", {configurable:true, enumerable:true, writable:true, value:function roundRect (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "roundRect", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "arc", {configurable:true, enumerable:true, writable:true, value:function arc (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "arc", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "arcTo", {configurable:true, enumerable:true, writable:true, value:function arcTo (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "arcTo", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "bezierCurveTo", {configurable:true, enumerable:true, writable:true, value:function bezierCurveTo (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "bezierCurveTo", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "closePath", {configurable:true, enumerable:true, writable:true, value:function closePath (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "closePath", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "ellipse", {configurable:true, enumerable:true, writable:true, value:function ellipse (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "ellipse", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "lineTo", {configurable:true, enumerable:true, writable:true, value:function lineTo (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "lineTo", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "moveTo", {configurable:true, enumerable:true, writable:true, value:function moveTo (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "moveTo", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "quadraticCurveTo", {configurable:true, enumerable:true, writable:true, value:function quadraticCurveTo (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "quadraticCurveTo", arguments)}});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "rect", {configurable:true, enumerable:true, writable:true, value:function rect (){return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "rect", arguments)}});

// Performance对象
Performance = function Performance(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Performance, "Performance");
Performance.prototype.__proto__=EventTarget.prototype;
Performance.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(Performance.prototype, "timeOrigin", {configurable:true, enumerable:true, get:function timeOrigin (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "timeOrigin_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Performance.prototype, "onresourcetimingbufferfull", {configurable:true, enumerable:true, get:function onresourcetimingbufferfull (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "onresourcetimingbufferfull_get", arguments)}, set:function onresourcetimingbufferfull (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "onresourcetimingbufferfull_set", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "clearMarks", {configurable:true, enumerable:true, writable:true, value:function clearMarks (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "clearMarks", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "clearMeasures", {configurable:true, enumerable:true, writable:true, value:function clearMeasures (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "clearMeasures", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "clearResourceTimings", {configurable:true, enumerable:true, writable:true, value:function clearResourceTimings (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "clearResourceTimings", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "getEntries", {configurable:true, enumerable:true, writable:true, value:function getEntries (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "getEntries", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "getEntriesByName", {configurable:true, enumerable:true, writable:true, value:function getEntriesByName (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "getEntriesByName", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "getEntriesByType", {configurable:true, enumerable:true, writable:true, value:function getEntriesByType (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "getEntriesByType", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "mark", {configurable:true, enumerable:true, writable:true, value:function mark (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "mark", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "measure", {configurable:true, enumerable:true, writable:true, value:function measure (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "measure", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "now", {configurable:true, enumerable:true, writable:true, value:function now (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "now", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "setResourceTimingBufferSize", {configurable:true, enumerable:true, writable:true, value:function setResourceTimingBufferSize (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "setResourceTimingBufferSize", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function toJSON (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "toJSON", arguments)}});
bodavm.toolsFunc.defineProperty(Performance.prototype, "timing", {configurable:true, enumerable:true, get:function timing (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "timing_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Performance.prototype, "navigation", {configurable:true, enumerable:true, get:function navigation (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "navigation_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Performance.prototype, "memory", {configurable:true, enumerable:true, get:function memory (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "memory_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Performance.prototype, "eventCounts", {configurable:true, enumerable:true, get:function eventCounts (){return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "eventCounts_get", arguments)}, set:undefined});
// performance对象
var performance = {}
performance.__proto__=Performance.prototype;

// ScreenOrientation对象
ScreenOrientation = function ScreenOrientation(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(ScreenOrientation, "ScreenOrientation");
ScreenOrientation.prototype.__proto__=EventTarget.prototype;
ScreenOrientation.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "angle", {configurable:true, enumerable:true, get:function angle (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "angle_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "type_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "lock", {configurable:true, enumerable:true, writable:true, value:function lock (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "lock", arguments)}});
bodavm.toolsFunc.defineProperty(ScreenOrientation.prototype, "unlock", {configurable:true, enumerable:true, writable:true, value:function unlock (){return bodavm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "unlock", arguments)}});

// PerformanceEntry对象
PerformanceEntry = function PerformanceEntry(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(PerformanceEntry, "PerformanceEntry");
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "name_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "entryType", {configurable:true, enumerable:true, get:function entryType (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "entryType_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "startTime", {configurable:true, enumerable:true, get:function startTime (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "startTime_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "duration", {configurable:true, enumerable:true, get:function duration (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "duration_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function toJSON (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "toJSON", arguments)}});

// PerformancePaintTiming对象
PerformancePaintTiming = function PerformancePaintTiming(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(PerformancePaintTiming, "PerformancePaintTiming");
PerformancePaintTiming.prototype.__proto__=PerformanceEntry.prototype;
PerformancePaintTiming.__proto__=PerformanceEntry;

// Permissions对象
Permissions = function Permissions(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Permissions, "Permissions");
bodavm.toolsFunc.defineProperty(Permissions.prototype, "query", {configurable:true, enumerable:true, writable:true, value:function query (){return bodavm.toolsFunc.dispatch(this, Permissions.prototype, "Permissions", "query", arguments)}});

// PermissionStatus对象
PermissionStatus = function PermissionStatus(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(PermissionStatus, "PermissionStatus");
PermissionStatus.prototype.__proto__=EventTarget.prototype;
PermissionStatus.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(PermissionStatus.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "name_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PermissionStatus.prototype, "state", {configurable:true, enumerable:true, get:function state (){return bodavm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "state_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PermissionStatus.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "onchange_set", arguments)}});

// Request对象
Request = function Request(){
    
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Request': 1 argument required, but only 0 present.")}

    }
bodavm.toolsFunc.safeProto(Request, "Request");
bodavm.toolsFunc.defineProperty(Request.prototype, "method", {configurable:true, enumerable:true, get:function method (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "method_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "url", {configurable:true, enumerable:true, get:function url (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "url_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "headers", {configurable:true, enumerable:true, get:function headers (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "headers_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "destination", {configurable:true, enumerable:true, get:function destination (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "destination_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "referrer", {configurable:true, enumerable:true, get:function referrer (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "referrer_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "referrerPolicy", {configurable:true, enumerable:true, get:function referrerPolicy (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "referrerPolicy_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "mode", {configurable:true, enumerable:true, get:function mode (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "mode_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "credentials", {configurable:true, enumerable:true, get:function credentials (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "credentials_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "cache", {configurable:true, enumerable:true, get:function cache (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "cache_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "redirect", {configurable:true, enumerable:true, get:function redirect (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "redirect_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "integrity", {configurable:true, enumerable:true, get:function integrity (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "integrity_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "keepalive", {configurable:true, enumerable:true, get:function keepalive (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "keepalive_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "signal", {configurable:true, enumerable:true, get:function signal (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "signal_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "isHistoryNavigation", {configurable:true, enumerable:true, get:function isHistoryNavigation (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "isHistoryNavigation_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "bodyUsed", {configurable:true, enumerable:true, get:function bodyUsed (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "bodyUsed_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Request.prototype, "arrayBuffer", {configurable:true, enumerable:true, writable:true, value:function arrayBuffer (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "arrayBuffer", arguments)}});
bodavm.toolsFunc.defineProperty(Request.prototype, "blob", {configurable:true, enumerable:true, writable:true, value:function blob (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "blob", arguments)}});
bodavm.toolsFunc.defineProperty(Request.prototype, "clone", {configurable:true, enumerable:true, writable:true, value:function clone (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "clone", arguments)}});
bodavm.toolsFunc.defineProperty(Request.prototype, "formData", {configurable:true, enumerable:true, writable:true, value:function formData (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "formData", arguments)}});
bodavm.toolsFunc.defineProperty(Request.prototype, "json", {configurable:true, enumerable:true, writable:true, value:function json (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "json", arguments)}});
bodavm.toolsFunc.defineProperty(Request.prototype, "text", {configurable:true, enumerable:true, writable:true, value:function text (){return bodavm.toolsFunc.dispatch(this, Request.prototype, "Request", "text", arguments)}});



// SVGElement对象
SVGElement = function SVGElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGElement, "SVGElement");
SVGElement.prototype.__proto__=Element.prototype;
SVGElement.__proto__=Element;
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "className", {configurable:true, enumerable:true, get:function className (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "className_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ownerSVGElement", {configurable:true, enumerable:true, get:function ownerSVGElement (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ownerSVGElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "viewportElement", {configurable:true, enumerable:true, get:function viewportElement (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "viewportElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onbeforexrselect", {configurable:true, enumerable:true, get:function onbeforexrselect (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforexrselect_get", arguments)}, set:function onbeforexrselect (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforexrselect_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onabort", {configurable:true, enumerable:true, get:function onabort (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onabort_get", arguments)}, set:function onabort (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onabort_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onblur", {configurable:true, enumerable:true, get:function onblur (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onblur_get", arguments)}, set:function onblur (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onblur_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncancel", {configurable:true, enumerable:true, get:function oncancel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncancel_get", arguments)}, set:function oncancel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncanplay", {configurable:true, enumerable:true, get:function oncanplay (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncanplay_get", arguments)}, set:function oncanplay (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncanplay_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncanplaythrough", {configurable:true, enumerable:true, get:function oncanplaythrough (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncanplaythrough_get", arguments)}, set:function oncanplaythrough (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncanplaythrough_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onclick", {configurable:true, enumerable:true, get:function onclick (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onclick_get", arguments)}, set:function onclick (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onclose", {configurable:true, enumerable:true, get:function onclose (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onclose_get", arguments)}, set:function onclose (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onclose_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncontextlost", {configurable:true, enumerable:true, get:function oncontextlost (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextlost_get", arguments)}, set:function oncontextlost (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextlost_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncontextmenu", {configurable:true, enumerable:true, get:function oncontextmenu (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextmenu_get", arguments)}, set:function oncontextmenu (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextmenu_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncontextrestored", {configurable:true, enumerable:true, get:function oncontextrestored (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextrestored_get", arguments)}, set:function oncontextrestored (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncontextrestored_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncuechange", {configurable:true, enumerable:true, get:function oncuechange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncuechange_get", arguments)}, set:function oncuechange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncuechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondblclick", {configurable:true, enumerable:true, get:function ondblclick (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondblclick_get", arguments)}, set:function ondblclick (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondblclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondrag", {configurable:true, enumerable:true, get:function ondrag (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondrag_get", arguments)}, set:function ondrag (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondrag_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragend", {configurable:true, enumerable:true, get:function ondragend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragend_get", arguments)}, set:function ondragend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragend_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragenter", {configurable:true, enumerable:true, get:function ondragenter (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragenter_get", arguments)}, set:function ondragenter (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragleave", {configurable:true, enumerable:true, get:function ondragleave (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragleave_get", arguments)}, set:function ondragleave (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragover", {configurable:true, enumerable:true, get:function ondragover (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragover_get", arguments)}, set:function ondragover (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragover_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondragstart", {configurable:true, enumerable:true, get:function ondragstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragstart_get", arguments)}, set:function ondragstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondragstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondrop", {configurable:true, enumerable:true, get:function ondrop (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondrop_get", arguments)}, set:function ondrop (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondrop_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ondurationchange", {configurable:true, enumerable:true, get:function ondurationchange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondurationchange_get", arguments)}, set:function ondurationchange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ondurationchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onemptied", {configurable:true, enumerable:true, get:function onemptied (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onemptied_get", arguments)}, set:function onemptied (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onemptied_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onended", {configurable:true, enumerable:true, get:function onended (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onended_get", arguments)}, set:function onended (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onended_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onfocus", {configurable:true, enumerable:true, get:function onfocus (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onfocus_get", arguments)}, set:function onfocus (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onfocus_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onformdata", {configurable:true, enumerable:true, get:function onformdata (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onformdata_get", arguments)}, set:function onformdata (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onformdata_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oninput", {configurable:true, enumerable:true, get:function oninput (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oninput_get", arguments)}, set:function oninput (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oninput_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oninvalid", {configurable:true, enumerable:true, get:function oninvalid (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oninvalid_get", arguments)}, set:function oninvalid (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oninvalid_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onkeydown", {configurable:true, enumerable:true, get:function onkeydown (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeydown_get", arguments)}, set:function onkeydown (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeydown_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onkeypress", {configurable:true, enumerable:true, get:function onkeypress (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeypress_get", arguments)}, set:function onkeypress (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeypress_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onkeyup", {configurable:true, enumerable:true, get:function onkeyup (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeyup_get", arguments)}, set:function onkeyup (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onkeyup_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onload", {configurable:true, enumerable:true, get:function onload (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onload_get", arguments)}, set:function onload (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onload_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onloadeddata", {configurable:true, enumerable:true, get:function onloadeddata (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadeddata_get", arguments)}, set:function onloadeddata (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadeddata_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onloadedmetadata", {configurable:true, enumerable:true, get:function onloadedmetadata (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadedmetadata_get", arguments)}, set:function onloadedmetadata (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadedmetadata_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onloadstart", {configurable:true, enumerable:true, get:function onloadstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadstart_get", arguments)}, set:function onloadstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onloadstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmousedown", {configurable:true, enumerable:true, get:function onmousedown (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousedown_get", arguments)}, set:function onmousedown (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousedown_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseenter", {configurable:true, enumerable:true, get:function onmouseenter (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseenter_get", arguments)}, set:function onmouseenter (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseleave", {configurable:true, enumerable:true, get:function onmouseleave (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseleave_get", arguments)}, set:function onmouseleave (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmousemove", {configurable:true, enumerable:true, get:function onmousemove (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousemove_get", arguments)}, set:function onmousemove (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousemove_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseout", {configurable:true, enumerable:true, get:function onmouseout (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseout_get", arguments)}, set:function onmouseout (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseout_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseover", {configurable:true, enumerable:true, get:function onmouseover (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseover_get", arguments)}, set:function onmouseover (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseover_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmouseup", {configurable:true, enumerable:true, get:function onmouseup (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseup_get", arguments)}, set:function onmouseup (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmouseup_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onmousewheel", {configurable:true, enumerable:true, get:function onmousewheel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousewheel_get", arguments)}, set:function onmousewheel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onmousewheel_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpause", {configurable:true, enumerable:true, get:function onpause (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpause_get", arguments)}, set:function onpause (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpause_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onplay", {configurable:true, enumerable:true, get:function onplay (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onplay_get", arguments)}, set:function onplay (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onplay_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onplaying", {configurable:true, enumerable:true, get:function onplaying (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onplaying_get", arguments)}, set:function onplaying (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onplaying_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onprogress", {configurable:true, enumerable:true, get:function onprogress (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onprogress_get", arguments)}, set:function onprogress (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onprogress_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onratechange", {configurable:true, enumerable:true, get:function onratechange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onratechange_get", arguments)}, set:function onratechange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onratechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onreset", {configurable:true, enumerable:true, get:function onreset (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onreset_get", arguments)}, set:function onreset (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onreset_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onresize", {configurable:true, enumerable:true, get:function onresize (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onresize_get", arguments)}, set:function onresize (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onresize_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onscroll", {configurable:true, enumerable:true, get:function onscroll (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onscroll_get", arguments)}, set:function onscroll (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onscroll_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onsecuritypolicyviolation", {configurable:true, enumerable:true, get:function onsecuritypolicyviolation (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsecuritypolicyviolation_get", arguments)}, set:function onsecuritypolicyviolation (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsecuritypolicyviolation_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onseeked", {configurable:true, enumerable:true, get:function onseeked (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onseeked_get", arguments)}, set:function onseeked (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onseeked_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onseeking", {configurable:true, enumerable:true, get:function onseeking (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onseeking_get", arguments)}, set:function onseeking (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onseeking_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onselect", {configurable:true, enumerable:true, get:function onselect (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselect_get", arguments)}, set:function onselect (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselect_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onslotchange", {configurable:true, enumerable:true, get:function onslotchange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onslotchange_get", arguments)}, set:function onslotchange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onslotchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onstalled", {configurable:true, enumerable:true, get:function onstalled (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onstalled_get", arguments)}, set:function onstalled (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onstalled_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onsubmit", {configurable:true, enumerable:true, get:function onsubmit (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsubmit_get", arguments)}, set:function onsubmit (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsubmit_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onsuspend", {configurable:true, enumerable:true, get:function onsuspend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsuspend_get", arguments)}, set:function onsuspend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onsuspend_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontimeupdate", {configurable:true, enumerable:true, get:function ontimeupdate (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontimeupdate_get", arguments)}, set:function ontimeupdate (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontimeupdate_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontoggle", {configurable:true, enumerable:true, get:function ontoggle (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontoggle_get", arguments)}, set:function ontoggle (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontoggle_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onvolumechange", {configurable:true, enumerable:true, get:function onvolumechange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onvolumechange_get", arguments)}, set:function onvolumechange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onvolumechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwaiting", {configurable:true, enumerable:true, get:function onwaiting (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwaiting_get", arguments)}, set:function onwaiting (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwaiting_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwebkitanimationend", {configurable:true, enumerable:true, get:function onwebkitanimationend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationend_get", arguments)}, set:function onwebkitanimationend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationend_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwebkitanimationiteration", {configurable:true, enumerable:true, get:function onwebkitanimationiteration (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationiteration_get", arguments)}, set:function onwebkitanimationiteration (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationiteration_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwebkitanimationstart", {configurable:true, enumerable:true, get:function onwebkitanimationstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationstart_get", arguments)}, set:function onwebkitanimationstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkitanimationstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwebkittransitionend", {configurable:true, enumerable:true, get:function onwebkittransitionend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkittransitionend_get", arguments)}, set:function onwebkittransitionend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwebkittransitionend_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onwheel", {configurable:true, enumerable:true, get:function onwheel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwheel_get", arguments)}, set:function onwheel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onwheel_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onauxclick", {configurable:true, enumerable:true, get:function onauxclick (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onauxclick_get", arguments)}, set:function onauxclick (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onauxclick_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ongotpointercapture", {configurable:true, enumerable:true, get:function ongotpointercapture (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ongotpointercapture_get", arguments)}, set:function ongotpointercapture (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ongotpointercapture_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onlostpointercapture", {configurable:true, enumerable:true, get:function onlostpointercapture (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onlostpointercapture_get", arguments)}, set:function onlostpointercapture (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onlostpointercapture_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerdown", {configurable:true, enumerable:true, get:function onpointerdown (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerdown_get", arguments)}, set:function onpointerdown (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerdown_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointermove", {configurable:true, enumerable:true, get:function onpointermove (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointermove_get", arguments)}, set:function onpointermove (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointermove_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerup", {configurable:true, enumerable:true, get:function onpointerup (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerup_get", arguments)}, set:function onpointerup (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerup_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointercancel", {configurable:true, enumerable:true, get:function onpointercancel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointercancel_get", arguments)}, set:function onpointercancel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointercancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerover", {configurable:true, enumerable:true, get:function onpointerover (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerover_get", arguments)}, set:function onpointerover (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerover_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerout", {configurable:true, enumerable:true, get:function onpointerout (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerout_get", arguments)}, set:function onpointerout (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerout_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerenter", {configurable:true, enumerable:true, get:function onpointerenter (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerenter_get", arguments)}, set:function onpointerenter (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerenter_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerleave", {configurable:true, enumerable:true, get:function onpointerleave (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerleave_get", arguments)}, set:function onpointerleave (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerleave_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onselectstart", {configurable:true, enumerable:true, get:function onselectstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselectstart_get", arguments)}, set:function onselectstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselectstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onselectionchange", {configurable:true, enumerable:true, get:function onselectionchange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselectionchange_get", arguments)}, set:function onselectionchange (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onselectionchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onanimationend", {configurable:true, enumerable:true, get:function onanimationend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationend_get", arguments)}, set:function onanimationend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationend_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onanimationiteration", {configurable:true, enumerable:true, get:function onanimationiteration (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationiteration_get", arguments)}, set:function onanimationiteration (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationiteration_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onanimationstart", {configurable:true, enumerable:true, get:function onanimationstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationstart_get", arguments)}, set:function onanimationstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onanimationstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontransitionrun", {configurable:true, enumerable:true, get:function ontransitionrun (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionrun_get", arguments)}, set:function ontransitionrun (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionrun_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontransitionstart", {configurable:true, enumerable:true, get:function ontransitionstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionstart_get", arguments)}, set:function ontransitionstart (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontransitionend", {configurable:true, enumerable:true, get:function ontransitionend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionend_get", arguments)}, set:function ontransitionend (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitionend_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "ontransitioncancel", {configurable:true, enumerable:true, get:function ontransitioncancel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitioncancel_get", arguments)}, set:function ontransitioncancel (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "ontransitioncancel_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncopy", {configurable:true, enumerable:true, get:function oncopy (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncopy_get", arguments)}, set:function oncopy (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncopy_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "oncut", {configurable:true, enumerable:true, get:function oncut (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncut_get", arguments)}, set:function oncut (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "oncut_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpaste", {configurable:true, enumerable:true, get:function onpaste (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpaste_get", arguments)}, set:function onpaste (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpaste_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "dataset", {configurable:true, enumerable:true, get:function dataset (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "dataset_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "nonce", {configurable:true, enumerable:true, get:function nonce (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "nonce_get", arguments)}, set:function nonce (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "nonce_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "autofocus", {configurable:true, enumerable:true, get:function autofocus (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "autofocus_get", arguments)}, set:function autofocus (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "autofocus_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "tabIndex", {configurable:true, enumerable:true, get:function tabIndex (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "tabIndex_get", arguments)}, set:function tabIndex (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "tabIndex_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "style", {configurable:true, enumerable:true, get:function style (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "style_get", arguments)}, set:function style (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "style_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "blur", {configurable:true, enumerable:true, writable:true, value:function blur (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "blur", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "focus", {configurable:true, enumerable:true, writable:true, value:function focus (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "focus", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onpointerrawupdate", {configurable:true, enumerable:true, get:function onpointerrawupdate (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerrawupdate_get", arguments)}, set:function onpointerrawupdate (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onpointerrawupdate_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGElement.prototype, "onbeforematch", {configurable:true, enumerable:true, get:function onbeforematch (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforematch_get", arguments)}, set:function onbeforematch (){return bodavm.toolsFunc.dispatch(this, SVGElement.prototype, "SVGElement", "onbeforematch_set", arguments)}});

// DeviceOrientationEvent对象
DeviceOrientationEvent = function DeviceOrientationEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceOrientationEvent': 1 argument required, but only 0 present.")}
bodavm.toolsFunc.safeProto(DeviceOrientationEvent, "DeviceOrientationEvent");
DeviceOrientationEvent.prototype.__proto__=Event.prototype;
DeviceOrientationEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "alpha", {configurable:true, enumerable:true, get:function alpha (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "alpha_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "beta", {configurable:true, enumerable:true, get:function beta (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "beta_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "gamma", {configurable:true, enumerable:true, get:function gamma (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "gamma_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "absolute", {configurable:true, enumerable:true, get:function absolute (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "absolute_get", arguments)}, set:undefined});

// PresentationConnectionCloseEvent对象
PresentationConnectionCloseEvent = function PresentationConnectionCloseEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationConnectionCloseEvent': 2 arguments required, but only 0 present.")}
bodavm.toolsFunc.safeProto(PresentationConnectionCloseEvent, "PresentationConnectionCloseEvent");
PresentationConnectionCloseEvent.prototype.__proto__=Event.prototype;
PresentationConnectionCloseEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(PresentationConnectionCloseEvent.prototype, "reason", {configurable:true, enumerable:true, get:function reason (){return bodavm.toolsFunc.dispatch(this, PresentationConnectionCloseEvent.prototype, "PresentationConnectionCloseEvent", "reason_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PresentationConnectionCloseEvent.prototype, "message", {configurable:true, enumerable:true, get:function message (){return bodavm.toolsFunc.dispatch(this, PresentationConnectionCloseEvent.prototype, "PresentationConnectionCloseEvent", "message_get", arguments)}, set:undefined});

// SVGGraphicsElement对象
SVGGraphicsElement = function SVGGraphicsElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGGraphicsElement, "SVGGraphicsElement");
SVGGraphicsElement.prototype.__proto__=SVGElement.prototype;
SVGGraphicsElement.__proto__=SVGElement;
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "transform", {configurable:true, enumerable:true, get:function transform (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "transform_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "nearestViewportElement", {configurable:true, enumerable:true, get:function nearestViewportElement (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "nearestViewportElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "farthestViewportElement", {configurable:true, enumerable:true, get:function farthestViewportElement (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "farthestViewportElement_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "requiredExtensions", {configurable:true, enumerable:true, get:function requiredExtensions (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "requiredExtensions_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "systemLanguage", {configurable:true, enumerable:true, get:function systemLanguage (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "systemLanguage_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "getBBox", {configurable:true, enumerable:true, writable:true, value:function getBBox (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "getBBox", arguments)}});
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "getCTM", {configurable:true, enumerable:true, writable:true, value:function getCTM (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "getCTM", arguments)}});
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "getScreenCTM", {configurable:true, enumerable:true, writable:true, value:function getScreenCTM (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "getScreenCTM", arguments)}});

// SVGGElement对象
SVGGElement = function SVGGElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGGElement, "SVGGElement");
SVGGElement.prototype.__proto__=SVGGraphicsElement.prototype;
SVGGElement.__proto__=SVGGraphicsElement;

// SVGPatternElement对象
SVGPatternElement = function SVGPatternElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGPatternElement, "SVGPatternElement");
SVGPatternElement.prototype.__proto__=SVGElement.prototype;
SVGPatternElement.__proto__=SVGElement;
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "patternUnits", {configurable:true, enumerable:true, get:function patternUnits (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "patternUnits_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "patternContentUnits", {configurable:true, enumerable:true, get:function patternContentUnits (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "patternContentUnits_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "patternTransform", {configurable:true, enumerable:true, get:function patternTransform (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "patternTransform_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "x", {configurable:true, enumerable:true, get:function x (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "x_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "y", {configurable:true, enumerable:true, get:function y (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "y_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "width_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "height_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "viewBox", {configurable:true, enumerable:true, get:function viewBox (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "viewBox_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "preserveAspectRatio", {configurable:true, enumerable:true, get:function preserveAspectRatio (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "preserveAspectRatio_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "href", {configurable:true, enumerable:true, get:function href (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "href_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "requiredExtensions", {configurable:true, enumerable:true, get:function requiredExtensions (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "requiredExtensions_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "systemLanguage", {configurable:true, enumerable:true, get:function systemLanguage (){return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "systemLanguage_get", arguments)}, set:undefined});

// SVGGeometryElement对象
SVGGeometryElement = function SVGGeometryElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGGeometryElement, "SVGGeometryElement");
SVGGeometryElement.prototype.__proto__=SVGGraphicsElement.prototype;
SVGGeometryElement.__proto__=SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "pathLength", {configurable:true, enumerable:true, get:function pathLength (){return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "pathLength_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "getPointAtLength", {configurable:true, enumerable:true, writable:true, value:function getPointAtLength (){return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "getPointAtLength", arguments)}});
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "getTotalLength", {configurable:true, enumerable:true, writable:true, value:function getTotalLength (){return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "getTotalLength", arguments)}});
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "isPointInFill", {configurable:true, enumerable:true, writable:true, value:function isPointInFill (){return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "isPointInFill", arguments)}});
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "isPointInStroke", {configurable:true, enumerable:true, writable:true, value:function isPointInStroke (){return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "isPointInStroke", arguments)}});

// SVGPathElement对象
SVGPathElement = function SVGPathElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGPathElement, "SVGPathElement");
SVGPathElement.prototype.__proto__=SVGGeometryElement.prototype;
SVGPathElement.__proto__=SVGGeometryElement;

// SVGSVGElement对象
SVGSVGElement = function SVGSVGElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGSVGElement, "SVGSVGElement");
SVGSVGElement.prototype.__proto__=SVGGraphicsElement.prototype;
SVGSVGElement.__proto__=SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGSVGElement, "SVG_ZOOMANDPAN_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(SVGSVGElement, "SVG_ZOOMANDPAN_DISABLE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(SVGSVGElement, "SVG_ZOOMANDPAN_MAGNIFY", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "x", {configurable:true, enumerable:true, get:function x (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "x_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "y", {configurable:true, enumerable:true, get:function y (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "y_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "width_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "height_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "currentScale", {configurable:true, enumerable:true, get:function currentScale (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "currentScale_get", arguments)}, set:function currentScale (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "currentScale_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "currentTranslate", {configurable:true, enumerable:true, get:function currentTranslate (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "currentTranslate_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "viewBox", {configurable:true, enumerable:true, get:function viewBox (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "viewBox_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "preserveAspectRatio", {configurable:true, enumerable:true, get:function preserveAspectRatio (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "preserveAspectRatio_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "zoomAndPan", {configurable:true, enumerable:true, get:function zoomAndPan (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "zoomAndPan_get", arguments)}, set:function zoomAndPan (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "zoomAndPan_set", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "SVG_ZOOMANDPAN_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "SVG_ZOOMANDPAN_DISABLE", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "SVG_ZOOMANDPAN_MAGNIFY", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "animationsPaused", {configurable:true, enumerable:true, writable:true, value:function animationsPaused (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "animationsPaused", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "checkEnclosure", {configurable:true, enumerable:true, writable:true, value:function checkEnclosure (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "checkEnclosure", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "checkIntersection", {configurable:true, enumerable:true, writable:true, value:function checkIntersection (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "checkIntersection", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGAngle", {configurable:true, enumerable:true, writable:true, value:function createSVGAngle (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGAngle", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGLength", {configurable:true, enumerable:true, writable:true, value:function createSVGLength (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGLength", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGMatrix", {configurable:true, enumerable:true, writable:true, value:function createSVGMatrix (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGMatrix", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGNumber", {configurable:true, enumerable:true, writable:true, value:function createSVGNumber (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGNumber", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGPoint", {configurable:true, enumerable:true, writable:true, value:function createSVGPoint (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGPoint", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGRect", {configurable:true, enumerable:true, writable:true, value:function createSVGRect (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGRect", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGTransform", {configurable:true, enumerable:true, writable:true, value:function createSVGTransform (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGTransform", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGTransformFromMatrix", {configurable:true, enumerable:true, writable:true, value:function createSVGTransformFromMatrix (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGTransformFromMatrix", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "deselectAll", {configurable:true, enumerable:true, writable:true, value:function deselectAll (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "deselectAll", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "forceRedraw", {configurable:true, enumerable:true, writable:true, value:function forceRedraw (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "forceRedraw", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "getCurrentTime", {configurable:true, enumerable:true, writable:true, value:function getCurrentTime (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "getCurrentTime", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "getElementById", {configurable:true, enumerable:true, writable:true, value:function getElementById (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "getElementById", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "getEnclosureList", {configurable:true, enumerable:true, writable:true, value:function getEnclosureList (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "getEnclosureList", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "getIntersectionList", {configurable:true, enumerable:true, writable:true, value:function getIntersectionList (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "getIntersectionList", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "pauseAnimations", {configurable:true, enumerable:true, writable:true, value:function pauseAnimations (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "pauseAnimations", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "setCurrentTime", {configurable:true, enumerable:true, writable:true, value:function setCurrentTime (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "setCurrentTime", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "suspendRedraw", {configurable:true, enumerable:true, writable:true, value:function suspendRedraw (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "suspendRedraw", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "unpauseAnimations", {configurable:true, enumerable:true, writable:true, value:function unpauseAnimations (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "unpauseAnimations", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "unsuspendRedraw", {configurable:true, enumerable:true, writable:true, value:function unsuspendRedraw (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "unsuspendRedraw", arguments)}});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "unsuspendRedrawAll", {configurable:true, enumerable:true, writable:true, value:function unsuspendRedrawAll (){return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "unsuspendRedrawAll", arguments)}});

// SVGSymbolElement对象
SVGSymbolElement = function SVGSymbolElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGSymbolElement, "SVGSymbolElement");
SVGSymbolElement.prototype.__proto__=SVGElement.prototype;
SVGSymbolElement.__proto__=SVGElement;
bodavm.toolsFunc.defineProperty(SVGSymbolElement.prototype, "viewBox", {configurable:true, enumerable:true, get:function viewBox (){return bodavm.toolsFunc.dispatch(this, SVGSymbolElement.prototype, "SVGSymbolElement", "viewBox_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGSymbolElement.prototype, "preserveAspectRatio", {configurable:true, enumerable:true, get:function preserveAspectRatio (){return bodavm.toolsFunc.dispatch(this, SVGSymbolElement.prototype, "SVGSymbolElement", "preserveAspectRatio_get", arguments)}, set:undefined});

// SVGUseElement对象
SVGUseElement = function SVGUseElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGUseElement, "SVGUseElement");
SVGUseElement.prototype.__proto__=SVGGraphicsElement.prototype;
SVGUseElement.__proto__=SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "x", {configurable:true, enumerable:true, get:function x (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "x_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "y", {configurable:true, enumerable:true, get:function y (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "y_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "width_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "height_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "href", {configurable:true, enumerable:true, get:function href (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "href_get", arguments)}, set:undefined});

// WebGLShader对象
WebGLShader = function WebGLShader(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(WebGLShader, "WebGLShader");

// WebGLShaderPrecisionFormat对象
WebGLShaderPrecisionFormat = function WebGLShaderPrecisionFormat(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(WebGLShaderPrecisionFormat, "WebGLShaderPrecisionFormat");
bodavm.toolsFunc.defineProperty(WebGLShaderPrecisionFormat.prototype, "rangeMin", {configurable:true, enumerable:true, get:function rangeMin (){return bodavm.toolsFunc.dispatch(this, WebGLShaderPrecisionFormat.prototype, "WebGLShaderPrecisionFormat", "rangeMin_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebGLShaderPrecisionFormat.prototype, "rangeMax", {configurable:true, enumerable:true, get:function rangeMax (){return bodavm.toolsFunc.dispatch(this, WebGLShaderPrecisionFormat.prototype, "WebGLShaderPrecisionFormat", "rangeMax_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(WebGLShaderPrecisionFormat.prototype, "precision", {configurable:true, enumerable:true, get:function precision (){return bodavm.toolsFunc.dispatch(this, WebGLShaderPrecisionFormat.prototype, "WebGLShaderPrecisionFormat", "precision_get", arguments)}, set:undefined});

// RTCPeerConnection对象
RTCPeerConnection = function RTCPeerConnection(){}
bodavm.toolsFunc.safeProto(RTCPeerConnection, "RTCPeerConnection");
RTCPeerConnection.prototype.__proto__=EventTarget.prototype;
RTCPeerConnection.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(RTCPeerConnection, "generateCertificate", {configurable:true, enumerable:true, writable:true, value:function generateCertificate (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection, "RTCPeerConnection", "generateCertificate", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "localDescription", {configurable:true, enumerable:true, get:function localDescription (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "localDescription_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "currentLocalDescription", {configurable:true, enumerable:true, get:function currentLocalDescription (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "currentLocalDescription_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "pendingLocalDescription", {configurable:true, enumerable:true, get:function pendingLocalDescription (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "pendingLocalDescription_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "remoteDescription", {configurable:true, enumerable:true, get:function remoteDescription (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "remoteDescription_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "currentRemoteDescription", {configurable:true, enumerable:true, get:function currentRemoteDescription (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "currentRemoteDescription_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "pendingRemoteDescription", {configurable:true, enumerable:true, get:function pendingRemoteDescription (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "pendingRemoteDescription_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "signalingState", {configurable:true, enumerable:true, get:function signalingState (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "signalingState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "iceGatheringState", {configurable:true, enumerable:true, get:function iceGatheringState (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "iceGatheringState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "iceConnectionState", {configurable:true, enumerable:true, get:function iceConnectionState (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "iceConnectionState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "connectionState", {configurable:true, enumerable:true, get:function connectionState (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "connectionState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "canTrickleIceCandidates", {configurable:true, enumerable:true, get:function canTrickleIceCandidates (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "canTrickleIceCandidates_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onnegotiationneeded", {configurable:true, enumerable:true, get:function onnegotiationneeded (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onnegotiationneeded_get", arguments)}, set:function onnegotiationneeded (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onnegotiationneeded_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onicecandidate", {configurable:true, enumerable:true, get:function onicecandidate (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicecandidate_get", arguments)}, set:function onicecandidate (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicecandidate_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onsignalingstatechange", {configurable:true, enumerable:true, get:function onsignalingstatechange (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onsignalingstatechange_get", arguments)}, set:function onsignalingstatechange (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onsignalingstatechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "oniceconnectionstatechange", {configurable:true, enumerable:true, get:function oniceconnectionstatechange (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "oniceconnectionstatechange_get", arguments)}, set:function oniceconnectionstatechange (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "oniceconnectionstatechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onconnectionstatechange", {configurable:true, enumerable:true, get:function onconnectionstatechange (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onconnectionstatechange_get", arguments)}, set:function onconnectionstatechange (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onconnectionstatechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onicegatheringstatechange", {configurable:true, enumerable:true, get:function onicegatheringstatechange (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicegatheringstatechange_get", arguments)}, set:function onicegatheringstatechange (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicegatheringstatechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onicecandidateerror", {configurable:true, enumerable:true, get:function onicecandidateerror (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicecandidateerror_get", arguments)}, set:function onicecandidateerror (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicecandidateerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "ontrack", {configurable:true, enumerable:true, get:function ontrack (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "ontrack_get", arguments)}, set:function ontrack (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "ontrack_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "sctp", {configurable:true, enumerable:true, get:function sctp (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "sctp_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "ondatachannel", {configurable:true, enumerable:true, get:function ondatachannel (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "ondatachannel_get", arguments)}, set:function ondatachannel (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "ondatachannel_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onaddstream", {configurable:true, enumerable:true, get:function onaddstream (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onaddstream_get", arguments)}, set:function onaddstream (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onaddstream_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onremovestream", {configurable:true, enumerable:true, get:function onremovestream (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onremovestream_get", arguments)}, set:function onremovestream (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onremovestream_set", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addIceCandidate", {configurable:true, enumerable:true, writable:true, value:function addIceCandidate (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "addIceCandidate", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addStream", {configurable:true, enumerable:true, writable:true, value:function addStream (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "addStream", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addTrack", {configurable:true, enumerable:true, writable:true, value:function addTrack (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "addTrack", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addTransceiver", {configurable:true, enumerable:true, writable:true, value:function addTransceiver (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "addTransceiver", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "close", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createAnswer", {configurable:true, enumerable:true, writable:true, value:function createAnswer (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "createAnswer", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createDTMFSender", {configurable:true, enumerable:true, writable:true, value:function createDTMFSender (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "createDTMFSender", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createDataChannel", {configurable:true, enumerable:true, writable:true, value:function createDataChannel (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "createDataChannel", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createOffer", {configurable:true, enumerable:true, writable:true, value:function createOffer (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "createOffer", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getConfiguration", {configurable:true, enumerable:true, writable:true, value:function getConfiguration (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getConfiguration", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getLocalStreams", {configurable:true, enumerable:true, writable:true, value:function getLocalStreams (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getLocalStreams", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getReceivers", {configurable:true, enumerable:true, writable:true, value:function getReceivers (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getReceivers", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getRemoteStreams", {configurable:true, enumerable:true, writable:true, value:function getRemoteStreams (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getRemoteStreams", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getSenders", {configurable:true, enumerable:true, writable:true, value:function getSenders (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getSenders", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getStats", {configurable:true, enumerable:true, writable:true, value:function getStats (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getStats", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getTransceivers", {configurable:true, enumerable:true, writable:true, value:function getTransceivers (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getTransceivers", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "removeStream", {configurable:true, enumerable:true, writable:true, value:function removeStream (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "removeStream", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "removeTrack", {configurable:true, enumerable:true, writable:true, value:function removeTrack (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "removeTrack", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "restartIce", {configurable:true, enumerable:true, writable:true, value:function restartIce (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "restartIce", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "setConfiguration", {configurable:true, enumerable:true, writable:true, value:function setConfiguration (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "setConfiguration", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "setLocalDescription", {configurable:true, enumerable:true, writable:true, value:function setLocalDescription (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "setLocalDescription", arguments)}});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "setRemoteDescription", {configurable:true, enumerable:true, writable:true, value:function setRemoteDescription (){return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "setRemoteDescription", arguments)}});

// WebGLBuffer对象
WebGLBuffer = function WebGLBuffer(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(WebGLBuffer, "WebGLBuffer");

// WebGLProgram对象
WebGLProgram = function WebGLProgram(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(WebGLProgram, "WebGLProgram");

// CSS对象
var CSS = {}
bodavm.toolsFunc.defineProperty(CSS, "Hz", {configurable:true, enumerable:true, writable:true, value:function Hz (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "Hz", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "Q", {configurable:true, enumerable:true, writable:true, value:function Q (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "Q", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "ch", {configurable:true, enumerable:true, writable:true, value:function ch (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "ch", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "cm", {configurable:true, enumerable:true, writable:true, value:function cm (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "cm", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "deg", {configurable:true, enumerable:true, writable:true, value:function deg (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "deg", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "dpcm", {configurable:true, enumerable:true, writable:true, value:function dpcm (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "dpcm", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "dpi", {configurable:true, enumerable:true, writable:true, value:function dpi (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "dpi", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "dppx", {configurable:true, enumerable:true, writable:true, value:function dppx (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "dppx", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "em", {configurable:true, enumerable:true, writable:true, value:function em (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "em", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "escape", {configurable:true, enumerable:true, writable:true, value:function escape (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "escape", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "ex", {configurable:true, enumerable:true, writable:true, value:function ex (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "ex", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "fr", {configurable:true, enumerable:true, writable:true, value:function fr (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "fr", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "grad", {configurable:true, enumerable:true, writable:true, value:function grad (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "grad", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "in", {configurable:true, enumerable:true, writable:true, value:function  (){ return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "in", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "kHz", {configurable:true, enumerable:true, writable:true, value:function kHz (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "kHz", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "mm", {configurable:true, enumerable:true, writable:true, value:function mm (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "mm", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "ms", {configurable:true, enumerable:true, writable:true, value:function ms (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "ms", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "number", {configurable:true, enumerable:true, writable:true, value:function number (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "number", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "pc", {configurable:true, enumerable:true, writable:true, value:function pc (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "pc", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "percent", {configurable:true, enumerable:true, writable:true, value:function percent (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "percent", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "pt", {configurable:true, enumerable:true, writable:true, value:function pt (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "pt", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "px", {configurable:true, enumerable:true, writable:true, value:function px (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "px", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "rad", {configurable:true, enumerable:true, writable:true, value:function rad (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "rad", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "registerProperty", {configurable:true, enumerable:true, writable:true, value:function registerProperty (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "registerProperty", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "rem", {configurable:true, enumerable:true, writable:true, value:function rem (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "rem", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "s", {configurable:true, enumerable:true, writable:true, value:function s (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "s", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "supports", {configurable:true, enumerable:true, writable:true, value:function supports (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "supports", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "turn", {configurable:true, enumerable:true, writable:true, value:function turn (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "turn", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "vh", {configurable:true, enumerable:true, writable:true, value:function vh (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "vh", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "vmax", {configurable:true, enumerable:true, writable:true, value:function vmax (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "vmax", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "vmin", {configurable:true, enumerable:true, writable:true, value:function vmin (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "vmin", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "vw", {configurable:true, enumerable:true, writable:true, value:function vw (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "vw", arguments)}});
bodavm.toolsFunc.defineProperty(CSS, "paintWorklet", {configurable:true, enumerable:true, get:function paintWorklet (){return bodavm.toolsFunc.dispatch(this, CSS, "CSS", "paintWorklet_get", arguments)}, set:undefined});

//Navigator对象
Navigator=function Navigator(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(Navigator,"Navigator");
bodavm.toolsFunc.defineProperty(Navigator.prototype,"vendorSub",{configurable:true, enumerable:true, get:function vendorSub () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","vendorSub_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"productSub",{configurable:true, enumerable:true, get:function productSub () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","productSub_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"vendor",{configurable:true, enumerable:true, get:function vendor () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","vendor_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"maxTouchPoints",{configurable:true, enumerable:true, get:function maxTouchPoints () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","maxTouchPoints_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"userActivation",{configurable:true, enumerable:true, get:function userActivation () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","userActivation_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"doNotTrack",{configurable:true, enumerable:true, get:function doNotTrack () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","doNotTrack_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"geolocation",{configurable:true, enumerable:true, get:function geolocation () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","geolocation_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"connection",{configurable:true, enumerable:true, get:function connection () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","connection_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"plugins",{configurable:true, enumerable:true, get:function plugins () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","plugins_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"mimeTypes",{configurable:true, enumerable:true, get:function mimeTypes () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mimeTypes_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"pdfViewerEnabled",{configurable:true, enumerable:true, get:function pdfViewerEnabled () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","pdfViewerEnabled_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"webkitTemporaryStorage",{configurable:true, enumerable:true, get:function webkitTemporaryStorage () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","webkitTemporaryStorage_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"webkitPersistentStorage",{configurable:true, enumerable:true, get:function webkitPersistentStorage () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","webkitPersistentStorage_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"hardwareConcurrency",{configurable:true, enumerable:true, get:function hardwareConcurrency () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","hardwareConcurrency_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"cookieEnabled",{configurable:true, enumerable:true, get:function cookieEnabled () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","cookieEnabled_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"appCodeName",{configurable:true, enumerable:true, get:function appCodeName () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","appCodeName_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"appName",{configurable:true, enumerable:true, get:function appName () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","appName_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"appVersion",{configurable:true, enumerable:true, get:function appVersion () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","appVersion_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"platform",{configurable:true, enumerable:true, get:function platform () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","platform_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"product",{configurable:true, enumerable:true, get:function product () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","product_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"userAgent",{configurable:true, enumerable:true, get:function userAgent () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","userAgent_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"language",{configurable:true, enumerable:true, get:function language () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","language_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"languages",{configurable:true, enumerable:true, get:function languages () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","languages_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"onLine",{configurable:true, enumerable:true, get:function onLine () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","onLine_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"webdriver",{configurable:true, enumerable:true, get:function webdriver () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","webdriver_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"getBattery",{configurable:true, enumerable:true, writable:true, value:function getBattery() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","getBattery",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"getGamepads",{configurable:true, enumerable:true, writable:true, value:function getGamepads() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","getGamepads",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"javaEnabled",{configurable:true, enumerable:true, writable:true, value:function javaEnabled() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","javaEnabled",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"sendBeacon",{configurable:true, enumerable:true, writable:true, value:function sendBeacon() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","sendBeacon",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"vibrate",{configurable:true, enumerable:true, writable:true, value:function vibrate() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","vibrate",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"scheduling",{configurable:true, enumerable:true, get:function scheduling () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","scheduling_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"bluetooth",{configurable:true, enumerable:true, get:function bluetooth () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","bluetooth_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"clipboard",{configurable:true, enumerable:true, get:function clipboard () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","clipboard_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"credentials",{configurable:true, enumerable:true, get:function credentials () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","credentials_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"keyboard",{configurable:true, enumerable:true, get:function keyboard () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","keyboard_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"managed",{configurable:true, enumerable:true, get:function managed () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","managed_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"mediaDevices",{configurable:true, enumerable:true, get:function mediaDevices () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mediaDevices_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"storage",{configurable:true, enumerable:true, get:function storage () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","storage_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"serviceWorker",{configurable:true, enumerable:true, get:function serviceWorker () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","serviceWorker_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"wakeLock",{configurable:true, enumerable:true, get:function wakeLock () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","wakeLock_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"deviceMemory",{configurable:true, enumerable:true, get:function deviceMemory () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","deviceMemory_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"ink",{configurable:true, enumerable:true, get:function ink () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","ink_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"hid",{configurable:true, enumerable:true, get:function hid () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","hid_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"locks",{configurable:true, enumerable:true, get:function locks () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","locks_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"mediaCapabilities",{configurable:true, enumerable:true, get:function mediaCapabilities () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mediaCapabilities_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"mediaSession",{configurable:true, enumerable:true, get:function mediaSession () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mediaSession_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"permissions",{configurable:true, enumerable:true, get:function permissions () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","permissions_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"presentation",{configurable:true, enumerable:true, get:function presentation () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","presentation_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"serial",{configurable:true, enumerable:true, get:function serial () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","serial_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"virtualKeyboard",{configurable:true, enumerable:true, get:function virtualKeyboard () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","virtualKeyboard_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"usb",{configurable:true, enumerable:true, get:function usb () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","usb_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"xr",{configurable:true, enumerable:true, get:function xr () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","xr_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"userAgentData",{configurable:true, enumerable:true, get:function userAgentData () {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","userAgentData_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"canShare",{configurable:true, enumerable:true, writable:true, value:function canShare() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","canShare",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"share",{configurable:true, enumerable:true, writable:true, value:function share() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","share",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"clearAppBadge",{configurable:true, enumerable:true, writable:true, value:function clearAppBadge() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","clearAppBadge",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"setAppBadge",{configurable:true, enumerable:true, writable:true, value:function setAppBadge() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","setAppBadge",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"getInstalledRelatedApps",{configurable:true, enumerable:true, writable:true, value:function getInstalledRelatedApps() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","getInstalledRelatedApps",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"getUserMedia",{configurable:true, enumerable:true, writable:true, value:function getUserMedia() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","getUserMedia",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"requestMIDIAccess",{configurable:true, enumerable:true, writable:true, value:function requestMIDIAccess() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","requestMIDIAccess",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"requestMediaKeySystemAccess",{configurable:true, enumerable:true, writable:true, value:function requestMediaKeySystemAccess() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","requestMediaKeySystemAccess",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"webkitGetUserMedia",{configurable:true, enumerable:true, writable:true, value:function webkitGetUserMedia() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","webkitGetUserMedia",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"registerProtocolHandler",{configurable:true, enumerable:true, writable:true, value:function registerProtocolHandler() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","registerProtocolHandler",arguments)}});
bodavm.toolsFunc.defineProperty(Navigator.prototype,"unregisterProtocolHandler",{configurable:true, enumerable:true, writable:true, value:function unregisterProtocolHandler() {return bodavm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","unregisterProtocolHandler",arguments)}});


// navigator对象
var navigator = {}
navigator.__proto__=Navigator.prototype;
// clientInformation对象
var clientInformation = {}
clientInformation.__proto__=Navigator.prototype;

// BatteryManager对象
BatteryManager = function BatteryManager(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(BatteryManager, "BatteryManager");
BatteryManager.prototype.__proto__=EventTarget.prototype;
BatteryManager.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "charging", {configurable:true, enumerable:true, get:function charging (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "charging_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "chargingTime", {configurable:true, enumerable:true, get:function chargingTime (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "chargingTime_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "dischargingTime", {configurable:true, enumerable:true, get:function dischargingTime (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "dischargingTime_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "level", {configurable:true, enumerable:true, get:function level (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "level_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingchange", {configurable:true, enumerable:true, get:function onchargingchange (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onchargingchange_get", arguments)}, set:function onchargingchange (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onchargingchange_set", arguments)}});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingtimechange", {configurable:true, enumerable:true, get:function onchargingtimechange (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onchargingtimechange_get", arguments)}, set:function onchargingtimechange (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onchargingtimechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "ondischargingtimechange", {configurable:true, enumerable:true, get:function ondischargingtimechange (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "ondischargingtimechange_get", arguments)}, set:function ondischargingtimechange (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "ondischargingtimechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(BatteryManager.prototype, "onlevelchange", {configurable:true, enumerable:true, get:function onlevelchange (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onlevelchange_get", arguments)}, set:function onlevelchange (){return bodavm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManager", "onlevelchange_set", arguments)}});

//Plugin对象
Plugin=function Plugin(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(Plugin,"Plugin");
bodavm.toolsFunc.defineProperty(Plugin.prototype,"name",{configurable:true, enumerable:true, get:function name () {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","name_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"filename",{configurable:true, enumerable:true, get:function filename () {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","filename_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"description",{configurable:true, enumerable:true, get:function description () {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","description_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"length",{configurable:true, enumerable:true, get:function length () {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","length_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"item",{configurable:true, enumerable:true, writable:true, value:function item() {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","item",arguments)}});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"namedItem",{configurable:true, enumerable:true, writable:true, value:function namedItem() {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","namedItem",arguments)}});

//PluginArray对象
PluginArray=function PluginArray(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(PluginArray,"PluginArray");
bodavm.toolsFunc.defineProperty(PluginArray.prototype,"length",{configurable:true, enumerable:true, get:function length () {return bodavm.toolsFunc.dispatch(this,PluginArray.prototype,"PluginArray","length_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(PluginArray.prototype,"item",{configurable:true, enumerable:true, writable:true, value:function item() {return bodavm.toolsFunc.dispatch(this,PluginArray.prototype,"PluginArray","item",arguments)}});
bodavm.toolsFunc.defineProperty(PluginArray.prototype,"namedItem",{configurable:true, enumerable:true, writable:true, value:function namedItem() {return bodavm.toolsFunc.dispatch(this,PluginArray.prototype,"PluginArray","namedItem",arguments)}});
bodavm.toolsFunc.defineProperty(PluginArray.prototype,"refresh",{configurable:true, enumerable:true, writable:true, value:function refresh() {return bodavm.toolsFunc.dispatch(this,PluginArray.prototype,"PluginArray","refresh",arguments)}});

//MimeType对象
MimeType=function MimeType(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(MimeType,"MimeType");
bodavm.toolsFunc.defineProperty(MimeType.prototype,"type",{configurable:true, enumerable:true, get:function type () {return bodavm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","type_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(MimeType.prototype,"suffixes",{configurable:true, enumerable:true, get:function suffixes () {return bodavm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","suffixes_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(MimeType.prototype,"description",{configurable:true, enumerable:true, get:function description () {return bodavm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","description_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(MimeType.prototype,"enabledPlugin",{configurable:true, enumerable:true, get:function enabledPlugin () {return bodavm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","enabledPlugin_get",arguments)},set:undefined});

//MimeTypeArray对象
MimeTypeArray=function MimeTypeArray(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(MimeTypeArray,"MimeTypeArray");
bodavm.toolsFunc.defineProperty(MimeTypeArray.prototype,"length",{configurable:true, enumerable:true, get:function length () {return bodavm.toolsFunc.dispatch(this,MimeTypeArray.prototype,"MimeTypeArray","length_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(MimeTypeArray.prototype,"item",{configurable:true, enumerable:true, writable:true, value:function item() {return bodavm.toolsFunc.dispatch(this,MimeTypeArray.prototype,"MimeTypeArray","item",arguments)}});
bodavm.toolsFunc.defineProperty(MimeTypeArray.prototype,"namedItem",{configurable:true, enumerable:true, writable:true, value:function namedItem() {return bodavm.toolsFunc.dispatch(this,MimeTypeArray.prototype,"MimeTypeArray","namedItem",arguments)}});

// XMLHttpRequestEventTarget对象
XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(XMLHttpRequestEventTarget, "XMLHttpRequestEventTarget");
XMLHttpRequestEventTarget.prototype.__proto__=EventTarget.prototype;
XMLHttpRequestEventTarget.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadstart", {configurable:true, enumerable:true, get:function onloadstart (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadstart_get", arguments)}, set:function onloadstart (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadstart_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onprogress", {configurable:true, enumerable:true, get:function onprogress (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onprogress_get", arguments)}, set:function onprogress (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onprogress_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onabort", {configurable:true, enumerable:true, get:function onabort (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onabort_get", arguments)}, set:function onabort (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onabort_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onerror", {configurable:true, enumerable:true, get:function onerror (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onerror_get", arguments)}, set:function onerror (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onerror_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onload", {configurable:true, enumerable:true, get:function onload (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onload_get", arguments)}, set:function onload (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onload_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "ontimeout", {configurable:true, enumerable:true, get:function ontimeout (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "ontimeout_get", arguments)}, set:function ontimeout (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "ontimeout_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadend", {configurable:true, enumerable:true, get:function onloadend (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadend_get", arguments)}, set:function onloadend (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadend_set", arguments)}});

// XMLHttpRequest对象
XMLHttpRequest = function XMLHttpRequest(){}
bodavm.toolsFunc.safeProto(XMLHttpRequest, "XMLHttpRequest");
XMLHttpRequest.prototype.__proto__=XMLHttpRequestEventTarget.prototype;
XMLHttpRequest.__proto__=XMLHttpRequestEventTarget;
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "UNSENT", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "OPENED", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "HEADERS_RECEIVED", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "LOADING", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(XMLHttpRequest, "DONE", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "onreadystatechange", {configurable:true, enumerable:true, get:function onreadystatechange (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "onreadystatechange_get", arguments)}, set:function onreadystatechange (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "onreadystatechange_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "readyState", {configurable:true, enumerable:true, get:function readyState (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "readyState_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "timeout", {configurable:true, enumerable:true, get:function timeout (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "timeout_get", arguments)}, set:function timeout (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "timeout_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "withCredentials", {configurable:true, enumerable:true, get:function withCredentials (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "withCredentials_get", arguments)}, set:function withCredentials (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "withCredentials_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "upload", {configurable:true, enumerable:true, get:function upload (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "upload_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseURL", {configurable:true, enumerable:true, get:function responseURL (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseURL_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "status", {configurable:true, enumerable:true, get:function status (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "status_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "statusText", {configurable:true, enumerable:true, get:function statusText (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "statusText_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseType", {configurable:true, enumerable:true, get:function responseType (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseType_get", arguments)}, set:function responseType (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseType_set", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "response", {configurable:true, enumerable:true, get:function response (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "response_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseText", {configurable:true, enumerable:true, get:function responseText (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseText_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseXML", {configurable:true, enumerable:true, get:function responseXML (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "responseXML_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "UNSENT", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "OPENED", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "HEADERS_RECEIVED", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "LOADING", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "DONE", {configurable:false, enumerable:true, writable:false, value:4});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "abort", {configurable:true, enumerable:true, writable:true, value:function abort (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "abort", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getAllResponseHeaders", {configurable:true, enumerable:true, writable:true, value:function getAllResponseHeaders (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "getAllResponseHeaders", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getResponseHeader", {configurable:true, enumerable:true, writable:true, value:function getResponseHeader (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "getResponseHeader", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "open", {configurable:true, enumerable:true, writable:true, value:function open (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "open", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "overrideMimeType", {configurable:true, enumerable:true, writable:true, value:function overrideMimeType (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "overrideMimeType", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "send", {configurable:true, enumerable:true, writable:true, value:function send (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "send", arguments)}});
bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "setRequestHeader", {configurable:true, enumerable:true, writable:true, value:function setRequestHeader (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "setRequestHeader", arguments)}});



// 删除浏览器中不存在的对象
delete global;
delete GLOBAL;
delete VMError;
delete Buffer;
delete process;
delete root;
delete WindowProperties;
delete globalThis[Symbol.toStringTag];
window= globalThis;
globalThis.__proto__=Window.prototype




bodavm.toolsFunc.defineProperty(window, "atob", {
    configurable: true, enumerable: true, writable: true,
    value: function atob(str) {
        return bodavm.toolsFunc.base64.base64decode(str);
    }
});
bodavm.toolsFunc.defineProperty(window, "btoa", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function btoa(str) {
        return bodavm.toolsFunc.base64.base64encode(str);
    }
});


bodavm.toolsFunc.defineProperty(window, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, window, "window", "name_get", arguments)}, set:function name (){return bodavm.toolsFunc.dispatch(this, window, "window", "name_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "top", { configurable: false, enumerable: true, get: function top() { return bodavm.toolsFunc.dispatch(this, window, "window", "top_get", arguments,) }, set: undefined });
bodavm.toolsFunc.defineProperty(window, "location", { configurable: false })
bodavm.toolsFunc.defineProperty(window, "self", { configurable: true, enumerable: true, get: function self() { return bodavm.toolsFunc.dispatch(this, window, "window", "self_get", arguments,) }, set: function self() { return bodavm.toolsFunc.dispatch(this, window, "window", "self_set", arguments) }, });
bodavm.toolsFunc.defineProperty(window, "setInterval", { configurable: true, enumerable: true, writable: true, value: function setInterval() { return bodavm.toolsFunc.dispatch(this, window, "window", "setInterval", arguments) } });
bodavm.toolsFunc.defineProperty(window, "setTimeout", { configurable: true, enumerable: true, writable: true, value: function setTimeout() { return bodavm.toolsFunc.dispatch(this, window, "window", "setTimeout", arguments) } });
bodavm.toolsFunc.defineProperty(window, "clearTimeout", { configurable: true, enumerable: true, writable: true, value: function clearTimeout() { return bodavm.toolsFunc.dispatch(this, window, "window", "clearTimeout", arguments) } });
bodavm.toolsFunc.defineProperty(window, "clearInterval", { configurable: true, enumerable: true, writable: true, value: function clearInterval() { return bodavm.toolsFunc.dispatch(this, window, "window", "clearInterval", arguments) } });
bodavm.toolsFunc.defineProperty(window, "frames", { configurable: true, enumerable: true, get: function frames() { return bodavm.toolsFunc.dispatch(this, window, "window", "frames_get", arguments) }, set: function frames() { return bodavm.toolsFunc.dispatch(this, window, "window", "frames_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "closed", { configurable: true, enumerable: true, get: function closed() { return bodavm.toolsFunc.dispatch(this, window, "window", "closed_get", arguments, false) }, set: undefined });
bodavm.toolsFunc.defineProperty(window, "status", { configurable: true, enumerable: true, get: function status() { return bodavm.toolsFunc.dispatch(this, window, "window", "status_get", arguments, '') }, set: function status() { return bodavm.toolsFunc.dispatch(this, window, "window", "status_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "parent", { configurable: true, enumerable: true, get: function parent() { return bodavm.toolsFunc.dispatch(this, window, "window", "parent_get", arguments) }, set: function parent() { return bodavm.toolsFunc.dispatch(this, window, "window", "parent_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "origin", { configurable: true, enumerable: true, get: function origin() { return bodavm.toolsFunc.dispatch(this, window, "window", "origin_get", arguments, 'https://developer.mozilla.org') }, set: function origin() { return bodavm.toolsFunc.dispatch(this, window, "window", "origin_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "scrollX", { configurable: true, enumerable: true, get: function scrollX() { return bodavm.toolsFunc.dispatch(this, window, "window", "scrollX_get", arguments, 0) }, set: function scrollX() { return bodavm.toolsFunc.dispatch(this, window, "window", "scrollX_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "pageXOffset", { configurable: true, enumerable: true, get: function pageXOffset() { return bodavm.toolsFunc.dispatch(this, window, "window", "pageXOffset_get", arguments, 0) }, set: function pageXOffset() { return bodavm.toolsFunc.dispatch(this, window, "window", "pageXOffset_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "scrollY", { configurable: true, enumerable: true, get: function scrollY() { return bodavm.toolsFunc.dispatch(this, window, "window", "scrollY_get", arguments, 300) }, set: function scrollY() { return bodavm.toolsFunc.dispatch(this, window, "window", "scrollY_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "pageYOffset", { configurable: true, enumerable: true, get: function pageYOffset() { return bodavm.toolsFunc.dispatch(this, window, "window", "pageYOffset_get", arguments, 300) }, set: function pageYOffset() { return bodavm.toolsFunc.dispatch(this, window, "window", "pageYOffset_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "screenX", { configurable: true, enumerable: true, get: function screenX() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenX_get", arguments, 0) }, set: function screenX() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenX_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "screenY", { configurable: true, enumerable: true, get: function screenY() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenY_get", arguments, 0) }, set: function screenY() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenY_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "outerWidth", { configurable: true, enumerable: true, get: function outerWidth() { return bodavm.toolsFunc.dispatch(this, window, "window", "outerWidth_get", arguments, 1440) }, set: function outerWidth() { return bodavm.toolsFunc.dispatch(this, window, "window", "outerWidth_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "outerHeight", { configurable: true, enumerable: true, get: function outerHeight() { return bodavm.toolsFunc.dispatch(this, window, "window", "outerHeight_get", arguments, 920) }, set: function outerHeight() { return bodavm.toolsFunc.dispatch(this, window, "window", "outerHeight_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "screenLeft", { configurable: true, enumerable: true, get: function screenLeft() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenLeft_get", arguments, 0) }, set: function screenLeft() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenLeft_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "screenTop", { configurable: true, enumerable: true, get: function screenTop() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenTop_get", arguments, 0) }, set: function screenTop() { return bodavm.toolsFunc.dispatch(this, window, "window", "screenTop_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "defaultStatus", { configurable: true, enumerable: true, get: function defaultStatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultStatus_get", arguments, '') }, set: function defaultStatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultStatus_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "defaultstatus", { configurable: true, enumerable: true, get: function defaultstatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultstatus_get", arguments, '') }, set: function defaultstatus() { return bodavm.toolsFunc.dispatch(this, window, "window", "defaultstatus_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "innerWidth", { configurable: true, enumerable: true, get: function innerWidth() { return bodavm.toolsFunc.dispatch(this, window, "window", "innerWidth_get", arguments) }, set: function innerWidth() { return bodavm.toolsFunc.dispatch(this, window, "window", "innerWidth_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "innerHeight", { configurable: true, enumerable: true, get: function innerHeight() { return bodavm.toolsFunc.dispatch(this, window, "window", "innerHeight_get", arguments) }, set: function innerHeight() { return bodavm.toolsFunc.dispatch(this, window, "window", "innerHeight_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "matchMedia", { configurable: true, enumerable: true, writable: true, value: function matchMedia() { return bodavm.toolsFunc.dispatch(this, window, "window", "matchMedia", arguments) } });
bodavm.toolsFunc.defineProperty(window, "chrome", {
    writable: true, enumerable: true, configurable: false, value:
    {
        app: {
            InstallState: { DISABLED: 'disabled', INSTALLED: 'installed', NOT_INSTALLED: 'not_installed' },
            RunningState: { CANNOT_RUN: 'cannot_run', READY_TO_RUN: 'ready_to_run', RUNNING: 'running' },
            getDetails: function getDetails() { debugger },
            getIsInstalled: function getIsInstalled() { debugger },
            installState: function installState() { debugger },
            isInstalled: false,
            runningState: function runningState() { debugger }
        },
        csi: function () { debugger },
        loadTimes: function () { debugger },
    }

});
bodavm.toolsFunc.defineProperty(window, "webkitRequestFileSystem", { writable: true, enumerable: true, configurable: true, value: function webkitRequestFileSystem() { return bodavm.toolsFunc.dispatch(this, window, "window", "webkitRequestFileSystem", arguments) } });
bodavm.toolsFunc.defineProperty(window, "fetch", { writable: true, enumerable: true, configurable: true, value: function fetch() { return bodavm.toolsFunc.dispatch(this, window, "window", "fetch", arguments) } });
bodavm.toolsFunc.defineProperty(window, "devicePixelRatio", { configurable: true, enumerable: true, get: function devicePixelRatio() { return bodavm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_get", arguments) }, set: function devicePixelRatio() { return bodavm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_set", arguments) } });
bodavm.toolsFunc.defineProperty(window, "getComputedStyle", { configurable: true, enumerable: true, writable: true, value: function getComputedStyle() { return bodavm.toolsFunc.dispatch(this, window, "window", "getComputedStyle", arguments) } });
bodavm.toolsFunc.defineProperty(window, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, window, "window", "length_get", arguments)}, set:function length (){return bodavm.toolsFunc.dispatch(this, window, "window", "length_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "openDatabase", {configurable:true, enumerable:true, writable:true, value:function openDatabase (){return bodavm.toolsFunc.dispatch(this, window, "window", "openDatabase", arguments)}});

bodavm.toolsFunc.defineProperty(window, "onmessage", {configurable:true, enumerable:true, get:function onmessage (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmessage_get", arguments)}, set:function onmessage (){return bodavm.toolsFunc.dispatch(this, window, "window", "onmessage_set", arguments)}});
bodavm.toolsFunc.defineProperty(window, "onbeforeunload", {configurable:true, enumerable:true, get:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_get", arguments, null)}, set:function onbeforeunload (){return bodavm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_set", arguments)}});
// bodavm.toolsFunc.defineProperty(window, "clientInformation", {configurable:true, enumerable:true, get:function clientInformation (){return bodavm.toolsFunc.dispatch(this, window, "window", "clientInformation_get", arguments)}, set:function clientInformation (){return bodavm.toolsFunc.dispatch(this, window, "window", "clientInformation_set", arguments)}});

bodavm.toolsFunc.defineProperty(window, "$_", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$0", {configurable:true, enumerable:false, writable:true, value:{}});
bodavm.toolsFunc.defineProperty(window, "$1", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$2", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$3", {configurable:true, enumerable:false, writable:true, value:undefined});
bodavm.toolsFunc.defineProperty(window, "$4", {configurable:true, enumerable:false, writable:true, value:undefined});















// var boeval = eval
// eval = function (x) {
//     console.log(`执行eval,参数为${x}`)
//     return boeval.call(this, x)
// }
// eval.toString = function () { return 'function eval() { [native code] }' }





Object.defineProperty(this, 'window', {
    get: function window() {
        // if (bodavm.config.proxy ){
            // window=bodavm.toolsFunc.proxy(window,'window')
            // return window
        // }else{
            return this
        // }
    },
    // writable: false,
    configurable: false,
    enumerable:true
});
bodavm.toolsFunc.safeFunc(Object.getOwnPropertyDescriptor(this,'window').get,'get window')
// 全局变量初始化
var mytime_stamp = Date.now()
// debugger
!function () {
    window.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL && Object.defineProperty(window, 'VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL', {
        enumerable: false,
        configurable: false,
        writable: false

    },'bobo');

    if (bodavm.config.randomhook) {
        //hook
        !function () {
            //固定时间值
            Date.now_ = Date.now
            Date.now = function () {
                console.log_copy(`Date.now=>被调用 `, `resulit is mytime_stamp:`,mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }
            bodavm.toolsFunc.safeFunc(Date.now, 'now')
            //固定时间值
            Date.prototype.valueOf_ = Date.prototype.valueOf
            Date.prototype.valueOf = function valueOf() {
                console.log_copy(`Date.prototype.valueOf=>被调用 `, `resulit is mytime_stamp:`,mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }
            bodavm.toolsFunc.safeFunc(Date.prototype.valueOf, 'valueOf')

            Date.prototype.getTime_ = Date.prototype.getTime
            Date.prototype.getTime = function () {
                console.log_copy(`Date.prototype.getTime=>被调用 `, `resulit is mytime_stamp`,mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }
            bodavm.toolsFunc.safeFunc(Date.prototype.getTime, 'getTime')
            //固定随机值
            Math.random_ = Math.random;
            Math.random = function () {
                console.log_copy(`Math.random=>被调用  `, `resulit is Math.random:${0.5}`)
                return 0.5
            }
            bodavm.toolsFunc.safeFunc(Math.random, 'random')
        }()

    }

    JSON.stringify_bo = JSON.stringify
    JSON.stringify = function stringify() {
        let stringres=''
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        try{

        
            if (arg2 == 'bo') {
                return JSON.stringify_bo.call(this, arg0, arg1)
            }
        
            debugger
            if (arg0 && arg0.length) {
                if (arg0+''.indexOf(console) > -1) {
                    debugger
                    console.log_copy('JSON.stringify1  ', '  console', '  检测console');
                    arg0[arg0.indexOf(console)] = { "memory": {} }
                }
            } else {
                if (arg0 == console) {
                    debugger
                    console.log_copy('JSON.stringify3  ', '  console', '  检测console');
                    return '{"memory":{}}'
                }

            }
            stringres=JSON.stringify_bo.call(this, arg0, arg1)
            if (typeof arg0 == 'string') {
                console.log_copy(`JSON.stringify4  `, `  arg0:`,arg0.length > 20 ? arg0.substring(0, 20) + '...' : arg0, ` arg1: `,arg1,'-> res ->',stringres)

            } else {
                // debugger
                if (arg0&&arg0.toString().indexOf("MemoryInfo")>-1){
                    console.log_copy('JSON.stringify2  ', '  console', '  检测console.memory  res- > {}');
        
                    return {}
                }
                console.log_copy(`JSON.stringify5  `, `  arg0:`,arg0, `   arg1: `,arg1, '->res->',stringres)


            }
        }catch{
            console.log_copy(`JSON.stringify hook出错`, )

        }
        return stringres

    }

    bodavm.toolsFunc.safefunction(JSON.stringify, 'stringify')


    JSON.parse_bo = JSON.parse
    JSON.parse = function parse() {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        try{
            console.log_copy(`JSON.parse `, ` arg0:`,arg0.length > 40 ? arg0.substring(0, 40) + '...' : arg0, ` arg1:`,arg1)

        }catch{
            console.log_copy(`JSON.parse hook出错`, )

        }
        return JSON.parse_bo.apply(this, arguments)
    }
    bodavm.toolsFunc.safefunction(JSON.parse, 'parse')



    Object.getOwnPropertyDescriptor_bo = Object.getOwnPropertyDescriptor
    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor() {
        let obj = arguments[0]
        let prop = arguments[1]
        let desc_res;
        try{
            if (obj ===window && prop =='__proto__'){
                // objres={value: undefined, writable: false, enumerable: false, configurable: false}
                // console.log_copy(`Object.getOwnPropertyDescriptor -->`,'传入参数为winodw检测 -> res -> ',objres);
                return undefined
            }
            if (prop == 'constructor') {
                // if (obj ==document){debugger}
                return Object.getOwnPropertyDescriptor_bo.call(this, arguments[0],arguments[1])
            }
            debugger
    
            desc_res = Object.getOwnPropertyDescriptor_bo.call(this, arguments[0],arguments[1])
            if (desc_res && (desc_res['_boarg'] || desc_res['_boisinit'] || desc_res['_contentiframe'] )){
                delete desc_res['_boarg']
                delete desc_res['_boisinit']
                delete desc_res['_contentiframe']
            }
            
            console.log_copy(`Object.getOwnPropertyDescriptor--> `, ` obj:`,obj, `->`, `prop:`,prop,` ->`, `  res ->`,desc_res,` !!!!检测`);
            
        }catch{
            console.log_copy(`Object.getOwnPropertyDescriptor hook出错`)

        }
        
        return desc_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptor, 'getOwnPropertyDescriptor')


    Object.getOwnPropertyDescriptors_bo = Object.getOwnPropertyDescriptors
    Object.getOwnPropertyDescriptors = function getOwnPropertyDescriptors() {
        let arg0 = arguments[0]
        let descs_res;
        try{

        
        descs_res = Object.getOwnPropertyDescriptors_bo.apply(this, arguments)
        if (descs_res && (descs_res['_boarg'] || descs_res['_boisinit'] || descs_res['_contentiframe'] || descs_res['__proto__'])){
            delete descs_res['_boarg']
            delete descs_res['_boisinit']
            delete descs_res['_contentiframe']
            delete descs_res['__proto__']
        }
        // ldvm.toolsFunc.deleteProperty(descs_res,'length')
        // descs_res[0].configurable=true
        
        delete descs_res['length']
        if (arg0.__proto__==HTMLCollection.prototype){
            for (let i in descs_res){
                descs_res[i].writable=false
            }
        }
        console.log_copy(`Object.getOwnPropertyDescriptors--> `, `arg0:`,arg0,` ->`, `res ->`,descs_res, `!!!!检测`);
        }catch{
            console.log_copy(`Object.getOwnPropertyDescriptors hook出错`)

        }
        return descs_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptors, 'getOwnPropertyDescriptors')

    Object.getOwnPropertyNames_bo = Object.getOwnPropertyNames
    Object.getOwnPropertyNames = function getOwnPropertyNames() {
        let arg0 = arguments[0]
        let name_res = Object.getOwnPropertyNames_bo.apply(this, arguments)
       
        try{

        if (arg0==alert){
            for (let i =0;i <name_res.length;i++){
        
                if ((name_res[i] == '_boarg') ||
                    (name_res[i] =='_boisinit') ||
                    (name_res[i] == '_contentiframe') ||
                    (name_res[i] == 'arguments') ||
                    (name_res[i] =='caller') ||
                    (name_res[i] =='prototype')||
                    (name_res[i] =='boallundefined')||
                    (name_res[i] =='bofs')||
                    (name_res[i] =='isWindowSystem') ||
                    (name_res[i] =='__proto__')
                    )
                    {
                    name_res.splice(i,1)
                    i--
                    }
            }
        }else{
            for (let i =0;i <name_res.length;i++){
        
                if ((name_res[i] == '_boarg') ||
                    (name_res[i] =='_boisinit') ||
                    (name_res[i] == '_contentiframe') ||
                    // (name_res[i] == 'arguments') ||
                    // (name_res[i] =='caller') ||
                    // (name_res[i] =='prototype')||
                    (name_res[i] =='boallundefined')||
                    (name_res[i] =='bofs')||
                    (name_res[i] =='isWindowSystem') 
                    // (name_res[i] =='__proto__')
                    )
                    {
                    name_res.splice(i,1)
                    i--
                    }
            
                
            }
        }

        
        // debugger
       
            console.log_copy(`Object.getOwnPropertyNames--> `,`this ->`,this,`->`, ` arg0:`,arg0,` ->`, ` name_res->`,JSON.stringify_bo(name_res),` !!!检测`);
        }catch{
            console.log_copy(`Object.getOwnPropertyNames hook出错`)

        }
    
        return name_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyNames, 'getOwnPropertyNames')


    Object.getPrototypeOf_bo = Object.getPrototypeOf
    Object.getPrototypeOf = function (obj) {
        try{
            console.log_copy(`Object.getPrototypeOf `, `this ->`,bodavm.toolsFunc.getType(this),`->`,` obj:`,obj,  '!!!!检测');

        }catch{
            console.log_copy(`Object.getPrototypeOf hook出错`)

        }
        return Object.getPrototypeOf_bo.apply(this, arguments)
    }
    bodavm.toolsFunc.safefunction(Object.getPrototypeOf, 'getPrototypeOf')

    Object.getOwnPropertySymbols_bo = Object.getOwnPropertySymbols
    Object.getOwnPropertySymbols = function getOwnPropertySymbols(arg) {
        let symbols_res;
        try{

            let symbols_res = Object.getOwnPropertySymbols_bo.apply(this, arguments)
            debugger
            console.log_copy('Object.getOwnPropertySymbols ',`->`,` arg:`,bodavm.toolsFunc.getType(arg), ` symbols_res ->`,JSON.stringify_bo(symbols_res),` !!!!检测`);
        
        }
        // if (arg ==alert){console.log('Object.getOwnPropertySymbols -> ',`arg -> alert 检测 返回`)}
        
        catch {
            console.log_copy(`Object.getOwnPropertySymbols hook出错`)

        }
        return symbols_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertySymbols, 'getOwnPropertySymbols')
    //Plugin


    Object.defineProperty_bo = Object.defineProperty
    Object.defineProperty = function defineProperty() {
        // debugger
        let target = arguments[0]
        let prop = arguments[1]
        let res;
        try{
            if(target.__proto__==HTMLCollection.prototype){
            
                if (prop !=null && (Number(prop) || Number(prop)==0)){
                    return bodavm.toolsFunc.throwError(`TypeError: `,`Filed to set an indexed property on 'HTMLCollection': Index property setter is not supported.
                    at Function.defineProperty (<anonymous>)`)
    
                }
            }
            let obj = arguments[2]
            let myfilter = arguments[3]
            if (myfilter == 'bobo') { return Object.defineProperty_bo.call(this, target, prop, obj) }
            debugger
            res = Object.defineProperty_bo.call(this, target, prop, obj)
            // console.log_copy(`Object.defineProperty `, `target ->`,(target.toString()),`->`, `prop->`,(prop.toString()),`->`, `obj ->`,(obj.toString()),`->`, `res ->`,res.toString(), `!!!!!检测`)
            console.log_copy(`Object.defineProperty `, `target ->`,(target.toString()),`->`, `prop->`,(JSON.stringify_bo(prop)),`->`, `obj ->`,(JSON.stringify_bo(obj)),`->`, `res ->`,JSON.stringify_bo(res), `!!!!!检测`)
    
        }catch{
            console.log_copy(`Object.defineProperty hook出错`)

        }
        

        return res
    }
    bodavm.toolsFunc.safefunction(Object.defineProperty, 'defineProperty')

    Object.defineProperties_bo = Object.defineProperties
    Object.defineProperties = function defineProperties() {
        // debugger

        let target = arguments[0]
        let prop = arguments[1]
        let myfilter = arguments[2]
        let res;
        try{
            if (myfilter == 'bobo') { return Object.defineProperties_bo.call(this, target, prop) }
            res = Object.defineProperty_bo.call(this, target, prop)
            console.log_copy(`Object.defineProperties `, `target ->`,(target.toString()),`->`, `prop->`,(prop.toString()),`->`,`->`, `res ->`,res.toString(), `!!!!!检测`)

        }catch{
            console.log_copy(`Object.defineProperties hook出错`)
        }
        
        return res
    }
    bodavm.toolsFunc.safefunction(Object.defineProperties, 'defineProperties')




    Object.values_bo = Object.values
    Object.values = function values() {
        let res;
        try{
            res = Object.Object.values_bo.apply(this, arguments)
            console.log_copy(`Object.values `,`this ->`,bodavm.toolsFunc.getType(this),`->`, `res ->`,res,`   !!!!!!!!!!检测`);
        
        }catch{
            console.log_copy(`Object.values `,`hook 出错`);

        }
        
        return res
    }
    bodavm.toolsFunc.safefunction(Object.values, 'values')


    Object.prototype.hasOwnProperty_bo=Object.prototype.hasOwnProperty
    Object.prototype.hasOwnProperty=function (){
        
        let arg=arguments[0]
        let res;
        try{
            if ((this == window) && (arg =='hasOwnProperty')){
                return false
            } 
            if (arg =='__Zm9ybS5pZAo__'){
                console.log_copy(`Object.prototype.hasOwnProperty rs6检测 __Zm9ybS5pZAo__ 返回false`);
                return false
            }
            if (arg =='require'){
                console.log_copy(`Object.prototype.hasOwnProperty `,`this -> `,obj,` ->`,`arg ->` ,arg,` -> `,` res -> `,false,`  !!!!!!检测!!!!`)
    
                return false 
            }
            let arg1=arguments[1]
            if (arg1=='boboflag'){
                return Object.prototype.hasOwnProperty_bo.call(this,arg)
            }
            // debugger
            // obj=''
            // if (arg =='allSettled'){debugger}
            if (typeof this =='function'){
                obj=this.name
            }else{
                // debugger
                obj=bodavm.toolsFunc.getType(this)
            }
            res=Object.prototype.hasOwnProperty_bo.call(this,arg)
            console.log_copy(`Object.prototype.hasOwnProperty `,`this -> `,obj,` ->`,`arg ->` ,arg,` -> `,` res -> `,res,`  !!!!!!检测!!!!`)
            
        }catch{
            // console.log_copy(`Object.prototype.hasOwnProperty `,`this -> `,obj,` ->`,`arg ->` ,arg,` -> `,` res -> `,res,` 输出失败`)
            console.log_copy(`Object.prototype.hasOwnProperty `,`this -> `,`hook 出错`)


        }
        
        return res
    }

    bodavm.toolsFunc.safefunction(Object.prototype.hasOwnProperty,'hasOwnProperty')
    Object.defineProperty(Object.prototype,'hasOwnProperty_bo',{
        enumerable:false
    },'bobo')



    // delete desc_res['_boarg']
    // delete desc_res['_boisinit']
    // delete desc_res['_contentiframe']
    Object.entries_bo = Object.entries
    Object.entries = function () {
        let res
        try{
            let obj = arguments[0]
                res = Object.entries_bo.call(this, obj)
            for (let i =0;i<res.length;i++){
                if (res[i] && (res[i][0] =='_boarg' || res[0] == '_boisinit' || res[0] == '_contentiframe')){
                    res.splice(i,1)
                    i--
                }
            }
            console.log_copy(`Object.entries `,`this ->`,bodavm.toolsFunc.getType(this),`->obj ->`,obj, `-> res ->`,res,`  !!!!!!检测!!!!`)
            
        }catch{
            console.log_copy(`Object.entries `,`hook 出错`)

        }
      
        return res
    }
    bodavm.toolsFunc.safefunction(Object.entries, 'entries')

    Object.keys_=Object.keys
    Object.keys=function (){
        let res;
        try{
            let obj = arguments[0]
             if (bodavm.toolsFunc.getType(obj)=='[object Window]'){
            let iframes= bodaobj.document.getElementsByTagName('iframe')
            for (let i = 0; i < iframes.length; i++) {
            if (obj==iframes[i].contentWindow){
                res_=bodavm.memory.contentWindow_keys
                console.log_copy(`Object.keys `, `contentWindow下keys !!!!!!检测!!!!`)

                return res_
            }
            
           }
        }
        
        res = Object.keys_.call(this, obj)
        for (let i = 0; i < res.length; i++) {
            if (res[i]=='_boisinit' || res[i]=='_boarg' || res[i]=='__proto__'){
                res.splice(i,1)
                i=i-1
            }
            
        }
        debugger
        console.log_copy(`Object.keys `, `obj ->`,obj, `->`, `res ->过长不显示}  !!!!!!检测!!!!`)
        }catch (e){
            console.log_copy(`Object.keys `, `hook 出错`)

        }
        
        return res
    }
    bodavm.toolsFunc.safefunction(Object.keys,'keys')

    // var Object_toString = Object.prototype.toString;
    // Object.prototype.toString = function () {
    //     let _temp = Object_toString.call(this, arguments);
    //     console.log_copy(this);
    //     console.log_copy("Object.prototype.toString: " + _temp);
    //     // if(this.constructor.name === 'Document'){
    //     //     return '[object HTMLDocument]';
    //     // }else if(this.constructor.name === 'CanvasRenderingContext2D'){
    //     //     return '[object CanvasRenderingContext2D]'
    //     // }
    //     return _temp;
    // };
    // bodavm.toolsFunc.safefunction(Object.prototype.toString,'toString')

    
    // String.fromCharCode_=String.fromCharCode
    // String.fromCharCode=function(x){
    // res=String.fromCharCode_.apply(this,arguments)
    // console.log_copy('this->',JSON.stringify(this,function(k,v){
    //     if (v ==window){
    //         return 'window'
    //     }else{return v}
    // }),'  arg -> ',x,' res -> ',res)
    // // if((x+'' =='99') && (res +'' =='c')){debugger}
    // return res
    // };;
}();



//网页变量初始化

!function(){
    //网页标签初始化   
    
    // let bohtml_=fs.readFileSync('D:\\My_Dir\\env_xbb_lastest_bo\\user\\run\\run.html').toString('utf-8')
    // bodavm.memory.tag=bodavm.toolsFunc.HTMLParser(bohtml_)
    // bodavm.memory.tag[0].__proto__=HTMLDocument.prototype
}();
// debugger

// window=bodavm.toolsFunc.proxy(window,"window")

// CSS=bodavm.toolsFunc.proxy(CSS,"CSS");
// performance=bodavm.toolsFunc.proxy(performance,'performance')
// // Storage=bodavm.toolsFunc.proxy(Storage,Storage)
// database=bodavm.toolsFunc.proxy(database,'database')
// navigation=bodavm.toolsFunc.proxy(navigation,'navigation')
// webkitStorageInfo=bodavm.toolsFunc.proxy(webkitStorageInfo,'webkitStorageInfo')
// speechSynthesis=bodavm.toolsFunc.proxy(speechSynthesis,'speechSynthesis')
// localStorage=bodavm.toolsFunc.proxy(localStorage,"localStorage")
// sessionStorage=bodavm.toolsFunc.proxy(sessionStorage,"sessionStorage")
// location=bodavm.toolsFunc.proxy(location,"location")
// customElements=bodavm.toolsFunc.proxy(customElements,'customElements')
// clientInformation=bodavm.toolsFunc.proxy(clientInformation,'clientInformation')
// document=bodavm.toolsFunc.proxy(document,"document")
// menubar=bodavm.toolsFunc.proxy(menubar,'menubar')
// toolbar=bodavm.toolsFunc.proxy(toolbar,'toolbar')
// visualViewport=bodavm.toolsFunc.proxy(visualViewport,'visualViewport')
// history = bodavm.toolsFunc.proxy(history, "history")
// styleMedia=bodavm.toolsFunc.proxy(styleMedia,'styleMedia')
// screen = bodavm.toolsFunc.proxy(screen, "screen")
// navigator = bodavm.toolsFunc.proxy(navigator, "navigator")
// locationbar=bodavm.toolsFunc.proxy(locationbar,'locationbar')
// scheduler=bodavm.toolsFunc.proxy(scheduler,"scheduler")
// indexedDB=bodavm.toolsFunc.proxy(indexedDB,'indexedDB')
// trustedTypes=bodavm.toolsFunc.proxy(trustedTypes,'trustedTypes')
// cookieStore=bodavm.toolsFunc.proxy(cookieStore,'cookieStore')
// external=bodavm.toolsFunc.proxy(external,'external')
// caches=bodavm.toolsFunc.proxy(caches,'caches')







console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`======================================调         试        代          码======================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);
console.log(`===============================================================================================================`);

///===================================================
///===================================================
///扣下的js代码运行
// delete SpeechSynthesis

// delete DeprecatedStorageInfo
// delete Database;
debugger;





;for (let i of bodaDom[0]) {
  // debugger
  bodavm.memory.domParser = i
  eval.call(document, i.childNodes[0].value)
}


bodavm.memory.domParse = bodaDom[1];




;debugger
console.log('3',document.scripts)
//异步;;;
// 宏队列，macrotask,也叫tasks.一些异步任务的回调会依次进入 macro task queue，等待后渎被调用，这些异步任务包括：

// setTimeout
// setInterval
// setImmediate(Node独有)
// requestAnimationFrame(浏览器独有)
// I/O
// UI rendering(浏览器独有)


// 微队列，microtask,也叫jobs。另一些异步任务的回调会依次进入micro task queue,等待后渎被调用，这些异步任务包括：
// process.nextTick(Node独有)
// Promise
// Object.observe
// MutationObserver
//先执行微任务,在执行宏任务
let HTMLElement_promise=bodavm.memory.asyncEvent['HTMLElement']
for (const key in HTMLElement_promise) {
    let leng_=HTMLElement_promise[key].length
    for (let i = 0; i < leng_; i++) {
        console.log(`HTMLElement_promise异步事件执行`,`type:${HTMLElement_promise[key]}`,`func:${HTMLElement_promise[key][i]}`);
        HTMLElement_promise[key][i]()

    }
    
}
// debugger
// addEventListener  比settimeout先执行
// // debugger

//setTimeout



// addEventListener  比settimeout先执行
if (bodavm.memory.asyncEvent.listener) {
    for (const key in bodavm.memory.asyncEvent.listener) {
        let event = bodavm.memory.asyncEvent.listener[key]
            for (let i = 0; i < event.length; i++) {
                // debugger
                console.log(`开始执行浏览器事件==========`,`当前为事件类型为==>: ${event[i].type}`);
                window.dispatchEvent(event[i])

            }
        

    }
}

let setTimeEvent = bodavm.memory.asyncEvent.setTimeout
console.log(`当前setTimeEvent有===>${JSON.stringify(setTimeEvent)}`)
if (setTimeEvent) {
    setTimeEvent.sort((a, b) => {
        return a.delay > b.delay ? 1 : -1;
    })
    for (let i = 0; i < setTimeEvent.length; i++) {
        let event = setTimeEvent[i]
        if (event == undefined) { continue }
        console.log(`异步回调执行settime=======================================>${JSON.stringify(event)}   callback:${event.callback}`);
        if (event.type) {
            event.callback()
        } else {
            eval(event.callback)
        }
    }
}

// //鼠标轨迹,获取实际网站的
// let mouseEvent = [

//     {
//         "clientX": 154,
//         "clientY": 514,
//         "timeStamp": 14198.5,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 154,
//         "clientY": 513,
//         "timeStamp": 14203.700000001118,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 154,
//         "clientY": 511,
//         "timeStamp": 14211.5,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 154,
//         "clientY": 508,
//         "timeStamp": 14219.700000001118,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 155,
//         "clientY": 506,
//         "timeStamp": 14227.5,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 157,
//         "clientY": 503,
//         "timeStamp": 14236,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 158,
//         "clientY": 498,
//         "timeStamp": 14243.599999999627,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 160,
//         "clientY": 495,
//         "timeStamp": 14251.900000000373,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 162,
//         "clientY": 492,
//         "timeStamp": 14260.300000000745,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 162,
//         "clientY": 490,
//         "timeStamp": 14268.700000001118,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 164,
//         "clientY": 487,
//         "timeStamp": 14276,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 165,
//         "clientY": 486,
//         "timeStamp": 14283.599999999627,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 165,
//         "clientY": 485,
//         "timeStamp": 14292.099999999627,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 485,
//         "timeStamp": 14299.599999999627,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14308,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14497.900000000373,
//         "type": "mousedown"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14506.800000000745,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14515.800000000745,
//         "type": "mousemove"
//     },
//     {
//         "clientX": 166,
//         "clientY": 484,
//         "timeStamp": 14555.800000000745,
//         "type": "mouseup"
//     }
// ];


// // debugger
// if (bodavm.memory.asyncEvent.listener) {
//     for (let i = 0; i < mouseEvent.length; i++) {
//         let event = mouseEvent[i];
//         let type = event.type;
//         let mouseEventObj = {
//             "isTrusted": true
//         };
//         mouseEventObj = Object.setPrototypeOf(mouseEventObj, MouseEvent.prototype);
//         bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "clientX", event.clientX);
//         bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "clientY", event.clientY);
//         bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "timeStamp", event.timeStamp);
//         bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "type", event.type);
//         //bodavm.toolsFunc.setProtoAttr.call(mouseEventObj, "pagex", event.type);
//         let listenerList = bodavm.memory.asyncEvent.listener[type];
//         //debugger;
//         console.log(`listenerList====>`, listenerList)

//         if(listenerList ==undefined){debugger;continue}
//         for (let j = 0; j < listenerList.length; j++) {
//             let callBack = listenerList[j].listener;
//             let self = listenerList[j].self;
//             console.log(`执行异步回调second=======>`, `self:${self}  mouseEventObj:${mouseEventObj}`);
//             callBack.call(self, mouseEventObj);

//         }

//     }
// }



;console.table(myloglist);debugger;debugger
function get_cookie(){
    debugger
    // let boxhr=new XMLHttpRequest()
    // boxhr.open('get' , "searchParamModel=%7B%22ObjectType%22%3A1%2C%22SearchKeyList%22%3A%5B%5D%2C%22SearchExpression%22%3Anull%2C%22BeginYear%22%3Anull%2C%22EndYear%22%3Anull%2C%22UpdateTimeType%22%3Anull%2C%22JournalRange%22%3Anull%2C%22DomainRange%22%3Anull%2C%22ClusterFilter%22%3A%22%22%2C%22ClusterLimit%22%3A0%2C%22ClusterUseType%22%3A%22Article%22%2C%22UrlParam%22%3A%22%22%2C%22Sort%22%3A%220%22%2C%22SortField%22%3Anull%2C%22UserID%22%3A%220%22%2C%22PageNum%22%3A2%2C%22PageSize%22%3A20%2C%22SType%22%3Anull%2C%22StrIds%22%3Anull%2C%22IsRefOrBy%22%3A0%2C%22ShowRules%22%3A%22%22%2C%22IsNoteHistory%22%3A0%2C%22AdvShowTitle%22%3Anull%2C%22ObjectId%22%3Anull%2C%22ObjectSearchType%22%3A0%2C%22ChineseEnglishExtend%22%3A0%2C%22SynonymExtend%22%3A0%2C%22ShowTotalCount%22%3A73734952%2C%22AdvTabGuid%22%3A%22%22%7D" || null)
    // let aaa=boxhr.send(true &&  "searchParamModel=%7B%22ObjectType%22%3A1%2C%22SearchKeyList%22%3A%5B%5D%2C%22SearchExpression%22%3Anull%2C%22BeginYear%22%3Anull%2C%22EndYear%22%3Anull%2C%22UpdateTimeType%22%3Anull%2C%22JournalRange%22%3Anull%2C%22DomainRange%22%3Anull%2C%22ClusterFilter%22%3A%22%22%2C%22ClusterLimit%22%3A0%2C%22ClusterUseType%22%3A%22Article%22%2C%22UrlParam%22%3A%22%22%2C%22Sort%22%3A%220%22%2C%22SortField%22%3Anull%2C%22UserID%22%3A%220%22%2C%22PageNum%22%3A2%2C%22PageSize%22%3A20%2C%22SType%22%3Anull%2C%22StrIds%22%3Anull%2C%22IsRefOrBy%22%3A0%2C%22ShowRules%22%3A%22%22%2C%22IsNoteHistory%22%3A0%2C%22AdvShowTitle%22%3Anull%2C%22ObjectId%22%3Anull%2C%22ObjectSearchType%22%3A0%2C%22ChineseEnglishExtend%22%3A0%2C%22SynonymExtend%22%3A0%2C%22ShowTotalCount%22%3A73734952%2C%22AdvTabGuid%22%3A%22%22%7D")
    if (bodavm.memory.isrs){
        console.log(`当前网站为rs,调用setInterval定时器获取cookie`)
        bodavm.memory.asyncEvent.setTimeout[6].callback()

    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://paas.nc.crm.jx.cmcc/', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.onload = function () {
    //     // do something to response
    //     console.log(this.responseText);
    // };
    rsurl=xhr._url
    xhr.send(true && "searchParamModel=%7B%22ObjectType%22%3A1%2C%22SearchKeyList%22%3A%5B%5D%2C%22SearchExpression%22%3Anull%2C%22BeginYear%22%3Anull%2C%22EndYear%22%3Anull%2C%22UpdateTimeType%22%3Anull%2C%22JournalRange%22%3Anull%2C%22DomainRange%22%3Anull%2C%22ClusterFilter%22%3A%22%22%2C%22ClusterLimit%22%3A0%2C%22ClusterUseType%22%3A%22Article%22%2C%22UrlParam%22%3A%22%22%2C%22Sort%22%3A%220%22%2C%22SortField%22%3Anull%2C%22UserID%22%3A%220%22%2C%22PageNum%22%3A3%2C%22PageSize%22%3A20%2C%22SType%22%3Anull%2C%22StrIds%22%3Anull%2C%22IsRefOrBy%22%3A0%2C%22ShowRules%22%3A%22%22%2C%22IsNoteHistory%22%3A0%2C%22AdvShowTitle%22%3Anull%2C%22ObjectId%22%3Anull%2C%22ObjectSearchType%22%3A0%2C%22ChineseEnglishExtend%22%3A0%2C%22SynonymExtend%22%3A0%2C%22ShowTotalCount%22%3A74249929%2C%22AdvTabGuid%22%3A%22%22%7D" );
            
    
    
    let res={
        // b:new XMLHttpRequest().open(''),
        cookie:document.cookie,
        url:rsurl
    }
    
    return res
}

// get_cookie

;