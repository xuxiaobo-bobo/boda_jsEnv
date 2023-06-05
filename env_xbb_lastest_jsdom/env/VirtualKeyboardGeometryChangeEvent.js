// VirtualKeyboardGeometryChangeEvent对象

bodavm.memory.globalobj['VirtualKeyboardGeometryChangeEvent'] = function VirtualKeyboardGeometryChangeEvent() {
  console.log_copy('VirtualKeyboardGeometryChangeEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof VirtualKeyboardGeometryChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VirtualKeyboardGeometryChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['VirtualKeyboardGeometryChangeEvent'], "VirtualKeyboardGeometryChangeEvent");
bodavm.memory.globalobj['VirtualKeyboardGeometryChangeEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['VirtualKeyboardGeometryChangeEvent'].__proto__ = bodavm.memory.globalobj['Event'];