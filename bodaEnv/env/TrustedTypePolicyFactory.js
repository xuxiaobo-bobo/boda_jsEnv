// TrustedTypePolicyFactory对象

bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"] = function TrustedTypePolicyFactory() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TrustedTypePolicyFactory 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"], "TrustedTypePolicyFactory");
bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "emptyHTML", {
  configurable: true,
  enumerable: true,
  get: {
    emptyHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "emptyHTML_get", arguments);
    }
  }.emptyHTML,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "emptyScript", {
  configurable: true,
  enumerable: true,
  get: {
    emptyScript() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "emptyScript_get", arguments);
    }
  }.emptyScript,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "defaultPolicy", {
  configurable: true,
  enumerable: true,
  get: {
    defaultPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "defaultPolicy_get", arguments);
    }
  }.defaultPolicy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "createPolicy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "createPolicy", arguments);
    }
  }.createPolicy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "getAttributeType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttributeType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "getAttributeType", arguments);
    }
  }.getAttributeType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "getPropertyType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPropertyType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "getPropertyType", arguments);
    }
  }.getPropertyType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "getTypeMapping", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTypeMapping() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "getTypeMapping", arguments);
    }
  }.getTypeMapping
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "isHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "isHTML", arguments);
    }
  }.isHTML
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "isScript", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isScript() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "isScript", arguments);
    }
  }.isScript
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "isScriptURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isScriptURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicyFactory"].prototype, "TrustedTypePolicyFactory", "isScriptURL", arguments);
    }
  }.isScriptURL
});