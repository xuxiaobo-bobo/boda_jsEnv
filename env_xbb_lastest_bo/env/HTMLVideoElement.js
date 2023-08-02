// HTMLVideoElement对象

HTMLVideoElement = function HTMLVideoElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLVideoElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLVideoElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLVideoElement, "HTMLVideoElement");
HTMLVideoElement.prototype.__proto__ = HTMLMediaElement.prototype;
HTMLVideoElement.__proto__ = HTMLMediaElement;
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "videoWidth", {
  configurable: true,
  enumerable: true,
  get: function videoWidth() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "videoWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "videoHeight", {
  configurable: true,
  enumerable: true,
  get: function videoHeight() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "videoHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "poster", {
  configurable: true,
  enumerable: true,
  get: function poster() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "poster_get", arguments);
  },
  set: function poster() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "poster_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDecodedFrameCount", {
  configurable: true,
  enumerable: true,
  get: function webkitDecodedFrameCount() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitDecodedFrameCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDroppedFrameCount", {
  configurable: true,
  enumerable: true,
  get: function webkitDroppedFrameCount() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitDroppedFrameCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "playsInline", {
  configurable: true,
  enumerable: true,
  get: function playsInline() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "playsInline_get", arguments);
  },
  set: function playsInline() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "playsInline_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "onenterpictureinpicture", {
  configurable: true,
  enumerable: true,
  get: function onenterpictureinpicture() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "onenterpictureinpicture_get", arguments);
  },
  set: function onenterpictureinpicture() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "onenterpictureinpicture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "onleavepictureinpicture", {
  configurable: true,
  enumerable: true,
  get: function onleavepictureinpicture() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "onleavepictureinpicture_get", arguments);
  },
  set: function onleavepictureinpicture() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "onleavepictureinpicture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "disablePictureInPicture", {
  configurable: true,
  enumerable: true,
  get: function disablePictureInPicture() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "disablePictureInPicture_get", arguments);
  },
  set: function disablePictureInPicture() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "disablePictureInPicture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "cancelVideoFrameCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelVideoFrameCallback() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "cancelVideoFrameCallback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "requestPictureInPicture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPictureInPicture() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "requestPictureInPicture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "requestVideoFrameCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestVideoFrameCallback() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "requestVideoFrameCallback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitSupportsFullscreen", {
  configurable: true,
  enumerable: true,
  get: function webkitSupportsFullscreen() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitSupportsFullscreen_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDisplayingFullscreen", {
  configurable: true,
  enumerable: true,
  get: function webkitDisplayingFullscreen() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitDisplayingFullscreen_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "getVideoPlaybackQuality", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVideoPlaybackQuality() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "getVideoPlaybackQuality", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitEnterFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitEnterFullScreen() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitEnterFullScreen", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitEnterFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitEnterFullscreen() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitEnterFullscreen", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitExitFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitExitFullScreen() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitExitFullScreen", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitExitFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitExitFullscreen() {
    return bodavm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElement", "webkitExitFullscreen", arguments);
  }
});