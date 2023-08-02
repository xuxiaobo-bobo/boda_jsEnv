// NetworkInformation对象

NetworkInformation = function NetworkInformation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NetworkInformation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NetworkInformation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NetworkInformation, "NetworkInformation");
NetworkInformation.prototype.__proto__ = EventTarget.prototype;
NetworkInformation.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "effectiveType", {
  configurable: true,
  enumerable: true,
  get: function effectiveType() {
    return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "effectiveType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "rtt", {
  configurable: true,
  enumerable: true,
  get: function rtt() {
    return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "rtt_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "downlink", {
  configurable: true,
  enumerable: true,
  get: function downlink() {
    return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "downlink_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "saveData", {
  configurable: true,
  enumerable: true,
  get: function saveData() {
    return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "saveData_get", arguments);
  },
  set: undefined
});