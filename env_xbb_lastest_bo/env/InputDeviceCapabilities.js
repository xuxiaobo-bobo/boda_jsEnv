// InputDeviceCapabilities对象

InputDeviceCapabilities = function InputDeviceCapabilities() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('InputDeviceCapabilities 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(InputDeviceCapabilities, "InputDeviceCapabilities");
bodavm.toolsFunc.defineProperty(InputDeviceCapabilities.prototype, "firesTouchEvents", {
  configurable: true,
  enumerable: true,
  get: function firesTouchEvents() {
    return bodavm.toolsFunc.dispatch(this, InputDeviceCapabilities.prototype, "InputDeviceCapabilities", "firesTouchEvents_get", arguments);
  },
  set: undefined
});