// VideoFrame对象

bodaEnv.memory.globlProtoObj["VideoFrame"] = function VideoFrame() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VideoFrame 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VideoFrame"], "VideoFrame");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "format", {
  configurable: true,
  enumerable: true,
  get: {
    format() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "format_get", arguments);
    }
  }.format,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "duration_get", arguments);
    }
  }.duration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "codedWidth", {
  configurable: true,
  enumerable: true,
  get: {
    codedWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "codedWidth_get", arguments);
    }
  }.codedWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "codedHeight", {
  configurable: true,
  enumerable: true,
  get: {
    codedHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "codedHeight_get", arguments);
    }
  }.codedHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "codedRect", {
  configurable: true,
  enumerable: true,
  get: {
    codedRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "codedRect_get", arguments);
    }
  }.codedRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "visibleRect", {
  configurable: true,
  enumerable: true,
  get: {
    visibleRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "visibleRect_get", arguments);
    }
  }.visibleRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "displayWidth", {
  configurable: true,
  enumerable: true,
  get: {
    displayWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "displayWidth_get", arguments);
    }
  }.displayWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "displayHeight", {
  configurable: true,
  enumerable: true,
  get: {
    displayHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "displayHeight_get", arguments);
    }
  }.displayHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "colorSpace", {
  configurable: true,
  enumerable: true,
  get: {
    colorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "colorSpace_get", arguments);
    }
  }.colorSpace,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "allocationSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    allocationSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "allocationSize", arguments);
    }
  }.allocationSize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "clone", arguments);
    }
  }.clone
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"].prototype, "VideoFrame", "copyTo", arguments);
    }
  }.copyTo
});