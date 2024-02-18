// Path2D对象

bodaEnv.memory.globlProtoObj["Path2D"] = function Path2D() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Path2D 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Path2D"], "Path2D");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "addPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addPath() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "addPath", arguments);
    }
  }.addPath
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "roundRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    roundRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "roundRect", arguments);
    }
  }.roundRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "arc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    arc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "arc", arguments);
    }
  }.arc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "arcTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    arcTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "arcTo", arguments);
    }
  }.arcTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "bezierCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bezierCurveTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "bezierCurveTo", arguments);
    }
  }.bezierCurveTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "closePath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    closePath() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "closePath", arguments);
    }
  }.closePath
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "ellipse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    ellipse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "ellipse", arguments);
    }
  }.ellipse
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "lineTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lineTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "lineTo", arguments);
    }
  }.lineTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "moveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    moveTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "moveTo", arguments);
    }
  }.moveTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "quadraticCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    quadraticCurveTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "quadraticCurveTo", arguments);
    }
  }.quadraticCurveTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Path2D"].prototype, "rect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Path2D"].prototype, "Path2D", "rect", arguments);
    }
  }.rect
});