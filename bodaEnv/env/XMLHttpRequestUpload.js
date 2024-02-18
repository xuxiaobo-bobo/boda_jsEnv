// XMLHttpRequestUpload对象

bodaEnv.memory.globlProtoObj["XMLHttpRequestUpload"] = function XMLHttpRequestUpload() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XMLHttpRequestUpload 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XMLHttpRequestUpload"], "XMLHttpRequestUpload");
bodaEnv.memory.globlProtoObj["XMLHttpRequestUpload"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"].prototype;
bodaEnv.memory.globlProtoObj["XMLHttpRequestUpload"].__proto__ = bodaEnv.memory.globlProtoObj["XMLHttpRequestEventTarget"];