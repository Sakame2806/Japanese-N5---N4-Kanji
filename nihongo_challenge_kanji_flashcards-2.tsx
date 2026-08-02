import React, { useState, useMemo, useEffect } from 'react';
import { N5_PRACTICE_UNITS, N5_PRACTICE_QUESTIONS, PracticeQuestion, PracticeUnit } from './src/data/n5_practice_questions';
import { N4_PRACTICE_UNITS, N4_PRACTICE_QUESTIONS } from './src/data/n4_practice_questions';


const PART1_DATA = {
  title: "N5 Kanji",
  lessons: [
    {
      id: 1,
      title: "Lesson 1: Pictographs 1",
      cards: [
        { kanji: "山", reading: "やま", meaning: "Mountain" },
        { kanji: "川", reading: "かわ", meaning: "River" },
        { kanji: "田", reading: "た", meaning: "Rice field" },
        { kanji: "日", reading: "ひ / にち", meaning: "Sun / Day" },
        { kanji: "月", reading: "つき / げつ", meaning: "Moon / Month" },
        { kanji: "火", reading: "ひ / か", meaning: "Fire" },
        { kanji: "水", reading: "みず / すい", meaning: "Water" },
        { kanji: "木", reading: "き / もく", meaning: "Tree" },
        { kanji: "金", reading: "かね / きん", meaning: "Gold / Money" },
        { kanji: "土", reading: "つち / ど", meaning: "Soil / Earth" }
      ]
    },
    {
      id: 2,
      title: "Lesson 2: Numbers",
      cards: [
        { kanji: "一", reading: "いち / ひとつ", meaning: "One" },
        { kanji: "二", reading: "に / ふたつ", meaning: "Two" },
        { kanji: "三", reading: "さん / みっつ", meaning: "Three" },
        { kanji: "四", reading: "よん / し / よっつ", meaning: "Four" },
        { kanji: "五", reading: "ご / いつつ", meaning: "Five" },
        { kanji: "六", reading: "ろく / むっつ", meaning: "Six" },
        { kanji: "七", reading: "なな / しち / ななつ", meaning: "Seven" },
        { kanji: "八", reading: "はち / やっつ", meaning: "Eight" },
        { kanji: "九", reading: "きゅう / く / ここのつ", meaning: "Nine" },
        { kanji: "十", reading: "じゅう / とお", meaning: "Ten" }
      ]
    },
    {
      id: 3,
      title: "Lesson 3: Numbers & Signs",
      cards: [
        { kanji: "百", reading: "ひゃく", meaning: "Hundred" },
        { kanji: "千", reading: "せん", meaning: "Thousand" },
        { kanji: "万", reading: "まん", meaning: "Ten thousand" },
        { kanji: "円", reading: "えん", meaning: "Yen / Circle" },
        { kanji: "年", reading: "とし / ねん", meaning: "Year" },
        { kanji: "上", reading: "うえ / じょう", meaning: "Up / Above" },
        { kanji: "下", reading: "した / か", meaning: "Down / Below" },
        { kanji: "中", reading: "なか / ちゅう", meaning: "Inside / Middle" },
        { kanji: "半", reading: "はん", meaning: "Half" },
        { kanji: "分", reading: "ふん / ぶん / わける", meaning: "Minute / Divide" }
      ]
    },
    {
      id: 4,
      title: "Lesson 4: Pictographs 2",
      cards: [
        { kanji: "人", reading: "ひと / じん", meaning: "Person" },
        { kanji: "子", reading: "こ / し", meaning: "Child" },
        { kanji: "女", reading: "おんな / じょ", meaning: "Woman / Female" },
        { kanji: "男", reading: "おとこ / だん", meaning: "Man / Male" },
        { kanji: "目", reading: "め / もく", meaning: "Eye" },
        { kanji: "口", reading: "くち / こう", meaning: "Mouth" },
        { kanji: "耳", reading: "みみ", meaning: "Ear" },
        { kanji: "手", reading: "て / しゅ", meaning: "Hand" },
        { kanji: "足", reading: "あし / そく", meaning: "Leg / Foot" },
        { kanji: "力", reading: "ちから / りょく", meaning: "Power / Strength" }
      ]
    },
    {
      id: 5,
      title: "Lesson 5: Pictographs 3",
      cards: [
        { kanji: "父", reading: "ちち / ふ", meaning: "Father" },
        { kanji: "母", reading: "はは / ぼ", meaning: "Mother" },
        { kanji: "先", reading: "さき / せん", meaning: "Ahead / Previous" },
        { kanji: "生", reading: "うまれる / せい", meaning: "Life / Birth" },
        { kanji: "学", reading: "まなぶ / がく", meaning: "Study / Science" },
        { kanji: "校", reading: "こう", meaning: "School" },
        { kanji: "友", reading: "とも / ゆう", meaning: "Friend" },
        { kanji: "本", reading: "ほん / もと", meaning: "Book / Origin" },
        { kanji: "毎", reading: "まい", meaning: "Every" },
        { kanji: "何", reading: "なに / なん", meaning: "What" }
      ]
    },
    {
      id: 6,
      title: "Lesson 6: Directions",
      cards: [
        { kanji: "前", reading: "まえ / ぜん", meaning: "Front / Before" },
        { kanji: "後", reading: "うしろ / あと / ご", meaning: "Behind / After" },
        { kanji: "外", reading: "そと / がい", meaning: "Outside" },
        { kanji: "左", reading: "ひだり / さ", meaning: "Left" },
        { kanji: "右", reading: "みぎ / う / ゆう", meaning: "Right" },
        { kanji: "東", reading: "ひがし / とう", meaning: "East" },
        { kanji: "西", reading: "にし / せい / さい", meaning: "West" },
        { kanji: "南", reading: "みなみ / なん", meaning: "South" },
        { kanji: "北", reading: "きた / ほく", meaning: "North" },
        { kanji: "名", reading: "な / めい", meaning: "Name" }
      ]
    },
    {
      id: 7,
      title: "Lesson 7: Pictographs 4",
      cards: [
        { kanji: "牛", reading: "うし / ぎゅう", meaning: "Cow / Cattle" },
        { kanji: "馬", reading: "うま / ば", meaning: "Horse" },
        { kanji: "魚", reading: "さかな / ぎょ", meaning: "Fish" },
        { kanji: "貝", reading: "かい", meaning: "Shellfish" },
        { kanji: "雨", reading: "あめ / う", meaning: "Rain" },
        { kanji: "天", reading: "てん", meaning: "Heaven / Sky" },
        { kanji: "気", reading: "き", meaning: "Spirit / Air / Feeling" },
        { kanji: "車", reading: "くるま / しゃ", meaning: "Car / Vehicle" },
        { kanji: "門", reading: "もん", meaning: "Gate" },
        { kanji: "午", reading: "ご", meaning: "Noon" }
      ]
    },
    {
      id: 8,
      title: "Lesson 8: Adjectives",
      cards: [
        { kanji: "大", reading: "おおきい / だい", meaning: "Big / Large" },
        { kanji: "小", reading: "ちいさい / しょう", meaning: "Small / Little" },
        { kanji: "高", reading: "たかい / こう", meaning: "High / Expensive" },
        { kanji: "安", reading: "やすい / あん", meaning: "Cheap / Peaceful" },
        { kanji: "新", reading: "あたらしい / しん", meaning: "New" },
        { kanji: "古", reading: "ふるい / こ", meaning: "Old" },
        { kanji: "長", reading: "ながい / ちょう", meaning: "Long / Chief" },
        { kanji: "多", reading: "おおい / た", meaning: "Many / Much" },
        { kanji: "少", reading: "すくない / すこし", meaning: "Few / Little" },
        { kanji: "早", reading: "はやい / そう", meaning: "Early / Fast" }
      ]
    },
    {
      id: 9,
      title: "Lesson 9: Verbs",
      cards: [
        { kanji: "行", reading: "いく / こう", meaning: "To go" },
        { kanji: "来", reading: "くる / らい", meaning: "To come" },
        { kanji: "食", reading: "たべる / しょく", meaning: "To eat" },
        { kanji: "見", reading: "みる / けん", meaning: "To see / Look" },
        { kanji: "入", reading: "はいる / いれる", meaning: "To enter / Put in" },
        { kanji: "出", reading: "でる / だす", meaning: "To exit / Put out" },
        { kanji: "立", reading: "たつ / りつ", meaning: "To stand" },
        { kanji: "書", reading: "かく / しょ", meaning: "To write" },
        { kanji: "言", reading: "いう / げん", meaning: "To say" },
        { kanji: "飲", reading: "のむ / いん", meaning: "To drink" }
      ]
    },
    {
      id: 10,
      title: "Lesson 10: Combinations 1",
      cards: [
        { kanji: "話", reading: "はなす / わ", meaning: "To speak / Talk" },
        { kanji: "読", reading: "よむ / どく", meaning: "To read" },
        { kanji: "語", reading: "かたる / ご", meaning: "Language / Word" },
        { kanji: "間", reading: "あいだ / かん", meaning: "Interval / Between" },
        { kanji: "聞", reading: "きく / ぶん", meaning: "To hear / Listen" },
        { kanji: "買", reading: "かう / ばい", meaning: "To buy" },
        { kanji: "休", reading: "やすむ / きゅう", meaning: "To rest" },
        { kanji: "時", reading: "とき / じ", meaning: "Time / Hour" },
        { kanji: "週", reading: "しゅう", meaning: "Week" },
        { kanji: "道", reading: "みち / どう", meaning: "Road / Way" }
      ]
    },
    {
      id: 11,
      title: "Lesson 11: Combinations 2",
      cards: [
        { kanji: "今", reading: "いま / こん", meaning: "Now" },
        { kanji: "会", reading: "あう / かい", meaning: "To meet / Society" },
        { kanji: "社", reading: "やしろ / しゃ", meaning: "Company / Shrine" },
        { kanji: "店", reading: "みせ / てん", meaning: "Shop / Store" },
        { kanji: "駅", reading: "えき", meaning: "Station" },
        { kanji: "花", reading: "はな / か", meaning: "Flower" },
        { kanji: "国", reading: "くに / こく", meaning: "Country" },
        { kanji: "白", reading: "しろい / はく", meaning: "White" },
        { kanji: "空", reading: "そら / くう", meaning: "Sky / Empty" },
        { kanji: "電", reading: "でん", meaning: "Electricity" }
      ]
    }
  ]
};

