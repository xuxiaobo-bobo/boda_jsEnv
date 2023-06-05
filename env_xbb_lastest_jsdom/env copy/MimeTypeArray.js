// MimeTypeArray对象
bodavm.memory.globalobj['MimeTypeArray'] = function MimeTypeArray(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MimeTypeArray'], "MimeTypeArray");
bodavm.toolsFunc.defineProperty('MimeTypeArray', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeTypeArray'].prototype, "MimeTypeArray", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MimeTypeArray', "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeTypeArray'].prototype, "MimeTypeArray", "item", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('MimeTypeArray', "namedItem", {configurable:true, enumerable:true, writable:true, value:function namedItem (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeTypeArray'].prototype, "MimeTypeArray", "namedItem", arguments)}},'prototype');
