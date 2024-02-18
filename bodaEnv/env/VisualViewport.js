// VisualViewport对象

bodaEnv.memory.globlProtoObj["VisualViewport"] = function VisualViewport() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VisualViewport 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VisualViewport"], "VisualViewport");
bodaEnv.memory.globlProtoObj["VisualViewport"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["VisualViewport"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "offsetLeft", {
  configurable: true,
  enumerable: true,
  get: {
    offsetLeft() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "offsetLeft_get", arguments);
    }
  }.offsetLeft,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "offsetTop", {
  configurable: true,
  enumerable: true,
  get: {
    offsetTop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "offsetTop_get", arguments);
    }
  }.offsetTop,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "pageLeft", {
  configurable: true,
  enumerable: true,
  get: {
    pageLeft() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "pageLeft_get", arguments);
    }
  }.pageLeft,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "pageTop", {
  configurable: true,
  enumerable: true,
  get: {
    pageTop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "pageTop_get", arguments);
    }
  }.pageTop,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "scale", {
  configurable: true,
  enumerable: true,
  get: {
    scale() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "scale_get", arguments);
    }
  }.scale,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "onresize_get", arguments);
    }
  }.onresize,
  set: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "onresize_set", arguments);
    }
  }.onresize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "onscroll_get", arguments);
    }
  }.onscroll,
  set: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VisualViewport"].prototype, "VisualViewport", "onscroll_set", arguments);
    }
  }.onscroll
});

// visualViewport对象

bodaEnv.memory.globlProtoObj["visualViewport"] = new bodaEnv.memory.globlProtoObj["VisualViewport"]('bobo');