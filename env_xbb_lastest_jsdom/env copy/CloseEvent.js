// CloseEvent对象
bodavm.memory.globalobj['CloseEvent'] = function CloseEvent() {

    if (!(this instanceof CloseEvent)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CloseEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    }

    if (arguments.length < 1) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CloseEvent': 1 argument required, but only 0 present.")
    }

}

bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CloseEvent'], "CloseEvent");
bodavm.memory.globalobj['CloseEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['CloseEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('CloseEvent', "wasClean", { configurable: true, enumerable: true, get: function wasClean() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CloseEvent'].prototype, "CloseEvent", "wasClean_get", arguments) }, set: undefined }, 'prototype');
bodavm.toolsFunc.defineProperty('CloseEvent', "code", { configurable: true, enumerable: true, get: function code() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CloseEvent'].prototype, "CloseEvent", "code_get", arguments) }, set: undefined }, 'prototype');
bodavm.toolsFunc.defineProperty('CloseEvent', "reason", { configurable: true, enumerable: true, get: function reason() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CloseEvent'].prototype, "CloseEvent", "reason_get", arguments) }, set: undefined }, 'prototype');
