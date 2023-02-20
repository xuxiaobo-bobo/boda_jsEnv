// Option对象
bodavm.memory.globalobj['Option'] = function Option(){
    if (!(this instanceof Option)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Option': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    };   

}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Option'], "Option");
bodavm.memory.globalobj['Option'].prototype.__proto__=bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.toolsFunc.defineProperty('Option', "disabled", {configurable:true, enumerable:true, get:function disabled (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "disabled_get", arguments)}, set:function disabled (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "disabled_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Option', "form", {configurable:true, enumerable:true, get:function form (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "form_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Option', "label", {configurable:true, enumerable:true, get:function label (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "label_get", arguments)}, set:function label (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "label_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Option', "defaultSelected", {configurable:true, enumerable:true, get:function defaultSelected (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "defaultSelected_get", arguments)}, set:function defaultSelected (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "defaultSelected_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Option', "selected", {configurable:true, enumerable:true, get:function selected (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "selected_get", arguments)}, set:function selected (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "selected_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Option', "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "value_get", arguments)}, set:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "value_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Option', "text", {configurable:true, enumerable:true, get:function text (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "text_get", arguments)}, set:function text (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "text_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('Option', "index", {configurable:true, enumerable:true, get:function index (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Option'].prototype, "Option", "index_get", arguments)}, set:undefined},'prototype');
