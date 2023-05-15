// Profiler对象
bodavm.memory.globalobj['Profiler'] = function Profiler(){if (!(this instanceof Profiler)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Profiler': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Profiler'], "Profiler");
bodavm.memory.globalobj['Profiler'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Profiler'].__proto__=bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Profiler', "sampleInterval", {configurable:true, enumerable:true, get:function sampleInterval (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Profiler'].prototype, "Profiler", "sampleInterval_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Profiler', "stopped", {configurable:true, enumerable:true, get:function stopped (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Profiler'].prototype, "Profiler", "stopped_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Profiler', "stop", {configurable:true, enumerable:true, writable:true, value:function stop (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Profiler'].prototype, "Profiler", "stop", arguments)}},'prototype');
