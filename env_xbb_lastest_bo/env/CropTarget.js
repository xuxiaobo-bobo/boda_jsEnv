// CropTarget对象

CropTarget = function CropTarget() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CropTarget)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CropTarget 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CropTarget, "CropTarget");
bodavm.toolsFunc.defineProperty(CropTarget, "fromElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromElement() {
    return bodavm.toolsFunc.dispatch(this, CropTarget, "CropTarget", "fromElement", arguments);
  }
});