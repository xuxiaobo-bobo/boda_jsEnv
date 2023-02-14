'use strict';

exports.__esModule = true;

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Job = function (_EventEmitter) {
  _inherits(Job, _EventEmitter);

  function Job(pool) {
    _classCallCheck(this, Job);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.pool = pool;
    _this.thread = null;

    _this.runArgs = [];
    _this.sendArgs = [];

    pool.emit('newJob', _this);
    return _this;
  }

  Job.prototype.run = function run() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 0) {
      throw new Error('Cannot call .run() without arguments.');
    }

    this.runArgs = args;
    return this;
  };

  Job.prototype.send = function send() {
    if (this.runArgs.length === 0) {
      throw new Error('Cannot .send() before .run().');
    }

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.sendArgs = args;

    this.emit('readyToRun');
    return this;
  };

  Job.prototype.executeOn = function executeOn(thread) {
    var _this2 = this,
        _thread$on$once$once$,
        _thread$on$once$once;

    var onProgress = function onProgress() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this2.emit.apply(_this2, ['progress'].concat(args));
    };
    var onMessage = function onMessage() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      _this2.emit.apply(_this2, ['done'].concat(args));
      thread.removeListener('progress', onProgress);
    };
    var onError = function onError() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      _this2.emit.apply(_this2, ['error'].concat(args));
      thread.removeListener('progress', onProgress);
    };

    (_thread$on$once$once$ = (_thread$on$once$once = thread.on('progress', onProgress).once('message', onMessage).once('error', onError)).run.apply(_thread$on$once$once, this.runArgs)).send.apply(_thread$on$once$once$, this.sendArgs);

    this.thread = thread;
    this.emit('threadChanged');
    return this;
  };

  Job.prototype.promise = function promise() {
    var _this3 = this;

    // Always return a promise
    return new Promise(function (resolve) {
      // If the thread isn't set, listen for the threadChanged event
      if (!_this3.thread) {
        _this3.once('threadChanged', function () {
          resolve(_this3.thread.promise());
        });
      } else {
        resolve(_this3.thread.promise());
      }
    });
  };

  Job.prototype.destroy = function destroy() {
    this.removeAllListeners();
    delete this.runArgs;
    delete this.sendArgs;
  };

  return Job;
}(_eventemitter2.default);

exports.default = Job;
//# sourceMappingURL=job.js.map
