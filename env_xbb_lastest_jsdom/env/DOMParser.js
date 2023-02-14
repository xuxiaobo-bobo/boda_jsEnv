// DOMParser对象
DOMParser = function DOMParser(){}
bodavm.toolsFunc.safeProto(DOMParser, "DOMParser");
bodavm.toolsFunc.defineProperty(DOMParser.prototype, "parseFromString", {configurable:true, enumerable:true, writable:true, value:function parseFromString (){return bodavm.toolsFunc.dispatch(this, DOMParser.prototype, "DOMParser", "parseFromString", arguments)}});