const PART2_DATA = {
  title: "N4 Kanji",
  lessons: [
    {
      id: 1,
      title: "Lesson 1: Address",
      cards: [
        { kanji: "住", reading: "すむ / じゅう", meaning: "To live" },
        { kanji: "所", reading: "ところ / しょ", meaning: "Place" },
        { kanji: "京", reading: "きょう", meaning: "Capital" },
        { kanji: "都", reading: "みやこ / と", meaning: "Metropolis / Capital" },
        { kanji: "府", reading: "ふ", meaning: "Government prefecture" },
        { kanji: "県", reading: "けん", meaning: "Prefecture" },
        { kanji: "市", reading: "いち / し", meaning: "City / Market" },
        { kanji: "区", reading: "く", meaning: "Ward / District" },
        { kanji: "町", reading: "まち / ちょう", meaning: "Town" },
        { kanji: "村", reading: "むら / そん", meaning: "Village" }
      ]
    },
    {
      id: 2,
      title: "Lesson 2: Adjectives 1",
      cards: [
        { kanji: "明", reading: "あかるい / めい", meaning: "Bright / Light" },
        { kanji: "暗", reading: "くらい / あん", meaning: "Dark" },
        { kanji: "遠", reading: "とおい / えん", meaning: "Far / Distant" },
        { kanji: "近", reading: "ちかい / きん", meaning: "Near / Close" },
        { kanji: "強", reading: "つよい / きょう", meaning: "Strong" },
        { kanji: "弱", reading: "よわい / じゃく", meaning: "Weak" },
        { kanji: "重", reading: "おもい / じゅう", meaning: "Heavy" },
        { kanji: "軽", reading: "かるい / けい", meaning: "Light (weight)" },
        { kanji: "太", reading: "ふとい / たい", meaning: "Fat / Thick" },
        { kanji: "細", reading: "ほそい / さい", meaning: "Thin / Slender" }
      ]
    },
    {
      id: 3,
      title: "Lesson 3: Adjectives 2",
      cards: [
        { kanji: "特", reading: "とく", meaning: "Special" },
        { kanji: "別", reading: "わかれる / べつ", meaning: "Separate" },
        { kanji: "有", reading: "ある / ゆう", meaning: "To have / Exist" },
        { kanji: "便", reading: "たより / べん / びん", meaning: "Convenience / Mail" },
        { kanji: "利", reading: "きく / り", meaning: "Profit / Advantage" },
        { kanji: "不", reading: "ふ / ぶ", meaning: "Not / Non-" },
        { kanji: "切", reading: "きる / せつ", meaning: "To cut" },
        { kanji: "元", reading: "もと / げん", meaning: "Origin / Base" },
        { kanji: "好", reading: "すき / こう", meaning: "To like" },
        { kanji: "急", reading: "いそぐ / きゅう", meaning: "To hurry / Sudden" }
      ]
    },
    {
      id: 4,
      title: "Lesson 4: Adjectives 3",
      cards: [
        { kanji: "低", reading: "ひくい / てい", meaning: "Low" },
        { kanji: "広", reading: "ひろい / こう", meaning: "Wide / Spacious" },
        { kanji: "短", reading: "みじかい / たん", meaning: "Short" },
        { kanji: "良", reading: "よい / りょう", meaning: "Good" },
        { kanji: "悪", reading: "わるい / あく", meaning: "Bad" },
        { kanji: "正", reading: "ただしい / せい", meaning: "Correct / Right" },
        { kanji: "変", reading: "かわる / へん", meaning: "Change / Strange" },
        { kanji: "赤", reading: "あかい / せき", meaning: "Red" },
        { kanji: "青", reading: "あおい / せい", meaning: "Blue" },
        { kanji: "黒", reading: "くろい / こく", meaning: "Black" }
      ]
    },
    {
      id: 5,
      title: "Lesson 5: Hobby",
      cards: [
        { kanji: "映", reading: "うつる / えい", meaning: "Project / Reflect" },
        { kanji: "画", reading: "が / かく", meaning: "Picture / Movie" },
        { kanji: "音", reading: "おと / おん", meaning: "Sound" },
        { kanji: "楽", reading: "たのしい / がく", meaning: "Fun / Music" },
        { kanji: "歌", reading: "うた / か", meaning: "Song / Sing" },
        { kanji: "写", reading: "うつす / しゃ", meaning: "Copy / Photograph" },
        { kanji: "真", reading: "ま / しん", meaning: "Truth / Real" },
        { kanji: "旅", reading: "たび / りょ", meaning: "Travel / Trip" },
        { kanji: "世", reading: "よ / せ", meaning: "World / Society" },
        { kanji: "界", reading: "かい", meaning: "World / Boundary" }
      ]
    },
    {
      id: 6,
      title: "Lesson 6: Profession",
      cards: [
        { kanji: "仕", reading: "つかえる / し", meaning: "To serve / Work" },
        { kanji: "事", reading: "こと / じ", meaning: "Thing / Affair" },
        { kanji: "銀", reading: "ぎん", meaning: "Silver" },
        { kanji: "員", reading: "いん", meaning: "Member" },
        { kanji: "医", reading: "い", meaning: "Doctor / Medicine" },
        { kanji: "者", reading: "もの / しゃ", meaning: "Person" },
        { kanji: "働", reading: "はたらく / どう", meaning: "To work" },
        { kanji: "屋", reading: "や / おく", meaning: "Shop / House" },
        { kanji: "産", reading: "うむ / さん", meaning: "Produce / Birth" },
        { kanji: "業", reading: "ぎょう", meaning: "Business / Industry" }
      ]
    },
    {
      id: 7,
      title: "Lesson 7: Nature",
      cards: [
        { kanji: "林", reading: "はやし / りん", meaning: "Woods / Grove" },
        { kanji: "森", reading: "もり / しん", meaning: "Forest" },
        { kanji: "地", reading: "ち / じ", meaning: "Ground / Earth" },
        { kanji: "池", reading: "いけ / ち", meaning: "Pond" },
        { kanji: "海", reading: "うみ / かい", meaning: "Sea / Ocean" },
        { kanji: "洋", reading: "よう", meaning: "Ocean / Western" },
        { kanji: "雪", reading: "ゆき / せつ", meaning: "Snow" },
        { kanji: "光", reading: "ひかり / こう", meaning: "Light / Shine" },
        { kanji: "台", reading: "だい / たい", meaning: "Stand / Platform" },
        { kanji: "風", reading: "かぜ / ふう", meaning: "Wind" }
      ]
    },
    {
      id: 8,
      title: "Lesson 8: Seasons",
      cards: [
        { kanji: "季", reading: "き", meaning: "Season" },
        { kanji: "節", reading: "ふし / せつ", meaning: "Joint / Season" },
        { kanji: "春", reading: "はる / しゅん", meaning: "Spring" },
        { kanji: "夏", reading: "なつ / か", meaning: "Summer" },
        { kanji: "秋", reading: "あき / しゅう", meaning: "Autumn / Fall" },
        { kanji: "冬", reading: "ふゆ / とう", meaning: "Winter" },
        { kanji: "暑", reading: "あつい / しょ", meaning: "Hot (weather)" },
        { kanji: "寒", reading: "さむい / かん", meaning: "Cold (weather)" },
        { kanji: "暖", reading: "あたたかい / だん", meaning: "Warm" },
        { kanji: "涼", reading: "すずしい / りょう", meaning: "Cool" }
      ]
    },
    {
      id: 9,
      title: "Lesson 9: Body",
      cards: [
        { kanji: "体", reading: "からだ / たい", meaning: "Body" },
        { kanji: "頭", reading: "あたま / とう", meaning: "Head" },
        { kanji: "顔", reading: "かお / がん", meaning: "Face" },
        { kanji: "首", reading: "くび / しゅ", meaning: "Neck" },
        { kanji: "心", reading: "こころ / しん", meaning: "Heart / Mind" },
        { kanji: "声", reading: "こえ / せい", meaning: "Voice" },
        { kanji: "病", reading: "やまい / びょう", meaning: "Illness / Sick" },
        { kanji: "薬", reading: "くすり / やく", meaning: "Medicine" },
        { kanji: "科", reading: "か", meaning: "Department / Course" },
        { kanji: "内", reading: "うち / ない", meaning: "Inside / Internal" }
      ]
    },
    {
      id: 10,
      title: "Lesson 10: Time",
      cards: [
        { kanji: "朝", reading: "あさ / ちょう", meaning: "Morning" },
        { kanji: "昼", reading: "ひる / ちゅう", meaning: "Noon / Daytime" },
        { kanji: "夜", reading: "よる / や", meaning: "Night" },
        { kanji: "夕", reading: "ゆう / せき", meaning: "Evening" },
        { kanji: "方", reading: "かた / ほう", meaning: "Direction / Person" },
        { kanji: "晩", reading: "ばん", meaning: "Night / Evening" },
        { kanji: "計", reading: "はかる / けい", meaning: "Measure / Plan" },
        { kanji: "曜", reading: "よう", meaning: "Day of the week" },
        { kanji: "以", reading: "い", meaning: "By means of / From" },
        { kanji: "度", reading: "たび / ど", meaning: "Degree / Times" }
      ]
    },
    {
      id: 11,
      title: "Lesson 11: Verbs 1",
      cards: [
        { kanji: "止", reading: "とまる / し", meaning: "To stop" },
        { kanji: "歩", reading: "あるく / ほ", meaning: "To walk" },
        { kanji: "走", reading: "はしる / そう", meaning: "To run" },
        { kanji: "起", reading: "おきる / き", meaning: "To wake up" },
        { kanji: "持", reading: "もつ / じ", meaning: "To hold / Have" },
        { kanji: "待", reading: "まつ / たい", meaning: "To wait" },
        { kanji: "借", reading: "かりる / しゃく", meaning: "To borrow" },
        { kanji: "貸", reading: "かす / たい", meaning: "To lend" },
        { kanji: "始", reading: "はじまる / し", meaning: "To begin" },
        { kanji: "終", reading: "おわる / しゅう", meaning: "To end" }
      ]
    },
    {
      id: 12,
      title: "Lesson 12: Family",
      cards: [
        { kanji: "家", reading: "いえ / か / け", meaning: "House / Family" },
        { kanji: "族", reading: "ぞく", meaning: "Tribe / Family" },
        { kanji: "私", reading: "わたし / し", meaning: "I / Private" },
        { kanji: "自", reading: "みずから / じ", meaning: "Self" },
        { kanji: "親", reading: "おや / しん", meaning: "Parent / Intimate" },
        { kanji: "両", reading: "りょう", meaning: "Both" },
        { kanji: "兄", reading: "あに / きょう", meaning: "Older brother" },
        { kanji: "弟", reading: "おとうと / だい", meaning: "Younger brother" },
        { kanji: "姉", reading: "あね / し", meaning: "Older sister" },
        { kanji: "妹", reading: "いもうと / まい", meaning: "Younger sister" }
      ]
    },
    {
      id: 13,
      title: "Lesson 13: Everyday Life",
      cards: [
        { kanji: "活", reading: "かつ", meaning: "Lively / Life" },
        { kanji: "回", reading: "まわる / かい", meaning: "Turn / Times" },
        { kanji: "主", reading: "ぬし / しゅ", meaning: "Master / Main" },
        { kanji: "色", reading: "いろ / しき", meaning: "Color" },
        { kanji: "形", reading: "かたち / けい", meaning: "Shape / Form" },
        { kanji: "品", reading: "しな / ひん", meaning: "Goods / Quality" },
        { kanji: "民", reading: "たみ / みん", meaning: "People / Nation" },
        { kanji: "服", reading: "ふく", meaning: "Clothes" },
        { kanji: "犬", reading: "いぬ / けん", meaning: "Dog" },
        { kanji: "同", reading: "おなじ / どう", meaning: "Same" }
      ]
    },
    {
      id: 14,
      title: "Lesson 14: Food",
      cards: [
        { kanji: "米", reading: "こめ / まい / べい", meaning: "Rice" },
        { kanji: "料", reading: "りょう", meaning: "Fee / Material" },
        { kanji: "理", reading: "り", meaning: "Reason / Logic" },
        { kanji: "肉", reading: "にく", meaning: "Meat" },
        { kanji: "鳥", reading: "とり / ちょう", meaning: "Bird" },
        { kanji: "野", reading: "の / や", meaning: "Field / Wild" },
        { kanji: "菜", reading: "さい", meaning: "Vegetable" },
        { kanji: "茶", reading: "ちゃ / さ", meaning: "Tea" },
        { kanji: "飯", reading: "めし / はん", meaning: "Meal / Rice" },
        { kanji: "味", reading: "あじ / み", meaning: "Taste / Flavor" }
      ]
    },
    {
      id: 15,
      title: "Lesson 15: Radicals",
      cards: [
        { kanji: "代", reading: "かわる / だい", meaning: "Substitute / Age" },
        { kanji: "使", reading: "つかう / し", meaning: "To use" },
        { kanji: "作", reading: "つくる / さく", meaning: "To make" },
        { kanji: "化", reading: "ばける / か", meaning: "Change / Transform" },
        { kanji: "信", reading: "しん", meaning: "Trust / Believe" },
        { kanji: "進", reading: "すすむ / しん", meaning: "Advance / Progress" },
        { kanji: "送", reading: "おくる / そう", meaning: "To send" },
        { kanji: "返", reading: "かえす / へん", meaning: "To return" },
        { kanji: "洗", reading: "あらう / せん", meaning: "To wash" },
        { kanji: "注", reading: "そそぐ / ちゅう", meaning: "Pour / Note" }
      ]
    },
    {
      id: 16,
      title: "Lesson 16: Place",
      cards: [
        { kanji: "場", reading: "ば / じょう", meaning: "Place" },
        { kanji: "建", reading: "たてる / けん", meaning: "To build" },
        { kanji: "物", reading: "もの / ぶつ", meaning: "Thing" },
        { kanji: "院", reading: "いん", meaning: "Institution" },
        { kanji: "館", reading: "やかた / かん", meaning: "Building / Hall" },
        { kanji: "堂", reading: "どう", meaning: "Hall" },
        { kanji: "室", reading: "むろ / しつ", meaning: "Room" },
        { kanji: "工", reading: "こう / く", meaning: "Craft / Construction" },
        { kanji: "図", reading: "はかる / と / ず", meaning: "Drawing / Diagram" },
        { kanji: "号", reading: "ごう", meaning: "Number / Signal" }
      ]
    },
    {
      id: 17,
      title: "Lesson 17: Traffic",
      cards: [
        { kanji: "交", reading: "まじる / こう", meaning: "Intersect / Exchange" },
        { kanji: "通", reading: "とおる / つう", meaning: "Pass / Commute" },
        { kanji: "動", reading: "うごく / どう", meaning: "To move" },
        { kanji: "乗", reading: "のる / じょう", meaning: "To ride" },
        { kanji: "降", reading: "おりる / ふる", meaning: "To get off / Fall" },
        { kanji: "運", reading: "はこぶ / うん", meaning: "Transport / Luck" },
        { kanji: "転", reading: "ころがる / てん", meaning: "Roll / Turn" },
        { kanji: "帰", reading: "かえる / き", meaning: "To return home" },
        { kanji: "発", reading: "はつ / ぱつ", meaning: "Depart / Emit" },
        { kanji: "着", reading: "きる / つく / ちゃく", meaning: "To arrive / Wear" }
      ]
    },
    {
      id: 18,
      title: "Lesson 18: School 1",
      cards: [
        { kanji: "漢", reading: "かん", meaning: "Chinese / Han" },
        { kanji: "字", reading: "じ", meaning: "Character / Letter" },
        { kanji: "文", reading: "ふみ / ぶん / もん", meaning: "Sentence / Literature" },
        { kanji: "教", reading: "おしえる / きょう", meaning: "Teach / Religion" },
        { kanji: "勉", reading: "つとめる / べん", meaning: "Exertion / Endeavor" },
        { kanji: "習", reading: "ならう / しゅう", meaning: "To learn" },
        { kanji: "英", reading: "えい", meaning: "English / Excellent" },
        { kanji: "考", reading: "かんがえる / こう", meaning: "To think" },
        { kanji: "研", reading: "とぐ / けん", meaning: "Polish / Research" },
        { kanji: "究", reading: "きわめる / きゅう", meaning: "Investigate / Deep" }
      ]
    },
    {
      id: 19,
      title: "Lesson 19: School 2",
      cards: [
        { kanji: "問", reading: "とう / もん", meaning: "Question / Ask" },
        { kanji: "題", reading: "だい", meaning: "Topic / Title" },
        { kanji: "試", reading: "こころみる / し", meaning: "Try / Test" },
        { kanji: "験", reading: "けん", meaning: "Examine / Test" },
        { kanji: "質", reading: "しつ", meaning: "Quality / Substance" },
        { kanji: "合", reading: "あう / ごう", meaning: "Fit / Match" },
        { kanji: "答", reading: "こたえる / とう", meaning: "To answer" },
        { kanji: "用", reading: "もちいる / よう", meaning: "Use / Business" },
        { kanji: "紙", reading: "かみ / し", meaning: "Paper" },
        { kanji: "意", reading: "い", meaning: "Mind / Meaning" }
      ]
    },
    {
      id: 20,
      title: "Lesson 20: Verbs 2",
      cards: [
        { kanji: "引", reading: "ひく / いん", meaning: "To pull" },
        { kanji: "開", reading: "あける / ひらく / かい", meaning: "To open" },
        { kanji: "閉", reading: "とじる / しめる", meaning: "To close" },
        { kanji: "去", reading: "さる / きょ", meaning: "To leave / Past" },
        { kanji: "死", reading: "しぬ / し", meaning: "To die" },
        { kanji: "集", reading: "あつまる / しゅう", meaning: "To gather" },
        { kanji: "知", reading: "しる / ち", meaning: "To know" },
        { kanji: "売", reading: "うる / ばい", meaning: "To sell" },
        { kanji: "説", reading: "とく / せつ", meaning: "Explain / Opinion" },
        { kanji: "思", reading: "おもう / し", meaning: "To think" }
      ]
    }
  ]
};

