// getScreenDetails对象
getScreenDetails = (a )=> {
  console.log(`使用 getScreenDetails arg->`, a);
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