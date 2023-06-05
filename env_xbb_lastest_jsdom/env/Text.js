// Text对象

bodavm.memory.globalobj['Text'] = function Text() {
  console.log_copy('Text 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Text();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Text'], "Text");
bodavm.memory.globalobj['Text'].prototype.__proto__ = bodavm.memory.globalobj['CharacterData'].prototype;
bodavm.memory.globalobj['Text'].__proto__ = bodavm.memory.globalobj['CharacterData'];
bodavm.toolsFunc.defineProperty('Text', "wholeText", {
  configurable: true,
  enumerable: true,
  get: function wholeText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Text'].prototype, "Text", "wholeText_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Text', "assignedSlot", {
  configurable: true,
  enumerable: true,
  get: function assignedSlot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Text'].prototype, "Text", "assignedSlot_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Text', "splitText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function splitText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Text'].prototype, "Text", "splitText", arguments);
  }
}, 'prototype');