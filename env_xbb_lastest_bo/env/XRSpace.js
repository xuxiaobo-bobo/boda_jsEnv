// XRSpace对象

XRSpace = function XRSpace() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRSpace)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRSpace 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRSpace, "XRSpace");
XRSpace.prototype.__proto__ = EventTarget.prototype;
XRSpace.__proto__ = EventTarget;