// HTMLDivElement对象
HTMLDivElement = function HTMLDivElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLDivElement, "HTMLDivElement");
HTMLDivElement.prototype.__proto__=HTMLElement.prototype;
HTMLDivElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLDivElement.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElement", "align_set", arguments)}});
