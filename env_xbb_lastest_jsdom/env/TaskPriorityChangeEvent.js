// TaskPriorityChangeEvent对象
bodavm.memory.globalobj['TaskPriorityChangeEvent'] = function TaskPriorityChangeEvent(){if (!(this instanceof TaskPriorityChangeEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'TaskPriorityChangeEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TaskPriorityChangeEvent'], "TaskPriorityChangeEvent");
bodavm.memory.globalobj['TaskPriorityChangeEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['TaskPriorityChangeEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('TaskPriorityChangeEvent', "previousPriority", {configurable:true, enumerable:true, get:function previousPriority (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskPriorityChangeEvent'].prototype, "TaskPriorityChangeEvent", "previousPriority_get", arguments)}, set:undefined},'prototype');
