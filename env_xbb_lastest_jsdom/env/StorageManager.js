// StorageManager对象
bodavm.memory.globalobj['StorageManager'] = function StorageManager(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StorageManager'], "StorageManager");
bodavm.memory.globalobj['StorageManager'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['StorageManager'].__proto__=bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('StorageManager', "estimate", {configurable:true, enumerable:true, writable:true, value:function estimate (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageManager'].prototype, "StorageManager", "estimate", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('StorageManager', "persisted", {configurable:true, enumerable:true, writable:true, value:function persisted (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageManager'].prototype, "StorageManager", "persisted", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('StorageManager', "getDirectory", {configurable:true, enumerable:true, writable:true, value:function getDirectory (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageManager'].prototype, "StorageManager", "getDirectory", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('StorageManager', "persist", {configurable:true, enumerable:true, writable:true, value:function persist (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StorageManager'].prototype, "StorageManager", "persist", arguments)}},'prototype');
