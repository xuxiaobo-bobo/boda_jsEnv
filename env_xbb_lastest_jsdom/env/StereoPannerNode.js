// StereoPannerNode对象
bodavm.memory.globalobj['StereoPannerNode'] = function StereoPannerNode(){if (!(this instanceof StereoPannerNode)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'StereoPannerNode': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StereoPannerNode'], "StereoPannerNode");
bodavm.memory.globalobj['StereoPannerNode'].prototype.__proto__=bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['StereoPannerNode'].__proto__=bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('StereoPannerNode', "pan", {configurable:true, enumerable:true, get:function pan (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StereoPannerNode'].prototype, "StereoPannerNode", "pan_get", arguments)}, set:undefined},'prototype');
