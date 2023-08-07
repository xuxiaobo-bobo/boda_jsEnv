// queueMicrotask对象
queueMicrotask = {
  queueMicrotask(a) {
    console.log_copy(`queueMicrotask 使用-- >`, a);
  }
}.queueMicrotask;
bodavm.toolsFunc.safefunction(queueMicrotask, "queueMicrotask");
bodavm.toolsFunc.defineProperty(queueMicrotask, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(queueMicrotask, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'queueMicrotask'
});