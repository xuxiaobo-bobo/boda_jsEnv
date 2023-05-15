// SVGAElement对象
bodavm.memory.globalobj['SVGAElement'] = function SVGAElement(){if (!(this instanceof SVGAElement)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAElement'], "SVGAElement");
bodavm.memory.globalobj['SVGAElement'].prototype.__proto__=bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGAElement'].__proto__=bodavm.memory.globalobj['SVGGraphicsElement'];
bodavm.toolsFunc.defineProperty('SVGAElement', "target", {configurable:true, enumerable:true, get:function target (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAElement'].prototype, "SVGAElement", "target_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('SVGAElement', "href", {configurable:true, enumerable:true, get:function href (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAElement'].prototype, "SVGAElement", "href_get", arguments)}, set:undefined},'prototype');
