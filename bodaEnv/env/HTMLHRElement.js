// HTMLHRElement对象

bodaEnv.memory.globlProtoObj["HTMLHRElement"] = function HTMLHRElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLHRElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLHRElement"], "HTMLHRElement");
bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLHRElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "color", {
  configurable: true,
  enumerable: true,
  get: {
    color() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "color_get", arguments);
    }
  }.color,
  set: {
    color() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "color_set", arguments);
    }
  }.color
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "noShade", {
  configurable: true,
  enumerable: true,
  get: {
    noShade() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "noShade_get", arguments);
    }
  }.noShade,
  set: {
    noShade() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "noShade_set", arguments);
    }
  }.noShade
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "size_get", arguments);
    }
  }.size,
  set: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "size_set", arguments);
    }
  }.size
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHRElement"].prototype, "HTMLHRElement", "width_set", arguments);
    }
  }.width
});