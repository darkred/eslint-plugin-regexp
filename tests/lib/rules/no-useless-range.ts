import { RuleTester } from "eslint"
import rule from "../../../lib/rules/no-useless-range"

const tester = new RuleTester({
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
})

tester.run("no-useless-range", rule as any, {
    valid: [`/[a]/`, `/[ab]/`, `/[a-c]/`],
    invalid: [
        {
            code: `/[a-a]/`,
            output: `/[a]/`,
            errors: [
                {
                    message:
                        "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                    line: 1,
                    column: 3,
                },
            ],
        },
        {
            code: `/[a-a]/v`,
            output: `/[a]/v`,
            errors: [
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
            ],
        },
        {
            code: `/[a-b]/`,
            output: `/[ab]/`,
            errors: [
                {
                    message:
                        "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                    line: 1,
                    column: 3,
                },
            ],
        },
        {
            code: `/[a-b]/v`,
            output: `/[ab]/v`,
            errors: [
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
            ],
        },
        {
            code: `/[a-a-c-c]/`,
            output: `/[a\\-c]/`,
            errors: [
                {
                    message:
                        "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                    line: 1,
                    column: 3,
                },
                {
                    message:
                        "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                    line: 1,
                    column: 7,
                },
            ],
        },
        {
            code: `/[a-abc]/`,
            output: `/[abc]/`,
            errors: [
                {
                    message:
                        "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                    line: 1,
                    column: 3,
                },
            ],
        },
        {
            code: `
            const s = "[a-a-c]"
            new RegExp(s)`,
            output: `
            const s = "[a\\\\-c]"
            new RegExp(s)`,
            errors: [
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
            ],
        },
        {
            code: `
            const s = "[a-"+"a]"
            new RegExp(s)`,
            output: null,
            errors: [
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
            ],
        },
        {
            code: `
            /[,--b]/;
            /[a-a-z]/;
            /[a-a--z]/;
            /[\\c-d]/;
            /[\\x6-7]/;
            /[\\u002-3]/;
            /[A-\\u004-5]/;
            `,
            output: `
            /[,\\-b]/;
            /[a\\-z]/;
            /[a\\--z]/;
            /[\\c-d]/;
            /[\\x6-7]/;
            /[\\u002-3]/;
            /[A-\\u004-5]/;
            `,
            errors: [
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
            ],
        },
        {
            code: `
            /[,-\\-b]/;
            /[c-d]/;
            /[x6-7]/;
            /[\\x 6-7]/;
            /[u002-3]/;
            /[\\u 002-3]/;
            `,
            output: `
            /[,\\-b]/;
            /[cd]/;
            /[x67]/;
            /[\\x 67]/;
            /[u0023]/;
            /[\\u 0023]/;
            `,
            errors: [
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
                "Unexpected unnecessary character ranges. The hyphen is unnecessary.",
            ],
        },
    ],
})
