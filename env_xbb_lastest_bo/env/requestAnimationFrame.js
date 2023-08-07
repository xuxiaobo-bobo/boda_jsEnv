// requestAnimationFrame对象
requestAnimationFrame = {
  requestAnimationFrame(a) {
    console.log_copy(`requestAnimationFrame 使用-- >`, a);
  }
}.requestAnimationFrame;
bodavm.toolsFunc.safefunction(requestAnimationFrame, "requestAnimationFrame");
bodavm.toolsFunc.defineProperty(requestAnimationFrame, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(requestAnimationFrame, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'requestAnimationFrame'
});