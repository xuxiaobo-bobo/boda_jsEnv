// HashChangeEvent对象
bodavm.memory.globalobj['HashChangeEvent'] = function HashChangeEvent(){if (!(this instanceof HashChangeEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'HashChangeEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HashChangeEvent'], "HashChangeEvent");
bodavm.memory.globalobj['HashChangeEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['HashChangeEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('HashChangeEvent', "oldURL", {configurable:true, enumerable:true, get:function oldURL (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HashChangeEvent'].prototype, "HashChangeEvent", "oldURL_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('HashChangeEvent', "newURL", {configurable:true, enumerable:true, get:function newURL (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HashChangeEvent'].prototype, "HashChangeEvent", "newURL_get", arguments)}, set:undefined},'prototype');
