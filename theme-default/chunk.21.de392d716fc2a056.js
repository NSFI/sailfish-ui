"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/sailfish-ui/theme-default/vusion-icon-font.ttf?13ae51d7c7cfadd1049827911ca0b725") format("truetype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.eot?13ae51d7c7cfadd1049827911ca0b725#iefix") format("embedded-opentype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.woff?13ae51d7c7cfadd1049827911ca0b725") format("woff"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.svg?13ae51d7c7cfadd1049827911ca0b725#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/sailfish-ui/theme-default/vusion-icon-font.ttf?13ae51d7c7cfadd1049827911ca0b725") format("truetype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.eot?13ae51d7c7cfadd1049827911ca0b725#iefix") format("embedded-opentype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.woff?13ae51d7c7cfadd1049827911ca0b725") format("woff"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.svg?13ae51d7c7cfadd1049827911ca0b725#vusion-icon-font") format("svg");\n}'},webpackJsonp([21],{390:function(t,s,a){var n="ICON-FONT-FILE-STYLE";function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},409:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={data:function(){return{value:3306,output:""}},methods:{onInput:function(t){this.output=JSON.stringify({inputValue:t,modelValue:this.value})}}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("u-input",{attrs:{maxlength:"12",placeholder:"请输入端口号"},on:{input:t.onInput},model:{value:t.value,callback:function(s){t.value=t._n(s)},expression:"value"}}),t._v("\n    输出："+t._s(t.output)+"\n")],1)},staticRenderFns:[]},l={components:{C184266:a(1)(n,e,!1,null,null,null).exports}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("单行输入 Input")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("p",[t._v("大部分属性与"),a("code",{pre:!0},[t._v("<input>")]),t._v("元素一致。")]),a("div",{staticClass:"u-example"},[a("u-input",{attrs:{maxlength:"12",placeholder:"1~12位小写字母",autofocus:""}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("maxlength")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"12"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"1~12位小写字母"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("autofocus")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("加密")]),a("div",{staticClass:"u-example"},[a("u-input",{attrs:{type:"password",maxlength:"12",placeholder:"请输入密码"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"password"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("maxlength")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"12"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"请输入密码"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("数字")]),a("p",[t._v("使用"),a("code",{pre:!0},[t._v("v-model")]),t._v("的"),a("code",{pre:!0},[t._v("number")]),t._v("修饰符，可以轻松将输入值转成number类型。")]),a("div",{staticClass:"u-example"},[a("C184266")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model.number")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("maxlength")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"12"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"请输入端口号"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@input")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"onInput"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(">")]),t._v("\n    输出：{{ output }}\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("3306")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("output")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("''")]),t._v(",\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        onInput(value) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".output = "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("JSON")]),t._v(".stringify({\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("inputValue")]),t._v(": value,\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("modelValue")]),t._v(": "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".value,\n            });\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("只读与禁用")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-input",{attrs:{value:"只读",readonly:""}}),a("u-input",{attrs:{value:"禁用",disabled:""}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"只读"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"禁用"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-input")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("'text'")])]),a("td",[t._v("输入框的类型，目前只支持两种："),a("code",{pre:!0},[t._v("'text'")]),t._v("和"),a("code",{pre:!0},[t._v("'password'")])])]),a("tr",[a("td",[t._v("value")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("输入框的值")])]),a("tr",[a("td",[t._v("placeholder")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("原生属性")])]),a("tr",[a("td",[t._v("minlength")]),a("td",[t._v("Number")]),a("td"),a("td",[t._v("原生属性")])]),a("tr",[a("td",[t._v("maxlength")]),a("td",[t._v("Number")]),a("td"),a("td",[t._v("原生属性")])]),a("tr",[a("td",[t._v("autofocus")]),a("td",[t._v("Boolean")]),a("td"),a("td",[t._v("原生属性")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td"),a("td",[t._v("原生属性")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td"),a("td",[t._v("原生属性")])]),a("tr",[a("td",[t._v("size")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("'normal'")])]),a("td",[t._v("大小扩展，支持一个值："),a("code",{pre:!0},[t._v("'mini'")]),t._v(", "),a("code",{pre:!0},[t._v("'small'")]),t._v(", "),a("code",{pre:!0},[t._v("'normal'")]),t._v(", "),a("code",{pre:!0},[t._v("'large'")]),t._v(", "),a("code",{pre:!0},[t._v("'huge'")]),t._v(", "),a("code",{pre:!0},[t._v("'full'")]),t._v("，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式")])])])]),a("h4",[t._v("@input")]),a("p",[t._v("输入时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event")]),a("td",[t._v("String")]),a("td",[t._v("输入框的值")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("值变化时触发（与原生事件不同）")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("String")]),a("td",[t._v("改变后的值")])]),a("tr",[a("td",[t._v("$event.oldValue")]),a("td",[t._v("String")]),a("td",[t._v("旧的值")])])])]),a("h4",[t._v("@focus")]),a("p",[t._v("获得焦点时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event")]),a("td",[t._v("String")]),a("td",[t._v("原生事件对象")])])])]),a("h4",[t._v("@blur")]),a("p",[t._v("失去焦点时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event")]),a("td",[t._v("String")]),a("td",[t._v("原生事件对象")])])])])])},staticRenderFns:[]},r=a(1)(l,v,!1,null,null,null);s.default=r.exports}});