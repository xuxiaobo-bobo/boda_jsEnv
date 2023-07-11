// Text对象

Text = function Text() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Text 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Text, "Text");
Text.prototype.__proto__ = CharacterData.prototype;
Text.__proto__ = CharacterData;
bodavm.toolsFunc.defineProperty(Text.prototype, "wholeText", {
  configurable: true,
  enumerable: true,
  get: function wholeText() {
    return bodavm.toolsFunc.dispatch(this, Text.prototype, "Text", "wholeText_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Text.prototype, "assignedSlot", {
  configurable: true,
  enumerable: true,
  get: function assignedSlot() {
    return bodavm.toolsFunc.dispatch(this, Text.prototype, "Text", "assignedSlot_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Text.prototype, "splitText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function splitText() {
    return bodavm.toolsFunc.dispatch(this, Text.prototype, "Text", "splitText", arguments);
  }
});