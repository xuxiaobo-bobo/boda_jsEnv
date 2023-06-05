// AuthenticatorResponse对象

bodavm.memory.globalobj['AuthenticatorResponse'] = function AuthenticatorResponse() {
  console.log_copy('AuthenticatorResponse 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AuthenticatorResponse)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AuthenticatorResponse'], "AuthenticatorResponse");
bodavm.toolsFunc.defineProperty('AuthenticatorResponse', "clientDataJSON", {
  configurable: true,
  enumerable: true,
  get: function clientDataJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AuthenticatorResponse'].prototype, "AuthenticatorResponse", "clientDataJSON_get", arguments);
  },
  set: undefined
}, 'prototype');