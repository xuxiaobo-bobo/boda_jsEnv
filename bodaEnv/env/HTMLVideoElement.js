// HTMLVideoElement对象

bodaEnv.memory.globlProtoObj["HTMLVideoElement"] = function HTMLVideoElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLVideoElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLVideoElement"], "HTMLVideoElement");
bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLVideoElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLMediaElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "height_set", arguments);
    }
  }.height
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "videoWidth", {
  configurable: true,
  enumerable: true,
  get: {
    videoWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "videoWidth_get", arguments);
    }
  }.videoWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "videoHeight", {
  configurable: true,
  enumerable: true,
  get: {
    videoHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "videoHeight_get", arguments);
    }
  }.videoHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "poster", {
  configurable: true,
  enumerable: true,
  get: {
    poster() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "poster_get", arguments);
    }
  }.poster,
  set: {
    poster() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "poster_set", arguments);
    }
  }.poster
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "webkitDecodedFrameCount", {
  configurable: true,
  enumerable: true,
  get: {
    webkitDecodedFrameCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "webkitDecodedFrameCount_get", arguments);
    }
  }.webkitDecodedFrameCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "webkitDroppedFrameCount", {
  configurable: true,
  enumerable: true,
  get: {
    webkitDroppedFrameCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "webkitDroppedFrameCount_get", arguments);
    }
  }.webkitDroppedFrameCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "playsInline", {
  configurable: true,
  enumerable: true,
  get: {
    playsInline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "playsInline_get", arguments);
    }
  }.playsInline,
  set: {
    playsInline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "playsInline_set", arguments);
    }
  }.playsInline
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "onenterpictureinpicture", {
  configurable: true,
  enumerable: true,
  get: {
    onenterpictureinpicture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "onenterpictureinpicture_get", arguments);
    }
  }.onenterpictureinpicture,
  set: {
    onenterpictureinpicture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "onenterpictureinpicture_set", arguments);
    }
  }.onenterpictureinpicture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "onleavepictureinpicture", {
  configurable: true,
  enumerable: true,
  get: {
    onleavepictureinpicture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "onleavepictureinpicture_get", arguments);
    }
  }.onleavepictureinpicture,
  set: {
    onleavepictureinpicture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "onleavepictureinpicture_set", arguments);
    }
  }.onleavepictureinpicture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "disablePictureInPicture", {
  configurable: true,
  enumerable: true,
  get: {
    disablePictureInPicture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "disablePictureInPicture_get", arguments);
    }
  }.disablePictureInPicture,
  set: {
    disablePictureInPicture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "disablePictureInPicture_set", arguments);
    }
  }.disablePictureInPicture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "cancelVideoFrameCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancelVideoFrameCallback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "cancelVideoFrameCallback", arguments);
    }
  }.cancelVideoFrameCallback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "requestPictureInPicture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestPictureInPicture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "requestPictureInPicture", arguments);
    }
  }.requestPictureInPicture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "requestVideoFrameCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestVideoFrameCallback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "requestVideoFrameCallback", arguments);
    }
  }.requestVideoFrameCallback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "webkitSupportsFullscreen", {
  configurable: true,
  enumerable: true,
  get: {
    webkitSupportsFullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "webkitSupportsFullscreen_get", arguments);
    }
  }.webkitSupportsFullscreen,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "webkitDisplayingFullscreen", {
  configurable: true,
  enumerable: true,
  get: {
    webkitDisplayingFullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "webkitDisplayingFullscreen_get", arguments);
    }
  }.webkitDisplayingFullscreen,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "getVideoPlaybackQuality", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getVideoPlaybackQuality() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "getVideoPlaybackQuality", arguments);
    }
  }.getVideoPlaybackQuality
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "webkitEnterFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitEnterFullScreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "webkitEnterFullScreen", arguments);
    }
  }.webkitEnterFullScreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "webkitEnterFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitEnterFullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "webkitEnterFullscreen", arguments);
    }
  }.webkitEnterFullscreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "webkitExitFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitExitFullScreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "webkitExitFullScreen", arguments);
    }
  }.webkitExitFullScreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "webkitExitFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitExitFullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLVideoElement"].prototype, "HTMLVideoElement", "webkitExitFullscreen", arguments);
    }
  }.webkitExitFullscreen
});