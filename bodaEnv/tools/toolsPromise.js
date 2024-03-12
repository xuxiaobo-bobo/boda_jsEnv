delete Promise
bodaEnv.memory.promiseStatus={
  'PENDING':'PENDING',
  'FULFILLED':'FULFILLED',
  'REJECTED':'REJECTED',
}


globalThis.Promise=function Promise(executor) {
  // debugger
  let self = this;
  self.status = bodaEnv.memory.promiseStatus['PENDING'];
  self.value = undefined;
  self.reason = undefined;
  self.onFulfilledCallbacks = [];
  self.onRejectedCallbacks = [];
  bodaEnv.toolsFunc.console_copy('实例化promise 参数::',executor)
  function resolve(value) {
    if(self.status === bodaEnv.memory.promiseStatus['PENDING']) {
      self.status = bodaEnv.memory.promiseStatus['FULFILLED'];
      self.value = value;
      self.onFulfilledCallbacks.forEach(fn=>fn()); 
    }
  }

  function reject(reason) {
    if(self.status === bodaEnv.memory.promiseStatus['PENDING']) {
      self.status = bodaEnv.memory.promiseStatus['REJECTED'];
      self.reason = reason;
      self.onRejectedCallbacks.forEach(fn=>fn());
    }
  }

  try {
    executor(resolve, reject); 
  } catch (err) {
    reject(err);
  }
}


Promise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};
  // debugger
  let self = this;
  let promise2;
  // console.log('调用 then 方法 参数 ::',onFulfilled,onRejected)
  if(self.status === bodaEnv.memory.promiseStatus['FULFILLED']) {
    return promise2 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        try {
          let x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject); 
        } catch (e) {
          reject(e);
        } 
      },0,'promise');
    });
  }

  if(self.status === bodaEnv.memory.promiseStatus['REJECTED']) { 
    return promise2 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        try {
          let x = onRejected(self.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e); 
        }
      },0,'promise');
    });
  }

  if(self.status === bodaEnv.memory.promiseStatus['PENDING']) {
    return promise2 = new Promise((resolve, reject) => {
      self.onFulfilledCallbacks.push(() => { 
        try {
          let x = onFulfilled(self.value); 
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        } 
      });

      self.onRejectedCallbacks.push(() => {
        try {
          let x = onRejected(self.reason);
          resolvePromise(promise2, x, resolve, reject);  
        } catch (e) {
          reject(e);
        } 
      }); 
    });
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // if(promise2 === x) {
  //   return reject(new TypeError('循环引用'));
  // }

  let called = false;

  if(x instanceof Promise) { 
    if(x.status === bodaEnv.memory.promiseStatus['PENDING']) {  
      x.then(y => {
        resolvePromise(promise2, y, resolve, reject);
      }, reason => {
        reject(reason); 
      });
    } else {  
      x.then(resolve, reject); 
    }
  } else if(x !== null && (typeof x === 'object' || typeof x === 'function')) {  
    try {    
      let then = x.then; 
      if(typeof then === 'function') {
        then.call(x, y => {
          if(called) return;
          called = true; 
          resolvePromise(promise2, y, resolve, reject);
        }, reason => {
          if(called) return;
          called = true;
          reject(reason);  
        })
      } else { 
        resolve(x);  
      }
    } catch (e) {
      if(called) return;
      called = true;
      reject(e); 
    }
  } else {
    resolve(x); 
  }
}
bodaEnv.toolsFunc.safeFunc(Promise.prototype.then,'then')

Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
}
bodaEnv.toolsFunc.safeFunc(Promise.prototype.catch,'catch')

Promise.prototype.finally = function(callback) {
  return this.then(value => {
    return Promise.resolve(callback()).then(() => value); 
  }, reason => {
    return Promise.resolve(callback()).then(() => {throw reason}); 
  });
};

bodaEnv.toolsFunc.safeFunc(Promise.prototype.finally,'finally')


Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    if(Array.isArray(promises)) {
      let len = promises.length;
      for(let i = 0; i < len; i++) {
        Promise.resolve(promises[i]).then(resolve, reject);  
      }
    } else {
      for(let p of promises) {
        Promise.resolve(p).then(resolve, reject);
      }
    }
  }); 
}


bodaEnv.toolsFunc.safeFunc(Promise.race,'race')




Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError(`promises must be an array`)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedValues = new Array(promiseNum);
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value => {
        resolvedCounter++
        resolvedValues[i] = value
        if (resolvedCounter === promiseNum) {
          return resolve(resolvedValues) 
        }
      }, error => {  
        return reject(error)  
      })
    }
  })
}


bodaEnv.toolsFunc.safeFunc(Promise.all,'all')

// debugger
bodaEnv.toolsFunc.safeProto(Promise, "Promise");

Promise.any=function (){
  bodaEnv.toolsFunc.console_copy('Promise.any 暂未实现')
}
bodaEnv.toolsFunc.safeFunc(Promise.any,'any')

Promise.allSettled=function (){
  bodaEnv.toolsFunc.console_copy('Promise.allSettled 暂未实现')

}
Promise.resolve = function(val) {
  // 如果参数是Promise实例，直接返回这个实例
  if(val instanceof Promise) {
    return val;
  }

  return new Promise((resolve, reject) => {
    if(val && val instanceof Object && typeof val.then === 'function') {
      // 如果val是thenable，把val的then方法置换到新的Promise的then方法上，实现状态同步
      setTimeout(() => { 
        val.then(resolve, reject);
      }, 0);
    } else {
      // 如果val是其它值，将其作为成功状态的结果值
      resolve(val);
    }
  });
}
bodaEnv.toolsFunc.safeFunc(Promise.resolve,'resolve')

// debugger