// PresentationConnectionAvailableEvent对象
bodavm.memory.globalobj['PresentationConnectionAvailableEvent'] = function PresentationConnectionAvailableEvent(){if (!(this instanceof PresentationConnectionAvailableEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationConnectionAvailableEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PresentationConnectionAvailableEvent'], "PresentationConnectionAvailableEvent");
bodavm.memory.globalobj['PresentationConnectionAvailableEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['PresentationConnectionAvailableEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('PresentationConnectionAvailableEvent', "connection", {configurable:true, enumerable:true, get:function connection (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnectionAvailableEvent'].prototype, "PresentationConnectionAvailableEvent", "connection_get", arguments)}, set:undefined},'prototype');
