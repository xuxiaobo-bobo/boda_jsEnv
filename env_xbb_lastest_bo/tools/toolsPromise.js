const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach((fun) => {
        fun();
      });
    }
  };

  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fun) => {
        fun();
      });
    }
  };

  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}


//原型上面的方法
//用settimeout来模拟异步调用,保证链式调用，即then方法中要返回一个新的promise，并将then方法的返回值进行resolve
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled != 'function') {
    onFulfilled = function (value) {
      return value;
    };
  }
  if (typeof onRejected != 'function') {
    onRejected = function (reason) {
      throw reason;
    };
  }
  const promise2 = new Promise((resolve, reject) => {
    switch (this.state) {
      case FULFILLED:
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case REJECTED:
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case PENDING:
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
        break;
    }
  });
  return promise2;
};
bodavm.toolsFunc.safeFunc(Promise.prototype.then,'then')

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};
bodavm.toolsFunc.safeFunc(Promise.prototype.catch,'catch')


Promise.prototype.finally = function (fn) {
  return this.then(
    (value) => {
      fn();
      return value;
    },
    (reason) => {
      fn();
      throw reason;
    }
  );
};
bodavm.toolsFunc.safeFunc(Promise.prototype.finally,'finally')


//静态方法
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
};
bodavm.toolsFunc.safeFunc(Promise.resolve,'resolve')

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};
bodavm.toolsFunc.safeFunc(Promise.reject,'reject')

//接受一个promise数组，当所有promise状态resolve后，执行resolve
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            result[i] = data;
            if (++index === promises.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};
bodavm.toolsFunc.safeFunc(Promise.all,'all')

//接受一个promise数组，当有一个promise状态resolve后，执行resolve
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve();
    } else {
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};
// globalMy.baohu(Promise.race,'race')
bodavm.toolsFunc.safeFunc(Promise.race,'race')
bodavm.toolsFunc.safeProto(Promise, "Promise");

// any  allSeettled
Promise.any=function (){
  console.log_copy('Promise.any 暂未实现')
}
bodavm.toolsFunc.safeFunc(Promise.any,'any')

Promise.allSettled=function (){
  console.log_copy('Promise.allSettled 暂未实现')

}
bodavm.toolsFunc.safeFunc(Promise.allSettled,'allSettled')
// Promise=bodavm.toolsFunc.proxy2(Promise,'Promise')