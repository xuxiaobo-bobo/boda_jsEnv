// PictureInPictureEvent对象
bodavm.memory.globalobj['PictureInPictureEvent'] = function PictureInPictureEvent(){if (!(this instanceof PictureInPictureEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PictureInPictureEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PictureInPictureEvent'], "PictureInPictureEvent");
bodavm.memory.globalobj['PictureInPictureEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['PictureInPictureEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('PictureInPictureEvent', "pictureInPictureWindow", {configurable:true, enumerable:true, get:function pictureInPictureWindow (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PictureInPictureEvent'].prototype, "PictureInPictureEvent", "pictureInPictureWindow_get", arguments)}, set:undefined},'prototype');
