// Comment对象
Comment = function Comment(){}
bodavm.toolsFunc.safeProto(Comment, "Comment");
Comment.prototype.__proto__=CharacterData.prototype;
Comment.__proto__=CharacterData;
