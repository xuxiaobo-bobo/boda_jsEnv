// PresentationRequest对象

bodaEnv.memory.globlProtoObj["PresentationRequest"] = function PresentationRequest() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PresentationRequest 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PresentationRequest"], "PresentationRequest");
bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["PresentationRequest"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype, "onconnectionavailable", {
  configurable: true,
  enumerable: true,
  get: {
    onconnectionavailable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype, "PresentationRequest", "onconnectionavailable_get", arguments);
    }
  }.onconnectionavailable,
  set: {
    onconnectionavailable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype, "PresentationRequest", "onconnectionavailable_set", arguments);
    }
  }.onconnectionavailable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype, "getAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAvailability() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype, "PresentationRequest", "getAvailability", arguments);
    }
  }.getAvailability
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype, "reconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype, "PresentationRequest", "reconnect", arguments);
    }
  }.reconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationRequest"].prototype, "PresentationRequest", "start", arguments);
    }
  }.start
});