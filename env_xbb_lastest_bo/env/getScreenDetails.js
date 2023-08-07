// getScreenDetails对象
getScreenDetails = {
  getScreenDetails(a) {
    console.log_copy(`getScreenDetails 使用-- >`, a);
  }
}.getScreenDetails;
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