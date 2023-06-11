// GPUMapMode对象
GPUMapMode = {};
Object.defineProperty(GPUMapMode, Symbol.toStringTag, {
  value: 'GPUMapMode',
  configurable: true,
  writable: false,
  enumerable: false
});
//bodavm.toolsFunc.safefunction(GPUMapMode, "GPUMapMode");

bodavm.toolsFunc.defineProperty(GPUMapMode, "READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(GPUMapMode, "WRITE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});