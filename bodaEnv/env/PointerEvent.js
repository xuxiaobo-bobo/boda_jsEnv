// PointerEvent对象

bodaEnv.memory.globlProtoObj["PointerEvent"] = function PointerEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PointerEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PointerEvent"], "PointerEvent");
bodaEnv.memory.globlProtoObj["PointerEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["MouseEvent"].prototype;
bodaEnv.memory.globlProtoObj["PointerEvent"].__proto__ = bodaEnv.memory.globlProtoObj["MouseEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "pointerId", {
  configurable: true,
  enumerable: true,
  get: {
    pointerId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "pointerId_get", arguments);
    }
  }.pointerId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "pressure", {
  configurable: true,
  enumerable: true,
  get: {
    pressure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "pressure_get", arguments);
    }
  }.pressure,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "tiltX", {
  configurable: true,
  enumerable: true,
  get: {
    tiltX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "tiltX_get", arguments);
    }
  }.tiltX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "tiltY", {
  configurable: true,
  enumerable: true,
  get: {
    tiltY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "tiltY_get", arguments);
    }
  }.tiltY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "azimuthAngle", {
  configurable: true,
  enumerable: true,
  get: {
    azimuthAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "azimuthAngle_get", arguments);
    }
  }.azimuthAngle,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "altitudeAngle", {
  configurable: true,
  enumerable: true,
  get: {
    altitudeAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "altitudeAngle_get", arguments);
    }
  }.altitudeAngle,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "tangentialPressure", {
  configurable: true,
  enumerable: true,
  get: {
    tangentialPressure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "tangentialPressure_get", arguments);
    }
  }.tangentialPressure,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "twist", {
  configurable: true,
  enumerable: true,
  get: {
    twist() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "twist_get", arguments);
    }
  }.twist,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "pointerType", {
  configurable: true,
  enumerable: true,
  get: {
    pointerType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "pointerType_get", arguments);
    }
  }.pointerType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "isPrimary", {
  configurable: true,
  enumerable: true,
  get: {
    isPrimary() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "isPrimary_get", arguments);
    }
  }.isPrimary,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "getCoalescedEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCoalescedEvents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "getCoalescedEvents", arguments);
    }
  }.getCoalescedEvents
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "getPredictedEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPredictedEvents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PointerEvent"].prototype, "PointerEvent", "getPredictedEvents", arguments);
    }
  }.getPredictedEvents
});