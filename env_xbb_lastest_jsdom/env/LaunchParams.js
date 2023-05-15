// LaunchParams对象
bodavm.memory.globalobj['LaunchParams'] = function LaunchParams(){if (!(this instanceof LaunchParams)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['LaunchParams'], "LaunchParams");
bodavm.toolsFunc.defineProperty('LaunchParams', "targetURL", {configurable:true, enumerable:true, get:function targetURL (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LaunchParams'].prototype, "LaunchParams", "targetURL_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('LaunchParams', "files", {configurable:true, enumerable:true, get:function files (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LaunchParams'].prototype, "LaunchParams", "files_get", arguments)}, set:undefined},'prototype');
