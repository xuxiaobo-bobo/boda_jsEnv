// VideoPlaybackQuality对象
VideoPlaybackQuality = function VideoPlaybackQuality(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof VideoPlaybackQuality) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('VideoPlaybackQuality 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(VideoPlaybackQuality, "VideoPlaybackQuality");
bodavm.toolsFunc.defineProperty(VideoPlaybackQuality.prototype, "creationTime", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VideoPlaybackQuality.prototype, "VideoPlaybackQuality", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VideoPlaybackQuality.prototype, "totalVideoFrames", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VideoPlaybackQuality.prototype, "VideoPlaybackQuality", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VideoPlaybackQuality.prototype, "droppedVideoFrames", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VideoPlaybackQuality.prototype, "VideoPlaybackQuality", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VideoPlaybackQuality.prototype, "corruptedVideoFrames", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VideoPlaybackQuality.prototype, "VideoPlaybackQuality", "bodefault_get", arguments)}, set:undefined},);
