// 浏览器接口具体的实现
;
(function () {
    // bodavm.envFunc.RTCPeerConnection_onicecandidate_set=function (){
        
    // }
    bodavm.envFunc.OfflineAudioContext_oncomplete_set=function (){
        let arg=arguments[0]
        let event={
            'self':this,
            'callback':arg
        }
        bodavm.memory.asyncEvent['OfflineAudioContext']['oncomplete'].push(event)
        bodavm.toolsFunc.setProtoAttr.call(this,'oncomplete',arg)
        console.log_copy(`OfflineAudioContext_oncomplete_set arg -> `,arg)

        return arg
    }
    bodavm.envFunc.OfflineAudioContext_startRendering=function (){
        // debugger
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'startRendering')
        if (islive){
           console.log_copy(`OfflineAudioContext_startRendering cache已存在返回 -> `,islive)
           return islive
        }
        let renderbuf=new AudioBuffer('bobo')
        let promise=new Promise((resolve, reject) => {
            resolve(renderbuf);
        });
        bodavm.toolsFunc.setProtoAttr.call(this,'startRendering',promise)

        return promise
    }
    bodavm.envFunc.AudioScheduledSourceNode_start=function (){
        let arg=arguments[0]
        console.log_copy(`AudioScheduledSourceNode_start arg -> `,arg)
    }
    bodavm.envFunc.BaseAudioContext_destination_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'destination')
        if (islive){
           console.log_copy(`BaseAudioContext_destination_get cache已存在返回 -> `,islive)
           return islive
        }
        let destination=new AudioDestinationNode('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'destination',destination)
         console.log_copy(`BaseAudioContext_destination_get ->destination -> `,destination)

    }
    bodavm.envFunc.AudioNode_connect=function (){
        // debugger
        let res=arguments[0]
        console.log_copy(`AudioNode_connect res -> `,res)

        return res

    }
    bodavm.envFunc.DynamicsCompressorNode_release_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'release')
         if (islive){
            console.log_copy(`DynamicsCompressorNode_release_get cache已存在返回 -> `,islive)
            return islive
         }
         let release=new AudioParam('bobo')
         bodavm.toolsFunc.setProtoAttr.call(this,'release',release)
         console.log_copy(`DynamicsCompressorNode_release_get ->knee -> `,release)

         return release

    }
    bodavm.envFunc.DynamicsCompressorNode_attack_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'attack')
         if (islive){
            console.log_copy(`DynamicsCompressorNode_attack_get cache已存在返回 -> `,islive)
            return islive
         }
         let attack=new AudioParam('bobo')
         bodavm.toolsFunc.setProtoAttr.call(this,'attack',attack)
         console.log_copy(`DynamicsCompressorNode_attack_get ->knee -> `,attack)

         return attack

    }
    bodavm.envFunc.DynamicsCompressorNode_reduction_get=function (){
        console.log_copy(`DynamicsCompressorNode_reduction_get 默认返回0`)
        return 0
    }
    bodavm.envFunc.DynamicsCompressorNode_ratio_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'ratio')
         if (islive){
            console.log_copy(`DynamicsCompressorNode_ratio_get cache已存在返回 -> `,islive)
            return islive
         }
         let ratio=new AudioParam('bobo')
         bodavm.toolsFunc.setProtoAttr.call(this,'ratio',ratio)
         console.log_copy(`DynamicsCompressorNode_ratio_get ->knee -> `,ratio)

         return ratio

    }
    bodavm.envFunc.DynamicsCompressorNode_knee_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'knee')
         if (islive){
            console.log_copy(`DynamicsCompressorNode_knee_get cache已存在返回 -> `,islive)
            return islive
         }
         let knee=new AudioParam('bobo')
         bodavm.toolsFunc.setProtoAttr.call(this,'knee',knee)
         console.log_copy(`DynamicsCompressorNode_knee_get ->knee -> `,knee)

         return knee

    }

    bodavm.envFunc.DynamicsCompressorNode_threshold_get=function (){
        let islive=bodavm.toolsFunc.getProtoAttr.call(this,'threshold')
         if (islive){
            console.log_copy(`DynamicsCompressorNode_threshold_get cache已存在返回 -> `,islive)
            return islive
         }
         let thres=new AudioParam('bobo')
         bodavm.toolsFunc.setProtoAttr.call(this,'threshold',thres)
         console.log_copy(`DynamicsCompressorNode_threshold_get ->thres -> `,thres)

         return thres

    }
    bodavm.envFunc.WebGLRenderingContext_clear=function (){
        let arg=arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this,'clear',arg)
        console.log_copy(`WebGLRenderingContext_clear ->arg -> `,arg)
    }
    bodavm.envFunc.WebGLRenderingContext_depthFunc=function (){
        let arg=arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this,'depthFunc',arg)
        console.log_copy(`WebGLRenderingContext_depthFunc ->arg -> `,arg)
    }
    bodavm.envFunc.WebGLRenderingContext_enable=function (){
        let arg=arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this,'enable',arg)
        console.log_copy(`WebGLRenderingContext_enable ->arg -> `,arg)
    }
    bodavm.envFunc.WebGLRenderingContext_clearColor=function (){
        let arg=arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this,'clearColer',arg)
        console.log_copy(`WebGLRenderingContext_clearColor ->arg -> `,arg)
    }
    bodavm.envFunc.BaseAudioContext_createDynamicsCompressor=function (){
        let dynami=new DynamicsCompressorNode('bobo')
        console.log_copy(`BaseAudioContext_createDynamicsCompressor ->res -> `,dynami)
        return dynami
    }
    bodavm.envFunc.AudioParam_value_set=function (){
        let arg=arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this,'value',arg)
        console.log_copy(`AudioParam_value_set ->arg -> `,arg)
        return arg
    }
    bodavm.envFunc.OscillatorNode_frequency_get=function (){
        if (bodavm.memory.cache['OscillatorNode_frequency_get']['res'] && bodavm.memory.cache['OscillatorNode_frequency_get']['this']==this){
            console.log_copy(`OscillatorNode_frequency_get -> cache已存在直接返回 `)

            return bodavm.memory.cache['OscillatorNode_frequency_get']['res']
        }
        let freq=new AudioParam('bobo')
        console.log_copy(`OscillatorNode_frequency_get ->res -> `,freq)
        bodavm.memory.cache['OscillatorNode_frequency_get']['res']=freq
        bodavm.memory.cache['OscillatorNode_frequency_get']['this']=this
        return freq
    }
    bodavm.envFunc.OscillatorNode_type_set=function (){
        let arg=arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this,'type',arg)
        console.log_copy(`OscillatorNode_type_set ->arg -> `,arg)

        return arg
    }
    bodavm.envFunc.BaseAudioContext_createOscillator=function (){
        let oscillator =new OscillatorNode('bobo')
        console.log_copy(`BaseAudioContext_createOscillator ->res -> `,oscillator)
        return oscillator
    }
    bodavm.envFunc.WebGL2RenderingContext_getSupportedExtensions=function (){
        // let arg=arguments[0]
        let ext=['EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'EXT_disjoint_timer_query_webgl2', 'EXT_float_blend', 'EXT_texture_compression_bptc',
         'EXT_texture_compression_rgtc', 'EXT_texture_filter_anisotropic', 'EXT_texture_norm16', 'KHR_parallel_shader_compile', 
         'OES_draw_buffers_indexed', 'OES_texture_float_linear', 'OVR_multiview2', 
         'WEBGL_compressed_texture_s3tc', 'WEBGL_compressed_texture_s3tc_srgb', 'WEBGL_debug_renderer_info',
          'WEBGL_debug_shaders', 'WEBGL_lose_context', 'WEBGL_multi_draw', 'WEBGL_provoking_vertex']
        console.log_copy(`WebGL2RenderingContext_getSupportedExtensions ->res -> `,ext)
        
        return ext

    }
    bodavm.envFunc.WebGL2RenderingContext_canvas_get=function (){
        let cavans=new HTMLCanvasElement('bobo')
        console.log_copy(`WebGL2RenderingContext_canvas_get ->res -> `,cavans)

        return cavans
    }
    bodavm.envFunc.WebGL2RenderingContext_drawArrays=function (){
        console.log_copy(`WebGL2RenderingContext_drawArrays -> args ->${arguments[0]} ->${arguments[1]} ->${arguments[2]}`)
        bodavm.toolsFunc.setProtoAttr.call(this,'drawArrays',arguments)
    }
    bodavm.envFunc.WebGL2RenderingContext_uniform2f=function (){
        console.log_copy(`WebGL2RenderingContext_uniform2f -> arg0 ->${arguments[0]} -> arg1 -> ${arguments[1]} -> arg2 -> ${arguments[2]}`)
        bodavm.toolsFunc.setProtoAttr.call(this,'uniform2f',arguments)
        // return 0
    }

    bodavm.envFunc.WebGL2RenderingContext_vertexAttribPointer=function (){
        console.log_copy(`WebGL2RenderingContext_vertexAttribPointer ->args -> ${arguments}`)
        // return 0
        bodavm.toolsFunc.setProtoAttr.call(this,'vertexAttribPointer',arguments)

    }   

    bodavm.envFunc.WebGL2RenderingContext_enableVertexAttribArray=function (){
        console.log_copy(`WebGL2RenderingContext_enableVertexAttribArray -> arg ->${arguments[0]}`)
        // return 0
        bodavm.toolsFunc.setProtoAttr.call(this,'enableVertexAttribArray',arguments[0])
    }  

     bodavm.envFunc.WebGL2RenderingContext_getUniformLocation=function (){
        console.log_copy(`WebGL2RenderingContext_getUniformLocation -> arg0 ->${arguments[0]} -> arg1 -> ${arguments[1]}  默认返回null`)
        return  null
        // return 0
    }

    bodavm.envFunc.WebGL2RenderingContext_getAttribLocation=function (){
        console.log_copy(`WebGL2RenderingContext_getAttribLocation -> arg0 ->${arguments[0]} -> arg1 -> ${arguments[1]}  默认返回0`)
        return 0
    }
    bodavm.envFunc.WebGL2RenderingContext_useProgram=function (){
        console.log_copy(`WebGL2RenderingContext_useProgram -> arg ->  ${arguments[0]}`)
        bodavm.toolsFunc.setProtoAttr.call(this,'useProgram',arguments)
    }
    bodavm.envFunc.WebGL2RenderingContext_linkProgram=function (){
        console.log_copy(`WebGL2RenderingContext_linkProgram -> arg ->  ${arguments[0]}`)
        bodavm.toolsFunc.setProtoAttr.call(this,'linkProgram',arguments)
    }
    bodavm.envFunc.WebGL2RenderingContext_attachShader=function (){
        console.log_copy(`WebGL2RenderingContext_attachShader -> arg0 -> ${arguments[0]} -> arg1 -> ${arguments[1]}`)
        bodavm.toolsFunc.setProtoAttr.call(this,'attachShader',arguments)
    }
    bodavm.envFunc.WebGL2RenderingContext_compileShader=function (){
        console.log_copy(`WebGL2RenderingContext_compileShader -> arg ->`,arguments[0])
        bodavm.toolsFunc.setProtoAttr.call(this,'compileShader',arguments[0])
    }
    bodavm.envFunc.WebGL2RenderingContext_shaderSource=function (){
        // let createShader=new WebGLShader('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this,'shaderSource',arguments)
        console.log_copy(`WebGL2RenderingContext_shaderSource -> arg0 ->`,arguments[0],`-> arg1 ->`,arguments[1])
        // return createShader
    }
    bodavm.envFunc.WebGL2RenderingContext_createShader=function (){
        let createShader=new WebGLShader('bobo')
        console.log_copy(`WebGL2RenderingContext_createShader -> arg -> ${arguments[0]} -> res ->`,createShader)
        return createShader
    }

    bodavm.envFunc.WebGL2RenderingContext_createProgram=function (){
        let program=new WebGLProgram('bobo')
        console.log_copy(`WebGL2RenderingContext_createProgram -> -> res ->`,program)

        return program
    }
    bodavm.envFunc.WebGL2RenderingContext_bufferData=function (){
        
        console.log_copy(`WebGL2RenderingContext_bufferData -> arg0 -> ${arguments[0]} -> arg1 -> ${arguments[1]} -> arg2 -> ${arguments[2]}`,)
        bodavm.toolsFunc.setProtoAttr.call(this,'bufferData',arguments)
        // return buf
    }

    bodavm.envFunc.WebGL2RenderingContext_bindBuffer=function (){
        
        console.log_copy(`WebGL2RenderingContext_bindBuffer -> arg0 -> ${arguments[0]} -> arg1 ->${arguments[1]}`)
        bodavm.toolsFunc.setProtoAttr.call(this,'bindBuffer',arguments)
        // return buf
    }
    bodavm.envFunc.WebGL2RenderingContext_createBuffer=function (){
        let buf=new WebGLBuffer('bobo')
        console.log_copy(`WebGL2RenderingContext_createBuffer -> res ->`,buf)
        return buf
    }
    bodavm.envFunc.WebGLRenderingContext_getParameter = function WebGLRenderingContext_getParameter() {
        let pname = Number(arguments[0])
        if (bodavm.config.isdebug) { debugger }
        ;
        let resDict = {
            37446: `ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)`,
            37445: 'Google Inc. (Intel)',
            3412: 8,
            3414: 24,
            3411: 8,
            34047: null,
            35661: 32,
            34076: 16384,
            36349: 1024,
            34024: 16384,
            34930: 16,
            3379: 16384,
            36348: 30,
            34921: 16,
            35660: 16,
            36347: 4096,
            35724: 'WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)',
            3415: 0,
            7938: 'WebGL 1.0 (OpenGL ES 2.0 Chromium)',
            33902: new Float32Array([1,1]),
            33901: new Float32Array([1,1024]),
            3386: new Int32Array([32767,32767]),
            3410:8,
            7937:'WebKit WebGL',
            7936:'WebKit'
        }
        let resgetParameter = resDict[pname]
        if (resgetParameter === undefined) return console.log_copy(`WebGLRenderingContext_getParameter `, `${pname} 未实现`);
        console.log_copy(`WebGLRenderingContext_getParameter `, `${pname}  `, `-> res ->${resgetParameter}`)
        return resgetParameter
    }
    bodavm.envFunc.WebGLShaderPrecisionFormat_precision_get = function WebGLShaderPrecisionFormat_precision_get() {
        console.log_copy(`WebGLShaderPrecisionFormat_precision_get `, 23);
        if (bodavm.config.isdebug) { debugger };

        return 23
    }
    bodavm.envFunc.WebGLShaderPrecisionFormat_rangeMax_get = function WebGLShaderPrecisionFormat_rangeMax_get() {
        console.log_copy(`WebGLShaderPrecisionFormat_rangeMax_get `, 127);
        if (bodavm.config.isdebug) { debugger };

        return 127
    }
    bodavm.envFunc.WebGLShaderPrecisionFormat_rangeMin_get = function WebGLShaderPrecisionFormat_rangeMin_get() {
        console.log_copy(`WebGLShaderPrecisionFormat_rangeMin_get `, 127);
        if (bodavm.config.isdebug) { debugger };

        return 127
    }
    bodavm.envFunc.WebGLRenderingContext_getSupportedExtensions = function WebGLRenderingContext_getSupportedExtensions() {
        if (bodavm.config.isdebug) { debugger }
        let SupportedExtensions = [
            "ANGLE_instanced_arrays",
            "EXT_blend_minmax",
            "EXT_color_buffer_half_float",
            "EXT_disjoint_timer_query",
            "EXT_float_blend",
            "EXT_frag_depth",
            "EXT_shader_texture_lod",
            "EXT_texture_compression_bptc",
            "EXT_texture_compression_rgtc",
            "EXT_texture_filter_anisotropic",
            "WEBKIT_EXT_texture_filter_anisotropic",
            "EXT_sRGB",
            "KHR_parallel_shader_compile",
            "OES_element_index_uint",
            "OES_fbo_render_mipmap",
            "OES_standard_derivatives",
            "OES_texture_float",
            "OES_texture_float_linear",
            "OES_texture_half_float",
            "OES_texture_half_float_linear",
            "OES_vertex_array_object",
            "WEBGL_color_buffer_float",
            "WEBGL_compressed_texture_s3tc",
            "WEBKIT_WEBGL_compressed_texture_s3tc",
            "WEBGL_compressed_texture_s3tc_srgb",
            "WEBGL_debug_renderer_info",
            "WEBGL_debug_shaders",
            "WEBGL_depth_texture",
            "WEBKIT_WEBGL_depth_texture",
            "WEBGL_draw_buffers",
            "WEBGL_lose_context",
            "WEBKIT_WEBGL_lose_context",
            "WEBGL_multi_draw"
        ]
        console.log_copy(`WebGLRenderingContext_getSupportedExtensions=== `, `${SupportedExtensions}  `);
        return SupportedExtensions
    }
    bodavm.envFunc.WebGLRenderingContext_canvas_get = function WebGLRenderingContext_canvas_get() {
        // debugger
        var canvas_ = bodavm.toolsFunc.getProtoAttr.call(this, 'canvas')
        console.log_copy(`WebGLRenderingContext_canvas_get res->`, canvas_)
        return canvas_

    }
    bodavm.envFunc.WebGLRenderingContext_drawArrays = function WebGLRenderingContext_drawArrays() {
        let mode = arguments[0]
        let first = arguments[1]
        let count = arguments[2]
        if (bodavm.config.isdebug) { debugger };
        bodavm.toolsFunc.setProtoAttr.call(this, 'drawArrays', arguments)

        console.log_copy(`WebGLRenderingContext_drawArrays `, `mode:${mode}  first:${first}  count:${count}   `);

    }
    bodavm.envFunc.WebGLRenderingContext_uniform2f = function WebGLRenderingContext_uniform2f() {
        let location222 = arguments[0]
        let v0 = arguments[1]
        let v1 = arguments[2]
        if (bodavm.config.isdebug) { debugger };
        bodavm.toolsFunc.setProtoAttr.call(this, 'uniform2f', arguments)

        console.log_copy(`WebGLRenderingContext_uniform2f `, `location:${location222} v0:${v0}  v1:${v1}  `);
    }
    bodavm.envFunc.WebGLRenderingContext_vertexAttribPointer = function WebGLRenderingContext_vertexAttribPointer() {
        let index = arguments[0]
        let size = arguments[1]
        let type = arguments[2]
        let normalized = arguments[3]
        let stride = arguments[4]
        let offset = arguments[5]
        if (bodavm.config.isdebug) { debugger };
        bodavm.toolsFunc.setProtoAttr.call(this, 'vertexAttribPointer', arguments)

        console.log_copy(`WebGLRenderingContext_vertexAttribPointer `, `index:${index}  size:${size} type:${type}  normalized:${normalized}  stride:${stride}  offset${offset}   `);
    }
    bodavm.envFunc.WebGLRenderingContext_enableVertexAttribArray = function WebGLRenderingContext_enableVertexAttribArray() {
        let index = arguments[0]; if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_enableVertexAttribArray `, `index:${index}  `);
        bodavm.toolsFunc.setProtoAttr.call(this, 'enableVertexAttribArray', index)

    }
    bodavm.envFunc.WebGLRenderingContext_getUniformLocation = function WebGLRenderingContext_getUniformLocation() {
        let program = arguments[0]
        let name = arguments[1];
        if (bodavm.config.isdebug) { debugger }; console.log_copy(`WebGLRenderingContext_getUniformLocation `, `program:${program} name:${name}`,);
        return null
    }
    bodavm.envFunc.WebGLRenderingContext_getAttribLocation = function WebGLRenderingContext_getAttribLocation() {
        let program = arguments[0]
        let name = arguments[1]
        console.log_copy(`WebGLRenderingContext_getAttribLocation `, `program:${program} name:${name}  `, `默认返回0`);

        if (bodavm.config.isdebug) { debugger };
        return 0
    }
    bodavm.envFunc.WebGLRenderingContext_useProgram = function WebGLRenderingContext_useProgram() {
        let program = arguments[0]
        console.log_copy(`WebGLRenderingContext_useProgram `, `program:${program}  `);
        if (bodavm.config.isdebug) { debugger };
        bodavm.toolsFunc.setProtoAttr.call(this, 'useProgram', program)

    }
    bodavm.envFunc.WebGLRenderingContext_linkProgram = function WebGLRenderingContext_linkProgram() {
        let program = arguments[0]
        console.log_copy(`WebGLRenderingContext_linkProgram `, `program:${program}  `);
        if (bodavm.config.isdebug) { debugger };

        bodavm.toolsFunc.setProtoAttr.call(this, 'linkProgram', program)

    }
    bodavm.envFunc.WebGLRenderingContext_attachShader = function WebGLRenderingContext_attachShader() {
        let program = arguments[0]
        let shader = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_attachShader `, `program:${program}  shader:${shader}   `);
        bodavm.toolsFunc.setProtoAttr.call(this, 'attachShader', arguments)

    }
    bodavm.envFunc.WebGLRenderingContext_compileShader = function WebGLRenderingContext_shaderSource() {
        let compileShader = arguments[0]
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_compileShader `, `${compileShader}  `);
        bodavm.toolsFunc.setProtoAttr.call(this, 'compileShader', compileShader)

    }
    bodavm.envFunc.WebGLRenderingContext_shaderSource = function WebGLRenderingContext_shaderSource() {
        let shader = arguments[0]
        let source = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_shaderSource `, `shader:${shader}  source:${source}  `);
        bodavm.toolsFunc.setProtoAttr.call(this, 'shaderSource', arguments)
    }
    bodavm.envFunc.WebGLRenderingContext_createShader = function WebGLRenderingContext_createShader() {
        let type = arguments[0]
        console.log_copy(`WebGLRenderingContext_createShader `, `${type}  `);
        if (bodavm.config.isdebug) { debugger };

        if (type == 35633) {
            let shader = new WebGLShader('bobo')
            // Object.setPrototypeOf(shader, bodavm.memory.globalobj['WebGLShader'].prototype)
            return shader
        }
        else if (type == 35632) {
            let shader = new WebGLShader('bobo')
            // Object.setPrototypeOf(shader, bodavm.memory.globalobj['WebGLShader'].prototype)
            return shader
        }
    }
    bodavm.envFunc.WebGLRenderingContext_createProgram = function WebGLRenderingContext_createProgram() {
        if (bodavm.config.isdebug) { debugger };

        let program = new WebGLProgram('bobo')
        console.log_copy(`WebGLRenderingContext_createProgram `, `${program}  `);
        return program;
    }


    bodavm.envFunc.WebGLRenderingContext_bufferData = function WebGLRenderingContext_bufferData() {
        if (bodavm.config.isdebug) { debugger }
        let r1 = arguments[0]
        let r2 = arguments[1]
        let r3 = arguments[2]
        let r4 = arguments[3]
        let r5 = arguments[4]
        console.log_copy(`WebGLRenderingContext_bufferData `, `r1:${r1},r2:${r2},r3:${r3},r4:${r4},r5:${r5}  `);
        bodavm.toolsFunc.setProtoAttr.call(this, "bufferData", arguments)

    }
    bodavm.envFunc.WebGLRenderingContext_bindBuffer = function WebGLRenderingContext_bindBuffer() {
        if (bodavm.config.isdebug) { debugger }
        let r1 = arguments[0]
        let r2 = arguments[1]
        console.log_copy(`WebGLRenderingContext_bindBuffer `, `r1:${r1}  r2:${r2}  `);
        bodavm.toolsFunc.setProtoAttr.call(this, "bindBuffer", arguments)
    }

    bodavm.envFunc.WebGLRenderingContext_createBuffer = function () {
        if (bodavm.config.isdebug) { debugger }
        let buffer = new WebGLBuffer('bobo')
        console.log_copy(`WebGLRenderingContext_createBuffer `, `${buffer}  `);

        return buffer;

    }
    
    bodavm.envFunc.CanvasRenderingContext2D_textBaseline_set = function () {
        let arg = arguments[0]

        bodavm.toolsFunc.setProtoAttr.call(this, 'textBaseline', arg)
        console.log_copy(`CanvasRenderingContext2D_textBaseline_set textBaseline ->`, arg)
        return arg
    }
    bodavm.envFunc.CanvasRenderingContext2D_font_set = function () {
        let arg = arguments[0]

        bodavm.toolsFunc.setProtoAttr.call(this, 'font', arg)
        console.log_copy(`CanvasRenderingContext2D_font_set font ->`, arg)
        return arg
    }
    bodavm.envFunc.CanvasRenderingContext2D_fillStyle_set = function () {
        let arg = arguments[0]

        bodavm.toolsFunc.setProtoAttr.call(this, 'fillStyle', arg)
        console.log_copy(`CanvasRenderingContext2D_fillStyle_set fillStyle ->`, arg)
        return arg
    }
    bodavm.envFunc.CanvasRenderingContext2D_fillRect = function () {
        let arg = arguments[0]

        bodavm.toolsFunc.setProtoAttr.call(this, 'fillStyle', arguments)
        console.log_copy(`CanvasRenderingContext2D_fillRect fillRect ->`, arguments)
        return arg
    }
    bodavm.envFunc.CanvasRenderingContext2D_fillText = function () {
        let arg = arguments[0]

        bodavm.toolsFunc.setProtoAttr.call(this, 'fillText', arguments)
        console.log_copy(`CanvasRenderingContext2D_fillText fillText ->`, arguments)
        return arg
    }
    bodavm.envFunc.BatteryManager_level_get = function () {
        // debugger
        console.log_copy(`BatteryManager_level_get res-> `, '99%')
        return '99%'
    }
    bodavm.envFunc.BatteryManager_charging_get = function () {
        // debugger
        console.log_copy(`BatteryManager_charging_get res-> `, true)
        return true

    }
    bodavm.envFunc.BatteryManager_chargingTime_get = function () {
        // debugger
        console.log_copy(`BatteryManager_chargingTime_get res-> `, 400)

        return 400
    }
    bodavm.envFunc.WebGLRenderingContext_getContextAttributes = function WebGLRenderingContext_getContextAttributes() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let context = {
            "alpha": true,
            "antialias": true,
            "depth": true,
            "desynchronized": false,
            "failIfMajorPerformanceCaveat": false,
            "powerPreference": "default",
            "premultipliedAlpha": true,
            "preserveDrawingBuffer": false,
            "stencil": false,
            "xrCompatible": false
        };
        console.log_copy(`WebGLRenderingContext_getContextAttributes `, `context->${JSON.stringify_bo(context)}`);
        return context;
    };
    
    bodavm.envFunc.WebGLRenderingContext_getExtension = function WebGLRenderingContext_getExtension() {
        if (bodavm.config.isdebug) { debugger }
        let getExtension = arguments[0]
        console.log_copy(`WebGLRenderingContext_getExtension `, `${getExtension}  `);
        let info = { _boisinit: bodavm.config.isinit }
        switch (getExtension) {
            case "WEBGL_debug_renderer_info":

                WebGLDebugRendererInfo = function WebGLDebugRendererInfo() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLDebugRendererInfo, "WebGLDebugRendererInfo");
                info = Object.setPrototypeOf(info, WebGLDebugRendererInfo.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDebugRendererInfo.prototype, "UNMASKED_VENDOR_WEBGL", { configurable: false, enumerable: true, writable: false, value: 37445 });
                bodavm.toolsFunc.defineProperty(WebGLDebugRendererInfo.prototype, "UNMASKED_RENDERER_WEBGL", { configurable: false, enumerable: true, writable: false, value: 37446 });
                delete WebGLDebugRendererInfo.prototype.constructor;
                delete WebGLDebugRendererInfo
                break;
            case "ANGLE_instanced_arrays":

                ANGLEInstancedArrays = function ANGLEInstancedArrays() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(ANGLEInstancedArrays, "ANGLEInstancedArrays");
                info = Object.setPrototypeOf(info, ANGLEInstancedArrays.prototype)
                bodavm.toolsFunc.defineProperty(ANGLEInstancedArrays.prototype, "VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE", { configurable: false, enumerable: true, writable: false, value: 35070 });
                bodavm.toolsFunc.defineProperty(ANGLEInstancedArrays.prototype, "drawArraysInstancedANGLE", { configurable: true, enumerable: true, writable: true, value: function drawArraysInstancedANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "drawArraysInstancedANGLE", arguments) } });
                bodavm.toolsFunc.defineProperty(ANGLEInstancedArrays.prototype, "drawElementsInstancedANGLE", { configurable: true, enumerable: true, writable: true, value: function drawElementsInstancedANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "drawElementsInstancedANGLE", arguments) } });
                bodavm.toolsFunc.defineProperty(ANGLEInstancedArrays.prototype, "vertexAttribDivisorANGLE", { configurable: true, enumerable: true, writable: true, value: function vertexAttribDivisorANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "vertexAttribDivisorANGLE", arguments) } });
                delete ANGLEInstancedArrays.prototype.constructor;;
                delete ANGLEInstancedArrays
                break;
            case "EXT_blend_minmax":
                EXTBlendMinMax = function EXTBlendMinMax() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTBlendMinMax, "EXTBlendMinMax");
                info = Object.setPrototypeOf(info, EXTBlendMinMax.prototype)
                bodavm.toolsFunc.defineProperty(EXTBlendMinMax.prototype, "MIN_EXT", { configurable: false, enumerable: true, writable: false, value: 32775 });
                bodavm.toolsFunc.defineProperty(EXTBlendMinMax.prototype, "MAX_EXT", { configurable: false, enumerable: true, writable: false, value: 32776 });
                delete EXTBlendMinMax.prototype.constructor;
                delete EXTBlendMinMax

                break;
            case "EXT_color_buffer_half_float":
                EXTColorBufferHalfFloat = function EXTColorBufferHalfFloat() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTColorBufferHalfFloat, "EXTColorBufferHalfFloat");
                info = Object.setPrototypeOf(info, EXTColorBufferHalfFloat.prototype)
                bodavm.toolsFunc.defineProperty(EXTColorBufferHalfFloat.prototype, "RGBA16F_EXT", { configurable: false, enumerable: true, writable: false, value: 34842 });
                bodavm.toolsFunc.defineProperty(EXTColorBufferHalfFloat.prototype, "RGB16F_EXT", { configurable: false, enumerable: true, writable: false, value: 34843 });
                bodavm.toolsFunc.defineProperty(EXTColorBufferHalfFloat.prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", { configurable: false, enumerable: true, writable: false, value: 33297 });
                bodavm.toolsFunc.defineProperty(EXTColorBufferHalfFloat.prototype, "UNSIGNED_NORMALIZED_EXT", { configurable: false, enumerable: true, writable: false, value: 35863 });
                delete EXTColorBufferHalfFloat.prototype.constructor;
                delete EXTColorBufferHalfFloat
                break;
            case "EXT_disjoint_timer_query":
                EXTDisjointTimerQuery = function EXTDisjointTimerQuery() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTDisjointTimerQuery, "EXTDisjointTimerQuery");
                info = Object.setPrototypeOf(info, EXTDisjointTimerQuery.prototype)
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "QUERY_COUNTER_BITS_EXT", { configurable: false, enumerable: true, writable: false, value: 34916 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "CURRENT_QUERY_EXT", { configurable: false, enumerable: true, writable: false, value: 34917 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "QUERY_RESULT_EXT", { configurable: false, enumerable: true, writable: false, value: 34918 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "QUERY_RESULT_AVAILABLE_EXT", { configurable: false, enumerable: true, writable: false, value: 34919 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "TIME_ELAPSED_EXT", { configurable: false, enumerable: true, writable: false, value: 35007 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "TIMESTAMP_EXT", { configurable: false, enumerable: true, writable: false, value: 36392 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "GPU_DISJOINT_EXT", { configurable: false, enumerable: true, writable: false, value: 36795 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "beginQueryEXT", { configurable: true, enumerable: true, writable: true, value: function beginQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "beginQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "createQueryEXT", { configurable: true, enumerable: true, writable: true, value: function createQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "createQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "deleteQueryEXT", { configurable: true, enumerable: true, writable: true, value: function deleteQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "deleteQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "endQueryEXT", { configurable: true, enumerable: true, writable: true, value: function endQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "endQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "getQueryEXT", { configurable: true, enumerable: true, writable: true, value: function getQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "getQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "getQueryObjectEXT", { configurable: true, enumerable: true, writable: true, value: function getQueryObjectEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "getQueryObjectEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "isQueryEXT", { configurable: true, enumerable: true, writable: true, value: function isQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "isQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "queryCounterEXT", { configurable: true, enumerable: true, writable: true, value: function queryCounterEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "queryCounterEXT", arguments) } });
                delete EXTDisjointTimerQuery.prototype.constructor;
                delete EXTDisjointTimerQuery

                break;
            case "EXT_float_blend":
                EXTFloatBlend = function EXTFloatBlend() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTFloatBlend, "EXTFloatBlend");
                info = Object.setPrototypeOf(info, EXTFloatBlend.prototype)
                delete EXTFloatBlend.prototype.constructor;
                delete EXTFloatBlend

                break;
            case "EXT_shader_texture_lod":
                EXTShaderTextureLOD = function EXTShaderTextureLOD() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTShaderTextureLOD, "EXTShaderTextureLOD");
                info = Object.setPrototypeOf(info, EXTShaderTextureLOD.prototype)
                delete EXTShaderTextureLOD.prototype.constructor;
                delete EXTShaderTextureLOD

                break;
            case "EXT_frag_depth":
                EXTFragDepth = function EXTFragDepth() { this._boisinit = bodavm.config.isinit }

                bodavm.toolsFunc.safeProto(EXTFragDepth, "EXTFragDepth");
                info = Object.setPrototypeOf(info, EXTFragDepth.prototype)
                delete EXTFragDepth.prototype.constructor;
                delete EXTFragDepth
                break;
            case "EXT_texture_compression_bptc":
                EXTTextureCompressionBPTC = function EXTTextureCompressionBPTC() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTTextureCompressionBPTC, "EXTTextureCompressionBPTC");
                info = Object.setPrototypeOf(info, EXTTextureCompressionBPTC.prototype)
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGBA_BPTC_UNORM_EXT", { configurable: false, enumerable: true, writable: false, value: 36492 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", { configurable: false, enumerable: true, writable: false, value: 36493 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", { configurable: false, enumerable: true, writable: false, value: 36494 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", { configurable: false, enumerable: true, writable: false, value: 36495 });

                delete EXTTextureCompressionBPTC.prototype.constructor;
                delete EXTTextureCompressionBPTC
                break;
            case "EXT_texture_compression_rgtc":
                EXTTextureCompressionRGTC = function EXTTextureCompressionRGTC() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTTextureCompressionRGTC, "EXTTextureCompressionRGTC");
                info = Object.setPrototypeOf(info, EXTTextureCompressionRGTC.prototype)
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_RED_RGTC1_EXT", { configurable: false, enumerable: true, writable: false, value: 36283 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_SIGNED_RED_RGTC1_EXT", { configurable: false, enumerable: true, writable: false, value: 36284 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_RED_GREEN_RGTC2_EXT", { configurable: false, enumerable: true, writable: false, value: 36285 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT", { configurable: false, enumerable: true, writable: false, value: 36286 });
                delete EXTTextureCompressionRGTC.prototype.constructor;;
                delete EXTTextureCompressionRGTC
                break;
            case "EXT_texture_filter_anisotropic":
                EXTTextureFilterAnisotropic = function EXTTextureFilterAnisotropic() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTTextureFilterAnisotropic, "EXTTextureFilterAnisotropic");
                info = Object.setPrototypeOf(info, EXTTextureFilterAnisotropic.prototype)
                bodavm.toolsFunc.defineProperty(EXTTextureFilterAnisotropic.prototype, "TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34046 });
                bodavm.toolsFunc.defineProperty(EXTTextureFilterAnisotropic.prototype, "MAX_TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34047 });
                delete EXTTextureFilterAnisotropic.prototype.constructor;;
                delete EXTTextureFilterAnisotropic
                break;
            case "WEBKIT_EXT_texture_filter_anisotropic":
                EXTTextureFilterAnisotropic = function EXTTextureFilterAnisotropic() { }
                bodavm.toolsFunc.safeProto(EXTTextureFilterAnisotropic, "EXTTextureFilterAnisotropic");
                info = Object.setPrototypeOf(info, EXTTextureFilterAnisotropic.prototype)
                bodavm.toolsFunc.defineProperty(EXTTextureFilterAnisotropic.prototype, "TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34046 });
                bodavm.toolsFunc.defineProperty(EXTTextureFilterAnisotropic.prototype, "MAX_TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34047 });
                delete EXTTextureFilterAnisotropic.prototype.constructor;;
                delete EXTTextureFilterAnisotropic
                break;
            case "EXT_sRGB":
                EXTsRGB = function EXTsRGB() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTsRGB, "EXTsRGB");
                info = Object.setPrototypeOf(info, EXTsRGB.prototype)
                bodavm.toolsFunc.defineProperty(EXTsRGB.prototype, "SRGB_EXT", { configurable: false, enumerable: true, writable: false, value: 35904 });
                bodavm.toolsFunc.defineProperty(EXTsRGB.prototype, "SRGB_ALPHA_EXT", { configurable: false, enumerable: true, writable: false, value: 35906 });
                bodavm.toolsFunc.defineProperty(EXTsRGB.prototype, "SRGB8_ALPHA8_EXT", { configurable: false, enumerable: true, writable: false, value: 35907 });
                bodavm.toolsFunc.defineProperty(EXTsRGB.prototype, "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT", { configurable: false, enumerable: true, writable: false, value: 33296 });
                delete EXTsRGB.prototype.constructor;;
                delete EXTsRGB
                break;
            case "KHR_parallel_shader_compile":
                KHRParallelShaderCompile = function KHRParallelShaderCompile() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(KHRParallelShaderCompile, "KHRParallelShaderCompile");
                info = Object.setPrototypeOf(info, KHRParallelShaderCompile.prototype)
                bodavm.toolsFunc.defineProperty(KHRParallelShaderCompile.prototype, "COMPLETION_STATUS_KHR", { configurable: false, enumerable: true, writable: false, value: 37297 });
                delete KHRParallelShaderCompile.prototype.constructor;;
                delete KHRParallelShaderCompile
                break;
            case "OES_element_index_uint":
                OESElementIndexUint = function OESElementIndexUint() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESElementIndexUint, "OESElementIndexUint");
                info = Object.setPrototypeOf(info, OESElementIndexUint.prototype)
                delete OESElementIndexUint.prototype.constructor;;
                delete OESElementIndexUint
                break;
            case "OES_fbo_render_mipmap":
                OESFboRenderMipmap = function OESFboRenderMipmap() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESFboRenderMipmap, "OESFboRenderMipmap");
                info = Object.setPrototypeOf(info, OESFboRenderMipmap.prototype)
                delete OESFboRenderMipmap.prototype.constructor;;
                delete OESFboRenderMipmap
                break;
            case "OES_standard_derivatives":
                OESStandardDerivatives = function OESStandardDerivatives() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESStandardDerivatives, "OESStandardDerivatives");
                info = Object.setPrototypeOf(info, OESStandardDerivatives.prototype)
                bodavm.toolsFunc.defineProperty(OESStandardDerivatives.prototype, "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", { configurable: false, enumerable: true, writable: false, value: 35723 });
                delete OESStandardDerivatives.prototype.constructor;;
                delete OESStandardDerivatives
                break;
            case "OES_texture_float":
                OESTextureFloat = function OESTextureFloat() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESTextureFloat, "OESTextureFloat");
                info = Object.setPrototypeOf(info, OESTextureFloat.prototype)
                delete OESTextureFloat.prototype.constructor;;
                delete OESTextureFloat
                break;
            case "OES_texture_float_linear":
                OESTextureFloatLinear = function OESTextureFloatLinear() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESTextureFloatLinear, "OESTextureFloatLinear");
                info = Object.setPrototypeOf(info, OESTextureFloatLinear.prototype)
                delete OESTextureFloatLinear.prototype.constructor;;
                delete OESTextureFloatLinear
                break;
            case "OES_texture_half_float":
                OESTextureHalfFloat = function OESTextureHalfFloat() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESTextureHalfFloat, "OESTextureHalfFloat");
                info = Object.setPrototypeOf(info, OESTextureHalfFloat.prototype)
                bodavm.toolsFunc.defineProperty(OESTextureHalfFloat.prototype, "HALF_FLOAT_OES", { configurable: false, enumerable: true, writable: false, value: 36193 });
                delete OESTextureHalfFloat.prototype.constructor;
                delete OESTextureHalfFloat;
                break;
            case "OES_texture_half_float_linear":
                OESTextureHalfFloatLinear = function OESTextureHalfFloatLinear() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESTextureHalfFloatLinear, "OESTextureHalfFloatLinear");
                info = Object.setPrototypeOf(info, OESTextureHalfFloatLinear.prototype)
                delete OESTextureHalfFloatLinear.prototype.constructor;;
                delete OESTextureHalfFloatLinear
                break;
            case "OES_vertex_array_object":
                OESVertexArrayObject = function OESVertexArrayObject() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESVertexArrayObject, "OESVertexArrayObject");
                info = Object.setPrototypeOf(info, OESVertexArrayObject.prototype)
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "VERTEX_ARRAY_BINDING_OES", { configurable: false, enumerable: true, writable: false, value: 34229 });
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "bindVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function bindVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "bindVertexArrayOES", arguments) } });
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "createVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function createVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "createVertexArrayOES", arguments) } });
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "deleteVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function deleteVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "deleteVertexArrayOES", arguments) } });
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "isVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function isVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "isVertexArrayOES", arguments) } });
                delete OESVertexArrayObject.prototype.constructor;;
                delete OESVertexArrayObject
                break;
            case "WEBGL_color_buffer_float":
                WebGLColorBufferFloat = function WebGLColorBufferFloat() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLColorBufferFloat, "WebGLColorBufferFloat");
                info = Object.setPrototypeOf(info, WebGLColorBufferFloat.prototype)
                bodavm.toolsFunc.defineProperty(WebGLColorBufferFloat.prototype, "RGBA32F_EXT", { configurable: false, enumerable: true, writable: false, value: 34836 });
                bodavm.toolsFunc.defineProperty(WebGLColorBufferFloat.prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", { configurable: false, enumerable: true, writable: false, value: 33297 });
                bodavm.toolsFunc.defineProperty(WebGLColorBufferFloat.prototype, "UNSIGNED_NORMALIZED_EXT", { configurable: false, enumerable: true, writable: false, value: 35863 });
                delete WebGLColorBufferFloat.prototype.constructor;;
                delete WebGLColorBufferFloat
                break;
            case "WEBGL_compressed_texture_s3tc":
                WebGLCompressedTextureS3TC = function WebGLCompressedTextureS3TC() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TC, "WebGLCompressedTextureS3TC");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TC.prototype)
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33776 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33777 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 33778 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 33779 });
                delete WebGLCompressedTextureS3TC.prototype.constructor;;
                delete WebGLCompressedTextureS3TC
                break;
            case "WEBKIT_WEBGL_compressed_texture_s3tc":
                WebGLCompressedTextureS3TC = function WebGLCompressedTextureS3TC() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TC, "WebGLCompressedTextureS3TC");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TC.prototype)
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33776 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33777 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 33778 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 33779 });
                delete WebGLCompressedTextureS3TC.prototype.constructor;;
                delete WebGLCompressedTextureS3TC 
                break;
            case "WEBGL_compressed_texture_s3tc_srgb":
                WebGLCompressedTextureS3TCsRGB = function WebGLCompressedTextureS3TCsRGB() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TCsRGB, "WebGLCompressedTextureS3TCsRGB");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TCsRGB.prototype)
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 35916 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 35917 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 35918 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 35919 });
                delete WebGLCompressedTextureS3TCsRGB.prototype.constructor;;
                delete WebGLCompressedTextureS3TCsRGB
                break;
            case "WEBGL_debug_shaders":
                WebGLDebugShaders = function WebGLDebugShaders() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLDebugShaders, "WebGLDebugShaders");
                info = Object.setPrototypeOf(info, WebGLDebugShaders.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDebugShaders.prototype, "getTranslatedShaderSource", { configurable: true, enumerable: true, writable: true, value: function getTranslatedShaderSource() { return bodavm.toolsFunc.dispatch(this, WebGLDebugShaders.prototype, "WebGLDebugShaders", "getTranslatedShaderSource", arguments) } });
                delete WebGLDebugShaders.prototype.constructor;;
                delete WebGLDebugShaders
                break;
            case "WEBGL_depth_texture":
                WebGLDepthTexture = function WebGLDepthTexture() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLDepthTexture, "WebGLDepthTexture");
                info = Object.setPrototypeOf(info, WebGLDepthTexture.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDepthTexture.prototype, "UNSIGNED_INT_24_8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34042 });
                delete WebGLDepthTexture.prototype.constructor;;
                delete WebGLDepthTexture
                break;
            case "WEBKIT_WEBGL_depth_texture":
                WebGLDepthTexture = function WebGLDepthTexture() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLDepthTexture, "WebGLDepthTexture");
                info = Object.setPrototypeOf(info, WebGLDepthTexture.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDepthTexture.prototype, "UNSIGNED_INT_24_8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34042 });
                delete WebGLDepthTexture.prototype.constructor;;
                delete WebGLDepthTexture
                break;
            case "WEBGL_draw_buffers":
                WebGLDrawBuffers = function WebGLDrawBuffers() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLDrawBuffers, "WebGLDrawBuffers");
                info = Object.setPrototypeOf(info, WebGLDrawBuffers.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT0_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36064 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT1_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36065 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT2_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36066 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT3_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36067 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT4_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36068 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT5_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36069 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT6_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36070 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT7_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36071 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36072 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT9_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36073 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT10_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36074 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT11_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36075 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT12_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36076 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT13_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36077 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT14_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36078 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT15_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36079 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER0_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34853 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER1_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34854 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER2_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34855 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER3_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34856 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER4_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34857 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER5_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34858 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER6_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34859 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER7_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34860 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34861 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER9_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34862 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER10_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34863 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER11_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34864 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER12_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34865 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER13_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34866 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER14_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34867 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER15_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34868 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "MAX_COLOR_ATTACHMENTS_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36063 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "MAX_DRAW_BUFFERS_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34852 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "drawBuffersWEBGL", { configurable: true, enumerable: true, writable: true, value: function drawBuffersWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLDrawBuffers.prototype, "WebGLDrawBuffers", "drawBuffersWEBGL", arguments) } });
                delete WebGLDrawBuffers.prototype.constructor;;
                delete WebGLDrawBuffers
                break;
            case "WEBGL_lose_context":
                WebGLLoseContext = function WebGLLoseContext() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLLoseContext, "WebGLLoseContext");
                info = Object.setPrototypeOf(info, WebGLLoseContext.prototype)
                bodavm.toolsFunc.defineProperty(WebGLLoseContext.prototype, "loseContext", { configurable: true, enumerable: true, writable: true, value: function loseContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "loseContext", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLLoseContext.prototype, "restoreContext", { configurable: true, enumerable: true, writable: true, value: function restoreContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "restoreContext", arguments) } });
                delete WebGLLoseContext.prototype.constructor;;
                delete WebGLLoseContext
                break;
            case "WEBKIT_WEBGL_lose_context":
                WebGLLoseContext = function WebGLLoseContext() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLLoseContext, "WebGLLoseContext");
                info = Object.setPrototypeOf(info, WebGLLoseContext.prototype)
                bodavm.toolsFunc.defineProperty(WebGLLoseContext.prototype, "loseContext", { configurable: true, enumerable: true, writable: true, value: function loseContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "loseContext", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLLoseContext.prototype, "restoreContext", { configurable: true, enumerable: true, writable: true, value: function restoreContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "restoreContext", arguments) } });
                delete WebGLLoseContext.prototype.constructor;; 
                delete WebGLLoseContext
                break;
            case "WEBGL_multi_draw":
                WebGLMultiDraw = function WebGLMultiDraw() { this._boisinit = bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLMultiDraw, "WebGLMultiDraw");
                info = Object.setPrototypeOf(info, WebGLMultiDraw.prototype)
                bodavm.toolsFunc.defineProperty(WebGLMultiDraw.prototype, "multiDrawArraysInstancedWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawArraysInstancedWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawArraysInstancedWEBGL", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLMultiDraw.prototype, "multiDrawArraysWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawArraysWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawArraysWEBGL", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLMultiDraw.prototype, "multiDrawElementsInstancedWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawElementsInstancedWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawElementsInstancedWEBGL", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLMultiDraw.prototype, "multiDrawElementsWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawElementsWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawElementsWEBGL", arguments) } });
                delete WebGLMultiDraw.prototype.constructor;;
                delete WebGLMultiDraw
                break;
            default:
                console.log_copy(`WebGLRenderingContext_getExtension `, `${getExtension}属性未实现  `);
                break;
        }

        return info
    }
})();
  //