// GPUShaderStage对象
GPUShaderStage = {};
Object.defineProperty(GPUMapMode, Symbol.toStringTag, {
  value: 'GPUShaderStage',
  configurable: true,
  writable: false,
  enumerable: false
});
bodavm.toolsFunc.defineProperty(GPUShaderStage, "VERTEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(GPUShaderStage, "FRAGMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(GPUShaderStage, "COMPUTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});