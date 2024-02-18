// HTMLMeterElement对象

bodaEnv.memory.globlProtoObj["HTMLMeterElement"] = function HTMLMeterElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLMeterElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLMeterElement"], "HTMLMeterElement");
bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLMeterElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "min", {
  configurable: true,
  enumerable: true,
  get: {
    min() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "min_get", arguments);
    }
  }.min,
  set: {
    min() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "min_set", arguments);
    }
  }.min
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "max", {
  configurable: true,
  enumerable: true,
  get: {
    max() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "max_get", arguments);
    }
  }.max,
  set: {
    max() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "max_set", arguments);
    }
  }.max
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "low", {
  configurable: true,
  enumerable: true,
  get: {
    low() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "low_get", arguments);
    }
  }.low,
  set: {
    low() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "low_set", arguments);
    }
  }.low
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "high", {
  configurable: true,
  enumerable: true,
  get: {
    high() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "high_get", arguments);
    }
  }.high,
  set: {
    high() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "high_set", arguments);
    }
  }.high
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "optimum", {
  configurable: true,
  enumerable: true,
  get: {
    optimum() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "optimum_get", arguments);
    }
  }.optimum,
  set: {
    optimum() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "optimum_set", arguments);
    }
  }.optimum
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: {
    labels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMeterElement"].prototype, "HTMLMeterElement", "labels_get", arguments);
    }
  }.labels,
  set: undefined
});