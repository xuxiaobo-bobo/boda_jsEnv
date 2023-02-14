// HTMLTitleElement对象
HTMLTitleElement = function HTMLTitleElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLTitleElement, "HTMLTitleElement");
HTMLTitleElement.prototype.__proto__=HTMLElement.prototype;
HTMLTitleElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTitleElement.prototype, "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, HTMLTitleElement.prototype, "HTMLTitleElement", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, HTMLTitleElement.prototype, "HTMLTitleElement", "text_set", arguments)}});
