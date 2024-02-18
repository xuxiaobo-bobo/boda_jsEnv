// Range对象

bodaEnv.memory.globlProtoObj["Range"] = function Range() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Range 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Range"], "Range");
bodaEnv.memory.globlProtoObj["Range"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AbstractRange"].prototype;
bodaEnv.memory.globlProtoObj["Range"].__proto__ = bodaEnv.memory.globlProtoObj["AbstractRange"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"], "START_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"], "START_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"], "END_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"], "END_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "commonAncestorContainer", {
  configurable: true,
  enumerable: true,
  get: {
    commonAncestorContainer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "commonAncestorContainer_get", arguments);
    }
  }.commonAncestorContainer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "START_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "START_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "END_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "END_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "cloneContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cloneContents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "cloneContents", arguments);
    }
  }.cloneContents
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "cloneRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cloneRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "cloneRange", arguments);
    }
  }.cloneRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "collapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    collapse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "collapse", arguments);
    }
  }.collapse
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "compareBoundaryPoints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compareBoundaryPoints() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "compareBoundaryPoints", arguments);
    }
  }.compareBoundaryPoints
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "comparePoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    comparePoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "comparePoint", arguments);
    }
  }.comparePoint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "createContextualFragment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createContextualFragment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "createContextualFragment", arguments);
    }
  }.createContextualFragment
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "deleteContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteContents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "deleteContents", arguments);
    }
  }.deleteContents
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "detach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    detach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "detach", arguments);
    }
  }.detach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "expand", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    expand() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "expand", arguments);
    }
  }.expand
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "extractContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    extractContents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "extractContents", arguments);
    }
  }.extractContents
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "getBoundingClientRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBoundingClientRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "getBoundingClientRect", arguments);
    }
  }.getBoundingClientRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "getClientRects", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getClientRects() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "getClientRects", arguments);
    }
  }.getClientRects
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "insertNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "insertNode", arguments);
    }
  }.insertNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "intersectsNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    intersectsNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "intersectsNode", arguments);
    }
  }.intersectsNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "isPointInRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isPointInRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "isPointInRange", arguments);
    }
  }.isPointInRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "selectNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    selectNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "selectNode", arguments);
    }
  }.selectNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "selectNodeContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    selectNodeContents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "selectNodeContents", arguments);
    }
  }.selectNodeContents
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "setEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "setEnd", arguments);
    }
  }.setEnd
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "setEndAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setEndAfter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "setEndAfter", arguments);
    }
  }.setEndAfter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "setEndBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setEndBefore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "setEndBefore", arguments);
    }
  }.setEndBefore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "setStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "setStart", arguments);
    }
  }.setStart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "setStartAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setStartAfter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "setStartAfter", arguments);
    }
  }.setStartAfter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "setStartBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setStartBefore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "setStartBefore", arguments);
    }
  }.setStartBefore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "surroundContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    surroundContents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "surroundContents", arguments);
    }
  }.surroundContents
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Range"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Range"].prototype, "Range", "toString", arguments);
    }
  }.toString
});