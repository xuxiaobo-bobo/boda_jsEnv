// HTMLHtmlElement对象
HTMLHtmlElement = function HTMLHtmlElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLHtmlElement, "HTMLHtmlElement");
HTMLHtmlElement.prototype.__proto__=HTMLElement.prototype;
HTMLHtmlElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLHtmlElement.prototype, "version", {configurable:true, enumerable:true, get:function version (){return bodavm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElement", "version_get", arguments)}, set:function version (){return bodavm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElement", "version_set", arguments)}});
