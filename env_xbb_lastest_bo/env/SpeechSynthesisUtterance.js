// SpeechSynthesisUtterance对象

SpeechSynthesisUtterance = function SpeechSynthesisUtterance() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SpeechSynthesisUtterance 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SpeechSynthesisUtterance, "SpeechSynthesisUtterance");
SpeechSynthesisUtterance.prototype.__proto__ = EventTarget.prototype;
SpeechSynthesisUtterance.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "text_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "lang", {
  configurable: true,
  enumerable: true,
  get: function lang() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "lang_get", arguments);
  },
  set: function lang() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "lang_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "voice", {
  configurable: true,
  enumerable: true,
  get: function voice() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "voice_get", arguments);
  },
  set: function voice() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "voice_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "volume", {
  configurable: true,
  enumerable: true,
  get: function volume() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "volume_get", arguments);
  },
  set: function volume() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "volume_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "rate", {
  configurable: true,
  enumerable: true,
  get: function rate() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "rate_get", arguments);
  },
  set: function rate() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "rate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "pitch", {
  configurable: true,
  enumerable: true,
  get: function pitch() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "pitch_get", arguments);
  },
  set: function pitch() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "pitch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onstart", {
  configurable: true,
  enumerable: true,
  get: function onstart() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onstart_get", arguments);
  },
  set: function onstart() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onend", {
  configurable: true,
  enumerable: true,
  get: function onend() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onend_get", arguments);
  },
  set: function onend() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onpause_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onresume", {
  configurable: true,
  enumerable: true,
  get: function onresume() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onresume_get", arguments);
  },
  set: function onresume() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onresume_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onmark", {
  configurable: true,
  enumerable: true,
  get: function onmark() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onmark_get", arguments);
  },
  set: function onmark() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onmark_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SpeechSynthesisUtterance.prototype, "onboundary", {
  configurable: true,
  enumerable: true,
  get: function onboundary() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onboundary_get", arguments);
  },
  set: function onboundary() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance", "onboundary_set", arguments);
  }
});