// PresentationAvailability对象

PresentationAvailability = function PresentationAvailability() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PresentationAvailability)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PresentationAvailability 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PresentationAvailability, "PresentationAvailability");
PresentationAvailability.prototype.__proto__ = EventTarget.prototype;
PresentationAvailability.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(PresentationAvailability.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, PresentationAvailability.prototype, "PresentationAvailability", "value_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PresentationAvailability.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, PresentationAvailability.prototype, "PresentationAvailability", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, PresentationAvailability.prototype, "PresentationAvailability", "onchange_set", arguments);
  }
});