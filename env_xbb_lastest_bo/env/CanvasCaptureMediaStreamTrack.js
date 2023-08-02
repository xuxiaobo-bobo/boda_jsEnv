// CanvasCaptureMediaStreamTrack对象

CanvasCaptureMediaStreamTrack = function CanvasCaptureMediaStreamTrack() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CanvasCaptureMediaStreamTrack)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CanvasCaptureMediaStreamTrack 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CanvasCaptureMediaStreamTrack, "CanvasCaptureMediaStreamTrack");
CanvasCaptureMediaStreamTrack.prototype.__proto__ = MediaStreamTrack.prototype;
CanvasCaptureMediaStreamTrack.__proto__ = MediaStreamTrack;
bodavm.toolsFunc.defineProperty(CanvasCaptureMediaStreamTrack.prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: function canvas() {
    return bodavm.toolsFunc.dispatch(this, CanvasCaptureMediaStreamTrack.prototype, "CanvasCaptureMediaStreamTrack", "canvas_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CanvasCaptureMediaStreamTrack.prototype, "requestFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestFrame() {
    return bodavm.toolsFunc.dispatch(this, CanvasCaptureMediaStreamTrack.prototype, "CanvasCaptureMediaStreamTrack", "requestFrame", arguments);
  }
});