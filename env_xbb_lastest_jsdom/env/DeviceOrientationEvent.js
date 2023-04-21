// DeviceOrientationEvent对象
bodavm.memory.globalobj['DeviceOrientationEvent'] = function DeviceOrientationEvent() {
    this._boisinit=bodavm.config.isinit;
    if (!(this instanceof DeviceOrientationEvent)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceOrientationEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    };
    if (arguments.length <1){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceOrientationEvent': 1 argument required, but only 0 present.")

    }
}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DeviceOrientationEvent'], "DeviceOrientationEvent");
bodavm.memory.globalobj['DeviceOrientationEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['DeviceOrientationEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('DeviceOrientationEvent', "alpha", { configurable: true, enumerable: true, get: function alpha() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceOrientationEvent'].prototype, "DeviceOrientationEvent", "alpha_get", arguments) }, set: undefined }, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceOrientationEvent', "beta", { configurable: true, enumerable: true, get: function beta() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceOrientationEvent'].prototype, "DeviceOrientationEvent", "beta_get", arguments) }, set: undefined }, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceOrientationEvent', "gamma", { configurable: true, enumerable: true, get: function gamma() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceOrientationEvent'].prototype, "DeviceOrientationEvent", "gamma_get", arguments) }, set: undefined }, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceOrientationEvent', "absolute", { configurable: true, enumerable: true, get: function absolute() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceOrientationEvent'].prototype, "DeviceOrientationEvent", "absolute_get", arguments) }, set: undefined }, 'prototype');
