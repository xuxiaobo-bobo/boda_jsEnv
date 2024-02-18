// Crypto对象

bodaEnv.memory.globlProtoObj["Crypto"] = function Crypto() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Crypto 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Crypto"], "Crypto");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Crypto"].prototype, "getRandomValues", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRandomValues() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Crypto"].prototype, "Crypto", "getRandomValues", arguments);
    }
  }.getRandomValues
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Crypto"].prototype, "subtle", {
  configurable: true,
  enumerable: true,
  get: {
    subtle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Crypto"].prototype, "Crypto", "subtle_get", arguments);
    }
  }.subtle,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Crypto"].prototype, "randomUUID", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    randomUUID() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Crypto"].prototype, "Crypto", "randomUUID", arguments);
    }
  }.randomUUID
});

// crypto对象

bodaEnv.memory.globlProtoObj["crypto"] = new bodaEnv.memory.globlProtoObj["Crypto"]('bobo');