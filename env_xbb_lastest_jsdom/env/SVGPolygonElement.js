// SVGPolygonElement对象
bodavm.memory.globalobj['SVGPolygonElement'] = function SVGPolygonElement(){if (!(this instanceof SVGPolygonElement)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGPolygonElement'], "SVGPolygonElement");
bodavm.memory.globalobj['SVGPolygonElement'].prototype.__proto__=bodavm.memory.globalobj['SVGGeometryElement'].prototype;
bodavm.memory.globalobj['SVGPolygonElement'].__proto__=bodavm.memory.globalobj['SVGGeometryElement'];
bodavm.toolsFunc.defineProperty('SVGPolygonElement', "points", {configurable:true, enumerable:true, get:function points (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPolygonElement'].prototype, "SVGPolygonElement", "points_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('SVGPolygonElement', "animatedPoints", {configurable:true, enumerable:true, get:function animatedPoints (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPolygonElement'].prototype, "SVGPolygonElement", "animatedPoints_get", arguments)}, set:undefined},'prototype');
