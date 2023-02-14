module.exports = function empty(accessor) {
  try {
    // Note we're seeing if the returned value of our function is not
    // undefined or null or empty
    return accessor === undefined || accessor === null || accessor.length === 0;
  } catch (e) {
    // And we're able to catch the Error it would normally throw for
    // referencing a property of undefined
    return false;
  }
}