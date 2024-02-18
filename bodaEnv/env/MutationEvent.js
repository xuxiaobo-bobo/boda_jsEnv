// MutationEvent对象

bodaEnv.memory.globlProtoObj["MutationEvent"] = function MutationEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MutationEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MutationEvent"], "MutationEvent");
bodaEnv.memory.globlProtoObj["MutationEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["MutationEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"], "MODIFICATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"], "ADDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"], "REMOVAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "relatedNode", {
  configurable: true,
  enumerable: true,
  get: {
    relatedNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "MutationEvent", "relatedNode_get", arguments);
    }
  }.relatedNode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "prevValue", {
  configurable: true,
  enumerable: true,
  get: {
    prevValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "MutationEvent", "prevValue_get", arguments);
    }
  }.prevValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "newValue", {
  configurable: true,
  enumerable: true,
  get: {
    newValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "MutationEvent", "newValue_get", arguments);
    }
  }.newValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "attrName", {
  configurable: true,
  enumerable: true,
  get: {
    attrName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "MutationEvent", "attrName_get", arguments);
    }
  }.attrName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "attrChange", {
  configurable: true,
  enumerable: true,
  get: {
    attrChange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "MutationEvent", "attrChange_get", arguments);
    }
  }.attrChange,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "MODIFICATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "ADDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "REMOVAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "initMutationEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initMutationEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationEvent"].prototype, "MutationEvent", "initMutationEvent", arguments);
    }
  }.initMutationEvent
});