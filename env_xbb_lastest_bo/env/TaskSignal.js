// TaskSignal对象

TaskSignal = function TaskSignal() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TaskSignal)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TaskSignal 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TaskSignal, "TaskSignal");
TaskSignal.prototype.__proto__ = AbortSignal.prototype;
TaskSignal.__proto__ = AbortSignal;
bodavm.toolsFunc.defineProperty(TaskSignal.prototype, "priority", {
  configurable: true,
  enumerable: true,
  get: function priority() {
    return bodavm.toolsFunc.dispatch(this, TaskSignal.prototype, "TaskSignal", "priority_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TaskSignal.prototype, "onprioritychange", {
  configurable: true,
  enumerable: true,
  get: function onprioritychange() {
    return bodavm.toolsFunc.dispatch(this, TaskSignal.prototype, "TaskSignal", "onprioritychange_get", arguments);
  },
  set: function onprioritychange() {
    return bodavm.toolsFunc.dispatch(this, TaskSignal.prototype, "TaskSignal", "onprioritychange_set", arguments);
  }
});