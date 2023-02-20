// BeforeInstallPromptEvent对象
bodavm.memory.globalobj['BeforeInstallPromptEvent'] = function BeforeInstallPromptEvent(){
    if (!(this instanceof BeforeInstallPromptEvent)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BeforeInstallPromptEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function.")}
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BeforeInstallPromptEvent': 1 argument required, but only 0 present.")}

    }

    
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BeforeInstallPromptEvent'], "BeforeInstallPromptEvent");
bodavm.memory.globalobj['BeforeInstallPromptEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['BeforeInstallPromptEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('BeforeInstallPromptEvent', "platforms", {configurable:true, enumerable:true, get:function platforms (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BeforeInstallPromptEvent'].prototype, "BeforeInstallPromptEvent", "platforms_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('BeforeInstallPromptEvent', "userChoice", {configurable:true, enumerable:true, get:function userChoice (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BeforeInstallPromptEvent'].prototype, "BeforeInstallPromptEvent", "userChoice_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('BeforeInstallPromptEvent', "prompt", {configurable:true, enumerable:true, writable:true, value:function prompt (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BeforeInstallPromptEvent'].prototype, "BeforeInstallPromptEvent", "prompt", arguments)}},'prototype');
