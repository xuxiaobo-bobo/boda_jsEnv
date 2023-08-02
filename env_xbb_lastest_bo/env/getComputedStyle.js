// getComputedStyle对象
getComputedStyle = (a) => {
  console.log(`使用 getComputedStyle arg->`, a);
};
bodavm.toolsFunc.safefunction(getComputedStyle, "getComputedStyle");
bodavm.toolsFunc.defineProperty(getComputedStyle, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(getComputedStyle, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'getComputedStyle'
});