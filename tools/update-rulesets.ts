import path from "path"
import fs from "fs"
// import eslint from "eslint"
import { rules } from "./lib/load-rules"

const coreRules = [
    // Possible Errors
    "no-control-regex",
    "no-misleading-character-class",
    "no-regex-spaces",
    // Best Practices
    // "prefer-named-capture-group", // modern
    "prefer-regex-literals",
    // "require-unicode-regexp", // modern
]

const content = `export const plugins = ["regexp"]
export const rules = {
    // ESLint core rules
    ${coreRules.map((ruleName) => `"${ruleName}": "error"`).join(",\n    ")},
    // The ESLint rule will report fewer cases than our rule
    "no-invalid-regexp": "off",
    "no-useless-backreference": "off",
    "no-empty-character-class": "off",

    // eslint-plugin-regexp rules
    ${rules
        .filter((rule) => rule.meta.docs.recommended && !rule.meta.deprecated)
        .map((rule) => {
            const conf = rule.meta.docs.default || "error"
            return `"${rule.meta.docs.ruleId}": "${conf}"`
        })
        .join(",\n    ")},
}
`

const filePath = path.resolve(__dirname, "../lib/configs/recommended.ts")

// Update file.
fs.writeFileSync(filePath, content)

// Format files.
// const linter = new eslint.CLIEngine({ fix: true })
// const report = linter.executeOnFiles([filePath])
// eslint.CLIEngine.outputFixes(report)
