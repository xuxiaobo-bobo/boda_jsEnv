<html>
<body>

    <div id="parent-id">
        <p>hello world 1</p>
        <p class="test">hello world 2</p>
        <p>hello world 3</p>
        <p>hello world 4</p>
    </div>

    <script>
        var parentDOM = document.getElementById("parent-id");

        var test = parentDOM.getElementsByClassName("test"); // 匹配类名的元素集合，不是元素本身
        console.log(test); //HTMLCollection[1]

        var testTarget = parentDOM.getElementsByClassName("test")[0]; // 我们想要取到的第一个元素
        console.log(testTarget); //<p class="test">hello world 2</p>
    </script>
</body>
</html>
