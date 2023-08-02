// USB对象

USB = function USB() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USB)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USB 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USB, "USB");
USB.prototype.__proto__ = EventTarget.prototype;
USB.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(USB.prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, USB.prototype, "USB", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, USB.prototype, "USB", "onconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USB.prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, USB.prototype, "USB", "ondisconnect_get", arguments);
  },
  set: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, USB.prototype, "USB", "ondisconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USB.prototype, "getDevices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDevices() {
    return bodavm.toolsFunc.dispatch(this, USB.prototype, "USB", "getDevices", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USB.prototype, "requestDevice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestDevice() {
    return bodavm.toolsFunc.dispatch(this, USB.prototype, "USB", "requestDevice", arguments);
  }
});