// Clipboard对象

bodaEnv.memory.globlProtoObj["Clipboard"] = function Clipboard() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Clipboard 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Clipboard"], "Clipboard");
bodaEnv.memory.globlProtoObj["Clipboard"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Clipboard"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Clipboard"].prototype, "read", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    read() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Clipboard"].prototype, "Clipboard", "read", arguments);
    }
  }.read
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Clipboard"].prototype, "readText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Clipboard"].prototype, "Clipboard", "readText", arguments);
    }
  }.readText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Clipboard"].prototype, "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    write() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Clipboard"].prototype, "Clipboard", "write", arguments);
    }
  }.write
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Clipboard"].prototype, "writeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Clipboard"].prototype, "Clipboard", "writeText", arguments);
    }
  }.writeText
});