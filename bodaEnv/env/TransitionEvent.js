// TransitionEvent对象

bodaEnv.memory.globlProtoObj["TransitionEvent"] = function TransitionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TransitionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TransitionEvent"], "TransitionEvent");
bodaEnv.memory.globlProtoObj["TransitionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["TransitionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TransitionEvent"].prototype, "propertyName", {
  configurable: true,
  enumerable: true,
  get: {
    propertyName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TransitionEvent"].prototype, "TransitionEvent", "propertyName_get", arguments);
    }
  }.propertyName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TransitionEvent"].prototype, "elapsedTime", {
  configurable: true,
  enumerable: true,
  get: {
    elapsedTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TransitionEvent"].prototype, "TransitionEvent", "elapsedTime_get", arguments);
    }
  }.elapsedTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TransitionEvent"].prototype, "pseudoElement", {
  configurable: true,
  enumerable: true,
  get: {
    pseudoElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TransitionEvent"].prototype, "TransitionEvent", "pseudoElement_get", arguments);
    }
  }.pseudoElement,
  set: undefined
});