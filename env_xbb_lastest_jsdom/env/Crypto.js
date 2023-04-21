// Crypto对象
bodavm.memory.globalobj['Crypto'] = function Crypto(){this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Crypto'], "Crypto");
bodavm.toolsFunc.defineProperty('Crypto', "getRandomValues", {configurable:true, enumerable:true, writable:true, value:function getRandomValues (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Crypto'].prototype, "Crypto", "getRandomValues", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Crypto', "subtle", {configurable:true, enumerable:true, get:function subtle (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Crypto'].prototype, "Crypto", "subtle_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Crypto', "randomUUID", {configurable:true, enumerable:true, writable:true, value:function randomUUID (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Crypto'].prototype, "Crypto", "randomUUID", arguments)}},'prototype');


bodavm.memory.globalobj[ 'crypto']  ={ _boisinit:bodavm.config.isinit}
bodavm.memory.globalobj[ 'crypto'].__proto__ = bodavm.memory.globalobj['Crypto'] .prototype
