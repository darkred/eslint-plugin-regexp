export = {
    plugins: ["regexp"],
    rules: {
        // ESLint core rules
        "no-control-regex": "error",
        "no-empty-character-class": "error",
        "no-invalid-regexp": "error",
        "no-misleading-character-class": "error",
        "no-regex-spaces": "error",
        "prefer-regex-literals": "error",
        // The ESLint rule will report fewer cases than our rule
        "no-useless-backreference": "off",

        // eslint-plugin-regexp rules
        "regexp/confusing-quantifier": "warn",
        "regexp/control-character-escape": "error",
        "regexp/match-any": "error",
        "regexp/negation": "error",
        "regexp/no-assertion-capturing-group": "error",
        "regexp/no-dupe-characters-character-class": "error",
        "regexp/no-dupe-disjunctions": "error",
        "regexp/no-empty-alternative": "warn",
        "regexp/no-empty-capturing-group": "error",
        "regexp/no-empty-group": "error",
        "regexp/no-empty-lookarounds-assertion": "error",
        "regexp/no-escape-backspace": "error",
        "regexp/no-invisible-character": "error",
        "regexp/no-lazy-ends": "warn",
        "regexp/no-legacy-features": "error",
        "regexp/no-non-standard-flag": "error",
        "regexp/no-obscure-range": "error",
        "regexp/no-octal": "error",
        "regexp/no-optional-assertion": "error",
        "regexp/no-potentially-useless-backreference": "warn",
        "regexp/no-standalone-backslash": "error",
        "regexp/no-trivially-nested-assertion": "error",
        "regexp/no-trivially-nested-quantifier": "error",
        "regexp/no-unused-capturing-group": "error",
        "regexp/no-useless-assertions": "error",
        "regexp/no-useless-backreference": "error",
        "regexp/no-useless-character-class": "error",
        "regexp/no-useless-dollar-replacements": "error",
        "regexp/no-useless-escape": "error",
        "regexp/no-useless-exactly-quantifier": "error",
        "regexp/no-useless-flag": "warn",
        "regexp/no-useless-lazy": "error",
        "regexp/no-useless-non-capturing-group": "error",
        "regexp/no-useless-quantifier": "error",
        "regexp/no-useless-range": "error",
        "regexp/no-useless-two-nums-quantifier": "error",
        "regexp/no-zero-quantifier": "error",
        "regexp/optimal-lookaround-quantifier": "warn",
        "regexp/optimal-quantifier-concatenation": "error",
        "regexp/prefer-character-class": "error",
        "regexp/prefer-d": "error",
        "regexp/prefer-plus-quantifier": "error",
        "regexp/prefer-predefined-assertion": "error",
        "regexp/prefer-question-quantifier": "error",
        "regexp/prefer-range": "error",
        "regexp/prefer-star-quantifier": "error",
        "regexp/prefer-t": "error",
        "regexp/prefer-unicode-codepoint-escapes": "error",
        "regexp/prefer-w": "error",
        "regexp/sort-flags": "error",
        "regexp/strict": "error",
    },
}
