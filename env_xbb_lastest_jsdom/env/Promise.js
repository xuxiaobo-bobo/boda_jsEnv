function Promise(fn) {
  var self = this;
  self.value = null;
  self.error = null;
  self.status = 'pending';
  self.onFulfilled = [];
  self.onRejected = [];

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'fulfilled';
      self.value = value;
      for (var i = 0; i < self.onFulfilled.length; i++) {
        setTimeout(function() {
          self.onFulfilled[i](self.value);
        }, 0);
      }
    }
  }
  function reject(error) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.error = error;
      for (var i = 0; i < self.onRejected.length; i++) {
        setTimeout(function() {
          self.onRejected[i](self.error);
        }, 0);
      }
    }
  }

  fn(resolve, reject);
}
bodavm.toolsFunc.safeFunc(Promise,'Promise')


Promise.prototype.then = function(onFulfilled, onRejected) {
  var self = this;
  var promise = new Promise(function(resolve, reject) {
    function handle(value) {
      try {
        var result = onFulfilled(value);
        if (result instanceof Promise) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    }

    function handleError(error) {
      try {
        var result = onRejected(error);
        if (result instanceof Promise) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    }

    if (self.status === 'fulfilled') {
      setTimeout(function() {
        handle(self.value);
      }, 0);
    } else if (self.status === 'rejected') {
      setTimeout(function() {
        handleError(self.error);
      }, 0);
    } else {
      self.onFulfilled.push(handle);
      self.onRejected.push(handleError);
    }
  });

  return promise;
};
bodavm.toolsFunc.safeFunc(Promise.prototype.then ,'then')

Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
};
bodavm.toolsFunc.safeFunc(Promise.prototype.catch,'catch')

Promise.prototype.finally = function(onFinally) {
  return this.then(
    function(value) {
      return Promise.resolve(onFinally()).then(function() {
        return value;
      });
    },
    function(error) {
      return Promise.resolve(onFinally()).then(function() {
        throw error;
      });
    }
  );
};
bodavm.toolsFunc.safeFunc(Promise.prototype.finally,'finally')

Promise.resolve = function(value) {
  return new Promise(function(resolve) {
    resolve(value);
  });
};
bodavm.toolsFunc.safeFunc(Promise.resolve ,'resolve')

Promise.reject = function(error) {
  return new Promise(function(resolve, reject) {
    reject(error);
  });
};
bodavm.toolsFunc.safeFunc(Promise.reject ,'reject')

Promise.all = function(promises) {
  return new Promise(function(resolve, reject) {
    var results = [];
    var count = 0;

    function handle(i, value) {
      results[i] = value;
      count++;

      if (count === promises.length) {
        resolve(results);
      }
    }

    for (var i = 0; i < promises.length; i++) {
      promises[i].then(handle.bind(null, i), reject);
    }
  });
};
bodavm.toolsFunc.safeFunc(Promise.all ,'all')

Promise.race = function(promises) {
  return new Promise(function(resolve, reject) {
    for (var i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  });
};
bodavm.toolsFunc.safeFunc(Promise.race ,'race')

Promise.allSettled = function(promises) {
  return new Promise(function(resolve) {
    var results = [];
    var count = 0;

    function handle(i, status) {
      return function(value) {
        results[i] = { status: status, value: value };
        count++;

        if (count === promises.length) {
          resolve(results);
        }
      };
    }

    for (var i = 0; i < promises.length; i++) {
      promises[i].then(handle(i, 'fulfilled'), handle(i, 'rejected'));
    }
  });
};
bodavm.toolsFunc.safeFunc(Promise.allSettled ,'allSettled')

// bodavm.toolsFunc.safeFunc(Promise)
// globalMy.rename(Promise.prototype,"Promise")

