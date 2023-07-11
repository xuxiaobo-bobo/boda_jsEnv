// DataTransfer对象

DataTransfer = function DataTransfer() {
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DataTransfer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DataTransfer, "DataTransfer");
bodavm.toolsFunc.defineProperty(DataTransfer.prototype, "dropEffect", {
  configurable: true,
  enumerable: true,
  get: function dropEffect() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "dropEffect_get", arguments);
  },
  set: function dropEffect() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "dropEffect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransfer.prototype, "effectAllowed", {
  configurable: true,
  enumerable: true,
  get: function effectAllowed() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "effectAllowed_get", arguments);
  },
  set: function effectAllowed() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "effectAllowed_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransfer.prototype, "items", {
  configurable: true,
  enumerable: true,
  get: function items() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "items_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DataTransfer.prototype, "types", {
  configurable: true,
  enumerable: true,
  get: function types() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "types_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DataTransfer.prototype, "files", {
  configurable: true,
  enumerable: true,
  get: function files() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "files_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DataTransfer.prototype, "clearData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearData() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "clearData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransfer.prototype, "getData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getData() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "getData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransfer.prototype, "setData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setData() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "setData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DataTransfer.prototype, "setDragImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setDragImage() {
    return bodavm.toolsFunc.dispatch(this, DataTransfer.prototype, "DataTransfer", "setDragImage", arguments);
  }
});