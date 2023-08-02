// BroadcastChannel对象

BroadcastChannel = function BroadcastChannel() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BroadcastChannel)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BroadcastChannel': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BroadcastChannel 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BroadcastChannel, "BroadcastChannel");
BroadcastChannel.prototype.__proto__ = EventTarget.prototype;
BroadcastChannel.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(BroadcastChannel.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, BroadcastChannel.prototype, "BroadcastChannel", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BroadcastChannel.prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, BroadcastChannel.prototype, "BroadcastChannel", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, BroadcastChannel.prototype, "BroadcastChannel", "onmessage_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BroadcastChannel.prototype, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, BroadcastChannel.prototype, "BroadcastChannel", "onmessageerror_get", arguments);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, BroadcastChannel.prototype, "BroadcastChannel", "onmessageerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BroadcastChannel.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, BroadcastChannel.prototype, "BroadcastChannel", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BroadcastChannel.prototype, "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function postMessage() {
    return bodavm.toolsFunc.dispatch(this, BroadcastChannel.prototype, "BroadcastChannel", "postMessage", arguments);
  }
});