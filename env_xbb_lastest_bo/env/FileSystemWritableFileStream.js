// FileSystemWritableFileStream对象

FileSystemWritableFileStream = function FileSystemWritableFileStream() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FileSystemWritableFileStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FileSystemWritableFileStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FileSystemWritableFileStream, "FileSystemWritableFileStream");
FileSystemWritableFileStream.prototype.__proto__ = WritableStream.prototype;
FileSystemWritableFileStream.__proto__ = WritableStream;
bodavm.toolsFunc.defineProperty(FileSystemWritableFileStream.prototype, "seek", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function seek() {
    return bodavm.toolsFunc.dispatch(this, FileSystemWritableFileStream.prototype, "FileSystemWritableFileStream", "seek", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemWritableFileStream.prototype, "truncate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function truncate() {
    return bodavm.toolsFunc.dispatch(this, FileSystemWritableFileStream.prototype, "FileSystemWritableFileStream", "truncate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemWritableFileStream.prototype, "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function write() {
    return bodavm.toolsFunc.dispatch(this, FileSystemWritableFileStream.prototype, "FileSystemWritableFileStream", "write", arguments);
  }
});