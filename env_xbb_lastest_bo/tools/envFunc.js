// 浏览器接口具体的实现
!function () {

    bodavm.envFunc.Document_body_get = function () {
        // debugger
        domParserbody = null
        bodavm.toolsFunc.traverse2(bodavm.memory.domParser, node => {
            if (node.nodeName === 'body') {
                //   debugger
                domParserbody = node;
                // return node
            }
        });
        if (bodavm.memory.cache['Document_body_get']['this'] == this && bodavm.memory.cache['Document_body_get']['domParserbody'] == domParserbody) {
            console.log_copy(`Document_body_get 已存在缓存,直接获取`);
            return bodavm.memory.cache['Document_body_get']['res']
        }
        let body = {}
        body.__proto__ = HTMLBodyElement.prototype;
        if (domParserbody == null) {
            bodavm.memory.cache['Document_body_get']['this'] = this
            bodavm.memory.cache['Document_body_get']['res'] = null
            bodavm.memory.cache['Document_body_get']['domParserbody'] = domParserbody
            console.log_copy(`Document_body_get ->`, `res->`, null);

            bodavm.toolsFunc.setProtoAttr(body, null)
            return null
        }
        bodavm.toolsFunc.setProtoAttr(body, domParserbody)
        bodavm.memory.cache['Document_body_get']['this'] = this
        bodavm.memory.cache['Document_body_get']['res'] = body
        bodavm.memory.cache['Document_body_get']['domParserbody'] = domParserbody

        console.log_copy(`Document_body_get ->`, `res->`, body);

        return body
    }


    bodavm.envFunc.Document_scripts_get = function () {
        // debugger
        // domParserbody=null
        if (bodavm.memory.cache['Document_scripts_get']['this'] == this && bodavm.memory.cache['Document_scripts_get']['domParser'] == bodavm.memory.domParser) {
            console.log_copy(`Document_body_get 已存在缓存,直接获取`);
            return bodavm.memory.cache['Document_scripts_get']['res']
        }
        bodavm.memory.cache['Document_scripts_get']['res'].__proto__ = Array.prototype
        bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
            debugger
            if (node.nodeName === 'script') {
                let mynode = new HTMLScriptElement('bobo')
                bodavm.toolsFunc.setProtoAttr(mynode, node)
                bodavm.memory.cache['Document_scripts_get']['res'].push(mynode);
            }
        });
        bodavm.memory.cache['Document_scripts_get']['this'] = this
        // res=[]
        bodavm.memory.cache['Document_scripts_get']['domParser'] = bodavm.memory.domParser
        bodavm.memory.cache['Document_scripts_get']['res'].__proto__ = HTMLCollection.prototype
        // debugger
        console.log_copy(`Document_scripts_get res->`, bodavm.memory.cache['Document_scripts_get']['res'])

        return bodavm.memory.cache['Document_scripts_get']['res']
    }

    bodavm.envFunc.Document_createElement = function () {
        let arg = arguments[0]
        // res={}
        res = bodavm.toolsFunc.setProto(arg)
        domParser = { nodeName: arg, childNodes: [], attrs: [] }
        bodavm.toolsFunc.setProtoAttr(res, domParser)
        console.log_copy(`Document_createElement arg->`, arg, ' -> res->', res)
        return res
    }


    bodavm.envFunc.Document_lastModified_get = function Document_lastModified_get() {
        let date = new Date();
        let month = date.getMonth() + 1
        month = month > 11 ? month : '0' + month
        let day = date.getDate()
        let year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let time = `${month}/${day}/${year} ${hours}->${minutes}->${seconds}`
        console.log_copy(`Document_lastModified_get `, `${time}  `);
        return time;
    }

    bodavm.envFunc.Document_getElementById = function Document_getElementById() {
        // debugger
        if (bodavm.config.isdebug) { debugger };

        let id = arguments[0]
        // let res = bodaobj.document.getElementById(id)
        let result = null;
        bodavm.toolsFunc.traverse(bodavm.memory.domParser, node => {
            if (node.attrs && node.attrs.some(attr => attr.name === 'id' && attr.value === id)) {
                result = node;
            }
        });

        // if (bodavm.memory.cache['Document_getElementById']['this']==this && bodavm.memory.cache['Document_getElementById']['domParser']==bodavm.memory.domParser ){
        //     console.log_copy(`Document_body_get 已存在缓存,直接获取`);
        //     return bodavm.memory.cache['Document_getElementById']['id']
        // }

        if (result) {
            if (bodavm.memory.cache['Document_getElementById']['id'][id]) {
                value = bodavm.memory.cache['Document_getElementById']['id'][id]
                console.log_copy(`Document_getElementById 已存在,直接从cache中取值`, 'res- >', value)
                return value
            }
            // // debugger
            // bodavm.memory.cache['Document_getElementById']['this']=this
            // bodavm.memory.cache['Document_getElementById']['this']==this
            // let value={}
            value = bodavm.toolsFunc.setProto(result.nodeName)
            bodavm.memory.cache['Document_getElementById']['id'][id] = value
            // value._boarg = res  //防止this丢失
            bodavm.toolsFunc.setProtoAttr(value, result)
            console.log_copy(`Document_getElementById `, `id->${id}`, ` res->${value}`);
            return value
        } else {
            console.log_copy(`Document_getElementById `, `id->${id}`, ` res->${null}`);
            return null

        }

    }

    bodavm.envFunc.Document_getElementsByName = function () {
        // debugger
        let eleResult = [];
        let eleName = arguments[0]


        let cacheValue = bodavm.memory.cache['Document_getElementsByName']['eleName'][eleName]
        if (cacheValue) {
            console.log_copy(`Document_getElementsByName 已存在,直接从cache中取值`, 'res- >', cacheValue)

            return cacheValue
        }
        // function myTraverse(node){
        //     if (node.)
        // }
        let getParentDom = bodavm.toolsFunc.traverseGetParent(bodavm.memory.domParser)

        bodavm.toolsFunc.traverse(getParentDom, node => {
            if (node.attrs && node.attrs.find(attr => attr.name === 'name' && attr.value === eleName)) {
                let ele = bodavm.toolsFunc.setProto(node.nodeName)
                bodavm.toolsFunc.setProtoAttr(ele, node)
                eleResult.push(ele);
            }

        })

        eleResult.__proto__ = NodeList.prototype
        bodavm.memory.cache['Document_getElementsByName']['eleName'][eleName] = eleResult
        console.log_copy(`Document_getElementsByName eleName -> ${eleName} ->`, 'res- >', eleResult)

        return eleResult
    }




    bodavm.envFunc.MimeTypeArray_namedItem = function MimeTypeArray_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.MimeTypeArray_item = function MimeTypeArray_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.Plugin_namedItem = function Plugin_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.Plugin_item = function Plugin_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.PluginArray_namedItem = function PluginArray_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.PluginArray_item = function PluginArray_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {
        return bodavm.memory.globalInit.mimeTypeArray;
    }
    bodavm.envFunc.MimeType_suffixes_get = function MimeType_suffixes_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "suffixes");
    }
    bodavm.envFunc.MimeType_enabledPlugin_get = function MimeType_enabledPlugin_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "enabledPlugin");
    }
    bodavm.envFunc.MimeType_description_get = function MimeType_description_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_length_get = function Plugin_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.Plugin_filename_get = function Plugin_filename_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "filename");
    }
    bodavm.envFunc.Plugin_description_get = function Plugin_description_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_name_get = function Plugin_name_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "name");
    }
    bodavm.envFunc.PluginArray_length_get = function PluginArray_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.MimeType_type_get = function MimeType_type_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "type");
    }
    bodavm.envFunc.MimeTypeArray_length_get = function MimeTypeArray_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }

}();
// 