// PresentationConnectionList对象

PresentationConnectionList = function PresentationConnectionList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PresentationConnectionList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PresentationConnectionList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PresentationConnectionList, "PresentationConnectionList");
PresentationConnectionList.prototype.__proto__ = EventTarget.prototype;
PresentationConnectionList.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(PresentationConnectionList.prototype, "connections", {
  configurable: true,
  enumerable: true,
  get: function connections() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnectionList.prototype, "PresentationConnectionList", "connections_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PresentationConnectionList.prototype, "onconnectionavailable", {
  configurable: true,
  enumerable: true,
  get: function onconnectionavailable() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnectionList.prototype, "PresentationConnectionList", "onconnectionavailable_get", arguments);
  },
  set: function onconnectionavailable() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnectionList.prototype, "PresentationConnectionList", "onconnectionavailable_set", arguments);
  }
});