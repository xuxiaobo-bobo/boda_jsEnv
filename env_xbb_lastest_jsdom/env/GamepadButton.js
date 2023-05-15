// GamepadButton对象
bodavm.memory.globalobj['GamepadButton'] = function GamepadButton(){if (!(this instanceof GamepadButton)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['GamepadButton'], "GamepadButton");
bodavm.toolsFunc.defineProperty('GamepadButton', "pressed", {configurable:true, enumerable:true, get:function pressed (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GamepadButton'].prototype, "GamepadButton", "pressed_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('GamepadButton', "touched", {configurable:true, enumerable:true, get:function touched (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GamepadButton'].prototype, "GamepadButton", "touched_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('GamepadButton', "value", {configurable:true, enumerable:true, get:function value (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GamepadButton'].prototype, "GamepadButton", "value_get", arguments)}, set:undefined},'prototype');
