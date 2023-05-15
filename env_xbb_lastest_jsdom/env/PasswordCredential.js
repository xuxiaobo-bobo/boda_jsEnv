// PasswordCredential对象
bodavm.memory.globalobj['PasswordCredential'] = function PasswordCredential(){if (!(this instanceof PasswordCredential)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PasswordCredential': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PasswordCredential'], "PasswordCredential");
bodavm.memory.globalobj['PasswordCredential'].prototype.__proto__=bodavm.memory.globalobj['Credential'].prototype;
bodavm.memory.globalobj['PasswordCredential'].__proto__=bodavm.memory.globalobj['Credential'];
bodavm.toolsFunc.defineProperty('PasswordCredential', "password", {configurable:true, enumerable:true, get:function password (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PasswordCredential'].prototype, "PasswordCredential", "password_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('PasswordCredential', "name", {configurable:true, enumerable:true, get:function name (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PasswordCredential'].prototype, "PasswordCredential", "name_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('PasswordCredential', "iconURL", {configurable:true, enumerable:true, get:function iconURL (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PasswordCredential'].prototype, "PasswordCredential", "iconURL_get", arguments)}, set:undefined},'prototype');
