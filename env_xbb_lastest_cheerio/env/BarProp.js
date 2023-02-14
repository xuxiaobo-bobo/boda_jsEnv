// BarProp对象
BarProp = function BarProp(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(BarProp, "BarProp");
bodavm.toolsFunc.defineProperty(BarProp.prototype, "visible", {configurable:true, enumerable:true, get:function visible (){return bodavm.toolsFunc.dispatch(this, BarProp.prototype, "BarProp", "visible_get", arguments)}, set:undefined});
// locationbar对象
var locationbar = {}
locationbar.__proto__=BarProp.prototype;


var menubar={}
menubar.__proto__= BarProp.prototype;

var statusbar={}
statusbar.__proto__=BarProp.prototype


var toolbar={}
toolbar.__proto__=BarProp.prototype