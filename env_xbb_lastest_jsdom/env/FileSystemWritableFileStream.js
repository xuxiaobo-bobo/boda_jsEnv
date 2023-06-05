// FileSystemWritableFileStream对象

bodavm.memory.globalobj['FileSystemWritableFileStream'] = function FileSystemWritableFileStream() {
  console.log_copy('FileSystemWritableFileStream 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof FileSystemWritableFileStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FileSystemWritableFileStream'], "FileSystemWritableFileStream");
bodavm.memory.globalobj['FileSystemWritableFileStream'].prototype.__proto__ = bodavm.memory.globalobj['WritableStream'].prototype;
bodavm.memory.globalobj['FileSystemWritableFileStream'].__proto__ = bodavm.memory.globalobj['WritableStream'];
bodavm.toolsFunc.defineProperty('FileSystemWritableFileStream', "seek", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function seek() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemWritableFileStream'].prototype, "FileSystemWritableFileStream", "seek", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemWritableFileStream', "truncate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function truncate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemWritableFileStream'].prototype, "FileSystemWritableFileStream", "truncate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemWritableFileStream', "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function write() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemWritableFileStream'].prototype, "FileSystemWritableFileStream", "write", arguments);
  }
}, 'prototype');