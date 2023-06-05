// KeyboardEvent对象

bodavm.memory.globalobj['KeyboardEvent'] = function KeyboardEvent() {
  console.log_copy('KeyboardEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof KeyboardEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'KeyboardEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['KeyboardEvent'], "KeyboardEvent");
bodavm.memory.globalobj['KeyboardEvent'].prototype.__proto__ = bodavm.memory.globalobj['UIEvent'].prototype;
bodavm.memory.globalobj['KeyboardEvent'].__proto__ = bodavm.memory.globalobj['UIEvent'];
bodavm.toolsFunc.defineProperty('KeyboardEvent', "DOM_KEY_LOCATION_STANDARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('KeyboardEvent', "DOM_KEY_LOCATION_LEFT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('KeyboardEvent', "DOM_KEY_LOCATION_RIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('KeyboardEvent', "DOM_KEY_LOCATION_NUMPAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('KeyboardEvent', "key", {
  configurable: true,
  enumerable: true,
  get: function key() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "key_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "code_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "location", {
  configurable: true,
  enumerable: true,
  get: function location() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "location_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "ctrlKey", {
  configurable: true,
  enumerable: true,
  get: function ctrlKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "ctrlKey_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "shiftKey", {
  configurable: true,
  enumerable: true,
  get: function shiftKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "shiftKey_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "altKey", {
  configurable: true,
  enumerable: true,
  get: function altKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "altKey_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "metaKey", {
  configurable: true,
  enumerable: true,
  get: function metaKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "metaKey_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "repeat", {
  configurable: true,
  enumerable: true,
  get: function repeat() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "repeat_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "isComposing", {
  configurable: true,
  enumerable: true,
  get: function isComposing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "isComposing_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "charCode", {
  configurable: true,
  enumerable: true,
  get: function charCode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "charCode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "keyCode", {
  configurable: true,
  enumerable: true,
  get: function keyCode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "keyCode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "DOM_KEY_LOCATION_STANDARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "DOM_KEY_LOCATION_LEFT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "DOM_KEY_LOCATION_RIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "DOM_KEY_LOCATION_NUMPAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "getModifierState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getModifierState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "getModifierState", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardEvent', "initKeyboardEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initKeyboardEvent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardEvent'].prototype, "KeyboardEvent", "initKeyboardEvent", arguments);
  }
}, 'prototype');