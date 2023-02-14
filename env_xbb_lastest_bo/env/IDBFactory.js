//IDBFactory对象
IDBFactory=function IDBFactory(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(IDBFactory,"IDBFactory");
bodavm.toolsFunc.defineProperty(IDBFactory.prototype,"cmp",{configurable:true, enumerable:true, writable:true, value:function cmp() {return bodavm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","cmp",arguments)}});
bodavm.toolsFunc.defineProperty(IDBFactory.prototype,"databases",{configurable:true, enumerable:true, writable:true, value:function databases() {return bodavm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","databases",arguments)}});
bodavm.toolsFunc.defineProperty(IDBFactory.prototype,"deleteDatabase",{configurable:true, enumerable:true, writable:true, value:function deleteDatabase() {return bodavm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","deleteDatabase",arguments)}});
bodavm.toolsFunc.defineProperty(IDBFactory.prototype,"open",{configurable:true, enumerable:true, writable:true, value:function open() {return bodavm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","open",arguments)}});


// indexedDB对象
var indexedDB = {}
indexedDB.__proto__=IDBFactory.prototype;
