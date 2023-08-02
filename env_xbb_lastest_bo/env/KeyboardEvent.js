// KeyboardEvent对象

KeyboardEvent = function KeyboardEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof KeyboardEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'KeyboardEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('KeyboardEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(KeyboardEvent, "KeyboardEvent");
KeyboardEvent.prototype.__proto__ = UIEvent.prototype;
KeyboardEvent.__proto__ = UIEvent;
bodavm.toolsFunc.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_STANDARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_LEFT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_RIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_NUMPAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "key", {
  configurable: true,
  enumerable: true,
  get: function key() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "key_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "code_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "location", {
  configurable: true,
  enumerable: true,
  get: function location() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "location_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "ctrlKey", {
  configurable: true,
  enumerable: true,
  get: function ctrlKey() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "ctrlKey_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "shiftKey", {
  configurable: true,
  enumerable: true,
  get: function shiftKey() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "shiftKey_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "altKey", {
  configurable: true,
  enumerable: true,
  get: function altKey() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "altKey_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "metaKey", {
  configurable: true,
  enumerable: true,
  get: function metaKey() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "metaKey_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "repeat", {
  configurable: true,
  enumerable: true,
  get: function repeat() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "repeat_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "isComposing", {
  configurable: true,
  enumerable: true,
  get: function isComposing() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "isComposing_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "charCode", {
  configurable: true,
  enumerable: true,
  get: function charCode() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "charCode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "keyCode", {
  configurable: true,
  enumerable: true,
  get: function keyCode() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "keyCode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_STANDARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_LEFT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_RIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_NUMPAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "getModifierState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getModifierState() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "getModifierState", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyboardEvent.prototype, "initKeyboardEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initKeyboardEvent() {
    return bodavm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "initKeyboardEvent", arguments);
  }
});