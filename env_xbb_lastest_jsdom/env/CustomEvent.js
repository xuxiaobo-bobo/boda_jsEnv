// CustomEvent对象
bodavm.memory.globalobj['CustomEvent'] = function CustomEvent(){if (!(this instanceof CustomEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CustomEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CustomEvent'], "CustomEvent");
bodavm.memory.globalobj['CustomEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['CustomEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('CustomEvent', "detail", {configurable:true, enumerable:true, get:function detail (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomEvent'].prototype, "CustomEvent", "detail_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('CustomEvent', "initCustomEvent", {configurable:true, enumerable:true, writable:true, value:function initCustomEvent (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomEvent'].prototype, "CustomEvent", "initCustomEvent", arguments)}},'prototype');
