bodavm.toolsFunc.HTMLParser = function HTMLParser(data) {
    let data_=data
    data=data.replace(/<!-[\s\S]*?-->/g,'').replace(/\/\/[\s\S]*?\n/g,'')
    // debugger
    let tempdata;
    if(data.length <1){
         tempdata=data_
    }
    // debugger
    // 最外层模拟的节点
    const nodeType = {
        TEXT: 'text',
        ELEMENT: 'element',
    };
    // 最外层增加一个模拟的根节点标签
    const frameflag = 'rootnode';
    // 计算一个完整标签的范围，eg. [0, 50]
    const createRange = (startPos, endPos) => {
        // 因为最外层模拟了 <rootnode>，所以需要将这部分长度减掉
        const frameFlagOffset = frameflag.length + 2;
        return [startPos - frameFlagOffset, endPos - frameFlagOffset]
    };

    const root = {
        _tagName: '#document',
        _children: [],
        _idelements: {},
        _className: {},
        _tagelements: {},
        _innerHtml:[]
    };

    // 设置 root 为父节点
    let currentParent = root;
    // 栈管理
    const stack = [root];
    let lastTextPos = -1;

    // 找到数组的最后一项
    function arrBack(arr) {
        return arr[arr.length - 1];
    }

    // ...开始遍历  /解析


    // 将模拟的根节点和需要解析的 html 拼接
    data = `<${frameflag}>${data}</${frameflag}>`;

    const kMarkupPattern = /<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g;
    while ((match = kMarkupPattern.exec(data))) {
        /**
          * matchText: 匹配的字符  eg. <span id="xxx">
          * leadingSlash: 是否为闭合标签 eg. /
          * tagName: 标签名 eg. span
          * attributes: 属性 eg. id="xxx"
          * closingSlash: 是否为自闭合 eg. /
          */
        let { 0: matchText, 1: leadingSlash, 2: tagName, 3: attributes, 4: closingSlash } = match;
        // 本次匹配到的字符串
        const matchLength = matchText.length;
        // 本次匹配的起始位置
        const tagStartPos = kMarkupPattern.lastIndex - matchLength;
        // 本次匹配的末尾位置
        const tagEndPos = kMarkupPattern.lastIndex;

        if (lastTextPos > -1) {
            // 处理文本，eg. hello world
            // 上次匹配的末尾位置 + 本次匹配的字符长度 小于 本次匹配的末尾位置就说明中间有 text，这个稍微想下其实还是比较好理解的
            // 如果没有 text，lastTextPos + matchLength 都会等于 tagEndPos
                // 上次匹配的末尾位置到本次匹配的起始位置
                const text = data.substring(lastTextPos, tagStartPos);
                // if (text.indexOf('<!') == -1 || text.indexOf('->') == -1) {
                    //过滤innerHTML中的特殊字符
                    let text_filter = text.replace(/\n/g, '').replace(/\t/g, '')
                    if (text_filter.length > 0) {
                        currentParent._innerHtml.push({
                            type: nodeType.TEXT,
                            range: createRange(lastTextPos, tagStartPos),
                            value: text_filter,
                        });
                    }

                // }
            }else if(tempdata){
                currentParent._innerHtml.push({
                    type: nodeType.TEXT,
                    range: [0,0],
                    value: tempdata,
                });
                tempdata=undefined
            }
        
        

        // 记录上次匹配的位置
        lastTextPos = kMarkupPattern.lastIndex;

        // 如果匹配到的标签是模拟标签，就跳过
        if (tagName === frameflag) continue;

        // ...处理 nodeType 为 element 逻辑
        if (!leadingSlash) {
            const attrs = {};
            // 解析 id、class 属性，并且挂到 attrs 对象下
            const kAttributePattern = /(?:^|\s)(id|type|href|value|class|style|src|content|target|onClick|r|rel|name|http-equiv|charset)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi;
            for (let attMatch; (attMatch = kAttributePattern.exec(attributes));) {
                const { 1: key, 2: val } = attMatch;
                // 属性值是否带引号
                const isQuoted = val[0] === `'` || val[0] === `"`;
                attrs[key.toLowerCase()] = isQuoted ? val.slice(1, val.length - 1) : val;

            }

            // debugger
            const currentNode = {
                _tagName: tagName,
                _attrs: attrs,
                _rawAttrs: attributes.slice(1),
                _type: nodeType.ELEMENT,
                // 这里的 range 不一定是正确的 range，需要匹配到闭标签以后更新
                _range: createRange(tagStartPos, tagEndPos),
                _children: [],
                _parentNode: currentParent,
                _innerHtml:[]
            };
            // if(currentNode._tagName=='script'){debugger}
            // console.log('标签',currentNode._tagName)
            currentNode.__proto__ = bodavm.toolsFunc.setProto(currentNode._tagName)
            // debugger
            // currentNode
            if (attrs['id']) {
                root._idelements[attrs['id']] = currentNode
            }

            if (attrs['class']) {
                if (root['_className'][attrs['class']] == undefined) {
                    root['_className'][attrs['class']] = []
                }
                // debugger
                root._className[attrs['class']].push(currentNode)

            }
            let root_tagelement = root._tagelements[tagName]
            if (root_tagelement) {
                root._tagelements[tagName].push(currentNode)
            } else {
                root._tagelements[tagName] = []
                root._tagelements[tagName].push(currentNode)
            }
            // if (currentNode.tagName=='head'){debugger}
            // 将当前节点信息放入到 currentParent 的 children 中
            currentParent._children.push(currentNode);
            // 重置 currentParent 节点为当前节点
            currentParent = currentNode;
            // 将每个节点依次塞到栈中，然后在后面的闭标签中以栈的方式释放
            stack.push(currentParent);
            // debugger
        }

        // 自闭合元素
        const kSelfClosingElements = {
            // area: true,
            // img: true,
            // meta:true,
            // frame:true,
            // embed:true,
            // keygen:true,
            // source:true,
            // base:true,
            // hr:true,
            // br:true,
            input:true,
            // link:true, area: true,
            img: true,
            meta: true,
            link: true,
            area: true,
            br:true,
            // '!DOCTYPE':true,
            // '!--':true
            // ...省略了部分标签
        };
        if (leadingSlash || closingSlash || kSelfClosingElements[tagName]) {
            // 开闭标签名是否匹配，比如有可能写成 <div></div1>，这种就需要异常处理
            if (currentParent._tagName === tagName) {
                // debugger
                // 更新 range，之前处理开标签算出的 range 是不包含闭标签的
                currentParent._range[1] = createRange(-1, Math.max(lastTextPos, tagEndPos))[1];
                // 将处理完的开闭标签踢出
                stack.pop();
                // 将 stack 的最后一个节点赋值给 currentParent
                currentParent = arrBack(stack);
            } else {
                // <div></div1>，异常直接从栈中踢出，不更新 range
                stack.pop();
                currentParent = arrBack(stack);
            }
        }
    }
    // 通过处理，将 stack 返回就是最终的结果
    // debugger
    return stack;
}
