(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{530:function(e,r,t){"use strict";t.r(r);var a=t(6),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-no-useless-backreference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-useless-backreference"}},[e._v("#")]),e._v(" regexp/no-useless-backreference")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow useless backreferences in regular expressions")])]),e._v(" "),t("ul",[t("li",[e._v("⚙️ This rule is included in "),t("code",[e._v('"plugin:regexp/recommended"')]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("Backreferences that will always trivially accept serve no function and can be removed.")]),e._v(" "),t("p",[e._v("This rule is a based on the ESLint core "),t("a",{attrs:{href:"https://eslint.org/docs/rules/no-useless-backreference",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-useless-backreference"),t("OutboundLink")],1),e._v(" rule. It reports all the ESLint core rule reports and some more.")]),e._v(" "),t("h3",{attrs:{id:"causes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#causes"}},[e._v("#")]),e._v(" Causes")]),e._v(" "),t("p",[e._v("Backreferences can be useless for multiple reasons.")]),e._v(" "),t("h4",{attrs:{id:"empty-capturing-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#empty-capturing-groups"}},[e._v("#")]),e._v(" Empty capturing groups")]),e._v(" "),t("p",[e._v("The is the easiest reason. The references capturing group does not consume any characters (e.g. "),t("code",[e._v("/(\\b)a\\1/")]),e._v("). Since the capturing group can only capture the empty string, the backreference is guaranteed to accept any input.")]),e._v(" "),t("h4",{attrs:{id:"nested-backreferences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nested-backreferences"}},[e._v("#")]),e._v(" Nested backreferences")]),e._v(" "),t("p",[e._v("If a backreference is inside the group it references (e.g. "),t("code",[e._v("/(a\\1)/")]),e._v("), then it is guaranteed to trivially accept.")]),e._v(" "),t("p",[e._v("This is because the regex engine only sets the text of a capturing group "),t("strong",[e._v("after")]),e._v(" the group has been matched. Since the regex engine is still in the process of matching the group, its capture text is undefined.")]),e._v(" "),t("h4",{attrs:{id:"different-alternatives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#different-alternatives"}},[e._v("#")]),e._v(" Different alternatives")]),e._v(" "),t("p",[e._v("If a backreference and its referenced capturing group are in different alternatives (e.g. "),t("code",[e._v("/(a)|\\1/")]),e._v("), then the backreference will always trivially accept because the captured text of the referenced group is undefined.")]),e._v(" "),t("h4",{attrs:{id:"forward-references-and-backward-references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forward-references-and-backward-references"}},[e._v("#")]),e._v(" Forward references and backward references")]),e._v(" "),t("p",[e._v("Backreferences are supposed to be matched "),t("strong",[e._v("after")]),e._v(" their referenced capturing group. Since regular expressions are matched from left to right, backreferences usually appear to the right of to their referenced capturing groups (e.g. "),t("code",[e._v("/(a)\\1/")]),e._v("). However, backreferences can also be placed before (to the left of) their referenced capturing group (e.g. "),t("code",[e._v("/\\1(a)/")]),e._v("). These backreferences are to trivially accept because the captured text of their referenced groups is undefined. We call these backreferences "),t("em",[e._v("forward references")]),e._v(".")]),e._v(" "),t("p",[e._v("Inside "),t("strong",[e._v("lookbehind assertions")]),e._v(", regular expressions are matched from right to left and not from left to right. This means that only backreferences now have to appear to the left of their respective capturing group to be matched after them (e.g. "),t("code",[e._v("/(?<=\\1(a))/")]),e._v("). Backreferences placed to before (to the right of) their referenced capturing group inside lookbehinds are guaranteed to trivially accept. We call these backreferences "),t("em",[e._v("backward references")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"negated-lookaround-assertions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negated-lookaround-assertions"}},[e._v("#")]),e._v(" Negated lookaround assertions")]),e._v(" "),t("p",[e._v("If the referenced capturing group of a backreference is inside a negated lookaround assertion the backreference is also part of, then the backreference will be guaranteed to trivially accept.")]),e._v(" "),t("p",[e._v("To understand why this is the case, let's look at the example "),t("code",[e._v("/(?!(a))\\w\\1/y")]),e._v(".")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Let's assume the input string is "),t("code",[e._v("ab")]),e._v(". "),t("br"),e._v("\nSince "),t("code",[e._v("(a)")]),e._v(" accepts the character "),t("code",[e._v("a")]),e._v(", "),t("code",[e._v("(?!(a))")]),e._v(" will reject. So the input is reject before the backreference "),t("code",[e._v("\\1")]),e._v(" can be reached.")]),e._v(" "),t("p",[e._v("The result of "),t("code",[e._v('/(?!(a))\\w\\1/y.exec("ab")')]),e._v(" is "),t("code",[e._v("null")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Let's assume the input string is "),t("code",[e._v("bc")]),e._v(". "),t("br"),e._v("\nSince "),t("code",[e._v("(a)")]),e._v(" rejects the character "),t("code",[e._v("b")]),e._v(", its captured text will be undefined and "),t("code",[e._v("(?!(a))")]),e._v(" will accept. Then "),t("code",[e._v("\\w")]),e._v(" will accept and consume the character "),t("code",[e._v("b")]),e._v(". Since the captured text of "),t("code",[e._v("(a)")]),e._v(" is undefined, the backreference "),t("code",[e._v("\\1")]),e._v(" will trivially accept without consuming characters.")]),e._v(" "),t("p",[e._v("The result of "),t("code",[e._v('/(?!(a))\\w\\1/y.exec("bc")')]),e._v(" is "),t("code",[e._v("[ 'b', undefined, index: 0, input: 'bc' ]")]),e._v(".")])])]),e._v(" "),t("p",[e._v("Note that this is only a problem if the backreference is not part of the negated lookaround assertion. I.e. "),t("code",[e._v("/(?!(a)\\1)\\w/")]),e._v(" is okay.")]),e._v(" "),t("eslint-code-block",[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-useless-backreference: "error" */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a)b\\1")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a?)b\\1")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(\\b|a)+b\\1")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a)?(?:a|\\1)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\1(a)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a\\1)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a)|\\1")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?:(a)|\\1)+")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=(a)\\1)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(\\b)a\\1")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("p",[e._v("Nothing.")]),e._v(" "),t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" 📚 Further reading")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://eslint.org/docs/rules/no-useless-backreference",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-useless-backreference"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.1.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-useless-backreference.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-useless-backreference.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);r.default=s.exports}}]);