// SourceBuffer对象

SourceBuffer = function SourceBuffer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SourceBuffer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SourceBuffer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SourceBuffer, "SourceBuffer");
SourceBuffer.prototype.__proto__ = EventTarget.prototype;
SourceBuffer.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "mode_get", arguments);
  },
  set: function mode() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "mode_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "updating", {
  configurable: true,
  enumerable: true,
  get: function updating() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "updating_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "buffered", {
  configurable: true,
  enumerable: true,
  get: function buffered() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "buffered_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "timestampOffset", {
  configurable: true,
  enumerable: true,
  get: function timestampOffset() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "timestampOffset_get", arguments);
  },
  set: function timestampOffset() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "timestampOffset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "appendWindowStart", {
  configurable: true,
  enumerable: true,
  get: function appendWindowStart() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendWindowStart_get", arguments);
  },
  set: function appendWindowStart() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendWindowStart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "appendWindowEnd", {
  configurable: true,
  enumerable: true,
  get: function appendWindowEnd() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendWindowEnd_get", arguments);
  },
  set: function appendWindowEnd() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendWindowEnd_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdatestart", {
  configurable: true,
  enumerable: true,
  get: function onupdatestart() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdatestart_get", arguments);
  },
  set: function onupdatestart() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdatestart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdate", {
  configurable: true,
  enumerable: true,
  get: function onupdate() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdate_get", arguments);
  },
  set: function onupdate() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdateend", {
  configurable: true,
  enumerable: true,
  get: function onupdateend() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdateend_get", arguments);
  },
  set: function onupdateend() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onupdateend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "appendBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendBuffer() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "changeType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function changeType() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "changeType", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "remove", arguments);
  }
});