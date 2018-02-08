"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/sailfish-ui/theme-default/vusion-icon-font.ttf?4b3cdc0f815e47b57d13c55d8f2d2b5a") format("truetype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.eot?4b3cdc0f815e47b57d13c55d8f2d2b5a#iefix") format("embedded-opentype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.woff?4b3cdc0f815e47b57d13c55d8f2d2b5a") format("woff"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.svg?4b3cdc0f815e47b57d13c55d8f2d2b5a#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/sailfish-ui/theme-default/vusion-icon-font.ttf?4b3cdc0f815e47b57d13c55d8f2d2b5a") format("truetype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.eot?4b3cdc0f815e47b57d13c55d8f2d2b5a#iefix") format("embedded-opentype"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.woff?4b3cdc0f815e47b57d13c55d8f2d2b5a") format("woff"),\n\turl("/sailfish-ui/theme-default/vusion-icon-font.svg?4b3cdc0f815e47b57d13c55d8f2d2b5a#vusion-icon-font") format("svg");\n}'},webpackJsonp([16],{394:function(s,t,a){var n="ICON-FONT-FILE-STYLE";function l(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function v(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=l(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(v(),window.HAS_CREATE_FONT_STYLE=!0)}},437:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("弹出层 Popper")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("p",[s._v("一般情况下，需要用一个popper slot来设置弹出元素，并且要用default slot来设置触发元素，这个触发元素通常也作为参照元素。由于Vue的限制，每个slot中只能有一个根节点。")]),a("div",{staticClass:"u-example"},[a("u-popper",[a("u-button",[s._v("click")]),a("div",{attrs:{slot:"popper"},slot:"popper"},[a("u-button",[s._v("popper")])],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("click"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("popper"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("触发事件")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-popper",{attrs:{trigger:"click"}},[a("u-button",[s._v("click（默认）")]),a("div",{attrs:{slot:"popper"},slot:"popper"},[a("u-button",[s._v("popper")])],1)],1),a("u-popper",{attrs:{trigger:"hover"}},[a("u-button",[s._v("hover")]),a("div",{attrs:{slot:"popper"},slot:"popper"},[a("u-button",[s._v("popper")])],1)],1),a("u-popper",{attrs:{trigger:"right-click"}},[a("u-button",[s._v("right-click")]),a("div",{attrs:{slot:"popper"},slot:"popper"},[a("u-button",[s._v("popper")])],1)],1),a("u-popper",{attrs:{trigger:"double-click"}},[a("u-button",[s._v("double-click")]),a("div",{attrs:{slot:"popper"},slot:"popper"},[a("u-button",[s._v("popper")])],1)],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"click"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("click（默认）"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("popper"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("hover"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("popper"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"right-click"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("right-click"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("popper"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("trigger")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"double-click"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("double-click"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("popper"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("弹出位置")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-popper",{attrs:{placement:"bottom-start"}},[a("u-button",[s._v("bottom-start（默认）")]),a("div",{attrs:{slot:"popper"},slot:"popper"},[a("u-button",[s._v("popper")])],1)],1),a("u-popper",{attrs:{placement:"bottom"}},[a("u-button",[s._v("bottom")]),a("div",{attrs:{slot:"popper"},slot:"popper"},[a("u-button",[s._v("popper")])],1)],1),a("u-popper",{attrs:{placement:"right-start"}},[a("u-button",[s._v("right-start")]),a("div",{attrs:{slot:"popper"},slot:"popper"},[a("u-button",[s._v("popper")])],1)],1),a("u-popper",{attrs:{placement:"left"}},[a("u-button",[s._v("left")]),a("div",{attrs:{slot:"popper"},slot:"popper"},[a("u-button",[s._v("popper")])],1)],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"bottom-start"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("bottom-start（默认）"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("popper"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"bottom"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("bottom"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("popper"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"right-start"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("right-start"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("popper"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placement")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("left"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"popper"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("popper"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("禁用")]),a("div",{staticClass:"u-example"},[a("u-popper",{attrs:{disabled:""}},[a("u-button",{attrs:{disabled:""}},[s._v("disabled")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("disabled"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-popper")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("Popper API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Attr/Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("trigger")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'click'")])]),a("td",[s._v("弹出层的触发方式，可选click,hover,manual")])]),a("tr",[a("td",[s._v("placement")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'bottom'")])]),a("td",[s._v("弹出层的弹出方向：top,bottom,left,right,top-start,top-end...")])]),a("tr",[a("td",[s._v("offset")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("undefined")])]),a("td",[s._v('弹出层偏移，"10px 10px","10% 10%"')])]),a("tr",[a("td",[s._v("escape-with-reference")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("true")])]),a("td",[s._v("当触发元素离开边际时，弹出层是否跟随离开或保留在边际元素内")])]),a("tr",[a("td",[s._v("hover-delay")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("0")])]),a("td",[s._v("trigger为hover时的延迟时间")])]),a("tr",[a("td",[s._v("boundaries-element")]),a("td",[s._v("Element, String")]),a("td",[a("code",{pre:!0},[s._v("scrollParent")])]),a("td",[s._v("弹出层所在的边框元素，定义弹出层的边际，默认为第一个滚动的父级元素")])]),a("tr",[a("td",[s._v("arrow-element")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'[u-arrow]'")])]),a("td",[s._v("箭头元素的query值，默认为u-arrow属性，定义该属性则组件会控制箭头元素的偏移量")])]),a("tr",[a("td",[s._v("append-to")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("body")])]),a("td",[s._v("指示添加到哪个元素")])]),a("tr",[a("td",[s._v("options")]),a("td",[s._v("Object")]),a("td",[a("code",{pre:!0},[s._v("{ modifiers: {} }")])]),a("td",[s._v("补充popper.js的选项")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否禁用")])])])]),a("h3",[s._v("Events")]),a("h4",[s._v("@before-toggle")]),a("p",[s._v("弹出/隐藏前触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("open")]),a("td",[s._v("Boolean")]),a("td",[s._v("弹出/隐藏状态")])]),a("tr",[a("td",[s._v("$event.preventDefault")]),a("td",[s._v("Function")]),a("td",[s._v("阻止弹出/隐藏流程")])])])]),a("h4",[s._v("@toggle")]),a("p",[s._v("弹出/隐藏时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.open")]),a("td",[s._v("Boolean")]),a("td",[s._v("弹出/隐藏状态")])])])]),a("h3",[s._v("Methods")]),a("h4",[s._v("update")]),a("p",[s._v("更新popper实例")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h4",[s._v("toggle")]),a("p",[s._v("切换弹出/隐藏状态")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("open")]),a("td",[s._v("Boolean")]),a("td",[s._v("弹出/隐藏状态")])])])])])},staticRenderFns:[]},l=a(1)(null,n,!1,null,null,null);t.default=l.exports}});