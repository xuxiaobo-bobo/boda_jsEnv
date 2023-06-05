// CSSTransformValue对象

bodavm.memory.globalobj['CSSTransformValue'] = function CSSTransformValue() {
  console.log_copy('CSSTransformValue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSTransformValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSTransformValue': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSTransformValue'], "CSSTransformValue");
bodavm.memory.globalobj['CSSTransformValue'].prototype.__proto__ = bodavm.memory.globalobj['CSSStyleValue'].prototype;
bodavm.memory.globalobj['CSSTransformValue'].__proto__ = bodavm.memory.globalobj['CSSStyleValue'];
bodavm.toolsFunc.defineProperty('CSSTransformValue', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformValue'].prototype, "CSSTransformValue", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTransformValue', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformValue'].prototype, "CSSTransformValue", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTransformValue', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformValue'].prototype, "CSSTransformValue", "values", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTransformValue', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformValue'].prototype, "CSSTransformValue", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTransformValue', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformValue'].prototype, "CSSTransformValue", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTransformValue', "is2D", {
  configurable: true,
  enumerable: true,
  get: function is2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformValue'].prototype, "CSSTransformValue", "is2D_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTransformValue', "toMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toMatrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformValue'].prototype, "CSSTransformValue", "toMatrix", arguments);
  }
}, 'prototype');