// FormData对象

FormData = function FormData() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FormData 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FormData, "FormData");
bodavm.toolsFunc.defineProperty(FormData.prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "append", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FormData.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FormData.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FormData.prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAll() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "getAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FormData.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FormData.prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function set() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FormData.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FormData.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FormData.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FormData.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, FormData.prototype, "FormData", "values", arguments);
  }
});