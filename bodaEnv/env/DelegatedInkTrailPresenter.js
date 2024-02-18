// DelegatedInkTrailPresenter对象

bodaEnv.memory.globlProtoObj["DelegatedInkTrailPresenter"] = function DelegatedInkTrailPresenter() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DelegatedInkTrailPresenter 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DelegatedInkTrailPresenter"], "DelegatedInkTrailPresenter");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DelegatedInkTrailPresenter"].prototype, "presentationArea", {
  configurable: true,
  enumerable: true,
  get: {
    presentationArea() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DelegatedInkTrailPresenter"].prototype, "DelegatedInkTrailPresenter", "presentationArea_get", arguments);
    }
  }.presentationArea,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DelegatedInkTrailPresenter"].prototype, "expectedImprovement", {
  configurable: true,
  enumerable: true,
  get: {
    expectedImprovement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DelegatedInkTrailPresenter"].prototype, "DelegatedInkTrailPresenter", "expectedImprovement_get", arguments);
    }
  }.expectedImprovement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DelegatedInkTrailPresenter"].prototype, "updateInkTrailStartPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    updateInkTrailStartPoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DelegatedInkTrailPresenter"].prototype, "DelegatedInkTrailPresenter", "updateInkTrailStartPoint", arguments);
    }
  }.updateInkTrailStartPoint
});