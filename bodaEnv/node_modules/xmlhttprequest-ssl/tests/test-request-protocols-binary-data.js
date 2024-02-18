var sys = require("util")
  , assert = require("assert")
  , XMLHttpRequest = require("../lib/XMLHttpRequest").XMLHttpRequest
  , xhr;

xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (this.readyState == 4) {
    assert.equal("0000 803f 0000 a040 0000 c040 0000 e040", logBinary(this.response.toString('binary')));
    runSync();
  }
};

// Async
var url = "file://" + __dirname + "/testBinaryData";
xhr.open("GET", url);
xhr.send();

// Sync
var runSync = function() {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      assert.equal("0000 803f 0000 a040 0000 c040 0000 e040", logBinary(this.response.toString('binary')));
      console.log("done");
    }
  };
  xhr.open("GET", url, false);
  xhr.send();
}

function logBinary(data) {
  function log(data, idx) {
    return data.charCodeAt(idx).toString(16).padStart(2, '0');
  }
  if (!data) return 'no data';
  if (typeof data !== 'string') return 'not a string';
  let str = '';
  for (let k = 0; k < data.length - 2; k += 2)
    str += `${log(data, k)}${log(data, k+1)} `;
  if ((data.length % 2) == 0)
    str += `${log(data, data.length - 2)}${log(data, data.length - 1)}`;
  else
    str += `${log(data, data.length - 1)}`;
  return str;
}
