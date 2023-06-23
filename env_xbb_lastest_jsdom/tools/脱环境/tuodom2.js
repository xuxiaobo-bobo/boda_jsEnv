getProtoEnvCode = function getProtoEnvCode(proto, instanceObj) {
    // proto: 原型函数
    // instanceObj: 实例对象, 可选参数
    let code = "";
    let protoName = proto.name;
    // 添加注释
    code += `// ${protoName}对象\r\n`;
    // 定义原型
    new_name=instanceObj.toLowerCase()
    if (new_name.startsWith('webkit')){
        code += `${instanceObj} =${protoName}`
        return code
    }

    // 定义原型
    code += `${protoName} = function ${protoName}(){`;
    try {
        new proto;
        code += `}` + '\r\n';

        // try {
        //     eval('new proto(1)')
        // }catch (e){
        //     debugger
        // }
        // code += `this._boarg= new bodaobj.window.${protoName}();`
    } catch (e) {
        // if (!(this instanceof Image)) {
        // return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Image': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
        // };
        code += `if (!(this instanceof ${protoName})){return throwError("${e.name}", "${e.message}")};` + '\r\n';
    }
    // code += `this._boisinit=bodavm.config.isinit}\r\n`;
    // 保护原型
    code += `bodavm.toolsFunc.safeProto('${protoName}', "${protoName}");\r\n`;
    // 设置原型链
    let protoObj = proto.prototype;
    let proto_protoName = Object.getPrototypeOf(protoObj)[Symbol.toStringTag];
    if (proto_protoName !== undefined) {
        code += `${protoName}.prototype.__proto__=${proto_protoName}.prototype;\r\n`;

    }
    if (proto.__proto__.name) {
        code += `${protoName}.__proto__=${proto.__proto__.name};\r\n`;
    }

    // 设置原型的属性
    for (const key in Object.getOwnPropertyDescriptors(proto)) {
        if (key === "arguments" || key === "caller" || key === "length" || key === "name" || key === "prototype") {
            continue;
        }
        let descriptor = getDescriptor(proto, key, protoName, protoName, instanceObj);
        code += `bodavm.toolsFunc.defineProperty(${protoName}, "${key}", ${descriptor});\r\n`;
    }
    // 设置原型对象的属性
    for (const key in Object.getOwnPropertyDescriptors(proto.prototype)) {
        if (key === "constructor") {
            continue;
        }
        let descriptor = getDescriptor(proto.prototype, key, `${protoName}.prototype`, protoName, instanceObj);
        code += `bodavm.toolsFunc.defineProperty(${protoName}.prototype, "${key}", ${descriptor});\r\n`;
    }
    // console.log(code);
    // copy(code);
    return code;
}
// 获取实例对象的环境代码
getObjEnvCode = function getObjEnvCode(obj, objName, instanceObj) {
    let code = "";
    // 添加注释
    code += `// ${objName}对象\r\n`;
    // 定义对象
    code += `${objName} = {
    }\r\n`;
    // 设置原型
    let protoName = Object.getPrototypeOf(obj)[Symbol.toStringTag];
    if (protoName !== undefined) {
        code += `${objName}.__proto__=${protoName}.prototype;\r\n`;
    }
    for (const key in Object.getOwnPropertyDescriptors(obj)) {
        let descriptor = getDescriptor2(obj, key, objName, objName, instanceObj);
        code += `bodavm.toolsFunc.defineProperty('${objName}', "${key}", ${descriptor});\r\n`;
    }
    console.log(code);
    // copy(code);
    return code
}

