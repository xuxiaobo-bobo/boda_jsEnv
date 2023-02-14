module.exports = function isset_key(accessor, key) {
  try {
    const isset = require('./isset');
    return isset(accessor) && isset(accessor[key]);
  } catch (e) {
    // And we're able to catch the Error it would normally throw for
    // referencing a property of undefined
    return false;
  }
}