// AnimationEvent对象
bodavm.memory.globalobj['AnimationEvent'] = function AnimationEvent(){if (!(this instanceof AnimationEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AnimationEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AnimationEvent'], "AnimationEvent");
bodavm.memory.globalobj['AnimationEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['AnimationEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('AnimationEvent', "animationName", {configurable:true, enumerable:true, get:function animationName (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnimationEvent'].prototype, "AnimationEvent", "animationName_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('AnimationEvent', "elapsedTime", {configurable:true, enumerable:true, get:function elapsedTime (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnimationEvent'].prototype, "AnimationEvent", "elapsedTime_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('AnimationEvent', "pseudoElement", {configurable:true, enumerable:true, get:function pseudoElement (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnimationEvent'].prototype, "AnimationEvent", "pseudoElement_get", arguments)}, set:undefined},'prototype');
