// GPUTextureUsage对象

GPUTextureUsage = {};
Object.defineProperty(GPUTextureUsage, Symbol.toStringTag, {
  value: 'GPUTextureUsage',
  configurable: true,
  writable: false,
  enumerable: false
});
bodavm.toolsFunc.safefunction(GPUTextureUsage, "GPUTextureUsage");
bodavm.toolsFunc.defineProperty(GPUTextureUsage, "COPY_SRC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(GPUTextureUsage, "COPY_DST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(GPUTextureUsage, "TEXTURE_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(GPUTextureUsage, "STORAGE_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(GPUTextureUsage, "RENDER_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});