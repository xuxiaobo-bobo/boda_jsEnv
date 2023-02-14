//Plugin对象
Plugin=function Plugin(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(Plugin,"Plugin");
bodavm.toolsFunc.defineProperty(Plugin.prototype,"name",{configurable:true, enumerable:true, get:function name () {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","name_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"filename",{configurable:true, enumerable:true, get:function filename () {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","filename_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"description",{configurable:true, enumerable:true, get:function description () {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","description_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"length",{configurable:true, enumerable:true, get:function length () {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","length_get",arguments)},set:undefined});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"item",{configurable:true, enumerable:true, writable:true, value:function item() {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","item",arguments)}});
bodavm.toolsFunc.defineProperty(Plugin.prototype,"namedItem",{configurable:true, enumerable:true, writable:true, value:function namedItem() {return bodavm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","namedItem",arguments)}});
