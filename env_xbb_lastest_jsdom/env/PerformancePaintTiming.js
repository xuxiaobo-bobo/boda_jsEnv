// PerformancePaintTiming对象
bodavm.memory.globalobj['PerformancePaintTiming'] = function PerformancePaintTiming(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformancePaintTiming'], "PerformancePaintTiming");
bodavm.memory.globalobj['PerformancePaintTiming'].prototype.__proto__=bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['PerformancePaintTiming'].__proto__=bodavm.memory.globalobj['PerformanceEntry'];
