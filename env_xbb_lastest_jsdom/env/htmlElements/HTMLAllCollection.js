// HTMLAllCollection对象
HTMLAllCollection = function HTMLAllCollection(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLAllCollection, "HTMLAllCollection");
bodavm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollection", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollection", "item", arguments)}});
bodavm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "namedItem", {configurable:true, enumerable:true, writable:true, value:function namedItem (){return bodavm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollection", "namedItem", arguments)}});
