// TimeRanges对象

bodaEnv.memory.globlProtoObj["TimeRanges"] = function TimeRanges() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TimeRanges 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TimeRanges"], "TimeRanges");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TimeRanges"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TimeRanges"].prototype, "TimeRanges", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TimeRanges"].prototype, "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    end() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TimeRanges"].prototype, "TimeRanges", "end", arguments);
    }
  }.end
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TimeRanges"].prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TimeRanges"].prototype, "TimeRanges", "start", arguments);
    }
  }.start
});