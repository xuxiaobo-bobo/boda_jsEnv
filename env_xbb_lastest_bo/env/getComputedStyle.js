// getComputedStyle对象
getComputedStyle = () => {
  console.log(`使用 getComputedStyle arg->`, arguments);
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