// getSelection对象
getSelection = {
  getSelection(a) {
    console.log_copy(`getSelection 使用-- >`, a);
  }
}.getSelection;
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