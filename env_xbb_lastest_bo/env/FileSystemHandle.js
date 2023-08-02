// FileSystemHandle对象

FileSystemHandle = function FileSystemHandle() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FileSystemHandle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FileSystemHandle 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FileSystemHandle, "FileSystemHandle");
bodavm.toolsFunc.defineProperty(FileSystemHandle.prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: function kind() {
    return bodavm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "kind_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FileSystemHandle.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FileSystemHandle.prototype, "isSameEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSameEntry() {
    return bodavm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "isSameEntry", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemHandle.prototype, "queryPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryPermission() {
    return bodavm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "queryPermission", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemHandle.prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "remove", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FileSystemHandle.prototype, "requestPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPermission() {
    return bodavm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "requestPermission", arguments);
  }
});