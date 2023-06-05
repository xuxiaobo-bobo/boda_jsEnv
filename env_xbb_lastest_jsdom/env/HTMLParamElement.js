// HTMLParamElement对象

bodavm.memory.globalobj['HTMLParamElement'] = function HTMLParamElement() {
  console.log_copy('HTMLParamElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLParamElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLParamElement'], "HTMLParamElement");
bodavm.memory.globalobj['HTMLParamElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLParamElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLParamElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParamElement'].prototype, "HTMLParamElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParamElement'].prototype, "HTMLParamElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLParamElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParamElement'].prototype, "HTMLParamElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParamElement'].prototype, "HTMLParamElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLParamElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParamElement'].prototype, "HTMLParamElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParamElement'].prototype, "HTMLParamElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLParamElement', "valueType", {
  configurable: true,
  enumerable: true,
  get: function valueType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParamElement'].prototype, "HTMLParamElement", "valueType_get", arguments);
  },
  set: function valueType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLParamElement'].prototype, "HTMLParamElement", "valueType_set", arguments);
  }
}, 'prototype');