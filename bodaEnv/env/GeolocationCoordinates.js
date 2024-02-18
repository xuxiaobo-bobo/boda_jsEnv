// GeolocationCoordinates对象

bodaEnv.memory.globlProtoObj["GeolocationCoordinates"] = function GeolocationCoordinates() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GeolocationCoordinates 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GeolocationCoordinates"], "GeolocationCoordinates");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "latitude", {
  configurable: true,
  enumerable: true,
  get: {
    latitude() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "GeolocationCoordinates", "latitude_get", arguments);
    }
  }.latitude,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "longitude", {
  configurable: true,
  enumerable: true,
  get: {
    longitude() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "GeolocationCoordinates", "longitude_get", arguments);
    }
  }.longitude,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "altitude", {
  configurable: true,
  enumerable: true,
  get: {
    altitude() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "GeolocationCoordinates", "altitude_get", arguments);
    }
  }.altitude,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "accuracy", {
  configurable: true,
  enumerable: true,
  get: {
    accuracy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "GeolocationCoordinates", "accuracy_get", arguments);
    }
  }.accuracy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "altitudeAccuracy", {
  configurable: true,
  enumerable: true,
  get: {
    altitudeAccuracy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "GeolocationCoordinates", "altitudeAccuracy_get", arguments);
    }
  }.altitudeAccuracy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "heading", {
  configurable: true,
  enumerable: true,
  get: {
    heading() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "GeolocationCoordinates", "heading_get", arguments);
    }
  }.heading,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "speed", {
  configurable: true,
  enumerable: true,
  get: {
    speed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationCoordinates"].prototype, "GeolocationCoordinates", "speed_get", arguments);
    }
  }.speed,
  set: undefined
});