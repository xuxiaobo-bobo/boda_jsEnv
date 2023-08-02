// FileSystemFileHandle对象

FileSystemFileHandle = function FileSystemFileHandle() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FileSystemFileHandle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FileSystemFileHandle 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FileSystemFileHandle, "FileSystemFileHandle");
FileSystemFileHandle.prototype.__proto__ = FileSystemHandle.prototype;
FileSystemFileHandle.__proto__ = FileSystemHandle;
bodavm.toolsFunc.defineProperty(FileSystemFileHandle.prototype, "createWritable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createWritable() {
    return bodavm.toolsFunc.dispatch(this, FileSystemFileHandle.prototype, "FileSystemFileHandle", "createWritable", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemFileHandle.prototype, "getFile", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFile() {
    return bodavm.toolsFunc.dispatch(this, FileSystemFileHandle.prototype, "FileSystemFileHandle", "getFile", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemFileHandle.prototype, "move", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function move() {
    return bodavm.toolsFunc.dispatch(this, FileSystemFileHandle.prototype, "FileSystemFileHandle", "move", arguments);
  }
});