// prompt对象

bodavm.memory.globalobj['prompt'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('prompt', "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('prompt', "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "prompt"
});