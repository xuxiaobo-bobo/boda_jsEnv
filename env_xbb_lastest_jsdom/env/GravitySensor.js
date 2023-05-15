// GravitySensor对象
bodavm.memory.globalobj['GravitySensor'] = function GravitySensor(){this._boarg= new bodaobj.window.GravitySensor();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['GravitySensor'], "GravitySensor");
bodavm.memory.globalobj['GravitySensor'].prototype.__proto__=bodavm.memory.globalobj['Accelerometer'].prototype;
bodavm.memory.globalobj['GravitySensor'].__proto__=bodavm.memory.globalobj['Accelerometer'];
