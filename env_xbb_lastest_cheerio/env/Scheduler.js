// Scheduler对象
Scheduler = function Scheduler(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Scheduler, "Scheduler");
bodavm.toolsFunc.defineProperty(Scheduler.prototype, "postTask", {configurable:true, enumerable:true, writable:true, value:function postTask (){return bodavm.toolsFunc.dispatch(this, Scheduler.prototype, "Scheduler", "postTask", arguments)}});


// scheduler对象
var scheduler = {}
scheduler.__proto__=Scheduler.prototype;
