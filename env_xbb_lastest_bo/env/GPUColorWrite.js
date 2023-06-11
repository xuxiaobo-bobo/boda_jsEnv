// GPUColorWrite对象
GPUColorWrite = {};
Object.defineProperty(GPUBufferUsage, Symbol.toStringTag, {
  value: 'GPUColorWrite',
  configurable: true,
  writable: false,
  enumerable: false
});
bodavm.toolsFunc.safefunction(GPUColorWrite, "GPUColorWrite");
bodavm.toolsFunc.defineProperty(GPUColorWrite, "RED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(GPUColorWrite, "GREEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(GPUColorWrite, "BLUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(GPUColorWrite, "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(GPUColorWrite, "ALL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 15
});