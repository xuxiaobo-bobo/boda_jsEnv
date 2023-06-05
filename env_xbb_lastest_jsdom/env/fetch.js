// fetch对象

bodavm.memory.globalobj['fetch'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('fetch', "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('fetch', "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "fetch"
});