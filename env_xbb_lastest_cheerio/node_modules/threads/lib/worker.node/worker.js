'use strict';

exports.__esModule = true;
exports.resetPortCounter = undefined;

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Mutable variable with the last port used for inspect/inspect-brk.
// This value is shared among all workers.
var lastPort = 0;

// Port used by Node.JS when there is no port specified. See
// https://nodejs.org/en/docs/inspector/#command-line-options
var DEFAULT_PORT = 9229;
var buildExecArgv = function buildExecArgv() {
  return process.execArgv.map(function (arg) {
    var matches = arg.match(/^(--inspect(?:-brk)?)(?:=(\d+))?/);
    if (!matches) return arg;

    var command = matches[1];
    if (lastPort === 0) lastPort = Number(matches[2]) || 9229;
    lastPort++;
    return command + '=' + lastPort;
  });
};

// This function will reset the counter of ports used for inspect/inspect-brk.
// Used for testing.
var resetPortCounter = exports.resetPortCounter = function resetPortCounter() {
  lastPort = 0;
};

var Worker = function (_EventEmitter) {
  _inherits(Worker, _EventEmitter);

  function Worker(initialRunnable) {
    var importScripts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Worker);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));
    // `importScripts` cannot be consumed, it's just there to keep the API compatible to the browser worker


    _this.slave = _child_process2.default.fork(_path2.default.join(__dirname, 'slave.js'), [], Object.assign({ execArgv: buildExecArgv() }, options));
    _this.slave.on('message', _this.handleMessage.bind(_this));
    _this.slave.on('error', _this.handleError.bind(_this));
    _this.slave.on('exit', _this.emit.bind(_this, 'exit'));

    if (initialRunnable) {
      _this.run(initialRunnable);
    }
    return _this;
  }

  Worker.prototype.run = function run(toRun) {
    if (typeof toRun === 'function') {
      this.runMethod(toRun);
    } else {
      this.runScript(toRun);
    }
    return this;
  };

  Worker.prototype.runMethod = function runMethod(method) {
    this.slave.send({
      initByMethod: true,
      method: method.toString()
    });
  };

  Worker.prototype.runScript = function runScript(script) {
    if (!script) {
      throw new Error('Must pass a function or a script path to run().');
    }

    var prefixedScriptPath = _path2.default.join((0, _config.getConfig)().basepath.node, script);

    // attention: single script for node, array for browser
    this.slave.send({
      initByScript: true,
      script: _path2.default.resolve(prefixedScriptPath)
    });
  };

  Worker.prototype.send = function send(param) {
    this.slave.send({
      doRun: true,
      param: param
    });
    return this;
  };

  Worker.prototype.kill = function kill() {
    this.slave.kill();
    return this;
  };

  Worker.prototype.promise = function promise() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var resolved = void 0,
          rejected = void 0;
      resolved = function resolved(result) {
        _this2.removeListener('error', rejected);
        resolve(result);
      };
      rejected = function rejected(err) {
        _this2.removeListener('message', resolved);
        reject(err);
      };

      _this2.once('message', resolved).once('error', rejected);
    });
  };

  Worker.prototype.handleMessage = function handleMessage(message) {
    if (message.error) {
      var error = new Error(message.error.message);
      error.stack = message.error.stack;

      this.handleError(error);
    } else if (message.progress) {
      this.handleProgress(message.progress);
    } else {
      this.emit.apply(this, ['message'].concat(message.response));
      this.emit.apply(this, ['done'].concat(message.response)); // this one is just for convenience
    }
  };

  Worker.prototype.handleProgress = function handleProgress(progress) {
    this.emit('progress', progress);
  };

  Worker.prototype.handleError = function handleError(error) {
    if (!this.listeners('error', true)) {
      console.error(error.stack || error); // eslint-disable-line no-console
    }
    this.emit('error', error);
  };

  return Worker;
}(_eventemitter2.default);

exports.default = Worker;
//# sourceMappingURL=worker.js.map
