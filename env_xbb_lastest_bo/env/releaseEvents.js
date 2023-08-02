// releaseEvents对象
releaseEvents = (a) => {
  console.log_copy(`使用 releaseEvents arg->`, a);
};
bodavm.toolsFunc.safefunction(releaseEvents, "releaseEvents");
bodavm.toolsFunc.defineProperty(releaseEvents, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(releaseEvents, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'releaseEvents'
});