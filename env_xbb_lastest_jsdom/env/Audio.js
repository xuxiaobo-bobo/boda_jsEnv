// Audio对象
bodavm.memory.globalobj['Audio'] = function Audio(){this._boarg= new bodaobj.window.Audio();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Audio'], "Audio");
bodavm.memory.globalobj['Audio'].prototype.__proto__=bodavm.memory.globalobj['HTMLMediaElement'].prototype;
