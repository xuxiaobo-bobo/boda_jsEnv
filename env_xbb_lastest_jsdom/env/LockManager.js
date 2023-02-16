// LockManager对象
LockManager = function LockManager(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(LockManager, "LockManager");
bodavm.toolsFunc.defineProperty(LockManager.prototype, "query", {configurable:true, enumerable:true, writable:true, value:function query (){return bodavm.toolsFunc.dispatch(this, LockManager.prototype, "LockManager", "query", arguments)}});
bodavm.toolsFunc.defineProperty(LockManager.prototype, "request", {configurable:true, enumerable:true, writable:true, value:function request (){return bodavm.toolsFunc.dispatch(this, LockManager.prototype, "LockManager", "request", arguments)}});
