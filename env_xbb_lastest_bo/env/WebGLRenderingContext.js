// WebGLRenderingContext对象

WebGLRenderingContext = function WebGLRenderingContext() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGLRenderingContext)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGLRenderingContext 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGLRenderingContext, "WebGLRenderingContext");
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext, "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: function canvas() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "canvas_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferWidth", {
  configurable: true,
  enumerable: true,
  get: function drawingBufferWidth() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawingBufferWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferHeight", {
  configurable: true,
  enumerable: true,
  get: function drawingBufferHeight() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawingBufferHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferColorSpace", {
  configurable: true,
  enumerable: true,
  get: function drawingBufferColorSpace() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawingBufferColorSpace_get", arguments);
  },
  set: function drawingBufferColorSpace() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawingBufferColorSpace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "unpackColorSpace", {
  configurable: true,
  enumerable: true,
  get: function unpackColorSpace() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "unpackColorSpace_get", arguments);
  },
  set: function unpackColorSpace() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "unpackColorSpace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "activeTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function activeTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "activeTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "attachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function attachShader() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "attachShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindAttribLocation() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindAttribLocation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendColor() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendColor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendEquation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendEquation() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendEquation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendEquationSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendEquationSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendEquationSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendFunc() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendFunc", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendFuncSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "blendFuncSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bufferData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bufferData() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bufferData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bufferSubData() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bufferSubData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "checkFramebufferStatus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkFramebufferStatus() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "checkFramebufferStatus", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compileShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compileShader() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "compileShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compressedTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "compressedTexImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compressedTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexSubImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "compressedTexSubImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "copyTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTexImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "copyTexImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "copyTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTexSubImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "copyTexSubImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createShader() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "createTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "cullFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cullFace() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "cullFace", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteBuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteShader() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "deleteTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function depthFunc() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "depthFunc", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function depthMask() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "depthMask", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function depthRange() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "depthRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "detachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function detachShader() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "detachShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "disable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disable() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "disable", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "enable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enable() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "enable", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function finish() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "finish", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "flush", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "framebufferRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function framebufferRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "framebufferRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "framebufferTexture2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function framebufferTexture2D() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "framebufferTexture2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "frontFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function frontFace() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "frontFace", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "generateMipmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function generateMipmap() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "generateMipmap", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getActiveAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveAttrib() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getActiveAttrib", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getActiveUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveUniform() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getActiveUniform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getAttachedShaders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttachedShaders() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getAttachedShaders", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttribLocation() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getAttribLocation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getBufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBufferParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getBufferParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getContextAttributes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContextAttributes() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getContextAttributes", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getError", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getError() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getError", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getExtension", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getExtension() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getExtension", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getFramebufferAttachmentParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFramebufferAttachmentParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getFramebufferAttachmentParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getProgramInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getProgramInfoLog() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getProgramInfoLog", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getProgramParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getProgramParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getProgramParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getRenderbufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRenderbufferParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getRenderbufferParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderInfoLog() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getShaderInfoLog", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getShaderParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderPrecisionFormat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderPrecisionFormat() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getShaderPrecisionFormat", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderSource() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getShaderSource", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getSupportedExtensions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSupportedExtensions() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getSupportedExtensions", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getTexParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTexParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getTexParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniform() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getUniform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getUniformLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniformLocation() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getUniformLocation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getVertexAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVertexAttrib() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getVertexAttrib", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getVertexAttribOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVertexAttribOffset() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "getVertexAttribOffset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "hint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hint() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "hint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isBuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isContextLost", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isContextLost() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isContextLost", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isEnabled() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isEnabled", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isShader() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "isTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "lineWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lineWidth() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "lineWidth", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "linkProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function linkProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "linkProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "pixelStorei", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pixelStorei() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "pixelStorei", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "polygonOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function polygonOffset() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "polygonOffset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "readPixels", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readPixels() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "readPixels", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "renderbufferStorage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function renderbufferStorage() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "renderbufferStorage", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "sampleCoverage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sampleCoverage() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "sampleCoverage", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "shaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function shaderSource() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "shaderSource", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilFunc() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilFunc", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilFuncSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilFuncSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilMask() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilMask", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilMaskSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilMaskSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilMaskSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilOp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilOp() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilOp", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilOpSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilOpSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "stencilOpSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "texImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texParameterf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texParameterf() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "texParameterf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texParameteri", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texParameteri() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "texParameteri", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texSubImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "texSubImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "useProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function useProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "useProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "validateProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function validateProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "validateProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindBuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "bindTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearColor() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "clearColor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearDepth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearDepth() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "clearDepth", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearStencil", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearStencil() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "clearStencil", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "colorMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function colorMask() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "colorMask", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "disableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disableVertexAttribArray() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "disableVertexAttribArray", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawArrays", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawArrays() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawArrays", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawElements() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "drawElements", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "enableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enableVertexAttribArray() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "enableVertexAttribArray", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "scissor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scissor() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "scissor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1f() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform1f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform1fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1i() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform1i", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1iv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform1iv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2f() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform2f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform2fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2i() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform2i", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2iv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform2iv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3f() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform3f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform3fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3i() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform3i", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3iv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform3iv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4f() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform4f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform4fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4i() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform4i", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4iv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniform4iv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix2fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniformMatrix2fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix3fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniformMatrix3fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix4fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "uniformMatrix4fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib1f() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib1f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib1fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib1fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib2f() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib2f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib2fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib2fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib3f() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib3f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib3fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib3fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib4f() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib4f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib4fv() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttrib4fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttribPointer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribPointer() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "vertexAttribPointer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "viewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function viewport() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "viewport", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "makeXRCompatible", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function makeXRCompatible() {
    return bodavm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContext", "makeXRCompatible", arguments);
  }
});