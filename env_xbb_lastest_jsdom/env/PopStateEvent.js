// PopStateEvent对象
bodavm.memory.globalobj['PopStateEvent'] = function PopStateEvent(){if (!(this instanceof PopStateEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PopStateEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PopStateEvent'], "PopStateEvent");
bodavm.memory.globalobj['PopStateEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['PopStateEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('PopStateEvent', "state", {configurable:true, enumerable:true, get:function state (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PopStateEvent'].prototype, "PopStateEvent", "state_get", arguments)}, set:undefined},'prototype');
