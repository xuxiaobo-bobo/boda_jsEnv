// FederatedCredential对象

bodavm.memory.globalobj['FederatedCredential'] = function FederatedCredential() {
  console.log_copy('FederatedCredential 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof FederatedCredential)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FederatedCredential': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FederatedCredential'], "FederatedCredential");
bodavm.memory.globalobj['FederatedCredential'].prototype.__proto__ = bodavm.memory.globalobj['Credential'].prototype;
bodavm.memory.globalobj['FederatedCredential'].__proto__ = bodavm.memory.globalobj['Credential'];
bodavm.toolsFunc.defineProperty('FederatedCredential', "provider", {
  configurable: true,
  enumerable: true,
  get: function provider() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FederatedCredential'].prototype, "FederatedCredential", "provider_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FederatedCredential', "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FederatedCredential'].prototype, "FederatedCredential", "protocol_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FederatedCredential', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FederatedCredential'].prototype, "FederatedCredential", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FederatedCredential', "iconURL", {
  configurable: true,
  enumerable: true,
  get: function iconURL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FederatedCredential'].prototype, "FederatedCredential", "iconURL_get", arguments);
  },
  set: undefined
}, 'prototype');