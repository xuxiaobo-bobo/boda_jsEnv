// RTCDataChannel对象

bodaEnv.memory.globlProtoObj["RTCDataChannel"] = function RTCDataChannel() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCDataChannel 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCDataChannel"], "RTCDataChannel");
bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["RTCDataChannel"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "label_get", arguments);
    }
  }.label,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "ordered", {
  configurable: true,
  enumerable: true,
  get: {
    ordered() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "ordered_get", arguments);
    }
  }.ordered,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "maxPacketLifeTime", {
  configurable: true,
  enumerable: true,
  get: {
    maxPacketLifeTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "maxPacketLifeTime_get", arguments);
    }
  }.maxPacketLifeTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "maxRetransmits", {
  configurable: true,
  enumerable: true,
  get: {
    maxRetransmits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "maxRetransmits_get", arguments);
    }
  }.maxRetransmits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "protocol_get", arguments);
    }
  }.protocol,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "negotiated", {
  configurable: true,
  enumerable: true,
  get: {
    negotiated() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "negotiated_get", arguments);
    }
  }.negotiated,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: {
    readyState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "readyState_get", arguments);
    }
  }.readyState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "bufferedAmount", {
  configurable: true,
  enumerable: true,
  get: {
    bufferedAmount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "bufferedAmount_get", arguments);
    }
  }.bufferedAmount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "bufferedAmountLowThreshold", {
  configurable: true,
  enumerable: true,
  get: {
    bufferedAmountLowThreshold() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "bufferedAmountLowThreshold_get", arguments);
    }
  }.bufferedAmountLowThreshold,
  set: {
    bufferedAmountLowThreshold() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "bufferedAmountLowThreshold_set", arguments);
    }
  }.bufferedAmountLowThreshold
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "onopen", {
  configurable: true,
  enumerable: true,
  get: {
    onopen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onopen_get", arguments);
    }
  }.onopen,
  set: {
    onopen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onopen_set", arguments);
    }
  }.onopen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "onbufferedamountlow", {
  configurable: true,
  enumerable: true,
  get: {
    onbufferedamountlow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onbufferedamountlow_get", arguments);
    }
  }.onbufferedamountlow,
  set: {
    onbufferedamountlow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onbufferedamountlow_set", arguments);
    }
  }.onbufferedamountlow
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "onclosing", {
  configurable: true,
  enumerable: true,
  get: {
    onclosing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onclosing_get", arguments);
    }
  }.onclosing,
  set: {
    onclosing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onclosing_set", arguments);
    }
  }.onclosing
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onclose_get", arguments);
    }
  }.onclose,
  set: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onclose_set", arguments);
    }
  }.onclose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onmessage_get", arguments);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "binaryType", {
  configurable: true,
  enumerable: true,
  get: {
    binaryType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "binaryType_get", arguments);
    }
  }.binaryType,
  set: {
    binaryType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "binaryType_set", arguments);
    }
  }.binaryType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "reliable", {
  configurable: true,
  enumerable: true,
  get: {
    reliable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "reliable_get", arguments);
    }
  }.reliable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    send() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannel"].prototype, "RTCDataChannel", "send", arguments);
    }
  }.send
});