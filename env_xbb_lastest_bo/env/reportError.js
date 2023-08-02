// reportError对象
reportError = (a) => {
  console.log_copy(`使用 reportError arg->`, a);
};
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