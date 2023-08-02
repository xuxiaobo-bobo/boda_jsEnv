// HTMLTableSectionElement对象

HTMLTableSectionElement = function HTMLTableSectionElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTableSectionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTableSectionElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTableSectionElement, "HTMLTableSectionElement");
HTMLTableSectionElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTableSectionElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "rows", {
  configurable: true,
  enumerable: true,
  get: function rows() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "rows_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "ch", {
  configurable: true,
  enumerable: true,
  get: function ch() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "ch_get", arguments);
  },
  set: function ch() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "ch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "chOff", {
  configurable: true,
  enumerable: true,
  get: function chOff() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "chOff_get", arguments);
  },
  set: function chOff() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "chOff_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "vAlign", {
  configurable: true,
  enumerable: true,
  get: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "vAlign_get", arguments);
  },
  set: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "vAlign_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "deleteRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRow() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "deleteRow", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableSectionElement.prototype, "insertRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRow() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableSectionElement.prototype, "HTMLTableSectionElement", "insertRow", arguments);
  }
});