// TrustedScript对象

bodavm.memory.globalobj['TrustedScript'] = function TrustedScript() {
  console.log_copy('TrustedScript 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TrustedScript)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TrustedScript'], "TrustedScript");
bodavm.toolsFunc.defineProperty('TrustedScript', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedScript'].prototype, "TrustedScript", "toJSON", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedScript', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedScript'].prototype, "TrustedScript", "toString", arguments);
  }
}, 'prototype');