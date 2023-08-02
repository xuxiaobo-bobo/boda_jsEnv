// PresentationRequest对象

PresentationRequest = function PresentationRequest() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PresentationRequest)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationRequest': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PresentationRequest 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PresentationRequest, "PresentationRequest");
PresentationRequest.prototype.__proto__ = EventTarget.prototype;
PresentationRequest.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(PresentationRequest.prototype, "onconnectionavailable", {
  configurable: true,
  enumerable: true,
  get: function onconnectionavailable() {
    return bodavm.toolsFunc.dispatch(this, PresentationRequest.prototype, "PresentationRequest", "onconnectionavailable_get", arguments);
  },
  set: function onconnectionavailable() {
    return bodavm.toolsFunc.dispatch(this, PresentationRequest.prototype, "PresentationRequest", "onconnectionavailable_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationRequest.prototype, "getAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAvailability() {
    return bodavm.toolsFunc.dispatch(this, PresentationRequest.prototype, "PresentationRequest", "getAvailability", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationRequest.prototype, "reconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reconnect() {
    return bodavm.toolsFunc.dispatch(this, PresentationRequest.prototype, "PresentationRequest", "reconnect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PresentationRequest.prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, PresentationRequest.prototype, "PresentationRequest", "start", arguments);
  }
});