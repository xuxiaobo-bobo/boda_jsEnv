// webkitRequestFileSystem对象
webkitRequestFileSystem = {
  webkitRequestFileSystem(a) {
    console.log_copy(`webkitRequestFileSystem 使用-- >`, a);
  }
}.webkitRequestFileSystem;
//debugger;
bodavm.toolsFunc.safefunction(webkitRequestFileSystem, "webkitRequestFileSystem");
bodavm.toolsFunc.defineProperty(webkitRequestFileSystem, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(webkitRequestFileSystem, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'webkitRequestFileSystem'
});