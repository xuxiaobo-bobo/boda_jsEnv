// HTMLAudioElement对象
bodavm.memory.globalobj['HTMLAudioElement'] = function HTMLAudioElement(){if (!(this instanceof HTMLAudioElement)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLAudioElement'], "HTMLAudioElement");
bodavm.memory.globalobj['HTMLAudioElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLMediaElement'].prototype;
bodavm.memory.globalobj['HTMLAudioElement'].__proto__=bodavm.memory.globalobj['HTMLMediaElement'];
