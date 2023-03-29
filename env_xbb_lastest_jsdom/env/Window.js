// Window对象
bodavm.memory.globalobj['Window'] = function Window(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
// debugger
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Window'], "Window");
bodavm.memory.globalobj['Window'].prototype.__proto__=bodavm.memory.globalobj['WindowProperties'].prototype;
bodavm.memory.globalobj['Window'].__proto__=bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Window', "TEMPORARY", {configurable:false, enumerable:true, writable:false, value:0});
bodavm.toolsFunc.defineProperty('Window', "PERSISTENT", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty('Window', "TEMPORARY", {configurable:false, enumerable:true, writable:false, value:0},'prototype');
bodavm.toolsFunc.defineProperty('Window', "PERSISTENT", {configurable:false, enumerable:true, writable:false, value:1},'prototype');
// debugger

