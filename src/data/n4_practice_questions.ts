export interface PracticeQuestion {
  id: string;
  unitId: string;
  unitTitle: string;
  section: string; // e.g. "もんだい 1" | "もんだい 2" | "もんだい 3" | "もんだい 4" | "もんだい 5" | "もんだい 6"
  sectionInstruction: string;
  questionNumber: string; // e.g. "1-①", "3-A"
  sentence: string;
  target: string;
  options: string[];
  correct: number; // 0-based index
  explanation?: string;
  imageSrc?: string;
  contextText?: string;
  contextType?: 'text' | 'travel_notice' | 'survey_chart';
}

export interface PracticeUnit {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  pages: string[];
  questionCount: number;
}

export const N4_PRACTICE_UNITS: PracticeUnit[] = [
  {
    "id": "all",
    "title": "All N4 Practice Quizzes (Full Exam)",
    "subtitle": "Comprehensive 309 Questions",
    "badge": "🏆 All Units",
    "description": "Practice all JLPT N4 textbook review questions from Lessons 1 through 20 and Comprehensive Review Tests.",
    "pages": [
      "/question_pic_N4/image.png",
      "/question_pic_N4/image copy.png",
      "/question_pic_N4/image copy 2.png",
      "/question_pic_N4/image copy 3.png",
      "/question_pic_N4/image copy 4.png",
      "/question_pic_N4/image copy 5.png",
      "/question_pic_N4/image copy 6.png",
      "/question_pic_N4/image copy 7.png",
      "/question_pic_N4/image copy 8.png",
      "/question_pic_N4/image copy 9.png",
      "/question_pic_N4/image copy 10.png",
      "/question_pic_N4/image copy 11.png",
      "/question_pic_N4/image copy 12.png",
      "/question_pic_N4/image copy 13.png",
      "/question_pic_N4/image copy 14.png",
      "/question_pic_N4/image copy 15.png",
      "/question_pic_N4/image copy 16.png",
      "/question_pic_N4/image copy 17.png",
      "/question_pic_N4/image copy 18.png",
      "/question_pic_N4/image copy 19.png",
      "/question_pic_N4/image copy 20.png",
      "/question_pic_N4/image copy 21.png",
      "/question_pic_N4/image copy 22.png",
      "/question_pic_N4/image copy 23.png"
    ],
    "questionCount": 309
  },
  {
    "id": "unit_1_3",
    "title": "Lessons 1–3 Review Quiz",
    "subtitle": "Page 127–128 (28 Questions)",
    "badge": "📘 L1–L3",
    "description": "Review Kanji readings and writing for Daily Life, People, Places, Food, and Adjectives.",
    "pages": [
      "/question_pic_N4/image.png",
      "/question_pic_N4/image copy.png"
    ],
    "questionCount": 28
  },
  {
    "id": "unit_4_6",
    "title": "Lessons 4–6 Review Quiz",
    "subtitle": "Page 147–148 (28 Questions)",
    "badge": "📗 L4–L6",
    "description": "Review Kanji for City, Nature, School, Time, Verbs, and Transportation.",
    "pages": [
      "/question_pic_N4/image copy 2.png",
      "/question_pic_N4/image copy 3.png"
    ],
    "questionCount": 28
  },
  {
    "id": "unit_7_9",
    "title": "Lessons 7–9 Review Quiz",
    "subtitle": "Page 167–168 (28 Questions)",
    "badge": "📙 L7–L9",
    "description": "Review Kanji for Work, Travel, Seasons, Health, and Body Parts.",
    "pages": [
      "/question_pic_N4/image copy 4.png",
      "/question_pic_N4/image copy 5.png"
    ],
    "questionCount": 28
  },
  {
    "id": "unit_10_12",
    "title": "Lessons 10–12 Review Quiz",
    "subtitle": "Page 187–188 (28 Questions)",
    "badge": "📕 L10–L12",
    "description": "Review Kanji for Society, Family, Feelings, and Action Verbs.",
    "pages": [
      "/question_pic_N4/image copy 6.png",
      "/question_pic_N4/image copy 7.png"
    ],
    "questionCount": 28
  },
  {
    "id": "unit_13_15",
    "title": "Lessons 13–15 Review Quiz",
    "subtitle": "Page 207–208 (28 Questions)",
    "badge": "📓 L13–L15",
    "description": "Review Kanji for Goods, Colors, Materials, Directions, and Living.",
    "pages": [
      "/question_pic_N4/image copy 8.png",
      "/question_pic_N4/image copy 9.png"
    ],
    "questionCount": 28
  },
  {
    "id": "unit_16_18",
    "title": "Lessons 16–18 Review Quiz",
    "subtitle": "Page 227–228 (28 Questions)",
    "badge": "📒 L16–L18",
    "description": "Review Kanji for Media, Study, Rules, Vehicles, and Public Services.",
    "pages": [
      "/question_pic_N4/image copy 10.png",
      "/question_pic_N4/image copy 11.png"
    ],
    "questionCount": 28
  },
  {
    "id": "unit_19_20",
    "title": "Lessons 19–20 Review Quiz",
    "subtitle": "Page 241–242 (28 Questions)",
    "badge": "📔 L19–L20",
    "description": "Review Kanji for Decisions, Schedules, Opposites, and Complex Actions.",
    "pages": [
      "/question_pic_N4/image copy 12.png",
      "/question_pic_N4/image copy 13.png"
    ],
    "questionCount": 28
  },
  {
    "id": "unit_comprehensive",
    "title": "Lessons 1–20 Comprehensive Review (そうごう れんしゅう)",
    "subtitle": "Page 249–258 (113 Questions: Mondai 1~6)",
    "badge": "🎓 そうごう",
    "description": "The ultimate JLPT N4 Kanji & Reading challenge with 42 Reading, 42 Orthography, Memo, Notice, and Advertisement comprehension questions.",
    "pages": [
      "/question_pic_N4/image copy 14.png",
      "/question_pic_N4/image copy 15.png",
      "/question_pic_N4/image copy 16.png",
      "/question_pic_N4/image copy 17.png",
      "/question_pic_N4/image copy 18.png",
      "/question_pic_N4/image copy 19.png",
      "/question_pic_N4/image copy 20.png",
      "/question_pic_N4/image copy 21.png",
      "/question_pic_N4/image copy 22.png",
      "/question_pic_N4/image copy 23.png"
    ],
    "questionCount": 113
  }
];

