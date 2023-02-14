// MutationObserver对象
MutationObserver = function MutationObserver(){
    
    if(arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MutationObserver': 1 argument required, but only 0 present.")}

    }
bodavm.toolsFunc.safeProto(MutationObserver, "MutationObserver");
bodavm.toolsFunc.defineProperty(MutationObserver.prototype, "disconnect", {configurable:true, enumerable:true, writable:true, value:function disconnect (){return bodavm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserver", "disconnect", arguments)}});
bodavm.toolsFunc.defineProperty(MutationObserver.prototype, "observe", {configurable:true, enumerable:true, writable:true, value:function observe (){return bodavm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserver", "observe", arguments)}});
bodavm.toolsFunc.defineProperty(MutationObserver.prototype, "takeRecords", {configurable:true, enumerable:true, writable:true, value:function takeRecords (){return bodavm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserver", "takeRecords", arguments)}});
