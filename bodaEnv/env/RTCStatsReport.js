// RTCStatsReport对象

bodaEnv.memory.globlProtoObj["RTCStatsReport"] = function RTCStatsReport() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCStatsReport 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCStatsReport"], "RTCStatsReport");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "RTCStatsReport", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "RTCStatsReport", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "RTCStatsReport", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "RTCStatsReport", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "RTCStatsReport", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "RTCStatsReport", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCStatsReport"].prototype, "RTCStatsReport", "values", arguments);
    }
  }.values
});