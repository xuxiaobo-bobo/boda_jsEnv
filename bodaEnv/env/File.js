// File对象

bodaEnv.memory.globlProtoObj["File"] = function File() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('File 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["File"], "File");
bodaEnv.memory.globlProtoObj["File"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Blob"].prototype;
bodaEnv.memory.globlProtoObj["File"].__proto__ = bodaEnv.memory.globlProtoObj["Blob"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["File"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["File"].prototype, "File", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["File"].prototype, "lastModified", {
  configurable: true,
  enumerable: true,
  get: {
    lastModified() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["File"].prototype, "File", "lastModified_get", arguments);
    }
  }.lastModified,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["File"].prototype, "lastModifiedDate", {
  configurable: true,
  enumerable: true,
  get: {
    lastModifiedDate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["File"].prototype, "File", "lastModifiedDate_get", arguments);
    }
  }.lastModifiedDate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["File"].prototype, "webkitRelativePath", {
  configurable: true,
  enumerable: true,
  get: {
    webkitRelativePath() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["File"].prototype, "File", "webkitRelativePath_get", arguments);
    }
  }.webkitRelativePath,
  set: undefined
});