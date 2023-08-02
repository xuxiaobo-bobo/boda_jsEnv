// WebGL2RenderingContext对象

WebGL2RenderingContext = function WebGL2RenderingContext() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGL2RenderingContext)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGL2RenderingContext 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGL2RenderingContext, "WebGL2RenderingContext");
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3074
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNPACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3314
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNPACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3315
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNPACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3316
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "PACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3330
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "PACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3331
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "PACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3332
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6144
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6145
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6146
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6403
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32849
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32856
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB10_A2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32857
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_BINDING_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32874
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNPACK_SKIP_IMAGES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32877
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNPACK_IMAGE_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32878
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32879
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_WRAP_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32882
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_3D_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32883
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33640
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_ELEMENTS_VERTICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33000
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_ELEMENTS_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33001
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_MIN_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33082
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_MAX_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33083
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_BASE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33084
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_MAX_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33085
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32775
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32776
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_COMPONENT24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33190
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_TEXTURE_LOD_BIAS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34045
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_COMPARE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34892
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_COMPARE_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34893
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CURRENT_QUERY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34917
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "QUERY_RESULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34918
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "QUERY_RESULT_AVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34919
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STREAM_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35041
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STREAM_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35042
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STATIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35045
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "STATIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35046
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DYNAMIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35049
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DYNAMIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35050
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_DRAW_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34852
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34853
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34854
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34855
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34856
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34857
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34858
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34859
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34860
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34861
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34862
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34863
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34864
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34865
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34866
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34867
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_BUFFER15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34868
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35657
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35658
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35679
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLER_2D_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35682
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAGMENT_SHADER_DERIVATIVE_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35723
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "PIXEL_PACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35051
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "PIXEL_UNPACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35052
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "PIXEL_PACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35053
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "PIXEL_UNPACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35055
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_MAT2x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35685
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_MAT2x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35686
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_MAT3x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35687
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_MAT3x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35688
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_MAT4x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35689
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_MAT4x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35690
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SRGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35904
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SRGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35905
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SRGB8_ALPHA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35907
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COMPARE_REF_TO_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34894
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34836
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34837
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34842
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34843
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ATTRIB_ARRAY_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35069
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_ARRAY_TEXTURE_LAYERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35071
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MIN_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35076
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35077
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_VARYING_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35659
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35866
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_BINDING_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35869
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R11F_G11F_B10F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35898
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_10F_11F_11F_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35899
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB9_E5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35901
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_5_9_9_9_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35902
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_BUFFER_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35967
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35968
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_VARYINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35971
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35972
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35973
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35976
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RASTERIZER_DISCARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35977
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35978
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35979
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INTERLEAVED_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35980
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35981
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35982
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35983
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36208
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36209
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36214
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36215
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36220
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36221
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36226
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36227
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36232
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36233
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36238
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36239
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RED_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36244
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36248
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36249
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36289
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLER_2D_ARRAY_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36292
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLER_CUBE_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36293
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36294
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36295
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36296
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36298
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36299
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36300
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36303
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36306
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36307
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36308
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36311
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH_COMPONENT32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36012
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH32F_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36013
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FLOAT_32_UNSIGNED_INT_24_8_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36269
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33296
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33297
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33298
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33299
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33300
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33301
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33302
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33303
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_DEFAULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33304
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_INT_24_8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34042
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DEPTH24_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35056
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35863
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "READ_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36008
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "DRAW_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36009
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "READ_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36010
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RENDERBUFFER_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36011
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36052
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_COLOR_ATTACHMENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36063
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36065
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36066
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36067
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36068
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36069
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36070
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36071
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36072
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36073
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36074
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36075
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36076
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36077
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36078
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COLOR_ATTACHMENT15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36079
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36182
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36183
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "HALF_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5131
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33319
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33320
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33321
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33323
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33325
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33326
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33327
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33328
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33329
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33330
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33331
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33332
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33333
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33334
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33335
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33336
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33337
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33338
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33339
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33340
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ARRAY_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34229
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "R8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36756
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RG8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36757
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36758
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGBA8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36759
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36764
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COPY_READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COPY_WRITE_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COPY_READ_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "COPY_WRITE_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35345
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35368
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35369
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35370
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_VERTEX_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35371
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_FRAGMENT_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35373
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_COMBINED_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35374
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_UNIFORM_BUFFER_BINDINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35375
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_UNIFORM_BLOCK_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35376
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35377
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35379
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BUFFER_OFFSET_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35380
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ACTIVE_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35382
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35383
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35384
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BLOCK_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35386
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35387
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35388
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_MATRIX_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35389
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_IS_ROW_MAJOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35390
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BLOCK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35391
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BLOCK_DATA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35392
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BLOCK_ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35394
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35395
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35396
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35398
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INVALID_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4294967295
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_VERTEX_OUTPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37154
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_FRAGMENT_INPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37157
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_SERVER_WAIT_TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37137
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37138
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SYNC_CONDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37139
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SYNC_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37140
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SYNC_FLAGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37141
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SYNC_FENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37142
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SYNC_GPU_COMMANDS_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37143
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "UNSIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37144
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37145
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ALREADY_SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37146
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TIMEOUT_EXPIRED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37147
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "CONDITION_SATISFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37148
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "WAIT_FAILED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37149
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SYNC_FLUSH_COMMANDS_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "VERTEX_ATTRIB_ARRAY_DIVISOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35070
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ANY_SAMPLES_PASSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35887
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "ANY_SAMPLES_PASSED_CONSERVATIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36202
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "SAMPLER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35097
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "RGB10_A2UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36975
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36255
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36386
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_PAUSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36387
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_ACTIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36388
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TRANSFORM_FEEDBACK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36389
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_IMMUTABLE_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37167
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_ELEMENT_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36203
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TEXTURE_IMMUTABLE_LEVELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33503
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "TIMEOUT_IGNORED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: -1
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext, "MAX_CLIENT_WAIT_TIMEOUT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37447
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: function canvas() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "canvas_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "drawingBufferWidth", {
  configurable: true,
  enumerable: true,
  get: function drawingBufferWidth() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawingBufferWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "drawingBufferHeight", {
  configurable: true,
  enumerable: true,
  get: function drawingBufferHeight() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawingBufferHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "drawingBufferColorSpace", {
  configurable: true,
  enumerable: true,
  get: function drawingBufferColorSpace() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawingBufferColorSpace_get", arguments);
  },
  set: function drawingBufferColorSpace() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawingBufferColorSpace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "unpackColorSpace", {
  configurable: true,
  enumerable: true,
  get: function unpackColorSpace() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "unpackColorSpace_get", arguments);
  },
  set: function unpackColorSpace() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "unpackColorSpace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3074
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNPACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3314
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNPACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3315
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNPACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3316
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "PACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3330
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "PACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3331
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "PACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3332
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6144
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6145
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6146
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6403
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32849
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32856
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB10_A2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32857
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_BINDING_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32874
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNPACK_SKIP_IMAGES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32877
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNPACK_IMAGE_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32878
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32879
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_WRAP_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32882
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_3D_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32883
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33640
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_ELEMENTS_VERTICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33000
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_ELEMENTS_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33001
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_MIN_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33082
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_MAX_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33083
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_BASE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33084
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_MAX_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33085
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32775
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32776
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_COMPONENT24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33190
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_TEXTURE_LOD_BIAS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34045
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_COMPARE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34892
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_COMPARE_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34893
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CURRENT_QUERY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34917
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "QUERY_RESULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34918
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "QUERY_RESULT_AVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34919
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STREAM_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35041
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STREAM_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35042
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STATIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35045
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "STATIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35046
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DYNAMIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35049
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DYNAMIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35050
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_DRAW_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34852
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34853
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34854
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34855
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34856
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34857
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34858
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34859
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34860
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34861
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34862
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34863
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34864
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34865
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34866
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34867
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_BUFFER15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34868
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35657
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35658
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35679
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLER_2D_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35682
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAGMENT_SHADER_DERIVATIVE_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35723
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "PIXEL_PACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35051
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "PIXEL_UNPACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35052
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "PIXEL_PACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35053
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "PIXEL_UNPACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35055
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_MAT2x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35685
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_MAT2x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35686
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_MAT3x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35687
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_MAT3x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35688
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_MAT4x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35689
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_MAT4x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35690
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SRGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35904
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SRGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35905
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SRGB8_ALPHA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35907
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COMPARE_REF_TO_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34894
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34836
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34837
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34842
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34843
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35069
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_ARRAY_TEXTURE_LAYERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35071
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MIN_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35076
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35077
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_VARYING_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35659
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35866
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_BINDING_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35869
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R11F_G11F_B10F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35898
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_10F_11F_11F_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35899
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB9_E5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35901
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_5_9_9_9_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35902
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_BUFFER_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35967
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35968
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_VARYINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35971
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35972
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35973
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35976
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RASTERIZER_DISCARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35977
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35978
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35979
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INTERLEAVED_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35980
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35981
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35982
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35983
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36208
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36209
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36214
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36215
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36220
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36221
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36226
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36227
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36232
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36233
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36238
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36239
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RED_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36244
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36248
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36249
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36289
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLER_2D_ARRAY_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36292
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLER_CUBE_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36293
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36294
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36295
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36296
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36298
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36299
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36300
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36303
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36306
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36307
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36308
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36311
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH_COMPONENT32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36012
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH32F_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36013
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FLOAT_32_UNSIGNED_INT_24_8_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36269
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33296
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33297
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33298
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33299
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33300
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33301
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33302
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33303
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_DEFAULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33304
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_INT_24_8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34042
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DEPTH24_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35056
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35863
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "READ_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36008
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "DRAW_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36009
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "READ_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36010
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RENDERBUFFER_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36011
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36052
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_COLOR_ATTACHMENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36063
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36065
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36066
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36067
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36068
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36069
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36070
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36071
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36072
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36073
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36074
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36075
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36076
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36077
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36078
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COLOR_ATTACHMENT15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36079
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36182
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36183
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "HALF_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5131
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33319
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33320
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33321
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33323
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33325
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33326
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33327
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33328
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33329
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33330
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33331
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33332
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33333
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33334
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33335
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33336
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33337
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33338
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33339
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33340
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ARRAY_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34229
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "R8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36756
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RG8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36757
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36758
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGBA8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36759
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36764
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COPY_READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COPY_WRITE_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COPY_READ_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "COPY_WRITE_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35345
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35368
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35369
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35370
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_VERTEX_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35371
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_FRAGMENT_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35373
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_COMBINED_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35374
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_UNIFORM_BUFFER_BINDINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35375
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_UNIFORM_BLOCK_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35376
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35377
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35379
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BUFFER_OFFSET_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35380
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ACTIVE_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35382
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35383
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35384
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BLOCK_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35386
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35387
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35388
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_MATRIX_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35389
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_IS_ROW_MAJOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35390
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BLOCK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35391
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BLOCK_DATA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35392
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BLOCK_ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35394
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35395
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35396
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35398
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INVALID_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4294967295
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_VERTEX_OUTPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37154
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_FRAGMENT_INPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37157
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_SERVER_WAIT_TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37137
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37138
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SYNC_CONDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37139
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SYNC_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37140
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SYNC_FLAGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37141
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SYNC_FENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37142
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SYNC_GPU_COMMANDS_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37143
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "UNSIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37144
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37145
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ALREADY_SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37146
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TIMEOUT_EXPIRED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37147
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "CONDITION_SATISFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37148
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "WAIT_FAILED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37149
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SYNC_FLUSH_COMMANDS_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_DIVISOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35070
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ANY_SAMPLES_PASSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35887
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "ANY_SAMPLES_PASSED_CONSERVATIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36202
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "SAMPLER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35097
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "RGB10_A2UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36975
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36255
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36386
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_PAUSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36387
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_ACTIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36388
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TRANSFORM_FEEDBACK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36389
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_IMMUTABLE_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37167
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_ELEMENT_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36203
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TEXTURE_IMMUTABLE_LEVELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33503
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "TIMEOUT_IGNORED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: -1
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "MAX_CLIENT_WAIT_TIMEOUT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37447
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "activeTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function activeTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "activeTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "attachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function attachShader() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "attachShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "beginQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginQuery() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "beginQuery", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "beginTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "beginTransformFeedback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindAttribLocation() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindAttribLocation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindBufferBase", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindBufferBase() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindBufferBase", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindBufferRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindBufferRange() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindBufferRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindSampler() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindSampler", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindTransformFeedback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindVertexArray() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindVertexArray", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "blendColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendColor() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "blendColor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "blendEquation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendEquation() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "blendEquation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "blendEquationSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendEquationSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "blendEquationSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "blendFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendFunc() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "blendFunc", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "blendFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blendFuncSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "blendFuncSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "blitFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blitFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "blitFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bufferData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bufferData() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bufferData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bufferSubData() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bufferSubData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "checkFramebufferStatus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkFramebufferStatus() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "checkFramebufferStatus", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "clientWaitSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clientWaitSync() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "clientWaitSync", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "compileShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compileShader() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "compileShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "compressedTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "compressedTexImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "compressedTexImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexImage3D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "compressedTexImage3D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "compressedTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexSubImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "compressedTexSubImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "compressedTexSubImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compressedTexSubImage3D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "compressedTexSubImage3D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "copyBufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyBufferSubData() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "copyBufferSubData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "copyTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTexImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "copyTexImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "copyTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTexSubImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "copyTexSubImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "copyTexSubImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTexSubImage3D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "copyTexSubImage3D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createQuery() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createQuery", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSampler() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createSampler", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createShader() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createTransformFeedback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "createVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createVertexArray() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "createVertexArray", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "cullFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cullFace() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "cullFace", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteBuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteQuery() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteQuery", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteSampler() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteSampler", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteShader() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteSync() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteSync", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteTransformFeedback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "deleteVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteVertexArray() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "deleteVertexArray", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "depthFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function depthFunc() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "depthFunc", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "depthMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function depthMask() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "depthMask", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "depthRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function depthRange() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "depthRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "detachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function detachShader() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "detachShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "disable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disable() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "disable", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "drawArraysInstanced", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawArraysInstanced() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawArraysInstanced", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "drawElementsInstanced", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawElementsInstanced() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawElementsInstanced", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "drawRangeElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawRangeElements() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawRangeElements", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "enable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enable() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "enable", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "endQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endQuery() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "endQuery", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "endTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "endTransformFeedback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "fenceSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fenceSync() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "fenceSync", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function finish() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "finish", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "flush", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "framebufferRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function framebufferRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "framebufferRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "framebufferTexture2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function framebufferTexture2D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "framebufferTexture2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "framebufferTextureLayer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function framebufferTextureLayer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "framebufferTextureLayer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "frontFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function frontFace() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "frontFace", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "generateMipmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function generateMipmap() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "generateMipmap", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getActiveAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveAttrib() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getActiveAttrib", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getActiveUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveUniform() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getActiveUniform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getActiveUniformBlockName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveUniformBlockName() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getActiveUniformBlockName", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getActiveUniformBlockParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveUniformBlockParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getActiveUniformBlockParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getActiveUniforms", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getActiveUniforms() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getActiveUniforms", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getAttachedShaders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttachedShaders() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getAttachedShaders", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttribLocation() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getAttribLocation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getBufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBufferParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getBufferParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getBufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBufferSubData() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getBufferSubData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getContextAttributes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContextAttributes() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getContextAttributes", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getError", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getError() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getError", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getExtension", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getExtension() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getExtension", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getFragDataLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFragDataLocation() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getFragDataLocation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getFramebufferAttachmentParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFramebufferAttachmentParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getFramebufferAttachmentParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getIndexedParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getIndexedParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getIndexedParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getInternalformatParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInternalformatParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getInternalformatParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getProgramInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getProgramInfoLog() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getProgramInfoLog", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getProgramParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getProgramParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getProgramParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getQuery() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getQuery", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getQueryParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getQueryParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getQueryParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getRenderbufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRenderbufferParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getRenderbufferParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getSamplerParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSamplerParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getSamplerParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getShaderInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderInfoLog() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getShaderInfoLog", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getShaderParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getShaderParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getShaderPrecisionFormat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderPrecisionFormat() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getShaderPrecisionFormat", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getShaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getShaderSource() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getShaderSource", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getSupportedExtensions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSupportedExtensions() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getSupportedExtensions", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getSyncParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSyncParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getSyncParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getTexParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTexParameter() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getTexParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getTransformFeedbackVarying", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTransformFeedbackVarying() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getTransformFeedbackVarying", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniform() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getUniform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getUniformBlockIndex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniformBlockIndex() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getUniformBlockIndex", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getUniformIndices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniformIndices() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getUniformIndices", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getUniformLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUniformLocation() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getUniformLocation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getVertexAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVertexAttrib() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getVertexAttrib", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "getVertexAttribOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVertexAttribOffset() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "getVertexAttribOffset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "hint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hint() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "hint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "invalidateFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function invalidateFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "invalidateFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "invalidateSubFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function invalidateSubFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "invalidateSubFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isBuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isContextLost", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isContextLost() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isContextLost", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isEnabled() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isEnabled", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isQuery() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isQuery", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isRenderbuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isRenderbuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSampler() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isSampler", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isShader() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isShader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSync() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isSync", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isTransformFeedback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "isVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isVertexArray() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "isVertexArray", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "lineWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lineWidth() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "lineWidth", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "linkProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function linkProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "linkProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "pauseTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pauseTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "pauseTransformFeedback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "pixelStorei", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pixelStorei() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "pixelStorei", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "polygonOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function polygonOffset() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "polygonOffset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "readBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readBuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "readBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "readPixels", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readPixels() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "readPixels", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "renderbufferStorage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function renderbufferStorage() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "renderbufferStorage", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "renderbufferStorageMultisample", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function renderbufferStorageMultisample() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "renderbufferStorageMultisample", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "resumeTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resumeTransformFeedback() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "resumeTransformFeedback", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "sampleCoverage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sampleCoverage() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "sampleCoverage", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "samplerParameterf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function samplerParameterf() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "samplerParameterf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "samplerParameteri", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function samplerParameteri() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "samplerParameteri", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "shaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function shaderSource() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "shaderSource", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "stencilFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilFunc() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "stencilFunc", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "stencilFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilFuncSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "stencilFuncSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "stencilMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilMask() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "stencilMask", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "stencilMaskSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilMaskSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "stencilMaskSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "stencilOp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilOp() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "stencilOp", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "stencilOpSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stencilOpSeparate() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "stencilOpSeparate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "texImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "texImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "texImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texImage3D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "texImage3D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "texParameterf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texParameterf() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "texParameterf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "texParameteri", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texParameteri() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "texParameteri", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "texStorage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texStorage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "texStorage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "texStorage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texStorage3D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "texStorage3D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "texSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texSubImage2D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "texSubImage2D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "texSubImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function texSubImage3D() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "texSubImage3D", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "transformFeedbackVaryings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transformFeedbackVaryings() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "transformFeedbackVaryings", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform1ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1ui() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform1ui", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform2ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2ui() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform2ui", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform3ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3ui() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform3ui", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform4ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4ui() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform4ui", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformBlockBinding", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformBlockBinding() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformBlockBinding", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "useProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function useProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "useProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "validateProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function validateProgram() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "validateProgram", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttribDivisor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribDivisor() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttribDivisor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttribI4i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribI4i() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttribI4i", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttribI4ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribI4ui() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttribI4ui", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttribIPointer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribIPointer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttribIPointer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "waitSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function waitSync() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "waitSync", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindBuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindFramebuffer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindFramebuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "bindTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bindTexture() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "bindTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "clearBufferfi", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearBufferfi() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "clearBufferfi", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "clearBufferfv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearBufferfv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "clearBufferfv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "clearBufferiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearBufferiv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "clearBufferiv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "clearBufferuiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearBufferuiv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "clearBufferuiv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "clearColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearColor() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "clearColor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "clearDepth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearDepth() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "clearDepth", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "clearStencil", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearStencil() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "clearStencil", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "colorMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function colorMask() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "colorMask", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "disableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disableVertexAttribArray() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "disableVertexAttribArray", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "drawArrays", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawArrays() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawArrays", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "drawBuffers", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawBuffers() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawBuffers", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "drawElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawElements() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "drawElements", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "enableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enableVertexAttribArray() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "enableVertexAttribArray", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "scissor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scissor() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "scissor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1f() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform1f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform1fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform1i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1i() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform1i", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform1iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1iv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform1iv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform1uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform1uiv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform1uiv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2f() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform2f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform2fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform2i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2i() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform2i", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform2iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2iv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform2iv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform2uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform2uiv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform2uiv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3f() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform3f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform3fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform3i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3i() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform3i", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform3iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3iv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform3iv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform3uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform3uiv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform3uiv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4f() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform4f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform4fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform4i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4i() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform4i", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform4iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4iv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform4iv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniform4uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniform4uiv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniform4uiv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformMatrix2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix2fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformMatrix2fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformMatrix2x3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix2x3fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformMatrix2x3fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformMatrix2x4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix2x4fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformMatrix2x4fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformMatrix3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix3fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformMatrix3fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformMatrix3x2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix3x2fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformMatrix3x2fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformMatrix3x4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix3x4fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformMatrix3x4fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformMatrix4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix4fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformMatrix4fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformMatrix4x2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix4x2fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformMatrix4x2fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "uniformMatrix4x3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function uniformMatrix4x3fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "uniformMatrix4x3fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttrib1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib1f() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttrib1f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttrib1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib1fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttrib1fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttrib2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib2f() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttrib2f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttrib2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib2fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttrib2fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttrib3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib3f() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttrib3f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttrib3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib3fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttrib3fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttrib4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib4f() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttrib4f", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttrib4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttrib4fv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttrib4fv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttribI4iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribI4iv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttribI4iv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttribI4uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribI4uiv() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttribI4uiv", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "vertexAttribPointer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vertexAttribPointer() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "vertexAttribPointer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "viewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function viewport() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "viewport", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype, "makeXRCompatible", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function makeXRCompatible() {
    return bodavm.toolsFunc.dispatch(this, WebGL2RenderingContext.prototype, "WebGL2RenderingContext", "makeXRCompatible", arguments);
  }
});