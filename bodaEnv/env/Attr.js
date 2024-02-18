// Attr对象

bodaEnv.memory.globlProtoObj["Attr"] = function Attr() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Attr 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Attr"], "Attr");
bodaEnv.memory.globlProtoObj["Attr"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Node"].prototype;
bodaEnv.memory.globlProtoObj["Attr"].__proto__ = bodaEnv.memory.globlProtoObj["Node"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Attr"].prototype, "namespaceURI", {
  configurable: true,
  enumerable: true,
  get: {
    namespaceURI() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Attr"].prototype, "Attr", "namespaceURI_get", arguments);
    }
  }.namespaceURI,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Attr"].prototype, "prefix", {
  configurable: true,
  enumerable: true,
  get: {
    prefix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Attr"].prototype, "Attr", "prefix_get", arguments);
    }
  }.prefix,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Attr"].prototype, "localName", {
  configurable: true,
  enumerable: true,
  get: {
    localName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Attr"].prototype, "Attr", "localName_get", arguments);
    }
  }.localName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Attr"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Attr"].prototype, "Attr", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Attr"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Attr"].prototype, "Attr", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Attr"].prototype, "Attr", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Attr"].prototype, "ownerElement", {
  configurable: true,
  enumerable: true,
  get: {
    ownerElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Attr"].prototype, "Attr", "ownerElement_get", arguments);
    }
  }.ownerElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Attr"].prototype, "specified", {
  configurable: true,
  enumerable: true,
  get: {
    specified() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Attr"].prototype, "Attr", "specified_get", arguments);
    }
  }.specified,
  set: undefined
});