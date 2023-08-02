// Attr对象

Attr = function Attr() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Attr)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Attr 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Attr, "Attr");
Attr.prototype.__proto__ = Node.prototype;
Attr.__proto__ = Node;
bodavm.toolsFunc.defineProperty(Attr.prototype, "namespaceURI", {
  configurable: true,
  enumerable: true,
  get: function namespaceURI() {
    return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "namespaceURI_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Attr.prototype, "prefix", {
  configurable: true,
  enumerable: true,
  get: function prefix() {
    return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "prefix_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Attr.prototype, "localName", {
  configurable: true,
  enumerable: true,
  get: function localName() {
    return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "localName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Attr.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Attr.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Attr.prototype, "ownerElement", {
  configurable: true,
  enumerable: true,
  get: function ownerElement() {
    return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "ownerElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Attr.prototype, "specified", {
  configurable: true,
  enumerable: true,
  get: function specified() {
    return bodavm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "specified_get", arguments);
  },
  set: undefined
});