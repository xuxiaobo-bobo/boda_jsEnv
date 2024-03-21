var assert = require("assert")
  , spawn = require('child_process').spawn
  , XMLHttpRequest = require("../lib/XMLHttpRequest").XMLHttpRequest
  , serverProcess;

// Running a sync XHR and a webserver within the same process will cause a deadlock
serverProcess = spawn(process.argv[0], [__dirname + "/server.js"], { stdio: 'inherit' });

setTimeout(function () {
  try {
    runTest()
  } catch (e) {
    throw e
  } finally {
    serverProcess.kill('SIGINT');
  }
}, 100);

function runTest() {
  var xhr = new XMLHttpRequest();
  var isSync = false;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      assert.equal(xhr.responseText, "Hello world!");
      assert.equal(xhr.getResponseHeader('content-type'), 'text/plain')
      isSync = true;
    }
  }
  
  xhr.open("GET", "http://localhost:8888/text", false);
  xhr.send();

  assert(isSync, "XMLHttpRequest was not synchronous");

  xhr = new XMLHttpRequest();
  isSync = false;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      assert.equal(xhr.response.toString(), 'Hello world!');
      assert.equal(xhr.getResponseHeader('content-type'), 'application/octet-stream')
      isSync = true;
    }
  }
  
  xhr.open("GET", "http://localhost:8888/binary", false);
  xhr.send();

  assert(isSync, "XMLHttpRequest was not synchronous");

  console.log("done");
}