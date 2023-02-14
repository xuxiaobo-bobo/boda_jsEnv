// VisualViewport对象
VisualViewport = function VisualViewport(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(VisualViewport, "VisualViewport");
VisualViewport.prototype.__proto__=EventTarget.prototype;
VisualViewport.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "offsetLeft", {configurable:true, enumerable:true, get:function offsetLeft (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "offsetLeft_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "offsetTop", {configurable:true, enumerable:true, get:function offsetTop (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "offsetTop_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "pageLeft", {configurable:true, enumerable:true, get:function pageLeft (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "pageLeft_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "pageTop", {configurable:true, enumerable:true, get:function pageTop (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "pageTop_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "width_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "height_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "scale", {configurable:true, enumerable:true, get:function scale (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "scale_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "onresize", {configurable:true, enumerable:true, get:function onresize (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "onresize_get", arguments)}, set:function onresize (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "onresize_set", arguments)}});
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "onscroll", {configurable:true, enumerable:true, get:function onscroll (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "onscroll_get", arguments)}, set:function onscroll (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "onscroll_set", arguments)}});

var visualViewport={}
visualViewport.__proto__ = VisualViewport.prototype