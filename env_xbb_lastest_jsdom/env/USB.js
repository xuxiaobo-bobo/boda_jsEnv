// USB对象
bodavm.memory.globalobj['USB'] = function USB(){if (!(this instanceof USB)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USB'], "USB");
bodavm.memory.globalobj['USB'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['USB'].__proto__=bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('USB', "onconnect", {configurable:true, enumerable:true, get:function onconnect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USB'].prototype, "USB", "onconnect_get", arguments)}, set:function onconnect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USB'].prototype, "USB", "onconnect_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('USB', "ondisconnect", {configurable:true, enumerable:true, get:function ondisconnect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USB'].prototype, "USB", "ondisconnect_get", arguments)}, set:function ondisconnect (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USB'].prototype, "USB", "ondisconnect_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('USB', "getDevices", {configurable:true, enumerable:true, writable:true, value:function getDevices (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USB'].prototype, "USB", "getDevices", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('USB', "requestDevice", {configurable:true, enumerable:true, writable:true, value:function requestDevice (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USB'].prototype, "USB", "requestDevice", arguments)}},'prototype');
