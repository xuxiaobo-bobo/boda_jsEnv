// FormDataEvent对象

bodavm.memory.globalobj['FormDataEvent'] = function FormDataEvent() {
  console.log_copy('FormDataEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof FormDataEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FormDataEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FormDataEvent'], "FormDataEvent");
bodavm.memory.globalobj['FormDataEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['FormDataEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('FormDataEvent', "formData", {
  configurable: true,
  enumerable: true,
  get: function formData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FormDataEvent'].prototype, "FormDataEvent", "formData_get", arguments);
  },
  set: undefined
}, 'prototype');