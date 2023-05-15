// Ink对象
bodavm.memory.globalobj['Ink'] = function Ink(){if (!(this instanceof Ink)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Ink'], "Ink");
bodavm.toolsFunc.defineProperty('Ink', "requestPresenter", {configurable:true, enumerable:true, writable:true, value:function requestPresenter (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Ink'].prototype, "Ink", "requestPresenter", arguments)}},'prototype');
