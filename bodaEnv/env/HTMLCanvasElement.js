// HTMLCanvasElement对象

bodaEnv.memory.globlProtoObj["HTMLCanvasElement"] = function HTMLCanvasElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLCanvasElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLCanvasElement"], "HTMLCanvasElement");
bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "HTMLCanvasElement", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "HTMLCanvasElement", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "HTMLCanvasElement", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "HTMLCanvasElement", "height_set", arguments);
    }
  }.height
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "captureStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    captureStream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "HTMLCanvasElement", "captureStream", arguments);
    }
  }.captureStream
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "getContext", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getContext() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "HTMLCanvasElement", "getContext", arguments);
    }
  }.getContext
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "toBlob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toBlob() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "HTMLCanvasElement", "toBlob", arguments);
    }
  }.toBlob
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "toDataURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toDataURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "HTMLCanvasElement", "toDataURL", arguments);
    }
  }.toDataURL
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "transferControlToOffscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transferControlToOffscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCanvasElement"].prototype, "HTMLCanvasElement", "transferControlToOffscreen", arguments);
    }
  }.transferControlToOffscreen
});