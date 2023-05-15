// AnimationTimeline对象
bodavm.memory.globalobj['AnimationTimeline'] = function AnimationTimeline(){if (!(this instanceof AnimationTimeline)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AnimationTimeline'], "AnimationTimeline");
bodavm.toolsFunc.defineProperty('AnimationTimeline', "currentTime", {configurable:true, enumerable:true, get:function currentTime (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnimationTimeline'].prototype, "AnimationTimeline", "currentTime_get", arguments)}, set:undefined},'prototype');
