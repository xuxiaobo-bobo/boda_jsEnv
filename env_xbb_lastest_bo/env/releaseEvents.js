// releaseEvents对象
releaseEvents = {
  releaseEvents(a) {
    console.log_copy(`releaseEvents 使用-- >`, a);
  }
}.releaseEvents;
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