// 获取属性描述符
getDescriptor = function getDescriptor(obj, prop, objName, protoName, instanceObj) {
    let descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    let configurable = descriptor.configurable;
    let enumerable = descriptor.enumerable;
    let code = `{configurable:${configurable}, enumerable:${enumerable}, `;
    if (descriptor.hasOwnProperty("writable")) {
        let writable = descriptor.writable;
        code += `writable:${writable}, `;
    }
    if (descriptor.hasOwnProperty("value")) {
        let value = descriptor.value;
        if (value instanceof Object) {
            if (typeof value === "function") {
                if (prop.toString() == 'delete') {
                    // debugger
                    prop = ' '
                } else if (prop.toString() == 'in') {
                    prop = ' '
                    debugger
                }else if (prop.toString() == 'continue') {
                    prop = ' '
                    debugger
                }
                let name = objName.split('.')[0]
                let name_pro = objName.split('.')[1]
                code += `value:function ${prop} (){debugger}`;
            } else {
                // 需要关注
                console.log("需要额外关注", value);
                // JSON.stringify(value);
                code += `value:{}`
            }
        } else if (typeof value === 'symbol') {
            code += `value:${value.toString()}`;
        } else if (typeof value === "string") {
            code += `value:"${value}"`;
        } else {
            code += `value:${value}`;
        }
    }
    if (descriptor.hasOwnProperty("get")) {
        let get = descriptor.get;
        if (typeof get === "function") {
            let defaultValue;
            try {
                defaultValue = get.call(instanceObj);
            } catch (e) {
            }
            if (prop.toString() == 'delete') {
                prop = ' '
            } else if (prop.toString() == 'default') {
                prop = ' '
                debugger
            }
            if (defaultValue === undefined || defaultValue instanceof Object) {
                let name = objName.split('.')[0]
                let name_pro = objName.split('.')[1]
                code += `get:function ${prop} (){debugger}, `;
            } else {
                let name = objName.split('.')[0]
                let name_pro = objName.split('.')[1]
                code += `get:function ${prop} (){debugger}, `;

                // if (typeof defaultValue === "string") {
                // } else if (typeof value === 'symbol') {
                //     code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['${name}'].${name_pro}, "${protoName}", "${prop}_get", arguments, ${defaultValue.toString()})}, `;
                // } else {
                //     code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['${name}'].${name_pro}, "${protoName}", "${prop}_get", arguments, ${defaultValue})}, `;
                // }
            }
        } else {
            code += `get:undefined, `
        }
    }
    if (descriptor.hasOwnProperty("set")) {
        let set = descriptor.set;
        if (typeof set === "function") {
            let name = objName.split('.')[0]
            let name_pro = objName.split('.')[1]
            if (prop.toString() == 'delete') {
                prop = ' '
            }
            code += `set:function ${prop} (){debugger}`;
        } else {
            code += `set:undefined`
        }
    }
    code += '}';
    return code;
}
// let my=window.openDatabase( "EkcP","","EkcP",10000)
// let aa=styleMedia.__proto__

// 获取属性描述符

getDescriptor2 = function getDescriptor2(obj, prop, objName, protoName, instanceObj) {
    let descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    let configurable = descriptor.configurable;
    let enumerable = descriptor.enumerable;
    let code = `{configurable:${configurable}, enumerable:${enumerable}, `;
    if (descriptor.hasOwnProperty("writable")) {
        let writable = descriptor.writable;
        code += `writable:${writable}, `;
    }
    bobocode = `${prop}={}`
    // console.log(bobocode)
    if (descriptor.hasOwnProperty("value")) {
        let value = descriptor.value;
        if (value instanceof Object) {
            if (typeof value === "function") {
                if (prop.toString() == 'delete') {
                    prop = ' '
                    // debugger
                } else if (prop.toString() == 'in') {
                    prop = ' '
                    debugger
                } else if (prop.toString() == 'continue') {
                    prop = ' '
                    debugger
                }
                code += `value:function ${prop} (){debugger}`;
            } else {
                // 需要关注
                console.log("需要额外关注", value);
                // JSON.stringify(value);
                code += `value:{}`
            }
        } else if (typeof value === 'symbol') {
            code += `value:${value.toString()}`;
        } else if (typeof value === "string") {
            code += `value:"${value}"`;
        } else {
            code += `value:${value}`;
        }
    }
    if (descriptor.hasOwnProperty("get")) {
        let get = descriptor.get;
        if (typeof get === "function") {
            let defaultValue;
            try {
                defaultValue = get.call(instanceObj);
            } catch (e) {
            }
            if (defaultValue === undefined || defaultValue instanceof Object) {
                if (prop.toString() == 'delete') {
                    prop = ' '
                } else if (prop.toString() == 'in') {
                    prop = ' '
                    // debugger
                } else if (prop.toString() == 'default') {
                    prop = ' '
                    debugger
                }
                code += `get:function ${prop} (){debugger}, `;
                // } else {
                //     if (typeof defaultValue === "string") {
                //         code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments, '${defaultValue}')}, `;
                //     } else if (typeof value === 'symbol') {
                //         code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments, ${defaultValue.toString()})}, `;
                //     } else {
                //         code += `get:function ${prop} (){return bodavm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments, ${defaultValue})}, `;
                //     }
            }
        } else {
            code += `get:undefined, `
        }
    }
    if (descriptor.hasOwnProperty("set")) {
        let set = descriptor.set;
        if (typeof set === "function") {
            code += `set:function ${prop} (){debugger}`;
        } else {
            code += `set:undefined`
        }
    }
    code += '}';
    // copy(bobocode)
    return code;
};
;
;


