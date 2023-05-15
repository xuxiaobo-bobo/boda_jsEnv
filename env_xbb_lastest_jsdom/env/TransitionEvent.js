// TransitionEvent对象
bodavm.memory.globalobj['TransitionEvent'] = function TransitionEvent(){if (!(this instanceof TransitionEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'TransitionEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TransitionEvent'], "TransitionEvent");
bodavm.memory.globalobj['TransitionEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['TransitionEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('TransitionEvent', "propertyName", {configurable:true, enumerable:true, get:function propertyName (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TransitionEvent'].prototype, "TransitionEvent", "propertyName_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('TransitionEvent', "elapsedTime", {configurable:true, enumerable:true, get:function elapsedTime (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TransitionEvent'].prototype, "TransitionEvent", "elapsedTime_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('TransitionEvent', "pseudoElement", {configurable:true, enumerable:true, get:function pseudoElement (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TransitionEvent'].prototype, "TransitionEvent", "pseudoElement_get", arguments)}, set:undefined},'prototype');
