// RTCTrackEvent对象
bodavm.memory.globalobj['RTCTrackEvent'] = function RTCTrackEvent(){if (!(this instanceof RTCTrackEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCTrackEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCTrackEvent'], "RTCTrackEvent");
bodavm.memory.globalobj['RTCTrackEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['RTCTrackEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('RTCTrackEvent', "receiver", {configurable:true, enumerable:true, get:function receiver (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCTrackEvent'].prototype, "RTCTrackEvent", "receiver_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('RTCTrackEvent', "track", {configurable:true, enumerable:true, get:function track (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCTrackEvent'].prototype, "RTCTrackEvent", "track_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('RTCTrackEvent', "streams", {configurable:true, enumerable:true, get:function streams (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCTrackEvent'].prototype, "RTCTrackEvent", "streams_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('RTCTrackEvent', "transceiver", {configurable:true, enumerable:true, get:function transceiver (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCTrackEvent'].prototype, "RTCTrackEvent", "transceiver_get", arguments)}, set:undefined},'prototype');
