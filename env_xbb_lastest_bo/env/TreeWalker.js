// TreeWalker对象

TreeWalker = function TreeWalker() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TreeWalker)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TreeWalker 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TreeWalker, "TreeWalker");
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "root", {
  configurable: true,
  enumerable: true,
  get: function root() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "root_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "whatToShow", {
  configurable: true,
  enumerable: true,
  get: function whatToShow() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "whatToShow_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "filter", {
  configurable: true,
  enumerable: true,
  get: function filter() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "filter_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "currentNode", {
  configurable: true,
  enumerable: true,
  get: function currentNode() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "currentNode_get", arguments);
  },
  set: function currentNode() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "currentNode_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "firstChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function firstChild() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "firstChild", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "lastChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lastChild() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "lastChild", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "nextNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function nextNode() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "nextNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "nextSibling", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function nextSibling() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "nextSibling", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "parentNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function parentNode() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "parentNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "previousNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function previousNode() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "previousNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TreeWalker.prototype, "previousSibling", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function previousSibling() {
    return bodavm.toolsFunc.dispatch(this, TreeWalker.prototype, "TreeWalker", "previousSibling", arguments);
  }
});