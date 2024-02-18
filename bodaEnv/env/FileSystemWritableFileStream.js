// FileSystemWritableFileStream对象

bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"] = function FileSystemWritableFileStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FileSystemWritableFileStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"], "FileSystemWritableFileStream");
bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["WritableStream"].prototype;
bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"].__proto__ = bodaEnv.memory.globlProtoObj["WritableStream"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"].prototype, "seek", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    seek() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"].prototype, "FileSystemWritableFileStream", "seek", arguments);
    }
  }.seek
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"].prototype, "truncate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    truncate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"].prototype, "FileSystemWritableFileStream", "truncate", arguments);
    }
  }.truncate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"].prototype, "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    write() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FileSystemWritableFileStream"].prototype, "FileSystemWritableFileStream", "write", arguments);
    }
  }.write
});