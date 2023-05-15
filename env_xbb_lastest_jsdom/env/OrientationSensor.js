// OrientationSensor对象
bodavm.memory.globalobj['OrientationSensor'] = function OrientationSensor(){if (!(this instanceof OrientationSensor)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['OrientationSensor'], "OrientationSensor");
bodavm.memory.globalobj['OrientationSensor'].prototype.__proto__=bodavm.memory.globalobj['Sensor'].prototype;
bodavm.memory.globalobj['OrientationSensor'].__proto__=bodavm.memory.globalobj['Sensor'];
bodavm.toolsFunc.defineProperty('OrientationSensor', "quaternion", {configurable:true, enumerable:true, get:function quaternion (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OrientationSensor'].prototype, "OrientationSensor", "quaternion_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('OrientationSensor', "populateMatrix", {configurable:true, enumerable:true, writable:true, value:function populateMatrix (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OrientationSensor'].prototype, "OrientationSensor", "populateMatrix", arguments)}},'prototype');
