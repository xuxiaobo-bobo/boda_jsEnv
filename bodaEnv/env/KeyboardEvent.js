// KeyboardEvent对象

bodaEnv.memory.globlProtoObj["KeyboardEvent"] = function KeyboardEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('KeyboardEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["KeyboardEvent"], "KeyboardEvent");
bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"].prototype;
bodaEnv.memory.globlProtoObj["KeyboardEvent"].__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"], "DOM_KEY_LOCATION_STANDARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"], "DOM_KEY_LOCATION_LEFT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"], "DOM_KEY_LOCATION_RIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"], "DOM_KEY_LOCATION_NUMPAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "key", {
  configurable: true,
  enumerable: true,
  get: {
    key() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "key_get", arguments);
    }
  }.key,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "code", {
  configurable: true,
  enumerable: true,
  get: {
    code() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "code_get", arguments);
    }
  }.code,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "location", {
  configurable: true,
  enumerable: true,
  get: {
    location() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "location_get", arguments);
    }
  }.location,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "ctrlKey", {
  configurable: true,
  enumerable: true,
  get: {
    ctrlKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "ctrlKey_get", arguments);
    }
  }.ctrlKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "shiftKey", {
  configurable: true,
  enumerable: true,
  get: {
    shiftKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "shiftKey_get", arguments);
    }
  }.shiftKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "altKey", {
  configurable: true,
  enumerable: true,
  get: {
    altKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "altKey_get", arguments);
    }
  }.altKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "metaKey", {
  configurable: true,
  enumerable: true,
  get: {
    metaKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "metaKey_get", arguments);
    }
  }.metaKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "repeat", {
  configurable: true,
  enumerable: true,
  get: {
    repeat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "repeat_get", arguments);
    }
  }.repeat,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "isComposing", {
  configurable: true,
  enumerable: true,
  get: {
    isComposing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "isComposing_get", arguments);
    }
  }.isComposing,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "charCode", {
  configurable: true,
  enumerable: true,
  get: {
    charCode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "charCode_get", arguments);
    }
  }.charCode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "keyCode", {
  configurable: true,
  enumerable: true,
  get: {
    keyCode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "keyCode_get", arguments);
    }
  }.keyCode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "DOM_KEY_LOCATION_STANDARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "DOM_KEY_LOCATION_LEFT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "DOM_KEY_LOCATION_RIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "DOM_KEY_LOCATION_NUMPAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "getModifierState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getModifierState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "getModifierState", arguments);
    }
  }.getModifierState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "initKeyboardEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initKeyboardEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardEvent"].prototype, "KeyboardEvent", "initKeyboardEvent", arguments);
    }
  }.initKeyboardEvent
});