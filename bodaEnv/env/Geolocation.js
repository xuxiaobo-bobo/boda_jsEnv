// Geolocation对象

bodaEnv.memory.globlProtoObj["Geolocation"] = function Geolocation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Geolocation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Geolocation"], "Geolocation");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Geolocation"].prototype, "clearWatch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearWatch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Geolocation"].prototype, "Geolocation", "clearWatch", arguments);
    }
  }.clearWatch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Geolocation"].prototype, "getCurrentPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCurrentPosition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Geolocation"].prototype, "Geolocation", "getCurrentPosition", arguments);
    }
  }.getCurrentPosition
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Geolocation"].prototype, "watchPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    watchPosition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Geolocation"].prototype, "Geolocation", "watchPosition", arguments);
    }
  }.watchPosition
});