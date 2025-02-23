import { RuleTester } from "eslint"
import rule from "../../../lib/rules/grapheme-string-literal"

const tester = new RuleTester({
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
})

tester.run("grapheme-string-literal", rule as any, {
    valid: [
        // Basic_Emoji
        String.raw`/[\q{©️|®️|‼️|⁉️|™️|ℹ️|↔️|↕️|↖️|↗️|↘️|↙️|↩️|↪️|⌨️|⏏️|⏭️|⏮️|⏯️|⏱️}]/v`,
        String.raw`/[\q{⏲️|⏸️|⏹️|⏺️|Ⓜ️|▪️|▫️|▶️|◀️|◻️|◼️|☀️|☁️|☂️|☃️|☄️|☎️|☑️|☘️|☝️}]/v`,
        String.raw`/[\q{☠️|☢️|☣️|☦️|☪️|☮️|☯️|☸️|☹️|☺️|♀️|♂️|♟️|♠️|♣️|♥️|♦️|♨️|♻️|♾️}]/v`,
        String.raw`/[\q{⚒️|⚔️|⚕️|⚖️|⚗️|⚙️|⚛️|⚜️|⚠️|⚧️|⚰️|⚱️|⛈️|⛏️|⛑️|⛓️|⛩️|⛰️|⛱️|⛴️}]/v`,
        String.raw`/[\q{⛷️|⛸️|⛹️|✂️|✈️|✉️|✌️|✍️|✏️|✒️|✔️|✖️|✝️|✡️|✳️|✴️|❄️|❇️|❣️|❤️}]/v`,
        String.raw`/[\q{➡️|⤴️|⤵️|⬅️|⬆️|⬇️|〰️|〽️|㊗️|㊙️|🅰️|🅱️|🅾️|🅿️|🈂️|🈷️|🌡️|🌤️|🌥️|🌦️}]/v`,
        String.raw`/[\q{🌧️|🌨️|🌩️|🌪️|🌫️|🌬️|🌶️|🍽️|🎖️|🎗️|🎙️|🎚️|🎛️|🎞️|🎟️|🏋️|🏌️|🏍️|🏎️|🏔️}]/v`,
        String.raw`/[\q{🏕️|🏖️|🏗️|🏘️|🏙️|🏚️|🏛️|🏜️|🏝️|🏞️|🏟️|🏳️|🏵️|🏷️|🐿️|👁️|📽️|🕉️|🕊️|🕯️}]/v`,
        String.raw`/[\q{🕰️|🕳️|🕴️|🕵️|🕶️|🕷️|🕸️|🕹️|🖇️|🖊️|🖋️|🖌️|🖍️|🖐️|🖥️|🖨️|🖱️|🖲️|🖼️|🗂️}]/v`,
        String.raw`/[\q{🗃️|🗄️|🗑️|🗒️|🗓️|🗜️|🗝️|🗞️|🗡️|🗣️|🗨️|🗯️|🗳️|🗺️|🛋️|🛍️|🛎️|🛏️|🛠️|🛡️}]/v`,
        String.raw`/[\q{🛢️|🛣️|🛤️|🛥️|🛩️|🛰️|🛳️}]/v`,
        // Emoji_Keycap_Sequence
        String.raw`/[\q{#️⃣|*️⃣|0️⃣|1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|7️⃣|8️⃣|9️⃣}]/v`,
        // RGI_Emoji_Flag_Sequence
        String.raw`/[\q{🇦🇨|🇦🇩|🇦🇪|🇦🇫|🇦🇬|🇦🇮|🇦🇱|🇦🇲|🇦🇴|🇦🇶|🇦🇷|🇦🇸|🇦🇹|🇦🇺|🇦🇼|🇦🇽|🇦🇿|🇧🇦|🇧🇧|🇧🇩}]/v`,
        String.raw`/[\q{🇧🇪|🇧🇫|🇧🇬|🇧🇭|🇧🇮|🇧🇯|🇧🇱|🇧🇲|🇧🇳|🇧🇴|🇧🇶|🇧🇷|🇧🇸|🇧🇹|🇧🇻|🇧🇼|🇧🇾|🇧🇿|🇨🇦|🇨🇨}]/v`,
        String.raw`/[\q{🇨🇩|🇨🇫|🇨🇬|🇨🇭|🇨🇮|🇨🇰|🇨🇱|🇨🇲|🇨🇳|🇨🇴|🇨🇵|🇨🇷|🇨🇺|🇨🇻|🇨🇼|🇨🇽|🇨🇾|🇨🇿|🇩🇪|🇩🇬}]/v`,
        String.raw`/[\q{🇩🇯|🇩🇰|🇩🇲|🇩🇴|🇩🇿|🇪🇦|🇪🇨|🇪🇪|🇪🇬|🇪🇭|🇪🇷|🇪🇸|🇪🇹|🇪🇺|🇫🇮|🇫🇯|🇫🇰|🇫🇲|🇫🇴|🇫🇷}]/v`,
        String.raw`/[\q{🇬🇦|🇬🇧|🇬🇩|🇬🇪|🇬🇫|🇬🇬|🇬🇭|🇬🇮|🇬🇱|🇬🇲|🇬🇳|🇬🇵|🇬🇶|🇬🇷|🇬🇸|🇬🇹|🇬🇺|🇬🇼|🇬🇾|🇭🇰}]/v`,
        String.raw`/[\q{🇭🇲|🇭🇳|🇭🇷|🇭🇹|🇭🇺|🇮🇨|🇮🇩|🇮🇪|🇮🇱|🇮🇲|🇮🇳|🇮🇴|🇮🇶|🇮🇷|🇮🇸|🇮🇹|🇯🇪|🇯🇲|🇯🇴|🇯🇵}]/v`,
        String.raw`/[\q{🇰🇪|🇰🇬|🇰🇭|🇰🇮|🇰🇲|🇰🇳|🇰🇵|🇰🇷|🇰🇼|🇰🇾|🇰🇿|🇱🇦|🇱🇧|🇱🇨|🇱🇮|🇱🇰|🇱🇷|🇱🇸|🇱🇹|🇱🇺}]/v`,
        String.raw`/[\q{🇱🇻|🇱🇾|🇲🇦|🇲🇨|🇲🇩|🇲🇪|🇲🇫|🇲🇬|🇲🇭|🇲🇰|🇲🇱|🇲🇲|🇲🇳|🇲🇴|🇲🇵|🇲🇶|🇲🇷|🇲🇸|🇲🇹|🇲🇺}]/v`,
        String.raw`/[\q{🇲🇻|🇲🇼|🇲🇽|🇲🇾|🇲🇿|🇳🇦|🇳🇨|🇳🇪|🇳🇫|🇳🇬|🇳🇮|🇳🇱|🇳🇴|🇳🇵|🇳🇷|🇳🇺|🇳🇿|🇴🇲|🇵🇦|🇵🇪}]/v`,
        String.raw`/[\q{🇵🇫|🇵🇬|🇵🇭|🇵🇰|🇵🇱|🇵🇲|🇵🇳|🇵🇷|🇵🇸|🇵🇹|🇵🇼|🇵🇾|🇶🇦|🇷🇪|🇷🇴|🇷🇸|🇷🇺|🇷🇼|🇸🇦|🇸🇧}]/v`,
        String.raw`/[\q{🇸🇨|🇸🇩|🇸🇪|🇸🇬|🇸🇭|🇸🇮|🇸🇯|🇸🇰|🇸🇱|🇸🇲|🇸🇳|🇸🇴|🇸🇷|🇸🇸|🇸🇹|🇸🇻|🇸🇽|🇸🇾|🇸🇿|🇹🇦}]/v`,
        String.raw`/[\q{🇹🇨|🇹🇩|🇹🇫|🇹🇬|🇹🇭|🇹🇯|🇹🇰|🇹🇱|🇹🇲|🇹🇳|🇹🇴|🇹🇷|🇹🇹|🇹🇻|🇹🇼|🇹🇿|🇺🇦|🇺🇬|🇺🇲|🇺🇳}]/v`,
        String.raw`/[\q{🇺🇸|🇺🇾|🇺🇿|🇻🇦|🇻🇨|🇻🇪|🇻🇬|🇻🇮|🇻🇳|🇻🇺|🇼🇫|🇼🇸|🇽🇰|🇾🇪|🇾🇹|🇿🇦|🇿🇲|🇿🇼}]/v`,
        // RGI_Emoji_Modifier_Sequence
        String.raw`/[\q{☝🏻|☝🏼|☝🏽|☝🏾|☝🏿|⛹🏻|⛹🏼|⛹🏽|⛹🏾|⛹🏿|✊🏻|✊🏼|✊🏽|✊🏾|✊🏿|✋🏻|✋🏼|✋🏽|✋🏾|✋🏿}]/v`,
        String.raw`/[\q{✌🏻|✌🏼|✌🏽|✌🏾|✌🏿|✍🏻|✍🏼|✍🏽|✍🏾|✍🏿|🎅🏻|🎅🏼|🎅🏽|🎅🏾|🎅🏿|🏂🏻|🏂🏼|🏂🏽|🏂🏾|🏂🏿}]/v`,
        String.raw`/[\q{🏃🏻|🏃🏼|🏃🏽|🏃🏾|🏃🏿|🏄🏻|🏄🏼|🏄🏽|🏄🏾|🏄🏿|🏇🏻|🏇🏼|🏇🏽|🏇🏾|🏇🏿|🏊🏻|🏊🏼|🏊🏽|🏊🏾|🏊🏿}]/v`,
        String.raw`/[\q{🏋🏻|🏋🏼|🏋🏽|🏋🏾|🏋🏿|🏌🏻|🏌🏼|🏌🏽|🏌🏾|🏌🏿|👂🏻|👂🏼|👂🏽|👂🏾|👂🏿|👃🏻|👃🏼|👃🏽|👃🏾|👃🏿}]/v`,
        String.raw`/[\q{👆🏻|👆🏼|👆🏽|👆🏾|👆🏿|👇🏻|👇🏼|👇🏽|👇🏾|👇🏿|👈🏻|👈🏼|👈🏽|👈🏾|👈🏿|👉🏻|👉🏼|👉🏽|👉🏾|👉🏿}]/v`,
        String.raw`/[\q{👊🏻|👊🏼|👊🏽|👊🏾|👊🏿|👋🏻|👋🏼|👋🏽|👋🏾|👋🏿|👌🏻|👌🏼|👌🏽|👌🏾|👌🏿|👍🏻|👍🏼|👍🏽|👍🏾|👍🏿}]/v`,
        String.raw`/[\q{👎🏻|👎🏼|👎🏽|👎🏾|👎🏿|👏🏻|👏🏼|👏🏽|👏🏾|👏🏿|👐🏻|👐🏼|👐🏽|👐🏾|👐🏿|👦🏻|👦🏼|👦🏽|👦🏾|👦🏿}]/v`,
        String.raw`/[\q{👧🏻|👧🏼|👧🏽|👧🏾|👧🏿|👨🏻|👨🏼|👨🏽|👨🏾|👨🏿|👩🏻|👩🏼|👩🏽|👩🏾|👩🏿|👫🏻|👫🏼|👫🏽|👫🏾|👫🏿}]/v`,
        String.raw`/[\q{👬🏻|👬🏼|👬🏽|👬🏾|👬🏿|👭🏻|👭🏼|👭🏽|👭🏾|👭🏿|👮🏻|👮🏼|👮🏽|👮🏾|👮🏿|👰🏻|👰🏼|👰🏽|👰🏾|👰🏿}]/v`,
        String.raw`/[\q{👱🏻|👱🏼|👱🏽|👱🏾|👱🏿|👲🏻|👲🏼|👲🏽|👲🏾|👲🏿|👳🏻|👳🏼|👳🏽|👳🏾|👳🏿|👴🏻|👴🏼|👴🏽|👴🏾|👴🏿}]/v`,
        String.raw`/[\q{👵🏻|👵🏼|👵🏽|👵🏾|👵🏿|👶🏻|👶🏼|👶🏽|👶🏾|👶🏿|👷🏻|👷🏼|👷🏽|👷🏾|👷🏿|👸🏻|👸🏼|👸🏽|👸🏾|👸🏿}]/v`,
        String.raw`/[\q{👼🏻|👼🏼|👼🏽|👼🏾|👼🏿|💁🏻|💁🏼|💁🏽|💁🏾|💁🏿|💂🏻|💂🏼|💂🏽|💂🏾|💂🏿|💃🏻|💃🏼|💃🏽|💃🏾|💃🏿}]/v`,
        String.raw`/[\q{💅🏻|💅🏼|💅🏽|💅🏾|💅🏿|💆🏻|💆🏼|💆🏽|💆🏾|💆🏿|💇🏻|💇🏼|💇🏽|💇🏾|💇🏿|💏🏻|💏🏼|💏🏽|💏🏾|💏🏿}]/v`,
        String.raw`/[\q{💑🏻|💑🏼|💑🏽|💑🏾|💑🏿|💪🏻|💪🏼|💪🏽|💪🏾|💪🏿|🕴🏻|🕴🏼|🕴🏽|🕴🏾|🕴🏿|🕵🏻|🕵🏼|🕵🏽|🕵🏾|🕵🏿}]/v`,
        String.raw`/[\q{🕺🏻|🕺🏼|🕺🏽|🕺🏾|🕺🏿|🖐🏻|🖐🏼|🖐🏽|🖐🏾|🖐🏿|🖕🏻|🖕🏼|🖕🏽|🖕🏾|🖕🏿|🖖🏻|🖖🏼|🖖🏽|🖖🏾|🖖🏿}]/v`,
        String.raw`/[\q{🙅🏻|🙅🏼|🙅🏽|🙅🏾|🙅🏿|🙆🏻|🙆🏼|🙆🏽|🙆🏾|🙆🏿|🙇🏻|🙇🏼|🙇🏽|🙇🏾|🙇🏿|🙋🏻|🙋🏼|🙋🏽|🙋🏾|🙋🏿}]/v`,
        String.raw`/[\q{🙌🏻|🙌🏼|🙌🏽|🙌🏾|🙌🏿|🙍🏻|🙍🏼|🙍🏽|🙍🏾|🙍🏿|🙎🏻|🙎🏼|🙎🏽|🙎🏾|🙎🏿|🙏🏻|🙏🏼|🙏🏽|🙏🏾|🙏🏿}]/v`,
        String.raw`/[\q{🚣🏻|🚣🏼|🚣🏽|🚣🏾|🚣🏿|🚴🏻|🚴🏼|🚴🏽|🚴🏾|🚴🏿|🚵🏻|🚵🏼|🚵🏽|🚵🏾|🚵🏿|🚶🏻|🚶🏼|🚶🏽|🚶🏾|🚶🏿}]/v`,
        String.raw`/[\q{🛀🏻|🛀🏼|🛀🏽|🛀🏾|🛀🏿|🛌🏻|🛌🏼|🛌🏽|🛌🏾|🛌🏿|🤌🏻|🤌🏼|🤌🏽|🤌🏾|🤌🏿|🤏🏻|🤏🏼|🤏🏽|🤏🏾|🤏🏿}]/v`,
        String.raw`/[\q{🤘🏻|🤘🏼|🤘🏽|🤘🏾|🤘🏿|🤙🏻|🤙🏼|🤙🏽|🤙🏾|🤙🏿|🤚🏻|🤚🏼|🤚🏽|🤚🏾|🤚🏿|🤛🏻|🤛🏼|🤛🏽|🤛🏾|🤛🏿}]/v`,
        String.raw`/[\q{🤜🏻|🤜🏼|🤜🏽|🤜🏾|🤜🏿|🤝🏻|🤝🏼|🤝🏽|🤝🏾|🤝🏿|🤞🏻|🤞🏼|🤞🏽|🤞🏾|🤞🏿|🤟🏻|🤟🏼|🤟🏽|🤟🏾|🤟🏿}]/v`,
        String.raw`/[\q{🤦🏻|🤦🏼|🤦🏽|🤦🏾|🤦🏿|🤰🏻|🤰🏼|🤰🏽|🤰🏾|🤰🏿|🤱🏻|🤱🏼|🤱🏽|🤱🏾|🤱🏿|🤲🏻|🤲🏼|🤲🏽|🤲🏾|🤲🏿}]/v`,
        String.raw`/[\q{🤳🏻|🤳🏼|🤳🏽|🤳🏾|🤳🏿|🤴🏻|🤴🏼|🤴🏽|🤴🏾|🤴🏿|🤵🏻|🤵🏼|🤵🏽|🤵🏾|🤵🏿|🤶🏻|🤶🏼|🤶🏽|🤶🏾|🤶🏿}]/v`,
        String.raw`/[\q{🤷🏻|🤷🏼|🤷🏽|🤷🏾|🤷🏿|🤸🏻|🤸🏼|🤸🏽|🤸🏾|🤸🏿|🤹🏻|🤹🏼|🤹🏽|🤹🏾|🤹🏿|🤽🏻|🤽🏼|🤽🏽|🤽🏾|🤽🏿}]/v`,
        String.raw`/[\q{🤾🏻|🤾🏼|🤾🏽|🤾🏾|🤾🏿|🥷🏻|🥷🏼|🥷🏽|🥷🏾|🥷🏿|🦵🏻|🦵🏼|🦵🏽|🦵🏾|🦵🏿|🦶🏻|🦶🏼|🦶🏽|🦶🏾|🦶🏿}]/v`,
        String.raw`/[\q{🦸🏻|🦸🏼|🦸🏽|🦸🏾|🦸🏿|🦹🏻|🦹🏼|🦹🏽|🦹🏾|🦹🏿|🦻🏻|🦻🏼|🦻🏽|🦻🏾|🦻🏿|🧍🏻|🧍🏼|🧍🏽|🧍🏾|🧍🏿}]/v`,
        String.raw`/[\q{🧎🏻|🧎🏼|🧎🏽|🧎🏾|🧎🏿|🧏🏻|🧏🏼|🧏🏽|🧏🏾|🧏🏿|🧑🏻|🧑🏼|🧑🏽|🧑🏾|🧑🏿|🧒🏻|🧒🏼|🧒🏽|🧒🏾|🧒🏿}]/v`,
        String.raw`/[\q{🧓🏻|🧓🏼|🧓🏽|🧓🏾|🧓🏿|🧔🏻|🧔🏼|🧔🏽|🧔🏾|🧔🏿|🧕🏻|🧕🏼|🧕🏽|🧕🏾|🧕🏿|🧖🏻|🧖🏼|🧖🏽|🧖🏾|🧖🏿}]/v`,
        String.raw`/[\q{🧗🏻|🧗🏼|🧗🏽|🧗🏾|🧗🏿|🧘🏻|🧘🏼|🧘🏽|🧘🏾|🧘🏿|🧙🏻|🧙🏼|🧙🏽|🧙🏾|🧙🏿|🧚🏻|🧚🏼|🧚🏽|🧚🏾|🧚🏿}]/v`,
        String.raw`/[\q{🧛🏻|🧛🏼|🧛🏽|🧛🏾|🧛🏿|🧜🏻|🧜🏼|🧜🏽|🧜🏾|🧜🏿|🧝🏻|🧝🏼|🧝🏽|🧝🏾|🧝🏿|🫃🏻|🫃🏼|🫃🏽|🫃🏾|🫃🏿}]/v`,
        String.raw`/[\q{🫄🏻|🫄🏼|🫄🏽|🫄🏾|🫄🏿|🫅🏻|🫅🏼|🫅🏽|🫅🏾|🫅🏿|🫰🏻|🫰🏼|🫰🏽|🫰🏾|🫰🏿|🫱🏻|🫱🏼|🫱🏽|🫱🏾|🫱🏿}]/v`,
        String.raw`/[\q{🫲🏻|🫲🏼|🫲🏽|🫲🏾|🫲🏿|🫳🏻|🫳🏼|🫳🏽|🫳🏾|🫳🏿|🫴🏻|🫴🏼|🫴🏽|🫴🏾|🫴🏿|🫵🏻|🫵🏼|🫵🏽|🫵🏾|🫵🏿}]/v`,
        String.raw`/[\q{🫶🏻|🫶🏼|🫶🏽|🫶🏾|🫶🏿|🫷🏻|🫷🏼|🫷🏽|🫷🏾|🫷🏿|🫸🏻|🫸🏼|🫸🏽|🫸🏾|🫸🏿}]/v`,
        // RGI_Emoji_Tag_Sequence
        String.raw`/[\q{🏴󠁧󠁢󠁥󠁮󠁧󠁿|🏴󠁧󠁢󠁳󠁣󠁴󠁿|🏴󠁧󠁢󠁷󠁬󠁳󠁿}]/v`,
        // RGI_Emoji_ZWJ_Sequence
        String.raw`/[\q{🐈‍⬛|🐕‍🦺|🐦‍⬛|👨‍🌾|👨‍🍳|👨‍🍼|👨‍🎓|👨‍🎤|👨‍🎨|👨‍🏫|👨‍🏭|👨‍👦|👨‍👧|👨‍💻|👨‍💼|👨‍🔧|👨‍🔬|👨‍🚀|👨‍🚒|👨‍🦯}]/v`,
        String.raw`/[\q{👨‍🦰|👨‍🦱|👨‍🦲|👨‍🦳|👨‍🦼|👨‍🦽|👩‍🌾|👩‍🍳|👩‍🍼|👩‍🎓|👩‍🎤|👩‍🎨|👩‍🏫|👩‍🏭|👩‍👦|👩‍👧|👩‍💻|👩‍💼|👩‍🔧|👩‍🔬}]/v`,
        String.raw`/[\q{👩‍🚀|👩‍🚒|👩‍🦯|👩‍🦰|👩‍🦱|👩‍🦲|👩‍🦳|👩‍🦼|👩‍🦽|😮‍💨|😵‍💫|🧑‍🌾|🧑‍🍳|🧑‍🍼|🧑‍🎄|🧑‍🎓|🧑‍🎤|🧑‍🎨|🧑‍🏫|🧑‍🏭}]/v`,
        String.raw`/[\q{🧑‍💻|🧑‍💼|🧑‍🔧|🧑‍🔬|🧑‍🚀|🧑‍🚒|🧑‍🦯|🧑‍🦰|🧑‍🦱|🧑‍🦲|🧑‍🦳|🧑‍🦼|🧑‍🦽|❤️‍🔥|❤️‍🩹|🏃‍♀️|🏃‍♂️|🏄‍♀️|🏄‍♂️|🏊‍♀️}]/v`,
        String.raw`/[\q{🏊‍♂️|🏳️‍🌈|🏴‍☠️|🐻‍❄️|👨‍⚕️|👨‍⚖️|👨‍✈️|👨🏻‍🌾|👨🏻‍🍳|👨🏻‍🍼|👨🏻‍🎓|👨🏻‍🎤|👨🏻‍🎨|👨🏻‍🏫|👨🏻‍🏭|👨🏻‍💻|👨🏻‍💼|👨🏻‍🔧|👨🏻‍🔬|👨🏻‍🚀}]/v`,
        String.raw`/[\q{👨🏻‍🚒|👨🏻‍🦯|👨🏻‍🦰|👨🏻‍🦱|👨🏻‍🦲|👨🏻‍🦳|👨🏻‍🦼|👨🏻‍🦽|👨🏼‍🌾|👨🏼‍🍳|👨🏼‍🍼|👨🏼‍🎓|👨🏼‍🎤|👨🏼‍🎨|👨🏼‍🏫|👨🏼‍🏭|👨🏼‍💻|👨🏼‍💼|👨🏼‍🔧|👨🏼‍🔬}]/v`,
        String.raw`/[\q{👨🏼‍🚀|👨🏼‍🚒|👨🏼‍🦯|👨🏼‍🦰|👨🏼‍🦱|👨🏼‍🦲|👨🏼‍🦳|👨🏼‍🦼|👨🏼‍🦽|👨🏽‍🌾|👨🏽‍🍳|👨🏽‍🍼|👨🏽‍🎓|👨🏽‍🎤|👨🏽‍🎨|👨🏽‍🏫|👨🏽‍🏭|👨🏽‍💻|👨🏽‍💼|👨🏽‍🔧}]/v`,
        String.raw`/[\q{👨🏽‍🔬|👨🏽‍🚀|👨🏽‍🚒|👨🏽‍🦯|👨🏽‍🦰|👨🏽‍🦱|👨🏽‍🦲|👨🏽‍🦳|👨🏽‍🦼|👨🏽‍🦽|👨🏾‍🌾|👨🏾‍🍳|👨🏾‍🍼|👨🏾‍🎓|👨🏾‍🎤|👨🏾‍🎨|👨🏾‍🏫|👨🏾‍🏭|👨🏾‍💻|👨🏾‍💼}]/v`,
        String.raw`/[\q{👨🏾‍🔧|👨🏾‍🔬|👨🏾‍🚀|👨🏾‍🚒|👨🏾‍🦯|👨🏾‍🦰|👨🏾‍🦱|👨🏾‍🦲|👨🏾‍🦳|👨🏾‍🦼|👨🏾‍🦽|👨🏿‍🌾|👨🏿‍🍳|👨🏿‍🍼|👨🏿‍🎓|👨🏿‍🎤|👨🏿‍🎨|👨🏿‍🏫|👨🏿‍🏭|👨🏿‍💻}]/v`,
        String.raw`/[\q{👨🏿‍💼|👨🏿‍🔧|👨🏿‍🔬|👨🏿‍🚀|👨🏿‍🚒|👨🏿‍🦯|👨🏿‍🦰|👨🏿‍🦱|👨🏿‍🦲|👨🏿‍🦳|👨🏿‍🦼|👨🏿‍🦽|👩‍⚕️|👩‍⚖️|👩‍✈️|👩🏻‍🌾|👩🏻‍🍳|👩🏻‍🍼|👩🏻‍🎓|👩🏻‍🎤}]/v`,
        String.raw`/[\q{👩🏻‍🎨|👩🏻‍🏫|👩🏻‍🏭|👩🏻‍💻|👩🏻‍💼|👩🏻‍🔧|👩🏻‍🔬|👩🏻‍🚀|👩🏻‍🚒|👩🏻‍🦯|👩🏻‍🦰|👩🏻‍🦱|👩🏻‍🦲|👩🏻‍🦳|👩🏻‍🦼|👩🏻‍🦽|👩🏼‍🌾|👩🏼‍🍳|👩🏼‍🍼|👩🏼‍🎓}]/v`,
        String.raw`/[\q{👩🏼‍🎤|👩🏼‍🎨|👩🏼‍🏫|👩🏼‍🏭|👩🏼‍💻|👩🏼‍💼|👩🏼‍🔧|👩🏼‍🔬|👩🏼‍🚀|👩🏼‍🚒|👩🏼‍🦯|👩🏼‍🦰|👩🏼‍🦱|👩🏼‍🦲|👩🏼‍🦳|👩🏼‍🦼|👩🏼‍🦽|👩🏽‍🌾|👩🏽‍🍳|👩🏽‍🍼}]/v`,
        String.raw`/[\q{👩🏽‍🎓|👩🏽‍🎤|👩🏽‍🎨|👩🏽‍🏫|👩🏽‍🏭|👩🏽‍💻|👩🏽‍💼|👩🏽‍🔧|👩🏽‍🔬|👩🏽‍🚀|👩🏽‍🚒|👩🏽‍🦯|👩🏽‍🦰|👩🏽‍🦱|👩🏽‍🦲|👩🏽‍🦳|👩🏽‍🦼|👩🏽‍🦽|👩🏾‍🌾|👩🏾‍🍳}]/v`,
        String.raw`/[\q{👩🏾‍🍼|👩🏾‍🎓|👩🏾‍🎤|👩🏾‍🎨|👩🏾‍🏫|👩🏾‍🏭|👩🏾‍💻|👩🏾‍💼|👩🏾‍🔧|👩🏾‍🔬|👩🏾‍🚀|👩🏾‍🚒|👩🏾‍🦯|👩🏾‍🦰|👩🏾‍🦱|👩🏾‍🦲|👩🏾‍🦳|👩🏾‍🦼|👩🏾‍🦽|👩🏿‍🌾}]/v`,
        String.raw`/[\q{👩🏿‍🍳|👩🏿‍🍼|👩🏿‍🎓|👩🏿‍🎤|👩🏿‍🎨|👩🏿‍🏫|👩🏿‍🏭|👩🏿‍💻|👩🏿‍💼|👩🏿‍🔧|👩🏿‍🔬|👩🏿‍🚀|👩🏿‍🚒|👩🏿‍🦯|👩🏿‍🦰|👩🏿‍🦱|👩🏿‍🦲|👩🏿‍🦳|👩🏿‍🦼|👩🏿‍🦽}]/v`,
        String.raw`/[\q{👮‍♀️|👮‍♂️|👯‍♀️|👯‍♂️|👰‍♀️|👰‍♂️|👱‍♀️|👱‍♂️|👳‍♀️|👳‍♂️|👷‍♀️|👷‍♂️|💁‍♀️|💁‍♂️|💂‍♀️|💂‍♂️|💆‍♀️|💆‍♂️|💇‍♀️|💇‍♂️}]/v`,
        String.raw`/[\q{😶‍🌫️|🙅‍♀️|🙅‍♂️|🙆‍♀️|🙆‍♂️|🙇‍♀️|🙇‍♂️|🙋‍♀️|🙋‍♂️|🙍‍♀️|🙍‍♂️|🙎‍♀️|🙎‍♂️|🚣‍♀️|🚣‍♂️|🚴‍♀️|🚴‍♂️|🚵‍♀️|🚵‍♂️|🚶‍♀️}]/v`,
        String.raw`/[\q{🚶‍♂️|🤦‍♀️|🤦‍♂️|🤵‍♀️|🤵‍♂️|🤷‍♀️|🤷‍♂️|🤸‍♀️|🤸‍♂️|🤹‍♀️|🤹‍♂️|🤼‍♀️|🤼‍♂️|🤽‍♀️|🤽‍♂️|🤾‍♀️|🤾‍♂️|🦸‍♀️|🦸‍♂️|🦹‍♀️}]/v`,
        String.raw`/[\q{🦹‍♂️|🧍‍♀️|🧍‍♂️|🧎‍♀️|🧎‍♂️|🧏‍♀️|🧏‍♂️|🧑‍⚕️|🧑‍⚖️|🧑‍✈️|🧑🏻‍🌾|🧑🏻‍🍳|🧑🏻‍🍼|🧑🏻‍🎄|🧑🏻‍🎓|🧑🏻‍🎤|🧑🏻‍🎨|🧑🏻‍🏫|🧑🏻‍🏭|🧑🏻‍💻}]/v`,
        String.raw`/[\q{🧑🏻‍💼|🧑🏻‍🔧|🧑🏻‍🔬|🧑🏻‍🚀|🧑🏻‍🚒|🧑🏻‍🦯|🧑🏻‍🦰|🧑🏻‍🦱|🧑🏻‍🦲|🧑🏻‍🦳|🧑🏻‍🦼|🧑🏻‍🦽|🧑🏼‍🌾|🧑🏼‍🍳|🧑🏼‍🍼|🧑🏼‍🎄|🧑🏼‍🎓|🧑🏼‍🎤|🧑🏼‍🎨|🧑🏼‍🏫}]/v`,
        String.raw`/[\q{🧑🏼‍🏭|🧑🏼‍💻|🧑🏼‍💼|🧑🏼‍🔧|🧑🏼‍🔬|🧑🏼‍🚀|🧑🏼‍🚒|🧑🏼‍🦯|🧑🏼‍🦰|🧑🏼‍🦱|🧑🏼‍🦲|🧑🏼‍🦳|🧑🏼‍🦼|🧑🏼‍🦽|🧑🏽‍🌾|🧑🏽‍🍳|🧑🏽‍🍼|🧑🏽‍🎄|🧑🏽‍🎓|🧑🏽‍🎤}]/v`,
        String.raw`/[\q{🧑🏽‍🎨|🧑🏽‍🏫|🧑🏽‍🏭|🧑🏽‍💻|🧑🏽‍💼|🧑🏽‍🔧|🧑🏽‍🔬|🧑🏽‍🚀|🧑🏽‍🚒|🧑🏽‍🦯|🧑🏽‍🦰|🧑🏽‍🦱|🧑🏽‍🦲|🧑🏽‍🦳|🧑🏽‍🦼|🧑🏽‍🦽|🧑🏾‍🌾|🧑🏾‍🍳|🧑🏾‍🍼|🧑🏾‍🎄}]/v`,
        String.raw`/[\q{🧑🏾‍🎓|🧑🏾‍🎤|🧑🏾‍🎨|🧑🏾‍🏫|🧑🏾‍🏭|🧑🏾‍💻|🧑🏾‍💼|🧑🏾‍🔧|🧑🏾‍🔬|🧑🏾‍🚀|🧑🏾‍🚒|🧑🏾‍🦯|🧑🏾‍🦰|🧑🏾‍🦱|🧑🏾‍🦲|🧑🏾‍🦳|🧑🏾‍🦼|🧑🏾‍🦽|🧑🏿‍🌾|🧑🏿‍🍳}]/v`,
        String.raw`/[\q{🧑🏿‍🍼|🧑🏿‍🎄|🧑🏿‍🎓|🧑🏿‍🎤|🧑🏿‍🎨|🧑🏿‍🏫|🧑🏿‍🏭|🧑🏿‍💻|🧑🏿‍💼|🧑🏿‍🔧|🧑🏿‍🔬|🧑🏿‍🚀|🧑🏿‍🚒|🧑🏿‍🦯|🧑🏿‍🦰|🧑🏿‍🦱|🧑🏿‍🦲|🧑🏿‍🦳|🧑🏿‍🦼|🧑🏿‍🦽}]/v`,
        String.raw`/[\q{🧔‍♀️|🧔‍♂️|🧖‍♀️|🧖‍♂️|🧗‍♀️|🧗‍♂️|🧘‍♀️|🧘‍♂️|🧙‍♀️|🧙‍♂️|🧚‍♀️|🧚‍♂️|🧛‍♀️|🧛‍♂️|🧜‍♀️|🧜‍♂️|🧝‍♀️|🧝‍♂️|🧞‍♀️|🧞‍♂️}]/v`,
        String.raw`/[\q{🧟‍♀️|🧟‍♂️|⛹️‍♀️|⛹️‍♂️|⛹🏻‍♀️|⛹🏻‍♂️|⛹🏼‍♀️|⛹🏼‍♂️|⛹🏽‍♀️|⛹🏽‍♂️|⛹🏾‍♀️|⛹🏾‍♂️|⛹🏿‍♀️|⛹🏿‍♂️|🏃🏻‍♀️|🏃🏻‍♂️|🏃🏼‍♀️|🏃🏼‍♂️|🏃🏽‍♀️|🏃🏽‍♂️}]/v`,
        String.raw`/[\q{🏃🏾‍♀️|🏃🏾‍♂️|🏃🏿‍♀️|🏃🏿‍♂️|🏄🏻‍♀️|🏄🏻‍♂️|🏄🏼‍♀️|🏄🏼‍♂️|🏄🏽‍♀️|🏄🏽‍♂️|🏄🏾‍♀️|🏄🏾‍♂️|🏄🏿‍♀️|🏄🏿‍♂️|🏊🏻‍♀️|🏊🏻‍♂️|🏊🏼‍♀️|🏊🏼‍♂️|🏊🏽‍♀️|🏊🏽‍♂️}]/v`,
        String.raw`/[\q{🏊🏾‍♀️|🏊🏾‍♂️|🏊🏿‍♀️|🏊🏿‍♂️|🏋️‍♀️|🏋️‍♂️|🏋🏻‍♀️|🏋🏻‍♂️|🏋🏼‍♀️|🏋🏼‍♂️|🏋🏽‍♀️|🏋🏽‍♂️|🏋🏾‍♀️|🏋🏾‍♂️|🏋🏿‍♀️|🏋🏿‍♂️|🏌️‍♀️|🏌️‍♂️|🏌🏻‍♀️|🏌🏻‍♂️}]/v`,
        String.raw`/[\q{🏌🏼‍♀️|🏌🏼‍♂️|🏌🏽‍♀️|🏌🏽‍♂️|🏌🏾‍♀️|🏌🏾‍♂️|🏌🏿‍♀️|🏌🏿‍♂️|🏳️‍⚧️|👁️‍🗨️|👨‍👦‍👦|👨‍👧‍👦|👨‍👧‍👧|👨‍👨‍👦|👨‍👨‍👧|👨‍👩‍👦|👨‍👩‍👧|👨🏻‍⚕️|👨🏻‍⚖️|👨🏻‍✈️}]/v`,
        String.raw`/[\q{👨🏼‍⚕️|👨🏼‍⚖️|👨🏼‍✈️|👨🏽‍⚕️|👨🏽‍⚖️|👨🏽‍✈️|👨🏾‍⚕️|👨🏾‍⚖️|👨🏾‍✈️|👨🏿‍⚕️|👨🏿‍⚖️|👨🏿‍✈️|👩‍👦‍👦|👩‍👧‍👦|👩‍👧‍👧|👩‍👩‍👦|👩‍👩‍👧|👩🏻‍⚕️|👩🏻‍⚖️|👩🏻‍✈️}]/v`,
        String.raw`/[\q{👩🏼‍⚕️|👩🏼‍⚖️|👩🏼‍✈️|👩🏽‍⚕️|👩🏽‍⚖️|👩🏽‍✈️|👩🏾‍⚕️|👩🏾‍⚖️|👩🏾‍✈️|👩🏿‍⚕️|👩🏿‍⚖️|👩🏿‍✈️|👮🏻‍♀️|👮🏻‍♂️|👮🏼‍♀️|👮🏼‍♂️|👮🏽‍♀️|👮🏽‍♂️|👮🏾‍♀️|👮🏾‍♂️}]/v`,
        String.raw`/[\q{👮🏿‍♀️|👮🏿‍♂️|👰🏻‍♀️|👰🏻‍♂️|👰🏼‍♀️|👰🏼‍♂️|👰🏽‍♀️|👰🏽‍♂️|👰🏾‍♀️|👰🏾‍♂️|👰🏿‍♀️|👰🏿‍♂️|👱🏻‍♀️|👱🏻‍♂️|👱🏼‍♀️|👱🏼‍♂️|👱🏽‍♀️|👱🏽‍♂️|👱🏾‍♀️|👱🏾‍♂️}]/v`,
        String.raw`/[\q{👱🏿‍♀️|👱🏿‍♂️|👳🏻‍♀️|👳🏻‍♂️|👳🏼‍♀️|👳🏼‍♂️|👳🏽‍♀️|👳🏽‍♂️|👳🏾‍♀️|👳🏾‍♂️|👳🏿‍♀️|👳🏿‍♂️|👷🏻‍♀️|👷🏻‍♂️|👷🏼‍♀️|👷🏼‍♂️|👷🏽‍♀️|👷🏽‍♂️|👷🏾‍♀️|👷🏾‍♂️}]/v`,
        String.raw`/[\q{👷🏿‍♀️|👷🏿‍♂️|💁🏻‍♀️|💁🏻‍♂️|💁🏼‍♀️|💁🏼‍♂️|💁🏽‍♀️|💁🏽‍♂️|💁🏾‍♀️|💁🏾‍♂️|💁🏿‍♀️|💁🏿‍♂️|💂🏻‍♀️|💂🏻‍♂️|💂🏼‍♀️|💂🏼‍♂️|💂🏽‍♀️|💂🏽‍♂️|💂🏾‍♀️|💂🏾‍♂️}]/v`,
        String.raw`/[\q{💂🏿‍♀️|💂🏿‍♂️|💆🏻‍♀️|💆🏻‍♂️|💆🏼‍♀️|💆🏼‍♂️|💆🏽‍♀️|💆🏽‍♂️|💆🏾‍♀️|💆🏾‍♂️|💆🏿‍♀️|💆🏿‍♂️|💇🏻‍♀️|💇🏻‍♂️|💇🏼‍♀️|💇🏼‍♂️|💇🏽‍♀️|💇🏽‍♂️|💇🏾‍♀️|💇🏾‍♂️}]/v`,
        String.raw`/[\q{💇🏿‍♀️|💇🏿‍♂️|🕵️‍♀️|🕵️‍♂️|🕵🏻‍♀️|🕵🏻‍♂️|🕵🏼‍♀️|🕵🏼‍♂️|🕵🏽‍♀️|🕵🏽‍♂️|🕵🏾‍♀️|🕵🏾‍♂️|🕵🏿‍♀️|🕵🏿‍♂️|🙅🏻‍♀️|🙅🏻‍♂️|🙅🏼‍♀️|🙅🏼‍♂️|🙅🏽‍♀️|🙅🏽‍♂️}]/v`,
        String.raw`/[\q{🙅🏾‍♀️|🙅🏾‍♂️|🙅🏿‍♀️|🙅🏿‍♂️|🙆🏻‍♀️|🙆🏻‍♂️|🙆🏼‍♀️|🙆🏼‍♂️|🙆🏽‍♀️|🙆🏽‍♂️|🙆🏾‍♀️|🙆🏾‍♂️|🙆🏿‍♀️|🙆🏿‍♂️|🙇🏻‍♀️|🙇🏻‍♂️|🙇🏼‍♀️|🙇🏼‍♂️|🙇🏽‍♀️|🙇🏽‍♂️}]/v`,
        String.raw`/[\q{🙇🏾‍♀️|🙇🏾‍♂️|🙇🏿‍♀️|🙇🏿‍♂️|🙋🏻‍♀️|🙋🏻‍♂️|🙋🏼‍♀️|🙋🏼‍♂️|🙋🏽‍♀️|🙋🏽‍♂️|🙋🏾‍♀️|🙋🏾‍♂️|🙋🏿‍♀️|🙋🏿‍♂️|🙍🏻‍♀️|🙍🏻‍♂️|🙍🏼‍♀️|🙍🏼‍♂️|🙍🏽‍♀️|🙍🏽‍♂️}]/v`,
        String.raw`/[\q{🙍🏾‍♀️|🙍🏾‍♂️|🙍🏿‍♀️|🙍🏿‍♂️|🙎🏻‍♀️|🙎🏻‍♂️|🙎🏼‍♀️|🙎🏼‍♂️|🙎🏽‍♀️|🙎🏽‍♂️|🙎🏾‍♀️|🙎🏾‍♂️|🙎🏿‍♀️|🙎🏿‍♂️|🚣🏻‍♀️|🚣🏻‍♂️|🚣🏼‍♀️|🚣🏼‍♂️|🚣🏽‍♀️|🚣🏽‍♂️}]/v`,
        String.raw`/[\q{🚣🏾‍♀️|🚣🏾‍♂️|🚣🏿‍♀️|🚣🏿‍♂️|🚴🏻‍♀️|🚴🏻‍♂️|🚴🏼‍♀️|🚴🏼‍♂️|🚴🏽‍♀️|🚴🏽‍♂️|🚴🏾‍♀️|🚴🏾‍♂️|🚴🏿‍♀️|🚴🏿‍♂️|🚵🏻‍♀️|🚵🏻‍♂️|🚵🏼‍♀️|🚵🏼‍♂️|🚵🏽‍♀️|🚵🏽‍♂️}]/v`,
        String.raw`/[\q{🚵🏾‍♀️|🚵🏾‍♂️|🚵🏿‍♀️|🚵🏿‍♂️|🚶🏻‍♀️|🚶🏻‍♂️|🚶🏼‍♀️|🚶🏼‍♂️|🚶🏽‍♀️|🚶🏽‍♂️|🚶🏾‍♀️|🚶🏾‍♂️|🚶🏿‍♀️|🚶🏿‍♂️|🤦🏻‍♀️|🤦🏻‍♂️|🤦🏼‍♀️|🤦🏼‍♂️|🤦🏽‍♀️|🤦🏽‍♂️}]/v`,
        String.raw`/[\q{🤦🏾‍♀️|🤦🏾‍♂️|🤦🏿‍♀️|🤦🏿‍♂️|🤵🏻‍♀️|🤵🏻‍♂️|🤵🏼‍♀️|🤵🏼‍♂️|🤵🏽‍♀️|🤵🏽‍♂️|🤵🏾‍♀️|🤵🏾‍♂️|🤵🏿‍♀️|🤵🏿‍♂️|🤷🏻‍♀️|🤷🏻‍♂️|🤷🏼‍♀️|🤷🏼‍♂️|🤷🏽‍♀️|🤷🏽‍♂️}]/v`,
        String.raw`/[\q{🤷🏾‍♀️|🤷🏾‍♂️|🤷🏿‍♀️|🤷🏿‍♂️|🤸🏻‍♀️|🤸🏻‍♂️|🤸🏼‍♀️|🤸🏼‍♂️|🤸🏽‍♀️|🤸🏽‍♂️|🤸🏾‍♀️|🤸🏾‍♂️|🤸🏿‍♀️|🤸🏿‍♂️|🤹🏻‍♀️|🤹🏻‍♂️|🤹🏼‍♀️|🤹🏼‍♂️|🤹🏽‍♀️|🤹🏽‍♂️}]/v`,
        String.raw`/[\q{🤹🏾‍♀️|🤹🏾‍♂️|🤹🏿‍♀️|🤹🏿‍♂️|🤽🏻‍♀️|🤽🏻‍♂️|🤽🏼‍♀️|🤽🏼‍♂️|🤽🏽‍♀️|🤽🏽‍♂️|🤽🏾‍♀️|🤽🏾‍♂️|🤽🏿‍♀️|🤽🏿‍♂️|🤾🏻‍♀️|🤾🏻‍♂️|🤾🏼‍♀️|🤾🏼‍♂️|🤾🏽‍♀️|🤾🏽‍♂️}]/v`,
        String.raw`/[\q{🤾🏾‍♀️|🤾🏾‍♂️|🤾🏿‍♀️|🤾🏿‍♂️|🦸🏻‍♀️|🦸🏻‍♂️|🦸🏼‍♀️|🦸🏼‍♂️|🦸🏽‍♀️|🦸🏽‍♂️|🦸🏾‍♀️|🦸🏾‍♂️|🦸🏿‍♀️|🦸🏿‍♂️|🦹🏻‍♀️|🦹🏻‍♂️|🦹🏼‍♀️|🦹🏼‍♂️|🦹🏽‍♀️|🦹🏽‍♂️}]/v`,
        String.raw`/[\q{🦹🏾‍♀️|🦹🏾‍♂️|🦹🏿‍♀️|🦹🏿‍♂️|🧍🏻‍♀️|🧍🏻‍♂️|🧍🏼‍♀️|🧍🏼‍♂️|🧍🏽‍♀️|🧍🏽‍♂️|🧍🏾‍♀️|🧍🏾‍♂️|🧍🏿‍♀️|🧍🏿‍♂️|🧎🏻‍♀️|🧎🏻‍♂️|🧎🏼‍♀️|🧎🏼‍♂️|🧎🏽‍♀️|🧎🏽‍♂️}]/v`,
        String.raw`/[\q{🧎🏾‍♀️|🧎🏾‍♂️|🧎🏿‍♀️|🧎🏿‍♂️|🧏🏻‍♀️|🧏🏻‍♂️|🧏🏼‍♀️|🧏🏼‍♂️|🧏🏽‍♀️|🧏🏽‍♂️|🧏🏾‍♀️|🧏🏾‍♂️|🧏🏿‍♀️|🧏🏿‍♂️|🧑‍🤝‍🧑|🧑🏻‍⚕️|🧑🏻‍⚖️|🧑🏻‍✈️|🧑🏼‍⚕️|🧑🏼‍⚖️}]/v`,
        String.raw`/[\q{🧑🏼‍✈️|🧑🏽‍⚕️|🧑🏽‍⚖️|🧑🏽‍✈️|🧑🏾‍⚕️|🧑🏾‍⚖️|🧑🏾‍✈️|🧑🏿‍⚕️|🧑🏿‍⚖️|🧑🏿‍✈️|🧔🏻‍♀️|🧔🏻‍♂️|🧔🏼‍♀️|🧔🏼‍♂️|🧔🏽‍♀️|🧔🏽‍♂️|🧔🏾‍♀️|🧔🏾‍♂️|🧔🏿‍♀️|🧔🏿‍♂️}]/v`,
        String.raw`/[\q{🧖🏻‍♀️|🧖🏻‍♂️|🧖🏼‍♀️|🧖🏼‍♂️|🧖🏽‍♀️|🧖🏽‍♂️|🧖🏾‍♀️|🧖🏾‍♂️|🧖🏿‍♀️|🧖🏿‍♂️|🧗🏻‍♀️|🧗🏻‍♂️|🧗🏼‍♀️|🧗🏼‍♂️|🧗🏽‍♀️|🧗🏽‍♂️|🧗🏾‍♀️|🧗🏾‍♂️|🧗🏿‍♀️|🧗🏿‍♂️}]/v`,
        String.raw`/[\q{🧘🏻‍♀️|🧘🏻‍♂️|🧘🏼‍♀️|🧘🏼‍♂️|🧘🏽‍♀️|🧘🏽‍♂️|🧘🏾‍♀️|🧘🏾‍♂️|🧘🏿‍♀️|🧘🏿‍♂️|🧙🏻‍♀️|🧙🏻‍♂️|🧙🏼‍♀️|🧙🏼‍♂️|🧙🏽‍♀️|🧙🏽‍♂️|🧙🏾‍♀️|🧙🏾‍♂️|🧙🏿‍♀️|🧙🏿‍♂️}]/v`,
        String.raw`/[\q{🧚🏻‍♀️|🧚🏻‍♂️|🧚🏼‍♀️|🧚🏼‍♂️|🧚🏽‍♀️|🧚🏽‍♂️|🧚🏾‍♀️|🧚🏾‍♂️|🧚🏿‍♀️|🧚🏿‍♂️|🧛🏻‍♀️|🧛🏻‍♂️|🧛🏼‍♀️|🧛🏼‍♂️|🧛🏽‍♀️|🧛🏽‍♂️|🧛🏾‍♀️|🧛🏾‍♂️|🧛🏿‍♀️|🧛🏿‍♂️}]/v`,
        String.raw`/[\q{🧜🏻‍♀️|🧜🏻‍♂️|🧜🏼‍♀️|🧜🏼‍♂️|🧜🏽‍♀️|🧜🏽‍♂️|🧜🏾‍♀️|🧜🏾‍♂️|🧜🏿‍♀️|🧜🏿‍♂️|🧝🏻‍♀️|🧝🏻‍♂️|🧝🏼‍♀️|🧝🏼‍♂️|🧝🏽‍♀️|🧝🏽‍♂️|🧝🏾‍♀️|🧝🏾‍♂️|🧝🏿‍♀️|🧝🏿‍♂️}]/v`,
        String.raw`/[\q{🫱🏻‍🫲🏼|🫱🏻‍🫲🏽|🫱🏻‍🫲🏾|🫱🏻‍🫲🏿|🫱🏼‍🫲🏻|🫱🏼‍🫲🏽|🫱🏼‍🫲🏾|🫱🏼‍🫲🏿|🫱🏽‍🫲🏻|🫱🏽‍🫲🏼|🫱🏽‍🫲🏾|🫱🏽‍🫲🏿|🫱🏾‍🫲🏻|🫱🏾‍🫲🏼|🫱🏾‍🫲🏽|🫱🏾‍🫲🏿|🫱🏿‍🫲🏻|🫱🏿‍🫲🏼|🫱🏿‍🫲🏽|🫱🏿‍🫲🏾}]/v`,
        String.raw`/[\q{👨‍❤️‍👨|👩‍❤️‍👨|👩‍❤️‍👩|👨‍👨‍👦‍👦|👨‍👨‍👧‍👦|👨‍👨‍👧‍👧|👨‍👩‍👦‍👦|👨‍👩‍👧‍👦|👨‍👩‍👧‍👧|👨🏻‍🤝‍👨🏼|👨🏻‍🤝‍👨🏽|👨🏻‍🤝‍👨🏾|👨🏻‍🤝‍👨🏿|👨🏼‍🤝‍👨🏻|👨🏼‍🤝‍👨🏽|👨🏼‍🤝‍👨🏾|👨🏼‍🤝‍👨🏿|👨🏽‍🤝‍👨🏻|👨🏽‍🤝‍👨🏼|👨🏽‍🤝‍👨🏾}]/v`,
        String.raw`/[\q{👨🏽‍🤝‍👨🏿|👨🏾‍🤝‍👨🏻|👨🏾‍🤝‍👨🏼|👨🏾‍🤝‍👨🏽|👨🏾‍🤝‍👨🏿|👨🏿‍🤝‍👨🏻|👨🏿‍🤝‍👨🏼|👨🏿‍🤝‍👨🏽|👨🏿‍🤝‍👨🏾|👩‍👩‍👦‍👦|👩‍👩‍👧‍👦|👩‍👩‍👧‍👧|👩🏻‍🤝‍👨🏼|👩🏻‍🤝‍👨🏽|👩🏻‍🤝‍👨🏾|👩🏻‍🤝‍👨🏿|👩🏻‍🤝‍👩🏼|👩🏻‍🤝‍👩🏽|👩🏻‍🤝‍👩🏾|👩🏻‍🤝‍👩🏿}]/v`,
        String.raw`/[\q{👩🏼‍🤝‍👨🏻|👩🏼‍🤝‍👨🏽|👩🏼‍🤝‍👨🏾|👩🏼‍🤝‍👨🏿|👩🏼‍🤝‍👩🏻|👩🏼‍🤝‍👩🏽|👩🏼‍🤝‍👩🏾|👩🏼‍🤝‍👩🏿|👩🏽‍🤝‍👨🏻|👩🏽‍🤝‍👨🏼|👩🏽‍🤝‍👨🏾|👩🏽‍🤝‍👨🏿|👩🏽‍🤝‍👩🏻|👩🏽‍🤝‍👩🏼|👩🏽‍🤝‍👩🏾|👩🏽‍🤝‍👩🏿|👩🏾‍🤝‍👨🏻|👩🏾‍🤝‍👨🏼|👩🏾‍🤝‍👨🏽|👩🏾‍🤝‍👨🏿}]/v`,
        String.raw`/[\q{👩🏾‍🤝‍👩🏻|👩🏾‍🤝‍👩🏼|👩🏾‍🤝‍👩🏽|👩🏾‍🤝‍👩🏿|👩🏿‍🤝‍👨🏻|👩🏿‍🤝‍👨🏼|👩🏿‍🤝‍👨🏽|👩🏿‍🤝‍👨🏾|👩🏿‍🤝‍👩🏻|👩🏿‍🤝‍👩🏼|👩🏿‍🤝‍👩🏽|👩🏿‍🤝‍👩🏾|🧑🏻‍🤝‍🧑🏻|🧑🏻‍🤝‍🧑🏼|🧑🏻‍🤝‍🧑🏽|🧑🏻‍🤝‍🧑🏾|🧑🏻‍🤝‍🧑🏿|🧑🏼‍🤝‍🧑🏻|🧑🏼‍🤝‍🧑🏼|🧑🏼‍🤝‍🧑🏽}]/v`,
        String.raw`/[\q{🧑🏼‍🤝‍🧑🏾|🧑🏼‍🤝‍🧑🏿|🧑🏽‍🤝‍🧑🏻|🧑🏽‍🤝‍🧑🏼|🧑🏽‍🤝‍🧑🏽|🧑🏽‍🤝‍🧑🏾|🧑🏽‍🤝‍🧑🏿|🧑🏾‍🤝‍🧑🏻|🧑🏾‍🤝‍🧑🏼|🧑🏾‍🤝‍🧑🏽|🧑🏾‍🤝‍🧑🏾|🧑🏾‍🤝‍🧑🏿|🧑🏿‍🤝‍🧑🏻|🧑🏿‍🤝‍🧑🏼|🧑🏿‍🤝‍🧑🏽|🧑🏿‍🤝‍🧑🏾|🧑🏿‍🤝‍🧑🏿|👨‍❤️‍💋‍👨|👨🏻‍❤️‍👨🏻|👨🏻‍❤️‍👨🏼}]/v`,
        String.raw`/[\q{👨🏻‍❤️‍👨🏽|👨🏻‍❤️‍👨🏾|👨🏻‍❤️‍👨🏿|👨🏼‍❤️‍👨🏻|👨🏼‍❤️‍👨🏼|👨🏼‍❤️‍👨🏽|👨🏼‍❤️‍👨🏾|👨🏼‍❤️‍👨🏿|👨🏽‍❤️‍👨🏻|👨🏽‍❤️‍👨🏼|👨🏽‍❤️‍👨🏽|👨🏽‍❤️‍👨🏾|👨🏽‍❤️‍👨🏿|👨🏾‍❤️‍👨🏻|👨🏾‍❤️‍👨🏼|👨🏾‍❤️‍👨🏽|👨🏾‍❤️‍👨🏾|👨🏾‍❤️‍👨🏿|👨🏿‍❤️‍👨🏻|👨🏿‍❤️‍👨🏼}]/v`,
        String.raw`/[\q{👨🏿‍❤️‍👨🏽|👨🏿‍❤️‍👨🏾|👨🏿‍❤️‍👨🏿|👩‍❤️‍💋‍👨|👩‍❤️‍💋‍👩|👩🏻‍❤️‍👨🏻|👩🏻‍❤️‍👨🏼|👩🏻‍❤️‍👨🏽|👩🏻‍❤️‍👨🏾|👩🏻‍❤️‍👨🏿|👩🏻‍❤️‍👩🏻|👩🏻‍❤️‍👩🏼|👩🏻‍❤️‍👩🏽|👩🏻‍❤️‍👩🏾|👩🏻‍❤️‍👩🏿|👩🏼‍❤️‍👨🏻|👩🏼‍❤️‍👨🏼|👩🏼‍❤️‍👨🏽|👩🏼‍❤️‍👨🏾|👩🏼‍❤️‍👨🏿}]/v`,
        String.raw`/[\q{👩🏼‍❤️‍👩🏻|👩🏼‍❤️‍👩🏼|👩🏼‍❤️‍👩🏽|👩🏼‍❤️‍👩🏾|👩🏼‍❤️‍👩🏿|👩🏽‍❤️‍👨🏻|👩🏽‍❤️‍👨🏼|👩🏽‍❤️‍👨🏽|👩🏽‍❤️‍👨🏾|👩🏽‍❤️‍👨🏿|👩🏽‍❤️‍👩🏻|👩🏽‍❤️‍👩🏼|👩🏽‍❤️‍👩🏽|👩🏽‍❤️‍👩🏾|👩🏽‍❤️‍👩🏿|👩🏾‍❤️‍👨🏻|👩🏾‍❤️‍👨🏼|👩🏾‍❤️‍👨🏽|👩🏾‍❤️‍👨🏾|👩🏾‍❤️‍👨🏿}]/v`,
        String.raw`/[\q{👩🏾‍❤️‍👩🏻|👩🏾‍❤️‍👩🏼|👩🏾‍❤️‍👩🏽|👩🏾‍❤️‍👩🏾|👩🏾‍❤️‍👩🏿|👩🏿‍❤️‍👨🏻|👩🏿‍❤️‍👨🏼|👩🏿‍❤️‍👨🏽|👩🏿‍❤️‍👨🏾|👩🏿‍❤️‍👨🏿|👩🏿‍❤️‍👩🏻|👩🏿‍❤️‍👩🏼|👩🏿‍❤️‍👩🏽|👩🏿‍❤️‍👩🏾|👩🏿‍❤️‍👩🏿|🧑🏻‍❤️‍🧑🏼|🧑🏻‍❤️‍🧑🏽|🧑🏻‍❤️‍🧑🏾|🧑🏻‍❤️‍🧑🏿|🧑🏼‍❤️‍🧑🏻}]/v`,
        String.raw`/[\q{🧑🏼‍❤️‍🧑🏽|🧑🏼‍❤️‍🧑🏾|🧑🏼‍❤️‍🧑🏿|🧑🏽‍❤️‍🧑🏻|🧑🏽‍❤️‍🧑🏼|🧑🏽‍❤️‍🧑🏾|🧑🏽‍❤️‍🧑🏿|🧑🏾‍❤️‍🧑🏻|🧑🏾‍❤️‍🧑🏼|🧑🏾‍❤️‍🧑🏽|🧑🏾‍❤️‍🧑🏿|🧑🏿‍❤️‍🧑🏻|🧑🏿‍❤️‍🧑🏼|🧑🏿‍❤️‍🧑🏽|🧑🏿‍❤️‍🧑🏾|👨🏻‍❤️‍💋‍👨🏻|👨🏻‍❤️‍💋‍👨🏼|👨🏻‍❤️‍💋‍👨🏽|👨🏻‍❤️‍💋‍👨🏾|👨🏻‍❤️‍💋‍👨🏿}]/v`,
        String.raw`/[\q{👨🏼‍❤️‍💋‍👨🏻|👨🏼‍❤️‍💋‍👨🏼|👨🏼‍❤️‍💋‍👨🏽|👨🏼‍❤️‍💋‍👨🏾|👨🏼‍❤️‍💋‍👨🏿|👨🏽‍❤️‍💋‍👨🏻|👨🏽‍❤️‍💋‍👨🏼|👨🏽‍❤️‍💋‍👨🏽|👨🏽‍❤️‍💋‍👨🏾|👨🏽‍❤️‍💋‍👨🏿|👨🏾‍❤️‍💋‍👨🏻|👨🏾‍❤️‍💋‍👨🏼|👨🏾‍❤️‍💋‍👨🏽|👨🏾‍❤️‍💋‍👨🏾|👨🏾‍❤️‍💋‍👨🏿|👨🏿‍❤️‍💋‍👨🏻|👨🏿‍❤️‍💋‍👨🏼|👨🏿‍❤️‍💋‍👨🏽|👨🏿‍❤️‍💋‍👨🏾|👨🏿‍❤️‍💋‍👨🏿}]/v`,
        String.raw`/[\q{👩🏻‍❤️‍💋‍👨🏻|👩🏻‍❤️‍💋‍👨🏼|👩🏻‍❤️‍💋‍👨🏽|👩🏻‍❤️‍💋‍👨🏾|👩🏻‍❤️‍💋‍👨🏿|👩🏻‍❤️‍💋‍👩🏻|👩🏻‍❤️‍💋‍👩🏼|👩🏻‍❤️‍💋‍👩🏽|👩🏻‍❤️‍💋‍👩🏾|👩🏻‍❤️‍💋‍👩🏿|👩🏼‍❤️‍💋‍👨🏻|👩🏼‍❤️‍💋‍👨🏼|👩🏼‍❤️‍💋‍👨🏽|👩🏼‍❤️‍💋‍👨🏾|👩🏼‍❤️‍💋‍👨🏿|👩🏼‍❤️‍💋‍👩🏻|👩🏼‍❤️‍💋‍👩🏼|👩🏼‍❤️‍💋‍👩🏽|👩🏼‍❤️‍💋‍👩🏾|👩🏼‍❤️‍💋‍👩🏿}]/v`,
        String.raw`/[\q{👩🏽‍❤️‍💋‍👨🏻|👩🏽‍❤️‍💋‍👨🏼|👩🏽‍❤️‍💋‍👨🏽|👩🏽‍❤️‍💋‍👨🏾|👩🏽‍❤️‍💋‍👨🏿|👩🏽‍❤️‍💋‍👩🏻|👩🏽‍❤️‍💋‍👩🏼|👩🏽‍❤️‍💋‍👩🏽|👩🏽‍❤️‍💋‍👩🏾|👩🏽‍❤️‍💋‍👩🏿|👩🏾‍❤️‍💋‍👨🏻|👩🏾‍❤️‍💋‍👨🏼|👩🏾‍❤️‍💋‍👨🏽|👩🏾‍❤️‍💋‍👨🏾|👩🏾‍❤️‍💋‍👨🏿|👩🏾‍❤️‍💋‍👩🏻|👩🏾‍❤️‍💋‍👩🏼|👩🏾‍❤️‍💋‍👩🏽|👩🏾‍❤️‍💋‍👩🏾|👩🏾‍❤️‍💋‍👩🏿}]/v`,
        String.raw`/[\q{👩🏿‍❤️‍💋‍👨🏻|👩🏿‍❤️‍💋‍👨🏼|👩🏿‍❤️‍💋‍👨🏽|👩🏿‍❤️‍💋‍👨🏾|👩🏿‍❤️‍💋‍👨🏿|👩🏿‍❤️‍💋‍👩🏻|👩🏿‍❤️‍💋‍👩🏼|👩🏿‍❤️‍💋‍👩🏽|👩🏿‍❤️‍💋‍👩🏾|👩🏿‍❤️‍💋‍👩🏿|🧑🏻‍❤️‍💋‍🧑🏼|🧑🏻‍❤️‍💋‍🧑🏽|🧑🏻‍❤️‍💋‍🧑🏾|🧑🏻‍❤️‍💋‍🧑🏿|🧑🏼‍❤️‍💋‍🧑🏻|🧑🏼‍❤️‍💋‍🧑🏽|🧑🏼‍❤️‍💋‍🧑🏾|🧑🏼‍❤️‍💋‍🧑🏿|🧑🏽‍❤️‍💋‍🧑🏻|🧑🏽‍❤️‍💋‍🧑🏼}]/v`,
        String.raw`/[\q{🧑🏽‍❤️‍💋‍🧑🏾|🧑🏽‍❤️‍💋‍🧑🏿|🧑🏾‍❤️‍💋‍🧑🏻|🧑🏾‍❤️‍💋‍🧑🏼|🧑🏾‍❤️‍💋‍🧑🏽|🧑🏾‍❤️‍💋‍🧑🏿|🧑🏿‍❤️‍💋‍🧑🏻|🧑🏿‍❤️‍💋‍🧑🏼|🧑🏿‍❤️‍💋‍🧑🏽|🧑🏿‍❤️‍💋‍🧑🏾}]/v`,

        // Basic_Emoji
        String.raw`/[\q{\u{a9}\u{fe0f}|\u{ae}\u{fe0f}|\u{203c}\u{fe0f}|\u{2049}\u{fe0f}|\u{2122}\u{fe0f}|\u{2139}\u{fe0f}|\u{2194}\u{fe0f}|\u{2195}\u{fe0f}|\u{2196}\u{fe0f}|\u{2197}\u{fe0f}|\u{2198}\u{fe0f}|\u{2199}\u{fe0f}|\u{21a9}\u{fe0f}|\u{21aa}\u{fe0f}|\u{2328}\u{fe0f}|\u{23cf}\u{fe0f}|\u{23ed}\u{fe0f}|\u{23ee}\u{fe0f}|\u{23ef}\u{fe0f}|\u{23f1}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{23f2}\u{fe0f}|\u{23f8}\u{fe0f}|\u{23f9}\u{fe0f}|\u{23fa}\u{fe0f}|\u{24c2}\u{fe0f}|\u{25aa}\u{fe0f}|\u{25ab}\u{fe0f}|\u{25b6}\u{fe0f}|\u{25c0}\u{fe0f}|\u{25fb}\u{fe0f}|\u{25fc}\u{fe0f}|\u{2600}\u{fe0f}|\u{2601}\u{fe0f}|\u{2602}\u{fe0f}|\u{2603}\u{fe0f}|\u{2604}\u{fe0f}|\u{260e}\u{fe0f}|\u{2611}\u{fe0f}|\u{2618}\u{fe0f}|\u{261d}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{2620}\u{fe0f}|\u{2622}\u{fe0f}|\u{2623}\u{fe0f}|\u{2626}\u{fe0f}|\u{262a}\u{fe0f}|\u{262e}\u{fe0f}|\u{262f}\u{fe0f}|\u{2638}\u{fe0f}|\u{2639}\u{fe0f}|\u{263a}\u{fe0f}|\u{2640}\u{fe0f}|\u{2642}\u{fe0f}|\u{265f}\u{fe0f}|\u{2660}\u{fe0f}|\u{2663}\u{fe0f}|\u{2665}\u{fe0f}|\u{2666}\u{fe0f}|\u{2668}\u{fe0f}|\u{267b}\u{fe0f}|\u{267e}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{2692}\u{fe0f}|\u{2694}\u{fe0f}|\u{2695}\u{fe0f}|\u{2696}\u{fe0f}|\u{2697}\u{fe0f}|\u{2699}\u{fe0f}|\u{269b}\u{fe0f}|\u{269c}\u{fe0f}|\u{26a0}\u{fe0f}|\u{26a7}\u{fe0f}|\u{26b0}\u{fe0f}|\u{26b1}\u{fe0f}|\u{26c8}\u{fe0f}|\u{26cf}\u{fe0f}|\u{26d1}\u{fe0f}|\u{26d3}\u{fe0f}|\u{26e9}\u{fe0f}|\u{26f0}\u{fe0f}|\u{26f1}\u{fe0f}|\u{26f4}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{26f7}\u{fe0f}|\u{26f8}\u{fe0f}|\u{26f9}\u{fe0f}|\u{2702}\u{fe0f}|\u{2708}\u{fe0f}|\u{2709}\u{fe0f}|\u{270c}\u{fe0f}|\u{270d}\u{fe0f}|\u{270f}\u{fe0f}|\u{2712}\u{fe0f}|\u{2714}\u{fe0f}|\u{2716}\u{fe0f}|\u{271d}\u{fe0f}|\u{2721}\u{fe0f}|\u{2733}\u{fe0f}|\u{2734}\u{fe0f}|\u{2744}\u{fe0f}|\u{2747}\u{fe0f}|\u{2763}\u{fe0f}|\u{2764}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{27a1}\u{fe0f}|\u{2934}\u{fe0f}|\u{2935}\u{fe0f}|\u{2b05}\u{fe0f}|\u{2b06}\u{fe0f}|\u{2b07}\u{fe0f}|\u{3030}\u{fe0f}|\u{303d}\u{fe0f}|\u{3297}\u{fe0f}|\u{3299}\u{fe0f}|\u{1f170}\u{fe0f}|\u{1f171}\u{fe0f}|\u{1f17e}\u{fe0f}|\u{1f17f}\u{fe0f}|\u{1f202}\u{fe0f}|\u{1f237}\u{fe0f}|\u{1f321}\u{fe0f}|\u{1f324}\u{fe0f}|\u{1f325}\u{fe0f}|\u{1f326}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{1f327}\u{fe0f}|\u{1f328}\u{fe0f}|\u{1f329}\u{fe0f}|\u{1f32a}\u{fe0f}|\u{1f32b}\u{fe0f}|\u{1f32c}\u{fe0f}|\u{1f336}\u{fe0f}|\u{1f37d}\u{fe0f}|\u{1f396}\u{fe0f}|\u{1f397}\u{fe0f}|\u{1f399}\u{fe0f}|\u{1f39a}\u{fe0f}|\u{1f39b}\u{fe0f}|\u{1f39e}\u{fe0f}|\u{1f39f}\u{fe0f}|\u{1f3cb}\u{fe0f}|\u{1f3cc}\u{fe0f}|\u{1f3cd}\u{fe0f}|\u{1f3ce}\u{fe0f}|\u{1f3d4}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{1f3d5}\u{fe0f}|\u{1f3d6}\u{fe0f}|\u{1f3d7}\u{fe0f}|\u{1f3d8}\u{fe0f}|\u{1f3d9}\u{fe0f}|\u{1f3da}\u{fe0f}|\u{1f3db}\u{fe0f}|\u{1f3dc}\u{fe0f}|\u{1f3dd}\u{fe0f}|\u{1f3de}\u{fe0f}|\u{1f3df}\u{fe0f}|\u{1f3f3}\u{fe0f}|\u{1f3f5}\u{fe0f}|\u{1f3f7}\u{fe0f}|\u{1f43f}\u{fe0f}|\u{1f441}\u{fe0f}|\u{1f4fd}\u{fe0f}|\u{1f549}\u{fe0f}|\u{1f54a}\u{fe0f}|\u{1f56f}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{1f570}\u{fe0f}|\u{1f573}\u{fe0f}|\u{1f574}\u{fe0f}|\u{1f575}\u{fe0f}|\u{1f576}\u{fe0f}|\u{1f577}\u{fe0f}|\u{1f578}\u{fe0f}|\u{1f579}\u{fe0f}|\u{1f587}\u{fe0f}|\u{1f58a}\u{fe0f}|\u{1f58b}\u{fe0f}|\u{1f58c}\u{fe0f}|\u{1f58d}\u{fe0f}|\u{1f590}\u{fe0f}|\u{1f5a5}\u{fe0f}|\u{1f5a8}\u{fe0f}|\u{1f5b1}\u{fe0f}|\u{1f5b2}\u{fe0f}|\u{1f5bc}\u{fe0f}|\u{1f5c2}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{1f5c3}\u{fe0f}|\u{1f5c4}\u{fe0f}|\u{1f5d1}\u{fe0f}|\u{1f5d2}\u{fe0f}|\u{1f5d3}\u{fe0f}|\u{1f5dc}\u{fe0f}|\u{1f5dd}\u{fe0f}|\u{1f5de}\u{fe0f}|\u{1f5e1}\u{fe0f}|\u{1f5e3}\u{fe0f}|\u{1f5e8}\u{fe0f}|\u{1f5ef}\u{fe0f}|\u{1f5f3}\u{fe0f}|\u{1f5fa}\u{fe0f}|\u{1f6cb}\u{fe0f}|\u{1f6cd}\u{fe0f}|\u{1f6ce}\u{fe0f}|\u{1f6cf}\u{fe0f}|\u{1f6e0}\u{fe0f}|\u{1f6e1}\u{fe0f}}]/v`,
        String.raw`/[\q{\u{1f6e2}\u{fe0f}|\u{1f6e3}\u{fe0f}|\u{1f6e4}\u{fe0f}|\u{1f6e5}\u{fe0f}|\u{1f6e9}\u{fe0f}|\u{1f6f0}\u{fe0f}|\u{1f6f3}\u{fe0f}}]/v`,
        // RGI_Emoji_Flag_Sequence
        String.raw`/[\q{\u{1f1e6}\u{1f1e8}|\u{1f1e6}\u{1f1e9}|\u{1f1e6}\u{1f1ea}|\u{1f1e6}\u{1f1eb}|\u{1f1e6}\u{1f1ec}|\u{1f1e6}\u{1f1ee}|\u{1f1e6}\u{1f1f1}|\u{1f1e6}\u{1f1f2}|\u{1f1e6}\u{1f1f4}|\u{1f1e6}\u{1f1f6}|\u{1f1e6}\u{1f1f7}|\u{1f1e6}\u{1f1f8}|\u{1f1e6}\u{1f1f9}|\u{1f1e6}\u{1f1fa}|\u{1f1e6}\u{1f1fc}|\u{1f1e6}\u{1f1fd}|\u{1f1e6}\u{1f1ff}|\u{1f1e7}\u{1f1e6}|\u{1f1e7}\u{1f1e7}|\u{1f1e7}\u{1f1e9}}]/v`,
        String.raw`/[\q{\u{1f1e7}\u{1f1ea}|\u{1f1e7}\u{1f1eb}|\u{1f1e7}\u{1f1ec}|\u{1f1e7}\u{1f1ed}|\u{1f1e7}\u{1f1ee}|\u{1f1e7}\u{1f1ef}|\u{1f1e7}\u{1f1f1}|\u{1f1e7}\u{1f1f2}|\u{1f1e7}\u{1f1f3}|\u{1f1e7}\u{1f1f4}|\u{1f1e7}\u{1f1f6}|\u{1f1e7}\u{1f1f7}|\u{1f1e7}\u{1f1f8}|\u{1f1e7}\u{1f1f9}|\u{1f1e7}\u{1f1fb}|\u{1f1e7}\u{1f1fc}|\u{1f1e7}\u{1f1fe}|\u{1f1e7}\u{1f1ff}|\u{1f1e8}\u{1f1e6}|\u{1f1e8}\u{1f1e8}}]/v`,
        String.raw`/[\q{\u{1f1e8}\u{1f1e9}|\u{1f1e8}\u{1f1eb}|\u{1f1e8}\u{1f1ec}|\u{1f1e8}\u{1f1ed}|\u{1f1e8}\u{1f1ee}|\u{1f1e8}\u{1f1f0}|\u{1f1e8}\u{1f1f1}|\u{1f1e8}\u{1f1f2}|\u{1f1e8}\u{1f1f3}|\u{1f1e8}\u{1f1f4}|\u{1f1e8}\u{1f1f5}|\u{1f1e8}\u{1f1f7}|\u{1f1e8}\u{1f1fa}|\u{1f1e8}\u{1f1fb}|\u{1f1e8}\u{1f1fc}|\u{1f1e8}\u{1f1fd}|\u{1f1e8}\u{1f1fe}|\u{1f1e8}\u{1f1ff}|\u{1f1e9}\u{1f1ea}|\u{1f1e9}\u{1f1ec}}]/v`,
        String.raw`/[\q{\u{1f1e9}\u{1f1ef}|\u{1f1e9}\u{1f1f0}|\u{1f1e9}\u{1f1f2}|\u{1f1e9}\u{1f1f4}|\u{1f1e9}\u{1f1ff}|\u{1f1ea}\u{1f1e6}|\u{1f1ea}\u{1f1e8}|\u{1f1ea}\u{1f1ea}|\u{1f1ea}\u{1f1ec}|\u{1f1ea}\u{1f1ed}|\u{1f1ea}\u{1f1f7}|\u{1f1ea}\u{1f1f8}|\u{1f1ea}\u{1f1f9}|\u{1f1ea}\u{1f1fa}|\u{1f1eb}\u{1f1ee}|\u{1f1eb}\u{1f1ef}|\u{1f1eb}\u{1f1f0}|\u{1f1eb}\u{1f1f2}|\u{1f1eb}\u{1f1f4}|\u{1f1eb}\u{1f1f7}}]/v`,
        String.raw`/[\q{\u{1f1ec}\u{1f1e6}|\u{1f1ec}\u{1f1e7}|\u{1f1ec}\u{1f1e9}|\u{1f1ec}\u{1f1ea}|\u{1f1ec}\u{1f1eb}|\u{1f1ec}\u{1f1ec}|\u{1f1ec}\u{1f1ed}|\u{1f1ec}\u{1f1ee}|\u{1f1ec}\u{1f1f1}|\u{1f1ec}\u{1f1f2}|\u{1f1ec}\u{1f1f3}|\u{1f1ec}\u{1f1f5}|\u{1f1ec}\u{1f1f6}|\u{1f1ec}\u{1f1f7}|\u{1f1ec}\u{1f1f8}|\u{1f1ec}\u{1f1f9}|\u{1f1ec}\u{1f1fa}|\u{1f1ec}\u{1f1fc}|\u{1f1ec}\u{1f1fe}|\u{1f1ed}\u{1f1f0}}]/v`,
        String.raw`/[\q{\u{1f1ed}\u{1f1f2}|\u{1f1ed}\u{1f1f3}|\u{1f1ed}\u{1f1f7}|\u{1f1ed}\u{1f1f9}|\u{1f1ed}\u{1f1fa}|\u{1f1ee}\u{1f1e8}|\u{1f1ee}\u{1f1e9}|\u{1f1ee}\u{1f1ea}|\u{1f1ee}\u{1f1f1}|\u{1f1ee}\u{1f1f2}|\u{1f1ee}\u{1f1f3}|\u{1f1ee}\u{1f1f4}|\u{1f1ee}\u{1f1f6}|\u{1f1ee}\u{1f1f7}|\u{1f1ee}\u{1f1f8}|\u{1f1ee}\u{1f1f9}|\u{1f1ef}\u{1f1ea}|\u{1f1ef}\u{1f1f2}|\u{1f1ef}\u{1f1f4}|\u{1f1ef}\u{1f1f5}}]/v`,
        String.raw`/[\q{\u{1f1f0}\u{1f1ea}|\u{1f1f0}\u{1f1ec}|\u{1f1f0}\u{1f1ed}|\u{1f1f0}\u{1f1ee}|\u{1f1f0}\u{1f1f2}|\u{1f1f0}\u{1f1f3}|\u{1f1f0}\u{1f1f5}|\u{1f1f0}\u{1f1f7}|\u{1f1f0}\u{1f1fc}|\u{1f1f0}\u{1f1fe}|\u{1f1f0}\u{1f1ff}|\u{1f1f1}\u{1f1e6}|\u{1f1f1}\u{1f1e7}|\u{1f1f1}\u{1f1e8}|\u{1f1f1}\u{1f1ee}|\u{1f1f1}\u{1f1f0}|\u{1f1f1}\u{1f1f7}|\u{1f1f1}\u{1f1f8}|\u{1f1f1}\u{1f1f9}|\u{1f1f1}\u{1f1fa}}]/v`,
        String.raw`/[\q{\u{1f1f1}\u{1f1fb}|\u{1f1f1}\u{1f1fe}|\u{1f1f2}\u{1f1e6}|\u{1f1f2}\u{1f1e8}|\u{1f1f2}\u{1f1e9}|\u{1f1f2}\u{1f1ea}|\u{1f1f2}\u{1f1eb}|\u{1f1f2}\u{1f1ec}|\u{1f1f2}\u{1f1ed}|\u{1f1f2}\u{1f1f0}|\u{1f1f2}\u{1f1f1}|\u{1f1f2}\u{1f1f2}|\u{1f1f2}\u{1f1f3}|\u{1f1f2}\u{1f1f4}|\u{1f1f2}\u{1f1f5}|\u{1f1f2}\u{1f1f6}|\u{1f1f2}\u{1f1f7}|\u{1f1f2}\u{1f1f8}|\u{1f1f2}\u{1f1f9}|\u{1f1f2}\u{1f1fa}}]/v`,
        String.raw`/[\q{\u{1f1f2}\u{1f1fb}|\u{1f1f2}\u{1f1fc}|\u{1f1f2}\u{1f1fd}|\u{1f1f2}\u{1f1fe}|\u{1f1f2}\u{1f1ff}|\u{1f1f3}\u{1f1e6}|\u{1f1f3}\u{1f1e8}|\u{1f1f3}\u{1f1ea}|\u{1f1f3}\u{1f1eb}|\u{1f1f3}\u{1f1ec}|\u{1f1f3}\u{1f1ee}|\u{1f1f3}\u{1f1f1}|\u{1f1f3}\u{1f1f4}|\u{1f1f3}\u{1f1f5}|\u{1f1f3}\u{1f1f7}|\u{1f1f3}\u{1f1fa}|\u{1f1f3}\u{1f1ff}|\u{1f1f4}\u{1f1f2}|\u{1f1f5}\u{1f1e6}|\u{1f1f5}\u{1f1ea}}]/v`,
        String.raw`/[\q{\u{1f1f5}\u{1f1eb}|\u{1f1f5}\u{1f1ec}|\u{1f1f5}\u{1f1ed}|\u{1f1f5}\u{1f1f0}|\u{1f1f5}\u{1f1f1}|\u{1f1f5}\u{1f1f2}|\u{1f1f5}\u{1f1f3}|\u{1f1f5}\u{1f1f7}|\u{1f1f5}\u{1f1f8}|\u{1f1f5}\u{1f1f9}|\u{1f1f5}\u{1f1fc}|\u{1f1f5}\u{1f1fe}|\u{1f1f6}\u{1f1e6}|\u{1f1f7}\u{1f1ea}|\u{1f1f7}\u{1f1f4}|\u{1f1f7}\u{1f1f8}|\u{1f1f7}\u{1f1fa}|\u{1f1f7}\u{1f1fc}|\u{1f1f8}\u{1f1e6}|\u{1f1f8}\u{1f1e7}}]/v`,
        String.raw`/[\q{\u{1f1f8}\u{1f1e8}|\u{1f1f8}\u{1f1e9}|\u{1f1f8}\u{1f1ea}|\u{1f1f8}\u{1f1ec}|\u{1f1f8}\u{1f1ed}|\u{1f1f8}\u{1f1ee}|\u{1f1f8}\u{1f1ef}|\u{1f1f8}\u{1f1f0}|\u{1f1f8}\u{1f1f1}|\u{1f1f8}\u{1f1f2}|\u{1f1f8}\u{1f1f3}|\u{1f1f8}\u{1f1f4}|\u{1f1f8}\u{1f1f7}|\u{1f1f8}\u{1f1f8}|\u{1f1f8}\u{1f1f9}|\u{1f1f8}\u{1f1fb}|\u{1f1f8}\u{1f1fd}|\u{1f1f8}\u{1f1fe}|\u{1f1f8}\u{1f1ff}|\u{1f1f9}\u{1f1e6}}]/v`,
        String.raw`/[\q{\u{1f1f9}\u{1f1e8}|\u{1f1f9}\u{1f1e9}|\u{1f1f9}\u{1f1eb}|\u{1f1f9}\u{1f1ec}|\u{1f1f9}\u{1f1ed}|\u{1f1f9}\u{1f1ef}|\u{1f1f9}\u{1f1f0}|\u{1f1f9}\u{1f1f1}|\u{1f1f9}\u{1f1f2}|\u{1f1f9}\u{1f1f3}|\u{1f1f9}\u{1f1f4}|\u{1f1f9}\u{1f1f7}|\u{1f1f9}\u{1f1f9}|\u{1f1f9}\u{1f1fb}|\u{1f1f9}\u{1f1fc}|\u{1f1f9}\u{1f1ff}|\u{1f1fa}\u{1f1e6}|\u{1f1fa}\u{1f1ec}|\u{1f1fa}\u{1f1f2}|\u{1f1fa}\u{1f1f3}}]/v`,
        String.raw`/[\q{\u{1f1fa}\u{1f1f8}|\u{1f1fa}\u{1f1fe}|\u{1f1fa}\u{1f1ff}|\u{1f1fb}\u{1f1e6}|\u{1f1fb}\u{1f1e8}|\u{1f1fb}\u{1f1ea}|\u{1f1fb}\u{1f1ec}|\u{1f1fb}\u{1f1ee}|\u{1f1fb}\u{1f1f3}|\u{1f1fb}\u{1f1fa}|\u{1f1fc}\u{1f1eb}|\u{1f1fc}\u{1f1f8}|\u{1f1fd}\u{1f1f0}|\u{1f1fe}\u{1f1ea}|\u{1f1fe}\u{1f1f9}|\u{1f1ff}\u{1f1e6}|\u{1f1ff}\u{1f1f2}|\u{1f1ff}\u{1f1fc}}]/v`,

        String.raw`/[\q{竈|門|禰󠄀|豆|子}\q{煉󠄁|獄|杏|寿|郎}]/v`,
        String.raw`/[\q{a|b|c|}]/v`,
    ],
    invalid: [
        {
            code: String.raw`/[\q{abc}]/v`,
            errors: [
                {
                    message:
                        "Only single characters and graphemes are allowed inside character classes. Use regular alternatives (e.g. `(?:abc|[...])`) for strings instead.",
                    line: 1,
                    column: 6,
                },
            ],
        },
        {
            code: String.raw`/[\q{a|bc|}]/v`,
            errors: [
                {
                    message:
                        "Only single characters and graphemes are allowed inside character classes. Use regular alternatives (e.g. `(?:bc|[...])`) for strings instead.",
                    line: 1,
                    column: 8,
                },
            ],
        },
        {
            code: String.raw`/[\q{🇦🇨🇦🇩}]/v`,
            errors: [
                {
                    message:
                        "Only single characters and graphemes are allowed inside character classes. Use regular alternatives (e.g. `(?:🇦🇨🇦🇩|[...])`) for strings instead.",
                    line: 1,
                    column: 6,
                },
            ],
        },
        {
            code: String.raw`/[\q{abc|def|ghi|j|k|lm|n}]/v`,
            errors: [
                "Only single characters and graphemes are allowed inside character classes. Use regular alternatives (e.g. `(?:abc|def|ghi|lm|[...])`) for strings instead.",
                "Only single characters and graphemes are allowed inside character classes. Use regular alternatives (e.g. `(?:abc|def|ghi|lm|[...])`) for strings instead.",
                "Only single characters and graphemes are allowed inside character classes. Use regular alternatives (e.g. `(?:abc|def|ghi|lm|[...])`) for strings instead.",
                "Only single characters and graphemes are allowed inside character classes. Use regular alternatives (e.g. `(?:abc|def|ghi|lm|[...])`) for strings instead.",
            ],
        },
    ],
})
