// DOMStringList对象
bodavm.memory.globalobj['DOMStringList'] = function DOMStringList(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMStringList'], "DOMStringList");
bodavm.toolsFunc.defineProperty('DOMStringList', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMStringList'].prototype, "DOMStringList", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('DOMStringList', "contains", {configurable:true, enumerable:true, writable:true, value:function contains (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMStringList'].prototype, "DOMStringList", "contains", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('DOMStringList', "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMStringList'].prototype, "DOMStringList", "item", arguments)}},'prototype');
