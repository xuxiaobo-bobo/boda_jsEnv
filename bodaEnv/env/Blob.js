// Blob对象

bodaEnv.memory.globlProtoObj["Blob"] = function Blob() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Blob 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Blob"], "Blob");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Blob"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Blob"].prototype, "Blob", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Blob"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Blob"].prototype, "Blob", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Blob"].prototype, "arrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    arrayBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Blob"].prototype, "Blob", "arrayBuffer", arguments);
    }
  }.arrayBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Blob"].prototype, "slice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    slice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Blob"].prototype, "Blob", "slice", arguments);
    }
  }.slice
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Blob"].prototype, "stream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Blob"].prototype, "Blob", "stream", arguments);
    }
  }.stream
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Blob"].prototype, "text", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Blob"].prototype, "Blob", "text", arguments);
    }
  }.text
});