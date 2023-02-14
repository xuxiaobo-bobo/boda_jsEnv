// DeviceOrientationEvent对象
DeviceOrientationEvent = function DeviceOrientationEvent(){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceOrientationEvent': 1 argument required, but only 0 present.")}
bodavm.toolsFunc.safeProto(DeviceOrientationEvent, "DeviceOrientationEvent");
DeviceOrientationEvent.prototype.__proto__=Event.prototype;
DeviceOrientationEvent.__proto__=Event;
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "alpha", {configurable:true, enumerable:true, get:function alpha (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "alpha_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "beta", {configurable:true, enumerable:true, get:function beta (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "beta_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "gamma", {configurable:true, enumerable:true, get:function gamma (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "gamma_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "absolute", {configurable:true, enumerable:true, get:function absolute (){return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "absolute_get", arguments)}, set:undefined});
