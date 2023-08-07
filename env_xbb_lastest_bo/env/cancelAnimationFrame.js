// cancelAnimationFrame对象
cancelAnimationFrame = {
  cancelAnimationFrame(a) {
    console.log_copy(`cancelAnimationFrame 使用-- >`, a);
  }
}.cancelAnimationFrame;
bodavm.toolsFunc.safefunction(cancelAnimationFrame, "cancelAnimationFrame");
bodavm.toolsFunc.defineProperty(cancelAnimationFrame, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(cancelAnimationFrame, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'cancelAnimationFrame'
});