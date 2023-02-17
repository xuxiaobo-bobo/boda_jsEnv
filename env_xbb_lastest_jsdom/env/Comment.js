// Comment对象
bodavm.memory.globalobj['Comment'] = function Comment(){}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Comment'], "Comment");
bodavm.memory.globalobj['Comment'].prototype.__proto__=bodavm.memory.globalobj['CharacterData'].prototype;
bodavm.memory.globalobj['Comment'].__proto__=bodavm.memory.globalobj['CharacterData'];
