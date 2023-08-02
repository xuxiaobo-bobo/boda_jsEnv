// getSelection对象
getSelection = (a) => {
  console.log(`使用 getSelection arg->`, a);
};
bodavm.toolsFunc.safefunction(getSelection, "getSelection");
bodavm.toolsFunc.defineProperty(getSelection, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(getSelection, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'getSelection'
});