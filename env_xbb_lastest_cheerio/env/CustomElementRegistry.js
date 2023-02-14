//CustomElementRegistry对象
CustomElementRegistry=function CustomElementRegistry(){return bodavm.toolsFunc.throwError("TypeError","Illegal constructor")}
bodavm.toolsFunc.safeProto(CustomElementRegistry,"CustomElementRegistry");
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype,"define",{configurable:true, enumerable:true, writable:true, value:function define() {return bodavm.toolsFunc.dispatch(this,CustomElementRegistry.prototype,"CustomElementRegistry","define",arguments)}});
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype,"get",{configurable:true, enumerable:true, writable:true, value:function get() {return bodavm.toolsFunc.dispatch(this,CustomElementRegistry.prototype,"CustomElementRegistry","get",arguments)}});
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype,"upgrade",{configurable:true, enumerable:true, writable:true, value:function upgrade() {return bodavm.toolsFunc.dispatch(this,CustomElementRegistry.prototype,"CustomElementRegistry","upgrade",arguments)}});
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype,"whenDefined",{configurable:true, enumerable:true, writable:true, value:function whenDefined() {return bodavm.toolsFunc.dispatch(this,CustomElementRegistry.prototype,"CustomElementRegistry","whenDefined",arguments)}});
// customElements对象
var customElements = {}
customElements.__proto__=CustomElementRegistry.prototype;
