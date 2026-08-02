# 🎌 Nihongo Challenge — JLPT N5 & N4 Kanji Study App

A comprehensive interactive Japanese language study environment for **JLPT N5 and N4** learners. Study kanji and vocabulary with flashcards, practice with quizzes, and test yourself with JLPT-style reading comprehension questions — all in one place.

---

## ✨ Features

### 📇 Kanji Flashcards
- **N5 Kanji** — 11 thematic lessons (Pictographs, Numbers, Directions, Verbs, Adjectives, etc.)
- **N4 Kanji** — 15+ thematic lessons (Address, Adjectives, Hobbies, Professions, Nature, etc.)
- Each card displays the **kanji character**, **on/kun readings**, and **English meaning**
- Navigate cards with Previous / Next controls
- 🔊 **Text-to-speech** pronunciation using the Web Speech API (Japanese `ja-JP`)
- **Search / filter** cards within any lesson by kanji, reading, or meaning

### 📖 Vocabulary Words
- Switch to **Vocab Words** mode to study vocabulary in context alongside kanji
- Separate vocabulary sets for both N5 and N4 levels

### 🧠 Practice Quiz
- Interactive multiple-choice quiz mode for **N5** and **N4** levels
- Questions sourced from large curated question banks (`n5_practice_questions`, `n4_practice_questions`)
- **Adjustable range** — select which unit(s) / lesson(s) to practise
- Instant answer feedback with score tracking

### 📝 JLPT Practice Questions (N4)
- Standalone HTML page (`src/N4_questions.html`) with full JLPT N4-style reading and grammar questions
- Includes **image-based questions** with visual comprehension tasks (24 N4 question images included)
- Sections modelled after the real JLPT test format: 問題 (mondai) blocks

### 🌙 Dark Mode
- Automatic dark/light mode support via Tailwind CSS

---

## 🗂️ Project Structure

```
Japanese Lecture Design/
├── index.html                               # App entry point
├── src/
│   ├── main.tsx                             # React app bootstrap
│   ├── index.css                            # Global styles
│   ├── N4_questions.html                    # Standalone JLPT N4 question page
│   └── data/
│       ├── n5_practice_questions.ts         # N5 quiz question bank (TypeScript)
│       ├── n5_practice_questions.js         # N5 quiz question bank (compiled JS)
│       ├── n4_practice_questions.ts         # N4 quiz question bank (TypeScript)
│       └── n4_practice_questions.js         # N4 quiz question bank (compiled JS)
├── nihongo_challenge_kanji_flashcards-2.tsx # Main app component
├── public/
│   ├── question_pic_N4/                     # N4 question images (24 images)
│   └── question_pic_N5/                     # N5 question images
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Vite 6](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | Typography |
| Web Speech API | Japanese text-to-speech |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Sakame2806/Japanese-N5---N4-Kanji.git

# Navigate to the project directory
cd "Japanese Lecture Design"

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📚 Content Overview

### N5 Kanji Lessons (11 lessons)

| # | Lesson | Theme |
|---|---|---|
| 1 | Pictographs 1 | Mountain, River, Sun, Fire, Water… |
| 2 | Numbers | 一〜十 (1–10) |
| 3 | Numbers & Signs | Hundred, Thousand, Year, Up, Down… |
| 4 | Pictographs 2 | Person, Child, Eye, Mouth, Hand… |
| 5 | Pictographs 3 | Father, Mother, School, Friend… |
| 6 | Directions | Front, Back, East, West, South, North… |
| 7 | Pictographs 4 | Cow, Horse, Fish, Rain, Car… |
| 8 | Adjectives | Big, Small, High, Cheap, New, Old… |
| 9 | Verbs | Go, Come, Eat, See, Write, Drink… |
| 10 | Combinations 1 | Speak, Read, Hear, Buy, Time… |
| 11 | Combinations 2 | Now, Meet, Company, Shop, Station… |

### N4 Kanji Lessons (15+ lessons)

| # | Lesson | Theme |
|---|---|---|
| 1 | Address | City, Ward, Town, Village, Prefecture… |
| 2 | Adjectives 1 | Bright, Dark, Far, Near, Strong, Weak… |
| 3 | Adjectives 2 | Special, Convenient, Like, Hurry… |
| 4 | Adjectives 3 | Low, Wide, Short, Good, Bad, Correct… |
| 5 | Hobby | Movie, Music, Song, Photo, Travel… |
| 6 | Profession | Work, Bank, Doctor, Shop, Industry… |
| 7 | Nature | Forest, Sea, Snow, Light, Wind… |
| … | … | … |

---

## 🎯 How to Use

1. **Select a level** — Choose **N5** or **N4** from the top control bar.
2. **Choose a mode**:
   - **Kanji Cards** — Browse kanji flashcards lesson by lesson
   - **Vocab Words** — Study vocabulary in the same lesson structure
   - **Practice Quiz** — Take an interactive quiz for the selected level
3. **Navigate lessons** from the sidebar panel on the left.
4. **Search** for specific kanji, readings, or meanings using the search bar.
5. **Click the speaker icon 🔊** on a card to hear the Japanese pronunciation.
6. **Open** `src/N4_questions.html` directly in a browser for full JLPT N4-style reading practice questions with images.

---

## 📄 License

This project is for educational purposes. All kanji content is based on the JLPT N5 and N4 curriculum.
