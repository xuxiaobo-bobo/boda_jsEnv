// Selection对象

Selection = function Selection() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Selection)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Selection 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Selection, "Selection");
bodavm.toolsFunc.defineProperty(Selection.prototype, "anchorNode", {
  configurable: true,
  enumerable: true,
  get: function anchorNode() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "anchorNode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "anchorOffset", {
  configurable: true,
  enumerable: true,
  get: function anchorOffset() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "anchorOffset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "focusNode", {
  configurable: true,
  enumerable: true,
  get: function focusNode() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "focusNode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "focusOffset", {
  configurable: true,
  enumerable: true,
  get: function focusOffset() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "focusOffset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "isCollapsed", {
  configurable: true,
  enumerable: true,
  get: function isCollapsed() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "isCollapsed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "rangeCount", {
  configurable: true,
  enumerable: true,
  get: function rangeCount() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "rangeCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "baseNode", {
  configurable: true,
  enumerable: true,
  get: function baseNode() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "baseNode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "baseOffset", {
  configurable: true,
  enumerable: true,
  get: function baseOffset() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "baseOffset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "extentNode", {
  configurable: true,
  enumerable: true,
  get: function extentNode() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "extentNode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "extentOffset", {
  configurable: true,
  enumerable: true,
  get: function extentOffset() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "extentOffset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "addRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addRange() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "addRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "collapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function collapse() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "collapse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "collapseToEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function collapseToEnd() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "collapseToEnd", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "collapseToStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function collapseToStart() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "collapseToStart", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "containsNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function containsNode() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "containsNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "deleteFromDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteFromDocument() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "deleteFromDocument", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "empty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function empty() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "empty", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "extend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function extend() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "extend", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "getRangeAt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRangeAt() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "getRangeAt", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "modify", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function modify() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "modify", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "removeAllRanges", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeAllRanges() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "removeAllRanges", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "removeRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeRange() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "removeRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "selectAllChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectAllChildren() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "selectAllChildren", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "setBaseAndExtent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setBaseAndExtent() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "setBaseAndExtent", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "setPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPosition() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "setPosition", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Selection.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, Selection.prototype, "Selection", "toString", arguments);
  }
});