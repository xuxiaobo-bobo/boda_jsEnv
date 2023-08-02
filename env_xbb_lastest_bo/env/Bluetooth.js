// Bluetooth对象

Bluetooth = function Bluetooth() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Bluetooth)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Bluetooth 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Bluetooth, "Bluetooth");
Bluetooth.prototype.__proto__ = EventTarget.prototype;
Bluetooth.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Bluetooth.prototype, "getAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAvailability() {
    return bodavm.toolsFunc.dispatch(this, Bluetooth.prototype, "Bluetooth", "getAvailability", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Bluetooth.prototype, "requestDevice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestDevice() {
    return bodavm.toolsFunc.dispatch(this, Bluetooth.prototype, "Bluetooth", "requestDevice", arguments);
  }
});