// HTMLTableElement对象

bodaEnv.memory.globlProtoObj["HTMLTableElement"] = function HTMLTableElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLTableElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLTableElement"], "HTMLTableElement");
bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLTableElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "caption", {
  configurable: true,
  enumerable: true,
  get: {
    caption() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "caption_get", arguments);
    }
  }.caption,
  set: {
    caption() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "caption_set", arguments);
    }
  }.caption
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "tHead", {
  configurable: true,
  enumerable: true,
  get: {
    tHead() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "tHead_get", arguments);
    }
  }.tHead,
  set: {
    tHead() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "tHead_set", arguments);
    }
  }.tHead
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "tFoot", {
  configurable: true,
  enumerable: true,
  get: {
    tFoot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "tFoot_get", arguments);
    }
  }.tFoot,
  set: {
    tFoot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "tFoot_set", arguments);
    }
  }.tFoot
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "tBodies", {
  configurable: true,
  enumerable: true,
  get: {
    tBodies() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "tBodies_get", arguments);
    }
  }.tBodies,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "rows", {
  configurable: true,
  enumerable: true,
  get: {
    rows() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "rows_get", arguments);
    }
  }.rows,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "border", {
  configurable: true,
  enumerable: true,
  get: {
    border() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "border_get", arguments);
    }
  }.border,
  set: {
    border() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "border_set", arguments);
    }
  }.border
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "frame", {
  configurable: true,
  enumerable: true,
  get: {
    frame() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "frame_get", arguments);
    }
  }.frame,
  set: {
    frame() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "frame_set", arguments);
    }
  }.frame
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "rules", {
  configurable: true,
  enumerable: true,
  get: {
    rules() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "rules_get", arguments);
    }
  }.rules,
  set: {
    rules() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "rules_set", arguments);
    }
  }.rules
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "summary", {
  configurable: true,
  enumerable: true,
  get: {
    summary() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "summary_get", arguments);
    }
  }.summary,
  set: {
    summary() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "summary_set", arguments);
    }
  }.summary
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "bgColor_get", arguments);
    }
  }.bgColor,
  set: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "bgColor_set", arguments);
    }
  }.bgColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "cellPadding", {
  configurable: true,
  enumerable: true,
  get: {
    cellPadding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "cellPadding_get", arguments);
    }
  }.cellPadding,
  set: {
    cellPadding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "cellPadding_set", arguments);
    }
  }.cellPadding
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "cellSpacing", {
  configurable: true,
  enumerable: true,
  get: {
    cellSpacing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "cellSpacing_get", arguments);
    }
  }.cellSpacing,
  set: {
    cellSpacing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "cellSpacing_set", arguments);
    }
  }.cellSpacing
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "createCaption", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createCaption() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "createCaption", arguments);
    }
  }.createCaption
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "createTBody", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createTBody() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "createTBody", arguments);
    }
  }.createTBody
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "createTFoot", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createTFoot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "createTFoot", arguments);
    }
  }.createTFoot
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "createTHead", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createTHead() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "createTHead", arguments);
    }
  }.createTHead
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "deleteCaption", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteCaption() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "deleteCaption", arguments);
    }
  }.deleteCaption
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "deleteRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteRow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "deleteRow", arguments);
    }
  }.deleteRow
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "deleteTFoot", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteTFoot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "deleteTFoot", arguments);
    }
  }.deleteTFoot
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "deleteTHead", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteTHead() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "deleteTHead", arguments);
    }
  }.deleteTHead
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "insertRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertRow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableElement"].prototype, "HTMLTableElement", "insertRow", arguments);
    }
  }.insertRow
});