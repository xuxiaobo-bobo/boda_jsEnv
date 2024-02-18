// HTMLTableRowElement对象

bodaEnv.memory.globlProtoObj["HTMLTableRowElement"] = function HTMLTableRowElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLTableRowElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"], "HTMLTableRowElement");
bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "rowIndex", {
  configurable: true,
  enumerable: true,
  get: {
    rowIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "rowIndex_get", arguments);
    }
  }.rowIndex,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "sectionRowIndex", {
  configurable: true,
  enumerable: true,
  get: {
    sectionRowIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "sectionRowIndex_get", arguments);
    }
  }.sectionRowIndex,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "cells", {
  configurable: true,
  enumerable: true,
  get: {
    cells() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "cells_get", arguments);
    }
  }.cells,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "ch", {
  configurable: true,
  enumerable: true,
  get: {
    ch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "ch_get", arguments);
    }
  }.ch,
  set: {
    ch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "ch_set", arguments);
    }
  }.ch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "chOff", {
  configurable: true,
  enumerable: true,
  get: {
    chOff() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "chOff_get", arguments);
    }
  }.chOff,
  set: {
    chOff() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "chOff_set", arguments);
    }
  }.chOff
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "vAlign", {
  configurable: true,
  enumerable: true,
  get: {
    vAlign() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "vAlign_get", arguments);
    }
  }.vAlign,
  set: {
    vAlign() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "vAlign_set", arguments);
    }
  }.vAlign
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "bgColor_get", arguments);
    }
  }.bgColor,
  set: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "bgColor_set", arguments);
    }
  }.bgColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "deleteCell", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteCell() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "deleteCell", arguments);
    }
  }.deleteCell
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "insertCell", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertCell() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableRowElement"].prototype, "HTMLTableRowElement", "insertCell", arguments);
    }
  }.insertCell
});