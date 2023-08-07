// Path2D对象

Path2D = function Path2D() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Path2D 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Path2D, "Path2D");
bodavm.toolsFunc.defineProperty(Path2D.prototype, "addPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addPath() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "addPath", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "roundRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function roundRect() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "roundRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "arc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arc() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "arc", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "arcTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arcTo() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "arcTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "bezierCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bezierCurveTo() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "bezierCurveTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "closePath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function closePath() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "closePath", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "ellipse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function ellipse() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "ellipse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "lineTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lineTo() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "lineTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "moveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function moveTo() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "moveTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "quadraticCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function quadraticCurveTo() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "quadraticCurveTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Path2D.prototype, "rect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rect() {
    return bodavm.toolsFunc.dispatch(this, Path2D.prototype, "Path2D", "rect", arguments);
  }
});