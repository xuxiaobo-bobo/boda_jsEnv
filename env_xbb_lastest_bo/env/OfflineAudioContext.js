// OfflineAudioContext对象
OfflineAudioContext = function OfflineAudioContext(){
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OfflineAudioContext': 1 argument required, but only 0 present.")}
    }
    
bodavm.toolsFunc.safeProto(OfflineAudioContext, "OfflineAudioContext");
OfflineAudioContext.prototype.__proto__=BaseAudioContext.prototype;
OfflineAudioContext.__proto__=BaseAudioContext;
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "oncomplete", {configurable:true, enumerable:true, get:function oncomplete (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "oncomplete_get", arguments)}, set:function oncomplete (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "oncomplete_set", arguments)}});
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "resume", {configurable:true, enumerable:true, writable:true, value:function resume (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "resume", arguments)}});
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "startRendering", {configurable:true, enumerable:true, writable:true, value:function startRendering (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "startRendering", arguments)}});
bodavm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "suspend", {configurable:true, enumerable:true, writable:true, value:function suspend (){return bodavm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "suspend", arguments)}});
