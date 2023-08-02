// Highlight对象

Highlight = function Highlight() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Highlight 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Highlight, "Highlight");
bodavm.toolsFunc.defineProperty(Highlight.prototype, "priority", {
  configurable: true,
  enumerable: true,
  get: function priority() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "priority_get", arguments);
  },
  set: function priority() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "priority_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "add", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Highlight.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, Highlight.prototype, "Highlight", "values", arguments);
  }
});