"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/sailfish-ui/theme-default/vusion-icon-font.ttf?4b3cdc0f815e47b57d13c55d8f2d2b5a") format("truetype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.eot?4b3cdc0f815e47b57d13c55d8f2d2b5a#iefix") format("embedded-opentype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.woff?4b3cdc0f815e47b57d13c55d8f2d2b5a") format("woff"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.svg?4b3cdc0f815e47b57d13c55d8f2d2b5a#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/sailfish-ui/theme-default/vusion-icon-font.ttf?4b3cdc0f815e47b57d13c55d8f2d2b5a") format("truetype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.eot?4b3cdc0f815e47b57d13c55d8f2d2b5a#iefix") format("embedded-opentype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.woff?4b3cdc0f815e47b57d13c55d8f2d2b5a") format("woff"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.svg?4b3cdc0f815e47b57d13c55d8f2d2b5a#vusion-icon-font") format("svg");\n}'},webpackJsonp([10],{394:function(t,s,a){var e="ICON-FONT-FILE-STYLE";function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=n(t),s.id=e,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},430:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-switch",{attrs:{width:"wide"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}},[t._v(t._s(t.value?"ON":"OFF"))])},staticRenderFns:[]},n={components:{Cec3483:a(1)({data:function(){return{value:!1}}},e,!1,null,null,null).exports}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("开关 Switch")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-switch")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("Value绑定")]),a("div",{staticClass:"u-example"},[a("Cec3483")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("width")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"wide"')]),t._v(">")]),t._v("{{ value ? 'ON' : 'OFF' }}"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(" };\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("只读和禁用")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-switch",{attrs:{readonly:""}}),a("u-switch",{attrs:{disabled:""}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("value")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("开关状态")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])])])]),a("h3",[t._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Slot")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("(default)")]),a("td",[t._v("插入文本或HTML")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@before-toggle")]),a("p",[t._v("切换开关状态前触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Boolean")]),a("td",[t._v("开关状态")])]),a("tr",[a("td",[t._v("$event.oldValue")]),a("td",[t._v("Boolean")]),a("td",[t._v("旧的开关状态")])]),a("tr",[a("td",[t._v("$event.preventDefault")]),a("td",[t._v("Function")]),a("td",[t._v("阻止切换流程")])])])]),a("h4",[t._v("@input")]),a("p",[t._v("切换开关状态时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event")]),a("td",[t._v("Boolean")]),a("td",[t._v("切换后的开关状态")])])])]),a("h4",[t._v("@toggle")]),a("p",[t._v("切换开关状态时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Boolean")]),a("td",[t._v("开关状态")])]),a("tr",[a("td",[t._v("$event.oldValue")]),a("td",[t._v("Boolean")]),a("td",[t._v("旧的开关状态")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("开关状态改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Boolean")]),a("td",[t._v("开关状态")])]),a("tr",[a("td",[t._v("$event.oldValue")]),a("td",[t._v("Boolean")]),a("td",[t._v("旧的开关状态")])])])])])},staticRenderFns:[]},v=a(1)(n,l,!1,null,null,null);s.default=v.exports}});