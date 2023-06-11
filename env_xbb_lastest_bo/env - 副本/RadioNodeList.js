// RadioNodeList对象
RadioNodeList = function RadioNodeList(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof RadioNodeList) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('RadioNodeList 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(RadioNodeList, "RadioNodeList");
RadioNodeList.prototype.__proto__=NodeList.prototype;
RadioNodeList.__proto__=NodeList;
bodavm.toolsFunc.defineProperty(RadioNodeList.prototype, "value", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, RadioNodeList.prototype, "RadioNodeList", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, RadioNodeList.prototype, "RadioNodeList", "bodefault_set", arguments)}},);
