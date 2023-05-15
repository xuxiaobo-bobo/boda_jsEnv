// OTPCredential对象
bodavm.memory.globalobj['OTPCredential'] = function OTPCredential(){if (!(this instanceof OTPCredential)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['OTPCredential'], "OTPCredential");
bodavm.memory.globalobj['OTPCredential'].prototype.__proto__=bodavm.memory.globalobj['Credential'].prototype;
bodavm.memory.globalobj['OTPCredential'].__proto__=bodavm.memory.globalobj['Credential'];
bodavm.toolsFunc.defineProperty('OTPCredential', "code", {configurable:true, enumerable:true, get:function code (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OTPCredential'].prototype, "OTPCredential", "code_get", arguments)}, set:undefined},'prototype');
