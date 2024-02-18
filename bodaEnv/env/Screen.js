// Screen对象

bodaEnv.memory.globlProtoObj["Screen"] = function Screen() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Screen 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Screen"], "Screen");
bodaEnv.memory.globlProtoObj["Screen"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Screen"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "availWidth", {
  configurable: true,
  enumerable: true,
  get: {
    availWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "availWidth_get", arguments);
    }
  }.availWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "availHeight", {
  configurable: true,
  enumerable: true,
  get: {
    availHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "availHeight_get", arguments);
    }
  }.availHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "colorDepth", {
  configurable: true,
  enumerable: true,
  get: {
    colorDepth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "colorDepth_get", arguments);
    }
  }.colorDepth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "pixelDepth", {
  configurable: true,
  enumerable: true,
  get: {
    pixelDepth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "pixelDepth_get", arguments);
    }
  }.pixelDepth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "availLeft", {
  configurable: true,
  enumerable: true,
  get: {
    availLeft() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "availLeft_get", arguments);
    }
  }.availLeft,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "availTop", {
  configurable: true,
  enumerable: true,
  get: {
    availTop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "availTop_get", arguments);
    }
  }.availTop,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "orientation", {
  configurable: true,
  enumerable: true,
  get: {
    orientation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "orientation_get", arguments);
    }
  }.orientation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Screen"].prototype, "isExtended", {
  configurable: true,
  enumerable: true,
  get: {
    isExtended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Screen"].prototype, "Screen", "isExtended_get", arguments);
    }
  }.isExtended,
  set: undefined
});

// screen对象

bodaEnv.memory.globlProtoObj["screen"] = new bodaEnv.memory.globlProtoObj["Screen"]('bobo');