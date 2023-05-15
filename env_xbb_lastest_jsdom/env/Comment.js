// Comment对象
bodavm.memory.globalobj['Comment'] = function Comment(){this._boarg= new bodaobj.window.Comment();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Comment'], "Comment");
bodavm.memory.globalobj['Comment'].prototype.__proto__=bodavm.memory.globalobj['CharacterData'].prototype;
bodavm.memory.globalobj['Comment'].__proto__=bodavm.memory.globalobj['CharacterData'];
