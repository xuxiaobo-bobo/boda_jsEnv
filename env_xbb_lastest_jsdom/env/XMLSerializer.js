// XMLSerializer对象
bodavm.memory.globalobj['XMLSerializer'] = function XMLSerializer(){this._boarg= new bodaobj.window.XMLSerializer();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XMLSerializer'], "XMLSerializer");
bodavm.toolsFunc.defineProperty('XMLSerializer', "serializeToString", {configurable:true, enumerable:true, writable:true, value:function serializeToString (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLSerializer'].prototype, "XMLSerializer", "serializeToString", arguments)}},'prototype');