export const N4_PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "n4-u1-m1-1",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "兄は 今年の 春、高校生に なりました。",
    "target": "兄",
    "options": [
      "1. あに",
      "2. おね",
      "3. あね",
      "4. おに"
    ],
    "correct": 0,
    "explanation": "兄 is read as あに (older brother).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-2",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "兄は 今年の 春、高校生に なりました。",
    "target": "春",
    "options": [
      "1. なつ",
      "2. はる",
      "3. あき",
      "4. ふゆ"
    ],
    "correct": 1,
    "explanation": "春 is read as はる (spring).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-3",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "弟と 妹は 毎日 元気に あそんでいます。",
    "target": "弟",
    "options": [
      "1. いもうと",
      "2. あね",
      "3. あに",
      "4. おとうと"
    ],
    "correct": 3,
    "explanation": "弟 is read as おとうと (younger brother).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-4",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "弟と 妹は 毎日 元気に あそんでいます。",
    "target": "妹",
    "options": [
      "1. いもうと",
      "2. あね",
      "3. あに",
      "4. おとうと"
    ],
    "correct": 0,
    "explanation": "妹 is read as いもうと (younger sister).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-5",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "この 旅館の 部屋は 広くて 明るいです。",
    "target": "旅館",
    "options": [
      "1. りょかん",
      "2. ろかん",
      "3. りょがん",
      "4. ろがん"
    ],
    "correct": 0,
    "explanation": "旅館 is read as りょかん (traditional Japanese inn).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-6",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "この 旅館の 部屋は 広くて 明るいです。",
    "target": "明るい",
    "options": [
      "1. くろい",
      "2. あかるい",
      "3. ひろい",
      "4. あおい"
    ],
    "correct": 1,
    "explanation": "明るい is read as あかるい (bright).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-7",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "洋食と 和食の どちらが 好きですか。",
    "target": "洋食",
    "options": [
      "1. ようしょく",
      "2. わしょく",
      "3. ちょうしょく",
      "4. ちゅうしょく"
    ],
    "correct": 0,
    "explanation": "洋食 is read as ようしょく (Western food).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-8",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "洋食と 和食の どちらが 好きですか。",
    "target": "和食",
    "options": [
      "1. ようしょく",
      "2. わしょく",
      "3. ちょうしょく",
      "4. ちゅうしょく"
    ],
    "correct": 1,
    "explanation": "和食 is read as わしょく (Japanese food).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-9",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "近くに 肉屋と 魚屋が あります。",
    "target": "肉屋",
    "options": [
      "1. さかなや",
      "2. にくや",
      "3. やおや",
      "4. はなや"
    ],
    "correct": 1,
    "explanation": "肉屋 is read as にくや (butcher shop).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-10",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "近くに 肉屋と 魚屋が あります。",
    "target": "魚屋",
    "options": [
      "1. さかなや",
      "2. にくや",
      "3. やおや",
      "4. はなや"
    ],
    "correct": 0,
    "explanation": "魚屋 is read as さかなや (fish shop).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-11",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "暑い 夏は 冷たい 麦茶を よく 飲みます。",
    "target": "暑い",
    "options": [
      "1. あつい",
      "2. さむい",
      "3. あたたかい",
      "4. すずしい"
    ],
    "correct": 0,
    "explanation": "暑い is read as あつい (hot weather).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-12",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "暑い 夏は 冷たい 麦茶を よく 飲みます。",
    "target": "麦茶",
    "options": [
      "1. こうちゃ",
      "2. おちゃ",
      "3. むぎちゃ",
      "4. りょくちゃ"
    ],
    "correct": 2,
    "explanation": "麦茶 is read as むぎちゃ (barley tea).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-13",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "朝 ご飯を 食べてから、会社へ 行きます。",
    "target": "朝",
    "options": [
      "1. よる",
      "2. あさ",
      "3. ひる",
      "4. ゆうがた"
    ],
    "correct": 1,
    "explanation": "朝 is read as あさ (morning).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m1-14",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 127)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "朝 ご飯を 食べてから、会社へ 行きます。",
    "target": "ご飯",
    "options": [
      "1. ごはん",
      "2. おちゃ",
      "3. パン",
      "4. みず"
    ],
    "correct": 0,
    "explanation": "ご飯 is read as ごはん (meal / rice).",
    "imageSrc": "/question_pic_N4/image.png"
  },
  {
    "id": "n4-u1-m2-1",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "かのじょの へやは せまいです。",
    "target": "へや",
    "options": [
      "1. 部家",
      "2. 部屋",
      "3. 屋部",
      "4. 家部"
    ],
    "correct": 1,
    "explanation": "へや in kanji is 部屋 (room).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-2",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "かのじょの へやは せまいです。",
    "target": "せまい",
    "options": [
      "1. 狭い",
      "2. 狛い",
      "3. 挟い",
      "4. 抹い"
    ],
    "correct": 0,
    "explanation": "せまい in kanji is 狭い (narrow / small).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-3",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "みせの まえに 車が とまっています。",
    "target": "まえ",
    "options": [
      "1. 後",
      "2. 前",
      "3. 右",
      "4. 左"
    ],
    "correct": 1,
    "explanation": "まえ in kanji is 前 (front / before).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-4",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "みせの まえに 車が とまっています。",
    "target": "とまって",
    "options": [
      "1. 止まって",
      "2. 正まって",
      "3. 走まって",
      "4. 歩まって"
    ],
    "correct": 0,
    "explanation": "とまって in kanji is 止まって (stopped).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-5",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "この ふくは あたたかいですね。",
    "target": "ふく",
    "options": [
      "1. 服",
      "2. 股",
      "3. 板",
      "4. 坂"
    ],
    "correct": 0,
    "explanation": "ふく in kanji is 服 (clothes).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-6",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "この ふくは あたたかいですね。",
    "target": "あたたかい",
    "options": [
      "1. 温かい",
      "2. 暑かい",
      "3. 涼かい",
      "4. 寒かい"
    ],
    "correct": 0,
    "explanation": "あたたかい in kanji is 温かい (warm).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-7",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "つめたい みずを 飲みたいです。",
    "target": "つめたい",
    "options": [
      "1. 冷たい",
      "2. 凍たい",
      "3. 涼たい",
      "4. 氷たい"
    ],
    "correct": 0,
    "explanation": "つめたい in kanji is 冷たい (cold).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-8",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "つめたい みずを 飲みたいです。",
    "target": "みず",
    "options": [
      "1. 氷",
      "2. 水",
      "3. 油",
      "4. 汁"
    ],
    "correct": 1,
    "explanation": "みず in kanji is 水 (water).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-9",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "あには あきに けっこんします。",
    "target": "あに",
    "options": [
      "1. 弟",
      "2. 兄",
      "3. 父",
      "4. 妹"
    ],
    "correct": 1,
    "explanation": "あに in kanji is 兄 (older brother).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-10",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "あには あきに けっこんします。",
    "target": "あき",
    "options": [
      "1. 春",
      "2. 夏",
      "3. 秋",
      "4. 冬"
    ],
    "correct": 2,
    "explanation": "あき in kanji is 秋 (autumn).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-11",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "ぎんこうの となりに ほんやが あります。",
    "target": "ぎんこう",
    "options": [
      "1. 銀行",
      "2. 金行",
      "3. 銀高",
      "4. 金高"
    ],
    "correct": 0,
    "explanation": "ぎんこう in kanji is 銀行 (bank).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-12",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "ぎんこうの となりに ほんやが あります。",
    "target": "ほんや",
    "options": [
      "1. 本屋",
      "2. 本室",
      "3. 本家",
      "4. 本所"
    ],
    "correct": 0,
    "explanation": "ほんや in kanji is 本屋 (bookstore).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-13",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "ひるごはんは にくやの べんとうです。",
    "target": "ひるごはん",
    "options": [
      "1. 朝ご飯",
      "2. 昼ご飯",
      "3. 晩ご飯",
      "4. 夜ご飯"
    ],
    "correct": 1,
    "explanation": "ひるごはん in kanji is 昼ご飯 (lunch).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u1-m2-14",
    "unitId": "unit_1_3",
    "unitTitle": "Lessons 1–3 Review (Page 128)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "ひるごはんは にくやの べんとうです。",
    "target": "にくや",
    "options": [
      "1. 魚屋",
      "2. 肉屋",
      "3. 八百屋",
      "4. 本屋"
    ],
    "correct": 1,
    "explanation": "にくや in kanji is 肉屋 (butcher shop).",
    "imageSrc": "/question_pic_N4/image copy.png"
  },
  {
    "id": "n4-u2-m1-1",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "母は 料理を 作るのが 上手です。",
    "target": "母",
    "options": [
      "1. はは",
      "2. ちち",
      "3. あね",
      "4. おば"
    ],
    "correct": 0,
    "explanation": "母 is read as はは (mother).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-2",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "母は 料理を 作るのが 上手です。",
    "target": "作る",
    "options": [
      "1. つくる",
      "2. くる",
      "3. おくる",
      "4. つく"
    ],
    "correct": 0,
    "explanation": "作る is read as つくる (to make / cook).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-3",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "友だちと 神社へ 行きました。",
    "target": "友だち",
    "options": [
      "1. ともたち",
      "2. ともだち",
      "3. どもたち",
      "4. どもだち"
    ],
    "correct": 1,
    "explanation": "友だち is read as ともだち (friend).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-4",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "友だちと 神社へ 行きました。",
    "target": "神社",
    "options": [
      "1. かみしゃ",
      "2. じんしゃ",
      "3. じんじゃ",
      "4. かみじゃ"
    ],
    "correct": 2,
    "explanation": "神社 is read as じんじゃ (Shinto shrine).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-5",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "毎朝、お寺の 鐘の 音が 聞こえます。",
    "target": "お寺",
    "options": [
      "1. おてら",
      "2. おでら",
      "3. おじ",
      "4. おどう"
    ],
    "correct": 0,
    "explanation": "お寺 is read as おてら (Buddhist temple).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-6",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "毎朝、お寺の 鐘の 音が 聞こえます。",
    "target": "音",
    "options": [
      "1. こえ",
      "2. おと",
      "3. うた",
      "4. ひびき"
    ],
    "correct": 1,
    "explanation": "音 is read as おと (sound).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-7",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "今朝、海岸を 散歩しました。",
    "target": "今朝",
    "options": [
      "1. いまあさ",
      "2. けさ",
      "3. こんあさ",
      "4. こあさ"
    ],
    "correct": 1,
    "explanation": "今朝 is read as けさ (this morning).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-8",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "今朝、海岸を 散歩しました。",
    "target": "海岸",
    "options": [
      "1. かいがん",
      "2. うみぎし",
      "3. かいきし",
      "4. うみがん"
    ],
    "correct": 0,
    "explanation": "海岸 is read as かいがん (seashore / coast).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-9",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "教室で 日本語を 勉強しています。",
    "target": "教室",
    "options": [
      "1. きょうしつ",
      "2. きょうしづ",
      "3. きょしつ",
      "4. きょうじつ"
    ],
    "correct": 0,
    "explanation": "教室 is read as きょうしつ (classroom).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-10",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "教室で 日本語を 勉強しています。",
    "target": "勉強",
    "options": [
      "1. べんきょう",
      "2. べんきょ",
      "3. べんぎょう",
      "4. べんごう"
    ],
    "correct": 0,
    "explanation": "勉強 is read as べんきょう (study).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-11",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "病院で 薬を もらいました。",
    "target": "病院",
    "options": [
      "1. びょういん",
      "2. びょいん",
      "3. びょうえん",
      "4. びょえん"
    ],
    "correct": 0,
    "explanation": "病院 is read as びょういん (hospital / clinic).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-12",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "病院で 薬を もらいました。",
    "target": "薬",
    "options": [
      "1. くすり",
      "2. ぐすり",
      "3. こすり",
      "4. ざい"
    ],
    "correct": 0,
    "explanation": "薬 is read as くすり (medicine).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-13",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "夕方から 雨が 降るでしょう。",
    "target": "夕方",
    "options": [
      "1. ゆうがた",
      "2. ゆうかた",
      "3. ゆがた",
      "4. よるがた"
    ],
    "correct": 0,
    "explanation": "夕方 is read as ゆうがた (evening).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m1-14",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 147)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "夕方から 雨が 降るでしょう。",
    "target": "降る",
    "options": [
      "1. ふる",
      "2. おる",
      "3. くだる",
      "4. つもる"
    ],
    "correct": 0,
    "explanation": "降る is read as ふる (to fall / rain).",
    "imageSrc": "/question_pic_N4/image copy 2.png"
  },
  {
    "id": "n4-u2-m2-1",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "いもうとは おんがくが すきです。",
    "target": "いもうと",
    "options": [
      "1. 姉",
      "2. 妹",
      "3. 弟",
      "4. 兄"
    ],
    "correct": 1,
    "explanation": "いもうと in kanji is 妹 (younger sister).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-2",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "いもうとは おんがくが すきです。",
    "target": "おんがく",
    "options": [
      "1. 音楽",
      "2. 暗楽",
      "3. 音薬",
      "4. 暗薬"
    ],
    "correct": 0,
    "explanation": "おんがく in kanji is 音楽 (music).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-3",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "まいにち ３じかん べんきょうします。",
    "target": "まいにち",
    "options": [
      "1. 毎目",
      "2. 毎日",
      "3. 母日",
      "4. 舟日"
    ],
    "correct": 1,
    "explanation": "まいにち in kanji is 毎日 (every day).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-4",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "まいにち ３じかん べんきょうします。",
    "target": "３じかん",
    "options": [
      "1. ３時間",
      "2. ３時問",
      "3. ３侍間",
      "4. ３持間"
    ],
    "correct": 0,
    "explanation": "３じかん in kanji is ３時間 (3 hours).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-5",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "ゆうびんきょくで てがみを だしました。",
    "target": "ゆうびんきょく",
    "options": [
      "1. 郵便局",
      "2. 郵使局",
      "3. 郵行局",
      "4. 郵政局"
    ],
    "correct": 0,
    "explanation": "ゆうびんきょく in kanji is 郵便局 (post office).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-6",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "ゆうびんきょくで てがみを だしました。",
    "target": "てがみ",
    "options": [
      "1. 手紙",
      "2. 手低",
      "3. 毛紙",
      "4. 毛低"
    ],
    "correct": 0,
    "explanation": "てがみ in kanji is 手紙 (letter).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-7",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "あさはやく おきて、さんぽします。",
    "target": "あさはやく",
    "options": [
      "1. 朝早く",
      "2. 昼早く",
      "3. 夜早く",
      "4. 晩早く"
    ],
    "correct": 0,
    "explanation": "あさはやく in kanji is 朝早く (early morning).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-8",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "あさはやく おきて、さんぽします。",
    "target": "おきて",
    "options": [
      "1. 起きて",
      "2. 走きて",
      "3. 歩きて",
      "4. 止きて"
    ],
    "correct": 0,
    "explanation": "おきて in kanji is 起きて (to wake up).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-9",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "がっこうの プールで およぎました。",
    "target": "がっこう",
    "options": [
      "1. 学校",
      "2. 学枚",
      "3. 学枝",
      "4. 学杖"
    ],
    "correct": 0,
    "explanation": "がっこう in kanji is 学校 (school).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-10",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "がっこうの プールで およぎました。",
    "target": "およぎました",
    "options": [
      "1. 泳ぎました",
      "2. 浴ぎました",
      "3. 泣ぎました",
      "4. 波ぎました"
    ],
    "correct": 0,
    "explanation": "およぎました in kanji is 泳ぎました (swam).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-11",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "えきの ちかくの こうさてんで まちます。",
    "target": "えき",
    "options": [
      "1. 駅",
      "2. 訳",
      "3. 釈",
      "4. 尺"
    ],
    "correct": 0,
    "explanation": "えき in kanji is 駅 (train station).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-12",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "えきの ちかくの こうさてんで まちます。",
    "target": "まちます",
    "options": [
      "1. 持ちます",
      "2. 待ちます",
      "3. 侍ちます",
      "4. 特ちます"
    ],
    "correct": 1,
    "explanation": "まちます in kanji is 待ちます (to wait).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-13",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "うみで さかなを つりました。",
    "target": "うみ",
    "options": [
      "1. 海",
      "2. 毎",
      "3. 湖",
      "4. 池"
    ],
    "correct": 0,
    "explanation": "うみ in kanji is 海 (sea / ocean).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u2-m2-14",
    "unitId": "unit_4_6",
    "unitTitle": "Lessons 4–6 Review (Page 148)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "うみで さかなを つりました。",
    "target": "さかな",
    "options": [
      "1. 魚",
      "2. 鮮",
      "3. 漁",
      "4. 魯"
    ],
    "correct": 0,
    "explanation": "さかな in kanji is 魚 (fish).",
    "imageSrc": "/question_pic_N4/image copy 3.png"
  },
  {
    "id": "n4-u3-m1-1",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "会社で 一緒に 働いています。",
    "target": "会社",
    "options": [
      "1. かいしゃ",
      "2. えいしゃ",
      "3. あいしゃ",
      "4. かいじゃ"
    ],
    "correct": 0,
    "explanation": "会社 is read as かいしゃ (company).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-2",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "会社で 一緒に 働いています。",
    "target": "働いて",
    "options": [
      "1. はたらいて",
      "2. うごいて",
      "3. つとめて",
      "4. あるいて"
    ],
    "correct": 0,
    "explanation": "働いて is read as はたらいて (to work).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-3",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "旅行に 行く 計画を 立てました。",
    "target": "旅行",
    "options": [
      "1. りょこう",
      "2. りょごう",
      "3. りょうこう",
      "4. りょうごう"
    ],
    "correct": 0,
    "explanation": "旅行 is read as りょこう (travel / trip).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-4",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "旅行に 行く 計画を 立てました。",
    "target": "計画",
    "options": [
      "1. けいかく",
      "2. けいがく",
      "3. けいこく",
      "4. けいが"
    ],
    "correct": 0,
    "explanation": "計画 is read as けいかく (plan).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-5",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "週末は 家族と 映画を 見ます。",
    "target": "家族",
    "options": [
      "1. かぞく",
      "2. かそう",
      "3. がぞく",
      "4. かそく"
    ],
    "correct": 0,
    "explanation": "家族 is read as かぞく (family).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-6",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "週末は 家族と 映画を 見ます。",
    "target": "映画",
    "options": [
      "1. えいが",
      "2. えいか",
      "3. えいご",
      "4. えいえき"
    ],
    "correct": 0,
    "explanation": "映画 is read as えいが (movie).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-7",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "体の 調子が 悪いです。",
    "target": "体",
    "options": [
      "1. からだ",
      "2. あたま",
      "3. こころ",
      "4. かお"
    ],
    "correct": 0,
    "explanation": "体 is read as からだ (body / health).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-8",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "体の 調子が 悪いです。",
    "target": "悪い",
    "options": [
      "1. わるい",
      "2. くるい",
      "3. つらい",
      "4. くらい"
    ],
    "correct": 0,
    "explanation": "悪い is read as わるい (bad / poor).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-9",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "空港まで バスで 行きます。",
    "target": "空港",
    "options": [
      "1. くうこう",
      "2. くうごう",
      "3. くこう",
      "4. そらこう"
    ],
    "correct": 0,
    "explanation": "空港 is read as くうこう (airport).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-10",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "空港まで バスで 行きます。",
    "target": "行きます",
    "options": [
      "1. いきます",
      "2. ゆきます",
      "3. きます",
      "4. かえります"
    ],
    "correct": 0,
    "explanation": "行きます is read as いきます (to go).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-11",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "弟は 背が 高くて、足が 速いです。",
    "target": "背",
    "options": [
      "1. せ",
      "2. め",
      "3. て",
      "4. は"
    ],
    "correct": 0,
    "explanation": "背 is read as せ (height / back).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-12",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "弟は 背が 高くて、足が 速いです。",
    "target": "足",
    "options": [
      "1. あし",
      "2. て",
      "3. くび",
      "4. かた"
    ],
    "correct": 0,
    "explanation": "足 is read as あし (foot / leg).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-13",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "自転車に 乗って 駅へ 行きます。",
    "target": "自転車",
    "options": [
      "1. じてんしゃ",
      "2. じどうしゃ",
      "3. じしゃ",
      "4. でんしゃ"
    ],
    "correct": 0,
    "explanation": "自転車 is read as じてんしゃ (bicycle).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m1-14",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 167)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "自転車に 乗って 駅へ 行きます。",
    "target": "乗って",
    "options": [
      "1. のって",
      "2. おって",
      "3. たって",
      "4. はしって"
    ],
    "correct": 0,
    "explanation": "乗って is read as のって (to ride / board).",
    "imageSrc": "/question_pic_N4/image copy 4.png"
  },
  {
    "id": "n4-u3-m2-1",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "ちちおやと ははに 手紙を かきました。",
    "target": "ちちおや",
    "options": [
      "1. 父親",
      "2. 爸親",
      "3. 斧親",
      "4. 父新"
    ],
    "correct": 0,
    "explanation": "ちちおや in kanji is 父親 (father).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-2",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "ちちおやと ははに 手紙を かきました。",
    "target": "かきました",
    "options": [
      "1. 書きました",
      "2. 昼きました",
      "3. 画きました",
      "4. 普きました"
    ],
    "correct": 0,
    "explanation": "かきました in kanji is 書きました (wrote).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-3",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "この まちは しずかで すみやすいです。",
    "target": "まち",
    "options": [
      "1. 町",
      "2. 村",
      "3. 市",
      "4. 区"
    ],
    "correct": 0,
    "explanation": "まち in kanji is 町 (town).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-4",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "この まちは しずかで すみやすいです。",
    "target": "しずかで",
    "options": [
      "1. 静かで",
      "2. 清かで",
      "3. 争かで",
      "4. 浄かで"
    ],
    "correct": 0,
    "explanation": "しずかで in kanji is 静かで (quiet).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-5",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "あたまが いたいですから、くすりを のみます。",
    "target": "あたま",
    "options": [
      "1. 頭",
      "2. 額",
      "3. 頸",
      "4. 頼"
    ],
    "correct": 0,
    "explanation": "あたま in kanji is 頭 (head).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-6",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "あたまが いたいですから、くすりを のみます。",
    "target": "いたいです",
    "options": [
      "1. 痛いです",
      "2. 痒いです",
      "3. 疫いです",
      "4. 疼いです"
    ],
    "correct": 0,
    "explanation": "いたいです in kanji is 痛いです (hurts / painful).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-7",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "でんしゃが とまりました。",
    "target": "でんしゃ",
    "options": [
      "1. 電車",
      "2. 雷車",
      "3. 電東",
      "4. 電輪"
    ],
    "correct": 0,
    "explanation": "でんしゃ in kanji is 電車 (train).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-8",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "でんしゃが とまりました。",
    "target": "とまりました",
    "options": [
      "1. 止まりました",
      "2. 正まりました",
      "3. 走まりました",
      "4. 歩まりました"
    ],
    "correct": 0,
    "explanation": "とまりました in kanji is 止まりました (stopped).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-9",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "こうちゃに おさとうを いれます。",
    "target": "こうちゃ",
    "options": [
      "1. 紅茶",
      "2. 糸茶",
      "3. 虹茶",
      "4. 江茶"
    ],
    "correct": 0,
    "explanation": "こうちゃ in kanji is 紅茶 (black tea).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-10",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "こうちゃに おさとうを いれます。",
    "target": "いれます",
    "options": [
      "1. 入れます",
      "2. 人れます",
      "3. 八れます",
      "4. 又れます"
    ],
    "correct": 0,
    "explanation": "いれます in kanji is 入れます (to put in).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-11",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "たいじゅうを はかります。",
    "target": "たいじゅう",
    "options": [
      "1. 体重",
      "2. 体動",
      "3. 身重",
      "4. 体量"
    ],
    "correct": 0,
    "explanation": "たいじゅう in kanji is 体重 (body weight).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-12",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "たいじゅうを はかります。",
    "target": "はかります",
    "options": [
      "1. 計ります",
      "2. 言ります",
      "3. 針ります",
      "4. 算ります"
    ],
    "correct": 0,
    "explanation": "はかります in kanji is 計ります (to measure / weigh).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-13",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "えきいんに きっぷを みせます。",
    "target": "えきいん",
    "options": [
      "1. 駅員",
      "2. 駅員",
      "3. 訳員",
      "4. 釈員"
    ],
    "correct": 0,
    "explanation": "えきいん in kanji is 駅員 (station attendant).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u3-m2-14",
    "unitId": "unit_7_9",
    "unitTitle": "Lessons 7–9 Review (Page 168)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "えきいんに きっぷを みせます。",
    "target": "きっぷ",
    "options": [
      "1. 切符",
      "2. 切付",
      "3. 刀符",
      "4. 切府"
    ],
    "correct": 0,
    "explanation": "きっぷ in kanji is 切符 (ticket).",
    "imageSrc": "/question_pic_N4/image copy 5.png"
  },
  {
    "id": "n4-u4-m1-1",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "自分の 部屋で 音楽を 聞きます。",
    "target": "自分",
    "options": [
      "1. じふん",
      "2. じぶん",
      "3. じぶ",
      "4. じぷん"
    ],
    "correct": 1,
    "explanation": "自分 is read as じぶん (oneself).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-2",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "自分の 部屋で 音楽を 聞きます。",
    "target": "音楽",
    "options": [
      "1. おとがく",
      "2. おんがく",
      "3. おとらく",
      "4. おんらく"
    ],
    "correct": 1,
    "explanation": "音楽 is read as おんがく (music).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-3",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "兄は 私より 背が 高いです。",
    "target": "兄",
    "options": [
      "1. おとうと",
      "2. あに",
      "3. おねえさん",
      "4. おにいさん"
    ],
    "correct": 1,
    "explanation": "兄 is read as あに (older brother).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-4",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "兄は 私より 背が 高いです。",
    "target": "私",
    "options": [
      "1. わだし",
      "2. わたし",
      "3. わたじ",
      "4. わたち"
    ],
    "correct": 1,
    "explanation": "私 is read as わたし (I / me).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-5",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "弟と 妹は 映画が 好きです。",
    "target": "弟",
    "options": [
      "1. いもうと",
      "2. おとうと",
      "3. あに",
      "4. あね"
    ],
    "correct": 1,
    "explanation": "弟 is read as おとうと (younger brother).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-6",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "弟と 妹は 映画が 好きです。",
    "target": "妹",
    "options": [
      "1. いもうと",
      "2. おとうと",
      "3. あに",
      "4. あね"
    ],
    "correct": 0,
    "explanation": "妹 is read as いもうと (younger sister).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-7",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "友だちと お茶を 飲みながら、話しました。",
    "target": "お茶",
    "options": [
      "1. おちゃ",
      "2. おさけ",
      "3. おみず",
      "4. おゆ"
    ],
    "correct": 0,
    "explanation": "お茶 is read as おちゃ (tea).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-8",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "友だちと お茶を 飲みながら、話しました。",
    "target": "話しました",
    "options": [
      "1. はなしました",
      "2. はなじました",
      "3. はなちました",
      "4. はなびました"
    ],
    "correct": 0,
    "explanation": "話しました is read as はなしました (talked / spoke).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-9",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "病院の 前で バスを 降りました。",
    "target": "病院",
    "options": [
      "1. びょういん",
      "2. びょうえん",
      "3. びょいん",
      "4. びょえん"
    ],
    "correct": 0,
    "explanation": "病院 is read as びょういん (hospital).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-10",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "病院の 前で バスを 降りました。",
    "target": "降りました",
    "options": [
      "1. ふりました",
      "2. のりました",
      "3. おりました",
      "4. とまりました"
    ],
    "correct": 2,
    "explanation": "降りました is read as おりました (got off).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-11",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "この 道を まっすぐ 行くと、駅が あります。",
    "target": "道",
    "options": [
      "1. みち",
      "2. まち",
      "3. みじ",
      "4. まじ"
    ],
    "correct": 0,
    "explanation": "道 is read as みち (road / street).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-12",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "この 道を まっすぐ 行くと、駅が あります。",
    "target": "駅",
    "options": [
      "1. えき",
      "2. はし",
      "3. いえ",
      "4. もん"
    ],
    "correct": 0,
    "explanation": "駅 is read as えき (train station).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-13",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "料理を 作るのが 好きです。",
    "target": "料理",
    "options": [
      "1. りょり",
      "2. りょうり",
      "3. りより",
      "4. りようり"
    ],
    "correct": 1,
    "explanation": "料理 is read as りょうり (cooking / cuisine).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m1-14",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 187)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "料理を 作るのが 好きです。",
    "target": "作る",
    "options": [
      "1. つくる",
      "2. うくる",
      "3. おくる",
      "4. とる"
    ],
    "correct": 0,
    "explanation": "作る is read as つくる (to make / cook).",
    "imageSrc": "/question_pic_N4/image copy 6.png"
  },
  {
    "id": "n4-u4-m2-1",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "かぞくで りょこうに いきました。",
    "target": "かぞく",
    "options": [
      "1. 家族",
      "2. 豕族",
      "3. 家旅",
      "4. 豕旅"
    ],
    "correct": 0,
    "explanation": "かぞく in kanji is 家族 (family).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-2",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "かぞくで りょこうに いきました。",
    "target": "りょこう",
    "options": [
      "1. 旅向",
      "2. 旅行",
      "3. 族行",
      "4. 旅高"
    ],
    "correct": 1,
    "explanation": "りょこう in kanji is 旅行 (travel / trip).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-3",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "みちを おしえて ください。",
    "target": "みち",
    "options": [
      "1. 道",
      "2. 首",
      "3. 通",
      "4. 導"
    ],
    "correct": 0,
    "explanation": "みち in kanji is 道 (way / street).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-4",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "みちを おしえて ください。",
    "target": "おしえて",
    "options": [
      "1. 習えて",
      "2. 散えて",
      "3. 教えて",
      "4. 数えて"
    ],
    "correct": 2,
    "explanation": "おしえて in kanji is 教えて (to teach / tell).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-5",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "ゆうがたから あめが ふるでしょう。",
    "target": "ゆうがた",
    "options": [
      "1. 夕方",
      "2. 夜方",
      "3. 晩方",
      "4. 朝方"
    ],
    "correct": 0,
    "explanation": "ゆうがた in kanji is 夕方 (evening).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-6",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "ゆうがたから あめが ふるでしょう。",
    "target": "ふる",
    "options": [
      "1. 降る",
      "2. 落ちる",
      "3. 降りる",
      "4. 飛ぶ"
    ],
    "correct": 0,
    "explanation": "ふる in kanji is 降る (to fall / rain).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-7",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "あさはやく おきて、さんぽしました。",
    "target": "あさはやく",
    "options": [
      "1. 朝早く",
      "2. 昼早く",
      "3. 夜早く",
      "4. 晩早く"
    ],
    "correct": 0,
    "explanation": "あさはやく in kanji is 朝早く (early in the morning).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-8",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "あさはやく おきて、さんぽしました。",
    "target": "おきて",
    "options": [
      "1. 起きて",
      "2. 歩きて",
      "3. 走きて",
      "4. 止きて"
    ],
    "correct": 0,
    "explanation": "おきて in kanji is 起きて (woke up).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-9",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "えきの まえで ともだちを まちました。",
    "target": "えき",
    "options": [
      "1. 駅",
      "2. 訳",
      "3. 釈",
      "4. 尺"
    ],
    "correct": 0,
    "explanation": "えき in kanji is 駅 (station).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-10",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "えきの まえで ともだちを まちました。",
    "target": "まちました",
    "options": [
      "1. 持ちました",
      "2. 待ちました",
      "3. 侍ちました",
      "4. 特ちました"
    ],
    "correct": 1,
    "explanation": "まちました in kanji is 待ちました (waited).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-11",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "この おんがくは ゆうめいです。",
    "target": "おんがく",
    "options": [
      "1. 音楽",
      "2. 暗楽",
      "3. 音薬",
      "4. 暗薬"
    ],
    "correct": 0,
    "explanation": "おんがく in kanji is 音楽 (music).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-12",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "この おんがくは ゆうめいです。",
    "target": "ゆうめい",
    "options": [
      "1. 有名",
      "2. 友名",
      "3. 又名",
      "4. 反名"
    ],
    "correct": 0,
    "explanation": "ゆうめい in kanji is 有名 (famous).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-13",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "うみで およぎました。",
    "target": "うみ",
    "options": [
      "1. 海",
      "2. 毎",
      "3. 湖",
      "4. 池"
    ],
    "correct": 0,
    "explanation": "うみ in kanji is 海 (sea).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u4-m2-14",
    "unitId": "unit_10_12",
    "unitTitle": "Lessons 10–12 Review (Page 188)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "うみで およぎました。",
    "target": "およぎました",
    "options": [
      "1. 泳ぎました",
      "2. 浴ぎました",
      "3. 泣ぎました",
      "4. 波ぎました"
    ],
    "correct": 0,
    "explanation": "およぎました in kanji is 泳ぎました (swam).",
    "imageSrc": "/question_pic_N4/image copy 7.png"
  },
  {
    "id": "n4-u5-m1-1",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "休みの 日は いつも 主人が 料理を します。",
    "target": "主人",
    "options": [
      "1. しゅうじん",
      "2. しゅじん",
      "3. しゅしん",
      "4. しゅじん"
    ],
    "correct": 1,
    "explanation": "主人 is read as しゅじん (husband / master).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-2",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "休みの 日は いつも 主人が 料理を します。",
    "target": "料理",
    "options": [
      "1. りょおり",
      "2. りょうり",
      "3. りょり",
      "4. りようり"
    ],
    "correct": 1,
    "explanation": "料理 is read as りょうり (cooking / cuisine).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-3",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "母の しゅみは 人形を 作る ことです。",
    "target": "人形",
    "options": [
      "1. じんぎょう",
      "2. にんぎょう",
      "3. ひとぎょう",
      "4. にんきょう"
    ],
    "correct": 1,
    "explanation": "人形 is read as にんぎょう (doll / figure).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-4",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "母の しゅみは 人形を 作る ことです。",
    "target": "作る",
    "options": [
      "1. さくる",
      "2. すくる",
      "3. つくる",
      "4. ずくる"
    ],
    "correct": 2,
    "explanation": "作る is read as つくる (to make).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-5",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "国から 食料品が たくさん 送られて きました。",
    "target": "食料品",
    "options": [
      "1. しくりょうひん",
      "2. しょくりうひん",
      "3. しょくりょうしん",
      "4. しょくりょうひん"
    ],
    "correct": 3,
    "explanation": "食料品 is read as しょくりょうひん (groceries / foodstuffs).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-6",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "国から 食料品が たくさん 送られて きました。",
    "target": "送られて",
    "options": [
      "1. あげられて",
      "2. おくられて",
      "3. つくられて",
      "4. とおられて"
    ],
    "correct": 1,
    "explanation": "送られて is read as おくられて (sent).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-7",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "この かばんは 形は いいけれど、色が すきじゃありません。",
    "target": "形",
    "options": [
      "1. けい",
      "2. かたし",
      "3. かたち",
      "4. かだち"
    ],
    "correct": 2,
    "explanation": "形 is read as かたち (shape / form).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-8",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "この かばんは 形は いいけれど、色が すきじゃありません。",
    "target": "色",
    "options": [
      "1. いら",
      "2. いろ",
      "3. いる",
      "4. しな"
    ],
    "correct": 1,
    "explanation": "色 is read as いろ (color).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-9",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "あの スーパーは お米も 野菜も 安いです。",
    "target": "お米",
    "options": [
      "1. おこみ",
      "2. おこめ",
      "3. おはん",
      "4. おごめ"
    ],
    "correct": 1,
    "explanation": "お米 is read as おこめ (uncooked rice).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-10",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "あの スーパーは お米も 野菜も 安いです。",
    "target": "野菜",
    "options": [
      "1. やせい",
      "2. やすい",
      "3. やちゃい",
      "4. やさい"
    ],
    "correct": 3,
    "explanation": "野菜 is read as やさい (vegetables).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-11",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "国民が 安心して 生活できる 国に したいです。",
    "target": "国民",
    "options": [
      "1. ごくみん",
      "2. こつみん",
      "3. こくみん",
      "4. くにみん"
    ],
    "correct": 2,
    "explanation": "国民 is read as こくみん (citizens / people).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-12",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "国民が 安心して 生活できる 国に したいです。",
    "target": "生活",
    "options": [
      "1. せいかつ",
      "2. せえかつ",
      "3. せかつ",
      "4. せいかづ"
    ],
    "correct": 0,
    "explanation": "生活 is read as せいかつ (life / living).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-13",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "軽くて、使いやすい パソコンを 買いたいです。",
    "target": "軽くて",
    "options": [
      "1. かろくて",
      "2. がるくて",
      "3. かるくて",
      "4. からくて"
    ],
    "correct": 2,
    "explanation": "軽くて is read as かるくて (light in weight).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m1-14",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 207)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "軽くて、使いやすい パソコンを 買いたいです。",
    "target": "使いやすい",
    "options": [
      "1. つかいやすい",
      "2. すかいやすい",
      "3. ずかいやすい",
      "4. しかいやすい"
    ],
    "correct": 0,
    "explanation": "使いやすい is read as つかいやすい (easy to use).",
    "imageSrc": "/question_pic_N4/image copy 8.png"
  },
  {
    "id": "n4-u5-m2-1",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "母の かわりに ふくを クリーニング屋へ もっていきました。",
    "target": "かわりに",
    "options": [
      "1. 変わり",
      "2. 代わり",
      "3. 化わり",
      "4. 貸わり"
    ],
    "correct": 1,
    "explanation": "かわりに in kanji is 代わりに (in place of / instead).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-2",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "母の かわりに ふくを クリーニング屋へ もっていきました。",
    "target": "ふく",
    "options": [
      "1. 販",
      "2. 服",
      "3. 阪",
      "4. 股"
    ],
    "correct": 1,
    "explanation": "ふく in kanji is 服 (clothes).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-3",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "ばんごはんは とりにくの カレーに しましょう。",
    "target": "ばんごはん",
    "options": [
      "1. 晩ご飯",
      "2. 免ご飯",
      "3. 勉ご飯",
      "4. 夕ご飯"
    ],
    "correct": 0,
    "explanation": "ばんごはん in kanji is 晩ご飯 (dinner).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-4",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "ばんごはんは とりにくの カレーに しましょう。",
    "target": "とりにく",
    "options": [
      "1. 豚肉",
      "2. 牛肉",
      "3. 生肉",
      "4. 鳥肉"
    ],
    "correct": 3,
    "explanation": "とりにく in kanji is 鳥肉 / 鶏肉 (chicken meat).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-5",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "さんぽの あとで、いぬの 足を あらいます。",
    "target": "いぬ",
    "options": [
      "1. 伏",
      "2. 犬",
      "3. 太",
      "4. 大"
    ],
    "correct": 1,
    "explanation": "いぬ in kanji is 犬 (dog).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-6",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "さんぽの あとで、いぬの 足を あらいます。",
    "target": "あらいます",
    "options": [
      "1. 洗います",
      "2. 決います",
      "3. 侁います",
      "4. 洗います"
    ],
    "correct": 0,
    "explanation": "あらいます in kanji is 洗います (to wash).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-7",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "としょかんに かがくや ちりの せんもんの 本が ありますか。",
    "target": "かがく",
    "options": [
      "1. 科学",
      "2. 杵学",
      "3. 料学",
      "4. 禾学"
    ],
    "correct": 0,
    "explanation": "かがく in kanji is 科学 (science).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-8",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "としょかんに かがくや ちりの せんもんの 本が ありますか。",
    "target": "ちり",
    "options": [
      "1. 地利",
      "2. 地理",
      "3. 池理",
      "4. 他理"
    ],
    "correct": 1,
    "explanation": "ちり in kanji is 地理 (geography).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-9",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "この 店の コーヒーは 母の いれた コーヒーと おなじ あじだ。",
    "target": "おなじ",
    "options": [
      "1. 周じ",
      "2. 同じ",
      "3. 円じ",
      "4. 向じ"
    ],
    "correct": 1,
    "explanation": "おなじ in kanji is 同じ (same).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-10",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "この 店の コーヒーは 母の いれた コーヒーと おなじ あじだ。",
    "target": "あじ",
    "options": [
      "1. 妹",
      "2. 味",
      "3. 昧",
      "4. 未"
    ],
    "correct": 1,
    "explanation": "あじ in kanji is 味 (taste / flavor).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-11",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "おてあらいは どこですか。あの ちゃいろの ドアです。",
    "target": "おてあらい",
    "options": [
      "1. お手洗い",
      "2. お毛洗い",
      "3. お手洗",
      "4. お毛洗"
    ],
    "correct": 0,
    "explanation": "おてあらい in kanji is お手洗い (restroom).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-12",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "おてあらいは どこですか。あの ちゃいろの ドアです。",
    "target": "ちゃいろ",
    "options": [
      "1. 茶色",
      "2. 荼色",
      "3. 荅色",
      "4. 茜色"
    ],
    "correct": 0,
    "explanation": "ちゃいろ in kanji is 茶色 (brown color).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-13",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "テストが おわったら、本を かえして ください。",
    "target": "おわったら",
    "options": [
      "1. 始わったら",
      "2. 終わったら",
      "3. 柊わったら",
      "4. 絡わったら"
    ],
    "correct": 1,
    "explanation": "おわったら in kanji is 終わったら (when finished).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u5-m2-14",
    "unitId": "unit_13_15",
    "unitTitle": "Lessons 13–15 Review (Page 208)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "テストが おわったら、本を かえして ください。",
    "target": "かえして",
    "options": [
      "1. 返して",
      "2. 反して",
      "3. 仮して",
      "4. 販して"
    ],
    "correct": 0,
    "explanation": "かえして in kanji is 返して (to return).",
    "imageSrc": "/question_pic_N4/image copy 9.png"
  },
  {
    "id": "n4-u6-m1-1",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "映画館で アニメを 見てから、買い物を しました。",
    "target": "映画館",
    "options": [
      "1. えいがかん",
      "2. ええがかん",
      "3. えいかがん",
      "4. ええかがん"
    ],
    "correct": 0,
    "explanation": "映画館 is read as えいがかん (movie theater).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-2",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "映画館で アニメを 見てから、買い物を しました。",
    "target": "買い物",
    "options": [
      "1. かいもん",
      "2. けいもん",
      "3. かいもの",
      "4. がいもの"
    ],
    "correct": 2,
    "explanation": "買い物 is read as かいもの (shopping).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-3",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "友だちが 入院しているので、花を 買って行きました。",
    "target": "入院",
    "options": [
      "1. にゆいん",
      "2. にゅういん",
      "3. にんいん",
      "4. にゆいいん"
    ],
    "correct": 1,
    "explanation": "入院 is read as にゅういん (hospitalization).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-4",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "友だちが 入院しているので、花を 買って行きました。",
    "target": "花",
    "options": [
      "1. かみ",
      "2. さくら",
      "3. はな",
      "4. あな"
    ],
    "correct": 2,
    "explanation": "花 is read as はな (flower).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-5",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "毎日 自転車で 学校へ 通っています。",
    "target": "自転車",
    "options": [
      "1. じどうしゃ",
      "2. じてんしゃ",
      "3. じとうしゃ",
      "4. じでんしゃ"
    ],
    "correct": 1,
    "explanation": "自転車 is read as じてんしゃ (bicycle).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-6",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "毎日 自転車で 学校へ 通っています。",
    "target": "通って",
    "options": [
      "1. とおって",
      "2. もどって",
      "3. わたって",
      "4. かよって"
    ],
    "correct": 3,
    "explanation": "通って is read as かよって (to commute / attend).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-7",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "日本人に 英語を 教えています。",
    "target": "英語",
    "options": [
      "1. ええご",
      "2. えご",
      "3. えいご",
      "4. えいこ"
    ],
    "correct": 2,
    "explanation": "英語 is read as えいご (English language).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-8",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "日本人に 英語を 教えています。",
    "target": "教えます",
    "options": [
      "1. おしえています",
      "2. おせえています",
      "3. おじえています",
      "4. あしえています"
    ],
    "correct": 0,
    "explanation": "教えます is read as おしえます (to teach).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-9",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "漢字は むずかしいですが、研究すると おもしろいです。",
    "target": "漢字",
    "options": [
      "1. はんじ",
      "2. はんし",
      "3. かんし",
      "4. かんじ"
    ],
    "correct": 3,
    "explanation": "漢字 is read as かんじ (Kanji).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-10",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "漢字は むずかしいですが、研究すると おもしろいです。",
    "target": "研究",
    "options": [
      "1. けんきゅ",
      "2. けんきゅう",
      "3. げんきゅう",
      "4. げんきゅ"
    ],
    "correct": 1,
    "explanation": "研究 is read as けんきゅう (research).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-11",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "毎週 土曜日は 図書館で 勉強します。",
    "target": "図書館",
    "options": [
      "1. としょかん",
      "2. としょかん",
      "3. とうしょかん",
      "4. とうしょかん"
    ],
    "correct": 0,
    "explanation": "図書館 is read as としょかん (library).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-12",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "毎週 土曜日は 図書館で 勉強します。",
    "target": "勉強",
    "options": [
      "1. べんぎょう",
      "2. べんきょ",
      "3. べんきょう",
      "4. べんきょっ"
    ],
    "correct": 2,
    "explanation": "勉強 is read as べんきょう (study).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-13",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "教室に 大きい 世界地図が はってあります。",
    "target": "教室",
    "options": [
      "1. きょしち",
      "2. きよしつ",
      "3. きょうしづ",
      "4. きょうしつ"
    ],
    "correct": 3,
    "explanation": "教室 is read as きょうしつ (classroom).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m1-14",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 227)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "教室に 大きい 世界地図が はってあります。",
    "target": "世界地図",
    "options": [
      "1. せいかちづ",
      "2. せかいちじゅ",
      "3. せかいちず",
      "4. せいかちず"
    ],
    "correct": 2,
    "explanation": "世界地図 is read as せかいちず (world map).",
    "imageSrc": "/question_pic_N4/image copy 10.png"
  },
  {
    "id": "n4-u6-m2-1",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "この こうじょうは １年前に たてられました。",
    "target": "こうじょう",
    "options": [
      "1. 工陽",
      "2. 工業",
      "3. 工場",
      "4. 巧場"
    ],
    "correct": 2,
    "explanation": "こうじょう in kanji is 工場 (factory).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-2",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "この こうじょうは １年前に たてられました。",
    "target": "たてられました",
    "options": [
      "1. 立てられました",
      "2. 建てられました",
      "3. 立られました",
      "4. 建られました"
    ],
    "correct": 1,
    "explanation": "たてられました in kanji is 建てられました (was built).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-3",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "わたしの しゅみは 車を うんてんすることと 外国語を ならうことです。",
    "target": "うんてん",
    "options": [
      "1. 蓮転",
      "2. 運車",
      "3. 運転",
      "4. 連軻"
    ],
    "correct": 2,
    "explanation": "うんてん in kanji is 運転 (driving).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-4",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "わたしの しゅみは 車を うんてんすることと 外国語を ならうことです。",
    "target": "ならう",
    "options": [
      "1. 習う",
      "2. 教う",
      "3. 送う",
      "4. 翌う"
    ],
    "correct": 0,
    "explanation": "ならう in kanji is 習う (to learn).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-5",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "日本を 朝 しゅっぱつすると、夜 国へ つきます。",
    "target": "しゅっぱつ",
    "options": [
      "1. 到着",
      "2. 出発",
      "3. 帰着",
      "4. 進発"
    ],
    "correct": 1,
    "explanation": "しゅっぱつ in kanji is 出発 (departure).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-6",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "日本を 朝 しゅっぱつすると、夜 国へ つきます。",
    "target": "つきます",
    "options": [
      "1. 暑きます",
      "2. 付きます",
      "3. 着きます",
      "4. 使きます"
    ],
    "correct": 2,
    "explanation": "つきます in kanji is 着きます (to arrive).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-7",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "国へ かえる前に たいしかんへ 行きました。",
    "target": "かえる",
    "options": [
      "1. 送る",
      "2. 返る",
      "3. 帰る",
      "4. 変る"
    ],
    "correct": 2,
    "explanation": "かえる in kanji is 帰る (to return home).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-8",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "国へ かえる前に たいしかんへ 行きました。",
    "target": "たいしかん",
    "options": [
      "1. 太使館",
      "2. 大作館",
      "3. 大使院",
      "4. 大使館"
    ],
    "correct": 3,
    "explanation": "たいしかん in kanji is 大使館 (embassy).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-9",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "じどうしゃが 多いですから、しんごうを わたるときは 気をつけてください。",
    "target": "じどうしゃ",
    "options": [
      "1. 自動車",
      "2. 自転車",
      "3. 自働車",
      "4. 自重車"
    ],
    "correct": 0,
    "explanation": "じどうしゃ in kanji is 自動車 (automobile / car).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-10",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "じどうしゃが 多いですから、しんごうを わたるときは 気をつけてください。",
    "target": "しんごう",
    "options": [
      "1. 信語",
      "2. 進号",
      "3. 信号",
      "4. 新号"
    ],
    "correct": 2,
    "explanation": "しんごう in kanji is 信号 (traffic light / signal).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-11",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "パーティーに 何を きていくか かんがえます。",
    "target": "きて",
    "options": [
      "1. 来て",
      "2. 着て",
      "3. 切て",
      "4. 帰て"
    ],
    "correct": 1,
    "explanation": "きて (wear clothes) in kanji is 着て (to wear).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-12",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "パーティーに 何を きていくか かんがえます。",
    "target": "かんがえます",
    "options": [
      "1. 教えます",
      "2. 習えます",
      "3. 考えます",
      "4. 伝えます"
    ],
    "correct": 2,
    "explanation": "かんがえます in kanji is 考えます (to think / consider).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-13",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "タクシーに のって びょういんへ 行きました。",
    "target": "のって",
    "options": [
      "1. 思って",
      "2. 乗って",
      "3. 着って",
      "4. 通って"
    ],
    "correct": 1,
    "explanation": "のって in kanji is 乗って (to ride).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u6-m2-14",
    "unitId": "unit_16_18",
    "unitTitle": "Lessons 16–18 Review (Page 228)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "タクシーに のって びょういんへ 行きました。",
    "target": "びょういん",
    "options": [
      "1. 病院",
      "2. 医院",
      "3. 疾院",
      "4. 病腕"
    ],
    "correct": 0,
    "explanation": "びょういん in kanji is 病院 (hospital).",
    "imageSrc": "/question_pic_N4/image copy 11.png"
  },
  {
    "id": "n4-u7-m1-1",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "質問の 意味を 考えました。",
    "target": "質問",
    "options": [
      "1. しちもん",
      "2. しちかん",
      "3. しつもん",
      "4. しつかん"
    ],
    "correct": 2,
    "explanation": "質問 is read as しつもん (question).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-2",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "質問の 意味を 考えました。",
    "target": "意味",
    "options": [
      "1. いみ",
      "2. いまい",
      "3. おとみ",
      "4. いあじ"
    ],
    "correct": 0,
    "explanation": "意味 is read as いみ (meaning).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-3",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "問題集を 開いて ください。",
    "target": "問題集",
    "options": [
      "1. もんでいしゅ",
      "2. もんだいしゅう",
      "3. もんだいしゅ",
      "4. もんだいじゅう"
    ],
    "correct": 1,
    "explanation": "問題集 is read as もんだいしゅう (workbook / exercise book).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-4",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "問題集を 開いて ください。",
    "target": "開いて",
    "options": [
      "1. あいて",
      "2. ひらいて",
      "3. といて",
      "4. きいて"
    ],
    "correct": 1,
    "explanation": "開いて is read as ひらいて (to open a book).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-5",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "試験が 何時に はじまるか 知っていますか。",
    "target": "試験",
    "options": [
      "1. じけん",
      "2. じっけん",
      "3. しけん",
      "4. しっけん"
    ],
    "correct": 2,
    "explanation": "試験 is read as しけん (examination / test).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-6",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "試験が 何時に はじまるか 知っていますか。",
    "target": "知っていますか",
    "options": [
      "1. していますか",
      "2. しっていますか",
      "3. ちっていますか",
      "4. まっていますか"
    ],
    "correct": 1,
    "explanation": "知っていますか is read as しっていますか (do you know?).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-7",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "引き出しの 中に 説明書が あります。",
    "target": "引き出し",
    "options": [
      "1. ひきでし",
      "2. ひきだし",
      "3. びきでし",
      "4. ひきたし"
    ],
    "correct": 1,
    "explanation": "引き出し is read as ひきだし (drawer).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-8",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "引き出しの 中に 説明書が あります。",
    "target": "説明書",
    "options": [
      "1. せつめいしょ",
      "2. せつめいしょう",
      "3. せちめいしょ",
      "4. せちめえしょう"
    ],
    "correct": 0,
    "explanation": "説明書 is read as せつめいしょ (instruction manual).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-9",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "あすから 旅行するので 今 用意を しています。",
    "target": "旅行",
    "options": [
      "1. りょうこう",
      "2. りょこう",
      "3. りよこう",
      "4. りょごう"
    ],
    "correct": 1,
    "explanation": "旅行 is read as りょこう (travel).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-10",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "あすから 旅行するので 今 用意を しています。",
    "target": "用意",
    "options": [
      "1. じゅんび",
      "2. じゅんい",
      "3. よい",
      "4. ようい"
    ],
    "correct": 3,
    "explanation": "用意 is read as ようい (preparation).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-11",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "門は 8時に 閉まります。",
    "target": "門",
    "options": [
      "1. かど",
      "2. あいだ",
      "3. もん",
      "4. かん"
    ],
    "correct": 2,
    "explanation": "門 is read as もん (gate).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-12",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "門は 8時に 閉まります。",
    "target": "閉まります",
    "options": [
      "1. ちまります",
      "2. じまります",
      "3. つまります",
      "4. しまります"
    ],
    "correct": 3,
    "explanation": "閉まります is read as しまります (to close / shut).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-13",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "日曜日 都合が よければ みんなで 集まりませんか。",
    "target": "都合",
    "options": [
      "1. つごう",
      "2. つあい",
      "3. とあい",
      "4. すごう"
    ],
    "correct": 0,
    "explanation": "都合 is read as つごう (convenience / schedule).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m1-14",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 241)",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "日曜日 都合が よければ みんなで 集まりませんか。",
    "target": "集まりませんか",
    "options": [
      "1. まとまりませんか",
      "2. あつまりませんか",
      "3. しまりませんか",
      "4. あすまりませんか"
    ],
    "correct": 1,
    "explanation": "集まりませんか is read as あつまりませんか (won't you gather / meet up?).",
    "imageSrc": "/question_pic_N4/image copy 12.png"
  },
  {
    "id": "n4-u7-m2-1",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-①",
    "sentence": "しつもんが むずかしかったので こたえられませんでした。",
    "target": "しつもん",
    "options": [
      "1. 資門",
      "2. 質問",
      "3. 資問",
      "4. 質問"
    ],
    "correct": 3,
    "explanation": "しつもん in kanji is 質問 (question).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-2",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1-②",
    "sentence": "しつもんが むずかしかったので こたえられませんでした。",
    "target": "こたえ",
    "options": [
      "1. 合え",
      "2. 答え",
      "3. 谷え",
      "4. 荅え"
    ],
    "correct": 1,
    "explanation": "こたえ in kanji is 答え (answer).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-3",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-③",
    "sentence": "かぞくに おみやげを 買おうと おもって います。",
    "target": "かぞく",
    "options": [
      "1. 家族",
      "2. 豕族",
      "3. 家旅",
      "4. 豕旅"
    ],
    "correct": 0,
    "explanation": "かぞく in kanji is 家族 (family).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-4",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2-④",
    "sentence": "かぞくに おみやげを 買おうと おもって います。",
    "target": "おもって",
    "options": [
      "1. 思って",
      "2. 恩って",
      "3. 悪って",
      "4. 想って"
    ],
    "correct": 0,
    "explanation": "おもって in kanji is 思って (thinking).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-5",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "まどを あけるときは そのレバーを ひいてください。",
    "target": "あける",
    "options": [
      "1. 開ける",
      "2. 閉ける",
      "3. 聞ける",
      "4. 閃ける"
    ],
    "correct": 0,
    "explanation": "あける in kanji is 開ける (to open).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-6",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "まどを あけるときは そのレバーを ひいてください。",
    "target": "ひいて",
    "options": [
      "1. 弓いて",
      "2. 弱いて",
      "3. 引いて",
      "4. 弥いて"
    ],
    "correct": 2,
    "explanation": "ひいて in kanji is 引いて (to pull).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-7",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "しけんの 時間に まにあいませんでした。",
    "target": "しけん",
    "options": [
      "1. 実験",
      "2. 試験",
      "3. 実検",
      "4. 試検"
    ],
    "correct": 1,
    "explanation": "しけん in kanji is 試験 (exam).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-8",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑧",
    "sentence": "しけんの 時間に まにあいませんでした。",
    "target": "まにあい",
    "options": [
      "1. 間に合い",
      "2. 問に会い",
      "3. 間に会い",
      "4. 問に合い"
    ],
    "correct": 0,
    "explanation": "まにあい in kanji is 間に合い (to be in time for).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-9",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑨",
    "sentence": "きょねん 10年間 かっていた 犬が しにました。",
    "target": "きょねん",
    "options": [
      "1. 去年",
      "2. 走年",
      "3. 去手",
      "4. 支年"
    ],
    "correct": 0,
    "explanation": "きょねん in kanji is 去年 (last year).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-10",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-⑩",
    "sentence": "きょねん 10年間 かっていた 犬が しにました。",
    "target": "しにました",
    "options": [
      "1. 列にました",
      "2. 犯にました",
      "3. 花にました",
      "4. 死にました"
    ],
    "correct": 3,
    "explanation": "しにました in kanji is 死にました (died).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-11",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑪",
    "sentence": "そのかわいい メモようしは どこでうっていますか。",
    "target": "ようし",
    "options": [
      "1. 用低",
      "2. 車紙",
      "3. 用紙",
      "4. 用祇"
    ],
    "correct": 2,
    "explanation": "ようし in kanji is 用紙 (form / memo pad / paper).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-12",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-⑫",
    "sentence": "そのかわいい メモようしは どこでうっていますか。",
    "target": "うって",
    "options": [
      "1. 売って",
      "2. 賣って",
      "3. 読って",
      "4. 壱って"
    ],
    "correct": 0,
    "explanation": "うって in kanji is 売って (selling).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-13",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑬",
    "sentence": "先生が 漢字の いみを せつめいしてくれました。",
    "target": "いみ",
    "options": [
      "1. 意味",
      "2. 竜未",
      "3. 意未",
      "4. 産味"
    ],
    "correct": 0,
    "explanation": "いみ in kanji is 意味 (meaning).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u7-m2-14",
    "unitId": "unit_19_20",
    "unitTitle": "Lessons 19–20 Review (Page 242)",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7-⑭",
    "sentence": "先生が 漢字の いみを せつめいしてくれました。",
    "target": "せつめい",
    "options": [
      "1. 悦明",
      "2. 脱朋",
      "3. 説明",
      "4. 説朋"
    ],
    "correct": 2,
    "explanation": "せつめい in kanji is 説明 (explanation).",
    "imageSrc": "/question_pic_N4/image copy 13.png"
  },
  {
    "id": "n4-u8-m1-1",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1",
    "sentence": "兄は 私より 背が 高いです。",
    "target": "兄",
    "options": [
      "1. おとうと",
      "2. あに",
      "3. おねえさん",
      "4. おにいさん"
    ],
    "correct": 1,
    "explanation": "兄 is あに (older brother).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-2",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2",
    "sentence": "兄は 私より 背が 高いです。",
    "target": "背",
    "options": [
      "1. せ",
      "2. せい",
      "3. て",
      "4. てい"
    ],
    "correct": 0,
    "explanation": "背 is せ (height).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-3",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3",
    "sentence": "弟と 妹は 毎日 元気に あそんでいます。",
    "target": "弟",
    "options": [
      "1. いもうと",
      "2. おとうと",
      "3. あに",
      "4. あね"
    ],
    "correct": 1,
    "explanation": "弟 is おとうと (younger brother).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-4",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4",
    "sentence": "弟と 妹は 毎日 元気に あそんでいます。",
    "target": "妹",
    "options": [
      "1. いもうと",
      "2. おとうと",
      "3. あに",
      "4. あね"
    ],
    "correct": 0,
    "explanation": "妹 is いもうと (younger sister).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-5",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5",
    "sentence": "この 旅館の 部屋は 広くて 明るいです。",
    "target": "旅館",
    "options": [
      "1. りょかん",
      "2. ろかん",
      "3. りょがん",
      "4. ろがん"
    ],
    "correct": 0,
    "explanation": "旅館 is りょかん (inn).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-6",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6",
    "sentence": "この 旅館の 部屋は 広くて 明るいです。",
    "target": "明るい",
    "options": [
      "1. あかるい",
      "2. ひろい",
      "3. くろい",
      "4. あおい"
    ],
    "correct": 0,
    "explanation": "明るい is あかるい (bright).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-7",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7",
    "sentence": "朝 ご飯を 食べてから、会社へ 行きます。",
    "target": "朝",
    "options": [
      "1. よる",
      "2. あさ",
      "3. ひる",
      "4. ゆうがた"
    ],
    "correct": 1,
    "explanation": "朝 is あさ (morning).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-8",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "8",
    "sentence": "朝 ご飯を 食べてから、会社へ 行きます。",
    "target": "ご飯",
    "options": [
      "1. ごはん",
      "2. おちゃ",
      "3. パン",
      "4. みず"
    ],
    "correct": 0,
    "explanation": "ご飯 is ごはん (meal).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-9",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "9",
    "sentence": "母は 料理を 作るのが 上手です。",
    "target": "母",
    "options": [
      "1. はは",
      "2. ちち",
      "3. あね",
      "4. おば"
    ],
    "correct": 0,
    "explanation": "母 is はは (mother).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-10",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "10",
    "sentence": "母は 料理を 作るのが 上手です。",
    "target": "料理",
    "options": [
      "1. りょうり",
      "2. りょり",
      "3. りより",
      "4. りようり"
    ],
    "correct": 0,
    "explanation": "料理 is りょうり (cooking).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-11",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "11",
    "sentence": "友だちと 神社へ 行きました。",
    "target": "友だち",
    "options": [
      "1. ともたち",
      "2. ともだち",
      "3. どもたち",
      "4. どもだち"
    ],
    "correct": 1,
    "explanation": "友だち is ともだち (friend).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-12",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "12",
    "sentence": "友だちと 神社へ 行きました。",
    "target": "神社",
    "options": [
      "1. かみしゃ",
      "2. じんしゃ",
      "3. じんじゃ",
      "4. かみじゃ"
    ],
    "correct": 2,
    "explanation": "神社 is じんじゃ (shrine).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-13",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "13",
    "sentence": "教室で 日本語を 勉強しています。",
    "target": "教室",
    "options": [
      "1. きょうしつ",
      "2. きょうしづ",
      "3. きょしつ",
      "4. きょうじつ"
    ],
    "correct": 0,
    "explanation": "教室 is きょうしつ (classroom).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-14",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 249",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "14",
    "sentence": "教室で 日本語を 勉強しています。",
    "target": "勉強",
    "options": [
      "1. べんきょう",
      "2. べんきょ",
      "3. べんぎょう",
      "4. べんごう"
    ],
    "correct": 0,
    "explanation": "勉強 is べんきょう (study).",
    "imageSrc": "/question_pic_N4/image copy 14.png"
  },
  {
    "id": "n4-u8-m1-15",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "15",
    "sentence": "病院で 薬を もらいました。",
    "target": "病院",
    "options": [
      "1. びょういん",
      "2. びょいん",
      "3. びょうえん",
      "4. びょえん"
    ],
    "correct": 0,
    "explanation": "病院 is びょういん (hospital).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-16",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "16",
    "sentence": "病院で 薬を もらいました。",
    "target": "薬",
    "options": [
      "1. くすり",
      "2. ぐすり",
      "3. こすり",
      "4. ざい"
    ],
    "correct": 0,
    "explanation": "薬 is くすり (medicine).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-17",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "17",
    "sentence": "夕方から 雨が 降るでしょう。",
    "target": "夕方",
    "options": [
      "1. ゆうがた",
      "2. ゆうかた",
      "3. ゆがた",
      "4. よるがた"
    ],
    "correct": 0,
    "explanation": "夕方 is ゆうがた (evening).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-18",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "18",
    "sentence": "夕方から 雨が 降るでしょう。",
    "target": "降る",
    "options": [
      "1. ふる",
      "2. おる",
      "3. くだる",
      "4. つもる"
    ],
    "correct": 0,
    "explanation": "降る is ふる (to fall / rain).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-19",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "19",
    "sentence": "旅行に 行く 計画を 立てました。",
    "target": "旅行",
    "options": [
      "1. りょこう",
      "2. りょごう",
      "3. りょうこう",
      "4. りょうごう"
    ],
    "correct": 0,
    "explanation": "旅行 is りょこう (travel).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-20",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "20",
    "sentence": "旅行に 行く 計画を 立てました。",
    "target": "計画",
    "options": [
      "1. けいかく",
      "2. けいがく",
      "3. けいこく",
      "4. けいが"
    ],
    "correct": 0,
    "explanation": "計画 is けいかく (plan).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-21",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "21",
    "sentence": "体の 調子が 悪いです。",
    "target": "体",
    "options": [
      "1. からだ",
      "2. あたま",
      "3. こころ",
      "4. かお"
    ],
    "correct": 0,
    "explanation": "体 is からだ (body).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-22",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "22",
    "sentence": "体の 調子が 悪いです。",
    "target": "悪い",
    "options": [
      "1. わるい",
      "2. くるい",
      "3. つらい",
      "4. くらい"
    ],
    "correct": 0,
    "explanation": "悪い is わるい (bad).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-23",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "23",
    "sentence": "自転車に 乗って 駅へ 行きます。",
    "target": "自転車",
    "options": [
      "1. じてんしゃ",
      "2. じどうしゃ",
      "3. じしゃ",
      "4. でんしゃ"
    ],
    "correct": 0,
    "explanation": "自転車 is じてんしゃ (bicycle).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-24",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "24",
    "sentence": "自転車に 乗って 駅へ 行きます。",
    "target": "乗って",
    "options": [
      "1. のって",
      "2. おって",
      "3. たって",
      "4. はしって"
    ],
    "correct": 0,
    "explanation": "乗って is のって (to ride).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-25",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "25",
    "sentence": "自分の 部屋で 音楽を 聞きます。",
    "target": "自分",
    "options": [
      "1. じふん",
      "2. じぶん",
      "3. じぶ",
      "4. じぷん"
    ],
    "correct": 1,
    "explanation": "自分 is じぶん (oneself).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-26",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "26",
    "sentence": "自分の 部屋で 音楽を 聞きます。",
    "target": "音楽",
    "options": [
      "1. おとがく",
      "2. おんがく",
      "3. おとらく",
      "4. おんらく"
    ],
    "correct": 1,
    "explanation": "音楽 is おんがく (music).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-27",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "27",
    "sentence": "休みの 日は いつも 主人が 料理を します。",
    "target": "主人",
    "options": [
      "1. しゅうじん",
      "2. しゅじん",
      "3. しゅしん",
      "4. しゅじん"
    ],
    "correct": 1,
    "explanation": "主人 is しゅじん (husband).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-28",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 250",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "28",
    "sentence": "国から 食料品が たくさん 送られて きました。",
    "target": "食料品",
    "options": [
      "1. しくりょうひん",
      "2. しょくりうひん",
      "3. しょくりょうしん",
      "4. しょくりょうひん"
    ],
    "correct": 3,
    "explanation": "食料品 is しょくりょうひん (groceries).",
    "imageSrc": "/question_pic_N4/image copy 15.png"
  },
  {
    "id": "n4-u8-m1-29",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "29",
    "sentence": "この かばんは 形は いいけれど、色が すきじゃありません。",
    "target": "形",
    "options": [
      "1. けい",
      "2. かたし",
      "3. かたち",
      "4. かだち"
    ],
    "correct": 2,
    "explanation": "形 is かたち (shape).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-30",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "30",
    "sentence": "この かばんは 形は いいけれど、色が すきじゃありません。",
    "target": "色",
    "options": [
      "1. いら",
      "2. いろ",
      "3. いる",
      "4. しな"
    ],
    "correct": 1,
    "explanation": "色 is いろ (color).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-31",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "31",
    "sentence": "あの スーパーは お米も 野菜も 安いです。",
    "target": "お米",
    "options": [
      "1. おこみ",
      "2. おこめ",
      "3. おはん",
      "4. おごめ"
    ],
    "correct": 1,
    "explanation": "お米 is おこめ (rice).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-32",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "32",
    "sentence": "あの スーパーは お米も 野菜も 安いです。",
    "target": "野菜",
    "options": [
      "1. やせい",
      "2. やすい",
      "3. やちゃい",
      "4. やさい"
    ],
    "correct": 3,
    "explanation": "野菜 is やさい (vegetables).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-33",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "33",
    "sentence": "軽くて、使いやすい パソコンを 買いたいです。",
    "target": "軽くて",
    "options": [
      "1. かろくて",
      "2. がるくて",
      "3. かるくて",
      "4. からくて"
    ],
    "correct": 2,
    "explanation": "軽くて is かるくて (lightweight).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-34",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "34",
    "sentence": "軽くて、使いやすい パソコンを 買いたいです。",
    "target": "使いやすい",
    "options": [
      "1. つかいやすい",
      "2. すかいやすい",
      "3. ずかいやすい",
      "4. しかいやすい"
    ],
    "correct": 0,
    "explanation": "使いやすい is つかいやすい (easy to use).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-35",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "35",
    "sentence": "映画館で アニメを 見てから、買い物を しました。",
    "target": "映画館",
    "options": [
      "1. えいがかん",
      "2. ええがかん",
      "3. えいかがん",
      "4. ええかがん"
    ],
    "correct": 0,
    "explanation": "映画館 is えいがかん (cinema).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-36",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "36",
    "sentence": "友だちが 入院しているので、花を 買って行きました。",
    "target": "入院",
    "options": [
      "1. にゆいん",
      "2. にゅういん",
      "3. にんいん",
      "4. にゆいいん"
    ],
    "correct": 1,
    "explanation": "入院 is にゅういん (hospitalization).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-37",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "37",
    "sentence": "漢字は むずかしいですが、研究すると おもしろいです。",
    "target": "漢字",
    "options": [
      "1. はんじ",
      "2. はんし",
      "3. かんし",
      "4. かんじ"
    ],
    "correct": 3,
    "explanation": "漢字 is かんじ (Kanji).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-38",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "38",
    "sentence": "漢字は むずかしいですが、研究すると おもしろいです。",
    "target": "研究",
    "options": [
      "1. けんきゅ",
      "2. けんきゅう",
      "3. げんきゅう",
      "4. げんきゅ"
    ],
    "correct": 1,
    "explanation": "研究 is けんきゅう (research).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-39",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "39",
    "sentence": "教室に 大きい 世界地図が はってあります。",
    "target": "世界地図",
    "options": [
      "1. せいかちづ",
      "2. せかいちじゅ",
      "3. せかいちず",
      "4. せいかちず"
    ],
    "correct": 2,
    "explanation": "世界地図 is せかいちず (world map).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-40",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "40",
    "sentence": "質問の 意味を 考えました。",
    "target": "質問",
    "options": [
      "1. しちもん",
      "2. しちかん",
      "3. しつもん",
      "4. しつかん"
    ],
    "correct": 2,
    "explanation": "質問 is しつもん (question).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-41",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "41",
    "sentence": "問題集を 開いて ください。",
    "target": "開いて",
    "options": [
      "1. あいて",
      "2. ひらいて",
      "3. といて",
      "4. きいて"
    ],
    "correct": 1,
    "explanation": "開いて is ひらいて (open).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m1-42",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 251",
    "section": "もんだい 1",
    "sectionInstruction": "_____ の ことばは ひらがなで どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "42",
    "sentence": "日曜日 都合が よければ みんなで 集まりませんか。",
    "target": "都合",
    "options": [
      "1. つごう",
      "2. つあい",
      "3. とあい",
      "4. すごう"
    ],
    "correct": 0,
    "explanation": "都合 is つごう (convenience / availability).",
    "imageSrc": "/question_pic_N4/image copy 16.png"
  },
  {
    "id": "n4-u8-m2-1",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "1",
    "sentence": "かのじょの へやは せまいです。",
    "target": "へや",
    "options": [
      "1. 部家",
      "2. 部屋",
      "3. 屋部",
      "4. 家部"
    ],
    "correct": 1,
    "explanation": "へや is 部屋 (room).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-2",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "2",
    "sentence": "かのじょの へやは せまいです。",
    "target": "せまい",
    "options": [
      "1. 狭い",
      "2. 狛い",
      "3. 挟い",
      "4. 抹い"
    ],
    "correct": 0,
    "explanation": "せまい is 狭い (narrow).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-3",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3",
    "sentence": "みせの まえに 車が とまっています。",
    "target": "まえ",
    "options": [
      "1. 後",
      "2. 前",
      "3. 右",
      "4. 左"
    ],
    "correct": 1,
    "explanation": "まえ is 前 (in front).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-4",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4",
    "sentence": "みせの まえに 車が とまっています。",
    "target": "とまって",
    "options": [
      "1. 止まって",
      "2. 正まって",
      "3. 走まって",
      "4. 歩まって"
    ],
    "correct": 0,
    "explanation": "とまって is 止まって (stopped).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-5",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5",
    "sentence": "この ふくは あたたかいですね。",
    "target": "ふく",
    "options": [
      "1. 服",
      "2. 股",
      "3. 板",
      "4. 坂"
    ],
    "correct": 0,
    "explanation": "ふく is 服 (clothes).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-6",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6",
    "sentence": "この ふくは あたたかいですね。",
    "target": "あたたかい",
    "options": [
      "1. 温かい",
      "2. 暑かい",
      "3. 涼かい",
      "4. 寒かい"
    ],
    "correct": 0,
    "explanation": "あたたかい is 温かい (warm).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-7",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "7",
    "sentence": "つめたい みずを 飲みたいです。",
    "target": "つめたい",
    "options": [
      "1. 冷たい",
      "2. 凍たい",
      "3. 涼たい",
      "4. 氷たい"
    ],
    "correct": 0,
    "explanation": "つめたい is 冷たい (cold).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-8",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "8",
    "sentence": "つめたい みずを 飲みたいです。",
    "target": "みず",
    "options": [
      "1. 氷",
      "2. 水",
      "3. 油",
      "4. 汁"
    ],
    "correct": 1,
    "explanation": "みず is 水 (water).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-9",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "9",
    "sentence": "あには あきに けっこんします。",
    "target": "あに",
    "options": [
      "1. 弟",
      "2. 兄",
      "3. 父",
      "4. 妹"
    ],
    "correct": 1,
    "explanation": "あに is 兄 (older brother).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-10",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "10",
    "sentence": "あには あきに けっこんします。",
    "target": "あき",
    "options": [
      "1. 春",
      "2. 夏",
      "3. 秋",
      "4. 冬"
    ],
    "correct": 2,
    "explanation": "あき is 秋 (autumn).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-11",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "11",
    "sentence": "ぎんこうの となりに ほんやが あります。",
    "target": "ぎんこう",
    "options": [
      "1. 銀行",
      "2. 金行",
      "3. 銀高",
      "4. 金高"
    ],
    "correct": 0,
    "explanation": "ぎんこう is 銀行 (bank).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-12",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "12",
    "sentence": "ぎんこうの となりに ほんやが あります。",
    "target": "ほんや",
    "options": [
      "1. 本屋",
      "2. 本室",
      "3. 本家",
      "4. 本所"
    ],
    "correct": 0,
    "explanation": "ほんや is 本屋 (bookstore).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-13",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "13",
    "sentence": "ひるごはんは にくやの べんとうです。",
    "target": "ひるごはん",
    "options": [
      "1. 朝ご飯",
      "2. 昼ご飯",
      "3. 晩ご飯",
      "4. 夜ご飯"
    ],
    "correct": 1,
    "explanation": "ひるごはん is 昼ご飯 (lunch).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-14",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 252",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "14",
    "sentence": "ひるごはんは にくやの べんとうです。",
    "target": "にくや",
    "options": [
      "1. 魚屋",
      "2. 肉屋",
      "3. 八百屋",
      "4. 本屋"
    ],
    "correct": 1,
    "explanation": "にくや is 肉屋 (butcher shop).",
    "imageSrc": "/question_pic_N4/image copy 17.png"
  },
  {
    "id": "n4-u8-m2-15",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "15",
    "sentence": "いもうとは おんがくが すきです。",
    "target": "いもうと",
    "options": [
      "1. 姉",
      "2. 妹",
      "3. 弟",
      "4. 兄"
    ],
    "correct": 1,
    "explanation": "いもうと is 妹 (younger sister).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-16",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "16",
    "sentence": "いもうとは おんがくが すきです。",
    "target": "おんがく",
    "options": [
      "1. 音楽",
      "2. 暗楽",
      "3. 音薬",
      "4. 暗薬"
    ],
    "correct": 0,
    "explanation": "おんがく is 音楽 (music).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-17",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "17",
    "sentence": "まいにち ３じかん べんきょうします。",
    "target": "まいにち",
    "options": [
      "1. 毎目",
      "2. 毎日",
      "3. 母日",
      "4. 舟日"
    ],
    "correct": 1,
    "explanation": "まいにち is 毎日 (every day).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-18",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "18",
    "sentence": "まいにち ３じかん べんきょうします。",
    "target": "３じかん",
    "options": [
      "1. ３時間",
      "2. ３時問",
      "3. ３侍間",
      "4. ３持間"
    ],
    "correct": 0,
    "explanation": "３じかん is ３時間 (3 hours).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-19",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "19",
    "sentence": "ゆうびんきょくで てがみを だしました。",
    "target": "ゆうびんきょく",
    "options": [
      "1. 郵便局",
      "2. 郵使局",
      "3. 郵行局",
      "4. 郵政局"
    ],
    "correct": 0,
    "explanation": "ゆうびんきょく is 郵便局 (post office).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-20",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "20",
    "sentence": "ゆうびんきょくで てがみを だしました。",
    "target": "てがみ",
    "options": [
      "1. 手紙",
      "2. 手低",
      "3. 毛紙",
      "4. 毛低"
    ],
    "correct": 0,
    "explanation": "てがみ is 手紙 (letter).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-21",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "21",
    "sentence": "あさはやく おきて、さんぽします。",
    "target": "あさはやく",
    "options": [
      "1. 朝早く",
      "2. 昼早く",
      "3. 夜早く",
      "4. 晩早く"
    ],
    "correct": 0,
    "explanation": "あさはやく is 朝早く (early morning).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-22",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "22",
    "sentence": "あさはやく おきて、さんぽします。",
    "target": "おきて",
    "options": [
      "1. 起きて",
      "2. 走きて",
      "3. 歩きて",
      "4. 止きて"
    ],
    "correct": 0,
    "explanation": "おきて is 起きて (woke up).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-23",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "23",
    "sentence": "がっこうの プールで およぎました。",
    "target": "がっこう",
    "options": [
      "1. 学校",
      "2. 学枚",
      "3. 学枝",
      "4. 学杖"
    ],
    "correct": 0,
    "explanation": "がっこう is 学校 (school).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-24",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "24",
    "sentence": "がっこうの プールで およぎました。",
    "target": "およぎました",
    "options": [
      "1. 泳ぎました",
      "2. 浴ぎました",
      "3. 泣ぎました",
      "4. 波ぎました"
    ],
    "correct": 0,
    "explanation": "およぎました is 泳ぎました (swam).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-25",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "25",
    "sentence": "えきの ちかくの こうさてんで まちます。",
    "target": "えき",
    "options": [
      "1. 駅",
      "2. 訳",
      "3. 釈",
      "4. 尺"
    ],
    "correct": 0,
    "explanation": "えき is 駅 (station).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-26",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "26",
    "sentence": "えきの ちかくの こうさてんで まちます。",
    "target": "まちます",
    "options": [
      "1. 持ちます",
      "2. 待ちます",
      "3. 侍ちます",
      "4. 特ちます"
    ],
    "correct": 1,
    "explanation": "まちます is 待ちます (to wait).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-27",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "27",
    "sentence": "うみで さかなを つりました。",
    "target": "うみ",
    "options": [
      "1. 海",
      "2. 毎",
      "3. 湖",
      "4. 池"
    ],
    "correct": 0,
    "explanation": "うみ is 海 (sea).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-28",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 253",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "28",
    "sentence": "うみで さかなを つりました。",
    "target": "さかな",
    "options": [
      "1. 魚",
      "2. 鮮",
      "3. 漁",
      "4. 魯"
    ],
    "correct": 0,
    "explanation": "さかな is 魚 (fish).",
    "imageSrc": "/question_pic_N4/image copy 18.png"
  },
  {
    "id": "n4-u8-m2-29",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "29",
    "sentence": "母の かわりに ふくを クリーニング屋へ もっていきました。",
    "target": "かわりに",
    "options": [
      "1. 変わり",
      "2. 代わり",
      "3. 化わり",
      "4. 貸わり"
    ],
    "correct": 1,
    "explanation": "かわりに is 代わりに (in place of).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-30",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "30",
    "sentence": "ばんごはんは とりにくの カレーに しましょう。",
    "target": "ばんごはん",
    "options": [
      "1. 晩ご飯",
      "2. 免ご飯",
      "3. 勉ご飯",
      "4. 夕ご飯"
    ],
    "correct": 0,
    "explanation": "ばんごはん is 晩ご飯 (dinner).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-31",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "31",
    "sentence": "さんぽの あとで、いぬの 足を あらいます。",
    "target": "いぬ",
    "options": [
      "1. 伏",
      "2. 犬",
      "3. 太",
      "4. 大"
    ],
    "correct": 1,
    "explanation": "いぬ is 犬 (dog).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-32",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "32",
    "sentence": "さんぽの あとで、いぬの 足を あらいます。",
    "target": "あらいます",
    "options": [
      "1. 洗います",
      "2. 決います",
      "3. 侁います",
      "4. 洗います"
    ],
    "correct": 0,
    "explanation": "あらいます is 洗います (to wash).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-33",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "33",
    "sentence": "この 店の コーヒーは 母の いれた コーヒーと おなじ あじだ。",
    "target": "おなじ",
    "options": [
      "1. 周じ",
      "2. 同じ",
      "3. 円じ",
      "4. 向じ"
    ],
    "correct": 1,
    "explanation": "おなじ is 同じ (same).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-34",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "34",
    "sentence": "この 店の コーヒーは 母の いれた コーヒーと おなじ あじだ。",
    "target": "あじ",
    "options": [
      "1. 妹",
      "2. 味",
      "3. 昧",
      "4. 未"
    ],
    "correct": 1,
    "explanation": "あじ is 味 (taste).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-35",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "35",
    "sentence": "おてあらいは どこですか。あの ちゃいろの ドアです。",
    "target": "おてあらい",
    "options": [
      "1. お手洗い",
      "2. お毛洗い",
      "3. お手洗",
      "4. お毛洗"
    ],
    "correct": 0,
    "explanation": "おてあらい is お手洗い (restroom).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-36",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "36",
    "sentence": "おてあらいは どこですか。あの ちゃいろの ドアです。",
    "target": "ちゃいろ",
    "options": [
      "1. 茶色",
      "2. 荼色",
      "3. 荅色",
      "4. 茜色"
    ],
    "correct": 0,
    "explanation": "ちゃいろ is 茶色 (brown).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-37",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "37",
    "sentence": "この こうじょうは １年前に たてられました。",
    "target": "こうじょう",
    "options": [
      "1. 工陽",
      "2. 工業",
      "3. 工場",
      "4. 巧場"
    ],
    "correct": 2,
    "explanation": "こうじょう is 工場 (factory).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-38",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "38",
    "sentence": "日本を 朝 しゅっぱつすると、夜 国へ つきます。",
    "target": "しゅっぱつ",
    "options": [
      "1. 到着",
      "2. 出発",
      "3. 帰着",
      "4. 進発"
    ],
    "correct": 1,
    "explanation": "しゅっぱつ is 出発 (departure).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-39",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "39",
    "sentence": "国へ かえる前に たいしかんへ 行きました。",
    "target": "たいしかん",
    "options": [
      "1. 太使館",
      "2. 大作館",
      "3. 大使院",
      "4. 大使館"
    ],
    "correct": 3,
    "explanation": "たいしかん is 大使館 (embassy).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-40",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "40",
    "sentence": "じどうしゃが 多いですから、しんごうを わたるときは 気をつけてください。",
    "target": "しんごう",
    "options": [
      "1. 信語",
      "2. 進号",
      "3. 信号",
      "4. 新号"
    ],
    "correct": 2,
    "explanation": "しんごう is 信号 (traffic signal).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-41",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "41",
    "sentence": "しけんの 時間に まにあいませんでした。",
    "target": "まにあい",
    "options": [
      "1. 間に合い",
      "2. 問に会い",
      "3. 間に会い",
      "4. 問に合い"
    ],
    "correct": 0,
    "explanation": "まにあい is 間に合い (in time).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m2-42",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 254",
    "section": "もんだい 2",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "42",
    "sentence": "先生が 漢字の いみを せつめいしてくれました。",
    "target": "せつめい",
    "options": [
      "1. 悦明",
      "2. 脱朋",
      "3. 説明",
      "4. 説朋"
    ],
    "correct": 2,
    "explanation": "せつめい is 説明 (explanation).",
    "imageSrc": "/question_pic_N4/image copy 19.png"
  },
  {
    "id": "n4-u8-m3-1",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 255 (Memo)",
    "section": "もんだい 3",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-①",
    "sentence": "① ぎゅうにゅう を 買う。",
    "target": "ぎゅうにゅう",
    "options": [
      "1. 牛乳",
      "2. 午乳",
      "3. 牛汁",
      "4. 午汁"
    ],
    "correct": 0,
    "explanation": "ぎゅうにゅう in kanji is 牛乳 (milk).",
    "imageSrc": "/question_pic_N4/image copy 20.png",
    "contextText": "【メモ】\\n・スーパーで ①ぎゅうにゅう と ②たまご を 買う。\\n・③ごご 3時に ④ぎんこう へ 行って、家賃を はらう。\\n・⑤ともだち に ⑥でんわ を かけて、⑦こんど の 予定を 話す。",
    "contextType": "text"
  },
  {
    "id": "n4-u8-m3-2",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 255 (Memo)",
    "section": "もんだい 3",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-②",
    "sentence": "② たまご を 買う。",
    "target": "たまご",
    "options": [
      "1. 卵",
      "2. 卯",
      "3. 迎",
      "4. 卵 (var)"
    ],
    "correct": 0,
    "explanation": "たまご in kanji is 卵 (egg).",
    "imageSrc": "/question_pic_N4/image copy 20.png",
    "contextText": "【メモ】\\n・スーパーで ①ぎゅうにゅう と ②たまご を 買う。\\n・③ごご 3時に ④ぎんこう へ 行って、家賃を はらう。\\n・⑤ともだち に ⑥でんわ を かけて、⑦こんど の 予定を 話す。",
    "contextType": "text"
  },
  {
    "id": "n4-u8-m3-3",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 255 (Memo)",
    "section": "もんだい 3",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-③",
    "sentence": "③ ごご 3時に 銀行へ 行く。",
    "target": "ごご",
    "options": [
      "1. 午後",
      "2. 牛後",
      "3. 午後 (var)",
      "4. 牛前"
    ],
    "correct": 0,
    "explanation": "ごご in kanji is 午後 (afternoon / P.M.).",
    "imageSrc": "/question_pic_N4/image copy 20.png",
    "contextText": "【メモ】\\n・スーパーで ①ぎゅうにゅう と ②たまご を 買う。\\n・③ごご 3時に ④ぎんこう へ 行って、家賃を はらう。\\n・⑤ともだち に ⑥でんわ を かけて、⑦こんど の 予定を 話す。",
    "contextType": "text"
  },
  {
    "id": "n4-u8-m3-4",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 255 (Memo)",
    "section": "もんだい 3",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-④",
    "sentence": "④ ぎんこう へ 行って、家賃を はらう。",
    "target": "ぎんこう",
    "options": [
      "1. 銀行",
      "2. 金行",
      "3. 銀高",
      "4. 金高"
    ],
    "correct": 0,
    "explanation": "ぎんこう in kanji is 銀行 (bank).",
    "imageSrc": "/question_pic_N4/image copy 20.png",
    "contextText": "【メモ】\\n・スーパーで ①ぎゅうにゅう と ②たまご を 買う。\\n・③ごご 3時に ④ぎんこう へ 行って、家賃を はらう。\\n・⑤ともだち に ⑥でんわ を かけて、⑦こんど の 予定を 話す。",
    "contextType": "text"
  },
  {
    "id": "n4-u8-m3-5",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 255 (Memo)",
    "section": "もんだい 3",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑤",
    "sentence": "⑤ ともだち に 電話を かける。",
    "target": "ともだち",
    "options": [
      "1. 友達",
      "2. 友立",
      "3. 友達",
      "4. 又達"
    ],
    "correct": 0,
    "explanation": "ともだち in kanji is 友達 (friend).",
    "imageSrc": "/question_pic_N4/image copy 20.png",
    "contextText": "【メモ】\\n・スーパーで ①ぎゅうにゅう と ②たまご を 買う。\\n・③ごご 3時に ④ぎんこう へ 行って、家賃を はらう。\\n・⑤ともだち に ⑥でんわ を かけて、⑦こんど の 予定を 話す。",
    "contextType": "text"
  },
  {
    "id": "n4-u8-m3-6",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 255 (Memo)",
    "section": "もんだい 3",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑥",
    "sentence": "⑥ でんわ を かける。",
    "target": "でんわ",
    "options": [
      "1. 電話",
      "2. 電舌",
      "3. 雷話",
      "4. 電語"
    ],
    "correct": 0,
    "explanation": "でんわ in kanji is 電話 (telephone).",
    "imageSrc": "/question_pic_N4/image copy 20.png",
    "contextText": "【メモ】\\n・スーパーで ①ぎゅうにゅう と ②たまご を 買う。\\n・③ごご 3時に ④ぎんこう へ 行って、家賃を はらう。\\n・⑤ともだち に ⑥でんわ を かけて、⑦こんど の 予定を 話す。",
    "contextType": "text"
  },
  {
    "id": "n4-u8-m3-7",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 255 (Memo)",
    "section": "もんだい 3",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "3-⑦",
    "sentence": "⑦ こんど の 予定を 話す。",
    "target": "こんど",
    "options": [
      "1. 今度",
      "2. 金度",
      "3. 今回",
      "4. 今回"
    ],
    "correct": 0,
    "explanation": "こんど in kanji is 今度 (next time / this time).",
    "imageSrc": "/question_pic_N4/image copy 20.png",
    "contextText": "【メモ】\\n・スーパーで ①ぎゅうにゅう と ②たまご を 買う。\\n・③ごご 3時に ④ぎんこう へ 行って、家賃を はらう。\\n・⑤ともだち に ⑥でんわ を かけて、⑦こんど の 予定を 話す。",
    "contextType": "text"
  },
  {
    "id": "n4-u8-m4-1-1",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 256 (Notice 1)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-①",
    "sentence": "① かいかん 時間：午前9時〜",
    "target": "かいかん",
    "options": [
      "1. 開館",
      "2. 閉館",
      "3. 開院",
      "4. 啓館"
    ],
    "correct": 0,
    "explanation": "かいかん in kanji is 開館 (opening hours of the facility).",
    "imageSrc": "/question_pic_N4/image copy 21.png",
    "contextText": "【図書館からのお知らせ】\\n・①かいかん 時間：午前9時〜②ごご 8時\\n・③きゅうかん 日：毎週月曜日\\n・本は ④ひとり 5さつまで ⑤かりる ことができます。\\n・本を ⑥かえす ときは、⑦うけつけ へ お持ちください。",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m4-1-2",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 256 (Notice 1)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-②",
    "sentence": "② ごご 8時まで",
    "target": "ごご",
    "options": [
      "1. 午後",
      "2. 牛後",
      "3. 午前",
      "4. 牛前"
    ],
    "correct": 0,
    "explanation": "ごご in kanji is 午後 (P.M. / afternoon).",
    "imageSrc": "/question_pic_N4/image copy 21.png",
    "contextText": "【図書館からのお知らせ】\\n・①かいかん 時間：午前9時〜②ごご 8時\\n・③きゅうかん 日：毎週月曜日\\n・本は ④ひとり 5さつまで ⑤かりる ことができます。\\n・本を ⑥かえす ときは、⑦うけつけ へ お持ちください。",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m4-1-3",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 256 (Notice 1)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-③",
    "sentence": "③ きゅうかん 日：毎週月曜日",
    "target": "きゅうかん",
    "options": [
      "1. 休館",
      "2. 休館",
      "3. 急館",
      "4. 給館"
    ],
    "correct": 0,
    "explanation": "きゅうかん in kanji is 休館 (closed days for the hall/library).",
    "imageSrc": "/question_pic_N4/image copy 21.png",
    "contextText": "【図書館からのお知らせ】\\n・①かいかん 時間：午前9時〜②ごご 8時\\n・③きゅうかん 日：毎週月曜日\\n・本は ④ひとり 5さつまで ⑤かりる ことができます。\\n・本を ⑥かえす ときは、⑦うけつけ へ お持ちください。",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m4-1-4",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 256 (Notice 1)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-④",
    "sentence": "④ ひとり 5さつまで",
    "target": "ひとり",
    "options": [
      "1. 一人",
      "2. １人",
      "3. １個",
      "4. 一名"
    ],
    "correct": 0,
    "explanation": "ひとり in kanji is 一人 (one person).",
    "imageSrc": "/question_pic_N4/image copy 21.png",
    "contextText": "【図書館からのお知らせ】\\n・①かいかん 時間：午前9時〜②ごご 8時\\n・③きゅうかん 日：毎週月曜日\\n・本は ④ひとり 5さつまで ⑤かりる ことができます。\\n・本を ⑥かえす ときは、⑦うけつけ へ お持ちください。",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m4-1-5",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 256 (Notice 1)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑤",
    "sentence": "⑤ かりる ことができます。",
    "target": "かりる",
    "options": [
      "1. 借りる",
      "2. 貸りる",
      "3. 假りる",
      "4. 借る"
    ],
    "correct": 0,
    "explanation": "かりる in kanji is 借りる (to borrow).",
    "imageSrc": "/question_pic_N4/image copy 21.png",
    "contextText": "【図書館からのお知らせ】\\n・①かいかん 時間：午前9時〜②ごご 8時\\n・③きゅうかん 日：毎週月曜日\\n・本は ④ひとり 5さつまで ⑤かりる ことができます。\\n・本を ⑥かえす ときは、⑦うけつけ へ お持ちください。",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m4-1-6",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 256 (Notice 1)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑥",
    "sentence": "⑥ かえす ときは",
    "target": "かえす",
    "options": [
      "1. 返す",
      "2. 反す",
      "3. 帰す",
      "4. 変す"
    ],
    "correct": 0,
    "explanation": "かえす in kanji is 返す (to return).",
    "imageSrc": "/question_pic_N4/image copy 21.png",
    "contextText": "【図書館からのお知らせ】\\n・①かいかん 時間：午前9時〜②ごご 8時\\n・③きゅうかん 日：毎週月曜日\\n・本は ④ひとり 5さつまで ⑤かりる ことができます。\\n・本を ⑥かえす ときは、⑦うけつけ へ お持ちください。",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m4-1-7",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 256 (Notice 1)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-⑦",
    "sentence": "⑦ うけつけ へ お持ちください。",
    "target": "うけつけ",
    "options": [
      "1. 受付",
      "2. 受附",
      "3. 授付",
      "4. 愛付"
    ],
    "correct": 0,
    "explanation": "うけつけ in kanji is 受付 (reception desk).",
    "imageSrc": "/question_pic_N4/image copy 21.png",
    "contextText": "【図書館からのお知らせ】\\n・①かいかん 時間：午前9時〜②ごご 8時\\n・③きゅうかん 日：毎週月曜日\\n・本は ④ひとり 5さつまで ⑤かりる ことができます。\\n・本を ⑥かえす ときは、⑦うけつけ へ お持ちください。",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m4-2-1",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 257 (Notice 2)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-Ⓐ",
    "sentence": "Ⓐ ちゅうしゃじょう は こちらです。",
    "target": "ちゅうしゃじょう",
    "options": [
      "1. 駐車場",
      "2. 駐輪場",
      "3. 柱車場",
      "4. 註車場"
    ],
    "correct": 0,
    "explanation": "ちゅうしゃじょう in kanji is 駐車場 (parking lot).",
    "imageSrc": "/question_pic_N4/image copy 22.png"
  },
  {
    "id": "n4-u8-m4-2-2",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 257 (Notice 2)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-Ⓑ",
    "sentence": "Ⓑ ここで 車を 止めてください。",
    "target": "とめて",
    "options": [
      "1. 止めて",
      "2. 正めて",
      "3. 留めて",
      "4. 泊めて"
    ],
    "correct": 0,
    "explanation": "とめて in kanji is 止めて (stop / park).",
    "imageSrc": "/question_pic_N4/image copy 22.png"
  },
  {
    "id": "n4-u8-m4-2-3",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 257 (Notice 2)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-Ⓒ",
    "sentence": "Ⓒ えき まで 徒歩5分です。",
    "target": "えき",
    "options": [
      "1. 駅",
      "2. 訳",
      "3. 釈",
      "4. 尺"
    ],
    "correct": 0,
    "explanation": "えき in kanji is 駅 (station).",
    "imageSrc": "/question_pic_N4/image copy 22.png"
  },
  {
    "id": "n4-u8-m4-2-4",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 257 (Notice 2)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-Ⓓ",
    "sentence": "Ⓓ でんしゃ を ご利用ください。",
    "target": "でんしゃ",
    "options": [
      "1. 電車",
      "2. 雷車",
      "3. 電東",
      "4. 電輪"
    ],
    "correct": 0,
    "explanation": "でんしゃ in kanji is 電車 (train).",
    "imageSrc": "/question_pic_N4/image copy 22.png"
  },
  {
    "id": "n4-u8-m4-2-5",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 257 (Notice 2)",
    "section": "もんだい 4",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "4-Ⓔ",
    "sentence": "Ⓔ きっぷ を お買い求めください。",
    "target": "きっぷ",
    "options": [
      "1. 切符",
      "2. 切付",
      "3. 刀符",
      "4. 切府"
    ],
    "correct": 0,
    "explanation": "きっぷ in kanji is 切符 (ticket).",
    "imageSrc": "/question_pic_N4/image copy 22.png"
  },
  {
    "id": "n4-u8-m5-1",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 257 (Notice 3)",
    "section": "もんだい 5",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-①",
    "sentence": "① ひじょうぐち は あちらです。",
    "target": "ひじょうぐち",
    "options": [
      "1. 非常口",
      "2. 非状口",
      "3. 悲常口",
      "4. 避常口"
    ],
    "correct": 0,
    "explanation": "ひじょうぐち in kanji is 非常口 (emergency exit).",
    "imageSrc": "/question_pic_N4/image copy 22.png"
  },
  {
    "id": "n4-u8-m5-2",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 257 (Notice 3)",
    "section": "もんだい 5",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-②",
    "sentence": "② かさい の ときは エレベーターを つかわないでください。",
    "target": "かさい",
    "options": [
      "1. 火災",
      "2. 火細",
      "3. 化災",
      "4. 火彩"
    ],
    "correct": 0,
    "explanation": "かさい in kanji is 火災 (fire / conflagration).",
    "imageSrc": "/question_pic_N4/image copy 22.png"
  },
  {
    "id": "n4-u8-m5-3",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 257 (Notice 3)",
    "section": "もんだい 5",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-③",
    "sentence": "③ あんぜん な ばしょへ にげてください。",
    "target": "あんぜん",
    "options": [
      "1. 安全",
      "2. 安前",
      "3. 按全",
      "4. 安善"
    ],
    "correct": 0,
    "explanation": "あんぜん in kanji is 安全 (safety).",
    "imageSrc": "/question_pic_N4/image copy 22.png"
  },
  {
    "id": "n4-u8-m5-4",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 257 (Notice 3)",
    "section": "もんだい 5",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "5-④",
    "sentence": "④ おちついて 行動してください。",
    "target": "おちついて",
    "options": [
      "1. 落ち着いて",
      "2. 落着いて",
      "3. 落ちづいて",
      "4. 楽着いて"
    ],
    "correct": 0,
    "explanation": "おちついて in kanji is 落ち着いて (calmly).",
    "imageSrc": "/question_pic_N4/image copy 22.png"
  },
  {
    "id": "n4-u8-m6-1-1",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 258 (Ad 1)",
    "section": "もんだい 6",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-①",
    "sentence": "① ぜんぴん 20% オフ！",
    "target": "ぜんぴん",
    "options": [
      "1. 全品",
      "2. 全品 (var)",
      "3. 前品",
      "4. 善品"
    ],
    "correct": 0,
    "explanation": "ぜんぴん in kanji is 全品 (all items / all goods).",
    "imageSrc": "/question_pic_N4/image copy 23.png",
    "contextText": "【セールのお知らせ（広告）】\\n・①ぜんぴん 20% オフ！\\n・②きかん：8月1日〜8月15日\\n・③とくてん：5000円以上 お買い上げの 方に プレゼント！",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m6-1-2",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 258 (Ad 1)",
    "section": "もんだい 6",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-②",
    "sentence": "② きかん：8月1日〜8月15日",
    "target": "きかん",
    "options": [
      "1. 期間",
      "2. 気間",
      "3. 記間",
      "4. 機間"
    ],
    "correct": 0,
    "explanation": "きかん in kanji is 期間 (period / duration).",
    "imageSrc": "/question_pic_N4/image copy 23.png",
    "contextText": "【セールのお知らせ（広告）】\\n・①ぜんぴん 20% オフ！\\n・②きかん：8月1日〜8月15日\\n・③とくてん：5000円以上 お買い上げの 方に プレゼント！",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m6-1-3",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 258 (Ad 1)",
    "section": "もんだい 6",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-③",
    "sentence": "③ とくてん：プレゼント進呈！",
    "target": "とくてん",
    "options": [
      "1. 特典",
      "2. 得点",
      "3. 特点",
      "4. 徳典"
    ],
    "correct": 0,
    "explanation": "とくてん in kanji is 特典 (special privilege / bonus).",
    "imageSrc": "/question_pic_N4/image copy 23.png",
    "contextText": "【セールのお知らせ（広告）】\\n・①ぜんぴん 20% オフ！\\n・②きかん：8月1日〜8月15日\\n・③とくてん：5000円以上 お買い上げの 方に プレゼント！",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m6-2-1",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 258 (Ad 2)",
    "section": "もんだい 6",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-Ⓐ",
    "sentence": "Ⓐ えいぎょう 時間：10:00〜21:00",
    "target": "えいぎょう",
    "options": [
      "1. 営業",
      "2. 営行",
      "3. 営葉",
      "4. 永業"
    ],
    "correct": 0,
    "explanation": "えいぎょう in kanji is 営業 (business / open hours).",
    "imageSrc": "/question_pic_N4/image copy 23.png",
    "contextText": "【セールのお知らせ（広告）】\\n・①ぜんぴん 20% オフ！\\n・②きかん：8月1日〜8月15日\\n・③とくてん：5000円以上 お買い上げの 方に プレゼント！",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m6-2-2",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 258 (Ad 2)",
    "section": "もんだい 6",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-Ⓑ",
    "sentence": "Ⓑ ていきゅうび：年中無休",
    "target": "ていきゅうび",
    "options": [
      "1. 定休日",
      "2. 停休日",
      "3. 定休目",
      "4. 程休日"
    ],
    "correct": 0,
    "explanation": "ていきゅうび in kanji is 定休日 (regular holiday / regular closing day).",
    "imageSrc": "/question_pic_N4/image copy 23.png",
    "contextText": "【セールのお知らせ（広告）】\\n・①ぜんぴん 20% オフ！\\n・②きかん：8月1日〜8月15日\\n・③とくてん：5000円以上 お買い上げの 方に プレゼント！",
    "contextType": "travel_notice"
  },
  {
    "id": "n4-u8-m6-2-3",
    "unitId": "unit_comprehensive",
    "unitTitle": "Comprehensive Review: Page 258 (Ad 2)",
    "section": "もんだい 6",
    "sectionInstruction": "_____ の ことばは どう かきますか。1、2、3、4から いちばん いいものを ひとつ えらんで ください。",
    "questionNumber": "6-Ⓒ",
    "sentence": "Ⓒ おといあわせ は こちらまで。",
    "target": "といあわせ",
    "options": [
      "1. 問い合わせ",
      "2. 問合わせ",
      "3. 訪合わせ",
      "4. 聴合わせ"
    ],
    "correct": 0,
    "explanation": "といあわせ in kanji is 問い合わせ (inquiry / contact).",
    "imageSrc": "/question_pic_N4/image copy 23.png",
    "contextText": "【セールのお知らせ（広告）】\\n・①ぜんぴん 20% オフ！\\n・②きかん：8月1日〜8月15日\\n・③とくてん：5000円以上 お買い上げの 方に プレゼント！",
    "contextType": "travel_notice"
  }
];
