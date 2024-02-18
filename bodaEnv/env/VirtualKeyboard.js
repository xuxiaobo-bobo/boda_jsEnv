// VirtualKeyboard对象

bodaEnv.memory.globlProtoObj["VirtualKeyboard"] = function VirtualKeyboard() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VirtualKeyboard 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VirtualKeyboard"], "VirtualKeyboard");
bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["VirtualKeyboard"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "boundingRect", {
  configurable: true,
  enumerable: true,
  get: {
    boundingRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "VirtualKeyboard", "boundingRect_get", arguments);
    }
  }.boundingRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "overlaysContent", {
  configurable: true,
  enumerable: true,
  get: {
    overlaysContent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "VirtualKeyboard", "overlaysContent_get", arguments);
    }
  }.overlaysContent,
  set: {
    overlaysContent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "VirtualKeyboard", "overlaysContent_set", arguments);
    }
  }.overlaysContent
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "ongeometrychange", {
  configurable: true,
  enumerable: true,
  get: {
    ongeometrychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "VirtualKeyboard", "ongeometrychange_get", arguments);
    }
  }.ongeometrychange,
  set: {
    ongeometrychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "VirtualKeyboard", "ongeometrychange_set", arguments);
    }
  }.ongeometrychange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "hide", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hide() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "VirtualKeyboard", "hide", arguments);
    }
  }.hide
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "show", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    show() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VirtualKeyboard"].prototype, "VirtualKeyboard", "show", arguments);
    }
  }.show
});