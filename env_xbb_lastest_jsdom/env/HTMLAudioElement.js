// HTMLAudioElement对象
bodavm.memory.globalobj['HTMLAudioElement'] = function HTMLAudioElement(){
    this._boisinit=bodavm.config.isinit;
    if (!(this instanceof HTMLAudioElement)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'HTMLAudioElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    };
    
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")


}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLAudioElement'], "HTMLAudioElement");
bodavm.memory.globalobj['HTMLAudioElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLMediaElement'].prototype;
bodavm.memory.globalobj['HTMLAudioElement'].__proto__=bodavm.memory.globalobj['HTMLMediaElement'];
