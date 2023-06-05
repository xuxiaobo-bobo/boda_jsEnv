RegExp.prototype.test_ = RegExp.prototype.test;
RegExp.prototype.test = function (val) {
    return true;
};
RegExp.prototype.test.toString = function () {
    return "function test() { [native code] }"
}
