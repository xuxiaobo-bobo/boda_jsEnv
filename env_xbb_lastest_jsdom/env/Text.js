// Text对象
bodavm.memory.globalobj['Text'] = function Text(){
    if (!(this instanceof Text)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Text': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    }; 
}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Text'], "Text");
bodavm.memory.globalobj['Text'].prototype.__proto__=bodavm.memory.globalobj['CharacterData'].prototype;
bodavm.memory.globalobj['Text'].__proto__=bodavm.memory.globalobj['CharacterData'];
bodavm.toolsFunc.defineProperty('Text', "wholeText", {configurable:true, enumerable:true, get:function wholeText (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Text'].prototype, "Text", "wholeText_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Text', "assignedSlot", {configurable:true, enumerable:true, get:function assignedSlot (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Text'].prototype, "Text", "assignedSlot_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('Text', "splitText", {configurable:true, enumerable:true, writable:true, value:function splitText (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Text'].prototype, "Text", "splitText", arguments)}},'prototype');
