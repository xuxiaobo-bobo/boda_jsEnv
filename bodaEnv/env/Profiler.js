// Profiler对象

bodaEnv.memory.globlProtoObj["Profiler"] = function Profiler() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Profiler 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Profiler"], "Profiler");
bodaEnv.memory.globlProtoObj["Profiler"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Profiler"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Profiler"].prototype, "sampleInterval", {
  configurable: true,
  enumerable: true,
  get: {
    sampleInterval() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Profiler"].prototype, "Profiler", "sampleInterval_get", arguments);
    }
  }.sampleInterval,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Profiler"].prototype, "stopped", {
  configurable: true,
  enumerable: true,
  get: {
    stopped() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Profiler"].prototype, "Profiler", "stopped_get", arguments);
    }
  }.stopped,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Profiler"].prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Profiler"].prototype, "Profiler", "stop", arguments);
    }
  }.stop
});