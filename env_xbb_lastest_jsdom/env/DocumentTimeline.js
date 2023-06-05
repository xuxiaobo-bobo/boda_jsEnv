// DocumentTimeline对象

bodavm.memory.globalobj['DocumentTimeline'] = function DocumentTimeline() {
  console.log_copy('DocumentTimeline 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DocumentTimeline();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DocumentTimeline'], "DocumentTimeline");
bodavm.memory.globalobj['DocumentTimeline'].prototype.__proto__ = bodavm.memory.globalobj['AnimationTimeline'].prototype;
bodavm.memory.globalobj['DocumentTimeline'].__proto__ = bodavm.memory.globalobj['AnimationTimeline'];