// Bluetooth对象
bodavm.memory.globalobj['Bluetooth'] = function Bluetooth(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Bluetooth'], "Bluetooth");
bodavm.memory.globalobj['Bluetooth'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Bluetooth'].__proto__=bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Bluetooth', "getAvailability", {configurable:true, enumerable:true, writable:true, value:function getAvailability (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Bluetooth'].prototype, "Bluetooth", "getAvailability", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Bluetooth', "requestDevice", {configurable:true, enumerable:true, writable:true, value:function requestDevice (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Bluetooth'].prototype, "Bluetooth", "requestDevice", arguments)}},'prototype');
