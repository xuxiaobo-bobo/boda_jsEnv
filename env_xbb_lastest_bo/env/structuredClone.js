// structuredClone对象
structuredClone = () => {
  console.log_copy(`使用 structuredClone arg->`, arguments);
};
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