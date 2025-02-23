import { isPotentiallyEmpty } from "regexp-ast-analysis"
import type { RegExpVisitor } from "@eslint-community/regexpp/visitor"
import type { RegExpContext } from "../utils"
import { createRule, defineRegexpVisitor } from "../utils"

export default createRule("no-empty-lookarounds-assertion", {
    meta: {
        docs: {
            description:
                "disallow empty lookahead assertion or empty lookbehind assertion",
            category: "Possible Errors",
            recommended: true,
        },
        schema: [],
        messages: {
            unexpected:
                "Unexpected empty {{kind}}. It will trivially {{result}} all inputs.",
        },
        type: "suggestion",
    },
    create(context) {
        function createVisitor({
            node,
            flags,
            getRegexpLocation,
        }: RegExpContext): RegExpVisitor.Handlers {
            return {
                onAssertionEnter(aNode) {
                    if (
                        aNode.kind !== "lookahead" &&
                        aNode.kind !== "lookbehind"
                    ) {
                        return
                    }

                    if (isPotentiallyEmpty(aNode.alternatives, flags)) {
                        context.report({
                            node,
                            loc: getRegexpLocation(aNode),
                            messageId: "unexpected",
                            data: {
                                kind: aNode.kind,
                                result: aNode.negate ? "reject" : "accept",
                            },
                        })
                    }
                },
            }
        }

        return defineRegexpVisitor(context, {
            createVisitor,
        })
    },
})
