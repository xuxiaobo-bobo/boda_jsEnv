

// BarProp对象
Database = function Database() { return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor") }
bodavm.toolsFunc.safeProto(Database, "Database");
bodavm.toolsFunc.defineProperty(Database.prototype, "version", { configurable: true, enumerable: true, get: function version() { return bodavm.toolsFunc.dispatch(this, Database.prototype, "Database", "version", arguments) }, set: undefined });
bodavm.toolsFunc.defineProperty(Database.prototype, "readTransaction", { configurable: true, enumerable: true, writable: true, value: function readTransaction() { return bodavm.toolsFunc.dispatch(this, Database.prototype, "Database", "readTransaction", arguments) } });
bodavm.toolsFunc.defineProperty(Database.prototype, "transaction", { configurable: true, enumerable: true, writable: true, value: function transaction() { return bodavm.toolsFunc.dispatch(this, Database.prototype, "Database", "transaction", arguments) } });
bodavm.toolsFunc.defineProperty(Database.prototype, "changeVersion", { configurable: true, enumerable: true, writable: true, value: function changeVersion() { return bodavm.toolsFunc.dispatch(this, Database.prototype, "Database", "changeVersion", arguments) } });

var database = {}
database.__proto__ = Database.prototype
delete Database