// HTMLTableElement对象

HTMLTableElement = function HTMLTableElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTableElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTableElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTableElement, "HTMLTableElement");
HTMLTableElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTableElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "caption", {
  configurable: true,
  enumerable: true,
  get: function caption() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "caption_get", arguments);
  },
  set: function caption() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "caption_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "tHead", {
  configurable: true,
  enumerable: true,
  get: function tHead() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "tHead_get", arguments);
  },
  set: function tHead() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "tHead_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "tFoot", {
  configurable: true,
  enumerable: true,
  get: function tFoot() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "tFoot_get", arguments);
  },
  set: function tFoot() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "tFoot_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "tBodies", {
  configurable: true,
  enumerable: true,
  get: function tBodies() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "tBodies_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "rows", {
  configurable: true,
  enumerable: true,
  get: function rows() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "rows_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "border", {
  configurable: true,
  enumerable: true,
  get: function border() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "border_get", arguments);
  },
  set: function border() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "border_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "frame", {
  configurable: true,
  enumerable: true,
  get: function frame() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "frame_get", arguments);
  },
  set: function frame() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "frame_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "rules", {
  configurable: true,
  enumerable: true,
  get: function rules() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "rules_get", arguments);
  },
  set: function rules() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "rules_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "summary", {
  configurable: true,
  enumerable: true,
  get: function summary() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "summary_get", arguments);
  },
  set: function summary() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "summary_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "bgColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "cellPadding", {
  configurable: true,
  enumerable: true,
  get: function cellPadding() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "cellPadding_get", arguments);
  },
  set: function cellPadding() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "cellPadding_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "cellSpacing", {
  configurable: true,
  enumerable: true,
  get: function cellSpacing() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "cellSpacing_get", arguments);
  },
  set: function cellSpacing() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "cellSpacing_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "createCaption", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createCaption() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "createCaption", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "createTBody", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTBody() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "createTBody", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "createTFoot", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTFoot() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "createTFoot", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "createTHead", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTHead() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "createTHead", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "deleteCaption", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteCaption() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "deleteCaption", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "deleteRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRow() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "deleteRow", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "deleteTFoot", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteTFoot() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "deleteTFoot", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "deleteTHead", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteTHead() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "deleteTHead", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableElement.prototype, "insertRow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRow() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElement", "insertRow", arguments);
  }
});