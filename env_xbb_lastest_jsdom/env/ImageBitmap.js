// ImageBitmap对象
bodavm.memory.globalobj['ImageBitmap'] = function ImageBitmap(){if (!(this instanceof ImageBitmap)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ImageBitmap'], "ImageBitmap");
bodavm.toolsFunc.defineProperty('ImageBitmap', "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageBitmap'].prototype, "ImageBitmap", "width_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('ImageBitmap', "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageBitmap'].prototype, "ImageBitmap", "height_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('ImageBitmap', "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageBitmap'].prototype, "ImageBitmap", "close", arguments)}},'prototype');
