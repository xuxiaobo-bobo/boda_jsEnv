// getScreenDetails对象
getScreenDetails = () => {
  console.log(`使用 getScreenDetails arg->`, arguments);
};
bodavm.toolsFunc.safefunction(getScreenDetails, "getScreenDetails");
bodavm.toolsFunc.defineProperty(getScreenDetails, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(getScreenDetails, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'getScreenDetails'
});