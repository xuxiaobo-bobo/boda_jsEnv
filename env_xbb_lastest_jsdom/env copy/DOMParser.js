// DOMParser对象
bodavm.memory.globalobj['DOMParser'] = function DOMParser(){
    if (!(this instanceof Document)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DOMParser': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    };

}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMParser'], "DOMParser");
bodavm.toolsFunc.defineProperty('DOMParser', "parseFromString", {configurable:true, enumerable:true, writable:true, value:function parseFromString (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMParser'].prototype, "DOMParser", "parseFromString", arguments)}},'prototype');
