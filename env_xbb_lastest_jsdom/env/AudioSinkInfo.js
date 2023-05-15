// AudioSinkInfo对象
bodavm.memory.globalobj['AudioSinkInfo'] = function AudioSinkInfo(){if (!(this instanceof AudioSinkInfo)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioSinkInfo'], "AudioSinkInfo");
bodavm.toolsFunc.defineProperty('AudioSinkInfo', "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioSinkInfo'].prototype, "AudioSinkInfo", "type_get", arguments)}, set:undefined},'prototype');
