// Window对象

bodaEnv.memory.globlProtoObj["Window"] = function Window() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Window 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Window"], "Window");
bodaEnv.memory.globlProtoObj["Window"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["WindowProperties"].prototype;
bodaEnv.memory.globlProtoObj["Window"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Window"], "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Window"], "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Window"].prototype, "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Window"].prototype, "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});