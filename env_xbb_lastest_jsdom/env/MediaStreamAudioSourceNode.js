// MediaStreamAudioSourceNode对象
bodavm.memory.globalobj['MediaStreamAudioSourceNode'] = function MediaStreamAudioSourceNode(){if (!(this instanceof MediaStreamAudioSourceNode)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamAudioSourceNode': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaStreamAudioSourceNode'], "MediaStreamAudioSourceNode");
bodavm.memory.globalobj['MediaStreamAudioSourceNode'].prototype.__proto__=bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['MediaStreamAudioSourceNode'].__proto__=bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('MediaStreamAudioSourceNode', "mediaStream", {configurable:true, enumerable:true, get:function mediaStream (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamAudioSourceNode'].prototype, "MediaStreamAudioSourceNode", "mediaStream_get", arguments)}, set:undefined},'prototype');
