// StyleSheet对象
StyleSheet = function StyleSheet(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof StyleSheet) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('StyleSheet 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(StyleSheet, "StyleSheet");
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "type", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "href", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "ownerNode", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "parentStyleSheet", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "title", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "media", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(StyleSheet.prototype, "disabled", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheet", "bodefault_set", arguments)}},);
