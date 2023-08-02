// FormDataEvent对象

FormDataEvent = function FormDataEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FormDataEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FormDataEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FormDataEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FormDataEvent, "FormDataEvent");
FormDataEvent.prototype.__proto__ = Event.prototype;
FormDataEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(FormDataEvent.prototype, "formData", {
  configurable: true,
  enumerable: true,
  get: function formData() {
    return bodavm.toolsFunc.dispatch(this, FormDataEvent.prototype, "FormDataEvent", "formData_get", arguments);
  },
  set: undefined
});