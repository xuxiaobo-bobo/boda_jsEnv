// GeolocationPosition对象
bodavm.memory.globalobj['GeolocationPosition'] = function GeolocationPosition(){if (!(this instanceof GeolocationPosition)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['GeolocationPosition'], "GeolocationPosition");
bodavm.toolsFunc.defineProperty('GeolocationPosition', "coords", {configurable:true, enumerable:true, get:function coords (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationPosition'].prototype, "GeolocationPosition", "coords_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('GeolocationPosition', "timestamp", {configurable:true, enumerable:true, get:function timestamp (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationPosition'].prototype, "GeolocationPosition", "timestamp_get", arguments)}, set:undefined},'prototype');
