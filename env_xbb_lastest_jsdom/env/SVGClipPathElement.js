// SVGClipPathElement对象
bodavm.memory.globalobj['SVGClipPathElement'] = function SVGClipPathElement(){if (!(this instanceof SVGClipPathElement)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGClipPathElement'], "SVGClipPathElement");
bodavm.memory.globalobj['SVGClipPathElement'].prototype.__proto__=bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGClipPathElement'].__proto__=bodavm.memory.globalobj['SVGGraphicsElement'];
bodavm.toolsFunc.defineProperty('SVGClipPathElement', "clipPathUnits", {configurable:true, enumerable:true, get:function clipPathUnits (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGClipPathElement'].prototype, "SVGClipPathElement", "clipPathUnits_get", arguments)}, set:undefined},'prototype');
