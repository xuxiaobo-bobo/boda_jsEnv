module.exports = function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}