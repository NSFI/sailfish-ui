"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/sailfish-ui/theme-default/vusion-icon-font.ttf?05b184db7024f2dfb96c3710ea6de6a3") format("truetype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.eot?05b184db7024f2dfb96c3710ea6de6a3#iefix") format("embedded-opentype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.woff?05b184db7024f2dfb96c3710ea6de6a3") format("woff"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.svg?05b184db7024f2dfb96c3710ea6de6a3#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/sailfish-ui/theme-default/vusion-icon-font.ttf?05b184db7024f2dfb96c3710ea6de6a3") format("truetype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.eot?05b184db7024f2dfb96c3710ea6de6a3#iefix") format("embedded-opentype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.woff?05b184db7024f2dfb96c3710ea6de6a3") format("woff"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.svg?05b184db7024f2dfb96c3710ea6de6a3#vusion-icon-font") format("svg");\n}'},webpackJsonp([11],{398:function(t,a,s){var e="ICON-FONT-FILE-STYLE";function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var a=document.createElement("style"),s=document.getElementsByTagName("head")[0];a.innerHTML=n(t),a.id=e,a.type="text/css",s?s.appendChild(a):window.addEventListener("load",function(){s.appendChild(a)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},436:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("u-switch",{attrs:{width:"wide"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},[t._v(t._s(t.value?"ON":"OFF"))])},staticRenderFns:[]},n={components:{C92ff9a:s(1)({data:function(){return{value:!1}}},e,!1,null,null,null).exports}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("u-article",[s("h1",[t._v("开关 Switch")]),s("h2",[t._v("示例")]),s("h3",[t._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-switch")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("Value绑定")]),s("div",{staticClass:"u-example"},[s("C92ff9a")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("width")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"wide"')]),t._v(">")]),t._v("{{ value ? 'ON' : 'OFF' }}"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{attrs:{class:"javascript"}},[t._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),s("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),s("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(" };\n    },\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("只读和禁用")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-switch",{attrs:{readonly:""}}),s("u-switch",{attrs:{disabled:""}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),s("h2",[t._v("API")]),s("h3",[t._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop/Attr")]),s("th",[t._v("Type")]),s("th",[t._v("Default")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("value")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("开关状态")])]),s("tr",[s("td",[t._v("readonly")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("是否只读")])]),s("tr",[s("td",[t._v("disabled")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("是否禁用")])])])]),s("h3",[t._v("Slots")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Slot")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("(default)")]),s("td",[t._v("插入文本或HTML")])])])]),s("h3",[t._v("Events")]),s("h4",[t._v("@before-toggle")]),s("p",[t._v("切换开关状态前触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.value")]),s("td",[t._v("Boolean")]),s("td",[t._v("开关状态")])]),s("tr",[s("td",[t._v("$event.oldValue")]),s("td",[t._v("Boolean")]),s("td",[t._v("旧的开关状态")])]),s("tr",[s("td",[t._v("$event.preventDefault")]),s("td",[t._v("Function")]),s("td",[t._v("阻止切换流程")])])])]),s("h4",[t._v("@input")]),s("p",[t._v("切换开关状态时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event")]),s("td",[t._v("Boolean")]),s("td",[t._v("切换后的开关状态")])])])]),s("h4",[t._v("@toggle")]),s("p",[t._v("切换开关状态时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.value")]),s("td",[t._v("Boolean")]),s("td",[t._v("开关状态")])]),s("tr",[s("td",[t._v("$event.oldValue")]),s("td",[t._v("Boolean")]),s("td",[t._v("旧的开关状态")])])])]),s("h4",[t._v("@change")]),s("p",[t._v("开关状态改变时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.value")]),s("td",[t._v("Boolean")]),s("td",[t._v("开关状态")])]),s("tr",[s("td",[t._v("$event.oldValue")]),s("td",[t._v("Boolean")]),s("td",[t._v("旧的开关状态")])])])])])},staticRenderFns:[]},v=s(1)(n,l,!1,null,null,null);a.default=v.exports}});