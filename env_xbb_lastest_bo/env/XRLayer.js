// XRLayer对象

XRLayer = function XRLayer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRLayer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRLayer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRLayer, "XRLayer");
XRLayer.prototype.__proto__ = EventTarget.prototype;
XRLayer.__proto__ = EventTarget;