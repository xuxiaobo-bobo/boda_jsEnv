// HTMLScriptElement对象

bodaEnv.memory.globlProtoObj["HTMLScriptElement"] = function HTMLScriptElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLScriptElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLScriptElement"], "HTMLScriptElement");
bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLScriptElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"], "supports", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    supports() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSelectElement"], "HTMLScriptElement", "supports", arguments);
    }
  }.supports
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "src", {
  configurable: true,
  enumerable: true,
  get: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "src_get", arguments);
    }
  }.src,
  set: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "src_set", arguments);
    }
  }.src
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "noModule", {
  configurable: true,
  enumerable: true,
  get: {
    noModule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "noModule_get", arguments);
    }
  }.noModule,
  set: {
    noModule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "noModule_set", arguments);
    }
  }.noModule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "charset", {
  configurable: true,
  enumerable: true,
  get: {
    charset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "charset_get", arguments);
    }
  }.charset,
  set: {
    charset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "charset_set", arguments);
    }
  }.charset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "async", {
  configurable: true,
  enumerable: true,
  get: {
    async() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "async_get", arguments);
    }
  }.async,
  set: {
    async() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "async_set", arguments);
    }
  }.async
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "defer", {
  configurable: true,
  enumerable: true,
  get: {
    defer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "defer_get", arguments);
    }
  }.defer,
  set: {
    defer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "defer_set", arguments);
    }
  }.defer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "crossOrigin_get", arguments);
    }
  }.crossOrigin,
  set: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "crossOrigin_set", arguments);
    }
  }.crossOrigin
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "text", {
  configurable: true,
  enumerable: true,
  get: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "text_get", arguments);
    }
  }.text,
  set: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "text_set", arguments);
    }
  }.text
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "referrerPolicy_get", arguments);
    }
  }.referrerPolicy,
  set: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "referrerPolicy_set", arguments);
    }
  }.referrerPolicy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: {
    fetchPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "fetchPriority_get", arguments);
    }
  }.fetchPriority,
  set: {
    fetchPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "fetchPriority_set", arguments);
    }
  }.fetchPriority
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "event", {
  configurable: true,
  enumerable: true,
  get: {
    event() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "event_get", arguments);
    }
  }.event,
  set: {
    event() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "event_set", arguments);
    }
  }.event
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "htmlFor", {
  configurable: true,
  enumerable: true,
  get: {
    htmlFor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "htmlFor_get", arguments);
    }
  }.htmlFor,
  set: {
    htmlFor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "htmlFor_set", arguments);
    }
  }.htmlFor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "integrity", {
  configurable: true,
  enumerable: true,
  get: {
    integrity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "integrity_get", arguments);
    }
  }.integrity,
  set: {
    integrity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "integrity_set", arguments);
    }
  }.integrity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "blocking", {
  configurable: true,
  enumerable: true,
  get: {
    blocking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "blocking_get", arguments);
    }
  }.blocking,
  set: {
    blocking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLScriptElement"].prototype, "HTMLScriptElement", "blocking_set", arguments);
    }
  }.blocking
});