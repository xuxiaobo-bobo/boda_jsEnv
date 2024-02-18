// AudioListener对象

bodaEnv.memory.globlProtoObj["AudioListener"] = function AudioListener() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioListener 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioListener"], "AudioListener");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "positionX", {
  configurable: true,
  enumerable: true,
  get: {
    positionX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "positionX_get", arguments);
    }
  }.positionX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "positionY", {
  configurable: true,
  enumerable: true,
  get: {
    positionY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "positionY_get", arguments);
    }
  }.positionY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "positionZ", {
  configurable: true,
  enumerable: true,
  get: {
    positionZ() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "positionZ_get", arguments);
    }
  }.positionZ,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "forwardX", {
  configurable: true,
  enumerable: true,
  get: {
    forwardX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "forwardX_get", arguments);
    }
  }.forwardX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "forwardY", {
  configurable: true,
  enumerable: true,
  get: {
    forwardY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "forwardY_get", arguments);
    }
  }.forwardY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "forwardZ", {
  configurable: true,
  enumerable: true,
  get: {
    forwardZ() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "forwardZ_get", arguments);
    }
  }.forwardZ,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "upX", {
  configurable: true,
  enumerable: true,
  get: {
    upX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "upX_get", arguments);
    }
  }.upX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "upY", {
  configurable: true,
  enumerable: true,
  get: {
    upY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "upY_get", arguments);
    }
  }.upY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "upZ", {
  configurable: true,
  enumerable: true,
  get: {
    upZ() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "upZ_get", arguments);
    }
  }.upZ,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "setOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setOrientation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "setOrientation", arguments);
    }
  }.setOrientation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "setPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPosition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioListener"].prototype, "AudioListener", "setPosition", arguments);
    }
  }.setPosition
});