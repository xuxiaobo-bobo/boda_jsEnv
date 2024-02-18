// WakeLockSentinel对象

bodaEnv.memory.globlProtoObj["WakeLockSentinel"] = function WakeLockSentinel() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WakeLockSentinel 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WakeLockSentinel"], "WakeLockSentinel");
bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["WakeLockSentinel"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype, "onrelease", {
  configurable: true,
  enumerable: true,
  get: {
    onrelease() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype, "WakeLockSentinel", "onrelease_get", arguments);
    }
  }.onrelease,
  set: {
    onrelease() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype, "WakeLockSentinel", "onrelease_set", arguments);
    }
  }.onrelease
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype, "released", {
  configurable: true,
  enumerable: true,
  get: {
    released() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype, "WakeLockSentinel", "released_get", arguments);
    }
  }.released,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype, "WakeLockSentinel", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype, "release", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    release() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WakeLockSentinel"].prototype, "WakeLockSentinel", "release", arguments);
    }
  }.release
});