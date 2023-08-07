// Range对象

Range = function Range() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Range 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Range, "Range");
Range.prototype.__proto__ = AbstractRange.prototype;
Range.__proto__ = AbstractRange;
bodavm.toolsFunc.defineProperty(Range, "START_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(Range, "START_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(Range, "END_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(Range, "END_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(Range.prototype, "commonAncestorContainer", {
  configurable: true,
  enumerable: true,
  get: function commonAncestorContainer() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "commonAncestorContainer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Range.prototype, "START_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(Range.prototype, "START_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(Range.prototype, "END_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(Range.prototype, "END_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(Range.prototype, "cloneContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cloneContents() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "cloneContents", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "cloneRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cloneRange() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "cloneRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "collapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function collapse() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "collapse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "compareBoundaryPoints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compareBoundaryPoints() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "compareBoundaryPoints", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "comparePoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function comparePoint() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "comparePoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "createContextualFragment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createContextualFragment() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "createContextualFragment", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "deleteContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteContents() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "deleteContents", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "detach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function detach() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "detach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "expand", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function expand() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "expand", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "extractContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function extractContents() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "extractContents", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "getBoundingClientRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBoundingClientRect() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "getBoundingClientRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "getClientRects", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getClientRects() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "getClientRects", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "insertNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertNode() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "insertNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "intersectsNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function intersectsNode() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "intersectsNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "isPointInRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInRange() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "isPointInRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "selectNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectNode() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "selectNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "selectNodeContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectNodeContents() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "selectNodeContents", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "setEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setEnd() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "setEnd", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "setEndAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setEndAfter() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "setEndAfter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "setEndBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setEndBefore() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "setEndBefore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "setStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStart() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "setStart", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "setStartAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStartAfter() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "setStartAfter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "setStartBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStartBefore() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "setStartBefore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "surroundContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function surroundContents() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "surroundContents", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Range.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, Range.prototype, "Range", "toString", arguments);
  }
});