const VOCAB_N5_DATA = {
  title: "Vocab N5",
  lessons: [
    {
      id: 1,
      title: "Lesson 1: Pictographs 1 (Vocab)",
      cards: [
        { kanji: "山", reading: "やま", meaning: "Mountain" },
        { kanji: "ふじ山", reading: "ふじさん", meaning: "Mt. Fuji" },
        { kanji: "登山", reading: "とざん", meaning: "Mountain climbing" },
        { kanji: "川", reading: "かわ", meaning: "River" },
        { kanji: "山川さん", reading: "やまかわさん", meaning: "Mr./Ms. Yamakawa" },
        { kanji: "インダス川", reading: "インダスがわ", meaning: "Indus River" },
        { kanji: "田んぼ", reading: "たんぼ", meaning: "Rice field" },
        { kanji: "山田さん", reading: "やまださん", meaning: "Mr./Ms. Yamada" },
        { kanji: "水田", reading: "すいでん", meaning: "Rice field" },
        { kanji: "油田", reading: "ゆでん", meaning: "Oil field" },
        { kanji: "日曜日", reading: "にちようび", meaning: "Sunday" },
        { kanji: "日本", reading: "にほん", meaning: "Japan" },
        { kanji: "休日", reading: "きゅうじつ", meaning: "Holiday" },
        { kanji: "月曜日", reading: "げつようび", meaning: "Monday" },
        { kanji: "一月", reading: "いちがつ", meaning: "January" },
        { kanji: "今月", reading: "こんげつ", meaning: "This month" },
        { kanji: "火曜日", reading: "かようび", meaning: "Tuesday" },
        { kanji: "火山", reading: "かざん", meaning: "Volcano" },
        { kanji: "火事", reading: "かじ", meaning: "Fire / Conflagration" },
        { kanji: "水曜日", reading: "すいようび", meaning: "Wednesday" },
        { kanji: "水道", reading: "すいどう", meaning: "Waterworks" },
        { kanji: "木曜日", reading: "もくようび", meaning: "Thursday" },
        { kanji: "お金", reading: "おかね", meaning: "Money" },
        { kanji: "金曜日", reading: "きんようび", meaning: "Friday" },
        { kanji: "土曜日", reading: "どようび", meaning: "Saturday" },
        { kanji: "土地", reading: "とち", meaning: "Land" }
      ]
    },
    {
      id: 2,
      title: "Lesson 2: Numbers (Vocab)",
      cards: [
        { kanji: "一つ", reading: "ひとつ", meaning: "One (thing)" },
        { kanji: "一月一日", reading: "いちがつついたち", meaning: "January 1st" },
        { kanji: "一日", reading: "いちにち", meaning: "One day" },
        { kanji: "一人", reading: "ひとり", meaning: "One person" },
        { kanji: "二つ", reading: "ふたつ", meaning: "Two (things)" },
        { kanji: "二月", reading: "にがつ", meaning: "February" },
        { kanji: "二日", reading: "ふつか", meaning: "2nd day / 2 days" },
        { kanji: "二人", reading: "ふたり", meaning: "Two people" },
        { kanji: "三つ", reading: "みっつ", meaning: "Three (things)" },
        { kanji: "三月", reading: "さんがつ", meaning: "March" },
        { kanji: "三日", reading: "みっか", meaning: "3rd day / 3 days" },
        { kanji: "三角", reading: "さんかく", meaning: "Triangle" },
        { kanji: "四つ", reading: "よっつ", meaning: "Four (things)" },
        { kanji: "四月", reading: "しがつ", meaning: "April" },
        { kanji: "四日", reading: "よっか", meaning: "4th day / 4 days" },
        { kanji: "五つ", reading: "いつつ", meaning: "Five (things)" },
        { kanji: "五月", reading: "ごがつ", meaning: "May" },
        { kanji: "五日", reading: "いつか", meaning: "5th day / 5 days" },
        { kanji: "五円", reading: "ごえん", meaning: "5 Yen" },
        { kanji: "六つ", reading: "むっつ", meaning: "Six (things)" },
        { kanji: "六月", reading: "ろくがつ", meaning: "June" },
        { kanji: "六日", reading: "むいか", meaning: "6th day / 6 days" },
        { kanji: "六本木", reading: "ろっぽんぎ", meaning: "Roppongi" },
        { kanji: "七つ", reading: "ななつ", meaning: "Seven (things)" },
        { kanji: "七月", reading: "しちがつ", meaning: "July" },
        { kanji: "七日", reading: "なのか", meaning: "7th day / 7 days" },
        { kanji: "八つ", reading: "やっつ", meaning: "Eight (things)" },
        { kanji: "八月", reading: "はちがつ", meaning: "August" },
        { kanji: "八日", reading: "ようか", meaning: "8th day / 8 days" },
        { kanji: "八百屋", reading: "やおや", meaning: "Vegetable shop" },
        { kanji: "九つ", reading: "ここのつ", meaning: "Nine (things)" },
        { kanji: "九月", reading: "くがつ", meaning: "September" },
        { kanji: "九日", reading: "ここのか", meaning: "9th day / 9 days" },
        { kanji: "九州", reading: "きゅうしゅう", meaning: "Kyushu" },
        { kanji: "十", reading: "とお / じゅう", meaning: "Ten" },
        { kanji: "十月", reading: "じゅうがつ", meaning: "October" },
        { kanji: "十日", reading: "とおか", meaning: "10th day / 10 days" },
        { kanji: "十分な", reading: "じゅうぶんな", meaning: "Enough / Sufficient" }
      ]
    },
    {
      id: 3,
      title: "Lesson 3: Numbers & Signs (Vocab)",
      cards: [
        { kanji: "三百", reading: "さんびゃく", meaning: "300" },
        { kanji: "六百", reading: "ろっぴゃく", meaning: "600" },
        { kanji: "百科事典", reading: "ひゃっかじてん", meaning: "Encyclopedia" },
        { kanji: "二千", reading: "にせん", meaning: "2,000" },
        { kanji: "三千", reading: "さんぜん", meaning: "3,000" },
        { kanji: "千葉県", reading: "ちばけん", meaning: "Chiba Prefecture" },
        { kanji: "一万", reading: "いちまん", meaning: "10,000" },
        { kanji: "万国", reading: "ばんこく", meaning: "All nations" },
        { kanji: "万年筆", reading: "まんねんひつ", meaning: "Fountain pen" },
        { kanji: "四万円", reading: "よんまんえん", meaning: "40,000 Yen" },
        { kanji: "円高", reading: "えんだか", meaning: "Strong Yen" },
        { kanji: "三千年", reading: "さんぜんねん", meaning: "3,000 years" },
        { kanji: "来年", reading: "らいねん", meaning: "Next year" },
        { kanji: "年金", reading: "ねんきん", meaning: "Pension" },
        { kanji: "上がる", reading: "あがる", meaning: "To go up" },
        { kanji: "水上スキー", reading: "すいじょうスキー", meaning: "Water-skiing" },
        { kanji: "上着", reading: "うわぎ", meaning: "Jacket" },
        { kanji: "下がる", reading: "さがる", meaning: "To go down" },
        { kanji: "上下", reading: "じょうげ", meaning: "Up and down" },
        { kanji: "地下鉄", reading: "ちかてつ", meaning: "Subway" },
        { kanji: "一日中", reading: "いちにちじゅう", meaning: "All day long" },
        { kanji: "中学", reading: "ちゅうがく", meaning: "Junior high school" },
        { kanji: "中心", reading: "ちゅうしん", meaning: "Center" },
        { kanji: "半年", reading: "はんとし", meaning: "Half a year" },
        { kanji: "半分", reading: "はんぶん", meaning: "Half" },
        { kanji: "四時半", reading: "よじはん", meaning: "4:30" },
        { kanji: "半日", reading: "はんにち", meaning: "Half a day" },
        { kanji: "分ける", reading: "わける", meaning: "To divide" },
        { kanji: "分かる", reading: "わかる", meaning: "To understand" },
        { kanji: "10分", reading: "じゅっぷん", meaning: "10 minutes" }
      ]
    },
    {
      id: 4,
      title: "Lesson 4: Pictographs 2 (Vocab)",
      cards: [
        { kanji: "三人", reading: "さんにん", meaning: "Three people" },
        { kanji: "日本人", reading: "にほんじん", meaning: "Japanese person" },
        { kanji: "子ども", reading: "こども", meaning: "Child" },
        { kanji: "女子", reading: "じょし", meaning: "Female / Girl" },
        { kanji: "親子", reading: "おやこ", meaning: "Parent and child" },
        { kanji: "調子", reading: "ちょうし", meaning: "Condition" },
        { kanji: "女の人", reading: "おんなのひと", meaning: "Woman" },
        { kanji: "女の子", reading: "おんなのこ", meaning: "Girl" },
        { kanji: "女性", reading: "じょせい", meaning: "Female / Woman" },
        { kanji: "男の子", reading: "おとこのこ", meaning: "Boy" },
        { kanji: "男女", reading: "だんじょ", meaning: "Men and women" },
        { kanji: "長男", reading: "ちょうなん", meaning: "Eldest son" },
        { kanji: "男性", reading: "だんせい", meaning: "Male / Man" },
        { kanji: "一日目", reading: "いちにちめ", meaning: "First day" },
        { kanji: "目薬", reading: "めぐすり", meaning: "Eye drops" },
        { kanji: "目的", reading: "もくてき", meaning: "Purpose" },
        { kanji: "入口", reading: "いりぐち", meaning: "Entrance" },
        { kanji: "人口", reading: "じんこう", meaning: "Population" },
        { kanji: "非常口", reading: "ひじょうぐち", meaning: "Emergency exit" },
        { kanji: "耳鼻科", reading: "じびか", meaning: "ENT clinic" },
        { kanji: "上手な", reading: "じょうずな", meaning: "Skillful" },
        { kanji: "下手な", reading: "へたな", meaning: "Unskillful" },
        { kanji: "手紙", reading: "てがみ", meaning: "Letter" },
        { kanji: "足りる", reading: "たりる", meaning: "To be sufficient" },
        { kanji: "一足", reading: "いっそく", meaning: "A pair of shoes" },
        { kanji: "遠足", reading: "えんそく", meaning: "Excursion" },
        { kanji: "水力", reading: "すいりょく", meaning: "Hydraulic power" },
        { kanji: "体力", reading: "たいりょく", meaning: "Physical strength" }
      ]
    },
    {
      id: 5,
      title: "Lesson 5: Pictographs 3 (Vocab)",
      cards: [
        { kanji: "お父さん", reading: "おとうさん", meaning: "Father" },
        { kanji: "父親", reading: "ちちおや", meaning: "Father" },
        { kanji: "お母さん", reading: "おかあさん", meaning: "Mother" },
        { kanji: "父母", reading: "ふぼ", meaning: "Parents" },
        { kanji: "母国", reading: "ぼこく", meaning: "Motherland" },
        { kanji: "先月", reading: "せんげつ", meaning: "Last month" },
        { kanji: "先輩", reading: "せんぱい", meaning: "Senior" },
        { kanji: "先生", reading: "せんせい", meaning: "Teacher" },
        { kanji: "生まれる", reading: "うまれる", meaning: "To be born" },
        { kanji: "生きる", reading: "いきる", meaning: "To live" },
        { kanji: "生活", reading: "せいかつ", meaning: "Life / Living" },
        { kanji: "学生", reading: "がくせい", meaning: "Student" },
        { kanji: "大学", reading: "だいがく", meaning: "University" },
        { kanji: "科学", reading: "かがく", meaning: "Science" },
        { kanji: "留学する", reading: "りゅうがくする", meaning: "To study abroad" },
        { kanji: "学校", reading: "がっこう", meaning: "School" },
        { kanji: "校長", reading: "こうちょう", meaning: "Principal" },
        { kanji: "小学校", reading: "しょうがっこう", meaning: "Elementary school" },
        { kanji: "友だち", reading: "ともだち", meaning: "Friend" },
        { kanji: "友人", reading: "ゆうじん", meaning: "Friend" },
        { kanji: "親友", reading: "しんゆう", meaning: "Close friend" },
        { kanji: "本屋", reading: "ほんや", meaning: "Bookstore" },
        { kanji: "山本さん", reading: "やまもとさん", meaning: "Mr./Ms. Yamamoto" },
        { kanji: "毎日", reading: "まいにち", meaning: "Every day" },
        { kanji: "毎月", reading: "まいつき", meaning: "Every month" },
        { kanji: "毎年", reading: "まいとし / まいねん", meaning: "Every year" },
        { kanji: "毎朝", reading: "まいあさ", meaning: "Every morning" },
        { kanji: "何月", reading: "なんがつ", meaning: "What month" },
        { kanji: "何人", reading: "なんにん", meaning: "How many people" },
        { kanji: "何時", reading: "なんじ", meaning: "What time" }
      ]
    },
    {
      id: 6,
      title: "Lesson 6: Directions (Vocab)",
      cards: [
        { kanji: "三日前", reading: "みっかまえ", meaning: "3 days ago" },
        { kanji: "前半", reading: "ぜんはん", meaning: "First half" },
        { kanji: "後ろ", reading: "うしろ", meaning: "Behind / Back" },
        { kanji: "前後", reading: "ぜんご", meaning: "Front and back" },
        { kanji: "最後", reading: "さいご", meaning: "The last" },
        { kanji: "外国", reading: "がいこく", meaning: "Foreign country" },
        { kanji: "左手", reading: "ひだりて", meaning: "Left hand" },
        { kanji: "左側", reading: "ひだりがわ", meaning: "Left side" },
        { kanji: "右手", reading: "みぎて", meaning: "Right hand" },
        { kanji: "左右", reading: "さゆう", meaning: "Left and right" },
        { kanji: "右側", reading: "みぎがわ", meaning: "Right side" },
        { kanji: "東口", reading: "ひがしぐち", meaning: "East exit" },
        { kanji: "東京", reading: "とうきょう", meaning: "Tokyo" },
        { kanji: "東洋", reading: "とうよう", meaning: "The Orient" },
        { kanji: "西口", reading: "にしぐち", meaning: "West exit" },
        { kanji: "東西", reading: "とうざい", meaning: "East and west" },
        { kanji: "西洋", reading: "せいよう", meaning: "The West" },
        { kanji: "南口", reading: "みなみぐち", meaning: "South exit" },
        { kanji: "東南アジア", reading: "とうなんアジア", meaning: "Southeast Asia" },
        { kanji: "南極", reading: "なんきょく", meaning: "South Pole" },
        { kanji: "北口", reading: "きたぐち", meaning: "North exit" },
        { kanji: "南北", reading: "なんぼく", meaning: "North and south" },
        { kanji: "北海道", reading: "ほっかいどう", meaning: "Hokkaido" },
        { kanji: "名前", reading: "なまえ", meaning: "Name" },
        { kanji: "有名な", reading: "ゆうめいな", meaning: "Famous" },
        { kanji: "10名", reading: "じゅうめい", meaning: "10 people" },
        { kanji: "人名", reading: "じんめい", meaning: "Person's name" }
      ]
    },
    {
      id: 7,
      title: "Lesson 7: Pictographs 4 (Vocab)",
      cards: [
        { kanji: "水牛", reading: "すいぎゅう", meaning: "Water buffalo" },
        { kanji: "牛肉", reading: "ぎゅうにく", meaning: "Beef" },
        { kanji: "牛乳", reading: "ぎゅうにゅう", meaning: "Cow's milk" },
        { kanji: "馬車", reading: "ばしゃ", meaning: "Horse carriage" },
        { kanji: "乗馬", reading: "じょうば", meaning: "Horse riding" },
        { kanji: "金魚", reading: "きんぎょ", meaning: "Goldfish" },
        { kanji: "人魚", reading: "にんぎょ", meaning: "Mermaid" },
        { kanji: "貝がら", reading: "かいがら", meaning: "Seashell" },
        { kanji: "大雨", reading: "おおあめ", meaning: "Heavy rain" },
        { kanji: "雨期", reading: "うき", meaning: "Rainy season" },
        { kanji: "天気", reading: "てんき", meaning: "Weather" },
        { kanji: "天国", reading: "てんごく", meaning: "Heaven / Paradise" },
        { kanji: "人気", reading: "にんき", meaning: "Popularity" },
        { kanji: "気をつける", reading: "きをつける", meaning: "To take care" },
        { kanji: "気持ち", reading: "きもち", meaning: "Feeling" },
        { kanji: "電車", reading: "でんしゃ", meaning: "Train" },
        { kanji: "自動車", reading: "じどうしゃ", meaning: "Automobile" },
        { kanji: "正門", reading: "せいもん", meaning: "Main gate" },
        { kanji: "専門", reading: "せんもん", meaning: "Major / Specialty" },
        { kanji: "午前", reading: "ごぜん", meaning: "Morning / a.m." },
        { kanji: "午後", reading: "ごご", meaning: "Afternoon / p.m." }
      ]
    },
    {
      id: 8,
      title: "Lesson 8: Adjectives (Vocab)",
      cards: [
        { kanji: "大きい", reading: "おおきい", meaning: "Big" },
        { kanji: "大人", reading: "おとな", meaning: "Adult" },
        { kanji: "小さい", reading: "ちいさい", meaning: "Small" },
        { kanji: "小川", reading: "おがわ", meaning: "Stream" },
        { kanji: "小犬", reading: "こいぬ", meaning: "Puppy" },
        { kanji: "高い", reading: "たかい", meaning: "High / Expensive" },
        { kanji: "高校生", reading: "こうこうせい", meaning: "High school student" },
        { kanji: "安い", reading: "やすい", meaning: "Cheap" },
        { kanji: "安心する", reading: "あんしんする", meaning: "To be relieved" },
        { kanji: "安全", reading: "あんぜん", meaning: "Safety" },
        { kanji: "新しい", reading: "あたらしい", meaning: "New" },
        { kanji: "新聞", reading: "しんぶん", meaning: "Newspaper" },
        { kanji: "新人", reading: "しんじん", meaning: "Newcomer" },
        { kanji: "新年", reading: "しんねん", meaning: "New Year" },
        { kanji: "古い", reading: "ふるい", meaning: "Old" },
        { kanji: "中古車", reading: "ちゅうこしゃ", meaning: "Used car" },
        { kanji: "長い", reading: "ながい", meaning: "Long" },
        { kanji: "社長", reading: "しゃちょう", meaning: "Company president" },
        { kanji: "多い", reading: "おおい", meaning: "Many / Much" },
        { kanji: "多少", reading: "たしょう", meaning: "More or less" },
        { kanji: "多数決", reading: "たすうけつ", meaning: "Majority decision" },
        { kanji: "少ない", reading: "すくない", meaning: "Few / Little" },
        { kanji: "少し", reading: "すこし", meaning: "A little" },
        { kanji: "少年", reading: "しょうねん", meaning: "Boy" },
        { kanji: "少女", reading: "しょうじょ", meaning: "Girl" },
        { kanji: "早い", reading: "はやい", meaning: "Early / Fast" },
        { kanji: "早朝", reading: "そうちょう", meaning: "Early morning" },
        { kanji: "早送り", reading: "はやおくり", meaning: "Fast forward" }
      ]
    },
    {
      id: 9,
      title: "Lesson 9: Verbs (Vocab)",
      cards: [
        { kanji: "行く", reading: "いく", meaning: "To go" },
        { kanji: "行き方", reading: "いきかた", meaning: "How to go" },
        { kanji: "銀行", reading: "ぎんこう", meaning: "Bank" },
        { kanji: "3行目", reading: "さんぎょうめ", meaning: "3rd line" },
        { kanji: "来る", reading: "くる", meaning: "To come" },
        { kanji: "来週", reading: "らいしゅう", meaning: "Next week" },
        { kanji: "将来", reading: "しょうらい", meaning: "Future" },
        { kanji: "食べる", reading: "たべる", meaning: "To eat" },
        { kanji: "外食する", reading: "がいしょくする", meaning: "To eat out" },
        { kanji: "食料品", reading: "しょくりょうひん", meaning: "Groceries" },
        { kanji: "食堂", reading: "しょくどう", meaning: "Dining hall / Cafeteria" },
        { kanji: "見る", reading: "みる", meaning: "To see / look" },
        { kanji: "見せる", reading: "みせる", meaning: "To show" },
        { kanji: "見学する", reading: "けんがくする", meaning: "Study tour / Visit" },
        { kanji: "意見", reading: "いけん", meaning: "Opinion" },
        { kanji: "入る", reading: "はいる", meaning: "To enter" },
        { kanji: "入れる", reading: "いれる", meaning: "To put in" },
        { kanji: "入学する", reading: "にゅうがくする", meaning: "To enter school" },
        { kanji: "出る", reading: "でる", meaning: "To exit / leave" },
        { kanji: "出す", reading: "だす", meaning: "To take out / submit" },
        { kanji: "出口", reading: "でぐち", meaning: "Exit" },
        { kanji: "出席する", reading: "しゅっせきする", meaning: "To attend" },
        { kanji: "立つ", reading: "たつ", meaning: "To stand" },
        { kanji: "立食パーティー", reading: "りっしょくパーティー", meaning: "Buffet party" },
        { kanji: "国立大学", reading: "こくりつだいがく", meaning: "National university" },
        { kanji: "書く", reading: "かく", meaning: "To write" },
        { kanji: "読書", reading: "どくしょ", meaning: "Reading books" },
        { kanji: "下書き", reading: "したがき", meaning: "Draft" },
        { kanji: "辞書", reading: "じしょ", meaning: "Dictionary" },
        { kanji: "言う", reading: "いう", meaning: "To say" },
        { kanji: "言語", reading: "げんご", meaning: "Language" },
        { kanji: "伝言", reading: "でんごん", meaning: "Message" },
        { kanji: "飲む", reading: "のむ", meaning: "To drink" },
        { kanji: "飲み物", reading: "のみもの", meaning: "Drink / Beverage" },
        { kanji: "飲食店", reading: "いんしょくてん", meaning: "Restaurant" }
      ]
    },
    {
      id: 10,
      title: "Lesson 10: Combinations 1 (Vocab)",
      cards: [
        { kanji: "話す", reading: "はなす", meaning: "To speak / talk" },
        { kanji: "話", reading: "はなし", meaning: "Story / Conversation" },
        { kanji: "電話", reading: "でんわ", meaning: "Telephone" },
        { kanji: "会話", reading: "かいわ", meaning: "Conversation" },
        { kanji: "読む", reading: "よむ", meaning: "To read" },
        { kanji: "日本語", reading: "にほんご", meaning: "Japanese language" },
        { kanji: "中国語", reading: "ちゅうごくご", meaning: "Chinese language" },
        { kanji: "外国語", reading: "がいこくご", meaning: "Foreign language" },
        { kanji: "あいだ", reading: "あいだ", meaning: "Between" },
        { kanji: "時間", reading: "じかん", meaning: "Time / Hour" },
        { kanji: "一年間", reading: "いちねんかん", meaning: "For one year" },
        { kanji: "間に合う", reading: "まニアう", meaning: "To be on time" },
        { kanji: "聞く", reading: "きく", meaning: "To hear / listen" },
        { kanji: "聞こえる", reading: "きこえる", meaning: "Can be heard" },
        { kanji: "買う", reading: "かう", meaning: "To buy" },
        { kanji: "買い物する", reading: "かいものする", meaning: "To shop" },
        { kanji: "売買する", reading: "ばいばいする", meaning: "To buy and sell" },
        { kanji: "休む", reading: "やすむ", meaning: "To rest" },
        { kanji: "休み", reading: "やすみ", meaning: "Holiday / Rest" },
        { kanji: "夏休み", reading: "なつやすみ", meaning: "Summer vacation" },
        { kanji: "時", reading: "とき", meaning: "Time / When" },
        { kanji: "4時", reading: "よじ", meaning: "4 o'clock" },
        { kanji: "1時間", reading: "いちじかん", meaning: "1 hour" },
        { kanji: "時計", reading: "とけい", meaning: "Clock / Watch" },
        { kanji: "1週間", reading: "いっしゅうかん", meaning: "1 week" },
        { kanji: "先週", reading: "せんしゅう", meaning: "Last week" },
        { kanji: "今週", reading: "こんしゅう", meaning: "This week" },
        { kanji: "道", reading: "みち", meaning: "Road / Street" },
        { kanji: "車道", reading: "しゃどう", meaning: "Roadway" },
        { kanji: "書道", reading: "しょどう", meaning: "Calligraphy" }
      ]
    },
    {
      id: 11,
      title: "Lesson 11: Combinations 2 (Vocab)",
      cards: [
        { kanji: "今", reading: "いま", meaning: "Now" },
        { kanji: "今年", reading: "ことし", meaning: "This year" },
        { kanji: "今日", reading: "きょう", meaning: "Today" },
        { kanji: "会う", reading: "あう", meaning: "To meet" },
        { kanji: "新年会", reading: "しんねんかい", meaning: "New Year party" },
        { kanji: "会議", reading: "かいぎ", meaning: "Meeting" },
        { kanji: "社会", reading: "しゃかい", meaning: "Society" },
        { kanji: "会社", reading: "かいしゃ", meaning: "Company" },
        { kanji: "神社", reading: "じんじゃ", meaning: "Shrine" },
        { kanji: "店", reading: "みせ", meaning: "Shop / Store" },
        { kanji: "店員", reading: "てんいん", meaning: "Shop assistant" },
        { kanji: "売店", reading: "ばいてん", meaning: "Stand / Kiosk" },
        { kanji: "駅", reading: "えき", meaning: "Station" },
        { kanji: "駅長", reading: "えきちょう", meaning: "Stationmaster" },
        { kanji: "駅前", reading: "えきまえ", meaning: "In front of station" },
        { kanji: "花", reading: "はな", meaning: "Flower" },
        { kanji: "花見", reading: "はなみ", meaning: "Flower viewing" },
        { kanji: "花火", reading: "はなび", meaning: "Fireworks" },
        { kanji: "花屋", reading: "はなや", meaning: "Florist" },
        { kanji: "国", reading: "くに", meaning: "Country" },
        { kanji: "中国", reading: "ちゅうごく", meaning: "China" },
        { kanji: "国際会議", reading: "こくさいかいぎ", meaning: "International conference" },
        { kanji: "白い", reading: "しろい", meaning: "White" },
        { kanji: "白書", reading: "はくしょ", meaning: "White paper" },
        { kanji: "真っ白", reading: "まっしろ", meaning: "Pure white" },
        { kanji: "空", reading: "そら", meaning: "Sky" },
        { kanji: "空気", reading: "くうき", meaning: "Air" },
        { kanji: "大空", reading: "おおぞら", meaning: "Big sky" },
        { kanji: "空港", reading: "くうこう", meaning: "Airport" },
        { kanji: "電気", reading: "でんき", meaning: "Electricity / Light" },
        { kanji: "電池", reading: "でんち", meaning: "Battery" }
      ]
    }
  ]
};

