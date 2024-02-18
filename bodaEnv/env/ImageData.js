// ImageData对象

bodaEnv.memory.globlProtoObj["ImageData"] = function ImageData() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ImageData 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ImageData"], "ImageData");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageData"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageData"].prototype, "ImageData", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageData"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageData"].prototype, "ImageData", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageData"].prototype, "colorSpace", {
  configurable: true,
  enumerable: true,
  get: {
    colorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageData"].prototype, "ImageData", "colorSpace_get", arguments);
    }
  }.colorSpace,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageData"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageData"].prototype, "ImageData", "data_get", arguments);
    }
  }.data,
  set: undefined
});