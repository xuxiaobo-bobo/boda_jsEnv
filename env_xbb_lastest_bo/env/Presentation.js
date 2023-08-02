// Presentation对象

Presentation = function Presentation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Presentation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Presentation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Presentation, "Presentation");
bodavm.toolsFunc.defineProperty(Presentation.prototype, "defaultRequest", {
  configurable: true,
  enumerable: true,
  get: function defaultRequest() {
    return bodavm.toolsFunc.dispatch(this, Presentation.prototype, "Presentation", "defaultRequest_get", arguments);
  },
  set: function defaultRequest() {
    return bodavm.toolsFunc.dispatch(this, Presentation.prototype, "Presentation", "defaultRequest_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Presentation.prototype, "receiver", {
  configurable: true,
  enumerable: true,
  get: function receiver() {
    return bodavm.toolsFunc.dispatch(this, Presentation.prototype, "Presentation", "receiver_get", arguments);
  },
  set: undefined
});