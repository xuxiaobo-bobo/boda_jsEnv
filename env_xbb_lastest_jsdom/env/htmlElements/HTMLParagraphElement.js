// HTMLParagraphElement对象
HTMLParagraphElement = function HTMLParagraphElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLParagraphElement, "HTMLParagraphElement");
HTMLParagraphElement.prototype.__proto__=HTMLElement.prototype;
HTMLParagraphElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLParagraphElement.prototype, "align", {configurable:true, enumerable:true, get:function align (){return bodavm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElement", "align_get", arguments)}, set:function align (){return bodavm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElement", "align_set", arguments)}});
