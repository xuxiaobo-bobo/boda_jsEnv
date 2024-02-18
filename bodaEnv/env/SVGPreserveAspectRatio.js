// SVGPreserveAspectRatio对象

bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"] = function SVGPreserveAspectRatio() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGPreserveAspectRatio 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVGPreserveAspectRatio");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_XMINYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_XMIDYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_XMAXYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_XMINYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_XMIDYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_XMAXYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_XMINYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_XMIDYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_PRESERVEASPECTRATIO_XMAXYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_MEETORSLICE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_MEETORSLICE_MEET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"], "SVG_MEETORSLICE_SLICE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVGPreserveAspectRatio", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVGPreserveAspectRatio", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "meetOrSlice", {
  configurable: true,
  enumerable: true,
  get: {
    meetOrSlice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVGPreserveAspectRatio", "meetOrSlice_get", arguments);
    }
  }.meetOrSlice,
  set: {
    meetOrSlice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVGPreserveAspectRatio", "meetOrSlice_set", arguments);
    }
  }.meetOrSlice
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_XMINYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_XMIDYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_XMAXYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_XMINYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_XMIDYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_XMAXYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_XMINYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_XMIDYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_PRESERVEASPECTRATIO_XMAXYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_MEETORSLICE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_MEETORSLICE_MEET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPreserveAspectRatio"].prototype, "SVG_MEETORSLICE_SLICE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});