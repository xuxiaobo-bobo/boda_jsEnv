// XRSessionEvent对象
bodavm.memory.globalobj['XRSessionEvent'] = function XRSessionEvent(){if (!(this instanceof XRSessionEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRSessionEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRSessionEvent'], "XRSessionEvent");
bodavm.memory.globalobj['XRSessionEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['XRSessionEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('XRSessionEvent', "session", {configurable:true, enumerable:true, get:function session (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSessionEvent'].prototype, "XRSessionEvent", "session_get", arguments)}, set:undefined},'prototype');
