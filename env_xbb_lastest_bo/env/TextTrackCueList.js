// TextTrackCueList对象

TextTrackCueList = function TextTrackCueList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TextTrackCueList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextTrackCueList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextTrackCueList, "TextTrackCueList");
bodavm.toolsFunc.defineProperty(TextTrackCueList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCueList.prototype, "TextTrackCueList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextTrackCueList.prototype, "getCueById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCueById() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCueList.prototype, "TextTrackCueList", "getCueById", arguments);
  }
});