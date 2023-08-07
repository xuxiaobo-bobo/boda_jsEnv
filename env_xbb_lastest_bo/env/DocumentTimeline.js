// DocumentTimeline对象

DocumentTimeline = function DocumentTimeline() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DocumentTimeline 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DocumentTimeline, "DocumentTimeline");
DocumentTimeline.prototype.__proto__ = AnimationTimeline.prototype;
DocumentTimeline.__proto__ = AnimationTimeline;