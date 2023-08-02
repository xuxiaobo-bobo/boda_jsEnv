// HID对象

HID = function HID() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HID)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HID 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HID, "HID");
HID.prototype.__proto__ = EventTarget.prototype;
HID.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(HID.prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, HID.prototype, "HID", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, HID.prototype, "HID", "onconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HID.prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, HID.prototype, "HID", "ondisconnect_get", arguments);
  },
  set: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, HID.prototype, "HID", "ondisconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HID.prototype, "getDevices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDevices() {
    return bodavm.toolsFunc.dispatch(this, HID.prototype, "HID", "getDevices", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HID.prototype, "requestDevice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestDevice() {
    return bodavm.toolsFunc.dispatch(this, HID.prototype, "HID", "requestDevice", arguments);
  }
});