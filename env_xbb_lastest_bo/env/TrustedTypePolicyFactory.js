// TrustedTypePolicyFactory对象

TrustedTypePolicyFactory = function TrustedTypePolicyFactory() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TrustedTypePolicyFactory)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TrustedTypePolicyFactory 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TrustedTypePolicyFactory, "TrustedTypePolicyFactory");
TrustedTypePolicyFactory.prototype.__proto__ = EventTarget.prototype;
TrustedTypePolicyFactory.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "emptyHTML", {
  configurable: true,
  enumerable: true,
  get: function emptyHTML() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "emptyHTML_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "emptyScript", {
  configurable: true,
  enumerable: true,
  get: function emptyScript() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "emptyScript_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "defaultPolicy", {
  configurable: true,
  enumerable: true,
  get: function defaultPolicy() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "defaultPolicy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "createPolicy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createPolicy() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "createPolicy", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "getAttributeType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeType() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "getAttributeType", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "getPropertyType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPropertyType() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "getPropertyType", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "getTypeMapping", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTypeMapping() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "getTypeMapping", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "isHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isHTML() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "isHTML", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "isScript", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isScript() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "isScript", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicyFactory.prototype, "isScriptURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isScriptURL() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory", "isScriptURL", arguments);
  }
});