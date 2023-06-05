// CSSNumericValue对象

bodavm.memory.globalobj['CSSNumericValue'] = function CSSNumericValue() {
  console.log_copy('CSSNumericValue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSNumericValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSNumericValue'], "CSSNumericValue");
bodavm.memory.globalobj['CSSNumericValue'].prototype.__proto__ = bodavm.memory.globalobj['CSSStyleValue'].prototype;
bodavm.memory.globalobj['CSSNumericValue'].__proto__ = bodavm.memory.globalobj['CSSStyleValue'];
bodavm.toolsFunc.defineProperty('CSSNumericValue', "parse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function parse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].undefined, "CSSNumericValue", "parse", arguments);
  }
});
bodavm.toolsFunc.defineProperty('CSSNumericValue', "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "add", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericValue', "div", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function div() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "div", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericValue', "equals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function equals() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "equals", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericValue', "max", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function max() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "max", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericValue', "min", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function min() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "min", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericValue', "mul", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function mul() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "mul", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericValue', "sub", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sub() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "sub", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericValue', "to", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function to() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "to", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericValue', "toSum", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toSum() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "toSum", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericValue', "type", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericValue'].prototype, "CSSNumericValue", "type", arguments);
  }
}, 'prototype');