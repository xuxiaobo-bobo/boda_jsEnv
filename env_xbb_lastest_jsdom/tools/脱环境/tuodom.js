// 获取原型环境代码
getProtoEnvCode = function getProtoEnvCode(proto, instanceObj){
    // proto: 原型函数
    // instanceObj: 实例对象, 可选参数
    let code = "";
    let protoName = proto.name;
    // 添加注释
    code += `// ${protoName}对象\r\n`;
    // 定义原型
    code += `bodavm.memory.globalobj['${protoName}'] = function ${protoName}(){`;
    try{
        new proto;
    }catch(e){
        code += `this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("${e.name}", "${e.message}")`;
    }
    code += `}\r\n`;
    // 保护原型
    code += `bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['${protoName}'], "${protoName}");\r\n`;
    // 设置原型链
    let protoObj = proto.prototype;
    let proto_protoName = Object.getPrototypeOf(protoObj)[Symbol.toStringTag];
    if(proto_protoName !== undefined){
        code += `bodavm.memory.globalobj['${protoName}'].prototype.__proto__=bodavm.memory.globalobj['${proto_protoName}'].prototype;\r\n`;
       
    }
    if(proto.__proto__.name){
         code += `bodavm.memory.globalobj['${protoName}'].__proto__=bodavm.memory.globalobj['${proto.__proto__.name}'];\r\n`;
    }
    
    // 设置原型的属性
    for(const key in Object.getOwnPropertyDescriptors(proto)){
        if(key === "arguments" || key === "caller" || key === "length" || key === "name" || key === "prototype"){
            continue;
        }
        let descriptor = getDescriptor(proto, key, protoName, protoName, instanceObj);
        code += `bodavm.toolsFunc.defineProperty('${protoName}', "${key}", ${descriptor});\r\n`;
    }
    // 设置原型对象的属性
    for(const key in Object.getOwnPropertyDescriptors(proto.prototype)){
        if(key === "constructor"){
            continue;
        }
        let descriptor = getDescriptor(proto.prototype, key, `${protoName}.prototype`, protoName, instanceObj);
        code += `bodavm.toolsFunc.defineProperty('${protoName}', "${key}", ${descriptor},'prototype');\r\n`;
    }
    // console.log(code);
    // copy(code);
    return code;
}
// 获取实例对象的环境代码
getObjEnvCode = function getObjEnvCode(obj, objName, instanceObj){
    let code = "";
    // 添加注释
    code += `// ${objName}对象\r\n`;
    // 定义对象
    code += `bodavm.memory.globalobj['${objName}'] = {}\r\n`;
    // 设置原型
    let protoName = Object.getPrototypeOf(obj)[Symbol.toStringTag];
    if(protoName !== undefined){
        code += `bodavm.memory.globalobj['${objName}'].__proto__=bodavm.memory.globalobj['${protoName}'].prototype;\r\n`;
    }
    for(const key in Object.getOwnPropertyDescriptors(obj)){
        let descriptor = getDescriptor2(obj, key, objName, objName, instanceObj);
        code += `bodavm.toolsFunc.defineProperty('${objName}', "${key}", ${descriptor});\r\n`;
    }
    console.log(code);
    copy(code);
}

// 获取属性描述符
getDescriptor = function getDescriptor(obj, prop, objName, protoName, instanceObj){
    let descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    let configurable = descriptor.configurable;
    let enumerable = descriptor.enumerable;
    let code = `{configurable:${configurable}, enumerable:${enumerable}, `;
    if(descriptor.hasOwnProperty("writable")){
        let writable = descriptor.writable;
        code += `writable:${writable}, `;
    }
    if(descriptor.hasOwnProperty("value")){
        let value = descriptor.value;
        if(value instanceof Object){
            if(typeof value === "function"){
                let name=objName.split('.')[0]
                let name_pro=objName.split('.')[1]
                code += `value:function ${prop} (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['${name}'].${name_pro}, "${protoName}", "${prop}", arguments)}`;
            }else{
                // 需要关注
                console.log("需要额外关注", value);
                // JSON.stringify(value);
                code += `value:{}`
            }
        }else if(typeof value === 'symbol'){
            code += `value:${value.toString()}`;
        }else if(typeof value === "string"){
            code += `value:"${value}"`;
        }else{
            code += `value:${value}`;
        }
    }
    if(descriptor.hasOwnProperty("get")){
        let get = descriptor.get;
        if(typeof get === "function"){
            let defaultValue;
            try{
                defaultValue = get.call(instanceObj);
            }catch(e){}
            if(defaultValue === undefined || defaultValue instanceof Object){
                let name=objName.split('.')[0]
                let name_pro=objName.split('.')[1]
                code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['${name}'].${name_pro}, "${protoName}", "${prop}_get", arguments)}, `;
            }else{
                let name=objName.split('.')[0]
                let name_pro=objName.split('.')[1]
                if(typeof defaultValue === "string"){
                    code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['${name}'].${name_pro}, "${protoName}", "${prop}_get", arguments, '${defaultValue}')}, `;
                }else if(typeof value === 'symbol'){
                    code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['${name}'].${name_pro}, "${protoName}", "${prop}_get", arguments, ${defaultValue.toString()})}, `;
                }else{
                    code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['${name}'].${name_pro}, "${protoName}", "${prop}_get", arguments, ${defaultValue})}, `;
                }
            }
        }else{
            code += `get:undefined, `
        }
    }
    if(descriptor.hasOwnProperty("set")){
        let set = descriptor.set;
        if(typeof set === "function"){
            let name=objName.split('.')[0]
                let name_pro=objName.split('.')[1]
            code += `set:function ${prop} (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['${name}'].${name_pro}, "${protoName}", "${prop}_set", arguments)}`;
        }else{
            code += `set:undefined`
        }
    }
    code += '}';
    return code;
}
// let my=window.openDatabase( "EkcP","","EkcP",10000)
// let aa=styleMedia.__proto__

