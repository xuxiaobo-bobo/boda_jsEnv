// Selection对象

bodaEnv.memory.globlProtoObj["Selection"] = function Selection() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Selection 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Selection"], "Selection");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "anchorNode", {
  configurable: true,
  enumerable: true,
  get: {
    anchorNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "anchorNode_get", arguments);
    }
  }.anchorNode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "anchorOffset", {
  configurable: true,
  enumerable: true,
  get: {
    anchorOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "anchorOffset_get", arguments);
    }
  }.anchorOffset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "focusNode", {
  configurable: true,
  enumerable: true,
  get: {
    focusNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "focusNode_get", arguments);
    }
  }.focusNode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "focusOffset", {
  configurable: true,
  enumerable: true,
  get: {
    focusOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "focusOffset_get", arguments);
    }
  }.focusOffset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "isCollapsed", {
  configurable: true,
  enumerable: true,
  get: {
    isCollapsed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "isCollapsed_get", arguments);
    }
  }.isCollapsed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "rangeCount", {
  configurable: true,
  enumerable: true,
  get: {
    rangeCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "rangeCount_get", arguments);
    }
  }.rangeCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "baseNode", {
  configurable: true,
  enumerable: true,
  get: {
    baseNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "baseNode_get", arguments);
    }
  }.baseNode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "baseOffset", {
  configurable: true,
  enumerable: true,
  get: {
    baseOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "baseOffset_get", arguments);
    }
  }.baseOffset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "extentNode", {
  configurable: true,
  enumerable: true,
  get: {
    extentNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "extentNode_get", arguments);
    }
  }.extentNode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "extentOffset", {
  configurable: true,
  enumerable: true,
  get: {
    extentOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "extentOffset_get", arguments);
    }
  }.extentOffset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "addRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "addRange", arguments);
    }
  }.addRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "collapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    collapse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "collapse", arguments);
    }
  }.collapse
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "collapseToEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    collapseToEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "collapseToEnd", arguments);
    }
  }.collapseToEnd
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "collapseToStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    collapseToStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "collapseToStart", arguments);
    }
  }.collapseToStart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "containsNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    containsNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "containsNode", arguments);
    }
  }.containsNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "deleteFromDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteFromDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "deleteFromDocument", arguments);
    }
  }.deleteFromDocument
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "empty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    empty() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "empty", arguments);
    }
  }.empty
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "extend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    extend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "extend", arguments);
    }
  }.extend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "getRangeAt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRangeAt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "getRangeAt", arguments);
    }
  }.getRangeAt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "modify", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    modify() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "modify", arguments);
    }
  }.modify
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "removeAllRanges", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeAllRanges() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "removeAllRanges", arguments);
    }
  }.removeAllRanges
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "removeRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "removeRange", arguments);
    }
  }.removeRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "selectAllChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    selectAllChildren() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "selectAllChildren", arguments);
    }
  }.selectAllChildren
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "setBaseAndExtent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setBaseAndExtent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "setBaseAndExtent", arguments);
    }
  }.setBaseAndExtent
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "setPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPosition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "setPosition", arguments);
    }
  }.setPosition
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Selection"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Selection"].prototype, "Selection", "toString", arguments);
    }
  }.toString
});