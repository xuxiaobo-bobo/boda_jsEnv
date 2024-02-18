// IdleDetector对象

bodaEnv.memory.globlProtoObj["IdleDetector"] = function IdleDetector() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IdleDetector 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IdleDetector"], "IdleDetector");
bodaEnv.memory.globlProtoObj["IdleDetector"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["IdleDetector"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IdleDetector"], "requestPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestPermission() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdentityCredential"], "IdleDetector", "requestPermission", arguments);
    }
  }.requestPermission
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IdleDetector"].prototype, "userState", {
  configurable: true,
  enumerable: true,
  get: {
    userState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdleDetector"].prototype, "IdleDetector", "userState_get", arguments);
    }
  }.userState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IdleDetector"].prototype, "screenState", {
  configurable: true,
  enumerable: true,
  get: {
    screenState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdleDetector"].prototype, "IdleDetector", "screenState_get", arguments);
    }
  }.screenState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IdleDetector"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdleDetector"].prototype, "IdleDetector", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdleDetector"].prototype, "IdleDetector", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IdleDetector"].prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdleDetector"].prototype, "IdleDetector", "start", arguments);
    }
  }.start
});