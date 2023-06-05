// focus对象

bodavm.memory.globalobj['focus'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('focus', "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('focus', "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "focus"
});