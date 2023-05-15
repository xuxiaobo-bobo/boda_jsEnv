// RTCDataChannelEvent对象
bodavm.memory.globalobj['RTCDataChannelEvent'] = function RTCDataChannelEvent(){if (!(this instanceof RTCDataChannelEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCDataChannelEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCDataChannelEvent'], "RTCDataChannelEvent");
bodavm.memory.globalobj['RTCDataChannelEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['RTCDataChannelEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('RTCDataChannelEvent', "channel", {configurable:true, enumerable:true, get:function channel (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannelEvent'].prototype, "RTCDataChannelEvent", "channel_get", arguments)}, set:undefined},'prototype');
