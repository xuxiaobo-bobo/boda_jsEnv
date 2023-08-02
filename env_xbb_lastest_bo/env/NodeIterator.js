// NodeIterator对象

NodeIterator = function NodeIterator() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NodeIterator)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NodeIterator 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NodeIterator, "NodeIterator");
bodavm.toolsFunc.defineProperty(NodeIterator.prototype, "root", {
  configurable: true,
  enumerable: true,
  get: function root() {
    return bodavm.toolsFunc.dispatch(this, NodeIterator.prototype, "NodeIterator", "root_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NodeIterator.prototype, "referenceNode", {
  configurable: true,
  enumerable: true,
  get: function referenceNode() {
    return bodavm.toolsFunc.dispatch(this, NodeIterator.prototype, "NodeIterator", "referenceNode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NodeIterator.prototype, "pointerBeforeReferenceNode", {
  configurable: true,
  enumerable: true,
  get: function pointerBeforeReferenceNode() {
    return bodavm.toolsFunc.dispatch(this, NodeIterator.prototype, "NodeIterator", "pointerBeforeReferenceNode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NodeIterator.prototype, "whatToShow", {
  configurable: true,
  enumerable: true,
  get: function whatToShow() {
    return bodavm.toolsFunc.dispatch(this, NodeIterator.prototype, "NodeIterator", "whatToShow_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NodeIterator.prototype, "filter", {
  configurable: true,
  enumerable: true,
  get: function filter() {
    return bodavm.toolsFunc.dispatch(this, NodeIterator.prototype, "NodeIterator", "filter_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NodeIterator.prototype, "detach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function detach() {
    return bodavm.toolsFunc.dispatch(this, NodeIterator.prototype, "NodeIterator", "detach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NodeIterator.prototype, "nextNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function nextNode() {
    return bodavm.toolsFunc.dispatch(this, NodeIterator.prototype, "NodeIterator", "nextNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NodeIterator.prototype, "previousNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function previousNode() {
    return bodavm.toolsFunc.dispatch(this, NodeIterator.prototype, "NodeIterator", "previousNode", arguments);
  }
});