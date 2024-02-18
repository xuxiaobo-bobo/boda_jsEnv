// DeviceMotionEvent对象

bodaEnv.memory.globlProtoObj["DeviceMotionEvent"] = function DeviceMotionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DeviceMotionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DeviceMotionEvent"], "DeviceMotionEvent");
bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].prototype, "acceleration", {
  configurable: true,
  enumerable: true,
  get: {
    acceleration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].prototype, "DeviceMotionEvent", "acceleration_get", arguments);
    }
  }.acceleration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].prototype, "accelerationIncludingGravity", {
  configurable: true,
  enumerable: true,
  get: {
    accelerationIncludingGravity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].prototype, "DeviceMotionEvent", "accelerationIncludingGravity_get", arguments);
    }
  }.accelerationIncludingGravity,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].prototype, "rotationRate", {
  configurable: true,
  enumerable: true,
  get: {
    rotationRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].prototype, "DeviceMotionEvent", "rotationRate_get", arguments);
    }
  }.rotationRate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].prototype, "interval", {
  configurable: true,
  enumerable: true,
  get: {
    interval() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEvent"].prototype, "DeviceMotionEvent", "interval_get", arguments);
    }
  }.interval,
  set: undefined
});