// VirtualKeyboardGeometryChangeEvent对象

VirtualKeyboardGeometryChangeEvent = function VirtualKeyboardGeometryChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof VirtualKeyboardGeometryChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VirtualKeyboardGeometryChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('VirtualKeyboardGeometryChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(VirtualKeyboardGeometryChangeEvent, "VirtualKeyboardGeometryChangeEvent");
VirtualKeyboardGeometryChangeEvent.prototype.__proto__ = Event.prototype;
VirtualKeyboardGeometryChangeEvent.__proto__ = Event;