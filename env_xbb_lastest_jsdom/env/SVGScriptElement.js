// SVGScriptElement对象
bodavm.memory.globalobj['SVGScriptElement'] = function SVGScriptElement(){if (!(this instanceof SVGScriptElement)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGScriptElement'], "SVGScriptElement");
bodavm.memory.globalobj['SVGScriptElement'].prototype.__proto__=bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGScriptElement'].__proto__=bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGScriptElement', "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGScriptElement'].prototype, "SVGScriptElement", "type_get", arguments)}, set:function type (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGScriptElement'].prototype, "SVGScriptElement", "type_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('SVGScriptElement', "href", {configurable:true, enumerable:true, get:function href (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGScriptElement'].prototype, "SVGScriptElement", "href_get", arguments)}, set:undefined},'prototype');
