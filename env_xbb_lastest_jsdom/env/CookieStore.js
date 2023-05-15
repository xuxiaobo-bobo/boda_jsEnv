
// CookieStore对象

bodavm.memory.globalobj['CookieStore'] = function CookieStore(){if (!(this instanceof CookieStore)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}

bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CookieStore'], "CookieStore");

bodavm.memory.globalobj['CookieStore'].prototype.__proto__=bodavm.memory.globalobj['EventTarget'].prototype;

bodavm.memory.globalobj['CookieStore'].__proto__=bodavm.memory.globalobj['EventTarget'];

bodavm.toolsFunc.defineProperty('CookieStore', "delete", {configurable:true, enumerable:true, writable:true, value:function  (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieStore'].prototype, "CookieStore", "delete", arguments)}},'prototype');

bodavm.toolsFunc.defineProperty('CookieStore', "get", {configurable:true, enumerable:true, writable:true, value:function get (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieStore'].prototype, "CookieStore", "get", arguments)}},'prototype');

bodavm.toolsFunc.defineProperty('CookieStore', "getAll", {configurable:true, enumerable:true, writable:true, value:function getAll (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieStore'].prototype, "CookieStore", "getAll", arguments)}},'prototype');

bodavm.toolsFunc.defineProperty('CookieStore', "set", {configurable:true, enumerable:true, writable:true, value:function set (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieStore'].prototype, "CookieStore", "set", arguments)}},'prototype');

bodavm.toolsFunc.defineProperty('CookieStore', "onchange", {configurable:true, enumerable:true, get:function onchange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieStore'].prototype, "CookieStore", "onchange_get", arguments)}, set:function onchange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieStore'].prototype, "CookieStore", "onchange_set", arguments)}},'prototype');



// cookieStore对象

bodavm.memory.globalobj['cookieStore'] = {
    _boisinit:bodavm.config.isinit
    }

bodavm.memory.globalobj['cookieStore'].__proto__=bodavm.memory.globalobj['CookieStore'].prototype;
