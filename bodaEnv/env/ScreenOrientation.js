// ScreenOrientation对象

bodaEnv.memory.globlProtoObj["ScreenOrientation"] = function ScreenOrientation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ScreenOrientation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ScreenOrientation"], "ScreenOrientation");
bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["ScreenOrientation"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "angle", {
  configurable: true,
  enumerable: true,
  get: {
    angle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "ScreenOrientation", "angle_get", arguments);
    }
  }.angle,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "ScreenOrientation", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "ScreenOrientation", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "ScreenOrientation", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "lock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "ScreenOrientation", "lock", arguments);
    }
  }.lock
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "unlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unlock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenOrientation"].prototype, "ScreenOrientation", "unlock", arguments);
    }
  }.unlock
});