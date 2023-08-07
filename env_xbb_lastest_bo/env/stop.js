// stop对象
stop = {
  stop(a) {
    console.log_copy(`stop 使用-- >`, a);
  }
}.stop;
bodavm.toolsFunc.safefunction(stop, "stop");
bodavm.toolsFunc.defineProperty(stop, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(stop, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'stop'
});