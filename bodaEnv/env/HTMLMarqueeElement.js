// HTMLMarqueeElement对象

bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"] = function HTMLMarqueeElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLMarqueeElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"], "HTMLMarqueeElement");
bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "behavior", {
  configurable: true,
  enumerable: true,
  get: {
    behavior() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "behavior_get", arguments);
    }
  }.behavior,
  set: {
    behavior() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "behavior_set", arguments);
    }
  }.behavior
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "bgColor_get", arguments);
    }
  }.bgColor,
  set: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "bgColor_set", arguments);
    }
  }.bgColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: {
    direction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "direction_get", arguments);
    }
  }.direction,
  set: {
    direction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "direction_set", arguments);
    }
  }.direction
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "height_set", arguments);
    }
  }.height
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "hspace", {
  configurable: true,
  enumerable: true,
  get: {
    hspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "hspace_get", arguments);
    }
  }.hspace,
  set: {
    hspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "hspace_set", arguments);
    }
  }.hspace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "loop", {
  configurable: true,
  enumerable: true,
  get: {
    loop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "loop_get", arguments);
    }
  }.loop,
  set: {
    loop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "loop_set", arguments);
    }
  }.loop
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "scrollAmount", {
  configurable: true,
  enumerable: true,
  get: {
    scrollAmount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "scrollAmount_get", arguments);
    }
  }.scrollAmount,
  set: {
    scrollAmount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "scrollAmount_set", arguments);
    }
  }.scrollAmount
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "scrollDelay", {
  configurable: true,
  enumerable: true,
  get: {
    scrollDelay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "scrollDelay_get", arguments);
    }
  }.scrollDelay,
  set: {
    scrollDelay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "scrollDelay_set", arguments);
    }
  }.scrollDelay
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "trueSpeed", {
  configurable: true,
  enumerable: true,
  get: {
    trueSpeed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "trueSpeed_get", arguments);
    }
  }.trueSpeed,
  set: {
    trueSpeed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "trueSpeed_set", arguments);
    }
  }.trueSpeed
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "vspace", {
  configurable: true,
  enumerable: true,
  get: {
    vspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "vspace_get", arguments);
    }
  }.vspace,
  set: {
    vspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "vspace_set", arguments);
    }
  }.vspace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "start", arguments);
    }
  }.start
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMarqueeElement"].prototype, "HTMLMarqueeElement", "stop", arguments);
    }
  }.stop
});