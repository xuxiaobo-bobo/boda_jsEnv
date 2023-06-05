// AuthenticatorAssertionResponse对象

bodavm.memory.globalobj['AuthenticatorAssertionResponse'] = function AuthenticatorAssertionResponse() {
  console.log_copy('AuthenticatorAssertionResponse 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AuthenticatorAssertionResponse)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AuthenticatorAssertionResponse'], "AuthenticatorAssertionResponse");
bodavm.memory.globalobj['AuthenticatorAssertionResponse'].prototype.__proto__ = bodavm.memory.globalobj['AuthenticatorResponse'].prototype;
bodavm.memory.globalobj['AuthenticatorAssertionResponse'].__proto__ = bodavm.memory.globalobj['AuthenticatorResponse'];
bodavm.toolsFunc.defineProperty('AuthenticatorAssertionResponse', "authenticatorData", {
  configurable: true,
  enumerable: true,
  get: function authenticatorData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AuthenticatorAssertionResponse'].prototype, "AuthenticatorAssertionResponse", "authenticatorData_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AuthenticatorAssertionResponse', "signature", {
  configurable: true,
  enumerable: true,
  get: function signature() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AuthenticatorAssertionResponse'].prototype, "AuthenticatorAssertionResponse", "signature_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AuthenticatorAssertionResponse', "userHandle", {
  configurable: true,
  enumerable: true,
  get: function userHandle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AuthenticatorAssertionResponse'].prototype, "AuthenticatorAssertionResponse", "userHandle_get", arguments);
  },
  set: undefined
}, 'prototype');