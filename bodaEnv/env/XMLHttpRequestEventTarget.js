// XMLHttpRequestEventTarget对象

bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"] = function XMLHttpRequestEventTarget() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XMLHttpRequestEventTarget 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"], "XMLHttpRequestEventTarget");
bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onloadstart_get", arguments);
    }
  }.onloadstart,
  set: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onloadstart_set", arguments);
    }
  }.onloadstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onprogress_get", arguments);
    }
  }.onprogress,
  set: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onprogress_set", arguments);
    }
  }.onprogress
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onabort_get", arguments);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onload_get", arguments);
    }
  }.onload,
  set: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onload_set", arguments);
    }
  }.onload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "ontimeout", {
  configurable: true,
  enumerable: true,
  get: {
    ontimeout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "ontimeout_get", arguments);
    }
  }.ontimeout,
  set: {
    ontimeout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "ontimeout_set", arguments);
    }
  }.ontimeout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "onloadend", {
  configurable: true,
  enumerable: true,
  get: {
    onloadend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onloadend_get", arguments);
    }
  }.onloadend,
  set: {
    onloadend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype, "XMLHttpRequestEventTarget", "onloadend_set", arguments);
    }
  }.onloadend
});