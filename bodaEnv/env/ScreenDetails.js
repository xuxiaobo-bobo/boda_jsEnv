// ScreenDetails对象

bodaEnv.memory.globlProtoObj["ScreenDetails"] = function ScreenDetails() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ScreenDetails 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ScreenDetails"], "ScreenDetails");
bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["ScreenDetails"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "screens", {
  configurable: true,
  enumerable: true,
  get: {
    screens() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "ScreenDetails", "screens_get", arguments);
    }
  }.screens,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "currentScreen", {
  configurable: true,
  enumerable: true,
  get: {
    currentScreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "ScreenDetails", "currentScreen_get", arguments);
    }
  }.currentScreen,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "onscreenschange", {
  configurable: true,
  enumerable: true,
  get: {
    onscreenschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "ScreenDetails", "onscreenschange_get", arguments);
    }
  }.onscreenschange,
  set: {
    onscreenschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "ScreenDetails", "onscreenschange_set", arguments);
    }
  }.onscreenschange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "oncurrentscreenchange", {
  configurable: true,
  enumerable: true,
  get: {
    oncurrentscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "ScreenDetails", "oncurrentscreenchange_get", arguments);
    }
  }.oncurrentscreenchange,
  set: {
    oncurrentscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetails"].prototype, "ScreenDetails", "oncurrentscreenchange_set", arguments);
    }
  }.oncurrentscreenchange
});