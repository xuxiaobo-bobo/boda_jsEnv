// RTCSctpTransport对象

bodaEnv.memory.globlProtoObj["RTCSctpTransport"] = function RTCSctpTransport() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCSctpTransport 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCSctpTransport"], "RTCSctpTransport");
bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["RTCSctpTransport"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "transport", {
  configurable: true,
  enumerable: true,
  get: {
    transport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "RTCSctpTransport", "transport_get", arguments);
    }
  }.transport,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "RTCSctpTransport", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "maxMessageSize", {
  configurable: true,
  enumerable: true,
  get: {
    maxMessageSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "RTCSctpTransport", "maxMessageSize_get", arguments);
    }
  }.maxMessageSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "maxChannels", {
  configurable: true,
  enumerable: true,
  get: {
    maxChannels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "RTCSctpTransport", "maxChannels_get", arguments);
    }
  }.maxChannels,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "RTCSctpTransport", "onstatechange_get", arguments);
    }
  }.onstatechange,
  set: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCSctpTransport"].prototype, "RTCSctpTransport", "onstatechange_set", arguments);
    }
  }.onstatechange
});