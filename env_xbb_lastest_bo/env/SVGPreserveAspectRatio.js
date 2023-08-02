// SVGPreserveAspectRatio对象

SVGPreserveAspectRatio = function SVGPreserveAspectRatio() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGPreserveAspectRatio)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGPreserveAspectRatio 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGPreserveAspectRatio, "SVGPreserveAspectRatio");
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_XMINYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_XMIDYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_XMAXYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_XMINYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_XMIDYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_XMAXYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_XMINYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_XMIDYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_PRESERVEASPECTRATIO_XMAXYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_MEETORSLICE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_MEETORSLICE_MEET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio, "SVG_MEETORSLICE_SLICE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, SVGPreserveAspectRatio.prototype, "SVGPreserveAspectRatio", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, SVGPreserveAspectRatio.prototype, "SVGPreserveAspectRatio", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "meetOrSlice", {
  configurable: true,
  enumerable: true,
  get: function meetOrSlice() {
    return bodavm.toolsFunc.dispatch(this, SVGPreserveAspectRatio.prototype, "SVGPreserveAspectRatio", "meetOrSlice_get", arguments);
  },
  set: function meetOrSlice() {
    return bodavm.toolsFunc.dispatch(this, SVGPreserveAspectRatio.prototype, "SVGPreserveAspectRatio", "meetOrSlice_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_XMINYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_XMIDYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_XMAXYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_XMINYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_XMIDYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_XMAXYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_XMINYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_XMIDYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_PRESERVEASPECTRATIO_XMAXYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_MEETORSLICE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_MEETORSLICE_MEET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGPreserveAspectRatio.prototype, "SVG_MEETORSLICE_SLICE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});