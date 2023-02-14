// <!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<div id="bb">
			<div class="box1"></div>
			<div class="box">
				<p title="hhhh">第1</p>
				<p dataId="2">第2</p>
				<p>第3</p>
				<p>第4</p>
			</div>
			<div class="box2"></div>
		</div>
<script
        type="text/javascript">  ;
</script>
 </body>
</html>

console.log(pp.parentNode);
console.log(pp.parentElement);
console.log(pp.parentElement.parentElement.parentElement.parentElement.nodeName); //报错：000.html:37 Uncaught TypeError: Cannot read property 'nodeName' of null
console.log(pp.parentNode.parentNode.parentNode.parentNode.nodeName);// #document


