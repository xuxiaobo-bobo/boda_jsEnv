// DynamicsCompressorNode对象

bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"] = function DynamicsCompressorNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DynamicsCompressorNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"], "DynamicsCompressorNode");
bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "threshold", {
  configurable: true,
  enumerable: true,
  get: {
    threshold() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "DynamicsCompressorNode", "threshold_get", arguments);
    }
  }.threshold,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "knee", {
  configurable: true,
  enumerable: true,
  get: {
    knee() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "DynamicsCompressorNode", "knee_get", arguments);
    }
  }.knee,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "ratio", {
  configurable: true,
  enumerable: true,
  get: {
    ratio() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "DynamicsCompressorNode", "ratio_get", arguments);
    }
  }.ratio,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "reduction", {
  configurable: true,
  enumerable: true,
  get: {
    reduction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "DynamicsCompressorNode", "reduction_get", arguments);
    }
  }.reduction,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "attack", {
  configurable: true,
  enumerable: true,
  get: {
    attack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "DynamicsCompressorNode", "attack_get", arguments);
    }
  }.attack,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "release", {
  configurable: true,
  enumerable: true,
  get: {
    release() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DynamicsCompressorNode"].prototype, "DynamicsCompressorNode", "release_get", arguments);
    }
  }.release,
  set: undefined
});