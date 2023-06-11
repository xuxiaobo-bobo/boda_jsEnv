// PasswordCredential对象
PasswordCredential = function PasswordCredential(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof PasswordCredential) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PasswordCredential': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('PasswordCredential 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(PasswordCredential, "PasswordCredential");
PasswordCredential.prototype.__proto__=Credential.prototype;
PasswordCredential.__proto__=Credential;
bodavm.toolsFunc.defineProperty(PasswordCredential.prototype, "password", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PasswordCredential.prototype, "PasswordCredential", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PasswordCredential.prototype, "name", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PasswordCredential.prototype, "PasswordCredential", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PasswordCredential.prototype, "iconURL", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PasswordCredential.prototype, "PasswordCredential", "bodefault_get", arguments)}, set:undefined},);
