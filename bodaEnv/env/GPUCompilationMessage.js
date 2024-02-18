// GPUCompilationMessage对象

bodaEnv.memory.globlProtoObj["GPUCompilationMessage"] = function GPUCompilationMessage() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUCompilationMessage 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUCompilationMessage"], "GPUCompilationMessage");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: {
    message() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "GPUCompilationMessage", "message_get", arguments);
    }
  }.message,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "GPUCompilationMessage", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "lineNum", {
  configurable: true,
  enumerable: true,
  get: {
    lineNum() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "GPUCompilationMessage", "lineNum_get", arguments);
    }
  }.lineNum,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "linePos", {
  configurable: true,
  enumerable: true,
  get: {
    linePos() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "GPUCompilationMessage", "linePos_get", arguments);
    }
  }.linePos,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "offset", {
  configurable: true,
  enumerable: true,
  get: {
    offset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "GPUCompilationMessage", "offset_get", arguments);
    }
  }.offset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCompilationMessage"].prototype, "GPUCompilationMessage", "length_get", arguments);
    }
  }.length,
  set: undefined
});