// BrowserCaptureMediaStreamTrack对象

BrowserCaptureMediaStreamTrack = function BrowserCaptureMediaStreamTrack() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BrowserCaptureMediaStreamTrack)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BrowserCaptureMediaStreamTrack 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BrowserCaptureMediaStreamTrack, "BrowserCaptureMediaStreamTrack");
BrowserCaptureMediaStreamTrack.prototype.__proto__ = MediaStreamTrack.prototype;
BrowserCaptureMediaStreamTrack.__proto__ = MediaStreamTrack;
bodavm.toolsFunc.defineProperty(BrowserCaptureMediaStreamTrack.prototype, "cropTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cropTo() {
    return bodavm.toolsFunc.dispatch(this, BrowserCaptureMediaStreamTrack.prototype, "BrowserCaptureMediaStreamTrack", "cropTo", arguments);
  }
});