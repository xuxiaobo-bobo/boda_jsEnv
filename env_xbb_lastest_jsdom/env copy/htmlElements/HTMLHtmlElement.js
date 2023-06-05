// HTMLHtmlElement对象
bodavm.memory.globalobj['HTMLHtmlElement'] = function HTMLHtmlElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLHtmlElement'], "HTMLHtmlElement");
bodavm.memory.globalobj['HTMLHtmlElement'].prototype.__proto__=bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLHtmlElement'].__proto__=bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLHtmlElement', "version", {configurable:true, enumerable:true, get:function version (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHtmlElement'].prototype, "HTMLHtmlElement", "version_get", arguments)}, set:function version (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHtmlElement'].prototype, "HTMLHtmlElement", "version_set", arguments)}},'prototype');
