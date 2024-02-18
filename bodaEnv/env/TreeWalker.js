// TreeWalker对象

bodaEnv.memory.globlProtoObj["TreeWalker"] = function TreeWalker() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TreeWalker 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TreeWalker"], "TreeWalker");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "root", {
  configurable: true,
  enumerable: true,
  get: {
    root() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "root_get", arguments);
    }
  }.root,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "whatToShow", {
  configurable: true,
  enumerable: true,
  get: {
    whatToShow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "whatToShow_get", arguments);
    }
  }.whatToShow,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "filter", {
  configurable: true,
  enumerable: true,
  get: {
    filter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "filter_get", arguments);
    }
  }.filter,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "currentNode", {
  configurable: true,
  enumerable: true,
  get: {
    currentNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "currentNode_get", arguments);
    }
  }.currentNode,
  set: {
    currentNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "currentNode_set", arguments);
    }
  }.currentNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "firstChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    firstChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "firstChild", arguments);
    }
  }.firstChild
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "lastChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lastChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "lastChild", arguments);
    }
  }.lastChild
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "nextNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    nextNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "nextNode", arguments);
    }
  }.nextNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "nextSibling", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    nextSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "nextSibling", arguments);
    }
  }.nextSibling
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "parentNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    parentNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "parentNode", arguments);
    }
  }.parentNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "previousNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    previousNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "previousNode", arguments);
    }
  }.previousNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "previousSibling", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    previousSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TreeWalker"].prototype, "TreeWalker", "previousSibling", arguments);
    }
  }.previousSibling
});