// FontFaceSetLoadEvent对象
bodavm.memory.globalobj['FontFaceSetLoadEvent'] = function FontFaceSetLoadEvent(){if (!(this instanceof FontFaceSetLoadEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FontFaceSetLoadEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FontFaceSetLoadEvent'], "FontFaceSetLoadEvent");
bodavm.memory.globalobj['FontFaceSetLoadEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['FontFaceSetLoadEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('FontFaceSetLoadEvent', "fontfaces", {configurable:true, enumerable:true, get:function fontfaces (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFaceSetLoadEvent'].prototype, "FontFaceSetLoadEvent", "fontfaces_get", arguments)}, set:undefined},'prototype');
