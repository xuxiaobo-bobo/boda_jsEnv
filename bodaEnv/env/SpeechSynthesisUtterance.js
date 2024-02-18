// SpeechSynthesisUtterance对象

bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"] = function SpeechSynthesisUtterance() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SpeechSynthesisUtterance 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"], "SpeechSynthesisUtterance");
bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "text", {
  configurable: true,
  enumerable: true,
  get: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "text_get", arguments);
    }
  }.text,
  set: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "text_set", arguments);
    }
  }.text
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "lang", {
  configurable: true,
  enumerable: true,
  get: {
    lang() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "lang_get", arguments);
    }
  }.lang,
  set: {
    lang() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "lang_set", arguments);
    }
  }.lang
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "voice", {
  configurable: true,
  enumerable: true,
  get: {
    voice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "voice_get", arguments);
    }
  }.voice,
  set: {
    voice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "voice_set", arguments);
    }
  }.voice
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "volume", {
  configurable: true,
  enumerable: true,
  get: {
    volume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "volume_get", arguments);
    }
  }.volume,
  set: {
    volume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "volume_set", arguments);
    }
  }.volume
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "rate", {
  configurable: true,
  enumerable: true,
  get: {
    rate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "rate_get", arguments);
    }
  }.rate,
  set: {
    rate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "rate_set", arguments);
    }
  }.rate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "pitch", {
  configurable: true,
  enumerable: true,
  get: {
    pitch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "pitch_get", arguments);
    }
  }.pitch,
  set: {
    pitch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "pitch_set", arguments);
    }
  }.pitch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "onstart", {
  configurable: true,
  enumerable: true,
  get: {
    onstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onstart_get", arguments);
    }
  }.onstart,
  set: {
    onstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onstart_set", arguments);
    }
  }.onstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "onend", {
  configurable: true,
  enumerable: true,
  get: {
    onend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onend_get", arguments);
    }
  }.onend,
  set: {
    onend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onend_set", arguments);
    }
  }.onend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onpause_get", arguments);
    }
  }.onpause,
  set: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onpause_set", arguments);
    }
  }.onpause
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "onresume", {
  configurable: true,
  enumerable: true,
  get: {
    onresume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onresume_get", arguments);
    }
  }.onresume,
  set: {
    onresume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onresume_set", arguments);
    }
  }.onresume
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "onmark", {
  configurable: true,
  enumerable: true,
  get: {
    onmark() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onmark_get", arguments);
    }
  }.onmark,
  set: {
    onmark() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onmark_set", arguments);
    }
  }.onmark
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "onboundary", {
  configurable: true,
  enumerable: true,
  get: {
    onboundary() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onboundary_get", arguments);
    }
  }.onboundary,
  set: {
    onboundary() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisUtterance"].prototype, "SpeechSynthesisUtterance", "onboundary_set", arguments);
    }
  }.onboundary
});