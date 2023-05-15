// SyncManager对象
bodavm.memory.globalobj['SyncManager'] = function SyncManager(){if (!(this instanceof SyncManager)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SyncManager'], "SyncManager");
bodavm.toolsFunc.defineProperty('SyncManager', "getTags", {configurable:true, enumerable:true, writable:true, value:function getTags (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SyncManager'].prototype, "SyncManager", "getTags", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('SyncManager', "register", {configurable:true, enumerable:true, writable:true, value:function register (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SyncManager'].prototype, "SyncManager", "register", arguments)}},'prototype');
