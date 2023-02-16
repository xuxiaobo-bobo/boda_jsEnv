// XPathExpression对象
XPathExpression = function XPathExpression(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(XPathExpression, "XPathExpression");
bodavm.toolsFunc.defineProperty(XPathExpression.prototype, "evaluate", {configurable:true, enumerable:true, writable:true, value:function evaluate (){return bodavm.toolsFunc.dispatch(this, XPathExpression.prototype, "XPathExpression", "evaluate", arguments)}});
