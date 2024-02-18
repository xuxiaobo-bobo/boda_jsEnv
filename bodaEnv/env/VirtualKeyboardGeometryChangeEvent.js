// VirtualKeyboardGeometryChangeEvent对象

bodaEnv.memory.globlProtoObj["VirtualKeyboardGeometryChangeEvent"] = function VirtualKeyboardGeometryChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VirtualKeyboardGeometryChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VirtualKeyboardGeometryChangeEvent"], "VirtualKeyboardGeometryChangeEvent");
bodaEnv.memory.globlProtoObj["VirtualKeyboardGeometryChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["VirtualKeyboardGeometryChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];