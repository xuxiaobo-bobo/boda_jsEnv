// FileSystemDirectoryHandle对象

bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"] = function FileSystemDirectoryHandle() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FileSystemDirectoryHandle 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"], "FileSystemDirectoryHandle");
bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["FileSystemHandle"].prototype;
bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].__proto__ = bodaEnv.memory.globlProtoObj["FileSystemHandle"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "FileSystemDirectoryHandle", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "getDirectoryHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDirectoryHandle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "FileSystemDirectoryHandle", "getDirectoryHandle", arguments);
    }
  }.getDirectoryHandle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "getFileHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFileHandle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "FileSystemDirectoryHandle", "getFileHandle", arguments);
    }
  }.getFileHandle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "FileSystemDirectoryHandle", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "removeEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeEntry() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "FileSystemDirectoryHandle", "removeEntry", arguments);
    }
  }.removeEntry
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "resolve", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    resolve() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "FileSystemDirectoryHandle", "resolve", arguments);
    }
  }.resolve
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemDirectoryHandle"].prototype, "FileSystemDirectoryHandle", "values", arguments);
    }
  }.values
});