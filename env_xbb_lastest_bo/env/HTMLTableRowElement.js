// HTMLTableRowElement对象

HTMLTableRowElement = function HTMLTableRowElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTableRowElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTableRowElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTableRowElement, "HTMLTableRowElement");
HTMLTableRowElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTableRowElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "rowIndex", {
  configurable: true,
  enumerable: true,
  get: function rowIndex() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "rowIndex_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "sectionRowIndex", {
  configurable: true,
  enumerable: true,
  get: function sectionRowIndex() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "sectionRowIndex_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "cells", {
  configurable: true,
  enumerable: true,
  get: function cells() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "cells_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "ch", {
  configurable: true,
  enumerable: true,
  get: function ch() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "ch_get", arguments);
  },
  set: function ch() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "ch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "chOff", {
  configurable: true,
  enumerable: true,
  get: function chOff() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "chOff_get", arguments);
  },
  set: function chOff() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "chOff_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "vAlign", {
  configurable: true,
  enumerable: true,
  get: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "vAlign_get", arguments);
  },
  set: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "vAlign_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "bgColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "deleteCell", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteCell() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "deleteCell", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "insertCell", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertCell() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElement", "insertCell", arguments);
  }
});