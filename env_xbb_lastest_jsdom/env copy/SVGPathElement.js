// SVGPathElement对象
bodavm.memory.globalobj['SVGPathElement'] = function SVGPathElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGPathElement'], "SVGPathElement");
bodavm.memory.globalobj['SVGPathElement'].prototype.__proto__=bodavm.memory.globalobj['SVGGeometryElement'].prototype;
bodavm.memory.globalobj['SVGPathElement'].__proto__=bodavm.memory.globalobj['SVGGeometryElement'];