const VOCAB_N4_DATA = {
  title: "Vocab N4",
  lessons: [
    {
      id: 1,
      title: "Lesson 1: Address (Vocab)",
      cards: [
        { kanji: "住所", reading: "じゅうしょ", meaning: "Address" },
        { kanji: "住む", reading: "すむ", meaning: "To live" },
        { kanji: "住民", reading: "じゅうみん", meaning: "Residents" },
        { kanji: "場所", reading: "ばしょ", meaning: "Place" },
        { kanji: "近所", reading: "きんじょ", meaning: "Neighborhood" },
        { kanji: "事務所", reading: "じむしょ", meaning: "Office" },
        { kanji: "東京都", reading: "とうきょうと", meaning: "Metropolis of Tokyo" },
        { kanji: "京都", reading: "きょうと", meaning: "Kyoto" },
        { kanji: "首都", reading: "しゅと", meaning: "Capital city" },
        { kanji: "都合", reading: "つごう", meaning: "Convenience / Circumstances" },
        { kanji: "都道府県", reading: "とどうふけん", meaning: "Prefectures of Japan" },
        { kanji: "大阪府", reading: "おおさかふ", meaning: "Osaka Prefecture" },
        { kanji: "政府", reading: "せいふ", meaning: "Government" },
        { kanji: "山口県", reading: "やまぐちけん", meaning: "Yamaguchi Prefecture" },
        { kanji: "県庁", reading: "けんちょう", meaning: "Prefectural office" },
        { kanji: "京都市", reading: "きょうとし", meaning: "Kyoto City" },
        { kanji: "市長", reading: "しちょう", meaning: "Mayor" },
        { kanji: "市民", reading: "しみん", meaning: "Citizen" },
        { kanji: "市場", reading: "いちば / しじょう", meaning: "Market" },
        { kanji: "北区", reading: "きたく", meaning: "Kita Ward" },
        { kanji: "区役所", reading: "くやくしょ", meaning: "Ward office" },
        { kanji: "区別する", reading: "くべつする", meaning: "To distinguish / Separate" },
        { kanji: "町", reading: "まち", meaning: "Town" },
        { kanji: "下町", reading: "したまち", meaning: "Downtown / Traditional area" },
        { kanji: "町長", reading: "ちょうちょう", meaning: "Town mayor" },
        { kanji: "村", reading: "むら", meaning: "Village" },
        { kanji: "村人", reading: "むらびと", meaning: "Villager" },
        { kanji: "村長", reading: "そんちょう", meaning: "Village head" }
      ]
    },
    {
      id: 2,
      title: "Lesson 2: Adjectives 1 (Vocab)",
      cards: [
        { kanji: "明るい", reading: "あかるい", meaning: "Bright / Cheerful" },
        { kanji: "明日", reading: "あした", meaning: "Tomorrow" },
        { kanji: "説明する", reading: "せつめいする", meaning: "To explain" },
        { kanji: "発明する", reading: "はつめいする", meaning: "To invent" },
        { kanji: "暗い", reading: "くらい", meaning: "Dark" },
        { kanji: "暗号", reading: "あんごう", meaning: "Code / Password" },
        { kanji: "遠い", reading: "とおい", meaning: "Far / Distant" },
        { kanji: "遠足", reading: "えんそく", meaning: "Excursion" },
        { kanji: "近い", reading: "ちかい", meaning: "Near / Close" },
        { kanji: "最近", reading: "さいきん", meaning: "Recently" },
        { kanji: "強い", reading: "つよい", meaning: "Strong" },
        { kanji: "勉強する", reading: "べんきょうする", meaning: "To study" },
        { kanji: "強風", reading: "きょうふう", meaning: "Strong wind" },
        { kanji: "弱い", reading: "よわい", meaning: "Weak" },
        { kanji: "弱点", reading: "じゃくてん", meaning: "Weakness" },
        { kanji: "重い", reading: "おもい", meaning: "Heavy" },
        { kanji: "体重", reading: "たいじゅう", meaning: "Body weight" },
        { kanji: "貴重品", reading: "きちょうひん", meaning: "Valuables" },
        { kanji: "軽い", reading: "かるい", meaning: "Light (weight)" },
        { kanji: "軽食", reading: "けいしょく", meaning: "Light meal / Snack" },
        { kanji: "太い", reading: "ふとい", meaning: "Thick / Fat" },
        { kanji: "太陽", reading: "たいよう", meaning: "Sun" },
        { kanji: "細い", reading: "ほそい", meaning: "Thin / Slender" },
        { kanji: "細かい", reading: "こまかい", meaning: "Fine / Detailed / Small change" }
      ]
    },
    {
      id: 3,
      title: "Lesson 3: Adjectives 2 (Vocab)",
      cards: [
        { kanji: "特に", reading: "ときに", meaning: "Especially" },
        { kanji: "特別な", reading: "とくべつな", meaning: "Special" },
        { kanji: "特急", reading: "とっきゅう", meaning: "Limited express train" },
        { kanji: "別れる", reading: "わかれる", meaning: "To separate / Part" },
        { kanji: "別に", reading: "べつに", meaning: "Not particularly" },
        { kanji: "有る", reading: "ある", meaning: "To exist / Have" },
        { kanji: "有名な", reading: "ゆうめいな", meaning: "Famous" },
        { kanji: "有料", reading: "ゆうりょう", meaning: "Toll / Fee required" },
        { kanji: "便利", reading: "べんり", meaning: "Convenient" },
        { kanji: "郵便局", reading: "ゆうびんきょく", meaning: "Post office" },
        { kanji: "船便", reading: "ふなびん", meaning: "Sea mail" },
        { kanji: "利用する", reading: "りようする", meaning: "To use / Utilize" },
        { kanji: "不便な", reading: "ふべんな", meaning: "Inconvenient" },
        { kanji: "不安な", reading: "ふあんな", meaning: "Anxious / Uneasy" },
        { kanji: "切る", reading: "きる", meaning: "To cut" },
        { kanji: "切手", reading: "きって", meaning: "Postage stamp" },
        { kanji: "大切", reading: "たいせつ", meaning: "Important" },
        { kanji: "親切な", reading: "しんせつな", meaning: "Kind" },
        { kanji: "元気な", reading: "げんきな", meaning: "Healthy / Energetic" },
        { kanji: "元日", reading: "がんじつ", meaning: "New Year's Day" },
        { kanji: "好きな", reading: "すきな", meaning: "Liked / Favorite" },
        { kanji: "好物", reading: "こうぶつ", meaning: "Favorite food" },
        { kanji: "急ぐ", reading: "いそぐ", meaning: "To hurry" },
        { kanji: "急に", reading: "きゅうに", meaning: "Suddenly" },
        { kanji: "急行", reading: "きゅうこう", meaning: "Express train" }
      ]
    },
    {
      id: 4,
      title: "Lesson 4: Adjectives 3 (Vocab)",
      cards: [
        { kanji: "低い", reading: "ひくい", meaning: "Low" },
        { kanji: "低下する", reading: "ていかする", meaning: "To decline / Fall" },
        { kanji: "低い声", reading: "ひくいこえ", meaning: "Low voice" },
        { kanji: "広い", reading: "ひろい", meaning: "Spacious / Wide" },
        { kanji: "広場", reading: "ひろば", meaning: "Plaza / Square" },
        { kanji: "短い", reading: "みじかい", meaning: "Short" },
        { kanji: "短時間", reading: "たんじかん", meaning: "Short time" },
        { kanji: "良い", reading: "よい / いい", meaning: "Good" },
        { kanji: "良心", reading: "りょうしん", meaning: "Conscience" },
        { kanji: "悪い", reading: "わるい", meaning: "Bad" },
        { kanji: "悪人", reading: "あくにん", meaning: "Bad person / Villain" },
        { kanji: "正しい", reading: "ただしい", meaning: "Correct" },
        { kanji: "お正月", reading: "おしょうがつ", meaning: "New Year holiday" },
        { kanji: "正門", reading: "せいもん", meaning: "Main gate" },
        { kanji: "変わる", reading: "かわる", meaning: "To change" },
        { kanji: "変な", reading: "へんな", meaning: "Strange" },
        { kanji: "大変な", reading: "たいへんな", meaning: "Tough / Awful" },
        { kanji: "赤い", reading: "あかい", meaning: "Red" },
        { kanji: "赤ちゃん", reading: "あかちゃん", meaning: "Baby" },
        { kanji: "赤字", reading: "あかじ", meaning: "Deficit / In the red" },
        { kanji: "青い", reading: "あおい", meaning: "Blue" },
        { kanji: "青空", reading: "あおぞら", meaning: "Blue sky" },
        { kanji: "青春", reading: "せいしゅん", meaning: "Youth" },
        { kanji: "黒い", reading: "くろい", meaning: "Black" },
        { kanji: "真っ黒", reading: "まっくろ", meaning: "Pure black" }
      ]
    },
    {
      id: 5,
      title: "Lesson 5: Hobby (Vocab)",
      cards: [
        { kanji: "映る", reading: "うつる", meaning: "To be projected / Reflected" },
        { kanji: "映画", reading: "えいが", meaning: "Movie" },
        { kanji: "映画館", reading: "えいがかん", meaning: "Movie theater" },
        { kanji: "画家", reading: "がか", meaning: "Painter / Artist" },
        { kanji: "計画する", reading: "けいかくする", meaning: "To plan" },
        { kanji: "音", reading: "おと", meaning: "Sound" },
        { kanji: "音楽", reading: "おんがく", meaning: "Music" },
        { kanji: "発音", reading: "はつおん", meaning: "Pronunciation" },
        { kanji: "楽しい", reading: "たのしい", meaning: "Fun / Enjoyable" },
        { kanji: "楽な", reading: "らくな", meaning: "Comfortable / Easy" },
        { kanji: "楽器", reading: "がっき", meaning: "Musical instrument" },
        { kanji: "歌う", reading: "うたう", meaning: "To sing" },
        { kanji: "歌", reading: "うた", meaning: "Song" },
        { kanji: "歌手", reading: "かしゅ", meaning: "Singer" },
        { kanji: "写す", reading: "うつす", meaning: "To copy / Take a photo" },
        { kanji: "写真", reading: "しゃしん", meaning: "Photograph" },
        { kanji: "真ん中", reading: "まんなか", meaning: "Center / Middle" },
        { kanji: "真白", reading: "まっしろ", meaning: "Pure white" },
        { kanji: "旅", reading: "たび", meaning: "Trip / Journey" },
        { kanji: "旅行する", reading: "りょこうする", meaning: "To travel" },
        { kanji: "旅館", reading: "りょかん", meaning: "Japanese inn" },
        { kanji: "世界", reading: "せかい", meaning: "World" },
        { kanji: "世話", reading: "せわ", meaning: "Care / Looking after" },
        { kanji: "世界中", reading: "せかいじゅう", meaning: "All over the world" }
      ]
    },
    {
      id: 6,
      title: "Lesson 6: Profession (Vocab)",
      cards: [
        { kanji: "仕事", reading: "しごと", meaning: "Work / Job" },
        { kanji: "仕方", reading: "しかた", meaning: "Way / Method" },
        { kanji: "事", reading: "こと", meaning: "Thing / Matter" },
        { kanji: "事故", reading: "じこ", meaning: "Accident" },
        { kanji: "食事", reading: "しょくじ", meaning: "Meal" },
        { kanji: "返事", reading: "へんじ", meaning: "Reply" },
        { kanji: "銀行", reading: "ぎんこう", meaning: "Bank" },
        { kanji: "銀座", reading: "ぎんざ", meaning: "Ginza" },
        { kanji: "店員", reading: "てんいん", meaning: "Store clerk" },
        { kanji: "会社員", reading: "かいしゃいん", meaning: "Company employee" },
        { kanji: "会員", reading: "かいいん", meaning: "Member" },
        { kanji: "医者", reading: "いしゃ", meaning: "Doctor" },
        { kanji: "医学", reading: "いがく", meaning: "Medical science" },
        { kanji: "学者", reading: "がくしゃ", meaning: "Scholar" },
        { kanji: "働く", reading: "はたらく", meaning: "To work" },
        { kanji: "労働", reading: "ろうどう", meaning: "Labor" },
        { kanji: "屋上", reading: "おくじょう", meaning: "Rooftop" },
        { kanji: "八百屋", reading: "やおや", meaning: "Greengrocer" },
        { kanji: "部屋", reading: "へや", meaning: "Room" },
        { kanji: "生産する", reading: "せいさんする", meaning: "To produce" },
        { kanji: "土産", reading: "みやげ", meaning: "Souvenir" },
        { kanji: "産業", reading: "さんぎょう", meaning: "Industry" },
        { kanji: "工業", reading: "こうぎょう", meaning: "Manufacturing industry" },
        { kanji: "授業", reading: "じゅぎょう", meaning: "Class / Lesson" }
      ]
    },
    {
      id: 7,
      title: "Lesson 7: Nature (Vocab)",
      cards: [
        { kanji: "林", reading: "はやし", meaning: "Grove / Woods" },
        { kanji: "森林", reading: "しんりん", meaning: "Forest" },
        { kanji: "森", reading: "もり", meaning: "Forest" },
        { kanji: "地面", reading: "じめん", meaning: "Ground surface" },
        { kanji: "地下鉄", reading: "ちかてつ", meaning: "Subway" },
        { kanji: "地震", reading: "じしん", meaning: "Earthquake" },
        { kanji: "地理", reading: "ちり", meaning: "Geography" },
        { kanji: "池", reading: "いけ", meaning: "Pond" },
        { kanji: "電池", reading: "でんち", meaning: "Battery" },
        { kanji: "海", reading: "うみ", meaning: "Sea / Ocean" },
        { kanji: "海外", reading: "かいがい", meaning: "Overseas" },
        { kanji: "海岸", reading: "かいがん", meaning: "Seashore" },
        { kanji: "西洋", reading: "せいよう", meaning: "The West" },
        { kanji: "東洋", reading: "とうよう", meaning: "The Orient" },
        { kanji: "洋服", reading: "ようふく", meaning: "Western clothes" },
        { kanji: "太平洋", reading: "たいへいよう", meaning: "Pacific Ocean" },
        { kanji: "雪", reading: "ゆき", meaning: "Snow" },
        { kanji: "大雪", reading: "おおゆき", meaning: "Heavy snow" },
        { kanji: "光る", reading: "ひかる", meaning: "To shine" },
        { kanji: "日光", reading: "にっこう", meaning: "Sunlight / Nikko" },
        { kanji: "観光", reading: "かんこう", meaning: "Sightseeing" },
        { kanji: "台風", reading: "たいふう", meaning: "Typhoon" },
        { kanji: "台所", reading: "だいどころ", meaning: "Kitchen" },
        { kanji: "一台", reading: "いちだい", meaning: "One machine / vehicle" },
        { kanji: "風", reading: "かぜ", meaning: "Wind" },
        { kanji: "風邪", reading: "かぜ", meaning: "A cold (illness)" }
      ]
    },
    {
      id: 8,
      title: "Lesson 8: Seasons (Vocab)",
      cards: [
        { kanji: "季節", reading: "きせつ", meaning: "Season" },
        { kanji: "四季", reading: "しき", meaning: "Four seasons" },
        { kanji: "節約する", reading: "せつやくする", meaning: "To economize / Save" },
        { kanji: "春", reading: "はる", meaning: "Spring" },
        { kanji: "春休み", reading: "はるやすみ", meaning: "Spring break" },
        { kanji: "夏", reading: "なつ", meaning: "Summer" },
        { kanji: "夏休み", reading: "なつやすみ", meaning: "Summer vacation" },
        { kanji: "夏祭り", reading: "なつまつり", meaning: "Summer festival" },
        { kanji: "秋", reading: "あき", meaning: "Autumn" },
        { kanji: "冬", reading: "ふゆ", meaning: "Winter" },
        { kanji: "冬休み", reading: "ふゆやすみ", meaning: "Winter vacation" },
        { kanji: "暑い", reading: "あつい", meaning: "Hot (weather)" },
        { kanji: "暑さ", reading: "あつさ", meaning: "Heat" },
        { kanji: "寒い", reading: "さむい", meaning: "Cold (weather)" },
        { kanji: "寒さ", reading: "さむさ", meaning: "Coldness" },
        { kanji: "暖かい", reading: "あたたかい", meaning: "Warm" },
        { kanji: "暖房", reading: "だんぼう", meaning: "Heating" },
        { kanji: "涼しい", reading: "すずしい", meaning: "Cool (weather)" },
        { kanji: "涼む", reading: "すずむ", meaning: "To cool oneself" }
      ]
    },
    {
      id: 9,
      title: "Lesson 9: Body (Vocab)",
      cards: [
        { kanji: "体", reading: "からだ", meaning: "Body" },
        { kanji: "体重", reading: "たいじゅう", meaning: "Body weight" },
        { kanji: "体力", reading: "たいりょく", meaning: "Physical strength" },
        { kanji: "頭", reading: "あたま", meaning: "Head" },
        { kanji: "頭痛", reading: "ずつう", meaning: "Headache" },
        { kanji: "顔", reading: "かお", meaning: "Face" },
        { kanji: "首", reading: "くび", meaning: "Neck" },
        { kanji: "手首", reading: "てくび", meaning: "Wrist" },
        { kanji: "首相", reading: "しゅしょう", meaning: "Prime minister" },
        { kanji: "心", reading: "こころ", meaning: "Heart / Mind" },
        { kanji: "安心する", reading: "あんしんする", meaning: "To feel relieved" },
        { kanji: "中心", reading: "ちゅうしん", meaning: "Center" },
        { kanji: "声", reading: "こえ", meaning: "Voice" },
        { kanji: "大声", reading: "おおごえ", meaning: "Loud voice" },
        { kanji: "病気", reading: "びょうき", meaning: "Sickness / Illness" },
        { kanji: "病院", reading: "びょういん", meaning: "Hospital" },
        { kanji: "薬", reading: "くすり", meaning: "Medicine" },
        { kanji: "目薬", reading: "めぐすり", meaning: "Eye drops" },
        { kanji: "薬局", reading: "やっきょく", meaning: "Pharmacy" },
        { kanji: "内科", reading: "ないか", meaning: "Internal medicine" },
        { kanji: "外科", reading: "げか", meaning: "Surgery department" },
        { kanji: "科学", reading: "かがく", meaning: "Science" },
        { kanji: "案内する", reading: "あんないする", meaning: "To guide" },
        { kanji: "国内", reading: "こくない", meaning: "Domestic" }
      ]
    },
    {
      id: 10,
      title: "Lesson 10: Time (Vocab)",
      cards: [
        { kanji: "朝", reading: "あさ", meaning: "Morning" },
        { kanji: "今朝", reading: "けさ", meaning: "This morning" },
        { kanji: "朝食", reading: "ちょうしょく", meaning: "Breakfast" },
        { kanji: "毎朝", reading: "まいあさ", meaning: "Every morning" },
        { kanji: "昼", reading: "ひる", meaning: "Noon / Daytime" },
        { kanji: "昼休み", reading: "ひるやすみ", meaning: "Lunch break" },
        { kanji: "昼食", reading: "ちゅうしょく", meaning: "Lunch" },
        { kanji: "夜", reading: "よる", meaning: "Night" },
        { kanji: "今夜", reading: "こんや", meaning: "Tonight" },
        { kanji: "夜中", reading: "よなか", meaning: "Middle of the night" },
        { kanji: "夕方", reading: "ゆうがた", meaning: "Evening" },
        { kanji: "夕食", reading: "ゆうしょく", meaning: "Dinner" },
        { kanji: "方", reading: "かた", meaning: "Person / Direction" },
        { kanji: "読み方", reading: "よみかた", meaning: "How to read" },
        { kanji: "方法", reading: "ほうほう", meaning: "Method" },
        { kanji: "晩", reading: "ばん", meaning: "Night / Evening" },
        { kanji: "今晩", reading: "こんばん", meaning: "Tonight" },
        { kanji: "毎晩", reading: "まいばん", meaning: "Every night" },
        { kanji: "時計", reading: "とけい", meaning: "Clock / Watch" },
        { kanji: "計画する", reading: "けいかくする", meaning: "To plan" },
        { kanji: "曜日", reading: "ようび", meaning: "Day of the week" },
        { kanji: "以内", reading: "いない", meaning: "Within" },
        { kanji: "以上", reading: "いじょう", meaning: "More than / Above" },
        { kanji: "以下", reading: "いか", meaning: "Less than / Below" },
        { kanji: "以前", reading: "いぜん", meaning: "Formerly / Previously" },
        { kanji: "一度", reading: "いちど", meaning: "Once" },
        { kanji: "今度", reading: "こんど", meaning: "Next time" },
        { kanji: "温度", reading: "おんど", meaning: "Temperature" }
      ]
    },
    {
      id: 11,
      title: "Lesson 11: Verbs 1 (Vocab)",
      cards: [
        { kanji: "止まる", reading: "とまる", meaning: "To stop" },
        { kanji: "止める", reading: "とめる", meaning: "To bring to a stop" },
        { kanji: "中止する", reading: "ちゅうしする", meaning: "To cancel" },
        { kanji: "歩く", reading: "あるく", meaning: "To walk" },
        { kanji: "散歩する", reading: "さんぽする", meaning: "To take a walk" },
        { kanji: "歩道", reading: "ほどう", meaning: "Sidewalk" },
        { kanji: "走る", reading: "はしる", meaning: "To run" },
        { kanji: "起きる", reading: "おきる", meaning: "To wake up" },
        { kanji: "起こす", reading: "おこす", meaning: "To wake someone up" },
        { kanji: "早起き", reading: "はやおき", meaning: "Waking up early" },
        { kanji: "持つ", reading: "もつ", meaning: "To hold / Have" },
        { kanji: "気持ち", reading: "きもち", meaning: "Feeling" },
        { kanji: "持ち物", reading: "もちもの", meaning: "Belongings" },
        { kanji: "待つ", reading: "まつ", meaning: "To wait" },
        { kanji: "招待する", reading: "しょうたいする", meaning: "To invite" },
        { kanji: "借りる", reading: "かりる", meaning: "To borrow" },
        { kanji: "借金", reading: "しゃっきん", meaning: "Debt" },
        { kanji: "貸す", reading: "かす", meaning: "To lend" },
        { kanji: "賃貸", reading: "ちんたい", meaning: "Lease / Rental" },
        { kanji: "始まります", reading: "はじまります", meaning: "To begin" },
        { kanji: "始める", reading: "はじめる", meaning: "To start (something)" },
        { kanji: "始発", reading: "しはつ", meaning: "First train" },
        { kanji: "終わる", reading: "おわる", meaning: "To end" },
        { kanji: "終わり", reading: "おわり", meaning: "The end" },
        { kanji: "終点", reading: "しゅうてん", meaning: "Terminus / Last stop" }
      ]
    },
    {
      id: 12,
      title: "Lesson 12: Family (Vocab)",
      cards: [
        { kanji: "家", reading: "いえ / うち", meaning: "House / Home" },
        { kanji: "家族", reading: "かぞく", meaning: "Family" },
        { kanji: "家賃", reading: "やちん", meaning: "Rent" },
        { kanji: "水族館", reading: "すいぞくかん", meaning: "Aquarium" },
        { kanji: "私", reading: "わたし", meaning: "I / Myself" },
        { kanji: "私立", reading: "しりつ", meaning: "Private (institution)" },
        { kanji: "自分", reading: "じぶん", meaning: "Oneself" },
        { kanji: "自動車", reading: "じどうしゃ", meaning: "Automobile" },
        { kanji: "自由", reading: "じゆう", meaning: "Freedom" },
        { kanji: "自然", reading: "しぜん", meaning: "Nature" },
        { kanji: "親", reading: "おや", meaning: "Parent" },
        { kanji: "親切な", reading: "しんせつな", meaning: "Kind" },
        { kanji: "父親", reading: "ちちおや", meaning: "Father" },
        { kanji: "親友", reading: "しんゆう", meaning: "Best friend" },
        { kanji: "両方", reading: "りょうほう", meaning: "Both sides" },
        { kanji: "両親", reading: "りょうしん", meaning: "Parents" },
        { kanji: "兄", reading: "あに", meaning: "Older brother" },
        { kanji: "お兄さん", reading: "おにいさん", meaning: "Older brother (polite)" },
        { kanji: "兄弟", reading: "きょうだい", meaning: "Siblings / Brothers" },
        { kanji: "弟", reading: "おとうと", meaning: "Younger brother" },
        { kanji: "姉", reading: "あね", meaning: "Older sister" },
        { kanji: "お姉さん", reading: "おねえさん", meaning: "Older sister (polite)" },
        { kanji: "妹", reading: "いもうと", meaning: "Younger sister" },
        { kanji: "姉妹", reading: "しまい", meaning: "Sisters" }
      ]
    },
    {
      id: 13,
      title: "Lesson 13: Everyday Life (Vocab)",
      cards: [
        { kanji: "生活する", reading: "せいかつする", meaning: "To lead a life" },
        { kanji: "活動", reading: "かつどう", meaning: "Activity" },
        { kanji: "回る", reading: "まわる", meaning: "To rotate / Turn" },
        { kanji: "一回", reading: "いっかい", meaning: "Once / One time" },
        { kanji: "今回", reading: "こんかい", meaning: "This time" },
        { kanji: "主な", reading: "おもな", meaning: "Main / Principal" },
        { kanji: "主人", reading: "しゅじん", meaning: "Husband / Master" },
        { kanji: "持ち主", reading: "もちぬし", meaning: "Owner" },
        { kanji: "色", reading: "いろ", meaning: "Color" },
        { kanji: "茶色", reading: "ちゃいろ", meaning: "Brown" },
        { kanji: "形", reading: "かたち", meaning: "Shape" },
        { kanji: "人形", reading: "にんぎょう", meaning: "Doll / Puppet" },
        { kanji: "品物", reading: "しなもの", meaning: "Goods / Article" },
        { kanji: "食料品", reading: "しょくりょうひん", meaning: "Groceries" },
        { kanji: "作品", reading: "さくひん", meaning: "Work of art" },
        { kanji: "市民", reading: "しみん", meaning: "Citizen" },
        { kanji: "国民", reading: "こくみん", meaning: "National / People" },
        { kanji: "服", reading: "ふく", meaning: "Clothes" },
        { kanji: "洋服", reading: "ようふく", meaning: "Western clothes" },
        { kanji: "犬", reading: "いぬ", meaning: "Dog" },
        { kanji: "子犬", reading: "こいぬ", meaning: "Puppy" },
        { kanji: "同じ", reading: "おなじ", meaning: "Same" },
        { kanji: "同時に", reading: "どうじに", meaning: "At the same time" }
      ]
    },
    {
      id: 14,
      title: "Lesson 14: Food (Vocab)",
      cards: [
        { kanji: "米", reading: "こめ", meaning: "Rice" },
        { kanji: "米国", reading: "べいこく", meaning: "USA" },
        { kanji: "新米", reading: "しんまい", meaning: "New rice / Novice" },
        { kanji: "料理", reading: "りょうり", meaning: "Cooking / Cuisine" },
        { kanji: "料金", reading: "りょうきん", meaning: "Fee / Charge" },
        { kanji: "無料", reading: "むりょう", meaning: "Free of charge" },
        { kanji: "理由", reading: "りゆう", meaning: "Reason" },
        { kanji: "地理", reading: "ちり", meaning: "Geography" },
        { kanji: "肉", reading: "にく", meaning: "Meat" },
        { kanji: "牛肉", reading: "ぎゅうにく", meaning: "Beef" },
        { kanji: "豚肉", reading: "ぶたにく", meaning: "Pork" },
        { kanji: "鳥", reading: "とり", meaning: "Bird" },
        { kanji: "小鳥", reading: "ことり", meaning: "Small bird" },
        { kanji: "野鳥", reading: "やちょう", meaning: "Wild bird" },
        { kanji: "野菜", reading: "やさい", meaning: "Vegetable" },
        { kanji: "野球", reading: "やきゅう", meaning: "Baseball" },
        { kanji: "分野", reading: "ぶんや", meaning: "Field / Branch" },
        { kanji: "お茶", reading: "おちゃ", meaning: "Tea / Green tea" },
        { kanji: "喫茶店", reading: "きっさてん", meaning: "Coffee shop" },
        { kanji: "紅茶", reading: "こうちゃ", meaning: "Black tea" },
        { kanji: "ご飯", reading: "ごはん", meaning: "Meal / Rice" },
        { kanji: "朝飯", reading: "あさめし", meaning: "Breakfast" },
        { kanji: "味", reading: "あじ", meaning: "Taste" },
        { kanji: "意味", reading: "いみ", meaning: "Meaning" },
        { kanji: "趣味", reading: "しゅみ", meaning: "Hobby" }
      ]
    },
    {
      id: 15,
      title: "Lesson 15: Radicals (Vocab)",
      cards: [
        { kanji: "代わる", reading: "かわる", meaning: "To substitute / Replace" },
        { kanji: "時代", reading: "じだい", meaning: "Era / Period" },
        { kanji: "電気代", reading: "でんきだい", meaning: "Electricity bill" },
        { kanji: "使う", reading: "つかう", meaning: "To use" },
        { kanji: "大使", reading: "たいし", meaning: "Ambassador" },
        { kanji: "作る", reading: "つくる", meaning: "To make" },
        { kanji: "作文", reading: "さくぶん", meaning: "Essay / Composition" },
        { kanji: "変化する", reading: "へんかする", meaning: "To change" },
        { kanji: "化学", reading: "かがく", meaning: "Chemistry" },
        { kanji: "文化", reading: "ぶんか", meaning: "Culture" },
        { kanji: "信じる", reading: "しんじる", meaning: "To believe" },
        { kanji: "信号", reading: "しんごう", meaning: "Traffic light" },
        { kanji: "進む", reading: "すすむ", meaning: "To advance" },
        { kanji: "進歩する", reading: "しんぽする", meaning: "To make progress" },
        { kanji: "送る", reading: "おくる", meaning: "To send" },
        { kanji: "放送", reading: "ほうそう", meaning: "Broadcast" },
        { kanji: "返す", reading: "かえす", meaning: "To return (an item)" },
        { kanji: "返事", reading: "へんじ", meaning: "Reply" },
        { kanji: "洗う", reading: "あらう", meaning: "To wash" },
        { kanji: "お手洗い", reading: "おてあらい", meaning: "Restroom" },
        { kanji: "注文する", reading: "ちゅうもんする", meaning: "To order" },
        { kanji: "注意する", reading: "ちゅういする", meaning: "To pay attention" }
      ]
    },
    {
      id: 16,
      title: "Lesson 16: Place (Vocab)",
      cards: [
        { kanji: "場所", reading: "ばしょ", meaning: "Place" },
        { kanji: "広場", reading: "ひろば", meaning: "Plaza" },
        { kanji: "会場", reading: "かいじょう", meaning: "Venue" },
        { kanji: "工場", reading: "こうじょう", meaning: "Factory" },
        { kanji: "建てる", reading: "たてる", meaning: "To build" },
        { kanji: "建物", reading: "たてもの", meaning: "Building" },
        { kanji: "食べ物", reading: "たべもの", meaning: "Food" },
        { kanji: "買い物", reading: "かいもの", meaning: "Shopping" },
        { kanji: "動物", reading: "どうぶつ", meaning: "Animal" },
        { kanji: "病院", reading: "びょういん", meaning: "Hospital" },
        { kanji: "入院する", reading: "にゅういんする", meaning: "To be hospitalized" },
        { kanji: "大使館", reading: "たいしかん", meaning: "Embassy" },
        { kanji: "図書館", reading: "としょかん", meaning: "Library" },
        { kanji: "食堂", reading: "しょくどう", meaning: "Dining hall" },
        { kanji: "教室", reading: "きょうしつ", meaning: "Classroom" },
        { kanji: "研究所", reading: "けんきゅうじょ", meaning: "Research institute" },
        { kanji: "工事", reading: "こうじ", meaning: "Construction work" },
        { kanji: "地図", reading: "ちず", meaning: "Map" },
        { kanji: "番号", reading: "ばんごう", meaning: "Number" },
        { kanji: "電話番号", reading: "でんわばんごう", meaning: "Telephone number" }
      ]
    },
    {
      id: 17,
      title: "Lesson 17: Traffic (Vocab)",
      cards: [
        { kanji: "交番", reading: "こうばん", meaning: "Police box" },
        { kanji: "交通", reading: "こうつう", meaning: "Traffic" },
        { kanji: "通る", reading: "とおる", meaning: "To pass through" },
        { kanji: "通う", reading: "かよう", meaning: "To commute" },
        { kanji: "動く", reading: "うごく", meaning: "To move" },
        { kanji: "運動する", reading: "うんどうする", meaning: "To exercise" },
        { kanji: "乗る", reading: "のる", meaning: "To ride" },
        { kanji: "乗り物", reading: "のりもの", meaning: "Vehicle" },
        { kanji: "降りる", reading: "おりる", meaning: "To get off" },
        { kanji: "雨が降る", reading: "あめがふる", meaning: "Rain falls" },
        { kanji: "運ぶ", reading: "はこぶ", meaning: "To carry / Transport" },
        { kanji: "運転する", reading: "うんてんする", meaning: "To drive" },
        { kanji: "転がる", reading: "ころがる", meaning: "To roll over" },
        { kanji: "自転車", reading: "じてんしゃ", meaning: "Bicycle" },
        { kanji: "帰る", reading: "かえる", meaning: "To return home" },
        { kanji: "帰国する", reading: "きこくする", meaning: "To return to one's country" },
        { kanji: "出発する", reading: "しゅっぱつする", meaning: "To depart" },
        { kanji: "着く", reading: "つく", meaning: "To arrive" },
        { kanji: "着る", reading: "きる", meaning: "To wear" },
        { kanji: "着物", reading: "きもの", meaning: "Kimono" }
      ]
    },
    {
      id: 18,
      title: "Lesson 18: School 1 (Vocab)",
      cards: [
        { kanji: "漢字", reading: "かんじ", meaning: "Kanji character" },
        { kanji: "文字", reading: "もじ", meaning: "Letter / Character" },
        { kanji: "ローマ字", reading: "ろーまじ", meaning: "Romaji" },
        { kanji: "文", reading: "ぶん", meaning: "Sentence" },
        { kanji: "文学", reading: "ぶんがく", meaning: "Literature" },
        { kanji: "教える", reading: "おしえる", meaning: "To teach" },
        { kanji: "教科書", reading: "きょうかしょ", meaning: "Textbook" },
        { kanji: "練習する", reading: "れんしゅうする", meaning: "To practice" },
        { kanji: "英語", reading: "えいご", meaning: "English language" },
        { kanji: "英国", reading: "えいこく", meaning: "UK / England" },
        { kanji: "考える", reading: "かんがえる", meaning: "To think" },
        { kanji: "研究する", reading: "けんきゅうする", meaning: "To research" },
        { kanji: "研究者", reading: "けんきゅうしゃ", meaning: "Researcher" }
      ]
    },
    {
      id: 19,
      title: "Lesson 19: School 2 (Vocab)",
      cards: [
        { kanji: "質問", reading: "しつもん", meaning: "Question" },
        { kanji: "問題", reading: "もんだい", meaning: "Problem / Exam question" },
        { kanji: "宿題", reading: "しゅくだい", meaning: "Homework" },
        { kanji: "試合", reading: "しあい", meaning: "Match / Game" },
        { kanji: "試験", reading: "しけん", meaning: "Exam / Test" },
        { kanji: "実験", reading: "じっけん", meaning: "Experiment" },
        { kanji: "経験", reading: "けいけん", meaning: "Experience" },
        { kanji: "質", reading: "しつ", meaning: "Quality" },
        { kanji: "合う", reading: "あう", meaning: "To fit / Match" },
        { kanji: "合格する", reading: "ごうかくする", meaning: "To pass (an exam)" },
        { kanji: "答える", reading: "こたえる", meaning: "To answer" },
        { kanji: "答え", reading: "こたえ", meaning: "Answer" },
        { kanji: "用事", reading: "ようじ", meaning: "Business / Errand" },
        { kanji: "用紙", reading: "ようし", meaning: "Form / Blank paper" },
        { kanji: "紙", reading: "かみ", meaning: "Paper" },
        { kanji: "手紙", reading: "てがみ", meaning: "Letter" },
        { kanji: "意味", reading: "いみ", meaning: "Meaning" },
        { kanji: "意見", reading: "いけん", meaning: "Opinion" }
      ]
    },
    {
      id: 20,
      title: "Lesson 20: Verbs 2 (Vocab)",
      cards: [
        { kanji: "引く", reading: "ひく", meaning: "To pull" },
        { kanji: "引き出し", reading: "ひきだし", meaning: "Drawer" },
        { kanji: "開ける", reading: "あける", meaning: "To open (something)" },
        { kanji: "開く", reading: "ひらく", meaning: "To open" },
        { kanji: "閉める", reading: "しめる", meaning: "To close (something)" },
        { kanji: "閉じる", reading: "とじる", meaning: "To shut (book/eyes)" },
        { kanji: "去る", reading: "さる", meaning: "To leave / Depart" },
        { kanji: "去年", reading: "きょねん", meaning: "Last year" },
        { kanji: "死ぬ", reading: "しぬ", meaning: "To die" },
        { kanji: "集まる", reading: "あつまる", meaning: "To gather / Assemble" },
        { kanji: "集める", reading: "あつめる", meaning: "To collect" },
        { kanji: "知る", reading: "しる", meaning: "To know" },
        { kanji: "知人", reading: "ちじん", meaning: "Acquaintance" },
        { kanji: "売る", reading: "うる", meaning: "To sell" },
        { kanji: "売店", reading: "ばいてん", meaning: "Kiosk / Stand" },
        { kanji: "説明する", reading: "せつめいする", meaning: "To explain" },
        { kanji: "小説", reading: "しょうせつ", meaning: "Novel" },
        { kanji: "思う", reading: "おもう", meaning: "To think" },
        { kanji: "思い出", reading: "おもいで", meaning: "Memories" }
      ]
    }
  ]
};