// 获取属性描述符

getDescriptor2 = function getDescriptor2(obj, prop, objName, protoName, instanceObj){
    let descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    let configurable = descriptor.configurable;
    let enumerable = descriptor.enumerable;
    let code = `{configurable:${configurable}, enumerable:${enumerable}, `;
    if(descriptor.hasOwnProperty("writable")){
        let writable = descriptor.writable;
        code += `writable:${writable}, `;
    }
    bobocode=`${prop}=bodavm.memory.globalobj['${prop}']`
    // console.log(bobocode)
    if(descriptor.hasOwnProperty("value")){
        let value = descriptor.value;
        if(value instanceof Object){
            if(typeof value === "function"){
                code += `value:function ${prop} (){return bodavm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}", arguments)}`;
            }else{
                // 需要关注
                console.log("需要额外关注", value);
                // JSON.stringify(value);
                code += `value:{}`
            }
        }else if(typeof value === 'symbol'){
            code += `value:${value.toString()}`;
        }else if(typeof value === "string"){
            code += `value:"${value}"`;
        }else{
            code += `value:${value}`;
        }
    }
    if(descriptor.hasOwnProperty("get")){
        let get = descriptor.get;
        if(typeof get === "function"){
            let defaultValue;
            try{
                defaultValue = get.call(instanceObj);
            }catch(e){}
            if(defaultValue === undefined || defaultValue instanceof Object){
                code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments)}, `;
            }else{
                if(typeof defaultValue === "string"){
                    code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments, '${defaultValue}')}, `;
                }else if(typeof value === 'symbol'){
                    code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments, ${defaultValue.toString()})}, `;
                }else{
                    code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments, ${defaultValue})}, `;
                }
            }
        }else{
            code += `get:undefined, `
        }
    }
    if(descriptor.hasOwnProperty("set")){
        let set = descriptor.set;
        if(typeof set === "function"){
            code += `set:function ${prop} (){return bodavm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_set", arguments)}`;
        }else{
            code += `set:undefined`
        }
    }
    code += '}';
    // copy(bobocode)
    return code;
}
// code1=getProtoEnvCode(webkitRequestFileSystem,'webkitRequestFileSystem')
// copy(code1)
// code2=getObjEnvCode(webkitRequestFileSystem,'webkitRequestFileSystem',webkitRequestFileSystem)
function isFirstLetterUpperCase(str) {
    return str.charAt(0) === str.charAt(0).toUpperCase();
  }
res=Object.getOwnPropertyDescriptors(window)
filterlist=[
    "VMError",
    "Buffer",
    "boallundefined",
    "bofs",
    "isWindowSystem",
    "bodaobj",
    "bocreateCanvas",
    "Promise",
    "get_cookie",
    "threetime",
    "mylist",
    "Object",
    "Function",
    "Array",
    "Number",
    "parseFloat",
    "parseInt",
    "Infinity",
    "NaN",
    "undefined",
    "Boolean",
    "String",
    "Symbol",
    "Date",
    "RegExp",
    "Error",
    "AggregateError",
    "EvalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
    "globalThis",
    "JSON",
    "Math",
    "console",
    "Intl",
    "ArrayBuffer",
    "Uint8Array",
    "Int8Array",
    "Uint16Array",
    "Int16Array",
    "Uint32Array",
    "Int32Array",
    "Float32Array",
    "Float64Array",
    "Uint8ClampedArray",
    "BigUint64Array",
    "BigInt64Array",
    "DataView",
    "Map",
    "BigInt",
    "Set",
    "WeakMap",
    "WeakSet",
    "Proxy",
    "Reflect",
    "FinalizationRegistry",
    "WeakRef",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape",
    "eval",
    "isFinite",
    "isNaN",
    "SharedArrayBuffer",
    "Atomics",
    "WebAssembly",
    "myloglist",
    "myloglistindex",
    "myundefinedlist",
    "bodavm",
    "boeval",
    "mytime_stamp",
    "key",
    "dir",
    "dirxml",
    "profile",
    "profileEnd",
    "clear",
    "table",
    "keys",
    "values",
    "debug",
    "undebug",
    "monitor",
    "unmonitor",
    "inspect",
    "copy",
    "queryObjects",
    "$_",
    "$0",
    "$1",
    "$2",
    "$3",
    "$4",
    "require",
  ]
for (const key in res) {
    if (key in filterlist){continue }
    if (isFirstLetterUpperCase(key)){
        // debugger
        getProtoEnvCode(key,key+'')
        
    }else{
        code2=getObjEnvCode(key,key+'',key)
    }
}
// copy(code2HTMLElement
// if (code1){
// code3=code1+"\r\n"+code2
// copy(code3)
    
// }else{
//     copy(code2)
// }
