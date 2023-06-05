// Comment对象

bodavm.memory.globalobj['Comment'] = function Comment() {
  console.log_copy('Comment 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Comment();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Comment'], "Comment");
bodavm.memory.globalobj['Comment'].prototype.__proto__ = bodavm.memory.globalobj['CharacterData'].prototype;
bodavm.memory.globalobj['Comment'].__proto__ = bodavm.memory.globalobj['CharacterData'];