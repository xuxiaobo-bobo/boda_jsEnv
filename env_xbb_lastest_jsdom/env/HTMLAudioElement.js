// HTMLAudioElement对象
bodavm.memory.globalobj['HTMLAudioElement'] = function HTMLAudioElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLAudioElement'], "HTMLAudioElement");
bodavm.memory.globalobj['HTMLAudioElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLMediaElement'].prototype;
bodavm.memory.globalobj['HTMLAudioElement'].__proto__=bodavm.memory.globalobj['HTMLMediaElement'];
