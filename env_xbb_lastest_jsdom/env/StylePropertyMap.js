// StylePropertyMap对象

bodavm.memory.globalobj['StylePropertyMap'] = function StylePropertyMap() {
  console.log_copy('StylePropertyMap 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof StylePropertyMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StylePropertyMap'], "StylePropertyMap");
bodavm.memory.globalobj['StylePropertyMap'].prototype.__proto__ = bodavm.memory.globalobj['StylePropertyMapReadOnly'].prototype;
bodavm.memory.globalobj['StylePropertyMap'].__proto__ = bodavm.memory.globalobj['StylePropertyMapReadOnly'];
bodavm.toolsFunc.defineProperty('StylePropertyMap', "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMap'].prototype, "StylePropertyMap", "append", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMap', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMap'].prototype, "StylePropertyMap", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMap', "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMap'].prototype, "StylePropertyMap", "delete", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMap', "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function set() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMap'].prototype, "StylePropertyMap", "set", arguments);
  }
}, 'prototype');