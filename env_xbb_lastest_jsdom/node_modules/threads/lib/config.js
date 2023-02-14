'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getConfig = getConfig;
exports.setConfig = setConfig;
var configuration = {
  basepath: {
    node: '',
    web: ''
  },
  fallback: {
    slaveScriptUrl: ''
  }
};

function configDeepMerge(destObj, srcObj) {
  var ancestorProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  Object.keys(srcObj).forEach(function (propKey) {
    var srcValue = srcObj[propKey];
    var ancestorPropsAndThis = ancestorProps.concat([propKey]);

    if ((typeof srcValue === 'undefined' ? 'undefined' : _typeof(srcValue)) === 'object') {
      if (typeof destObj[propKey] !== 'undefined' && _typeof(destObj[propKey]) !== 'object') {
        throw new Error('Expected config property not to be an object: ' + ancestorPropsAndThis.join('.'));
      }
      configDeepMerge(destObj[propKey], srcValue, ancestorPropsAndThis);
    } else {
      if (_typeof(destObj[propKey]) === 'object') {
        throw new Error('Expected config property to be an object: ' + ancestorPropsAndThis.join('.'));
      }
      destObj[propKey] = srcValue;
    }
  });
}

var config = {
  get: function get() {
    return configuration;
  },

  set: function set(newConfig) {
    if ((typeof newConfig === 'undefined' ? 'undefined' : _typeof(newConfig)) !== 'object') {
      throw new Error('Expected config object.');
    }

    configDeepMerge(configuration, newConfig);
  }
};

exports.default = config;
function getConfig() {
  return config.get();
}

function setConfig() {
  return config.set.apply(config, arguments);
}
//# sourceMappingURL=config.js.map
