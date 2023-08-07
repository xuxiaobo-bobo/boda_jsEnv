// DocumentFragment对象

DocumentFragment = function DocumentFragment() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DocumentFragment 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DocumentFragment, "DocumentFragment");
DocumentFragment.prototype.__proto__ = Node.prototype;
DocumentFragment.__proto__ = Node;
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "children", {
  configurable: true,
  enumerable: true,
  get: function children() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "children_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "firstElementChild", {
  configurable: true,
  enumerable: true,
  get: function firstElementChild() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "firstElementChild_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "lastElementChild", {
  configurable: true,
  enumerable: true,
  get: function lastElementChild() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "lastElementChild_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "childElementCount", {
  configurable: true,
  enumerable: true,
  get: function childElementCount() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "childElementCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "append", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "getElementById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementById() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "getElementById", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "prepend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prepend() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "prepend", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "querySelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelector() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "querySelector", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "querySelectorAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelectorAll() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "querySelectorAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DocumentFragment.prototype, "replaceChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceChildren() {
    return bodavm.toolsFunc.dispatch(this, DocumentFragment.prototype, "DocumentFragment", "replaceChildren", arguments);
  }
});