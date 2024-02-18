// HTMLDocument对象

bodaEnv.memory.globlProtoObj["HTMLDocument"] = function HTMLDocument() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLDocument 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLDocument"], "HTMLDocument");
bodaEnv.memory.globlProtoObj["HTMLDocument"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Document"].prototype;
bodaEnv.memory.globlProtoObj["HTMLDocument"].__proto__ = bodaEnv.memory.globlProtoObj["Document"];

// document对象

bodaEnv.memory.globlProtoObj["document"] = new bodaEnv.memory.globlProtoObj["HTMLDocument"]('bobo');
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["document"], "location", {
  configurable: false,
  enumerable: true,
  get: {
    location() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["document"], "document", "location_get", arguments);
    }
  }.location,
  set: {
    location() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["document"], "document", "location_set", arguments);
    }
  }.location
});