const KANJI_DATA = {
  part1: PART1_DATA,
  part2: PART2_DATA,
  vocab_n5: VOCAB_N5_DATA,
  vocab_n4: VOCAB_N4_DATA
};

const Flashcard = ({ card, onSpeak }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [card]);

  if (!card) return null;

  return (
    <div
      className="w-full max-w-md h-80 my-4 perspective-1000 cursor-pointer select-none"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-indigo-900/50 rounded-3xl p-8 flex flex-col items-center justify-between shadow-xl shadow-indigo-100/50 dark:shadow-none">
          <div className="w-full flex justify-between items-center text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <span>Kanji / Word</span>
            <span>Click to flip</span>
          </div>
          <div className="text-6xl md:text-7xl font-black text-slate-800 dark:text-slate-100 tracking-wider text-center my-auto">
            {card.kanji}
          </div>
          <div className="text-xs text-indigo-500 font-medium">
            Tap card to reveal reading
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-3xl p-8 flex flex-col items-center justify-between shadow-xl shadow-indigo-500/20">
          <div className="w-full flex justify-between items-center text-xs text-indigo-200 font-semibold uppercase tracking-wider">
            <span>Meaning & Reading</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSpeak(card.reading || card.kanji);
              }}
              className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-all"
              title="Listen"
            >
              🔊
            </button>
          </div>
          <div className="text-center space-y-3 my-auto">
            <div className="text-3xl md:text-4xl font-bold text-amber-300">
              {card.reading}
            </div>
            <div className="text-xl md:text-2xl font-semibold text-white/95">
              {card.meaning}
            </div>
          </div>
          <div className="text-xs text-indigo-200 font-medium">
            Tap card to return
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper to clean option text (e.g. '1. ひ' -> 'ひ')
const cleanOptionText = (text: string) => {
  if (!text) return '';
  return text.replace(/^[1-4①-④]\s*[\.\、\s]?\s*/, '');
};

