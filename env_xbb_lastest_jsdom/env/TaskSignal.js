// TaskSignal对象
bodavm.memory.globalobj['TaskSignal'] = function TaskSignal(){if (!(this instanceof TaskSignal)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TaskSignal'], "TaskSignal");
bodavm.memory.globalobj['TaskSignal'].prototype.__proto__=bodavm.memory.globalobj['AbortSignal'].prototype;
bodavm.memory.globalobj['TaskSignal'].__proto__=bodavm.memory.globalobj['AbortSignal'];
bodavm.toolsFunc.defineProperty('TaskSignal', "priority", {configurable:true, enumerable:true, get:function priority (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskSignal'].prototype, "TaskSignal", "priority_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('TaskSignal', "onprioritychange", {configurable:true, enumerable:true, get:function onprioritychange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskSignal'].prototype, "TaskSignal", "onprioritychange_get", arguments)}, set:function onprioritychange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskSignal'].prototype, "TaskSignal", "onprioritychange_set", arguments)}},'prototype');
