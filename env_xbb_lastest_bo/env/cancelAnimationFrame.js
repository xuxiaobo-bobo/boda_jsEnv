// cancelAnimationFrame对象
cancelAnimationFrame = (a) => {
  console.log_copy(`使用cancelAnimationFrame arg->`, a);
};
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