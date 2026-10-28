/*
 * A1 grammar data for Grammar Lab.
 * Grammar point titles, patterns, and example sentences are adapted from the
 * Chinese Grammar Wiki A1 list by AllSet Learning, used with attribution under
 * its Creative Commons license. This project is not affiliated with AllSet Learning.
 */
window.GRAMMAR_DATA = {
  source: {
    name: "Chinese Grammar Wiki",
    level: "A1",
    url: "https://resources.allsetlearning.com/chinese/grammar/A1_grammar_points",
    licenseUrl: "https://resources.allsetlearning.com/chinese/grammar/Chinese_Grammar_Wiki:Copyrights",
    note: "Grammar point titles, patterns, and examples are adapted from the Chinese Grammar Wiki A1 list."
  },

  categories: [
    {
      id: "adjectives",
      name: "Adjectives",
      zh: "形容词",
      description: "Describe people, things, and states."
    },
    {
      id: "adverbs",
      name: "Adverbs",
      zh: "副词",
      description: "Small words that change how a verb or adjective behaves."
    },
    {
      id: "adverbs-adjectives",
      name: "Adverbs with adjectives",
      zh: "副词与形容词",
      description: "Adjust the strength or comparison of adjectives."
    },
    {
      id: "conjunctions",
      name: "Conjunctions",
      zh: "连词",
      description: "Join words and offer alternatives."
    },
    {
      id: "nouns",
      name: "Nouns",
      zh: "名词",
      description: "Time words and other useful nouns."
    },
    {
      id: "numbers",
      name: "Numbers & time",
      zh: "数字与时间",
      description: "Count, tell the time, and talk about dates."
    },
    {
      id: "measure-words",
      name: "Numbers & measure words",
      zh: "数字与量词",
      description: "Count nouns, money, and quantities."
    },
    {
      id: "particles",
      name: "Particles",
      zh: "助词",
      description: "Tiny endings that carry a lot of meaning."
    },
    {
      id: "auxiliary-words",
      name: "Auxiliary words",
      zh: "辅助词",
      description: "Set phrases and endings that add nuance."
    },
    {
      id: "prepositions",
      name: "Prepositions",
      zh: "介词",
      description: "Show comparison, direction, and relationships."
    },
    {
      id: "verbs",
      name: "Verbs",
      zh: "动词",
      description: "Everyday actions, location, and possession."
    },
    {
      id: "auxiliary",
      name: "Auxiliary verbs",
      zh: "能愿动词",
      description: "Can, will, want, and may."
    },
    {
      id: "phrases",
      name: "Verb phrases",
      zh: "动词短语",
      description: "Useful action patterns for daily conversation."
    },
    {
      id: "complements",
      name: "Complements",
      zh: "补语",
      description: "Extra verb parts that show result or ability."
    },
    {
      id: "noun-phrases",
      name: "Noun phrases",
      zh: "名词短语",
      description: "Build phrases that behave like nouns."
    },
    {
      id: "basics",
      name: "Sentence basics",
      zh: "句子基础",
      description: "The building blocks of a Chinese sentence."
    },
    {
      id: "questions",
      name: "Question forms",
      zh: "疑问句",
      description: "Ask, confirm, and invite an answer."
    },
    {
      id: "sentence-patterns",
      name: "Sentence patterns",
      zh: "句型",
      description: "Common ways to connect ideas and situations."
    },
    {
      id: "comparison",
      name: "Comparisons",
      zh: "比较",
      description: "Choose the right word for the right job."
    }
  ],

  points: [
    {
      id: "mei-you",
      title: "Negation of \"you\" with \"mei\"",
      category: "adverbs",
      pattern: "没 + 有",
      summary: "Use 没有 to negate 有 — never 不有.",
      detail: "有 is the odd one out: its negative is 没有, not 不有. Use it for not having something, and for saying that something did not happen.",
      tip: "If you can say 有, the negative is 没有.",
      examples: [
        { zh: "我没有钱。", pinyin: "Wǒ méiyǒu qián.", en: "I don't have money." },
        { zh: "他没有车。", pinyin: "Tā méiyǒu chē.", en: "He doesn't have a car." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGPNV3Q",
      quiz: {
        kind: "Fill the gap",
        prompt: "我 ___ 钱。",
        hint: "I don't have money.",
        options: ["不有", "没有", "没", "有不"],
        answer: 1,
        explanation: "有 is negated with 没, not 不. The fixed negative form is 没有."
      }
    },
    {
      id: "bu-negation",
      title: "Standard negation with \"bu\"",
      category: "adverbs",
      pattern: "不 + Verb / Adj.",
      summary: "不 is the default negator for most verbs and adjectives.",
      detail: "Put 不 directly before the verb or adjective. It works for identities, likes, and present or future states. Use 没(有) instead for 有 and for completed actions.",
      tip: "不 + verb/adjective; 没有 for 有.",
      examples: [
        { zh: "他们不是坏孩子。", pinyin: "Tāmen bú shì huài háizi.", en: "They are not bad kids." },
        { zh: "我不喝咖啡。", pinyin: "Wǒ bù hē kāfēi.", en: "I don't drink coffee." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGIPYFV",
      quiz: {
        kind: "Choose the sentence",
        prompt: "Which sentence correctly says “They are not bad kids”?",
        options: [
          "他们没是坏孩子。",
          "他们不是坏孩子。",
          "他们不有是坏孩子。",
          "他们坏孩子不是。"
        ],
        answer: 1,
        explanation: "是 is negated with 不: 不是. The adverb goes before the verb, and the rest keeps normal sentence order."
      }
    },
    {
      id: "dou-all",
      title: "The \"all\" adverb \"dou\"",
      category: "adverbs",
      pattern: "都 + Verb / Adj.",
      summary: "都 means \"all\" and comes after the subject, before the verb.",
      detail: "If the subject is plural, 都 shows that every member is included. It often appears with 我们, 你们, 他们, or nouns joined by 和.",
      tip: "Subject + 都 + verb. Keep 都 after the subject.",
      examples: [
        { zh: "我们都住在上海。", pinyin: "Wǒmen dōu zhù zài Shànghǎi.", en: "We all live in Shanghai." },
        { zh: "他们都很忙。", pinyin: "Tāmen dōu hěn máng.", en: "They are all busy." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG9YK09",
      quiz: {
        kind: "Fill the gap",
        prompt: "我们 ___ 住在上海。",
        hint: "We all live in Shanghai.",
        options: ["都", "也", "才", "没"],
        answer: 0,
        explanation: "都 means “all” and sits after the subject 我们, before the verb 住."
      }
    },
    {
      id: "ye-also",
      title: "The \"also\" adverb \"ye\"",
      category: "adverbs",
      pattern: "也 + Verb / Adj.",
      summary: "也 means \"also\" and sits before the verb or adjective.",
      detail: "Use 也 to add another person or thing to a statement. Like 都, it goes after the subject and before the predicate.",
      tip: "Subject + 也 + verb/adjective.",
      examples: [
        { zh: "昨天很冷，今天也很冷。", pinyin: "Zuótiān hěn lěng, jīntiān yě hěn lěng.", en: "It was cold yesterday, and it's also cold today." },
        { zh: "我也喜欢茶。", pinyin: "Wǒ yě xǐhuan chá.", en: "I like tea too." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGG25MD",
      quiz: {
        kind: "Fill the gap",
        prompt: "昨天很冷，今天 ___ 很冷。",
        hint: "It was cold yesterday, and it's also cold today.",
        options: ["也", "都", "才", "没"],
        answer: 0,
        explanation: "也 adds “also” to the second statement and goes before 很冷."
      }
    },
    {
      id: "he-and",
      title: "Expressing \"and\" with \"he\"",
      category: "conjunctions",
      pattern: "Noun 1 + 和 + Noun 2",
      summary: "和 joins nouns, not verbs or whole clauses.",
      detail: "Use 和 between two nouns to say “and.” For choosing between options, use 还是. To connect whole sentences, use other connectors.",
      tip: "Noun 和 noun. Don't use 和 to mean “and then.”",
      examples: [
        { zh: "我和他都不去。", pinyin: "Wǒ hé tā dōu bú qù.", en: "Both he and I are not going." },
        { zh: "我有哥哥和妹妹。", pinyin: "Wǒ yǒu gēge hé mèimei.", en: "I have an older brother and a younger sister." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGP0KFF",
      quiz: {
        kind: "Fill the gap",
        prompt: "我 ___ 他都不去。",
        hint: "Both he and I are not going.",
        options: ["和", "还是", "也", "都"],
        answer: 0,
        explanation: "和 links the two nouns 我 and 他. 都 then covers both of them."
      }
    },
    {
      id: "haishi-choice",
      title: "Offering choices with \"haishi\"",
      category: "conjunctions",
      pattern: "A + 还是 + B?",
      summary: "还是 offers a choice in a question: “A or B?”",
      detail: "Use 还是 between two alternatives in a question. In a statement, “or” is usually 或者. Keeping the question and statement forms separate avoids a common mix-up.",
      tip: "Question choice = 还是; statement choice = 或者.",
      examples: [
        { zh: "你要喝茶还是咖啡？", pinyin: "Nǐ yào hē chá háishì kāfēi?", en: "Do you want tea or coffee?" },
        { zh: "我们坐地铁还是打车？", pinyin: "Wǒmen zuò dìtiě háishì dǎchē?", en: "Shall we take the subway or a taxi?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGA8NIB",
      quiz: {
        kind: "Fill the gap",
        prompt: "你要喝茶 ___ 咖啡？",
        hint: "Do you want tea or coffee?",
        options: ["还是", "和", "或者", "也"],
        answer: 0,
        explanation: "This is a question offering two choices, so use 还是. 或者 is for “or” in statements."
      }
    },
    {
      id: "sui-age",
      title: "Age with \"sui\"",
      category: "numbers",
      pattern: "Subj. + Number + 岁",
      summary: "State an age with a number plus 岁 — no 是 or 有 needed.",
      detail: "Put 岁 directly after the number: 我二十岁. To ask someone's age, use 你多大？ or, for children, 你几岁？",
      tip: "Number + 岁, with no measure word in between.",
      examples: [
        { zh: "我二十岁。", pinyin: "Wǒ èrshí suì.", en: "I'm 20 years old." },
        { zh: "你女儿几岁？", pinyin: "Nǐ nǚ'ér jǐ suì?", en: "How old is your daughter?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGQUKJF",
      quiz: {
        kind: "Fill the gap",
        prompt: "我二十 ___。",
        hint: "I am 20 years old.",
        options: ["岁", "个", "年", "点"],
        answer: 0,
        explanation: "岁 is the word for “years old.” It follows the number directly."
      }
    },
    {
      id: "ge-measure",
      title: "Measure word \"ge\"",
      category: "numbers",
      pattern: "Number + 个 + Noun",
      summary: "个 is the general measure word between a number and a noun.",
      detail: "Chinese uses measure words when counting nouns. 个 is the default and works for people and many everyday objects. 一 changes to yí before 个 in natural speech.",
      tip: "Number + 个 + noun: 一个人, 三个苹果.",
      examples: [
        { zh: "一个人。", pinyin: "Yí gè rén.", en: "One person." },
        { zh: "我买了三个苹果。", pinyin: "Wǒ mǎi le sān gè píngguǒ.", en: "I bought three apples." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGI0T9S",
      quiz: {
        kind: "Fill the gap",
        prompt: "一 ___ 人。",
        hint: "One person.",
        options: ["个", "岁", "本", "只"],
        answer: 0,
        explanation: "个 is the general measure word for 人: 一个人."
      }
    },
    {
      id: "dates",
      title: "Structure of dates",
      category: "numbers",
      pattern: "Number + 年 + Number + 月 + Number + 日",
      summary: "Chinese dates run from largest to smallest: year, month, day.",
      detail: "Each part follows a number with 年, 月, or 日/号. The date usually comes after 是. 号 is common in speech; 日 is more formal.",
      tip: "Year → month → day. Never day → month → year.",
      examples: [
        { zh: "今天是2025年10月1日。", pinyin: "Jīntiān shì èr líng èr wǔ nián shí yuè yī rì.", en: "Today is October 1, 2025." },
        { zh: "我的生日是五月八号。", pinyin: "Wǒ de shēngrì shì wǔ yuè bā hào.", en: "My birthday is May 8." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGT3KF6",
      quiz: {
        kind: "Fill the gap",
        prompt: "今天 ___ 2025年10月1日。",
        hint: "Today is October 1, 2025.",
        options: ["是", "在", "有", "去"],
        answer: 0,
        explanation: "A date is a noun phrase, so link it to 今天 with 是: 今天是……."
      }
    },
    {
      id: "weekdays",
      title: "Structure of days of the week",
      category: "numbers",
      pattern: "星期 + Number",
      summary: "Days of the week are 星期 plus a number from one to six.",
      detail: "星期一 is Monday, 星期二 Tuesday, and so on. Sunday is 星期天 or 星期日. Ask the day with 今天星期几？",
      tip: "星期 + number; Sunday is the exception.",
      examples: [
        { zh: "今天星期三。", pinyin: "Jīntiān xīngqīsān.", en: "Today is Wednesday." },
        { zh: "星期天你有空吗？", pinyin: "Xīngqītiān nǐ yǒu kòng ma?", en: "Are you free on Sunday?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGVH4Q5",
      quiz: {
        kind: "Fill the gap",
        prompt: "今天 ___。",
        hint: "Today is Wednesday.",
        options: ["星期三", "三星期", "星期三个", "三个星期"],
        answer: 0,
        explanation: "The pattern is 星期 + number, so Wednesday is 星期三."
      }
    },
    {
      id: "numbers",
      title: "Structure of numbers",
      category: "numbers",
      pattern: "Number + Unit",
      summary: "Chinese numbers build in units of ten, hundred, thousand, and ten thousand.",
      detail: "Say each digit with its unit: 三百五十九 is 3 hundreds, 5 tens, and 9. Unlike English, 万 (ten thousand) is a core unit: 一万 is 10,000.",
      tip: "Learn 万 early; Chinese groups large numbers by four digits.",
      examples: [
        { zh: "三百五十九。", pinyin: "Sānbǎi wǔshíjiǔ.", en: "359." },
        { zh: "这个手机三千二百块。", pinyin: "Zhège shǒujī sān qiān èr bǎi kuài.", en: "This phone is 3,200 yuan." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGCRH6P",
      quiz: {
        kind: "Number check",
        prompt: "Which is 359 in Chinese?",
        options: ["三百五十九", "三百六十九", "三百五十久", "三百九十五"],
        answer: 0,
        explanation: "三百 = 300, 五十 = 50, 九 = 9, giving 三百五十九."
      }
    },
    {
      id: "time-basic",
      title: "Structure of times (basic)",
      category: "numbers",
      pattern: "Number + 点(钟)",
      summary: "Tell time with number + 点, then minutes with 分.",
      detail: "点钟 is the longer, more formal form; 点 is usual in conversation. 半 means “half past,” and 差 means “to” the hour. Ask 现在几点？",
      tip: "几点 = what time; 点 = o'clock.",
      examples: [
        { zh: "现在十一点。", pinyin: "Xiànzài shíyī diǎn.", en: "It's 11 o'clock now." },
        { zh: "我们七点半见。", pinyin: "Wǒmen qī diǎn bàn jiàn.", en: "Let's meet at 7:30." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGN6BBU",
      quiz: {
        kind: "Fill the gap",
        prompt: "现在十一 ___。",
        hint: "It is 11 o'clock now.",
        options: ["点", "岁", "月", "日"],
        answer: 0,
        explanation: "点 marks the hour: 十一点 means 11 o'clock."
      }
    },
    {
      id: "possession-close",
      title: "Expressing close possession without \"de\"",
      category: "particles",
      pattern: "Pronoun + Noun",
      summary: "With close relationships, 的 is often dropped: 我女朋友.",
      detail: "For family and very close relationships, saying 我妈妈, 他爸爸, or 我女朋友 sounds natural. For most other nouns, keep 的: 我的老师.",
      tip: "Close people can drop 的; things usually keep it.",
      examples: [
        { zh: "我女朋友是老师。", pinyin: "Wǒ nǚpéngyou shì lǎoshī.", en: "My girlfriend is a teacher." },
        { zh: "他妈妈很漂亮。", pinyin: "Tā māma hěn piàoliang.", en: "His mom is pretty." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGCI0KG",
      quiz: {
        kind: "Pattern check",
        prompt: "Which phrase naturally drops 的?",
        hint: "Choose the close relationship.",
        options: ["我女朋友", "我的老师", "我的学校", "我的名字"],
        answer: 0,
        explanation: "Close relationships like 女朋友 often drop 的. Teachers, schools, and names normally keep it."
      }
    },
    {
      id: "de-possession",
      title: "Expressing possession with \"de\"",
      category: "particles",
      pattern: "Noun 1 + 的 + Noun 2",
      summary: "的 links a possessor or modifier to a noun.",
      detail: "The pattern is Noun 1 + 的 + Noun 2. It works like English apostrophe-s, but the owner comes first. 的 also turns phrases into noun modifiers.",
      tip: "Owner + 的 + thing: 我的老师.",
      examples: [
        { zh: "我的老师很好。", pinyin: "Wǒ de lǎoshī hěn hǎo.", en: "My teacher is very nice." },
        { zh: "这是谁的书？", pinyin: "Zhè shì shéi de shū?", en: "Whose book is this?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGUHQD2",
      quiz: {
        kind: "Fill the gap",
        prompt: "我 ___ 老师。",
        hint: "my teacher",
        options: ["的", "得", "地", "了"],
        answer: 0,
        explanation: "的 marks possession: 我的老师 = my teacher. 得 and 地 have different grammatical jobs."
      }
    },
    {
      id: "ne-questions",
      title: "Questions with \"ne\"",
      category: "particles",
      pattern: "⋯⋯呢?",
      summary: "呢 turns a statement into a follow-up: “And...?”",
      detail: "After a statement, 呢 asks for the same kind of information about someone or something else. It is not the general yes/no question word; use 吗 for that.",
      tip: "A: 我很好。 B: 你呢？ = And you?",
      examples: [
        { zh: "我很好。你呢？", pinyin: "Wǒ hěn hǎo. Nǐ ne?", en: "I'm fine. And you?" },
        { zh: "我是学生。你呢？", pinyin: "Wǒ shì xuésheng. Nǐ ne?", en: "I'm a student. And you?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGMJHZO",
      quiz: {
        kind: "Fill the gap",
        prompt: "我很好。你 ___？",
        hint: "I'm fine. And you?",
        options: ["呢", "吗", "吧", "的"],
        answer: 0,
        explanation: "呢 bounces the same question back: 你呢？ means “And you?”"
      }
    },
    {
      id: "ba-suggestions",
      title: "Suggestions with \"ba\"",
      category: "particles",
      pattern: "Command + 吧",
      summary: "吧 softens a command into “let's” or “how about.”",
      detail: "Add 吧 at the end of a sentence to propose something or make a gentle command. It can also mark a tentative assumption, depending on tone.",
      tip: "Suggestion + 吧 = let's / shall we.",
      examples: [
        { zh: "我们走吧。", pinyin: "Wǒmen zǒu ba.", en: "Let's go." },
        { zh: "你休息一下吧。", pinyin: "Nǐ xiūxi yíxià ba.", en: "Take a rest." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGMPZ6D",
      quiz: {
        kind: "Fill the gap",
        prompt: "我们走 ___。",
        hint: "Let's go.",
        options: ["吧", "呢", "吗", "了"],
        answer: 0,
        explanation: "吧 turns 我们走 into a friendly suggestion: “Let's go.”"
      }
    },
    {
      id: "zai-place",
      title: "Expressing existence in a place with \"zai\"",
      category: "verbs",
      pattern: "在 + Place",
      summary: "在 + place says where someone or something is.",
      detail: "Put 在 before the place. This pattern describes location, not movement. For “go to,” use 去.",
      tip: "在 + place = be at/in; 去 + place = go to.",
      examples: [
        { zh: "老师在上海。", pinyin: "Lǎoshī zài Shànghǎi.", en: "The teacher is in Shanghai." },
        { zh: "我妈妈在家。", pinyin: "Wǒ māma zài jiā.", en: "My mom is at home." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGLRWT8",
      quiz: {
        kind: "Fill the gap",
        prompt: "老师 ___ 上海。",
        hint: "The teacher is in Shanghai.",
        options: ["在", "有", "是", "去"],
        answer: 0,
        explanation: "在 marks location: 在上海 = be in Shanghai. 去 would mean “go to.”"
      }
    },
    {
      id: "you-existence",
      title: "Expressing existence with \"you\"",
      category: "verbs",
      pattern: "Place + 有 + Obj.",
      summary: "Place + 有 + thing says that something exists in a place.",
      detail: "The place comes first, then 有, then what exists there. This differs from English “there is,” which puts the place later. Negate with 没有.",
      tip: "Place first: 学校有很多学生.",
      examples: [
        { zh: "我们学校有很多学生。", pinyin: "Wǒmen xuéxiào yǒu hěn duō xuésheng.", en: "There are many students in our school." },
        { zh: "桌子上有一本书。", pinyin: "Zhuōzi shàng yǒu yì běn shū.", en: "There is a book on the table." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG04ZCI",
      quiz: {
        kind: "Fill the gap",
        prompt: "我们学校 ___ 很多学生。",
        hint: "There are many students in our school.",
        options: ["有", "在", "是", "去"],
        answer: 0,
        explanation: "有 introduces what exists in a place: 学校有很多学生."
      }
    },
    {
      id: "you-possession",
      title: "Expressing possession with \"you\"",
      category: "verbs",
      pattern: "Subj. + 有 + Obj.",
      summary: "Subject + 有 + object says someone has something.",
      detail: "Use 有 for possession, presence, and some descriptions. Its negative is 没有, never 不有. Do not use 有 to state your age.",
      tip: "I have = 我有; I don't have = 我没有.",
      examples: [
        { zh: "我有钱。", pinyin: "Wǒ yǒu qián.", en: "I have money." },
        { zh: "你有兄弟姐妹吗？", pinyin: "Nǐ yǒu xiōngdì jiěmèi ma?", en: "Do you have siblings?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGOOCVO",
      quiz: {
        kind: "Negation check",
        prompt: "Which is the negative of 我有钱？",
        options: ["我没有钱。", "我不有钱。", "我没钱有。", "我有不钱。"],
        answer: 0,
        explanation: "The negative of 有 is 没有, so 我有钱 becomes 我没有钱."
      }
    },
    {
      id: "jiao-name",
      title: "Using the verb \"jiao\"",
      category: "verbs",
      pattern: "叫 + Name",
      summary: "叫 introduces a name or what someone is called.",
      detail: "Ask 你叫什么名字？ to get a full name. Answer with 我叫 + name. For a surname only, use 姓 instead.",
      tip: "叫 = be called; 姓 = surname is.",
      examples: [
        { zh: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", en: "What's your name?" },
        { zh: "我叫王小明。", pinyin: "Wǒ jiào Wáng Xiǎomíng.", en: "My name is Wang Xiaoming." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGUGWVZ",
      quiz: {
        kind: "Fill the gap",
        prompt: "你 ___ 什么名字？",
        hint: "What's your name?",
        options: ["叫", "姓", "是", "有"],
        answer: 0,
        explanation: "The fixed question is 你叫什么名字？ Use 叫 before a full name."
      }
    },
    {
      id: "qu-place",
      title: "Using the verb \"qu\"",
      category: "verbs",
      pattern: "去 + Place",
      summary: "去 + place means “go to a place.”",
      detail: "Put 去 before the destination. No preposition is needed before the place. 去 can also mean “go to do something” when followed by a verb.",
      tip: "去 + place, with no 到 needed.",
      examples: [
        { zh: "我去学校。", pinyin: "Wǒ qù xuéxiào.", en: "I go to school." },
        { zh: "我们去吃饭吧。", pinyin: "Wǒmen qù chīfàn ba.", en: "Let's go eat." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGFYNCL",
      quiz: {
        kind: "Fill the gap",
        prompt: "我 ___ 学校。",
        hint: "I go to school.",
        options: ["去", "在", "有", "叫"],
        answer: 0,
        explanation: "去 expresses movement toward a destination: 去学校 = go to school."
      }
    },
    {
      id: "xing-surname",
      title: "Using the verb \"xing\"",
      category: "verbs",
      pattern: "姓 + Surname",
      summary: "姓 + surname asks or states a family name.",
      detail: "Ask 你姓什么？ or the more polite 您贵姓？ Answer with 我姓 + surname. 叫 is for the full name; 姓 is only for the surname.",
      tip: "姓 = surname; 叫 = full name.",
      examples: [
        { zh: "你姓什么？", pinyin: "Nǐ xìng shénme?", en: "What's your surname?" },
        { zh: "我姓李。", pinyin: "Wǒ xìng Lǐ.", en: "My surname is Li." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGPS9NY",
      quiz: {
        kind: "Fill the gap",
        prompt: "你 ___ 什么？— 我姓王。",
        hint: "What's your surname? — My surname is Wang.",
        options: ["姓", "叫", "是", "有"],
        answer: 0,
        explanation: "The answer 我姓王 uses 姓, so the question is 你姓什么？"
      }
    },
    {
      id: "neng-ability",
      title: "Expressing ability or possibility with \"neng\"",
      category: "auxiliary",
      pattern: "能 + Verb",
      summary: "能 + verb expresses ability or possibility, often under external conditions.",
      detail: "Use 能 for “can” in the sense of being able to or being allowed by circumstances. 会 is for learned skills; 可以 is often for permission.",
      tip: "能 = able/possible; 会 = learned skill.",
      examples: [
        { zh: "中文这么难，你能学好吗？", pinyin: "Zhōngwén zhème nán, nǐ néng xué hǎo ma?", en: "Chinese is so hard — can you learn it well?" },
        { zh: "我今天不能去。", pinyin: "Wǒ jīntiān bù néng qù.", en: "I can't go today." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG9PQ40",
      quiz: {
        kind: "Fill the gap",
        prompt: "我今天生病了，不 ___ 去。",
        hint: "I'm sick today, so I can't go.",
        options: ["能", "会", "要", "在"],
        answer: 0,
        explanation: "不能去 means “cannot go.” 能 expresses ability or possibility; 会 is for learned skills or future likelihood."
      }
    },
    {
      id: "hui-skill",
      title: "Expressing a learned skill with \"hui\"",
      category: "auxiliary",
      pattern: "会 + Verb",
      summary: "会 + verb expresses a learned skill or a likely future event.",
      detail: "Use 会 for skills you have learned, like speaking a language or swimming. It can also mean “will” when predicting something. 能 is more about ability or circumstances.",
      tip: "会 + skill: 会说中文.",
      examples: [
        { zh: "他会说中文。", pinyin: "Tā huì shuō Zhōngwén.", en: "He can speak Chinese." },
        { zh: "我会游泳。", pinyin: "Wǒ huì yóuyǒng.", en: "I can swim." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGRHM0E",
      quiz: {
        kind: "Fill the gap",
        prompt: "他 ___ 说中文。",
        hint: "He can speak Chinese (a learned skill).",
        options: ["会", "能", "要", "在"],
        answer: 0,
        explanation: "Speaking Chinese is a learned skill, so 会 is the natural choice."
      }
    },
    {
      id: "yao-going-to",
      title: "Expressing \"be going to\" with \"yao\"",
      category: "auxiliary",
      pattern: "Subj. + 要 + Verb (+ 了)",
      summary: "要 + verb can mean “be going to” or “intend to.”",
      detail: "With an action verb, 要 often signals a plan or intention. Context decides whether it means “want” or “will/going to.” Adding 了 at the end can emphasize a change or imminent action.",
      tip: "要 + verb = intend to; 想要 + noun = want.",
      examples: [
        { zh: "我要去吃饭，你去吗？", pinyin: "Wǒ yào qù chīfàn, nǐ qù ma?", en: "I'm going to eat — are you coming?" },
        { zh: "明天我们要上课。", pinyin: "Míngtiān wǒmen yào shàngkè.", en: "We have class tomorrow." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGVT2KN",
      quiz: {
        kind: "Meaning check",
        prompt: "我要去吃饭。— What does 要 mean here?",
        options: ["am going to / intend to", "want a thing", "must not", "have finished"],
        answer: 0,
        explanation: "Before an action verb, 要 commonly expresses a plan or intention: “I'm going to eat.”"
      }
    },
    {
      id: "keyi-permission",
      title: "Expressing permission with \"keyi\"",
      category: "auxiliary",
      pattern: "可以 + Verb",
      summary: "可以 + verb asks for or gives permission.",
      detail: "可以 is the everyday word for “may” or “can” when asking if something is allowed. It can also mean “can” in the sense of feasibility. 能 is more about ability.",
      tip: "May I...? = 我可以...吗？",
      examples: [
        { zh: "这里可以吸烟吗？", pinyin: "Zhèlǐ kěyǐ xīyān ma?", en: "Can you smoke here?" },
        { zh: "我可以进来吗？", pinyin: "Wǒ kěyǐ jìnlái ma?", en: "May I come in?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG6SPYK",
      quiz: {
        kind: "Fill the gap",
        prompt: "这里 ___ 吸烟吗？",
        hint: "Is smoking allowed here?",
        options: ["可以", "会", "要", "是"],
        answer: 0,
        explanation: "可以 asks about permission: “Is it allowed to smoke here?”"
      }
    },
    {
      id: "yao-want",
      title: "Wanting to do something with \"yao\"",
      category: "auxiliary",
      pattern: "要 + Verb",
      summary: "要 + noun or verb expresses wanting something or wanting to do something.",
      detail: "Use 要 for a direct “want.” 想要 is softer and often focuses on a desire. For polite requests, 请给我…… is common.",
      tip: "我要 + noun = I want + noun.",
      examples: [
        { zh: "我要吃饭。", pinyin: "Wǒ yào chīfàn.", en: "I want to eat." },
        { zh: "你要喝什么？", pinyin: "Nǐ yào hē shénme?", en: "What do you want to drink?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGXVEAR",
      quiz: {
        kind: "Fill the gap",
        prompt: "我 ___ 吃饭。",
        hint: "I want to eat.",
        options: ["要", "会", "能", "在"],
        answer: 0,
        explanation: "要 before an action verb expresses wanting to do it: 我要吃饭."
      }
    },
    {
      id: "zenme-how",
      title: "How to do something with \"zenme\"",
      category: "phrases",
      pattern: "怎么 + Verb?",
      summary: "怎么 + verb asks “how?” or “how come?”",
      detail: "Put 怎么 before the verb to ask about manner: 怎么走？ “How do I get there?” 怎么 can also ask “why” with a tone of surprise. Don't confuse it with 怎么样 (“how about / how is it”).",
      tip: "怎么 + verb = how do you...?",
      examples: [
        { zh: "怎么走？", pinyin: "Zěnme zǒu?", en: "How do I get there?" },
        { zh: "这个字怎么读？", pinyin: "Zhège zì zěnme dú?", en: "How do you read this character?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGH2MNO",
      quiz: {
        kind: "Fill the gap",
        prompt: "___ 走？",
        hint: "How do I get there?",
        options: ["怎么", "什么", "为什么", "谁"],
        answer: 0,
        explanation: "怎么 asks about manner: 怎么走？ means “How do I get there?”"
      }
    },
    {
      id: "meiyou-past",
      title: "Negation of past actions with \"meiyou\"",
      category: "phrases",
      pattern: "没有 + Verb",
      summary: "没有 + verb negates a past action or an experience.",
      detail: "Use 没有 (or just 没) before the verb to say something didn't happen. Don't add 了 after the verb in this negative pattern: 我没有去, not 我没有去了.",
      tip: "没有 + verb; drop 了 after it.",
      examples: [
        { zh: "我没有去酒吧。", pinyin: "Wǒ méiyǒu qù jiǔbā.", en: "I didn't go to the bar." },
        { zh: "他昨天没有来。", pinyin: "Tā zuótiān méiyǒu lái.", en: "He didn't come yesterday." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGAUCXK",
      quiz: {
        kind: "Choose the sentence",
        prompt: "Which sentence means “I didn't go to the bar”?",
        options: [
          "我没有去酒吧。",
          "我不去酒吧。",
          "我没去酒吧吗？",
          "我不去了酒吧。"
        ],
        answer: 0,
        explanation: "Past actions are negated with 没有 + verb. 不去 would describe a present habit or intention, not a past event."
      }
    },
    {
      id: "buyao-commands",
      title: "Negative commands with \"buyao\"",
      category: "phrases",
      pattern: "不要 + Verb",
      summary: "不要 + verb gives a negative command: “don't...”",
      detail: "Put 不要 before the verb. For a softer “you don't need to,” use 不用. 不要 can sound blunt, so add 吧 or 请 when politeness matters.",
      tip: "Don't do it = 不要 + verb.",
      examples: [
        { zh: "不要说英文！", pinyin: "Búyào shuō Yīngwén!", en: "Don't speak English!" },
        { zh: "请不要在这里拍照。", pinyin: "Qǐng búyào zài zhèlǐ pāizhào.", en: "Please don't take photos here." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGIVZJU",
      quiz: {
        kind: "Fill the gap",
        prompt: "___ 说英文！",
        hint: "Don't speak English!",
        options: ["不要", "没有", "不是", "不会"],
        answer: 0,
        explanation: "不要 + verb forms a negative command: 不要说英文 = Don't speak English."
      }
    },
    {
      id: "sentence-order",
      title: "Basic sentence order",
      category: "basics",
      pattern: "Subj. + Verb (+ Obj.)",
      summary: "Basic Chinese sentences follow subject + verb + object.",
      detail: "Chinese word order is usually subject–verb–object, just like English. Time and place phrases tend to come before the verb, not after the object: 我明天去学校.",
      tip: "Subject first, then when/where, then verb, then object.",
      examples: [
        { zh: "我爱你。", pinyin: "Wǒ ài nǐ.", en: "I love you." },
        { zh: "我明天去学校。", pinyin: "Wǒ míngtiān qù xuéxiào.", en: "I'm going to school tomorrow." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGETNCO",
      quiz: {
        kind: "Pattern check",
        prompt: "What is the basic Chinese sentence order?",
        options: [
          "Subject + Verb + Object",
          "Verb + Subject + Object",
          "Object + Subject + Verb",
          "Subject + Object + Verb"
        ],
        answer: 0,
        explanation: "The basic order is subject + verb + object, as in 我爱你 (I love you)."
      }
    },
    {
      id: "shi-linking",
      title: "Connecting nouns with \"shi\"",
      category: "basics",
      pattern: "A + 是 + B",
      summary: "A + 是 + B links two nouns: “A is B.”",
      detail: "Use 是 when both sides are nouns or noun phrases: 我是学生. Don't use 是 with adjectives; say 我很好, not 我是好. Negate 是 with 不: 不是.",
      tip: "是 joins nouns; adjectives don't need 是.",
      examples: [
        { zh: "我是学生。", pinyin: "Wǒ shì xuésheng.", en: "I am a student." },
        { zh: "他不是老师。", pinyin: "Tā bú shì lǎoshī.", en: "He is not a teacher." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGUN7RX",
      quiz: {
        kind: "Fill the gap",
        prompt: "我 ___ 学生。",
        hint: "I am a student.",
        options: ["是", "在", "有", "叫"],
        answer: 0,
        explanation: "Two nouns are linked with 是: 我是学生 = I am a student."
      }
    },
    {
      id: "tai-excessive",
      title: "Expressing \"excessively\" with \"tai\"",
      category: "basics",
      pattern: "太 + Adj. + 了",
      summary: "太 + adjective + 了 means “too...” or “so....”",
      detail: "The 了 at the end completes the pattern. Without 了, 太 can sound unfinished in this exclamation. Context decides whether it means “too” (negative) or “so” (positive): 太好了!",
      tip: "Keep both halves: 太 + adj. + 了.",
      examples: [
        { zh: "太好了！", pinyin: "Tài hǎo le!", en: "Great!" },
        { zh: "这个太贵了。", pinyin: "Zhège tài guì le.", en: "This is too expensive." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG8HVFN",
      quiz: {
        kind: "Fill the gap",
        prompt: "太 好 ___！",
        hint: "Great!",
        options: ["了", "的", "吧", "吗"],
        answer: 0,
        explanation: "The pattern is 太 + adjective + 了: 太好了！"
      }
    },
    {
      id: "hen-adjective",
      title: "Simple \"noun + adjective\" sentences",
      category: "basics",
      pattern: "Noun + 很 + Adj.",
      summary: "Adjectives often need 很 before them in simple sentences.",
      detail: "In a plain “noun + adjective” sentence, 很 acts as a neutral link and often isn't translated as “very.” Without 很, the sentence can sound like a comparison. Negate with 不: 我不好.",
      tip: "Subject + 很 + adjective is the neutral pattern.",
      examples: [
        { zh: "我很好。", pinyin: "Wǒ hěn hǎo.", en: "I'm fine." },
        { zh: "今天很冷。", pinyin: "Jīntiān hěn lěng.", en: "It's cold today." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG17BLH",
      quiz: {
        kind: "Fill the gap",
        prompt: "我 ___ 好。",
        hint: "I'm fine.",
        options: ["很", "是", "有", "在"],
        answer: 0,
        explanation: "Simple adjective sentences use 很 as a neutral link: 我很好."
      }
    },
    {
      id: "affirmative-negative",
      title: "Affirmative-negative question",
      category: "questions",
      pattern: "Verb + 不 + Verb / Adj. + 不 + Adj.",
      summary: "Repeat the verb or adjective with 不 between to make a yes/no question.",
      detail: "去不去？ and 好不好？ are direct yes/no questions. The answer can be 去/不去 or 好/不好. For two-character verbs, the whole verb is usually repeated: 喜欢不喜欢.",
      tip: "Verb + 不 + verb = yes/no question.",
      examples: [
        { zh: "你去不去？", pinyin: "Nǐ qù bu qù?", en: "Are you going?" },
        { zh: "这个好不好？", pinyin: "Zhège hǎo bu hǎo?", en: "Is this good?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGZH7K3",
      quiz: {
        kind: "Pattern check",
        prompt: "去不去？ is what kind of question?",
        options: [
          "Affirmative-negative question",
          "Yes-no question with 吗",
          "Tag question with 好吗",
          "Question with 呢"
        ],
        answer: 0,
        explanation: "Repeating the verb with 不 between is the affirmative-negative pattern."
      }
    },
    {
      id: "question-words",
      title: "Placement of question words",
      category: "questions",
      pattern: "什么 / 什么时候 / 谁 / 哪儿 / 为什么 / 怎么",
      summary: "Question words stay where the answer would go; word order doesn't change.",
      detail: "什么 (what), 谁 (who), 哪儿 (where), 什么时候 (when), 为什么 (why), 怎么 (how). Don't move them to the front like English: 你叫什么名字？ not 什么你叫名字？",
      tip: "Put the question word exactly where the answer would go.",
      examples: [
        { zh: "你是谁？", pinyin: "Nǐ shì shéi?", en: "Who are you?" },
        { zh: "你在哪儿？", pinyin: "Nǐ zài nǎr?", en: "Where are you?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGJQPSC",
      quiz: {
        kind: "Fill the gap",
        prompt: "你在 ___？",
        hint: "Where are you?",
        options: ["哪儿", "什么", "谁", "为什么"],
        answer: 0,
        explanation: "哪儿 asks “where” and stays in the position of the answer: 你在哪儿？"
      }
    },
    {
      id: "tag-bu",
      title: "Tag questions with \"bu\"",
      category: "questions",
      pattern: "⋯⋯是不是 / 对不对 / 好不好?",
      summary: "Add an affirmative-negative tag to ask for confirmation.",
      detail: "These tags repeat the key verb or adjective with 不. They turn a statement into “..., right?” or “..., okay?” They are more conversational than 吗.",
      tip: "Statement + A-not-A tag.",
      examples: [
        { zh: "你们明天来，好不好？", pinyin: "Nǐmen míngtiān lái, hǎo bu hǎo?", en: "You're coming tomorrow, okay?" },
        { zh: "他是老师，是不是？", pinyin: "Tā shì lǎoshī, shì bu shì?", en: "He's a teacher, right?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASG4D8XB",
      quiz: {
        kind: "Pattern check",
        prompt: "Which tag uses the affirmative-negative pattern?",
        options: ["好不好", "好吗", "是吗", "呢"],
        answer: 0,
        explanation: "好不好 repeats 好 with 不 between, so it belongs to the affirmative-negative tag family."
      }
    },
    {
      id: "tag-ma",
      title: "Tag questions with \"ma\"",
      category: "questions",
      pattern: "⋯⋯是吗 / 对吗 / 好吗?",
      summary: "Tags like 是吗 / 对吗 / 好吗 check a statement softly.",
      detail: "These are fixed tags ending in 吗. 是吗 = “is that so?”, 对吗 = “is that right?”, 好吗 = “okay?” They invite confirmation rather than asking a full question.",
      tip: "Use a short tag instead of repeating the whole question.",
      examples: [
        { zh: "这样做，对吗？", pinyin: "Zhèyàng zuò, duì ma?", en: "Doing it this way is right, isn't it?" },
        { zh: "我们明天见，好吗？", pinyin: "Wǒmen míngtiān jiàn, hǎo ma?", en: "See you tomorrow, okay?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGSJYZ2",
      quiz: {
        kind: "Pattern check",
        prompt: "Which tag belongs to the 是吗 / 对吗 / 好吗 family?",
        options: ["好吗", "好不好", "是不是", "去不去"],
        answer: 0,
        explanation: "好吗 is a fixed tag ending in 吗. The others use the affirmative-negative pattern."
      }
    },
    {
      id: "ma-yes-no",
      title: "Yes-no questions with \"ma\"",
      category: "questions",
      pattern: "⋯⋯吗？",
      summary: "Add 吗 to the end of a statement to make a yes/no question.",
      detail: "Word order stays the same; only 吗 changes the statement into a question. Answer with the verb (是/不是, 去/不去), not just “yes” or “no.”",
      tip: "Statement + 吗？ Never add 吗 to a question-word question.",
      examples: [
        { zh: "他是老板吗？", pinyin: "Tā shì lǎobǎn ma?", en: "Is he the boss?" },
        { zh: "你喜欢茶吗？", pinyin: "Nǐ xǐhuan chá ma?", en: "Do you like tea?" }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGQ2AZA",
      quiz: {
        kind: "Fill the gap",
        prompt: "他是老板 ___？",
        hint: "Is he the boss?",
        options: ["吗", "呢", "吧", "的"],
        answer: 0,
        explanation: "吗 turns the statement 他是老板 into a yes/no question."
      }
    },
    {
      id: "er-liang",
      title: "Comparing \"er\" and \"liang\"",
      category: "comparison",
      pattern: "二 vs 两",
      summary: "Use 两 before measure words; use 二 for counting and in numbers.",
      detail: "Say 两个人, not 二个人. But 二 stays in 二十二, 二百, and 第二. 两 is for “two of something” before a measure word.",
      tip: "Two + measure word = 两; counting = 二.",
      examples: [
        { zh: "两个人。", pinyin: "Liǎng gè rén.", en: "Two people." },
        { zh: "二十二。", pinyin: "Èrshí'èr.", en: "Twenty-two." }
      ],
      wiki: "https://resources.allsetlearning.com/chinese/grammar/ASGJ46H1",
      quiz: {
        kind: "Word choice",
        prompt: "Which is correct for “two people”?",
        options: ["两个人", "二个人", "两 人 个", "二 人 个"],
        answer: 0,
        explanation: "两 is used before a measure word: 两个人. 二 appears in numbers like 二十二."
      }
    }
  ]
};

// The original file predates the A2 level; default its points to A1.
window.GRAMMAR_DATA.points.forEach((point) => {
  if (!point.level) point.level = "A1";
});
