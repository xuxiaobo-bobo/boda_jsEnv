// TaskPriorityChangeEvent对象

TaskPriorityChangeEvent = function TaskPriorityChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TaskPriorityChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'TaskPriorityChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TaskPriorityChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TaskPriorityChangeEvent, "TaskPriorityChangeEvent");
TaskPriorityChangeEvent.prototype.__proto__ = Event.prototype;
TaskPriorityChangeEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(TaskPriorityChangeEvent.prototype, "previousPriority", {
  configurable: true,
  enumerable: true,
  get: function previousPriority() {
    return bodavm.toolsFunc.dispatch(this, TaskPriorityChangeEvent.prototype, "TaskPriorityChangeEvent", "previousPriority_get", arguments);
  },
  set: undefined
});