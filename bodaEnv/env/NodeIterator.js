// NodeIterator对象

bodaEnv.memory.globlProtoObj["NodeIterator"] = function NodeIterator() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NodeIterator 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NodeIterator"], "NodeIterator");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "root", {
  configurable: true,
  enumerable: true,
  get: {
    root() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "NodeIterator", "root_get", arguments);
    }
  }.root,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "referenceNode", {
  configurable: true,
  enumerable: true,
  get: {
    referenceNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "NodeIterator", "referenceNode_get", arguments);
    }
  }.referenceNode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "pointerBeforeReferenceNode", {
  configurable: true,
  enumerable: true,
  get: {
    pointerBeforeReferenceNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "NodeIterator", "pointerBeforeReferenceNode_get", arguments);
    }
  }.pointerBeforeReferenceNode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "whatToShow", {
  configurable: true,
  enumerable: true,
  get: {
    whatToShow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "NodeIterator", "whatToShow_get", arguments);
    }
  }.whatToShow,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "filter", {
  configurable: true,
  enumerable: true,
  get: {
    filter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "NodeIterator", "filter_get", arguments);
    }
  }.filter,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "detach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    detach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "NodeIterator", "detach", arguments);
    }
  }.detach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "nextNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    nextNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "NodeIterator", "nextNode", arguments);
    }
  }.nextNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "previousNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    previousNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NodeIterator"].prototype, "NodeIterator", "previousNode", arguments);
    }
  }.previousNode
});