// PointerEvent对象

PointerEvent = function PointerEvent() {
  let arg = arguments[0];
  let arg2 = arguments[1];
  if (bodavm.memory.listenerProxy[arg]['res']) {
    return bodavm.memory.listenerProxy[arg]['res'];
  }
  this.isTrusted = false;
  bodavm.toolsFunc.setProtoAttr.call(this, this, arg);
  bodavm.toolsFunc.symbolProperty(this);
  if (arg2 != 'bobo') {
    console.log_copy('PointerEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PointerEvent, "PointerEvent");
PointerEvent.prototype.__proto__ = MouseEvent.prototype;
PointerEvent.__proto__ = MouseEvent;
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "pointerId", {
  configurable: true,
  enumerable: true,
  get: function pointerId() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "pointerId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "pressure", {
  configurable: true,
  enumerable: true,
  get: function pressure() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "pressure_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "tiltX", {
  configurable: true,
  enumerable: true,
  get: function tiltX() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "tiltX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "tiltY", {
  configurable: true,
  enumerable: true,
  get: function tiltY() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "tiltY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "azimuthAngle", {
  configurable: true,
  enumerable: true,
  get: function azimuthAngle() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "azimuthAngle_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "altitudeAngle", {
  configurable: true,
  enumerable: true,
  get: function altitudeAngle() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "altitudeAngle_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "tangentialPressure", {
  configurable: true,
  enumerable: true,
  get: function tangentialPressure() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "tangentialPressure_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "twist", {
  configurable: true,
  enumerable: true,
  get: function twist() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "twist_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "pointerType", {
  configurable: true,
  enumerable: true,
  get: function pointerType() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "pointerType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "isPrimary", {
  configurable: true,
  enumerable: true,
  get: function isPrimary() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "isPrimary_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "getCoalescedEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCoalescedEvents() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "getCoalescedEvents", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "getPredictedEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPredictedEvents() {
    return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "getPredictedEvents", arguments);
  }
});