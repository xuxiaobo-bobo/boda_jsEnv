// PerformanceEntry对象
PerformanceEntry = function PerformanceEntry(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(PerformanceEntry, "PerformanceEntry");
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "name_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "entryType", {configurable:true, enumerable:true, get:function entryType (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "entryType_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "startTime", {configurable:true, enumerable:true, get:function startTime (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "startTime_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "duration", {configurable:true, enumerable:true, get:function duration (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "duration_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(PerformanceEntry.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function toJSON (){return bodavm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "toJSON", arguments)}});
