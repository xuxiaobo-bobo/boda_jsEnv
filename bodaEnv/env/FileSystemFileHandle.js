// FileSystemFileHandle对象

bodaEnv.memory.globlProtoObj["FileSystemFileHandle"] = function FileSystemFileHandle() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FileSystemFileHandle 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FileSystemFileHandle"], "FileSystemFileHandle");
bodaEnv.memory.globlProtoObj["FileSystemFileHandle"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype;
bodaEnv.memory.globlProtoObj["FileSystemFileHandle"].__proto__ = bodaEnv.memory.globlProtoObj["FileSystemHandle"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemFileHandle"].prototype, "createWritable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createWritable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemFileHandle"].prototype, "FileSystemFileHandle", "createWritable", arguments);
    }
  }.createWritable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemFileHandle"].prototype, "getFile", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFile() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemFileHandle"].prototype, "FileSystemFileHandle", "getFile", arguments);
    }
  }.getFile
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemFileHandle"].prototype, "move", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    move() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemFileHandle"].prototype, "FileSystemFileHandle", "move", arguments);
    }
  }.move
});