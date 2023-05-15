// HID对象
bodavm.memory.globalobj['HID'] = function HID(){if (!(this instanceof HID)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HID'], "HID");
bodavm.memory.globalobj['HID'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['HID'].__proto__=bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('HID', "onconnect", {configurable:true, enumerable:true, get:function onconnect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HID'].prototype, "HID", "onconnect_get", arguments)}, set:function onconnect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HID'].prototype, "HID", "onconnect_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('HID', "ondisconnect", {configurable:true, enumerable:true, get:function ondisconnect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HID'].prototype, "HID", "ondisconnect_get", arguments)}, set:function ondisconnect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HID'].prototype, "HID", "ondisconnect_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('HID', "getDevices", {configurable:true, enumerable:true, writable:true, value:function getDevices (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HID'].prototype, "HID", "getDevices", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('HID', "requestDevice", {configurable:true, enumerable:true, writable:true, value:function requestDevice (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HID'].prototype, "HID", "requestDevice", arguments)}},'prototype');
