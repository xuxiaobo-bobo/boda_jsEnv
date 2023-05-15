// SVGAnimatedRect对象
bodavm.memory.globalobj['SVGAnimatedRect'] = function SVGAnimatedRect(){if (!(this instanceof SVGAnimatedRect)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedRect'], "SVGAnimatedRect");
bodavm.toolsFunc.defineProperty('SVGAnimatedRect', "baseVal", {configurable:true, enumerable:true, get:function baseVal (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedRect'].prototype, "SVGAnimatedRect", "baseVal_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedRect', "animVal", {configurable:true, enumerable:true, get:function animVal (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedRect'].prototype, "SVGAnimatedRect", "animVal_get", arguments)}, set:undefined},'prototype');
