// FileReader对象

FileReader = function FileReader() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FileReader 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FileReader, "FileReader");
FileReader.prototype.__proto__ = EventTarget.prototype;
FileReader.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(FileReader, "EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(FileReader, "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(FileReader, "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "readyState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "result_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "error_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onloadstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onprogress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "onloadend", {
  configurable: true,
  enumerable: true,
  get: function onloadend() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onloadend_get", arguments);
  },
  set: function onloadend() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "onloadend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "readAsArrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readAsArrayBuffer() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "readAsArrayBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "readAsBinaryString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readAsBinaryString() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "readAsBinaryString", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "readAsDataURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readAsDataURL() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "readAsDataURL", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileReader.prototype, "readAsText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readAsText() {
    return bodavm.toolsFunc.dispatch(this, FileReader.prototype, "FileReader", "readAsText", arguments);
  }
});