// TaskController对象

bodavm.memory.globalobj['TaskController'] = function TaskController() {
  console.log_copy('TaskController 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.TaskController();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TaskController'], "TaskController");
bodavm.memory.globalobj['TaskController'].prototype.__proto__ = bodavm.memory.globalobj['AbortController'].prototype;
bodavm.memory.globalobj['TaskController'].__proto__ = bodavm.memory.globalobj['AbortController'];
bodavm.toolsFunc.defineProperty('TaskController', "setPriority", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPriority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskController'].prototype, "TaskController", "setPriority", arguments);
  }
}, 'prototype');