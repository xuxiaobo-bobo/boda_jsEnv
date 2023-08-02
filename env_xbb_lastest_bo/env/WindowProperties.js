bodavm.memory.notDefined['WindowProperties'] = function () {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof bodavm.memory.notDefined['WindowProperties'])) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WindowControlsOverlayGeometryChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('bodavm.memory.notDefined[WindowProperties] 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['WindowProperties'], 'WindowProperties');
bodavm.memory.notDefined['WindowProperties'].prototype.__proto__ = EventTarget.prototype;
bodavm.memory.notDefined['WindowProperties'].__proto__ = EventTarget;
delete bodavm.memory.notDefined['WindowProperties'].prototype.constructor;