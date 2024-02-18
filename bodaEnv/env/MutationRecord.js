// MutationRecord对象

bodaEnv.memory.globlProtoObj["MutationRecord"] = function MutationRecord() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MutationRecord 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MutationRecord"], "MutationRecord");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "MutationRecord", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "MutationRecord", "target_get", arguments);
    }
  }.target,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "addedNodes", {
  configurable: true,
  enumerable: true,
  get: {
    addedNodes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "MutationRecord", "addedNodes_get", arguments);
    }
  }.addedNodes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "removedNodes", {
  configurable: true,
  enumerable: true,
  get: {
    removedNodes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "MutationRecord", "removedNodes_get", arguments);
    }
  }.removedNodes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "previousSibling", {
  configurable: true,
  enumerable: true,
  get: {
    previousSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "MutationRecord", "previousSibling_get", arguments);
    }
  }.previousSibling,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "nextSibling", {
  configurable: true,
  enumerable: true,
  get: {
    nextSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "MutationRecord", "nextSibling_get", arguments);
    }
  }.nextSibling,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "attributeName", {
  configurable: true,
  enumerable: true,
  get: {
    attributeName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "MutationRecord", "attributeName_get", arguments);
    }
  }.attributeName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "attributeNamespace", {
  configurable: true,
  enumerable: true,
  get: {
    attributeNamespace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "MutationRecord", "attributeNamespace_get", arguments);
    }
  }.attributeNamespace,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "oldValue", {
  configurable: true,
  enumerable: true,
  get: {
    oldValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationRecord"].prototype, "MutationRecord", "oldValue_get", arguments);
    }
  }.oldValue,
  set: undefined
});