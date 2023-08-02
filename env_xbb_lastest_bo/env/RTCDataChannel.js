// RTCDataChannel对象

RTCDataChannel = function RTCDataChannel() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCDataChannel)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCDataChannel 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCDataChannel, "RTCDataChannel");
RTCDataChannel.prototype.__proto__ = EventTarget.prototype;
RTCDataChannel.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "label_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "ordered", {
  configurable: true,
  enumerable: true,
  get: function ordered() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "ordered_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "maxPacketLifeTime", {
  configurable: true,
  enumerable: true,
  get: function maxPacketLifeTime() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "maxPacketLifeTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "maxRetransmits", {
  configurable: true,
  enumerable: true,
  get: function maxRetransmits() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "maxRetransmits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "protocol_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "negotiated", {
  configurable: true,
  enumerable: true,
  get: function negotiated() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "negotiated_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "readyState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "bufferedAmount", {
  configurable: true,
  enumerable: true,
  get: function bufferedAmount() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "bufferedAmount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "bufferedAmountLowThreshold", {
  configurable: true,
  enumerable: true,
  get: function bufferedAmountLowThreshold() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "bufferedAmountLowThreshold_get", arguments);
  },
  set: function bufferedAmountLowThreshold() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "bufferedAmountLowThreshold_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "onopen", {
  configurable: true,
  enumerable: true,
  get: function onopen() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onopen_get", arguments);
  },
  set: function onopen() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onopen_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "onbufferedamountlow", {
  configurable: true,
  enumerable: true,
  get: function onbufferedamountlow() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onbufferedamountlow_get", arguments);
  },
  set: function onbufferedamountlow() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onbufferedamountlow_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "onclosing", {
  configurable: true,
  enumerable: true,
  get: function onclosing() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onclosing_get", arguments);
  },
  set: function onclosing() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onclosing_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onclose_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "onmessage_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "binaryType", {
  configurable: true,
  enumerable: true,
  get: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "binaryType_get", arguments);
  },
  set: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "binaryType_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "reliable", {
  configurable: true,
  enumerable: true,
  get: function reliable() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "reliable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDataChannel.prototype, "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function send() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannel.prototype, "RTCDataChannel", "send", arguments);
  }
});