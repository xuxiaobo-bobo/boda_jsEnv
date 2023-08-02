// SVGFEMergeNodeElement对象

SVGFEMergeNodeElement = function SVGFEMergeNodeElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEMergeNodeElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEMergeNodeElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEMergeNodeElement, "SVGFEMergeNodeElement");
SVGFEMergeNodeElement.prototype.__proto__ = SVGElement.prototype;
SVGFEMergeNodeElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEMergeNodeElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMergeNodeElement.prototype, "SVGFEMergeNodeElement", "in1_get", arguments);
  },
  set: undefined
});