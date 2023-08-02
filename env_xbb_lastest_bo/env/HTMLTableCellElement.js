// HTMLTableCellElement对象

HTMLTableCellElement = function HTMLTableCellElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTableCellElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTableCellElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTableCellElement, "HTMLTableCellElement");
HTMLTableCellElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTableCellElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "colSpan", {
  configurable: true,
  enumerable: true,
  get: function colSpan() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "colSpan_get", arguments);
  },
  set: function colSpan() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "colSpan_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "rowSpan", {
  configurable: true,
  enumerable: true,
  get: function rowSpan() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "rowSpan_get", arguments);
  },
  set: function rowSpan() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "rowSpan_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "headers", {
  configurable: true,
  enumerable: true,
  get: function headers() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "headers_get", arguments);
  },
  set: function headers() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "headers_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "cellIndex", {
  configurable: true,
  enumerable: true,
  get: function cellIndex() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "cellIndex_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "axis", {
  configurable: true,
  enumerable: true,
  get: function axis() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "axis_get", arguments);
  },
  set: function axis() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "axis_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "ch", {
  configurable: true,
  enumerable: true,
  get: function ch() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "ch_get", arguments);
  },
  set: function ch() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "ch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "chOff", {
  configurable: true,
  enumerable: true,
  get: function chOff() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "chOff_get", arguments);
  },
  set: function chOff() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "chOff_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "noWrap", {
  configurable: true,
  enumerable: true,
  get: function noWrap() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "noWrap_get", arguments);
  },
  set: function noWrap() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "noWrap_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "vAlign", {
  configurable: true,
  enumerable: true,
  get: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "vAlign_get", arguments);
  },
  set: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "vAlign_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "bgColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "abbr", {
  configurable: true,
  enumerable: true,
  get: function abbr() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "abbr_get", arguments);
  },
  set: function abbr() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "abbr_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "scope", {
  configurable: true,
  enumerable: true,
  get: function scope() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "scope_get", arguments);
  },
  set: function scope() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElement", "scope_set", arguments);
  }
});