// TrustedTypePolicyFactory对象

bodavm.memory.globalobj['TrustedTypePolicyFactory'] = function TrustedTypePolicyFactory() {
  console.log_copy('TrustedTypePolicyFactory 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TrustedTypePolicyFactory)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TrustedTypePolicyFactory'], "TrustedTypePolicyFactory");
bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['TrustedTypePolicyFactory'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "emptyHTML", {
  configurable: true,
  enumerable: true,
  get: function emptyHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "emptyHTML_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "emptyScript", {
  configurable: true,
  enumerable: true,
  get: function emptyScript() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "emptyScript_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "defaultPolicy", {
  configurable: true,
  enumerable: true,
  get: function defaultPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "defaultPolicy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "createPolicy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "createPolicy", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "getAttributeType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "getAttributeType", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "getPropertyType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPropertyType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "getPropertyType", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "getTypeMapping", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTypeMapping() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "getTypeMapping", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "isHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "isHTML", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "isScript", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isScript() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "isScript", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicyFactory', "isScriptURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isScriptURL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype, "TrustedTypePolicyFactory", "isScriptURL", arguments);
  }
}, 'prototype');