// alert对象

bodavm.memory.globalobj['alert'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('alert', "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('alert', "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "alert"
});