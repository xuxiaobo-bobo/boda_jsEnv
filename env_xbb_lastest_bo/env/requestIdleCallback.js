// requestIdleCallback对象
requestIdleCallback = {
  requestIdleCallback(a) {
    console.log_copy(`requestIdleCallback 使用-- >`, a);
  }
}.requestIdleCallback;
bodavm.toolsFunc.safefunction(requestIdleCallback, "requestIdleCallback");
bodavm.toolsFunc.defineProperty(requestIdleCallback, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(requestIdleCallback, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'requestIdleCallback'
});