// Helper to render sentence with exact textbook underline & item number under target
const renderSentenceWithUnderline = (sentence: string, target?: string, itemNumber?: string, id?: string) => {
  if (!target) return <span>{sentence}</span>;

  // Multi-match specific index handling
  let targetOccurrence = 0; // 0-indexed occurrence to highlight
  if (id === 'n5-u1-m1-4') targetOccurrence = 1; // 2nd '日' in 'こどもの日'
  if (id === 'n5-u3-m2-6') targetOccurrence = 1; // 2nd 'き' in 'きを つけましょう'
  if (id === 'n5-u4-m2-7') targetOccurrence = 0; // 1st 'はな' in 'その はなは'

  const parts = sentence.split(target);
  if (parts.length <= 1) {
    return <span>{sentence}</span>;
  }

  // Extract circled symbol or number if present, e.g. "1-①" -> "①", "2-③" -> "③", "No. 3" -> "3"
  let subNum = '';
  if (itemNumber) {
    const m = itemNumber.match(/[①-⑳]/);
    if (m) {
      subNum = m[0];
    } else {
      const numMatch = itemNumber.match(/\d+[A-Z]?/);
      if (numMatch) subNum = numMatch[0];
    }
  }

  const elements: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    elements.push(<span key={`p-${i}`}>{parts[i]}</span>);
    if (i < parts.length - 1) {
      const isThisTarget = (i === targetOccurrence) || (parts.length === 2);
      if (isThisTarget) {
        elements.push(
          <span key={`t-${i}`} className="inline-flex flex-col items-center mx-1 align-middle relative group">
            <span className="border-b-[3px] md:border-b-4 border-indigo-600 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 font-black px-1.5 pb-0.5 tracking-wide bg-indigo-50/80 dark:bg-indigo-950/60 rounded-t">
              {target}
            </span>
            {subNum && (
              <span className="text-[11px] md:text-xs font-black text-indigo-600 dark:text-indigo-400 -mt-0.5 select-none">
                {subNum}
              </span>
            )}
          </span>
        );
      } else {
        elements.push(<span key={`nt-${i}`}>{target}</span>);
      }
    }
  }

  return <span className="inline leading-relaxed">{elements}</span>;
};

