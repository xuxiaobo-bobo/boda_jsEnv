// Scheduler对象
bodavm.memory.globalobj['Scheduler'] = function Scheduler(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Scheduler'], "Scheduler");
bodavm.toolsFunc.defineProperty('Scheduler', "postTask", {configurable:true, enumerable:true, writable:true, value:function postTask (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Scheduler'].prototype, "Scheduler", "postTask", arguments)}},'prototype');

// scheduler对象
bodavm.memory.globalobj[ 'scheduler'] = {}
bodavm.memory.globalobj[ 'scheduler'] .__proto__=bodavm.memory.globalobj['Scheduler'].prototype;
