// TaskPriorityChangeEvent对象

bodavm.memory.globalobj['TaskPriorityChangeEvent'] = function TaskPriorityChangeEvent() {
  console.log_copy('TaskPriorityChangeEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TaskPriorityChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'TaskPriorityChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TaskPriorityChangeEvent'], "TaskPriorityChangeEvent");
bodavm.memory.globalobj['TaskPriorityChangeEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['TaskPriorityChangeEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('TaskPriorityChangeEvent', "previousPriority", {
  configurable: true,
  enumerable: true,
  get: function previousPriority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskPriorityChangeEvent'].prototype, "TaskPriorityChangeEvent", "previousPriority_get", arguments);
  },
  set: undefined
}, 'prototype');