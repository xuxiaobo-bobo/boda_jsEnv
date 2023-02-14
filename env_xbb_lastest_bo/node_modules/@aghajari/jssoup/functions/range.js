module.exports = function range(start, end) {
  return [...Array(Math.max(end - start + 1, 0)).keys()].map(i => i + start);
}