// Interactive Practice Quiz Component with N5 & N4 Textbook Questions & Images
const PracticeQuiz = ({ level, onSpeak, onBackToCards }: { level: 'N5' | 'N4'; onSpeak: (text: string) => void; onBackToCards: () => void }) => {
  // N5 Textbook Quiz Settings
  const [selectedUnitId, setSelectedUnitId] = useState<string>('unit_1_3');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [questionCountLimit, setQuestionCountLimit] = useState<string>('all');
  const [isShuffled, setIsShuffled] = useState<boolean>(false);

  // N4 Textbook Quiz Settings
  const [selectedN4UnitId, setSelectedN4UnitId] = useState<string>('unit_1_3');
  const [isN4Shuffled, setIsN4Shuffled] = useState<boolean>(false);

  // Active Quiz State
  const [quizState, setQuizState] = useState<{
    started: boolean;
    questions: any[];
    currentIdx: number;
    selectedOption: number | null;
    isAnswered: boolean;
    score: number;
    streak: number;
    bestStreak: number;
    finished: boolean;
    userAnswers: { question: any; chosenOption: number; isCorrect: boolean }[];
  }>({
    started: false,
    questions: [],
    currentIdx: 0,
    selectedOption: null,
    isAnswered: false,
    score: 0,
    streak: 0,
    bestStreak: 0,
    finished: false,
    userAnswers: []
  });

  // Modal / Drawer state for original textbook image
  const [previewImage, setPreviewImage] = useState<{ urls: string[]; currentIndex: number; title: string } | null>(null);
  const [showQuestionGrid, setShowQuestionGrid] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect'>('all');

  // Available sections for current unit
  const activeUnit = useMemo(() => {
    return N5_PRACTICE_UNITS.find(u => u.id === selectedUnitId) || N5_PRACTICE_UNITS[1];
  }, [selectedUnitId]);

  const activeN4Unit = useMemo(() => {
    return N4_PRACTICE_UNITS.find(u => u.id === selectedN4UnitId) || N4_PRACTICE_UNITS[1];
  }, [selectedN4UnitId]);

  // Start N4 Official Textbook Quiz
  const startN4TextbookQuiz = (customQuestions?: any[]) => {
    let pool: any[] = [];

    if (customQuestions) {
      pool = [...customQuestions];
    } else {
      if (selectedN4UnitId === 'all') {
        pool = [...N4_PRACTICE_QUESTIONS];
      } else {
        pool = N4_PRACTICE_QUESTIONS.filter((q: any) => q.unitId === selectedN4UnitId);
      }

      if (isN4Shuffled) {
        pool = [...pool].sort(() => 0.5 - Math.random());
      }
    }

    if (pool.length === 0) return;

    const normalizedQuestions = pool.map((q: any, idx: number) => ({
      id: q.id || `n4-q-${idx}`,
      unitId: q.unitId,
      unitTitle: q.unitTitle,
      section: q.section,
      sectionTitle: q.section,
      instruction: q.sectionInstruction || q.instruction,
      itemNumber: q.questionNumber || q.itemNumber || `${idx + 1}`,
      sentence: q.sentence,
      target: q.target,
      options: q.options,
      correctAnswer: typeof q.correct === 'number' ? q.correct + 1 : (q.correctAnswer || 1),
      explanation: q.explanation || '',
      imageSrc: q.imageSrc || '',
      contextType: q.contextType,
      contextText: q.contextText
    }));

    setQuizState({
      started: true,
      questions: normalizedQuestions,
      currentIdx: 0,
      selectedOption: null,
      isAnswered: false,
      score: 0,
      streak: 0,
      bestStreak: 0,
      finished: false,
      userAnswers: []
    });
  };

  // Start N5 Official Textbook Quiz
  const startN5Quiz = (customQuestions?: any[]) => {
    let pool: any[] = [];

    if (customQuestions) {
      pool = [...customQuestions];
    } else {
      if (selectedUnitId === 'all') {
        pool = [...N5_PRACTICE_QUESTIONS];
      } else {
        pool = N5_PRACTICE_QUESTIONS.filter(q => q.unitId === selectedUnitId);
      }

      // Filter by section if specified
      if (selectedSection !== 'all') {
        pool = pool.filter(q => q.section === selectedSection);
      }

      // Shuffle if enabled
      if (isShuffled) {
        pool = [...pool].sort(() => 0.5 - Math.random());
      }

      // Limit count if specified
      if (questionCountLimit !== 'all') {
        const limit = parseInt(questionCountLimit, 10);
        pool = pool.slice(0, limit);
      }
    }

    if (pool.length === 0) return;

    // Normalize questions uniformly
    const normalizedQuestions = pool.map((q, idx) => ({
      id: q.id || `n5-q-${idx}`,
      unitId: q.unitId,
      unitTitle: q.unitTitle,
      section: q.section,
      sectionTitle: q.section,
      instruction: q.sectionInstruction || q.instruction,
      itemNumber: q.questionNumber || q.itemNumber || `${idx + 1}`,
      sentence: q.sentence,
      target: q.target,
      options: q.options,
      correctAnswer: typeof q.correct === 'number' ? q.correct + 1 : (q.correctAnswer || 1),
      explanation: q.explanation || '',
      imageSrc: q.imageSrc || '',
      contextType: q.contextType,
      contextText: q.contextText
    }));

    setQuizState({
      started: true,
      questions: normalizedQuestions,
      currentIdx: 0,
      selectedOption: null,
      isAnswered: false,
      score: 0,
      streak: 0,
      bestStreak: 0,
      finished: false,
      userAnswers: []
    });
  };



  // Handle Option Click
  const handleSelectOption = (optionIndex: number) => {
    if (quizState.isAnswered) return;
    const currentQ = quizState.questions[quizState.currentIdx];
    const isCorrect = optionIndex === currentQ.correctAnswer;

    const newStreak = isCorrect ? quizState.streak + 1 : 0;
    const newBest = Math.max(newStreak, quizState.bestStreak);

    if (isCorrect && currentQ.target) {
      onSpeak(currentQ.target);
    }

    setQuizState(prev => ({
      ...prev,
      selectedOption: optionIndex,
      isAnswered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      streak: newStreak,
      bestStreak: newBest,
      userAnswers: [
        ...prev.userAnswers,
        { question: currentQ, chosenOption: optionIndex, isCorrect }
      ]
    }));
  };

  // Move to next question
  const handleNextQuestion = () => {
    if (quizState.currentIdx + 1 >= quizState.questions.length) {
      setQuizState(prev => ({ ...prev, finished: true }));
    } else {
      setQuizState(prev => ({
        ...prev,
        currentIdx: prev.currentIdx + 1,
        selectedOption: null,
        isAnswered: false
      }));
    }
  };

  // Move to prev question
  const handlePrevQuestion = () => {
    if (quizState.currentIdx > 0) {
      setQuizState(prev => ({
        ...prev,
        currentIdx: prev.currentIdx - 1,
        selectedOption: null,
        isAnswered: false
      }));
    }
  };

  // Jump directly to question index
  const handleJumpToQuestion = (index: number) => {
    setShowQuestionGrid(false);
    setQuizState(prev => ({
      ...prev,
      currentIdx: index,
      selectedOption: null,
      isAnswered: false
    }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!quizState.started || quizState.finished) return;
      if (['1', '2', '3', '4'].includes(e.key) && !quizState.isAnswered) {
        handleSelectOption(parseInt(e.key, 10));
      } else if (e.key === 'Enter' && quizState.isAnswered) {
        handleNextQuestion();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quizState.started, quizState.finished, quizState.isAnswered, quizState.currentIdx]);

  // Render Completed Summary
  if (quizState.finished) {
    const totalQ = quizState.questions.length;
    const accuracy = Math.round((quizState.score / (totalQ || 1)) * 100);
    const incorrectAnswers = quizState.userAnswers.filter(a => !a.isCorrect);
    const filteredReviews = reviewFilter === 'all' ? quizState.userAnswers : incorrectAnswers;

    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* Results Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl text-center">
          <div className="inline-block p-4 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 text-5xl mb-3 animate-bounce">
            {accuracy >= 90 ? '🏆' : accuracy >= 70 ? '🎉' : accuracy >= 50 ? '👍' : '💪'}
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-100">
            {accuracy >= 90 ? 'JLPT N5 Master!' : accuracy >= 70 ? 'Great Performance!' : 'Practice Complete!'}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            You completed {totalQ} questions in {level} Practice Quiz
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-lg mx-auto py-6 border-y border-slate-100 dark:border-slate-800 my-6">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="text-2xl md:text-3xl font-black text-indigo-600 dark:text-indigo-400">
                {quizState.score} / {totalQ}
              </div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Score</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                {accuracy}%
              </div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Accuracy</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="text-2xl md:text-3xl font-black text-amber-500">
                {quizState.bestStreak} 🔥
              </div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Max Streak</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {incorrectAnswers.length > 0 && (
              <button
                onClick={() => {
                  if (level === 'N5') startN5Quiz(incorrectAnswers.map(a => a.question));
                  else startN4TextbookQuiz(incorrectAnswers.map(a => a.question));
                }}
                className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-lg shadow-rose-500/25 transition-all text-sm flex items-center gap-2 cursor-pointer"
              >
                <span>🔄 Retry Missed Questions ({incorrectAnswers.length})</span>
              </button>
            )}
            <button
              onClick={() => {
                if (level === 'N5') startN5Quiz();
                else startN4TextbookQuiz();
              }}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 transition-all text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Retake This Quiz</span>
            </button>
            <button
              onClick={() => setQuizState(prev => ({ ...prev, started: false, finished: false }))}
              className="px-6 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl transition-all text-sm cursor-pointer"
            >
              Choose Another Unit
            </button>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                Question Review & Explanations
              </h3>
              <p className="text-xs text-slate-400">Detailed answers matching official textbook solutions</p>
            </div>
            <div className="flex gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  reviewFilter === 'all'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-500'
                }`}
              >
                All ({quizState.userAnswers.length})
              </button>
              <button
                onClick={() => setReviewFilter('incorrect')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  reviewFilter === 'incorrect'
                    ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm'
                    : 'text-slate-500'
                }`}
              >
                Missed ({incorrectAnswers.length})
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filteredReviews.map((ans, idx) => {
              const q = ans.question;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    ans.isCorrect
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40'
                      : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        ans.isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}>
                        {ans.isCorrect ? '✓' : '✕'}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {q.sectionTitle} • Question {q.itemNumber}
                      </span>
                    </div>
                    {q.imageSrc && (
                      <button
                        onClick={() => setPreviewImage({ urls: [q.imageSrc], currentIndex: 0, title: `${q.unitTitle} - Original Textbook Scan` })}
                        className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        📖 View Textbook Scan
                      </button>
                    )}
                  </div>

                  <div className="text-base font-bold text-slate-800 dark:text-slate-100 my-2 leading-relaxed">
                    {renderSentenceWithUnderline(q.sentence, q.target, q.itemNumber, q.id)}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2 text-xs font-medium">
                    {q.options.map((opt: string, optIdx: number) => {
                      const optNum = optIdx + 1;
                      const isChosen = ans.chosenOption === optNum;
                      const isRight = optNum === q.correctAnswer;
                      const cleanText = cleanOptionText(opt);
                      return (
                        <div
                          key={optIdx}
                          className={`p-2 rounded-xl border flex items-center gap-1.5 ${
                            isRight
                              ? 'bg-emerald-100/70 dark:bg-emerald-900/50 border-emerald-400 text-emerald-800 dark:text-emerald-200 font-bold'
                              : isChosen && !isRight
                              ? 'bg-rose-100/70 dark:bg-rose-900/50 border-rose-400 text-rose-800 dark:text-rose-200 line-through'
                              : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-500'
                          }`}
                        >
                          <span className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 text-[10px] flex items-center justify-center font-bold">
                            {optNum}
                          </span>
                          <span>{cleanText}</span>
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div className="text-xs text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 p-2.5 rounded-xl mt-2 border border-slate-100 dark:border-slate-800">
                      💡 <span className="font-semibold">Answer:</span> {cleanOptionText(q.options[q.correctAnswer - 1])} &mdash; {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal for Scanned Page */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl max-h-[92vh] w-full overflow-hidden flex flex-col shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 bg-slate-50 dark:bg-slate-800 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {previewImage.title}
                  </h4>
                  {previewImage.urls.length > 1 && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                      Page {previewImage.currentIndex + 1} of {previewImage.urls.length}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {previewImage.urls.length > 1 && (
                    <div className="flex gap-1">
                      {previewImage.urls.map((_, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setPreviewImage(prev => prev ? { ...prev, currentIndex: pIdx } : null)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            previewImage.currentIndex === pIdx
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                          }`}
                        >
                          P{pIdx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => setPreviewImage(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="overflow-auto p-4 flex items-center justify-center bg-slate-950/20 max-h-[80vh]">
                <img
                  src={previewImage.urls[previewImage.currentIndex]}
                  alt={previewImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Render Setup / Unit Selection Screen
  if (!quizState.started) {
    if (level === 'N4') {
      return (
        <div className="w-full max-w-4xl mx-auto space-y-6">
          {/* N4 Header Hero Banner */}
          <div className="bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold tracking-wider uppercase text-purple-200">
                  <span>📚 Official JLPT N4 Textbook Series</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                  N4 Practice Exam &amp; Review Quizzes
                </h2>
                <p className="text-purple-100/80 text-sm max-w-xl">
                  309 authentic JLPT questions extracted directly from the <span className="font-semibold text-white">"Nihongo Challenge N4"</span> textbook with full sentence context and explanations.
                </p>
              </div>

              <button
                onClick={() => startN4TextbookQuiz()}
                className="px-8 py-4 bg-white text-purple-950 hover:bg-purple-50 active:scale-95 font-black text-sm md:text-base rounded-2xl shadow-xl shadow-black/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Start Quiz ({selectedN4UnitId === 'all' ? '309 Qs' : `${activeN4Unit?.questionCount || 28} Qs`})</span>
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* N4 Unit Selector Cards */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Select Practice Unit ({N4_PRACTICE_UNITS.length} Units Available)
              </h3>
              <span className="text-xs text-purple-500 font-semibold">309 Total Questions</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {N4_PRACTICE_UNITS.map((unit) => {
                const isSelected = selectedN4UnitId === unit.id;
                return (
                  <div
                    key={unit.id}
                    onClick={() => setSelectedN4UnitId(unit.id)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                      isSelected
                        ? 'bg-purple-50/80 dark:bg-purple-950/60 border-purple-500 shadow-md ring-2 ring-purple-400/30'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className={`text-xl ${
                        isSelected ? 'scale-110' : ''
                      } transition-transform`}>
                        {unit.badge.split(' ')[0]}
                      </span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {unit.questionCount} Qs
                      </span>
                    </div>
                    <div>
                      <div className={`font-bold text-sm leading-tight mb-1 ${
                        isSelected ? 'text-purple-700 dark:text-purple-300' : 'text-slate-800 dark:text-slate-100'
                      }`}>
                        {unit.title}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-snug">
                        {unit.subtitle}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="absolute top-3 right-3">
                        <div className="w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* N4 Options Bar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsN4Shuffled(prev => !prev)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-2 ${
                  isN4Shuffled
                    ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-400 text-amber-700 dark:text-amber-300'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                }`}
              >
                <span>🔀</span>
                <span>Shuffle Questions</span>
              </button>
              <div className="text-xs text-slate-400 font-medium">
                {activeN4Unit?.description}
              </div>
            </div>
            <button
              onClick={() => startN4TextbookQuiz()}
              className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/30 transition-all text-sm flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Start N4 Practice Quiz →</span>
            </button>
          </div>
        </div>
      );
    }

    // N5 Textbook Units Selector
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* Header Hero Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold tracking-wider uppercase text-indigo-200">
                <span>📚 Official JLPT N5 Textbook Series</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                N5 Practice Exam & Review Quizzes
              </h2>
              <p className="text-indigo-100/80 text-sm max-w-xl">
                183 authentic JLPT questions extracted directly from the <span className="font-semibold text-white">"Nihongo Challenge N5"</span> textbook scans with full sentence context and explanations.
              </p>
            </div>

            <button
              onClick={() => startN5Quiz()}
              className="px-8 py-4 bg-white text-indigo-950 hover:bg-indigo-50 active:scale-95 font-black text-sm md:text-base rounded-2xl shadow-xl shadow-black/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Start Quiz ({selectedUnitId === 'all' ? '183 Qs' : `${activeUnit?.questionCount || 28} Qs`})</span>
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Unit Selector Cards */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Select Practice Unit ({N5_PRACTICE_UNITS.length} Units Available)
            </h3>
            <span className="text-xs text-indigo-500 font-semibold">183 Total Questions</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {N5_PRACTICE_UNITS.map((unit) => {
              const isSelected = selectedUnitId === unit.id;
              return (
                <div
                  key={unit.id}
                  onClick={() => { setSelectedUnitId(unit.id); setSelectedSection('all'); }}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-500 shadow-md ring-2 ring-indigo-400/30'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold px-2 py-0.5 rounded-lg bg-indigo-100/80 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                        {unit.badge}
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {unit.questionCount} Questions
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 line-clamp-1">
                      {unit.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {unit.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-medium text-slate-500 dark:text-slate-400">{unit.subtitle}</span>
                    {unit.pages && unit.pages.length > 0 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewImage({ urls: unit.pages, currentIndex: 0, title: `${unit.title} - Textbook Scan` });
                        }}
                        className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold flex items-center gap-0.5 cursor-pointer"
                      >
                        📖 Preview Scan
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Filter & Quiz Customization Controls */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 md:p-6 shadow-sm space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Configure Quiz Options
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Section Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">
                Section Type
              </label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full text-xs font-semibold p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                <option value="all">All Sections (Full Unit)</option>
                <option value="もんだい 1">もんだい 1 (Kanji ➔ Hiragana Reading)</option>
                <option value="もんだい 2">もんだい 2 (Hiragana ➔ Kanji Orthography)</option>
                {(selectedUnitId === 'all' || selectedUnitId === 'unit_comprehensive') && (
                  <>
                    <option value="もんだい 3">もんだい 3 (Travel Guide / Reading Comprehension)</option>
                    <option value="もんだい 4">もんだい 4 (Survey Analysis / Pie Chart)</option>
                  </>
                )}
              </select>
            </div>

            {/* Question Count Limit */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">
                Quiz Length
              </label>
              <select
                value={questionCountLimit}
                onChange={(e) => setQuestionCountLimit(e.target.value)}
                className="w-full text-xs font-semibold p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                <option value="all">All Questions (Standard Mode)</option>
                <option value="10">10 Questions (Quick Review)</option>
                <option value="20">20 Questions (Standard Quiz)</option>
                <option value="28">28 Questions (Full Review Unit)</option>
              </select>
            </div>

            {/* Question Order */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">
                Question Order
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsShuffled(false)}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    !isShuffled
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-600 dark:text-indigo-300'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  📖 Textbook Order
                </button>
                <button
                  type="button"
                  onClick={() => setIsShuffled(true)}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isShuffled
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-600 dark:text-indigo-300'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  🎲 Shuffle
                </button>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <div className="text-xs text-slate-400">
              Selected: <span className="font-bold text-slate-700 dark:text-slate-200">{selectedUnitId === 'all' ? 'Full Mock Exam (183 Qs)' : activeUnit.title}</span>
            </div>
            <button
              onClick={() => startN5Quiz()}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 transition-all text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Begin Practice Quiz</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal for Scanned Page */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl max-h-[92vh] w-full overflow-hidden flex flex-col shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 bg-slate-50 dark:bg-slate-800 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {previewImage.title}
                  </h4>
                  {previewImage.urls.length > 1 && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                      Page {previewImage.currentIndex + 1} of {previewImage.urls.length}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {previewImage.urls.length > 1 && (
                    <div className="flex gap-1">
                      {previewImage.urls.map((_, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setPreviewImage(prev => prev ? { ...prev, currentIndex: pIdx } : null)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            previewImage.currentIndex === pIdx
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                          }`}
                        >
                          P{pIdx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => setPreviewImage(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="overflow-auto p-4 flex items-center justify-center bg-slate-950/20 max-h-[80vh]">
                <img
                  src={previewImage.urls[previewImage.currentIndex]}
                  alt={previewImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Active Question In-Quiz Interface
  const currentQ = quizState.questions[quizState.currentIdx];
  const progressPercent = ((quizState.currentIdx + 1) / quizState.questions.length) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {/* Top Bar: Navigation, Question Progress, and Stats */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuizState(prev => ({ ...prev, started: false }))}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-xs font-semibold flex items-center gap-1 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Exit</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                Question {quizState.currentIdx + 1} of {quizState.questions.length}
              </span>
              <button
                onClick={() => setShowQuestionGrid(true)}
                className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
              >
                📋 Jump
              </button>
            </div>
            <div className="w-28 sm:w-44 bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-1 overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {currentQ.imageSrc && (
            <button
              onClick={() => setPreviewImage({ urls: [currentQ.imageSrc], currentIndex: 0, title: `${currentQ.unitTitle || 'N5 Textbook'} - Scanned Page` })}
              className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>📖 Scanned Page</span>
            </button>
          )}

          <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            Score: {quizState.score}
          </div>

          {quizState.streak > 1 && (
            <div className="text-xs font-bold px-2.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 animate-pulse hidden sm:block">
              🔥 {quizState.streak}
            </div>
          )}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none relative">
        {/* Section Header & Instruction */}
        <div className="mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold text-xs">
              {currentQ.sectionTitle || currentQ.section || 'もんだい'}
            </span>
            <span className="text-xs font-bold text-slate-400">
              No. {currentQ.itemNumber}
            </span>
          </div>

          {currentQ.target && (
            <button
              onClick={() => onSpeak(currentQ.target)}
              className="p-1.5 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-300 rounded-full transition-all text-xs inline-flex items-center gap-1 font-semibold cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              <span>Pronounce</span>
            </button>
          )}
        </div>

        {/* Section Instruction */}
        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-5 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800/60">
          {currentQ.instruction}
        </div>

        {/* Context Container (For Travel flyer or Survey chart) */}
        {currentQ.contextType === 'travel_notice' && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-950/30 dark:to-indigo-950/30 border border-sky-200 dark:border-sky-800/50 text-slate-800 dark:text-slate-100">
            <div className="flex items-center gap-2 font-black text-sm text-sky-700 dark:text-sky-300 mb-2">
              <span>✈️ ほっかいどうへ いきませんか (Hokkaido Travel Notice)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-sky-100 dark:border-sky-900/40">
                <div className="font-bold text-sky-800 dark:text-sky-200">① 飛行機（ひこうき）</div>
                <div>羽田空港（はねだくうこう）から １時間半</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-sky-100 dark:border-sky-900/40">
                <div className="font-bold text-sky-800 dark:text-sky-200">② 山・川・おいしい魚</div>
                <div>きれいな山を 見ませんか。川で 魚を 食べませんか。</div>
              </div>
            </div>
          </div>
        )}

        {currentQ.contextType === 'survey_chart' && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800/50 text-slate-800 dark:text-slate-100">
            <div className="flex items-center justify-between font-black text-sm text-amber-800 dark:text-amber-300 mb-2">
              <span>📊 小学生100人アンケート (School Survey Breakdown)</span>
              <span className="text-[11px] font-semibold text-slate-500">学校で何が一番好きですか</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs">
              <div className="p-2 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-100 dark:border-amber-900/40">
                <div className="text-amber-600 font-bold">25%</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300">休み時間</div>
              </div>
              <div className="p-2 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-100 dark:border-amber-900/40">
                <div className="text-amber-600 font-bold">23%</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300">給食</div>
              </div>
              <div className="p-2 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-100 dark:border-amber-900/40">
                <div className="text-amber-600 font-bold">18%</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300">友だち</div>
              </div>
              <div className="p-2 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-100 dark:border-amber-900/40">
                <div className="text-amber-600 font-bold">15%</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300">勉強</div>
              </div>
              <div className="p-2 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-100 dark:border-amber-900/40">
                <div className="text-amber-600 font-bold">10%</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300">先生</div>
              </div>
              <div className="p-2 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-100 dark:border-amber-900/40">
                <div className="text-amber-600 font-bold">9%</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300">読書</div>
              </div>
            </div>
          </div>
        )}

        {/* Question Sentence Display with Target Highlight & Solid Underline */}
        <div className="my-6 text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 dark:text-slate-100 leading-relaxed inline-block p-4 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            {renderSentenceWithUnderline(currentQ.sentence, currentQ.target, currentQ.itemNumber, currentQ.id)}
          </div>
        </div>

        {/* 4 Interactive Option Choices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {currentQ.options.map((optText: string, idx: number) => {
            const optNum = idx + 1;
            const isCorrect = optNum === currentQ.correctAnswer;
            const isSelected = quizState.selectedOption === optNum;
            const cleanText = cleanOptionText(optText);

            let buttonStyles = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-indigo-400 hover:bg-indigo-50/50';

            if (quizState.isAnswered) {
              if (isCorrect) {
                buttonStyles = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold ring-2 ring-emerald-400';
              } else if (isSelected && !isCorrect) {
                buttonStyles = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-700 dark:text-rose-300 font-semibold ring-2 ring-rose-400';
              } else {
                buttonStyles = 'opacity-40 border-slate-200 dark:border-slate-800 text-slate-400';
              }
            }

            return (
              <button
                key={idx}
                disabled={quizState.isAnswered}
                onClick={() => handleSelectOption(optNum)}
                className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-base font-bold text-left group cursor-pointer ${buttonStyles}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black transition-all ${
                    quizState.isAnswered && isCorrect
                      ? 'bg-emerald-500 text-white'
                      : quizState.isAnswered && isSelected && !isCorrect
                      ? 'bg-rose-500 text-white'
                      : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white shadow-sm'
                  }`}>
                    {optNum}
                  </span>
                  <span className="text-base sm:text-lg">{cleanText}</span>
                </div>

                {quizState.isAnswered && isCorrect && (
                  <span className="text-emerald-600 dark:text-emerald-400 font-black text-xl">✓</span>
                )}
                {quizState.isAnswered && isSelected && !isCorrect && (
                  <span className="text-rose-600 dark:text-rose-400 font-black text-xl">✕</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Answer Feedback & Explanation Box */}
        {quizState.isAnswered && (
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 mb-4">
              <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-bold text-sm mb-1">
                <span>💡 Official Textbook Explanation:</span>
              </div>
              <p className="text-xs text-indigo-800 dark:text-indigo-300">
                {currentQ.explanation}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handlePrevQuestion}
                disabled={quizState.currentIdx === 0}
                className="px-4 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition-all disabled:opacity-40 cursor-pointer"
              >
                ← Previous
              </button>

              <button
                onClick={handleNextQuestion}
                className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 transition-all text-sm flex items-center gap-2 ml-auto cursor-pointer"
              >
                <span>{quizState.currentIdx + 1 >= quizState.questions.length ? 'View Final Results' : 'Next Question →'}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Question Grid / Jump Modal */}
      {showQuestionGrid && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowQuestionGrid(false)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-lg w-full shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
              <h4 className="font-bold text-base text-slate-800 dark:text-slate-100">
                Question Sheet Navigator
              </h4>
              <button
                onClick={() => setShowQuestionGrid(false)}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
              {quizState.questions.map((q, idx) => {
                const answerRecord = quizState.userAnswers.find(a => a.question.id === q.id);
                const isCurrent = idx === quizState.currentIdx;

                let badgeStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700';
                if (answerRecord) {
                  badgeStyle = answerRecord.isCorrect
                    ? 'bg-emerald-500 text-white border-emerald-600'
                    : 'bg-rose-500 text-white border-rose-600';
                } else if (isCurrent) {
                  badgeStyle = 'bg-indigo-600 text-white border-indigo-700 ring-2 ring-indigo-400';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`h-11 rounded-xl font-bold text-xs border transition-all flex flex-col items-center justify-center cursor-pointer ${badgeStyle}`}
                  >
                    <span>Q{idx + 1}</span>
                    <span className="text-[9px] opacity-75">{q.itemNumber}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Modal for Scanned Page */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl max-h-[92vh] w-full overflow-hidden flex flex-col shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-50 dark:bg-slate-800 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                  {previewImage.title}
                </h4>
                {previewImage.urls.length > 1 && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                    Page {previewImage.currentIndex + 1} of {previewImage.urls.length}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {previewImage.urls.length > 1 && (
                  <div className="flex gap-1">
                    {previewImage.urls.map((_, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => setPreviewImage(prev => prev ? { ...prev, currentIndex: pIdx } : null)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          previewImage.currentIndex === pIdx
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        P{pIdx + 1}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="overflow-auto p-4 flex items-center justify-center bg-slate-950/20 max-h-[80vh]">
              <img
                src={previewImage.urls[previewImage.currentIndex]}
                alt={previewImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default function App() {
  const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4'>('N5');
  const [selectedMode, setSelectedMode] = useState<'kanji' | 'vocab' | 'quiz'>('kanji');
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [searchTerm, setSearchFilter] = useState('');

  // Active dataset key based on level & mode
  const activePart = useMemo(() => {
    if (selectedLevel === 'N5') {
      return selectedMode === 'vocab' ? 'vocab_n5' : 'part1';
    } else {
      return selectedMode === 'vocab' ? 'vocab_n4' : 'part2';
    }
  }, [selectedLevel, selectedMode]);

  const currentDataset = KANJI_DATA[activePart] || KANJI_DATA.part1;
  const currentLesson = currentDataset.lessons[activeLessonIdx] || currentDataset.lessons[0];

  const cardsList = useMemo(() => {
    if (!currentLesson) return [];
    if (!searchTerm.trim()) return currentLesson.cards;
    const term = searchTerm.toLowerCase();
    return currentLesson.cards.filter(card =>
      card.kanji.toLowerCase().includes(term) ||
      card.reading.toLowerCase().includes(term) ||
      card.meaning.toLowerCase().includes(term)
    );
  }, [currentLesson, searchTerm]);

  const currentCard = cardsList[currentCardIdx] || null;

  const handleNext = () => {
    if (cardsList.length === 0) return;
    setCurrentCardIdx((prev) => (prev + 1) % cardsList.length);
  };

  const handlePrev = () => {
    if (cardsList.length === 0) return;
    setCurrentCardIdx((prev) => (prev - 1 + cardsList.length) % cardsList.length);
  };

  const handleLevelChange = (level: 'N5' | 'N4') => {
    setSelectedLevel(level);
    setActiveLessonIdx(0);
    setCurrentCardIdx(0);
    setSearchFilter('');
  };

  const handleModeChange = (mode: 'kanji' | 'vocab' | 'quiz') => {
    setSelectedMode(mode);
    setActiveLessonIdx(0);
    setCurrentCardIdx(0);
    setSearchFilter('');
  };

  const switchLesson = (idx: number) => {
    setActiveLessonIdx(idx);
    setCurrentCardIdx(0);
  };

  const playJapaneseAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Top Centered Environment Badge */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50/90 dark:bg-indigo-950/60 border border-indigo-100/80 dark:border-indigo-800/50 shadow-sm">
            <span className="text-base leading-none">⛩️</span>
            <span className="text-xs md:text-sm font-bold text-indigo-600 dark:text-indigo-300 tracking-wide">
              JLPT N5 & N4 Master Environment
            </span>
          </div>
        </div>

        {/* Main Title Header */}
        <header className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#E11D48] tracking-tight pb-1">
            Nihongo Challenge
          </h1>
        </header>

        {/* Main Floating Control Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-3xl p-2.5 md:p-3 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Left Group: Level Switcher */}
            <div className="bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-2xl flex items-center gap-1 w-full sm:w-auto justify-center">
              <button
                onClick={() => handleLevelChange('N5')}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all duration-200 ${
                  selectedLevel === 'N5'
                    ? 'bg-[#4338CA] text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                N5 Level
              </button>
              <button
                onClick={() => handleLevelChange('N4')}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all duration-200 ${
                  selectedLevel === 'N4'
                    ? 'bg-[#4338CA] text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                N4 Level
              </button>
            </div>

            {/* Right Group: Mode Switcher */}
            <div className="bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-2xl flex items-center gap-1 w-full sm:w-auto justify-center">
              {[
                { key: 'kanji', label: 'Kanji Cards' },
                { key: 'vocab', label: 'Vocab Words' },
                { key: 'quiz', label: 'Practice Quiz' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleModeChange(tab.key as any)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all duration-200 ${
                    selectedMode === tab.key
                      ? 'bg-white dark:bg-slate-900 text-[#4338CA] dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Content Body: Flashcards vs Practice Quiz */}
        {selectedMode === 'quiz' ? (
          <PracticeQuiz
            level={selectedLevel}
            onSpeak={playJapaneseAudio}
            onBackToCards={() => setSelectedMode('kanji')}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Sidebar - Lesson Navigation */}
            <div className="md:col-span-1 space-y-3">
              <div className="flex justify-between items-center px-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {selectedLevel} {selectedMode === 'vocab' ? 'Vocab' : 'Kanji'} Lessons ({KANJI_DATA[activePart]?.lessons.length})
                </h3>
              </div>

              {/* Quick Search */}
              <div className="relative mb-2">
                <input
                  type="text"
                  placeholder={`Search ${selectedLevel} ${selectedMode === 'vocab' ? 'vocab' : 'kanji'}...`}
                  value={searchTerm}
                  onChange={(e) => { setSearchFilter(e.target.value); setCurrentCardIdx(0); }}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchFilter('')}
                    className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="max-h-[500px] overflow-y-auto pr-1 space-y-1.5 scrollbar-thin scrollbar-thumb-indigo-200 dark:scrollbar-thumb-slate-800">
                {KANJI_DATA[activePart]?.lessons.map((lesson, idx) => (
                  <button
                    key={lesson.id}
                    onClick={() => switchLesson(idx)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl text-xs md:text-sm transition-all flex items-center justify-between ${activeLessonIdx === idx
                        ? 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold border-l-4 border-indigo-600 shadow-sm'
                        : 'hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 border border-transparent'
                      }`}
                  >
                    <span className="truncate">{lesson.title}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-500 ml-1 font-medium">
                      {lesson.cards.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Flashcard Display Area */}
            <div className="md:col-span-3 flex flex-col items-center">
              <div className="w-full max-w-md mb-2 flex justify-between items-end px-2">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200">{currentLesson?.title}</h2>
                  <p className="text-xs font-medium text-slate-500">
                    {cardsList.length > 0 ? `Card ${currentCardIdx + 1} of ${cardsList.length}` : 'No matching cards'}
                  </p>
                </div>
                {currentCard && (
                  <button
                    onClick={() => playJapaneseAudio(currentCard.kanji)}
                    className="p-2 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-300 rounded-full transition-all text-xs flex items-center gap-1 font-semibold"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    Audio
                  </button>
                )}
              </div>

              {/* Flashcard Component */}
              {currentCard ? (
                <Flashcard
                  key={`${activePart}-${activeLessonIdx}-${currentCardIdx}`}
                  card={currentCard}
                  onSpeak={playJapaneseAudio}
                />
              ) : (
                <div className="w-full max-w-md h-80 my-4 bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center text-slate-400">
                  <p className="text-sm font-medium">No results found for "{searchTerm}"</p>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center gap-6 mt-4">
                <button
                  onClick={handlePrev}
                  disabled={!cardsList.length}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 active:scale-95 transition-all shadow-sm text-slate-700 dark:text-slate-300 disabled:opacity-40"
                  aria-label="Previous Flashcard"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!cardsList.length}
                  className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/30 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-40"
                >
                  Next Word
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="mt-8 text-center p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl border border-indigo-100 dark:border-indigo-900/40 w-full max-w-md">
                <p className="text-xs text-indigo-700 dark:text-indigo-400 italic">
                  {selectedLevel === 'N4' && selectedMode === 'vocab'
                    ? `"Practice N4 compound words like '${currentCard?.kanji || '住所'}' in everyday context!"`
                    : selectedLevel === 'N5' && selectedMode === 'vocab'
                      ? `"Practice compound readings like '${currentCard?.kanji || '漢字'}' to master context!"`
                      : selectedLevel === 'N4'
                        ? `"N4 Tip: Combine root meanings to understand complex compound words!"`
                        : `"Tip: Read both Kun-yomi (Japanese reading) and On-yomi (Chinese reading)!"`}
                </p>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Embedded 3D CSS Effects */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}