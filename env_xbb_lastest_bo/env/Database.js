// BarProp对象
bodavm.memory.notDefined['Database'] = function Database() {
  console.log_copy('Database 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
};
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['Database'], "Database");
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['Database'].prototype, "version", {
  configurable: true,
  enumerable: true,
  get: function version() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['Database'].prototype, "Database", "version_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['Database'].prototype, "readTransaction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readTransaction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['Database'].prototype, "Database", "readTransaction", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['Database'].prototype, "transaction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transaction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['Database'].prototype, "Database", "transaction", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['Database'].prototype, "changeVersion", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function changeVersion() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['Database'].prototype, "Database", "changeVersion", arguments);
  }
});
delete bodavm.memory.notDefined['Database'].prototype.constructor;
bodavm.memory.notDefined['database'] = {};
bodavm.memory.notDefined['database'].__proto__ = bodavm.memory.notDefined['Database'].prototype;