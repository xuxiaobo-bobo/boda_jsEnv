// TrustedHTML对象

bodavm.memory.globalobj['TrustedHTML'] = function TrustedHTML() {
  console.log_copy('TrustedHTML 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TrustedHTML)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TrustedHTML'], "TrustedHTML");
bodavm.toolsFunc.defineProperty('TrustedHTML', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedHTML'].prototype, "TrustedHTML", "toJSON", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedHTML', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedHTML'].prototype, "TrustedHTML", "toString", arguments);
  }
}, 'prototype');