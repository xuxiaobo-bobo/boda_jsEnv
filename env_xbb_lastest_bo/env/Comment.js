// Comment对象

Comment = function Comment() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg !== 'bobo') {
    console.log_copy('Comment 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Comment, "Comment");
Comment.prototype.__proto__ = CharacterData.prototype;
Comment.__proto__ = CharacterData;