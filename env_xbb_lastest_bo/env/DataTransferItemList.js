// DataTransferItemList对象

DataTransferItemList = function DataTransferItemList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DataTransferItemList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DataTransferItemList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DataTransferItemList, "DataTransferItemList");
bodavm.toolsFunc.defineProperty(DataTransferItemList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItemList.prototype, "DataTransferItemList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DataTransferItemList.prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItemList.prototype, "DataTransferItemList", "add", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransferItemList.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItemList.prototype, "DataTransferItemList", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransferItemList.prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, DataTransferItemList.prototype, "DataTransferItemList", "remove", arguments);
  }
});