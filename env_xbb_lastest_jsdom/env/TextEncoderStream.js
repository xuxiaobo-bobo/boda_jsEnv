// TextEncoderStream对象
bodavm.memory.globalobj['TextEncoderStream'] = function TextEncoderStream(){this._boarg= new bodaobj.window.TextEncoderStream();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextEncoderStream'], "TextEncoderStream");
bodavm.toolsFunc.defineProperty('TextEncoderStream', "encoding", {configurable:true, enumerable:true, get:function encoding (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextEncoderStream'].prototype, "TextEncoderStream", "encoding_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('TextEncoderStream', "readable", {configurable:true, enumerable:true, get:function readable (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextEncoderStream'].prototype, "TextEncoderStream", "readable_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('TextEncoderStream', "writable", {configurable:true, enumerable:true, get:function writable (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextEncoderStream'].prototype, "TextEncoderStream", "writable_get", arguments)}, set:undefined},'prototype');
