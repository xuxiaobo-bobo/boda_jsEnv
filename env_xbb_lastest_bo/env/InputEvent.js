// InputEvent对象

InputEvent = function InputEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof InputEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'InputEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('InputEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(InputEvent, "InputEvent");
InputEvent.prototype.__proto__ = UIEvent.prototype;
InputEvent.__proto__ = UIEvent;
bodavm.toolsFunc.defineProperty(InputEvent.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "data_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(InputEvent.prototype, "isComposing", {
  configurable: true,
  enumerable: true,
  get: function isComposing() {
    return bodavm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "isComposing_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(InputEvent.prototype, "inputType", {
  configurable: true,
  enumerable: true,
  get: function inputType() {
    return bodavm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "inputType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(InputEvent.prototype, "dataTransfer", {
  configurable: true,
  enumerable: true,
  get: function dataTransfer() {
    return bodavm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "dataTransfer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(InputEvent.prototype, "getTargetRanges", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTargetRanges() {
    return bodavm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "getTargetRanges", arguments);
  }
});