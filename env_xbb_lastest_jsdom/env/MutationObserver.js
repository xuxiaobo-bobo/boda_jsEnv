// MutationObserver对象
bodavm.memory.globalobj['MutationObserver'] = function MutationObserver(){
    if (!(this instanceof MutationObserver)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MutationObserver': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    };
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MutationObserver': 1 argument required, but only 0 present.")}

    }
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MutationObserver'], "MutationObserver");
bodavm.toolsFunc.defineProperty('MutationObserver', "disconnect", {configurable:true, enumerable:true, writable:true, value:function disconnect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationObserver'].prototype, "MutationObserver", "disconnect", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('MutationObserver', "observe", {configurable:true, enumerable:true, writable:true, value:function observe (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationObserver'].prototype, "MutationObserver", "observe", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('MutationObserver', "takeRecords", {configurable:true, enumerable:true, writable:true, value:function takeRecords (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationObserver'].prototype, "MutationObserver", "takeRecords", arguments)}},'prototype');
