// ConvolverNode对象

bodaEnv.memory.globlProtoObj["ConvolverNode"] = function ConvolverNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ConvolverNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ConvolverNode"], "ConvolverNode");
bodaEnv.memory.globlProtoObj["ConvolverNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["ConvolverNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ConvolverNode"].prototype, "buffer", {
  configurable: true,
  enumerable: true,
  get: {
    buffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ConvolverNode"].prototype, "ConvolverNode", "buffer_get", arguments);
    }
  }.buffer,
  set: {
    buffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ConvolverNode"].prototype, "ConvolverNode", "buffer_set", arguments);
    }
  }.buffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ConvolverNode"].prototype, "normalize", {
  configurable: true,
  enumerable: true,
  get: {
    normalize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ConvolverNode"].prototype, "ConvolverNode", "normalize_get", arguments);
    }
  }.normalize,
  set: {
    normalize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ConvolverNode"].prototype, "ConvolverNode", "normalize_set", arguments);
    }
  }.normalize
});