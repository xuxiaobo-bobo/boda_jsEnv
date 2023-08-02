// PresentationReceiver对象

PresentationReceiver = function PresentationReceiver() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PresentationReceiver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PresentationReceiver 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PresentationReceiver, "PresentationReceiver");
bodavm.toolsFunc.defineProperty(PresentationReceiver.prototype, "connectionList", {
  configurable: true,
  enumerable: true,
  get: function connectionList() {
    return bodavm.toolsFunc.dispatch(this, PresentationReceiver.prototype, "PresentationReceiver", "connectionList_get", arguments);
  },
  set: undefined
});