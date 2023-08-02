// DataTransferItem对象

DataTransferItem = function DataTransferItem() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DataTransferItem)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DataTransferItem 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DataTransferItem, "DataTransferItem");
bodavm.toolsFunc.defineProperty(DataTransferItem.prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: function kind() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItem.prototype, "DataTransferItem", "kind_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DataTransferItem.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItem.prototype, "DataTransferItem", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DataTransferItem.prototype, "getAsFile", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAsFile() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItem.prototype, "DataTransferItem", "getAsFile", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransferItem.prototype, "getAsString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAsString() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItem.prototype, "DataTransferItem", "getAsString", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransferItem.prototype, "webkitGetAsEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitGetAsEntry() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItem.prototype, "DataTransferItem", "webkitGetAsEntry", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransferItem.prototype, "getAsFileSystemHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAsFileSystemHandle() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItem.prototype, "DataTransferItem", "getAsFileSystemHandle", arguments);
  }
});