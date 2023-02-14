// <!--Sample HTML code-->
<div id="top" align="center"> </div>

{/* <script type="text/javascript"> */}
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");
      var garbage = top.removeChild(nested);
      //Test Case 2: the method throws the exception (2)
{/* </script> */}

// <!--Sample HTML code-->
<div id="top" align="center">
 <div id="nested"></div>
</div>

{/* <script type="text/javascript"> */}
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");
      var garbage = top.removeChild(nested);
      // This first call remove correctly the node
      garbage = top.removeChild(nested);
      // Test Case 1: the method in the second call here, throws the exception (1)
// </script>
