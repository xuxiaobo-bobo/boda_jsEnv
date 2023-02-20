// Comment对象
bodavm.memory.globalobj['Comment'] = function Comment(){
    if (!(this instanceof Comment)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Comment': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    }

}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Comment'], "Comment");
bodavm.memory.globalobj['Comment'].prototype.__proto__=bodavm.memory.globalobj['CharacterData'].prototype;
bodavm.memory.globalobj['Comment'].__proto__=bodavm.memory.globalobj['CharacterData'];
