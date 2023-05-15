// CookieChangeEvent对象
bodavm.memory.globalobj['CookieChangeEvent'] = function CookieChangeEvent(){if (!(this instanceof CookieChangeEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CookieChangeEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CookieChangeEvent'], "CookieChangeEvent");
bodavm.memory.globalobj['CookieChangeEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['CookieChangeEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('CookieChangeEvent', "changed", {configurable:true, enumerable:true, get:function changed (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieChangeEvent'].prototype, "CookieChangeEvent", "changed_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('CookieChangeEvent', "deleted", {configurable:true, enumerable:true, get:function deleted (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieChangeEvent'].prototype, "CookieChangeEvent", "deleted_get", arguments)}, set:undefined},'prototype');
