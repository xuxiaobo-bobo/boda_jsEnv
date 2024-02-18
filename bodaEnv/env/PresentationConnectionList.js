// PresentationConnectionList对象

bodaEnv.memory.globlProtoObj["PresentationConnectionList"] = function PresentationConnectionList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PresentationConnectionList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PresentationConnectionList"], "PresentationConnectionList");
bodaEnv.memory.globlProtoObj["PresentationConnectionList"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["PresentationConnectionList"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnectionList"].prototype, "connections", {
  configurable: true,
  enumerable: true,
  get: {
    connections() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnectionList"].prototype, "PresentationConnectionList", "connections_get", arguments);
    }
  }.connections,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnectionList"].prototype, "onconnectionavailable", {
  configurable: true,
  enumerable: true,
  get: {
    onconnectionavailable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnectionList"].prototype, "PresentationConnectionList", "onconnectionavailable_get", arguments);
    }
  }.onconnectionavailable,
  set: {
    onconnectionavailable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnectionList"].prototype, "PresentationConnectionList", "onconnectionavailable_set", arguments);
    }
  }.onconnectionavailable
});