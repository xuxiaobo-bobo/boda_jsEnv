// MessageChannel对象

MessageChannel = function MessageChannel() {
  arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MessageChannel 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MessageChannel, "MessageChannel");
bodavm.toolsFunc.defineProperty(MessageChannel.prototype, "port1", {
  configurable: true,
  enumerable: true,
  get: function port1() {
    return bodavm.toolsFunc.dispatch(this, MessageChannel.prototype, "MessageChannel", "port1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MessageChannel.prototype, "port2", {
  configurable: true,
  enumerable: true,
  get: function port2() {
    return bodavm.toolsFunc.dispatch(this, MessageChannel.prototype, "MessageChannel", "port2_get", arguments);
  },
  set: undefined
});