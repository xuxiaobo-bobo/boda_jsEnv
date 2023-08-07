// TaskController对象

TaskController = function TaskController() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TaskController 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TaskController, "TaskController");
TaskController.prototype.__proto__ = AbortController.prototype;
TaskController.__proto__ = AbortController;
bodavm.toolsFunc.defineProperty(TaskController.prototype, "setPriority", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPriority() {
    return bodavm.toolsFunc.dispatch(this, TaskController.prototype, "TaskController", "setPriority", arguments);
  }
});