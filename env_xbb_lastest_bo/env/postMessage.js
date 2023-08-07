// postMessage对象
postMessage = {
  postMessage(a) {
    console.log_copy(`postMessage 使用-- >`, a);
  }
}.postMessage;
bodavm.toolsFunc.safefunction(postMessage, "postMessage");
bodavm.toolsFunc.defineProperty(postMessage, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(postMessage, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'postMessage'
});