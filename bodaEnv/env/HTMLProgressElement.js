// HTMLProgressElement对象

bodaEnv.memory.globlProtoObj["HTMLProgressElement"] = function HTMLProgressElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLProgressElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLProgressElement"], "HTMLProgressElement");
bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLProgressElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "HTMLProgressElement", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "HTMLProgressElement", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "max", {
  configurable: true,
  enumerable: true,
  get: {
    max() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "HTMLProgressElement", "max_get", arguments);
    }
  }.max,
  set: {
    max() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "HTMLProgressElement", "max_set", arguments);
    }
  }.max
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "position", {
  configurable: true,
  enumerable: true,
  get: {
    position() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "HTMLProgressElement", "position_get", arguments);
    }
  }.position,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: {
    labels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLProgressElement"].prototype, "HTMLProgressElement", "labels_get", arguments);
    }
  }.labels,
  set: undefined
});