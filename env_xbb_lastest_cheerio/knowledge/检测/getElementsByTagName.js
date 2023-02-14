<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>getElementsByTagName example</title>
</head>
<body style="border: solid green 3px">
  <p>Some outer text</p>
  <p>Some outer text</p>

  <div id="div1" style="border: solid blue 3px">
    <p>Some div1 text</p>
    <p>Some div1 text</p>
    <p>Some div1 text</p>

    <div id="div2" style="border: solid red 3px">
      <p>Some div2 text</p>
      <p>Some div2 text</p>
    </div>
  </div>

  <p>Some outer text</p>
  <p>Some outer text</p>

  <button onclick="getAllParaElems();">
    show all p elements in document</button><br />

  <button onclick="div1ParaElems();">
    show all p elements in div1 element</button><br />

  <button onclick="div2ParaElems();">
    show all p elements in div2 element</button>

</body>
</html>

`
<script>
    function getAllParaElems() {
      var allParas = document.getElementsByTagName("p");
      var num = allParas.length;
      alert("There are " + num + " paragraph in this document");
    }

    function div1ParaElems() {
      var div1 = document.getElementById("div1");
      var div1Paras = div1.getElementsByTagName("p");
      var num = div1Paras.length;
      alert("There are " + num + " paragraph in #div1");
    }

    function div2ParaElems() {
      var div2 = document.getElementById("div2");
      var div2Paras = div2.getElementsByTagName("p");
      var num = div2Paras.length;
      alert("There are " + num + " paragraph in #div2");
    }
  </script>`