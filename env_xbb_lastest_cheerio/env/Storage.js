
//Storage对象
Storage=function Storage(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(Storage,"Storage");
bodavm.toolsFunc.defineProperty(Storage.prototype,"length",{configurable:true, enumerable:true, get:function length () {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","length_get",arguments,)},set:undefined});
bodavm.toolsFunc.defineProperty(Storage.prototype,"clear",{configurable:true, enumerable:true, writable:true, value:function clear() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","clear",arguments)}});
bodavm.toolsFunc.defineProperty(Storage.prototype,"getItem",{configurable:true, enumerable:true, writable:true, value:function getItem() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","getItem",arguments)}});
bodavm.toolsFunc.defineProperty(Storage.prototype,"key",{configurable:true, enumerable:true, writable:true, value:function key() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","key",arguments)}});
bodavm.toolsFunc.defineProperty(Storage.prototype,"removeItem",{configurable:true, enumerable:true, writable:true, value:function removeItem() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","removeItem",arguments)}});
bodavm.toolsFunc.defineProperty(Storage.prototype,"setItem",{configurable:true, enumerable:true, writable:true, value:function setItem() {return bodavm.toolsFunc.dispatch(this,Storage.prototype,"Storage","setItem",arguments)}});


var localStorage= {}
localStorage.__proto__=Storage.prototype;
// sessionStorage对象
var sessionStorage= {}
sessionStorage.__proto__=Storage.prototype;
// debugger;

