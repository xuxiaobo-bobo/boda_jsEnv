// structuredClone对象
structuredClone = {
  structuredClone(a) {
    console.log_copy(`structuredClone 使用-- >`, a);
  }
}.structuredClone;
bodavm.toolsFunc.safefunction(structuredClone, "structuredClone");
bodavm.toolsFunc.defineProperty(structuredClone, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(structuredClone, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'structuredClone'
});