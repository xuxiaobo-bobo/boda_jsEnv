// SVGStyleElement对象

bodaEnv.memory.globlProtoObj["SVGStyleElement"] = function SVGStyleElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGStyleElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGStyleElement"], "SVGStyleElement");
bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGStyleElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "SVGStyleElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "SVGStyleElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "SVGStyleElement", "media_get", arguments);
    }
  }.media,
  set: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "SVGStyleElement", "media_set", arguments);
    }
  }.media
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "title", {
  configurable: true,
  enumerable: true,
  get: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "SVGStyleElement", "title_get", arguments);
    }
  }.title,
  set: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "SVGStyleElement", "title_set", arguments);
    }
  }.title
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "sheet", {
  configurable: true,
  enumerable: true,
  get: {
    sheet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "SVGStyleElement", "sheet_get", arguments);
    }
  }.sheet,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "SVGStyleElement", "disabled_get", arguments);
    }
  }.disabled,
  set: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStyleElement"].prototype, "SVGStyleElement", "disabled_set", arguments);
    }
  }.disabled
});