// NamedNodeMap对象

bodaEnv.memory.globlProtoObj["NamedNodeMap"] = function NamedNodeMap() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NamedNodeMap 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NamedNodeMap"], "NamedNodeMap");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "NamedNodeMap", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "getNamedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getNamedItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "NamedNodeMap", "getNamedItem", arguments);
    }
  }.getNamedItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "getNamedItemNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getNamedItemNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "NamedNodeMap", "getNamedItemNS", arguments);
    }
  }.getNamedItemNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "NamedNodeMap", "item", arguments);
    }
  }.item
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "removeNamedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeNamedItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "NamedNodeMap", "removeNamedItem", arguments);
    }
  }.removeNamedItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "removeNamedItemNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeNamedItemNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "NamedNodeMap", "removeNamedItemNS", arguments);
    }
  }.removeNamedItemNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "setNamedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setNamedItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "NamedNodeMap", "setNamedItem", arguments);
    }
  }.setNamedItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "setNamedItemNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setNamedItemNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NamedNodeMap"].prototype, "NamedNodeMap", "setNamedItemNS", arguments);
    }
  }.setNamedItemNS
});