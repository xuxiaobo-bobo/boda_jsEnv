// MediaEncryptedEvent对象
bodavm.memory.globalobj['MediaEncryptedEvent'] = function MediaEncryptedEvent(){this._boisinit=bodavm.config.isinit;
    
    if (!(this instanceof MediaEncryptedEvent)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaEncryptedEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    };
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaEncryptedEvent': 1 argument required, but only 0 present.")}

    }
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaEncryptedEvent'], "MediaEncryptedEvent");
bodavm.memory.globalobj['MediaEncryptedEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['MediaEncryptedEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('MediaEncryptedEvent', "initDataType", {configurable:true, enumerable:true, get:function initDataType (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaEncryptedEvent'].prototype, "MediaEncryptedEvent", "initDataType_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MediaEncryptedEvent', "initData", {configurable:true, enumerable:true, get:function initData (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaEncryptedEvent'].prototype, "MediaEncryptedEvent", "initData_get", arguments)}, set:undefined},'prototype');
