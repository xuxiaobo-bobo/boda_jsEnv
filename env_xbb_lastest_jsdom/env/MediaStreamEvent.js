// MediaStreamEvent对象
bodavm.memory.globalobj['MediaStreamEvent'] = function MediaStreamEvent(){if (!(this instanceof MediaStreamEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaStreamEvent'], "MediaStreamEvent");
bodavm.memory.globalobj['MediaStreamEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['MediaStreamEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('MediaStreamEvent', "stream", {configurable:true, enumerable:true, get:function stream (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamEvent'].prototype, "MediaStreamEvent", "stream_get", arguments)}, set:undefined},'prototype');
