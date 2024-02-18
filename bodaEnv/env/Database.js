// BarProp对象
bodaEnv.memory.globlProtoObj['Database'] = function Database() {
  bodaEnv.toolsFunc.console_copy('Database 实例化对象参数为 ->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  return bodaEnv.toolsFunc.throwError("TypeError", "Illegal constructor");
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj['Database'], "Database");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['Database'].prototype, "version", {
  configurable: true,
  enumerable: true,
  get: {
    version() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['Database'].prototype, "Database", "version_get", arguments);
    }
  }.version,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['Database'].prototype, "readTransaction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readTransaction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['Database'].prototype, "Database", "readTransaction", arguments);
    }
  }.readTransaction
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['Database'].prototype, "transaction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transaction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['Database'].prototype, "Database", "transaction", arguments);
    }
  }.transaction
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['Database'].prototype, "changeVersion", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    changeVersion() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['Database'].prototype, "Database", "changeVersion", arguments);
    }
  }.changeVersion
});
delete bodaEnv.memory.globlProtoObj['Database'].prototype.constructor;
bodaEnv.memory.globlProtoObj['database'] = {};
bodaEnv.memory.globlProtoObj['database'].__proto__ = bodaEnv.memory.globlProtoObj['Database'].prototype;