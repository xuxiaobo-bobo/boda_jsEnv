// FileReader对象

bodavm.memory.globalobj['FileReader'] = function FileReader() {
  console.log_copy('FileReader 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.FileReader();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FileReader'], "FileReader");
bodavm.memory.globalobj['FileReader'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['FileReader'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('FileReader', "EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('FileReader', "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('FileReader', "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('FileReader', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "result_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "error_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onloadstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onprogress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "onloadend", {
  configurable: true,
  enumerable: true,
  get: function onloadend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onloadend_get", arguments);
  },
  set: function onloadend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "onloadend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "abort", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "readAsArrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readAsArrayBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "readAsArrayBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "readAsBinaryString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readAsBinaryString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "readAsBinaryString", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "readAsDataURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readAsDataURL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "readAsDataURL", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileReader', "readAsText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readAsText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileReader'].prototype, "FileReader", "readAsText", arguments);
  }
}, 'prototype');