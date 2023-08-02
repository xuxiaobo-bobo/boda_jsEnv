// FileList对象

FileList = function FileList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FileList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FileList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FileList, "FileList");
bodavm.toolsFunc.defineProperty(FileList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, FileList.prototype, "FileList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FileList.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, FileList.prototype, "FileList", "item", arguments);
  }
});