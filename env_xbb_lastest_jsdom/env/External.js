// External对象
bodavm.memory.globalobj['External'] = function External(){if (!(this instanceof External)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['External'], "External");
bodavm.toolsFunc.defineProperty('External', "AddSearchProvider", {configurable:true, enumerable:true, writable:true, value:function AddSearchProvider (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['External'].prototype, "External", "AddSearchProvider", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('External', "IsSearchProviderInstalled", {configurable:true, enumerable:true, writable:true, value:function IsSearchProviderInstalled (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['External'].prototype, "External", "IsSearchProviderInstalled", arguments)}},'prototype');
// external对象
bodavm.memory.globalobj['external'] = {
    _boisinit:bodavm.config.isinit
    }
bodavm.memory.globalobj['external'].__proto__=bodavm.memory.globalobj['External'].prototype;
