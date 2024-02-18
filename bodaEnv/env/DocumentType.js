// DocumentType对象

bodaEnv.memory.globlProtoObj["DocumentType"] = function DocumentType() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DocumentType 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DocumentType"], "DocumentType");
bodaEnv.memory.globlProtoObj["DocumentType"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Node"].prototype;
bodaEnv.memory.globlProtoObj["DocumentType"].__proto__ = bodaEnv.memory.globlProtoObj["Node"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "DocumentType", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "publicId", {
  configurable: true,
  enumerable: true,
  get: {
    publicId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "DocumentType", "publicId_get", arguments);
    }
  }.publicId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "systemId", {
  configurable: true,
  enumerable: true,
  get: {
    systemId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "DocumentType", "systemId_get", arguments);
    }
  }.systemId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "after", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    after() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "DocumentType", "after", arguments);
    }
  }.after
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "before", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    before() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "DocumentType", "before", arguments);
    }
  }.before
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "DocumentType", "remove", arguments);
    }
  }.remove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "replaceWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceWith() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentType"].prototype, "DocumentType", "replaceWith", arguments);
    }
  }.replaceWith
});