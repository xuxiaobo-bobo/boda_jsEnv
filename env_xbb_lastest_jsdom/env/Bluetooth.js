// Bluetooth对象
Bluetooth = function Bluetooth(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Bluetooth, "Bluetooth");
Bluetooth.prototype.__proto__=EventTarget.prototype;
Bluetooth.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(Bluetooth.prototype, "getAvailability", {configurable:true, enumerable:true, writable:true, value:function getAvailability (){return bodavm.toolsFunc.dispatch(this, Bluetooth.prototype, "Bluetooth", "getAvailability", arguments)}});
bodavm.toolsFunc.defineProperty(Bluetooth.prototype, "requestDevice", {configurable:true, enumerable:true, writable:true, value:function requestDevice (){return bodavm.toolsFunc.dispatch(this, Bluetooth.prototype, "Bluetooth", "requestDevice", arguments)}});
