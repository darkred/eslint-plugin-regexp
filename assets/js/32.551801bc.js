(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{510:function(e,t,r){"use strict";r.r(t);var a=r(6),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"regexp-no-empty-alternative"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-empty-alternative"}},[e._v("#")]),e._v(" regexp/no-empty-alternative")]),e._v(" "),r("blockquote",[r("p",[e._v("disallow alternatives without elements")])]),e._v(" "),r("h2",{attrs:{id:"rule-details"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),r("p",[e._v("While (re-)writing long regular expressions, it can happen that one forgets to\nremove the "),r("code",[e._v("|")]),e._v(" character of a former alternative. This rule tries to point out\nthese potential mistakes by reporting all empty alternatives.")]),e._v(" "),r("eslint-code-block",[r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-empty-alternative: "error" */')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?:)")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a+|b*")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a+|b+|")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\|\\||\\|||\\|\\|\\|")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?:a|bc|def|h||ij|k)")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n")])])])]),e._v(" "),r("h2",{attrs:{id:"options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),r("p",[e._v("Nothing.")]),e._v(" "),r("h2",{attrs:{id:"compatibility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" ❤️ Compatibility")]),e._v(" "),r("p",[e._v("This rule was taken from "),r("a",{attrs:{href:"https://github.com/RunDevelopment/eslint-plugin-clean-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("eslint-plugin-clean-regex"),r("OutboundLink")],1),e._v("."),r("br"),e._v("\nThis rule is compatible with "),r("a",{attrs:{href:"https://github.com/RunDevelopment/eslint-plugin-clean-regex/blob/master/docs/rules/no-empty-alternative.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("clean-regex/no-empty-alternative"),r("OutboundLink")],1),e._v(" rule.")]),e._v(" "),r("h2",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),r("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.8.0")]),e._v(" "),r("h2",{attrs:{id:"implementation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-empty-alternative.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-empty-alternative.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);