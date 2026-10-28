/*
 * A2 grammar data.
 * Grammar point titles, patterns, and example sentences are adapted from the
 * Chinese Grammar Wiki A2 list by AllSet Learning.
 */
window.GRAMMAR_DATA_A2 = {
  source: {
    name: "Chinese Grammar Wiki",
    level: "A2",
    url: "https://resources.allsetlearning.com/chinese/grammar/A2_grammar_points",
    licenseUrl: "https://resources.allsetlearning.com/chinese/grammar/Chinese_Grammar_Wiki:Copyrights",
    note: "Grammar point titles, patterns, and examples are adapted from the Chinese Grammar Wiki A2 list."
  },

  points: [
    {
      id: "a2-si-le",
      title: "Negative adjectives with \"-si le\"",
      category: "adjectives",
      level: "A2",
      pattern: "Adj. + 死了",
      summary: "Adjective + 死了 means “extremely ...” in casual speech.",
      detail: "Literally “to death,” 死了 after an adjective is an informal intensifier. 累死了 means exhausted; 饿死了 means starving. Keep it for conversation rather than formal writing.",
      tip: "Use 死了 for strong, everyday feelings.",
      examples: [
        { zh: "我今天累死了。", pinyin: "Wǒ jīntiān lèi sǐ le.", en: "I'm exhausted today." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGLEVUV"
    },
    {
      id: "a2-chabuduo",
      title: "Approximations with \"chabuduo\"",
      category: "adverbs",
      level: "A2",
      pattern: "Subj. + 差不多",
      summary: "差不多 means “about the same” or “almost.”",
      detail: "After a subject, 差不多 says two things are roughly equal. Before a number or verb, it can also mean “almost.” Context makes the difference clear.",
      tip: "差不多 = close enough, but not exact.",
      examples: [
        { zh: "我们的中文水平差不多。", pinyin: "Wǒmen de Zhōngwén shuǐpíng chàbuduō.", en: "Our Chinese levels are about the same." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG1NAXO"
    },
    {
      id: "a2-dou-quantity",
      title: "Emphasizing quantity with \"dou\"",
      category: "adverbs",
      level: "A2",
      pattern: "大家 / 很多人 + 都……",
      summary: "都 emphasizes that a whole group or large quantity is included.",
      detail: "With a quantity subject such as 很多人 or 大家, 都 comes before the verb and means “all” or “without exception.” It is not limited to pronouns.",
      tip: "Quantity subject + 都 + verb.",
      examples: [
        { zh: "很多地方都有 wifi。", pinyin: "Hěn duō dìfang dōu yǒu wifi.", en: "Many places have Wi-Fi." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGWNEYM"
    },
    {
      id: "a2-zai-progressive",
      title: "Expressing actions in progress with \"zai\"",
      category: "adverbs",
      level: "A2",
      pattern: "(正) 在 + Verb",
      summary: "在 or 正在 before a verb marks an action in progress.",
      detail: "Use 正在 for “right now”; 在 alone also works. A sentence-final 呢 can add emphasis: 我正在吃饭呢.",
      tip: "正在 + verb = be doing right now.",
      examples: [
        { zh: "我们正在吃饭。", pinyin: "Wǒmen zhèngzài chīfàn.", en: "We are eating right now." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG846EA"
    },
    {
      id: "a2-yizhi",
      title: "Expressing \"all along\" with \"yizhi\"",
      category: "adverbs",
      level: "A2",
      pattern: "Subj. + 一直 + Predicate",
      summary: "一直 means “all along” or “continuously.”",
      detail: "Put 一直 before the verb or adjective. It describes an action or state that continues without a break, often together with 在 for ongoing action.",
      tip: "一直 = from start to now, without stopping.",
      examples: [
        { zh: "我一直在现在的公司工作。", pinyin: "Wǒ yīzhí zài xiànzài de gōngsī gōngzuò.", en: "I've worked at my current company all along." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGP000J"
    },
    {
      id: "a2-yijing",
      title: "Expressing \"already\" with \"yijing\"",
      category: "adverbs",
      level: "A2",
      pattern: "已经……了",
      summary: "已经……了 means “already.”",
      detail: "已经 goes before the verb, and 了 usually appears at the end. The two work together to frame a change that has already happened.",
      tip: "已经 before the verb, 了 at the end.",
      examples: [
        { zh: "他已经走了。", pinyin: "Tā yǐjīng zǒu le.", en: "He has already left." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGNXI27"
    },
    {
      id: "a2-zongshi",
      title: "Expressing \"always\" with \"zongshi\"",
      category: "adverbs",
      level: "A2",
      pattern: "总是 + Verb",
      summary: "总是 means “always” and often carries a tone of complaint.",
      detail: "总是 goes before the verb and describes a repeated habit. For a continuous state, 一直 is often a better fit; 总是 stresses “every time.”",
      tip: "总是 + verb = always does it.",
      examples: [
        { zh: "他总是迟到。", pinyin: "Tā zǒngshì chídào.", en: "He is always late." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGXJPJS"
    },
    {
      id: "a2-hai-also",
      title: "Expressing \"and also\" with \"hai\"",
      category: "adverbs",
      level: "A2",
      pattern: "还 + Verb",
      summary: "还 adds “also” or “still” before a verb.",
      detail: "还 often adds another item or action beyond what was already mentioned. Unlike 也, it suggests something additional on top of the existing information.",
      tip: "还 = additionally, or still.",
      examples: [
        { zh: "她有一个弟弟，还有一个妹妹。", pinyin: "Tā yǒu yí gè dìdi, hái yǒu yí gè mèimei.", en: "She has a younger brother and also a younger sister." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGJBZKC"
    },
    {
      id: "a2-gang-just",
      title: "Expressing \"just\" with \"gang\"",
      category: "adverbs",
      level: "A2",
      pattern: "Subj. + 刚 + Verb",
      summary: "刚 means “just” a short time ago.",
      detail: "刚 goes immediately before the verb. 刚才 is a time noun meaning “just now” and can stand at the start of a sentence; 刚 cannot.",
      tip: "刚 + verb; 刚才 is a time word.",
      examples: [
        { zh: "他刚走。", pinyin: "Tā gāng zǒu.", en: "He just left." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGQJJYO"
    },
    {
      id: "a2-zhi-only",
      title: "Expressing \"only\" with \"zhi\"",
      category: "adverbs",
      level: "A2",
      pattern: "只 + Verb",
      summary: "只 means “only” and goes before the verb.",
      detail: "只 limits the quantity or scope of the action. It can also appear before a number or measure phrase: 只有一个.",
      tip: "只 goes before the thing being limited.",
      examples: [
        { zh: "我只有一个妹妹。", pinyin: "Wǒ zhǐ yǒu yí gè mèimei.", en: "I only have one younger sister." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGN8C8R"
    },
    {
      id: "a2-jiu-then",
      title: "Expressing \"then\" with \"jiu\"",
      category: "adverbs",
      level: "A2",
      pattern: "就 + Verb Phrase",
      summary: "就 often means “then” or “right away” after a condition.",
      detail: "After a condition or time phrase, 就 introduces the result or next action. It can also emphasize that something happens early or easily.",
      tip: "Condition, 就 + result.",
      examples: [
        { zh: "我们现在有时间，就去吧。", pinyin: "Wǒmen xiànzài yǒu shíjiān, jiù qù ba.", en: "We have time now, so let's just go." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGEB54D"
    },
    {
      id: "a2-bie-commands",
      title: "Negative commands with \"bie\"",
      category: "adverbs",
      level: "A2",
      pattern: "别 + Verb",
      summary: "别 + verb gives a direct negative command.",
      detail: "别 is the everyday spoken equivalent of 不要. It can sound blunt, so add 吧 or a reason when politeness matters.",
      tip: "别 + verb = don't do it.",
      examples: [
        { zh: "别走。", pinyin: "Bié zǒu.", en: "Don't go." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG9W0UX"
    },
    {
      id: "a2-yibian",
      title: "Simultaneous tasks with \"yibian\"",
      category: "adverbs",
      level: "A2",
      pattern: "一边 + Verb 1 (，) 一边 + Verb 2",
      summary: "一边……一边…… means doing two actions at the same time.",
      detail: "Both actions should be ones a person can reasonably do simultaneously. The pattern often translates as “while” and uses one subject for both verbs.",
      tip: "One subject, two 一边 actions.",
      examples: [
        { zh: "不要一边说话，一边吃东西。", pinyin: "Búyào yìbiān shuōhuà, yìbiān chī dōngxi.", en: "Don't talk while eating." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG2ZC5S"
    },
    {
      id: "a2-duo-degree",
      title: "Asking about degree with \"duo\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "Subj. + 多 + Adj.?",
      summary: "多 + adjective asks “how [adjective]?”",
      detail: "Use 多 before an adjective to ask about degree: 多大 (how old/big), 多远 (how far), 多高 (how tall). This is a question pattern, not the same as 多少.",
      tip: "多 + adjective = how ...?",
      examples: [
        { zh: "他多高？", pinyin: "Tā duō gāo?", en: "How tall is he?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG9LLJU"
    },
    {
      id: "a2-yiyang",
      title: "Basic comparisons with \"yiyang\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "Noun 1 + 跟 / 和 + Noun 2 + 一样 + Adj.",
      summary: "A 跟/和 B 一样 + adjective means A is as ... as B.",
      detail: "一样 means “the same.” 跟 and 和 both work as “with,” and 跟 is especially common in comparisons. Negate the pattern with 不一样.",
      tip: "A 跟 B 一样 + adjective.",
      examples: [
        { zh: "你跟他一样高。", pinyin: "Nǐ gēn tā yíyàng gāo.", en: "You are as tall as him." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGC06N0"
    },
    {
      id: "a2-you-dian",
      title: "Expressing \"a little too\" with \"you dian\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "有点(儿) + Adj.",
      summary: "有点(儿) + adjective means “a little” or “a bit too.”",
      detail: "It usually softens a negative quality: 有点贵 (a bit expensive), 有点累 (a little tired). The phrase goes before the adjective.",
      tip: "有点 + adjective, often mildly negative.",
      examples: [
        { zh: "我有点饿。", pinyin: "Wǒ yǒudiǎn è.", en: "I'm a little hungry." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGPM3MY"
    },
    {
      id: "a2-you-you",
      title: "Expressing \"both A and B\" with \"you\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "又……又……",
      summary: "又……又…… lists two qualities or actions that coexist.",
      detail: "The pattern joins two adjectives or verb phrases. It emphasizes that both descriptions are true at the same time.",
      tip: "又 A 又 B = both A and B.",
      examples: [
        { zh: "他又高又帅。", pinyin: "Tā yòu gāo yòu shuài.", en: "He is both tall and handsome." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGPFUM2"
    },
    {
      id: "a2-li-distance",
      title: "Expressing distance with \"li\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "Place 1 + 离 + Place 2 + Adv. + 近 / 远",
      summary: "A 离 B + 近/远 says A is close to or far from B.",
      detail: "离 marks the distance between two places. Add an adverb such as 很 or 不太 before 近/远 to adjust the judgment.",
      tip: "A 离 B 很近 = A is close to B.",
      examples: [
        { zh: "我家离大学很近。", pinyin: "Wǒ jiā lí dàxué hěn jìn.", en: "My home is very close to the university." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGI96BQ"
    },
    {
      id: "a2-geng",
      title: "Expressing \"even more\" with \"geng\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "更 + Adj.",
      summary: "更 + adjective means “even more.”",
      detail: "更 compares something to an existing state or expectation. It often appears in a 比 comparison or when choosing between options.",
      tip: "更 = even more, compared with something else.",
      examples: [
        { zh: "这个比那个更好。", pinyin: "Zhège bǐ nàge gèng hǎo.", en: "This one is even better than that one." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG4NIPB"
    },
    {
      id: "a2-bu-tai",
      title: "Expressing \"not very\" with \"bu tai\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "不太 + Adj.",
      summary: "不太 + adjective or verb means “not very.”",
      detail: "不太 softens a negative statement. 不太喜欢 is gentler than 不喜欢. It works with adjectives and some mental verbs.",
      tip: "不太 = not very, a softer negative.",
      examples: [
        { zh: "他不太高兴。", pinyin: "Tā bú tài gāoxìng.", en: "He's not very happy." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGUNMHU"
    },
    {
      id: "a2-zhen",
      title: "Expressing \"really\" with \"zhen\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "真 + Adj.",
      summary: "真 + adjective expresses genuine feeling: “really.”",
      detail: "真 adds emphasis and often sounds more personal than 很. It is common in exclamations and spontaneous reactions.",
      tip: "真 = really, with feeling.",
      examples: [
        { zh: "你女朋友真漂亮。", pinyin: "Nǐ nǚpéngyou zhēn piàoliang.", en: "Your girlfriend is really pretty." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGC885D"
    },
    {
      id: "a2-duo-intensify",
      title: "Intensifying with \"duo\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "Subj. + 多 + Adj.",
      summary: "多 + adjective in an exclamation means “how ...” or “so ....”",
      detail: "This is not a question. It expresses strong feeling: 多好！(How nice!), 外面多舒服！(It's so comfortable outside!).",
      tip: "Exclamation 多 + adjective = how ...!",
      examples: [
        { zh: "外面多舒服！", pinyin: "Wàimiàn duō shūfu!", en: "It's so comfortable outside!" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGGH7RR"
    },
    {
      id: "a2-hai-moderate",
      title: "Moderating positive adjectives with \"hai\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "还 + Adj.",
      summary: "还 + adjective can mean “fairly” or “still okay.”",
      detail: "This use softens a positive judgment, often suggesting something is acceptable but not outstanding: 还好, 还可以, 还不错.",
      tip: "还好 = still okay / not bad.",
      examples: [
        { zh: "今天还好。", pinyin: "Jīntiān hái hǎo.", en: "Today is okay." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGAY164"
    },
    {
      id: "a2-adj-de",
      title: "Modifying nouns with adjective + \"de\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "Adj. + 的 + Noun",
      summary: "Adjective + 的 + noun creates a descriptive noun phrase.",
      detail: "的 links the description to the noun. It is especially common when the adjective is longer than one syllable or when the description is emphasized.",
      tip: "Description + 的 + noun.",
      examples: [
        { zh: "可爱的宝宝。", pinyin: "Kě'ài de bǎobao.", en: "A cute baby." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGVUFKX"
    },
    {
      id: "a2-phrase-de",
      title: "Modifying nouns with phrase + \"de\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "Phrase + 的 + Noun",
      summary: "A phrase + 的 + noun means “the noun that ....”",
      detail: "The phrase before 的 can describe an action, time, or place. 的 turns the whole phrase into a description of the noun.",
      tip: "Long description + 的 + noun.",
      examples: [
        { zh: "去北京的火车。", pinyin: "Qù Běijīng de huǒchē.", en: "The train that goes to Beijing." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGLQKD2"
    },
    {
      id: "a2-zui",
      title: "Superlative \"zui\"",
      category: "adverbs-adjectives",
      level: "A2",
      pattern: "最 + Adj. (+ 了)",
      summary: "最 + adjective means “the most.”",
      detail: "最 marks the superlative. It can be followed by 了 in an exclamation or when describing a change: 最好了.",
      tip: "最 = most.",
      examples: [
        { zh: "谁最有钱？", pinyin: "Shéi zuì yǒu qián?", en: "Who is the richest?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG3544U"
    },
    {
      id: "a2-huozhe",
      title: "Expressing \"or\" in statements",
      category: "conjunctions",
      level: "A2",
      pattern: "……或者……",
      summary: "或者 means “or” in statements.",
      detail: "Use 或者 to list alternatives in a statement. In questions offering a choice, use 还是 instead.",
      tip: "Statement “or” = 或者; question “or” = 还是.",
      examples: [
        { zh: "我想去青岛或者南京。", pinyin: "Wǒ xiǎng qù Qīngdǎo huòzhě Nánjīng.", en: "I want to go to Qingdao or Nanjing." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG6HYOU"
    },
    {
      id: "a2-gen-with",
      title: "Expressing \"with\" with \"gen\"",
      category: "conjunctions",
      level: "A2",
      pattern: "跟…… + Verb",
      summary: "跟 + person + verb means “with someone.”",
      detail: "跟 introduces the person you do something with. 一起 often appears before the verb for “together.”",
      tip: "跟 + person + 一起 + verb.",
      examples: [
        { zh: "你要跟我一起去吗？", pinyin: "Nǐ yào gēn wǒ yìqǐ qù ma?", en: "Do you want to go with me?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGSZ0HP"
    },
    {
      id: "a2-neige",
      title: "The filler word \"neige\"",
      category: "conjunctions",
      level: "A2",
      pattern: "……那个……",
      summary: "那个 can be a filler word like “um” or “you know.”",
      detail: "In speech, 那个 is often stretched out while the speaker thinks. It is informal and should not be overused.",
      tip: "那个 as a filler = uh / um.",
      examples: [
        { zh: "那个，我想问一个问题。", pinyin: "Nàge, wǒ xiǎng wèn yí gè wèntí.", en: "Um, I want to ask a question." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG8VJM8"
    },
    {
      id: "a2-keshi-danshi",
      title: "Two words for \"but\"",
      category: "conjunctions",
      level: "A2",
      pattern: "……，可是 / 但是……",
      summary: "可是 and 但是 both mean “but.”",
      detail: "但是 is slightly more formal and emphatic; 可是 is common in conversation. Both introduce a contrast after a comma.",
      tip: "可是 = but (spoken); 但是 = but (more formal).",
      examples: [
        { zh: "我喜欢他，可是他不喜欢我。", pinyin: "Wǒ xǐhuan tā, kěshì tā bù xǐhuan wǒ.", en: "I like him, but he doesn't like me." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGUD81S"
    },
    {
      id: "a2-yihou-time",
      title: "After a specific time with \"yihou\"",
      category: "nouns",
      level: "A2",
      pattern: "Time / Verb + 以后",
      summary: "Time + 以后 means “after that time.”",
      detail: "以后 follows the time or event. The whole phrase can come at the start of the sentence or before the verb.",
      tip: "Time + 以后 = after that time.",
      examples: [
        { zh: "10点以后，我不在家。", pinyin: "Shí diǎn yǐhòu, wǒ bú zài jiā.", en: "After 10 o'clock, I won't be home." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGRLQGY"
    },
    {
      id: "a2-yiqian-time",
      title: "Before a specific time with \"yiqian\"",
      category: "nouns",
      level: "A2",
      pattern: "Time / Verb + 以前",
      summary: "Time + 以前 means “before that time.”",
      detail: "以前 follows the time or event. It can also mean “before” in a sequence, as in 吃饭以前.",
      tip: "Time + 以前 = before that time.",
      examples: [
        { zh: "十点以前，我在家。", pinyin: "Shí diǎn yǐqián, wǒ zài jiā.", en: "Before 10 o'clock, I'll be at home." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGJ2OJC"
    },
    {
      id: "a2-yiqian-general",
      title: "Expressing \"before\" in general with \"yiqian\"",
      category: "nouns",
      level: "A2",
      pattern: "以前，……",
      summary: "以前 at the start of a sentence means “in the past” or “before.”",
      detail: "When 以前 stands alone or at the start, it refers to an earlier period, not a specific clock time. The contrast is often 现在.",
      tip: "以前 at the start = in the past.",
      examples: [
        { zh: "以前，我不会说中文。", pinyin: "Yǐqián, wǒ bú huì shuō Zhōngwén.", en: "Before, I couldn't speak Chinese." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGVCWLU"
    },
    {
      id: "a2-gangcai",
      title: "Expressing \"just now\" with \"gangcai\"",
      category: "nouns",
      level: "A2",
      pattern: "刚才 + Verb",
      summary: "刚才 is a time noun meaning “just now.”",
      detail: "刚才 can stand at the start of a sentence or before the verb. Unlike 刚, it is a time word and can be separated from the verb.",
      tip: "刚才 = just now (a time noun).",
      examples: [
        { zh: "你刚才说什么了？", pinyin: "Nǐ gāngcái shuō shénme le?", en: "What did you just say?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGQ1KOY"
    },
    {
      id: "a2-de-shihou",
      title: "Expressing \"when\" with \"de shihou\"",
      category: "nouns",
      level: "A2",
      pattern: "……的时候",
      summary: "……的时候 means “when ...” or “while ....”",
      detail: "Put the situation before 的时候. The phrase can come at the start of the sentence or before the main verb.",
      tip: "Situation + 的时候 = when ...",
      examples: [
        { zh: "你不在的时候，我会想你。", pinyin: "Nǐ bú zài de shíhou, wǒ huì xiǎng nǐ.", en: "When you're not here, I miss you." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGWN185"
    },
    {
      id: "a2-yihou-general",
      title: "In the future in general with \"yihou\"",
      category: "nouns",
      level: "A2",
      pattern: "以后，……",
      summary: "以后 at the start of a sentence means “in the future” or “later.”",
      detail: "When 以后 stands alone, it refers to a future period in general. Its contrast is often 以前.",
      tip: "以后 at the start = in the future.",
      examples: [
        { zh: "以后，你不要问我。", pinyin: "Yǐhòu, nǐ búyào wèn wǒ.", en: "In the future, don't ask me." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGPVFU1"
    },
    {
      id: "a2-time-order",
      title: "Time words and word order",
      category: "nouns",
      level: "A2",
      pattern: "Subj. + Time…… / Time + Subj.……",
      summary: "Time words can go after the subject or at the start of the sentence.",
      detail: "Both 我明天有空 and 明天我有空 are correct. The time phrase normally comes before the verb, not after the object.",
      tip: "Time before verb; subject/time order is flexible.",
      examples: [
        { zh: "我明天有空。", pinyin: "Wǒ míngtiān yǒu kòng.", en: "I'm free tomorrow." },
        { zh: "明天我有空。", pinyin: "Míngtiān wǒ yǒu kòng.", en: "Tomorrow I'm free." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG5RWKO"
    },
    {
      id: "a2-sequential-numbers",
      title: "Approximating with sequential numbers",
      category: "numbers",
      level: "A2",
      pattern: "Number 1 + Number 2",
      summary: "Two consecutive numbers can mean “about” that number.",
      detail: "Put two nearby numbers together before a measure word: 一两天 (one or two days), 三四个 (three or four). It gives an approximate quantity.",
      tip: "Two nearby numbers = about that many.",
      examples: [
        { zh: "三四个人。", pinyin: "Sān sì gè rén.", en: "Three or four people." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGOUD8U"
    },
    {
      id: "a2-big-numbers",
      title: "Big numbers in Chinese",
      category: "numbers",
      level: "A2",
      pattern: "Number + 万 / 亿",
      summary: "万 is ten thousand; 亿 is one hundred million.",
      detail: "Chinese groups large numbers by four digits. 10,000 is 一万, 100,000 is 十万, and 1,000,000 is 一百万.",
      tip: "Learn 万 as its own unit, not as “ten thousand.”",
      examples: [
        { zh: "五万块。", pinyin: "Wǔ wàn kuài.", en: "Fifty thousand yuan." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGIM3AX"
    },
    {
      id: "a2-time-advanced",
      title: "Structure of times (advanced)",
      category: "numbers",
      level: "A2",
      pattern: "Number 1 + 点(钟) + Number 2 + 分",
      summary: "Tell minutes with 点 + number + 分.",
      detail: "After the hour, add the minute number and 分. 半 means 30 minutes, and 一刻 can mean 15 minutes in some expressions.",
      tip: "Hour 点 + minutes 分.",
      examples: [
        { zh: "现在十一点十八分。", pinyin: "Xiànzài shíyī diǎn shíbā fēn.", en: "It's 11:18 now." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGDTO07"
    },
    {
      id: "a2-ji-several",
      title: "Using \"ji\" to mean \"several\"",
      category: "measure-words",
      level: "A2",
      pattern: "几 + Measure Word + Noun",
      summary: "几 + measure word means “several” or “a few.”",
      detail: "几 is used for an unspecified small number. In a question, 几 asks “how many?” and usually expects a number under ten.",
      tip: "几 + measure word = a few / how many.",
      examples: [
        { zh: "桌子上有几本书。", pinyin: "Zhuōzi shàng yǒu jǐ běn shū.", en: "There are a few books on the table." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGHC9CA"
    },
    {
      id: "a2-le-change",
      title: "Change of state with \"le\"",
      category: "particles",
      level: "A2",
      pattern: "……了",
      summary: "Sentence-final 了 marks a new situation or change.",
      detail: "This 了 is not past tense. It signals that something has changed or reached a new state: 我25岁了 (I've turned 25), 下雨了 (it's raining now).",
      tip: "了 at the end = a new situation.",
      examples: [
        { zh: "我25岁了。", pinyin: "Wǒ èrshíwǔ suì le.", en: "I'm 25 now." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGT185D"
    },
    {
      id: "a2-ba-concede",
      title: "Conceding with \"ba\"",
      category: "particles",
      level: "A2",
      pattern: "……吧",
      summary: "吧 can signal reluctant agreement or concession.",
      detail: "A short 好吧 or 那好吧 accepts a situation, often without much enthusiasm. Tone and context carry the concession.",
      tip: "好吧 = okay, I suppose.",
      examples: [
        { zh: "那好吧。", pinyin: "Nà hǎo ba.", en: "Well, okay then." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGJIP2E"
    },
    {
      id: "a2-le-already",
      title: "Expressing \"already\" with just \"le\"",
      category: "particles",
      level: "A2",
      pattern: "Subj. + Verb Phrase + 了",
      summary: "了 after a verb can show that an action is already done.",
      detail: "In context, 了 can mean “already” without 已经. The sentence often answers a question or corrects an assumption.",
      tip: "Verb + 了 can mean “did it already.”",
      examples: [
        { zh: "你应该问老师。我问了。", pinyin: "Nǐ yīnggāi wèn lǎoshī. Wǒ wèn le.", en: "You should ask the teacher. I did ask." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGM055L"
    },
    {
      id: "a2-le-completion",
      title: "Expressing completion with \"le\"",
      category: "particles",
      level: "A2",
      pattern: "Subj. + Verb + 了 + Obj.",
      summary: "Verb + 了 + object marks a completed action.",
      detail: "This 了 follows the verb and focuses on the action being completed. It is common with a specific quantity or result.",
      tip: "Verb + 了 + object = completed action.",
      examples: [
        { zh: "我吃了两个苹果。", pinyin: "Wǒ chī le liǎng gè píngguǒ.", en: "I ate two apples." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGAGDCQ"
    },
    {
      id: "a2-guo",
      title: "Expressing experiences with \"guo\"",
      category: "particles",
      level: "A2",
      pattern: "Verb + 过",
      summary: "Verb + 过 means “have experienced something before.”",
      detail: "过 follows the verb and shows that an experience happened at some indefinite time in the past. The experience matters, not when it happened.",
      tip: "Verb + 过 = have done it before.",
      examples: [
        { zh: "我去过中国。", pinyin: "Wǒ qù guo Zhōngguó.", en: "I have been to China." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGQGV3P"
    },
    {
      id: "a2-bu-le-anymore",
      title: "Expressing \"not anymore\" with \"le\"",
      category: "particles",
      level: "A2",
      pattern: "不 / 没(有) + Verb Phrase + 了",
      summary: "不/没 + verb + 了 means “not ... anymore.”",
      detail: "The final 了 marks a change from before. 不想吃了 means the desire has ended; 没...了 often describes a situation that no longer holds.",
      tip: "Negative + 了 = no longer.",
      examples: [
        { zh: "我不想吃了。", pinyin: "Wǒ bù xiǎng chī le.", en: "I don't want to eat anymore." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGFR96B"
    },
    {
      id: "a2-le-now",
      title: "Expressing \"now\" with \"le\"",
      category: "particles",
      level: "A2",
      pattern: "New Situation + 了",
      summary: "了 can announce that a new situation has arrived.",
      detail: "This use is common in exclamations and announcements: 吃饭了 (time to eat), 下课了 (class is over). It often implies “now.”",
      tip: "New situation + 了 = now it's ...",
      examples: [
        { zh: "吃饭了！", pinyin: "Chīfàn le!", en: "Time to eat!" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGE5Q4J"
    },
    {
      id: "a2-ne-modal",
      title: "Modal particle \"ne\"",
      category: "particles",
      level: "A2",
      pattern: "……呢?",
      summary: "呢 can soften a statement or add “still” / “and what about ...?”",
      detail: "At the end of a statement, 呢 often adds a conversational tone or emphasizes that a situation continues. In questions, it can mean “and ...?”",
      tip: "呢 often makes a sentence sound more conversational.",
      examples: [
        { zh: "我不要回家。还早呢！", pinyin: "Wǒ búyào huí jiā. Hái zǎo ne!", en: "I don't want to go home. It's still early!" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGC8CB8"
    },
    {
      id: "a2-a-interjection",
      title: "Sentence-final interjection \"a\"",
      category: "particles",
      level: "A2",
      pattern: "……啊",
      summary: "啊 at the end of a sentence adds emotion or softens the tone.",
      detail: "啊 can express surprise, agreement, or friendliness. The exact feeling depends on tone and context.",
      tip: "啊 adds tone; it does not have one fixed meaning.",
      examples: [
        { zh: "是啊！", pinyin: "Shì a!", en: "Yeah!" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGW66JM"
    },
    {
      id: "a2-ba-soften",
      title: "Softening speech with \"ba\"",
      category: "particles",
      level: "A2",
      pattern: "……吧",
      summary: "吧 can soften a statement into a suggestion or tentative judgment.",
      detail: "Adding 吧 makes a claim less direct and more open to response. It is common when giving advice or disagreeing gently.",
      tip: "吧 softens; it doesn't always mean “let's.”",
      examples: [
        { zh: "这样不太好吧。", pinyin: "Zhèyàng bú tài hǎo ba.", en: "This isn't such a good idea, is it?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGDHC1H"
    },
    {
      id: "a2-de-structural",
      title: "Structural particle \"de\"",
      category: "particles",
      level: "A2",
      pattern: "的 / 得 / 地",
      summary: "的, 得, and 地 have different structural jobs.",
      detail: "的 links a description to a noun; 得 follows a verb to introduce a complement; 地 links an adverbial description to a verb. They sound the same but are written differently.",
      tip: "的 + noun, verb + 得 + complement, adverb + 地 + verb.",
      examples: [
        { zh: "红色的车。", pinyin: "Hóngsè de chē.", en: "A red car." },
        { zh: "他跑得很快。", pinyin: "Tā pǎo de hěn kuài.", en: "He runs very fast." },
        { zh: "她慢慢地走。", pinyin: "Tā mànmàn de zǒu.", en: "She walks slowly." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG5MOMM"
    },
    {
      id: "a2-guo-le",
      title: "Using \"guo\" with \"le\"",
      category: "particles",
      level: "A2",
      pattern: "Verb + 过 + 了",
      summary: "Verb + 过 + 了 combines experience with a current result.",
      detail: "过 marks an experience; 了 adds that the experience is relevant now or completed. The combination often means “have already done.”",
      tip: "过 = have experienced; 了 = now relevant.",
      examples: [
        { zh: "她吃过了。", pinyin: "Tā chī guo le.", en: "She has eaten already." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGP69JD"
    },
    {
      id: "a2-bi",
      title: "Basic comparisons with \"bi\"",
      category: "prepositions",
      level: "A2",
      pattern: "Noun 1 + 比 + Noun 2 + Adj.",
      summary: "A 比 B + adjective means A is more ... than B.",
      detail: "比 introduces the standard of comparison. Do not add 很 before the adjective in a 比 sentence; 比 already carries the comparison.",
      tip: "A 比 B + adjective.",
      examples: [
        { zh: "你比我胖。", pinyin: "Nǐ bǐ wǒ pàng.", en: "You are fatter than me." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG8SI2K"
    },
    {
      id: "a2-cong-dao",
      title: "Expressing \"from… to…\" with \"cong… dao…\"",
      category: "prepositions",
      level: "A2",
      pattern: "从……到……",
      summary: "从 A 到 B means “from A to B” for time or place.",
      detail: "Use 从 before the starting point and 到 before the ending point. The phrase can come before or after the subject.",
      tip: "从 start 到 end.",
      examples: [
        { zh: "从一号到五号，我在上海。", pinyin: "Cóng yī hào dào wǔ hào, wǒ zài Shànghǎi.", en: "From the 1st to the 5th, I'll be in Shanghai." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGGGIW8"
    },
    {
      id: "a2-meiyou-comparison",
      title: "Basic comparisons with \"meiyou\"",
      category: "verbs",
      level: "A2",
      pattern: "Noun 1 + 没(有) + Noun 2 + Adj.",
      summary: "A 没有 B + adjective means A is not as ... as B.",
      detail: "This is the negative comparison pattern. 没有 is followed by the standard and the adjective. Don't use 不比 for a simple “not as.”",
      tip: "A 没有 B + adjective = A isn't as ... as B.",
      examples: [
        { zh: "你没有我胖。", pinyin: "Nǐ méiyǒu wǒ pàng.", en: "You are not as fat as me." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGEAH5M"
    },
    {
      id: "a2-lai-qu",
      title: "Directional verbs \"lai\" and \"qu\"",
      category: "verbs",
      level: "A2",
      pattern: "来 / 去 + Place",
      summary: "来 and 去 describe movement toward or away from the speaker.",
      detail: "来 means “come” and 去 means “go.” With a place, they show direction relative to where the speaker is. The example also uses duration + 了.",
      tip: "来 = come here; 去 = go there.",
      examples: [
        { zh: "我来上海一年了。", pinyin: "Wǒ lái Shànghǎi yì nián le.", en: "I've been in Shanghai for a year." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGRBKSL"
    },
    {
      id: "a2-qing",
      title: "Polite requests with \"qing\"",
      category: "verbs",
      level: "A2",
      pattern: "请 + Verb",
      summary: "请 + verb makes a polite request.",
      detail: "Put 请 before the verb, not at the end. It can also mean “please” in invitations and instructions.",
      tip: "请 + verb = please do.",
      examples: [
        { zh: "请坐。", pinyin: "Qǐng zuò.", en: "Please sit." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG25C48"
    },
    {
      id: "a2-yao-meanings",
      title: "Auxiliary verb \"yao\" and its multiple meanings",
      category: "auxiliary",
      level: "A2",
      pattern: "要 + Noun / 要 + Verb",
      summary: "要 can mean “want,” “need,” or “be going to.”",
      detail: "With a noun, 要 usually means “want.” With a verb, it can mean “want to” or “be going to,” depending on context. Tone and time words help decide.",
      tip: "要 + noun = want; 要 + verb = want to / going to.",
      examples: [
        { zh: "我要一杯水。", pinyin: "Wǒ yào yì bēi shuǐ.", en: "I want a glass of water." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG95AL1"
    },
    {
      id: "a2-yinggai",
      title: "Expressing \"should\" with \"yinggai\"",
      category: "auxiliary",
      level: "A2",
      pattern: "应该 / 该 + Verb",
      summary: "应该 + verb means “should.”",
      detail: "应该 gives advice or states an obligation. 该 is shorter and more colloquial. Negate with 不应该.",
      tip: "应该 + verb = should.",
      examples: [
        { zh: "你应该早点休息。", pinyin: "Nǐ yīnggāi zǎodiǎn xiūxi.", en: "You should rest earlier." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGV01X9"
    },
    {
      id: "a2-hui-will",
      title: "Expressing \"will\" with \"hui\"",
      category: "auxiliary",
      level: "A2",
      pattern: "会 + Verb",
      summary: "会 + verb can express a future possibility or prediction.",
      detail: "This is different from 会 as a learned skill. With a time word like 明天, 会 often means “will.”",
      tip: "会 + verb + future time = will.",
      examples: [
        { zh: "明天你会来吗？", pinyin: "Míngtiān nǐ huì lái ma?", en: "Will you come tomorrow?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGW9737"
    },
    {
      id: "a2-xiang",
      title: "Expressing \"would like to\" with \"xiang\"",
      category: "auxiliary",
      level: "A2",
      pattern: "想 + Verb",
      summary: "想 + verb means “want to” or “would like to.”",
      detail: "想 is softer than 要 and focuses on desire. For a noun, use 想要 or 要.",
      tip: "想 + verb = would like to.",
      examples: [
        { zh: "我想去中国。", pinyin: "Wǒ xiǎng qù Zhōngguó.", en: "I would like to go to China." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGT97VF"
    },
    {
      id: "a2-actions-row",
      title: "Actions in a row",
      category: "phrases",
      level: "A2",
      pattern: "(Verb Phrase 1) + (Verb Phrase 2)",
      summary: "Two verb phrases can appear in sequence to show purpose or order.",
      detail: "Chinese often strings actions together without “to”: 去咖啡店喝咖啡. The first action leads to the second.",
      tip: "Action 1 + action 2, no connector needed.",
      examples: [
        { zh: "我们去咖啡店喝咖啡吧。", pinyin: "Wǒmen qù kāfēidiàn hē kāfēi ba.", en: "Let's go to the café to drink coffee." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGPRGAX"
    },
    {
      id: "a2-nan",
      title: "Expressing \"difficult\" with \"nan\"",
      category: "phrases",
      level: "A2",
      pattern: "难 + Verb",
      summary: "难 + verb means “difficult to ....”",
      detail: "难 comes before the verb. Its opposite is 好 + verb, meaning “easy to ....”",
      tip: "难 + verb = hard to do.",
      examples: [
        { zh: "这个字很难写。", pinyin: "Zhège zì hěn nán xiě.", en: "This character is hard to write." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG35T4H"
    },
    {
      id: "a2-le-duration",
      title: "Expressing duration with \"le\"",
      category: "phrases",
      level: "A2",
      pattern: "Verb + 了 + Duration",
      summary: "Verb + 了 + duration says how long an action lasted.",
      detail: "The duration comes after the verb and 了. This pattern often describes a completed period. For ongoing duration, use double 了.",
      tip: "Verb + 了 + duration.",
      examples: [
        { zh: "他在北京住了两年。", pinyin: "Tā zài Běijīng zhù le liǎng nián.", en: "He lived in Beijing for two years." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGJ36VN"
    },
    {
      id: "a2-conglai",
      title: "Expressing \"never\" with \"conglai\"",
      category: "phrases",
      level: "A2",
      pattern: "从来 + 不 / 没(有) + Verb",
      summary: "从来 + negative means “never” or “not ever.”",
      detail: "Use 从来不 for present habits and 从来没有 + verb + 过 for past experience. 从来 rarely appears without a negative.",
      tip: "从来 + 不/没有 = never.",
      examples: [
        { zh: "她从来不喝酒。", pinyin: "Tā cónglái bù hē jiǔ.", en: "She never drinks alcohol." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG8NM5E"
    },
    {
      id: "a2-le-double-duration",
      title: "Expressing ongoing duration with double \"le\"",
      category: "phrases",
      level: "A2",
      pattern: "Verb + 了 + Duration + 了",
      summary: "Double 了 shows an action has continued up to now.",
      detail: "The first 了 follows the verb; the second closes the sentence. The duration is still ongoing at the time of speaking.",
      tip: "Verb + 了 + duration + 了 = still ongoing.",
      examples: [
        { zh: "他在北京住了两年了。", pinyin: "Tā zài Běijīng zhù le liǎng nián le.", en: "He has been living in Beijing for two years." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG69RR8"
    },
    {
      id: "a2-yiqi",
      title: "Expressing \"together\" with \"yiqi\"",
      category: "phrases",
      level: "A2",
      pattern: "一起 + Verb",
      summary: "一起 + verb means “do something together.”",
      detail: "一起 comes before the verb. It can appear with 跟 + person for “together with someone.”",
      tip: "一起 before the verb.",
      examples: [
        { zh: "我们一起去吧！", pinyin: "Wǒmen yìqǐ qù ba!", en: "Let's go together!" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGNVE15"
    },
    {
      id: "a2-mei-banfa",
      title: "Inability with \"mei banfa\"",
      category: "phrases",
      level: "A2",
      pattern: "没办法 + Verb",
      summary: "没办法 + verb means “there's no way to ...” or “can't ....”",
      detail: "It expresses inability because of circumstances, not lack of skill. 没办法 can also stand alone as “nothing can be done.”",
      tip: "没办法 + verb = can't, no way.",
      examples: [
        { zh: "我没办法帮你。", pinyin: "Wǒ méi bànfǎ bāng nǐ.", en: "I can't help you." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGI2KHC"
    },
    {
      id: "a2-zai-before-verb",
      title: "Indicating location with \"zai\" before verbs",
      category: "phrases",
      level: "A2",
      pattern: "Subj. + 在 + Place + Verb",
      summary: "在 + place before a verb says where an action happens.",
      detail: "The place phrase comes before the verb, not after the object. 在 can also mark location for ongoing actions.",
      tip: "Subject + 在 + place + verb.",
      examples: [
        { zh: "我在上海工作。", pinyin: "Wǒ zài Shànghǎi gōngzuò.", en: "I work in Shanghai." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGX0Z0N"
    },
    {
      id: "a2-verb-reduplication",
      title: "Reduplication of verbs",
      category: "phrases",
      level: "A2",
      pattern: "Verb + Verb",
      summary: "Repeating a verb softens it to “do it a little” or “take a look.”",
      detail: "The second verb is often neutral tone. For two-syllable verbs, the pattern is usually ABAB: 休息休息.",
      tip: "Verb + verb = do it briefly.",
      examples: [
        { zh: "你看看。", pinyin: "Nǐ kànkan.", en: "Take a look." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGYC77J"
    },
    {
      id: "a2-zai-after-verb",
      title: "Special cases of \"zai\" following verbs",
      category: "phrases",
      level: "A2",
      pattern: "Verb + 在 + Place",
      summary: "Some verbs take 在 + place after them to show where the result is.",
      detail: "With verbs like 住, 放, and 坐, the location follows the verb. This is different from 在 before the verb, which describes where an action happens.",
      tip: "住/放/坐 + 在 + place.",
      examples: [
        { zh: "我住在北京。", pinyin: "Wǒ zhù zài Běijīng.", en: "I live in Beijing." },
        { zh: "手机放在桌子上。", pinyin: "Shǒujī fàng zài zhuōzi shàng.", en: "The phone is on the table." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG90DXK"
    },
    {
      id: "a2-hen-verbs",
      title: "Special verbs with \"hen\"",
      category: "phrases",
      level: "A2",
      pattern: "很 + Verb",
      summary: "Some verbs that describe feelings or attitudes can take 很.",
      detail: "Verbs like 喜欢, 想, 了解, and 感谢 can be modified by 很. Here 很 adds intensity, unlike its neutral use with adjectives.",
      tip: "很 + feeling verb = really.",
      examples: [
        { zh: "我很喜欢他。", pinyin: "Wǒ hěn xǐhuan tā.", en: "I really like him." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGID0E8"
    },
    {
      id: "a2-dao-place",
      title: "Using \"dao\" to mean \"to go to\"",
      category: "phrases",
      level: "A2",
      pattern: "到 + Place",
      summary: "到 + place means “arrive at” or “go to” a place.",
      detail: "到 focuses on reaching a destination. It often pairs with 了 for completed arrival: 我到了上海.",
      tip: "到 + place = reach a place.",
      examples: [
        { zh: "我明天到上海。", pinyin: "Wǒ míngtiān dào Shànghǎi.", en: "I arrive in Shanghai tomorrow." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGLFX54"
    },
    {
      id: "a2-hao-easy",
      title: "Using \"hao\" to mean \"easy\"",
      category: "phrases",
      level: "A2",
      pattern: "好 + Verb",
      summary: "好 + verb means “easy to ....”",
      detail: "This is the opposite of 难 + verb. 好写 means “easy to write”; 好买 means “easy to buy.”",
      tip: "好 + verb = easy to do.",
      examples: [
        { zh: "这个字好写。", pinyin: "Zhège zì hǎo xiě.", en: "This character is easy to write." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGJQU93"
    },
    {
      id: "a2-yixia",
      title: "Verbing briefly with \"yixia\"",
      category: "phrases",
      level: "A2",
      pattern: "Verb + 一下",
      summary: "Verb + 一下 softens a request or means “do it briefly.”",
      detail: "一下 literally means “one time” but often just makes an instruction more casual and polite.",
      tip: "Verb + 一下 = have a quick ....",
      examples: [
        { zh: "你看一下。", pinyin: "Nǐ kàn yíxià.", en: "Take a look." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGWCESP"
    },
    {
      id: "a2-double-objects",
      title: "Verbs that take double objects",
      category: "phrases",
      level: "A2",
      pattern: "Subj. + Verb + Indirect Obj. + Direct Obj.",
      summary: "Some verbs take two objects: a person and a thing.",
      detail: "Common verbs include 给, 问, 告诉, 教, and 送. The person comes first, then the thing.",
      tip: "Verb + person + thing.",
      examples: [
        { zh: "我问了老师一个问题。", pinyin: "Wǒ wèn le lǎoshī yí gè wèntí.", en: "I asked the teacher a question." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGI2OAG"
    },
    {
      id: "a2-bu-dong",
      title: "Potential complement \"-bu dong\" for not understanding",
      category: "complements",
      level: "A2",
      pattern: "Verb + 不懂",
      summary: "Verb + 不懂 means “can't understand” the result of the action.",
      detail: "This is a potential complement. 听得懂 means “can understand”; 听不懂 means “can't understand.” It is common with 听, 看, and 读.",
      tip: "Verb + 不懂 = can't understand it.",
      examples: [
        { zh: "我听不懂。", pinyin: "Wǒ tīng bu dǒng.", en: "I don't understand what I hear." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG8R2V8"
    },
    {
      id: "a2-dao-jian-result",
      title: "Result complements \"-dao\" and \"-jian\"",
      category: "complements",
      level: "A2",
      pattern: "Verb + 到 / 见",
      summary: "到 and 见 after a verb show that the result was achieved.",
      detail: "听到 means “hear successfully”; 看见 means “see.” 到 is broader, while 见 is mostly used with 看 and 听.",
      tip: "Verb + 到/见 = successfully perceived.",
      examples: [
        { zh: "听到了吗？", pinyin: "Tīng dào le ma?", en: "Did you hear it?" },
        { zh: "我看见他了。", pinyin: "Wǒ kànjiàn tā le.", en: "I saw him." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGWNGEP"
    },
    {
      id: "a2-wan-finish",
      title: "Result complement \"-wan\" for finishing",
      category: "complements",
      level: "A2",
      pattern: "Verb + 完 (+ 了)",
      summary: "完 after a verb means “finish doing.”",
      detail: "Verb + 完 shows the action is complete. Add 了 for a completed event: 吃完了.",
      tip: "Verb + 完 = finish doing it.",
      examples: [
        { zh: "我说完了。", pinyin: "Wǒ shuō wán le.", en: "I finished speaking." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGNQUC1"
    },
    {
      id: "a2-yixie",
      title: "Expressing \"some\" with \"yixie\"",
      category: "noun-phrases",
      level: "A2",
      pattern: "一些 + Noun",
      summary: "一些 + noun means “some” or “a few.”",
      detail: "一些 is used with uncountable nouns and plural countable nouns. It is more written and formal than 点儿.",
      tip: "一些 + noun = some.",
      examples: [
        { zh: "这里有一些咖啡。", pinyin: "Zhèlǐ yǒu yìxiē kāfēi.", en: "There is some coffee here." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGWVZ0T"
    },
    {
      id: "a2-youde",
      title: "Using \"youde\" to mean \"some\"",
      category: "noun-phrases",
      level: "A2",
      pattern: "有的 + Noun",
      summary: "有的 + noun means “some” when referring to a group.",
      detail: "It often appears in pairs to contrast different members of a group. The noun can be omitted if it is clear from context.",
      tip: "有的……有的…… = some ... others ...",
      examples: [
        { zh: "派对上，有的人在喝酒，有的人在跳舞。", pinyin: "Pàiduì shàng, yǒude rén zài hējiǔ, yǒude rén zài tiàowǔ.", en: "At the party, some people were drinking, and some were dancing." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG4NDHB"
    },
    {
      id: "a2-money",
      title: "Counting money",
      category: "measure-words",
      level: "A2",
      pattern: "Number + 块 / 元 (+ Number + 毛 / 角) (+ 钱)",
      summary: "块/元 are yuan; 毛/角 are ten-cent units.",
      detail: "In speech, 块 and 毛 are common; 元 and 角 are more formal. 三块五 means 3.5 yuan in casual speech.",
      tip: "块 = yuan; 毛 = 0.1 yuan.",
      examples: [
        { zh: "给你五块三毛。", pinyin: "Gěi nǐ wǔ kuài sān máo.", en: "Here's five yuan and thirty cents." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGL6JOE"
    },
    {
      id: "a2-mei-every",
      title: "Expressing \"every\" with \"mei\"",
      category: "measure-words",
      level: "A2",
      pattern: "每 + Measure Word (+ Noun)",
      summary: "每 + measure word means “every.”",
      detail: "Every noun needs a measure word: 每天 (every day), 每个星期 (every week). 每 can also be followed by a time noun without a measure word.",
      tip: "每 + measure word + noun.",
      examples: [
        { zh: "他每天跑步。", pinyin: "Tā měi tiān pǎobù.", en: "He runs every day." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGB6L4M"
    },
    {
      id: "a2-ban-half",
      title: "Expressing \"half\" with \"ban\"",
      category: "measure-words",
      level: "A2",
      pattern: "Number + Measure Word + 半 + Noun",
      summary: "半 means “half” and follows the measure word.",
      detail: "The order is number + measure word + 半: 一个半, 三点半. For “half a ...,” use 半 + measure word: 半个.",
      tip: "Measure word + 半 = half a unit.",
      examples: [
        { zh: "三个半小时。", pinyin: "Sān gè bàn xiǎoshí.", en: "Three and a half hours." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGAC1P9"
    },
    {
      id: "a2-measure-words",
      title: "Measure words for counting",
      category: "measure-words",
      level: "A2",
      pattern: "Number + Measure Word + Noun",
      summary: "A measure word is required between a number and a noun.",
      detail: "Different nouns take different measure words: 个 for people, 杯 for drinks, 本 for books. The measure word describes the unit being counted.",
      tip: "Number + measure word + noun.",
      examples: [
        { zh: "一个人，一杯水。", pinyin: "Yí gè rén, yì bēi shuǐ.", en: "One person, one glass of water." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG64BTE"
    },
    {
      id: "a2-ji-quantity",
      title: "Measure words in quantity questions",
      category: "measure-words",
      level: "A2",
      pattern: "几 + Measure Word (+ Noun)?",
      summary: "几 + measure word asks “how many?” for a small number.",
      detail: "几 needs a measure word. For larger or unknown quantities, 多少 can be used without a measure word.",
      tip: "几 + measure word = how many?",
      examples: [
        { zh: "几个人？", pinyin: "Jǐ gè rén?", en: "How many people?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGL9KQM"
    },
    {
      id: "a2-this-that-measure",
      title: "Measure words with \"this\" and \"that\"",
      category: "measure-words",
      level: "A2",
      pattern: "这 / 那 + Measure Word (+ Noun)",
      summary: "这/那 + measure word points to “this/that” specific thing.",
      detail: "A measure word is needed between 这/那 and the noun. 这个 and 那个 are the most common combinations.",
      tip: "这/那 + measure word + noun.",
      examples: [
        { zh: "那个人。", pinyin: "Nàge rén.", en: "That person." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGZC42B"
    },
    {
      id: "a2-di-ordinal",
      title: "Ordinal numbers with \"di\"",
      category: "measure-words",
      level: "A2",
      pattern: "第 + Number (+ Measure Word)",
      summary: "第 + number makes an ordinal: first, second, third.",
      detail: "Use 第 before the number, and add a measure word before the noun when needed. 第一 means “first.”",
      tip: "第 + number = ordinal.",
      examples: [
        { zh: "你是我的第一个朋友。", pinyin: "Nǐ shì wǒ de dì yī gè péngyou.", en: "You are my first friend." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGK904U"
    },
    {
      id: "a2-zenmeyang",
      title: "Asking how something is with \"zenmeyang\"",
      category: "questions",
      level: "A2",
      pattern: "……怎么样？",
      summary: "……怎么样？ asks “how is it?” or “what do you think?”",
      detail: "Use 怎么样 after a subject or situation to ask for an evaluation. It can also ask for an opinion about a proposal.",
      tip: "怎么样 = how about / how is it?",
      examples: [
        { zh: "你最近怎么样？", pinyin: "Nǐ zuìjìn zěnmeyàng?", en: "How have you been lately?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGC701A"
    },
    {
      id: "a2-zenme-why",
      title: "Asking why with \"zenme\"",
      category: "questions",
      level: "A2",
      pattern: "怎么……？",
      summary: "怎么 + verb can ask “why?” with surprise.",
      detail: "怎么 before a verb often seeks an explanation and can sound surprised. For a neutral “why,” 为什么 is more direct.",
      tip: "怎么 + verb = how come?",
      examples: [
        { zh: "你怎么没来？", pinyin: "Nǐ zěnme méi lái?", en: "Why didn't you come?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGD7NS3"
    },
    {
      id: "a2-le-ma",
      title: "Questions with \"le ma\"",
      category: "questions",
      level: "A2",
      pattern: "Verb + 了 + 吗？",
      summary: "Verb + 了 + 吗 asks whether an action is completed.",
      detail: "This combines the completed-action 了 with the yes/no question 吗. It often asks “have you ... yet?”",
      tip: "Verb + 了 + 吗 = have you ...?",
      examples: [
        { zh: "你吃饭了吗？", pinyin: "Nǐ chīfàn le ma?", en: "Have you eaten?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGYKDNF"
    },
    {
      id: "a2-yinwei-suoyi",
      title: "Cause and effect with \"yinwei\" and \"suoyi\"",
      category: "sentence-patterns",
      level: "A2",
      pattern: "因为…… 所以……",
      summary: "因为……所以…… means “because ... therefore ....”",
      detail: "因为 introduces the cause, and 所以 introduces the result. In spoken Chinese, one half is sometimes omitted.",
      tip: "Because 因为, so 所以.",
      examples: [
        { zh: "因为下雨，所以我们没去。", pinyin: "Yīnwèi xià yǔ, suǒyǐ wǒmen méi qù.", en: "Because it rained, we didn't go." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGTDUJO"
    },
    {
      id: "a2-kuai-le",
      title: "Expressing \"about to happen\" with \"le\"",
      category: "sentence-patterns",
      level: "A2",
      pattern: "快 + Verb / Adj. + 了",
      summary: "快 + verb/adjective + 了 means something is about to happen.",
      detail: "快 indicates the approach; 了 marks the imminent change. 要 can replace 快: 要下雨了.",
      tip: "快 + verb + 了 = about to.",
      examples: [
        { zh: "快下雨了。", pinyin: "Kuài xià yǔ le.", en: "It's about to rain." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGNGEU8"
    },
    {
      id: "a2-shenme-dou",
      title: "Expressing \"everything\" with \"shenme dou\"",
      category: "sentence-patterns",
      level: "A2",
      pattern: "什么 + 都 / 也……",
      summary: "什么 + 都/也 + verb means “everything” or “anything.”",
      detail: "When 什么 is followed by 都 or 也, it becomes “everything/anything” rather than a question word. The verb follows.",
      tip: "什么 + 都 + verb = everything.",
      examples: [
        { zh: "爸爸什么都知道。", pinyin: "Bàba shénme dōu zhīdào.", en: "Dad knows everything." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGAQV6C"
    },
    {
      id: "a2-zai-position",
      title: "Expressing location with \"zai... shang / xia / li\"",
      category: "sentence-patterns",
      level: "A2",
      pattern: "在 + Place + 上 / 下 / 里 / 旁边",
      summary: "在 + place + 上/下/里/旁边 says exactly where something is.",
      detail: "The position word follows the place noun. Common ones are 上 (on), 下 (under), 里 (inside), and 旁边 (beside).",
      tip: "在 + place + position word.",
      examples: [
        { zh: "你的手机在桌子上。", pinyin: "Nǐ de shǒujī zài zhuōzi shàng.", en: "Your phone is on the table." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGFBWZL"
    },
    {
      id: "a2-bie-le",
      title: "Expressing \"stop doing\" with \"bie… le\"",
      category: "sentence-patterns",
      level: "A2",
      pattern: "别 + Verb + 了",
      summary: "别 + verb + 了 means “stop doing ....”",
      detail: "The final 了 marks a change or urges someone to stop an ongoing action. Compare 别哭 (don't cry) with 别哭了 (stop crying).",
      tip: "别 + verb + 了 = stop doing it.",
      examples: [
        { zh: "别哭了。", pinyin: "Bié kū le.", en: "Stop crying." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGZ8OIF"
    },
    {
      id: "a2-bu-vs-mei",
      title: "Comparing \"bu\" and \"mei\"",
      category: "comparison",
      level: "A2",
      pattern: "不 vs 没",
      summary: "不 negates present/future or general states; 没 negates past actions and 有.",
      detail: "不 is for habits, intentions, and adjectives. 没(有) is for completed actions that didn't happen and for possession with 有.",
      tip: "不 = don't/won't; 没 = didn't/haven't.",
      examples: [
        { zh: "我今天晚上不吃饭。", pinyin: "Wǒ jīntiān wǎnshang bù chīfàn.", en: "I'm not eating dinner tonight." },
        { zh: "昨天中午我没吃饭。", pinyin: "Zuótiān zhōngwǔ wǒ méi chīfàn.", en: "I didn't eat lunch yesterday." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGRJ1BI"
    },
    {
      id: "a2-yao-vs-xiang",
      title: "Comparing \"yao\" and \"xiang\"",
      category: "comparison",
      level: "A2",
      pattern: "要 vs 想",
      summary: "要 is direct “want”; 想 is softer and can also mean “miss.”",
      detail: "要 + noun often means “want to have”; 想 + verb means “would like to.” 想 + person means “miss someone.” Tone matters.",
      tip: "要 = want directly; 想 = would like / miss.",
      examples: [
        { zh: "我要一杯水。", pinyin: "Wǒ yào yì bēi shuǐ.", en: "I want a glass of water." },
        { zh: "我想你。", pinyin: "Wǒ xiǎng nǐ.", en: "I miss you." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGD88UO"
    }
  ]
};
