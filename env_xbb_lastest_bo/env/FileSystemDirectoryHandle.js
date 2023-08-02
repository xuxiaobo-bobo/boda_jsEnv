// FileSystemDirectoryHandle对象

FileSystemDirectoryHandle = function FileSystemDirectoryHandle() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FileSystemDirectoryHandle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FileSystemDirectoryHandle 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FileSystemDirectoryHandle, "FileSystemDirectoryHandle");
FileSystemDirectoryHandle.prototype.__proto__ = FileSystemHandle.prototype;
FileSystemDirectoryHandle.__proto__ = FileSystemHandle;
bodavm.toolsFunc.defineProperty(FileSystemDirectoryHandle.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, FileSystemDirectoryHandle.prototype, "FileSystemDirectoryHandle", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemDirectoryHandle.prototype, "getDirectoryHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDirectoryHandle() {
    return bodavm.toolsFunc.dispatch(this, FileSystemDirectoryHandle.prototype, "FileSystemDirectoryHandle", "getDirectoryHandle", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemDirectoryHandle.prototype, "getFileHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFileHandle() {
    return bodavm.toolsFunc.dispatch(this, FileSystemDirectoryHandle.prototype, "FileSystemDirectoryHandle", "getFileHandle", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemDirectoryHandle.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, FileSystemDirectoryHandle.prototype, "FileSystemDirectoryHandle", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemDirectoryHandle.prototype, "removeEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeEntry() {
    return bodavm.toolsFunc.dispatch(this, FileSystemDirectoryHandle.prototype, "FileSystemDirectoryHandle", "removeEntry", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemDirectoryHandle.prototype, "resolve", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resolve() {
    return bodavm.toolsFunc.dispatch(this, FileSystemDirectoryHandle.prototype, "FileSystemDirectoryHandle", "resolve", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemDirectoryHandle.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, FileSystemDirectoryHandle.prototype, "FileSystemDirectoryHandle", "values", arguments);
  }
});