// OffscreenCanvas对象

bodaEnv.memory.globlProtoObj["OffscreenCanvas"] = function OffscreenCanvas() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('OffscreenCanvas 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["OffscreenCanvas"], "OffscreenCanvas");
bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["OffscreenCanvas"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "height_set", arguments);
    }
  }.height
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "oncontextlost_get", arguments);
    }
  }.oncontextlost,
  set: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "oncontextlost_set", arguments);
    }
  }.oncontextlost
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "oncontextrestored_get", arguments);
    }
  }.oncontextrestored,
  set: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "oncontextrestored_set", arguments);
    }
  }.oncontextrestored
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "convertToBlob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    convertToBlob() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "convertToBlob", arguments);
    }
  }.convertToBlob
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "getContext", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getContext() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "getContext", arguments);
    }
  }.getContext
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "transferToImageBitmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transferToImageBitmap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvas"].prototype, "OffscreenCanvas", "transferToImageBitmap", arguments);
    }
  }.transferToImageBitmap
});