// InputDeviceInfo对象

InputDeviceInfo = function InputDeviceInfo() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof InputDeviceInfo)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('InputDeviceInfo 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(InputDeviceInfo, "InputDeviceInfo");
InputDeviceInfo.prototype.__proto__ = MediaDeviceInfo.prototype;
InputDeviceInfo.__proto__ = MediaDeviceInfo;
bodavm.toolsFunc.defineProperty(InputDeviceInfo.prototype, "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCapabilities() {
    return bodavm.toolsFunc.dispatch(this, InputDeviceInfo.prototype, "InputDeviceInfo", "getCapabilities", arguments);
  }
});