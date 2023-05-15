// TransformStream对象
bodavm.memory.globalobj['TransformStream'] = function TransformStream(){this._boarg= new bodaobj.window.TransformStream();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TransformStream'], "TransformStream");
bodavm.toolsFunc.defineProperty('TransformStream', "readable", {configurable:true, enumerable:true, get:function readable (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TransformStream'].prototype, "TransformStream", "readable_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('TransformStream', "writable", {configurable:true, enumerable:true, get:function writable (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TransformStream'].prototype, "TransformStream", "writable_get", arguments)}, set:undefined},'prototype');
