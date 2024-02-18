// Keyboard对象

bodaEnv.memory.globlProtoObj["Keyboard"] = function Keyboard() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Keyboard 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Keyboard"], "Keyboard");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Keyboard"].prototype, "getLayoutMap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getLayoutMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Keyboard"].prototype, "Keyboard", "getLayoutMap", arguments);
    }
  }.getLayoutMap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Keyboard"].prototype, "lock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Keyboard"].prototype, "Keyboard", "lock", arguments);
    }
  }.lock
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Keyboard"].prototype, "unlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unlock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Keyboard"].prototype, "Keyboard", "unlock", arguments);
    }
  }.unlock
});