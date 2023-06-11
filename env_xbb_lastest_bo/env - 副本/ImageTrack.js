// ImageTrack对象
ImageTrack = function ImageTrack(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof ImageTrack) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('ImageTrack 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(ImageTrack, "ImageTrack");
bodavm.toolsFunc.defineProperty(ImageTrack.prototype, "frameCount", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ImageTrack.prototype, "animated", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ImageTrack.prototype, "repetitionCount", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ImageTrack.prototype, "selected", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "bodefault_set", arguments)}},);
