// RTCErrorEvent对象
bodavm.memory.globalobj['RTCErrorEvent'] = function RTCErrorEvent(){if (!(this instanceof RTCErrorEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCErrorEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCErrorEvent'], "RTCErrorEvent");
bodavm.memory.globalobj['RTCErrorEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['RTCErrorEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('RTCErrorEvent', "error", {configurable:true, enumerable:true, get:function error (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCErrorEvent'].prototype, "RTCErrorEvent", "error_get", arguments)}, set:undefined},'prototype');
