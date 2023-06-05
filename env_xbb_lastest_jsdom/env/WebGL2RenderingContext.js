// WebGL2RenderingContext对象

bodavm.memory.globalobj['WebGL2RenderingContext'] = function WebGL2RenderingContext() {
  console.log_copy('WebGL2RenderingContext 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebGL2RenderingContext)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebGL2RenderingContext'], "WebGL2RenderingContext");
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3074
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3314
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3315
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3316
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3330
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3331
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3332
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6144
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6145
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6146
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6403
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32849
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32856
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB10_A2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32857
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BINDING_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32874
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_SKIP_IMAGES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32877
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_IMAGE_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32878
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32879
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_WRAP_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32882
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_3D_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32883
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33640
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_ELEMENTS_VERTICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33000
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_ELEMENTS_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33001
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MIN_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33082
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MAX_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33083
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BASE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33084
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MAX_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33085
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32775
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32776
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_COMPONENT24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33190
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TEXTURE_LOD_BIAS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34045
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_COMPARE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34892
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_COMPARE_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34893
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CURRENT_QUERY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34917
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "QUERY_RESULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34918
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "QUERY_RESULT_AVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34919
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STREAM_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35041
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STREAM_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35042
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STATIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35045
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STATIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35046
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DYNAMIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35049
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DYNAMIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35050
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_DRAW_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34852
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34853
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34854
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34855
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34856
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34857
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34858
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34859
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34860
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34861
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34862
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34863
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34864
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34865
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34866
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34867
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34868
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35657
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35658
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35679
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_2D_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35682
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAGMENT_SHADER_DERIVATIVE_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35723
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PIXEL_PACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35051
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PIXEL_UNPACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35052
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PIXEL_PACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35053
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PIXEL_UNPACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35055
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT2x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35685
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT2x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35686
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT3x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35687
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT3x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35688
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT4x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35689
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT4x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35690
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35904
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35905
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRGB8_ALPHA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35907
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COMPARE_REF_TO_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34894
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34836
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34837
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34842
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34843
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35069
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_ARRAY_TEXTURE_LAYERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35071
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MIN_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35076
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35077
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VARYING_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35659
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35866
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BINDING_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35869
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R11F_G11F_B10F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35898
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_10F_11F_11F_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35899
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB9_E5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35901
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_5_9_9_9_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35902
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35967
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35968
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_VARYINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35971
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35972
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35973
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35976
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RASTERIZER_DISCARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35977
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35978
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35979
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INTERLEAVED_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35980
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35981
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35982
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35983
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36208
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36209
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36214
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36215
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36220
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36221
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36226
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36227
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36232
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36233
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36238
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36239
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RED_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36244
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36248
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36249
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36289
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_2D_ARRAY_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36292
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_CUBE_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36293
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36294
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36295
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36296
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36298
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36299
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36300
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36303
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36306
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36307
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36308
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36311
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_COMPONENT32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36012
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH32F_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36013
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_32_UNSIGNED_INT_24_8_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36269
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33296
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33297
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33298
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33299
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33300
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33301
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33302
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33303
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_DEFAULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33304
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_24_8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34042
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH24_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35056
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35863
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "READ_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36008
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36009
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "READ_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36010
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36011
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36052
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COLOR_ATTACHMENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36063
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36065
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36066
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36067
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36068
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36069
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36070
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36071
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36072
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36073
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36074
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36075
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36076
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36077
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36078
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36079
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36182
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36183
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "HALF_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5131
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33319
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33320
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33321
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33323
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33325
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33326
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33327
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33328
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33329
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33330
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33331
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33332
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33333
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33334
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33335
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33336
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33337
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33338
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33339
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33340
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ARRAY_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34229
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36756
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36757
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36758
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36759
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36764
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COPY_READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COPY_WRITE_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COPY_READ_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COPY_WRITE_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35345
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35368
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35369
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35370
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35371
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_FRAGMENT_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35373
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COMBINED_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35374
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_UNIFORM_BUFFER_BINDINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35375
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_UNIFORM_BLOCK_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35376
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35377
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35379
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER_OFFSET_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35380
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ACTIVE_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35382
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35383
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35384
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35386
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35387
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35388
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_MATRIX_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35389
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_IS_ROW_MAJOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35390
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35391
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_DATA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35392
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35394
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35395
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35396
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35398
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4294967295
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_OUTPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37154
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_FRAGMENT_INPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37157
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_SERVER_WAIT_TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37137
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37138
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_CONDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37139
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37140
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_FLAGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37141
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_FENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37142
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_GPU_COMMANDS_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37143
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37144
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37145
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALREADY_SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37146
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TIMEOUT_EXPIRED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37147
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CONDITION_SATISFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37148
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "WAIT_FAILED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37149
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_FLUSH_COMMANDS_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_DIVISOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35070
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ANY_SAMPLES_PASSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35887
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ANY_SAMPLES_PASSED_CONSERVATIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36202
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35097
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB10_A2UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36975
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36255
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36386
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_PAUSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36387
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_ACTIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36388
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36389
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_IMMUTABLE_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37167
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_ELEMENT_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36203
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_IMMUTABLE_LEVELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33503
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TIMEOUT_IGNORED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: -1
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_CLIENT_WAIT_TIMEOUT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37447
});
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "canvas", {
  configurable: true,
  enumerable: true,
  get: function canvas() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "canvas_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "drawingBufferWidth", {
  configurable: true,
  enumerable: true,
  get: function drawingBufferWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawingBufferWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "drawingBufferHeight", {
  configurable: true,
  enumerable: true,
  get: function drawingBufferHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawingBufferHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "drawingBufferColorSpace", {
  configurable: true,
  enumerable: true,
  get: function drawingBufferColorSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawingBufferColorSpace_get", arguments);
  },
  set: function drawingBufferColorSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawingBufferColorSpace_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "unpackColorSpace", {
  configurable: true,
  enumerable: true,
  get: function unpackColorSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "unpackColorSpace_get", arguments);
  },
  set: function unpackColorSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "unpackColorSpace_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3074
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3314
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3315
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3316
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3330
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3331
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3332
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6144
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6145
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6146
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6403
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32849
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32856
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB10_A2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32857
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BINDING_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32874
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_SKIP_IMAGES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32877
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNPACK_IMAGE_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32878
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32879
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_WRAP_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32882
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_3D_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32883
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33640
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_ELEMENTS_VERTICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33000
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_ELEMENTS_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33001
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MIN_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33082
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MAX_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33083
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BASE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33084
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_MAX_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33085
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32775
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32776
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_COMPONENT24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33190
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TEXTURE_LOD_BIAS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34045
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_COMPARE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34892
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_COMPARE_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34893
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CURRENT_QUERY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34917
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "QUERY_RESULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34918
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "QUERY_RESULT_AVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34919
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STREAM_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35041
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STREAM_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35042
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STATIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35045
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "STATIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35046
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DYNAMIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35049
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DYNAMIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35050
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_DRAW_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34852
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34853
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34854
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34855
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34856
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34857
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34858
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34859
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34860
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34861
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34862
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34863
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34864
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34865
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34866
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34867
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_BUFFER15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34868
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35657
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35658
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35679
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_2D_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35682
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAGMENT_SHADER_DERIVATIVE_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35723
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PIXEL_PACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35051
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PIXEL_UNPACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35052
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PIXEL_PACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35053
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "PIXEL_UNPACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35055
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT2x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35685
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT2x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35686
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT3x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35687
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT3x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35688
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT4x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35689
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_MAT4x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35690
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35904
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35905
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SRGB8_ALPHA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35907
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COMPARE_REF_TO_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34894
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34836
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34837
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34842
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34843
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35069
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_ARRAY_TEXTURE_LAYERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35071
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MIN_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35076
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35077
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VARYING_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35659
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35866
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_BINDING_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35869
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R11F_G11F_B10F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35898
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_10F_11F_11F_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35899
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB9_E5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35901
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_5_9_9_9_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35902
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35967
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35968
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_VARYINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35971
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35972
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35973
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35976
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RASTERIZER_DISCARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35977
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35978
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35979
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INTERLEAVED_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35980
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35981
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35982
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35983
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36208
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36209
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36214
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36215
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36220
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36221
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36226
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36227
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36232
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36233
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36238
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36239
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RED_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36244
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36248
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36249
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36289
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_2D_ARRAY_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36292
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_CUBE_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36293
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36294
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36295
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36296
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36298
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36299
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36300
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36303
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36306
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36307
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36308
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36311
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH_COMPONENT32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36012
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH32F_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36013
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FLOAT_32_UNSIGNED_INT_24_8_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36269
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33296
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33297
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33298
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33299
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33300
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33301
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33302
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33303
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_DEFAULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33304
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_INT_24_8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34042
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DEPTH24_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35056
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35863
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "READ_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36008
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "DRAW_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36009
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "READ_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36010
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RENDERBUFFER_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36011
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36052
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COLOR_ATTACHMENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36063
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36065
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36066
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36067
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36068
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36069
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36070
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36071
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36072
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36073
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36074
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36075
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36076
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36077
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36078
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COLOR_ATTACHMENT15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36079
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36182
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36183
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "HALF_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5131
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33319
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33320
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33321
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33323
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33325
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33326
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33327
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33328
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33329
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33330
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33331
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33332
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33333
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33334
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33335
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33336
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33337
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33338
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33339
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33340
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ARRAY_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34229
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "R8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36756
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RG8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36757
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36758
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGBA8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36759
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36764
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COPY_READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COPY_WRITE_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COPY_READ_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "COPY_WRITE_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35345
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35368
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35369
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35370
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35371
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_FRAGMENT_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35373
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COMBINED_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35374
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_UNIFORM_BUFFER_BINDINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35375
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_UNIFORM_BLOCK_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35376
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35377
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35379
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BUFFER_OFFSET_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35380
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ACTIVE_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35382
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35383
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35384
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35386
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35387
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35388
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_MATRIX_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35389
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_IS_ROW_MAJOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35390
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35391
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_DATA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35392
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35394
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35395
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35396
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35398
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INVALID_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4294967295
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_VERTEX_OUTPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37154
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_FRAGMENT_INPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37157
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_SERVER_WAIT_TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37137
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37138
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_CONDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37139
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37140
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_FLAGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37141
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_FENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37142
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_GPU_COMMANDS_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37143
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "UNSIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37144
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37145
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ALREADY_SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37146
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TIMEOUT_EXPIRED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37147
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "CONDITION_SATISFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37148
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "WAIT_FAILED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37149
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SYNC_FLUSH_COMMANDS_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "VERTEX_ATTRIB_ARRAY_DIVISOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35070
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ANY_SAMPLES_PASSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35887
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "ANY_SAMPLES_PASSED_CONSERVATIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36202
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "SAMPLER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35097
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "RGB10_A2UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36975
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36255
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36386
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_PAUSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36387
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_ACTIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36388
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TRANSFORM_FEEDBACK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36389
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_IMMUTABLE_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37167
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_ELEMENT_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36203
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TEXTURE_IMMUTABLE_LEVELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33503
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "TIMEOUT_IGNORED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: -1
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "MAX_CLIENT_WAIT_TIMEOUT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37447
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "activeTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function activeTexture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "activeTexture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "attachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function attachShader() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "attachShader", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "beginQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginQuery() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "beginQuery", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "beginTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "beginTransformFeedback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindAttribLocation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindAttribLocation", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindBufferBase", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindBufferBase() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindBufferBase", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindBufferRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindBufferRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindBufferRange", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindRenderbuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindSampler() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindSampler", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindTransformFeedback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindVertexArray() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindVertexArray", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "blendColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "blendColor", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "blendEquation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendEquation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "blendEquation", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "blendEquationSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendEquationSeparate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "blendEquationSeparate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "blendFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendFunc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "blendFunc", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "blendFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendFuncSeparate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "blendFuncSeparate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "blitFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blitFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "blitFramebuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bufferData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bufferData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bufferData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bufferSubData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bufferSubData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "checkFramebufferStatus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkFramebufferStatus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "checkFramebufferStatus", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "clientWaitSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clientWaitSync() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "clientWaitSync", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "compileShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compileShader() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "compileShader", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "compressedTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexImage2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "compressedTexImage2D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "compressedTexImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexImage3D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "compressedTexImage3D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "compressedTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexSubImage2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "compressedTexSubImage2D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "compressedTexSubImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexSubImage3D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "compressedTexSubImage3D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "copyBufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyBufferSubData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "copyBufferSubData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "copyTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTexImage2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "copyTexImage2D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "copyTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTexSubImage2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "copyTexSubImage2D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "copyTexSubImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTexSubImage3D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "copyTexSubImage3D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createFramebuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createProgram() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createProgram", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createQuery() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createQuery", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createRenderbuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSampler() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createSampler", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createShader() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createShader", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTexture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createTexture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createTransformFeedback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "createVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createVertexArray() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "createVertexArray", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "cullFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cullFace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "cullFace", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteFramebuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteProgram() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteProgram", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteQuery() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteQuery", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteRenderbuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteSampler() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteSampler", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteShader() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteShader", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteSync() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteSync", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteTexture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteTexture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteTransformFeedback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "deleteVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteVertexArray() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "deleteVertexArray", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "depthFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function depthFunc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "depthFunc", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "depthMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function depthMask() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "depthMask", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "depthRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function depthRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "depthRange", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "detachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function detachShader() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "detachShader", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "disable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "disable", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "drawArraysInstanced", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawArraysInstanced() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawArraysInstanced", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "drawElementsInstanced", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawElementsInstanced() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawElementsInstanced", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "drawRangeElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawRangeElements() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawRangeElements", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "enable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "enable", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "endQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endQuery() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "endQuery", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "endTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "endTransformFeedback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "fenceSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fenceSync() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "fenceSync", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function finish() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "finish", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "flush", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "framebufferRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function framebufferRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "framebufferRenderbuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "framebufferTexture2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function framebufferTexture2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "framebufferTexture2D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "framebufferTextureLayer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function framebufferTextureLayer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "framebufferTextureLayer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "frontFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function frontFace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "frontFace", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "generateMipmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function generateMipmap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "generateMipmap", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getActiveAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveAttrib() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getActiveAttrib", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getActiveUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveUniform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getActiveUniform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getActiveUniformBlockName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveUniformBlockName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getActiveUniformBlockName", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getActiveUniformBlockParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveUniformBlockParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getActiveUniformBlockParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getActiveUniforms", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveUniforms() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getActiveUniforms", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getAttachedShaders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttachedShaders() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getAttachedShaders", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttribLocation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getAttribLocation", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getBufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBufferParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getBufferParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getBufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBufferSubData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getBufferSubData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getContextAttributes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContextAttributes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getContextAttributes", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getError", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getError() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getError", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getExtension", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getExtension() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getExtension", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getFragDataLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFragDataLocation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getFragDataLocation", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getFramebufferAttachmentParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFramebufferAttachmentParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getFramebufferAttachmentParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getIndexedParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getIndexedParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getIndexedParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getInternalformatParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInternalformatParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getInternalformatParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getProgramInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getProgramInfoLog() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getProgramInfoLog", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getProgramParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getProgramParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getProgramParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getQuery() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getQuery", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getQueryParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getQueryParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getQueryParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getRenderbufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRenderbufferParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getRenderbufferParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getSamplerParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSamplerParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getSamplerParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getShaderInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderInfoLog() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getShaderInfoLog", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getShaderParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getShaderParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getShaderPrecisionFormat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderPrecisionFormat() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getShaderPrecisionFormat", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getShaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderSource() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getShaderSource", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getSupportedExtensions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSupportedExtensions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getSupportedExtensions", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getSyncParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSyncParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getSyncParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getTexParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTexParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getTexParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getTransformFeedbackVarying", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTransformFeedbackVarying() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getTransformFeedbackVarying", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getUniform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getUniformBlockIndex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniformBlockIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getUniformBlockIndex", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getUniformIndices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniformIndices() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getUniformIndices", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getUniformLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniformLocation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getUniformLocation", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getVertexAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVertexAttrib() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getVertexAttrib", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "getVertexAttribOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVertexAttribOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "getVertexAttribOffset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "hint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "hint", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "invalidateFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function invalidateFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "invalidateFramebuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "invalidateSubFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function invalidateSubFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "invalidateSubFramebuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isContextLost", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isContextLost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isContextLost", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isEnabled", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isFramebuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isProgram() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isProgram", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isQuery() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isQuery", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isRenderbuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSampler() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isSampler", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isShader() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isShader", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSync() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isSync", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTexture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isTexture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isTransformFeedback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "isVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isVertexArray() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "isVertexArray", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "lineWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lineWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "lineWidth", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "linkProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function linkProgram() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "linkProgram", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "pauseTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pauseTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "pauseTransformFeedback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "pixelStorei", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pixelStorei() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "pixelStorei", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "polygonOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function polygonOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "polygonOffset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "readBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "readBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "readPixels", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readPixels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "readPixels", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "renderbufferStorage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function renderbufferStorage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "renderbufferStorage", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "renderbufferStorageMultisample", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function renderbufferStorageMultisample() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "renderbufferStorageMultisample", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "resumeTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resumeTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "resumeTransformFeedback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "sampleCoverage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sampleCoverage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "sampleCoverage", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "samplerParameterf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function samplerParameterf() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "samplerParameterf", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "samplerParameteri", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function samplerParameteri() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "samplerParameteri", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "shaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function shaderSource() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "shaderSource", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "stencilFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilFunc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "stencilFunc", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "stencilFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilFuncSeparate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "stencilFuncSeparate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "stencilMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilMask() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "stencilMask", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "stencilMaskSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilMaskSeparate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "stencilMaskSeparate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "stencilOp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilOp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "stencilOp", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "stencilOpSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilOpSeparate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "stencilOpSeparate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "texImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texImage2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "texImage2D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "texImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texImage3D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "texImage3D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "texParameterf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texParameterf() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "texParameterf", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "texParameteri", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texParameteri() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "texParameteri", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "texStorage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texStorage2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "texStorage2D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "texStorage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texStorage3D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "texStorage3D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "texSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texSubImage2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "texSubImage2D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "texSubImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texSubImage3D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "texSubImage3D", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "transformFeedbackVaryings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transformFeedbackVaryings() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "transformFeedbackVaryings", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform1ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1ui() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform1ui", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform2ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2ui() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform2ui", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform3ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3ui() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform3ui", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform4ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4ui() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform4ui", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformBlockBinding", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformBlockBinding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformBlockBinding", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "useProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function useProgram() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "useProgram", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "validateProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function validateProgram() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "validateProgram", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttribDivisor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribDivisor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttribDivisor", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttribI4i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribI4i() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttribI4i", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttribI4ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribI4ui() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttribI4ui", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttribIPointer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribIPointer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttribIPointer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "waitSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function waitSync() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "waitSync", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindFramebuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "bindTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindTexture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "bindTexture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "clearBufferfi", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearBufferfi() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "clearBufferfi", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "clearBufferfv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearBufferfv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "clearBufferfv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "clearBufferiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearBufferiv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "clearBufferiv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "clearBufferuiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearBufferuiv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "clearBufferuiv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "clearColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "clearColor", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "clearDepth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearDepth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "clearDepth", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "clearStencil", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearStencil() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "clearStencil", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "colorMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function colorMask() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "colorMask", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "disableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disableVertexAttribArray() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "disableVertexAttribArray", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "drawArrays", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawArrays() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawArrays", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "drawBuffers", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawBuffers() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawBuffers", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "drawElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawElements() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "drawElements", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "enableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enableVertexAttribArray() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "enableVertexAttribArray", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "scissor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scissor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "scissor", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform1f", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform1fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform1i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1i() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform1i", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform1iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1iv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform1iv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform1uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1uiv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform1uiv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform2f", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform2fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform2i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2i() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform2i", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform2iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2iv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform2iv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform2uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2uiv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform2uiv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform3f", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform3fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform3i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3i() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform3i", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform3iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3iv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform3iv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform3uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3uiv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform3uiv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform4f", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform4fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform4i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4i() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform4i", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform4iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4iv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform4iv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniform4uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4uiv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniform4uiv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformMatrix2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix2fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformMatrix2fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformMatrix2x3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix2x3fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformMatrix2x3fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformMatrix2x4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix2x4fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformMatrix2x4fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformMatrix3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix3fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformMatrix3fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformMatrix3x2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix3x2fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformMatrix3x2fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformMatrix3x4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix3x4fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformMatrix3x4fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformMatrix4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix4fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformMatrix4fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformMatrix4x2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix4x2fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformMatrix4x2fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "uniformMatrix4x3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix4x3fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "uniformMatrix4x3fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttrib1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib1f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttrib1f", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttrib1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib1fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttrib1fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttrib2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib2f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttrib2f", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttrib2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib2fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttrib2fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttrib3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib3f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttrib3f", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttrib3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib3fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttrib3fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttrib4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib4f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttrib4f", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttrib4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib4fv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttrib4fv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttribI4iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribI4iv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttribI4iv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttribI4uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribI4uiv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttribI4uiv", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "vertexAttribPointer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribPointer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "vertexAttribPointer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "viewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function viewport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "viewport", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGL2RenderingContext', "makeXRCompatible", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function makeXRCompatible() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGL2RenderingContext'].prototype, "WebGL2RenderingContext", "makeXRCompatible", arguments);
  }
}, 'prototype');