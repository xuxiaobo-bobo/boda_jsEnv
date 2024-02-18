// FileReader对象

bodaEnv.memory.globlProtoObj["FileReader"] = function FileReader() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FileReader 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FileReader"], "FileReader");
bodaEnv.memory.globlProtoObj["FileReader"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["FileReader"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"], "EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"], "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"], "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: {
    readyState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "readyState_get", arguments);
    }
  }.readyState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "result", {
  configurable: true,
  enumerable: true,
  get: {
    result() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "result_get", arguments);
    }
  }.result,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "error", {
  configurable: true,
  enumerable: true,
  get: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "error_get", arguments);
    }
  }.error,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onloadstart_get", arguments);
    }
  }.onloadstart,
  set: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onloadstart_set", arguments);
    }
  }.onloadstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onprogress_get", arguments);
    }
  }.onprogress,
  set: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onprogress_set", arguments);
    }
  }.onprogress
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onload_get", arguments);
    }
  }.onload,
  set: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onload_set", arguments);
    }
  }.onload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onabort_get", arguments);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "onloadend", {
  configurable: true,
  enumerable: true,
  get: {
    onloadend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onloadend_get", arguments);
    }
  }.onloadend,
  set: {
    onloadend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "onloadend_set", arguments);
    }
  }.onloadend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "abort", arguments);
    }
  }.abort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "readAsArrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readAsArrayBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "readAsArrayBuffer", arguments);
    }
  }.readAsArrayBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "readAsBinaryString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readAsBinaryString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "readAsBinaryString", arguments);
    }
  }.readAsBinaryString
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "readAsDataURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readAsDataURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "readAsDataURL", arguments);
    }
  }.readAsDataURL
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileReader"].prototype, "readAsText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readAsText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileReader"].prototype, "FileReader", "readAsText", arguments);
    }
  }.readAsText
});