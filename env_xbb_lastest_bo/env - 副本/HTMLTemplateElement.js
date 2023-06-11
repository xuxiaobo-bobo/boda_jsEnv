// HTMLTemplateElement对象
HTMLTemplateElement = function HTMLTemplateElement(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof HTMLTemplateElement) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('HTMLTemplateElement 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(HTMLTemplateElement, "HTMLTemplateElement");
HTMLTemplateElement.prototype.__proto__=HTMLElement.prototype;
HTMLTemplateElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTemplateElement.prototype, "content", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLTemplateElement.prototype, "HTMLTemplateElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(HTMLTemplateElement.prototype, "shadowRoot", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLTemplateElement.prototype, "HTMLTemplateElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(HTMLTemplateElement.prototype, "shadowRootMode", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLTemplateElement.prototype, "HTMLTemplateElement", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLTemplateElement.prototype, "HTMLTemplateElement", "bodefault_set", arguments)}},);
