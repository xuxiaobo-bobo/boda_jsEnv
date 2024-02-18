// FileSystemHandle对象

bodaEnv.memory.globlProtoObj["FileSystemHandle"] = function FileSystemHandle() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FileSystemHandle 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FileSystemHandle"], "FileSystemHandle");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: {
    kind() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "FileSystemHandle", "kind_get", arguments);
    }
  }.kind,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "FileSystemHandle", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "isSameEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isSameEntry() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "FileSystemHandle", "isSameEntry", arguments);
    }
  }.isSameEntry
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "queryPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    queryPermission() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "FileSystemHandle", "queryPermission", arguments);
    }
  }.queryPermission
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "FileSystemHandle", "remove", arguments);
    }
  }.remove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "requestPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestPermission() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype, "FileSystemHandle", "requestPermission", arguments);
    }
  }.requestPermission
});