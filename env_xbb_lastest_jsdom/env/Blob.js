// Blob对象
bodavm.memory.globalobj['Blob'] = function Blob(){this._boarg= new bodaobj.window.Blob();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Blob'], "Blob");
bodavm.toolsFunc.defineProperty('Blob', "size", {configurable:true, enumerable:true, get:function size (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Blob'].prototype, "Blob", "size_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Blob', "type", {configurable:true, enumerable:true, get:function type (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Blob'].prototype, "Blob", "type_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Blob', "arrayBuffer", {configurable:true, enumerable:true, writable:true, value:function arrayBuffer (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Blob'].prototype, "Blob", "arrayBuffer", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Blob', "slice", {configurable:true, enumerable:true, writable:true, value:function slice (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Blob'].prototype, "Blob", "slice", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Blob', "stream", {configurable:true, enumerable:true, writable:true, value:function stream (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Blob'].prototype, "Blob", "stream", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Blob', "text", {configurable:true, enumerable:true, writable:true, value:function text (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Blob'].prototype, "Blob", "text", arguments)}},'prototype');
