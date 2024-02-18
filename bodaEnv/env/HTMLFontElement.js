// HTMLFontElement对象

bodaEnv.memory.globlProtoObj["HTMLFontElement"] = function HTMLFontElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLFontElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLFontElement"], "HTMLFontElement");
bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLFontElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype, "color", {
  configurable: true,
  enumerable: true,
  get: {
    color() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype, "HTMLFontElement", "color_get", arguments);
    }
  }.color,
  set: {
    color() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype, "HTMLFontElement", "color_set", arguments);
    }
  }.color
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype, "face", {
  configurable: true,
  enumerable: true,
  get: {
    face() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype, "HTMLFontElement", "face_get", arguments);
    }
  }.face,
  set: {
    face() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype, "HTMLFontElement", "face_set", arguments);
    }
  }.face
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype, "HTMLFontElement", "size_get", arguments);
    }
  }.size,
  set: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFontElement"].prototype, "HTMLFontElement", "size_set", arguments);
    }
  }.size
});