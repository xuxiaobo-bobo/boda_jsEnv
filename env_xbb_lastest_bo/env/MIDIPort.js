// MIDIPort对象

MIDIPort = function MIDIPort() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MIDIPort)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MIDIPort 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MIDIPort, "MIDIPort");
MIDIPort.prototype.__proto__ = EventTarget.prototype;
MIDIPort.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "connection", {
  configurable: true,
  enumerable: true,
  get: function connection() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "connection_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "manufacturer", {
  configurable: true,
  enumerable: true,
  get: function manufacturer() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "manufacturer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "version", {
  configurable: true,
  enumerable: true,
  get: function version() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "version_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "onstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "open", arguments);
  }
});