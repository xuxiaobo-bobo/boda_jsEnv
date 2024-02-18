// KeyframeEffect对象

bodaEnv.memory.globlProtoObj["KeyframeEffect"] = function KeyframeEffect() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('KeyframeEffect 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["KeyframeEffect"], "KeyframeEffect");
bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AnimationEffect"].prototype;
bodaEnv.memory.globlProtoObj["KeyframeEffect"].__proto__ = bodaEnv.memory.globlProtoObj["AnimationEffect"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "KeyframeEffect", "target_get", arguments);
    }
  }.target,
  set: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "KeyframeEffect", "target_set", arguments);
    }
  }.target
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "pseudoElement", {
  configurable: true,
  enumerable: true,
  get: {
    pseudoElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "KeyframeEffect", "pseudoElement_get", arguments);
    }
  }.pseudoElement,
  set: {
    pseudoElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "KeyframeEffect", "pseudoElement_set", arguments);
    }
  }.pseudoElement
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "composite", {
  configurable: true,
  enumerable: true,
  get: {
    composite() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "KeyframeEffect", "composite_get", arguments);
    }
  }.composite,
  set: {
    composite() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "KeyframeEffect", "composite_set", arguments);
    }
  }.composite
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "getKeyframes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getKeyframes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "KeyframeEffect", "getKeyframes", arguments);
    }
  }.getKeyframes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "setKeyframes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setKeyframes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyframeEffect"].prototype, "KeyframeEffect", "setKeyframes", arguments);
    }
  }.setKeyframes
});