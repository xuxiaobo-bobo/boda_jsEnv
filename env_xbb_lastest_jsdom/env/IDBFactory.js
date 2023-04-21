// IDBFactory对象
bodavm.memory.globalobj['IDBFactory'] = function IDBFactory(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBFactory'], "IDBFactory");
bodavm.toolsFunc.defineProperty('IDBFactory', "cmp", {configurable:true, enumerable:true, writable:true, value:function cmp (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBFactory'].prototype, "IDBFactory", "cmp", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('IDBFactory', "databases", {configurable:true, enumerable:true, writable:true, value:function databases (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBFactory'].prototype, "IDBFactory", "databases", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('IDBFactory', "deleteDatabase", {configurable:true, enumerable:true, writable:true, value:function deleteDatabase (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBFactory'].prototype, "IDBFactory", "deleteDatabase", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('IDBFactory', "open", {configurable:true, enumerable:true, writable:true, value:function open (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBFactory'].prototype, "IDBFactory", "open", arguments)}},'prototype');


// indexedDB对象
bodavm.memory.globalobj[ 'indexedDB']  = { _boisinit:bodavm.config.isinit}
bodavm.memory.globalobj[ 'indexedDB'].__proto__=bodavm.memory.globalobj['IDBFactory'].prototype;
