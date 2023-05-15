// LockManager对象
bodavm.memory.globalobj['LockManager'] = function LockManager(){if (!(this instanceof LockManager)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['LockManager'], "LockManager");
bodavm.toolsFunc.defineProperty('LockManager', "query", {configurable:true, enumerable:true, writable:true, value:function query (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LockManager'].prototype, "LockManager", "query", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('LockManager', "request", {configurable:true, enumerable:true, writable:true, value:function request (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LockManager'].prototype, "LockManager", "request", arguments)}},'prototype');
