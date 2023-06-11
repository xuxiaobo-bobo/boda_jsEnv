// ValidityState对象
ValidityState = function ValidityState(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof ValidityState) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('ValidityState 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(ValidityState, "ValidityState");
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "valueMissing", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "typeMismatch", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "patternMismatch", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "tooLong", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "tooShort", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "rangeUnderflow", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "rangeOverflow", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "stepMismatch", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "badInput", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "customError", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(ValidityState.prototype, "valid", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ValidityState.prototype, "ValidityState", "bodefault_get", arguments)}, set:undefined},);
