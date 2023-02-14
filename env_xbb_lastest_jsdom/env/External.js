// External对象
External = function External(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(External, "External");
bodavm.toolsFunc.defineProperty(External.prototype, "AddSearchProvider", {configurable:true, enumerable:true, writable:true, value:function AddSearchProvider (){return bodavm.toolsFunc.dispatch(this, External.prototype, "External", "AddSearchProvider", arguments)}});
bodavm.toolsFunc.defineProperty(External.prototype, "IsSearchProviderInstalled", {configurable:true, enumerable:true, writable:true, value:function IsSearchProviderInstalled (){return bodavm.toolsFunc.dispatch(this, External.prototype, "External", "IsSearchProviderInstalled", arguments)}});
// external对象
var external = {}
external.__proto__=External.prototype;
