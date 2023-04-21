// Audio对象
bodavm.memory.globalobj['Audio'] = function Audio(){
    if (!(this instanceof Audio)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Audio': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    };

    this._boisinit=bodavm.config.isinit;
}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Audio'], "Audio");
bodavm.memory.globalobj['Audio'].prototype.__proto__=bodavm.memory.globalobj['HTMLMediaElement'].prototype;
