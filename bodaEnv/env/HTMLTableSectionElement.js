// HTMLTableSectionElement对象

bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"] = function HTMLTableSectionElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLTableSectionElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"], "HTMLTableSectionElement");
bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "rows", {
  configurable: true,
  enumerable: true,
  get: {
    rows() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "rows_get", arguments);
    }
  }.rows,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "ch", {
  configurable: true,
  enumerable: true,
  get: {
    ch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "ch_get", arguments);
    }
  }.ch,
  set: {
    ch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "ch_set", arguments);
    }
  }.ch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "chOff", {
  configurable: true,
  enumerable: true,
  get: {
    chOff() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "chOff_get", arguments);
    }
  }.chOff,
  set: {
    chOff() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "chOff_set", arguments);
    }
  }.chOff
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "vAlign", {
  configurable: true,
  enumerable: true,
  get: {
    vAlign() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "vAlign_get", arguments);
    }
  }.vAlign,
  set: {
    vAlign() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "vAlign_set", arguments);
    }
  }.vAlign
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "deleteRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteRow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "deleteRow", arguments);
    }
  }.deleteRow
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "insertRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertRow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableSectionElement"].prototype, "HTMLTableSectionElement", "insertRow", arguments);
    }
  }.insertRow
});