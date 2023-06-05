// PublicKeyCredential对象

bodavm.memory.globalobj['PublicKeyCredential'] = function PublicKeyCredential() {
  console.log_copy('PublicKeyCredential 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PublicKeyCredential)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PublicKeyCredential'], "PublicKeyCredential");
bodavm.memory.globalobj['PublicKeyCredential'].prototype.__proto__ = bodavm.memory.globalobj['Credential'].prototype;
bodavm.memory.globalobj['PublicKeyCredential'].__proto__ = bodavm.memory.globalobj['Credential'];
bodavm.toolsFunc.defineProperty('PublicKeyCredential', "isUserVerifyingPlatformAuthenticatorAvailable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isUserVerifyingPlatformAuthenticatorAvailable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PublicKeyCredential'].undefined, "PublicKeyCredential", "isUserVerifyingPlatformAuthenticatorAvailable", arguments);
  }
});
bodavm.toolsFunc.defineProperty('PublicKeyCredential', "isConditionalMediationAvailable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConditionalMediationAvailable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PublicKeyCredential'].undefined, "PublicKeyCredential", "isConditionalMediationAvailable", arguments);
  }
});
bodavm.toolsFunc.defineProperty('PublicKeyCredential', "rawId", {
  configurable: true,
  enumerable: true,
  get: function rawId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PublicKeyCredential'].prototype, "PublicKeyCredential", "rawId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PublicKeyCredential', "response", {
  configurable: true,
  enumerable: true,
  get: function response() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PublicKeyCredential'].prototype, "PublicKeyCredential", "response_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PublicKeyCredential', "authenticatorAttachment", {
  configurable: true,
  enumerable: true,
  get: function authenticatorAttachment() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PublicKeyCredential'].prototype, "PublicKeyCredential", "authenticatorAttachment_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PublicKeyCredential', "getClientExtensionResults", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getClientExtensionResults() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PublicKeyCredential'].prototype, "PublicKeyCredential", "getClientExtensionResults", arguments);
  }
}, 'prototype');