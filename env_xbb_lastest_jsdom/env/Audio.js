// Audio对象
bodavm.memory.globalobj['Audio'] = function Audio(){}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Audio'], "Audio");
bodavm.memory.globalobj['Audio'].prototype.__proto__=bodavm.memory.globalobj['HTMLMediaElement'].prototype;
