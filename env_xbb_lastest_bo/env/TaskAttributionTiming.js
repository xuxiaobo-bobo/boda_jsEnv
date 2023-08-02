// TaskAttributionTiming对象

TaskAttributionTiming = function TaskAttributionTiming() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TaskAttributionTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TaskAttributionTiming 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TaskAttributionTiming, "TaskAttributionTiming");
TaskAttributionTiming.prototype.__proto__ = PerformanceEntry.prototype;
TaskAttributionTiming.__proto__ = PerformanceEntry;
bodavm.toolsFunc.defineProperty(TaskAttributionTiming.prototype, "containerType", {
  configurable: true,
  enumerable: true,
  get: function containerType() {
    return bodavm.toolsFunc.dispatch(this, TaskAttributionTiming.prototype, "TaskAttributionTiming", "containerType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TaskAttributionTiming.prototype, "containerSrc", {
  configurable: true,
  enumerable: true,
  get: function containerSrc() {
    return bodavm.toolsFunc.dispatch(this, TaskAttributionTiming.prototype, "TaskAttributionTiming", "containerSrc_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TaskAttributionTiming.prototype, "containerId", {
  configurable: true,
  enumerable: true,
  get: function containerId() {
    return bodavm.toolsFunc.dispatch(this, TaskAttributionTiming.prototype, "TaskAttributionTiming", "containerId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TaskAttributionTiming.prototype, "containerName", {
  configurable: true,
  enumerable: true,
  get: function containerName() {
    return bodavm.toolsFunc.dispatch(this, TaskAttributionTiming.prototype, "TaskAttributionTiming", "containerName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TaskAttributionTiming.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, TaskAttributionTiming.prototype, "TaskAttributionTiming", "toJSON", arguments);
  }
});