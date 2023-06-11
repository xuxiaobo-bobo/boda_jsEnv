// GPUBufferUsage对象
GPUBufferUsage = {};
Object.defineProperty(GPUBufferUsage, Symbol.toStringTag, {
  value: 'GPUBufferUsage',
  configurable: true,
  writable: false,
  enumerable: false
});
bodavm.toolsFunc.safefunction(GPUBufferUsage, "GPUBufferUsage");
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "MAP_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "MAP_WRITE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "COPY_SRC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "COPY_DST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "VERTEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32
});
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "UNIFORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 64
});
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "STORAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 128
});
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "INDIRECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodavm.toolsFunc.defineProperty(GPUBufferUsage, "QUERY_RESOLVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});