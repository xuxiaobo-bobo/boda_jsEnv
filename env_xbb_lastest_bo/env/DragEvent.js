// DragEvent对象

DragEvent = function DragEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DragEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DragEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DragEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DragEvent, "DragEvent");
DragEvent.prototype.__proto__ = MouseEvent.prototype;
DragEvent.__proto__ = MouseEvent;
bodavm.toolsFunc.defineProperty(DragEvent.prototype, "dataTransfer", {
  configurable: true,
  enumerable: true,
  get: function dataTransfer() {
    return bodavm.toolsFunc.dispatch(this, DragEvent.prototype, "DragEvent", "dataTransfer_get", arguments);
  },
  set: undefined
});