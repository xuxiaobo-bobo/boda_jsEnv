// DOMTokenList对象

bodaEnv.memory.globlProtoObj["DOMTokenList"] = function DOMTokenList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMTokenList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMTokenList"], "DOMTokenList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "values", arguments);
    }
  }.values
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    add() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "add", arguments);
    }
  }.add
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "contains", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    contains() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "contains", arguments);
    }
  }.contains
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "item", arguments);
    }
  }.item
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "remove", arguments);
    }
  }.remove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "replace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "replace", arguments);
    }
  }.replace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "supports", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    supports() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "supports", arguments);
    }
  }.supports
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "toggle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "toggle", arguments);
    }
  }.toggle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMTokenList"].prototype, "DOMTokenList", "toString", arguments);
    }
  }.toString
});