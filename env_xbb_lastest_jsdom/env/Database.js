

// BarProp对象
bodavm.memory.globalobj['Database'] = function Database() { this._boisinit=bodavm.config.isinit;return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor") }
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Database'] , "Database");
bodavm.toolsFunc.defineProperty('Database' , "version", { configurable: true, enumerable: true, get: function version() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Database'].prototype, "Database", "version", arguments) }, set: undefined },'prototype');
bodavm.toolsFunc.defineProperty('Database' , "readTransaction", { configurable: true, enumerable: true, writable: true, value: function readTransaction() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Database'].prototype, "Database", "readTransaction", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('Database' , "transaction", { configurable: true, enumerable: true, writable: true, value: function transaction() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Database'].prototype, "Database", "transaction", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('Database' , "changeVersion", { configurable: true, enumerable: true, writable: true, value: function changeVersion() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Database'].prototype, "Database", "changeVersion", arguments) } },'prototype');

bodavm.memory.globalobj[ 'database']  = { _boisinit:bodavm.config.isinit}
bodavm.memory.globalobj[ 'database'] .__proto__ = bodavm.memory.globalobj['Database'] .prototype

