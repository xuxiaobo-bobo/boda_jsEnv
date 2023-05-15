// InputDeviceInfo对象
bodavm.memory.globalobj['InputDeviceInfo'] = function InputDeviceInfo(){if (!(this instanceof InputDeviceInfo)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['InputDeviceInfo'], "InputDeviceInfo");
bodavm.memory.globalobj['InputDeviceInfo'].prototype.__proto__=bodavm.memory.globalobj['MediaDeviceInfo'].prototype;
bodavm.memory.globalobj['InputDeviceInfo'].__proto__=bodavm.memory.globalobj['MediaDeviceInfo'];
bodavm.toolsFunc.defineProperty('InputDeviceInfo', "getCapabilities", {configurable:true, enumerable:true, writable:true, value:function getCapabilities (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['InputDeviceInfo'].prototype, "InputDeviceInfo", "getCapabilities", arguments)}},'prototype');
