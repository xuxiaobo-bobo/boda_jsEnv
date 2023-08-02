// ProgressEvent对象

ProgressEvent = function ProgressEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ProgressEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ProgressEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ProgressEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ProgressEvent, "ProgressEvent");
ProgressEvent.prototype.__proto__ = Event.prototype;
ProgressEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(ProgressEvent.prototype, "lengthComputable", {
  configurable: true,
  enumerable: true,
  get: function lengthComputable() {
    return bodavm.toolsFunc.dispatch(this, ProgressEvent.prototype, "ProgressEvent", "lengthComputable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ProgressEvent.prototype, "loaded", {
  configurable: true,
  enumerable: true,
  get: function loaded() {
    return bodavm.toolsFunc.dispatch(this, ProgressEvent.prototype, "ProgressEvent", "loaded_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ProgressEvent.prototype, "total", {
  configurable: true,
  enumerable: true,
  get: function total() {
    return bodavm.toolsFunc.dispatch(this, ProgressEvent.prototype, "ProgressEvent", "total_get", arguments);
  },
  set: undefined
});