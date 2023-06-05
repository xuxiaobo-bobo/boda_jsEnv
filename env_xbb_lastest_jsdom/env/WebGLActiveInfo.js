// WebGLActiveInfo对象

bodavm.memory.globalobj['WebGLActiveInfo'] = function WebGLActiveInfo() {
  console.log_copy('WebGLActiveInfo 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebGLActiveInfo)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebGLActiveInfo'], "WebGLActiveInfo");
bodavm.toolsFunc.defineProperty('WebGLActiveInfo', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGLActiveInfo'].prototype, "WebGLActiveInfo", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGLActiveInfo', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGLActiveInfo'].prototype, "WebGLActiveInfo", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGLActiveInfo', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGLActiveInfo'].prototype, "WebGLActiveInfo", "name_get", arguments);
  },
  set: undefined
}, 'prototype');