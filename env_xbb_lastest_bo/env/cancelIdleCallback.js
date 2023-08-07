// cancelIdleCallback对象
cancelIdleCallback = {
  cancelIdleCallback(a) {
    console.log_copy(`cancelIdleCallback 使用-- >`, a);
  }
}.cancelIdleCallback;
bodavm.toolsFunc.safefunction(cancelIdleCallback, "cancelIdleCallback");
bodavm.toolsFunc.defineProperty(cancelIdleCallback, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(cancelIdleCallback, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'cancelIdleCallback'
});