// code1=getProtoEnvCode(webkitRequestFileSystem,'webkitRequestFileSystem')
// copy(code1)
// code2=getObjEnvCode(webkitRequestFileSystem,'webkitRequestFileSystem',webkitRequestFileSystem)
// res=
// 		debugger

(function () {
    window.ws = new WebSocket('ws://127.0.0.1:8010/');
    ws.onopen = function () {
        // debugger
        console.log("连接服务器成功");

        // res =
        // target_list = []
        // for (let i in res) {
        //     target_list.push(i)
        // }
        filterlist = ["setTimeout", "setInterval", "clearTimeout", "getProtoEnvCode", "getObjEnvCode", "getDescriptor2", "getDescriptor", "filterlist", "sucess_list", "fail_list", "VMError", "Buffer", "boallundefined", "bofs", "isWindowSystem", "bodaobj", "bocreateCanvas", "Promise", "get_cookie", "threetime", "mylist", "Object", "Function", "Array", "Number", "parseFloat", "parseInt", "Infinity", "NaN", "undefined", "Boolean", "String", "Symbol", "Date", "RegExp", "Error", "AggregateError", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "globalThis", "JSON", "Math", "console", "Intl", "ArrayBuffer", "Uint8Array", "Int8Array", "Uint16Array", "Int16Array", "Uint32Array", "Int32Array", "Float32Array", "Float64Array", "Uint8ClampedArray", "BigUint64Array", "BigInt64Array", "DataView", "Map", "BigInt", "Set", "WeakMap", "WeakSet", "Proxy", "Reflect", "FinalizationRegistry", "WeakRef", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape", "eval", "isFinite", "isNaN", "SharedArrayBuffer", "Atomics", "WebAssembly", "myloglist", "myloglistindex", "myundefinedlist", "bodavm", "boeval", "mytime_stamp", "key", "dir", "dirxml", "profile", "profileEnd", "clear", "table", "keys", "values", "debug", "undebug", "monitor", "unmonitor", "inspect", "copy", "queryObjects", "$_", "$0", "$1", "$2", "$3", "$4", "require", 'window', // 'self'
        ]
        sucess_list = []
        fail_list = []
        for (let key_ in Object.getOwnPropertyDescriptors(window)) {
            // debugger
            // key_ = target_list.pop()
            if (key_ == "opener") {
                // debugger
            }
            if (filterlist.indexOf(key_) != -1) {
                continue
            }
            // ccc=Object.getOwnPropertyDescriptor(window,key_)
            key = window[key_]
            res__ = ''
            fileName = ''
            try {
                fileName = key_ + '.js'
                if (key && key.prototype) {
                    // debugger
                    if (sucess_list.indexOf(fileName) != -1) {
                        console.log('已经下载完成', fileName)
                        continue

                    }
                    console.log(key)
                    // debugger
                    res__ = getProtoEnvCode(key, key_)
                    // debugger
                    ws.send(fileName + '___' + res__);

                } else {
                    if (sucess_list.indexOf(fileName) != -1) {
                        console.log('已经下载完成', fileName)
                        continue
                    }
                    console.log(key)
                    res__ = getObjEnvCode(key, key_, key)
                    // debugger
                    ws.send(fileName + '___' + res__);
                }
            } catch (e) {
                // res__ = ''
                fail_list.push(key_)
                console.log('失败了-----呜呜呜')
                // debugger
            }
            console.log(fail_list)
        }

    }

    ;
    ws.onclose = function () {
        console.log("服务器关闭");
    }
    ;
    ws.onerror = function () {
        console.log("连接出错");
    }
    ;
    ws.onmessage = function (evt) {
        console.log(evt.data)
        console.log(document.cookie);
    }
})();
