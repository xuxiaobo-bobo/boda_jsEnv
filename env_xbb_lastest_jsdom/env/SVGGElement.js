// SVGGElement对象
bodavm.memory.globalobj['SVGGElement'] = function SVGGElement(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGGElement'], "SVGGElement");
bodavm.memory.globalobj['SVGGElement'].prototype.__proto__=bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGGElement'].__proto__=bodavm.memory.globalobj['SVGGraphicsElement'];
