// XRRay对象
bodavm.memory.globalobj['XRRay'] = function XRRay(){this._boarg= new bodaobj.window.XRRay();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRRay'], "XRRay");
bodavm.toolsFunc.defineProperty('XRRay', "origin", {configurable:true, enumerable:true, get:function origin (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRay'].prototype, "XRRay", "origin_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('XRRay', "direction", {configurable:true, enumerable:true, get:function direction (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRay'].prototype, "XRRay", "direction_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('XRRay', "matrix", {configurable:true, enumerable:true, get:function matrix (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRay'].prototype, "XRRay", "matrix_get", arguments)}, set:undefined},'prototype');
