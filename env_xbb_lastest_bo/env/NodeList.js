// NodeList对象
NodeList = function NodeList(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(NodeList, "NodeList");
bodavm.toolsFunc.defineProperty(NodeList.prototype, "entries", {configurable:true, enumerable:true, writable:true, value:function entries (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "entries", arguments)}});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "keys", {configurable:true, enumerable:true, writable:true, value:function keys (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "keys", arguments)}});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "values", {configurable:true, enumerable:true, writable:true, value:function values (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "values", arguments)}});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "forEach", {configurable:true, enumerable:true, writable:true, value:function forEach (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "forEach", arguments)}});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(NodeList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "item", arguments)}});


