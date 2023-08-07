// reportError对象
reportError = {
  reportError(a) {
    console.log_copy(`reportError 使用-- >`, a);
  }
}.reportError;
bodavm.toolsFunc.safefunction(reportError, "reportError");
bodavm.toolsFunc.defineProperty(reportError, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(reportError, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'reportError'
});