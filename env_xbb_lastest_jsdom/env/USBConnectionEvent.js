// USBConnectionEvent对象
bodavm.memory.globalobj['USBConnectionEvent'] = function USBConnectionEvent(){if (!(this instanceof USBConnectionEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBConnectionEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBConnectionEvent'], "USBConnectionEvent");
bodavm.memory.globalobj['USBConnectionEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['USBConnectionEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('USBConnectionEvent', "device", {configurable:true, enumerable:true, get:function device (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBConnectionEvent'].prototype, "USBConnectionEvent", "device_get", arguments)}, set:undefined},'prototype');
