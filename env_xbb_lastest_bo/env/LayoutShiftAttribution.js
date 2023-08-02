// LayoutShiftAttribution对象

LayoutShiftAttribution = function LayoutShiftAttribution() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof LayoutShiftAttribution)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('LayoutShiftAttribution 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(LayoutShiftAttribution, "LayoutShiftAttribution");
bodavm.toolsFunc.defineProperty(LayoutShiftAttribution.prototype, "node", {
  configurable: true,
  enumerable: true,
  get: function node() {
    return bodavm.toolsFunc.dispatch(this, LayoutShiftAttribution.prototype, "LayoutShiftAttribution", "node_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LayoutShiftAttribution.prototype, "previousRect", {
  configurable: true,
  enumerable: true,
  get: function previousRect() {
    return bodavm.toolsFunc.dispatch(this, LayoutShiftAttribution.prototype, "LayoutShiftAttribution", "previousRect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LayoutShiftAttribution.prototype, "currentRect", {
  configurable: true,
  enumerable: true,
  get: function currentRect() {
    return bodavm.toolsFunc.dispatch(this, LayoutShiftAttribution.prototype, "LayoutShiftAttribution", "currentRect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LayoutShiftAttribution.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, LayoutShiftAttribution.prototype, "LayoutShiftAttribution", "toJSON", arguments);
  }
});