// HTMLStyleElement对象

bodaEnv.memory.globlProtoObj["HTMLStyleElement"] = function HTMLStyleElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLStyleElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLStyleElement"], "HTMLStyleElement");
bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLStyleElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "HTMLStyleElement", "disabled_get", arguments);
    }
  }.disabled,
  set: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "HTMLStyleElement", "disabled_set", arguments);
    }
  }.disabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "HTMLStyleElement", "media_get", arguments);
    }
  }.media,
  set: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "HTMLStyleElement", "media_set", arguments);
    }
  }.media
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "HTMLStyleElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "HTMLStyleElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "sheet", {
  configurable: true,
  enumerable: true,
  get: {
    sheet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "HTMLStyleElement", "sheet_get", arguments);
    }
  }.sheet,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "blocking", {
  configurable: true,
  enumerable: true,
  get: {
    blocking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "HTMLStyleElement", "blocking_get", arguments);
    }
  }.blocking,
  set: {
    blocking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLStyleElement"].prototype, "HTMLStyleElement", "blocking_set", arguments);
    }
  }.blocking
});