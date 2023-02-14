// HTMLBRElement对象
HTMLBRElement = function HTMLBRElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLBRElement, "HTMLBRElement");
HTMLBRElement.prototype.__proto__=HTMLElement.prototype;
HTMLBRElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLBRElement.prototype, "clear", {configurable:true, enumerable:true, get:function clear (){return bodavm.toolsFunc.dispatch(this, HTMLBRElement.prototype, "HTMLBRElement", "clear_get", arguments)}, set:function clear (){return bodavm.toolsFunc.dispatch(this, HTMLBRElement.prototype, "HTMLBRElement", "clear_set", arguments)}});
