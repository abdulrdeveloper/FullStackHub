# HiteshBot (Predefined Chatbot)

A simple predefined chatbot web app built with **Next.js** and **React**. The bot matches your message against predefined **intents** (patterns) and replies with a random response from the matching intent.

> No backend / AI model is used — replies come from `app/data/hitesh_chatbot.json`.

---

## Live Features

- Chat UI with user + bot messages
- Typing support + **Enter** to send
- Auto-scroll to the latest message
- Predefined intent matching:
  - Input is lowercased and trimmed
  - The app checks whether the input **includes** any intent pattern
  - Returns a random response from the matched intent

---

## Tech Stack

- **Next.js 16.2.7** (App Router)
- **React 19**
- **TypeScript**
- Styling via **global CSS** in `app/globals.css`

---

## How It Works

### Pages / Layout
- `app/layout.tsx`
  - Sets page metadata (title/description)
  - Wraps the app with `<html>` / `<body>`

- `app/page.tsx`
  - Renders the header (“HiteshBot”)
  - Renders the chat UI via `MessageList`
  - Renders a small footer disclaimer

### Chat Logic
- `app/components/main/MessageList.tsx` (client component)
  - Holds `messages` state (initial bot greeting + appended user/bot messages)
  - Uses `ChatBotData` imported from:
    - `app/data/hitesh_chatbot.json`
  - Main matching function:
    - `findUserRes(input)`
    - Loops through `ChatBotData.intents`
    - Checks patterns via substring match (`text.includes(pattern)`)
    - Returns a random response from `intent.responses`
    - Fallback: `I'm sorry, I didn't understand that.`

### Data (Intents / Responses)
- `app/data/hitesh_chatbot.json`
  - Structure:
    - `intents: [{ tag, patterns: string[], responses: string[] }, ...]`

---

## Project Structure (Key Files)

- `app/page.tsx` - Home page UI
- `app/layout.tsx` - Root layout + metadata
- `app/components/main/MessageList.tsx` - Chat UI + intent matching
- `app/data/hitesh_chatbot.json` - All predefined intents/responses
- `app/globals.css` - Chat styling (dark theme, bubbles, input area)

---

## Getting Started

### Prerequisites
- Node.js installed

### Install
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint
```bash
npm run lint
```

---

## Notes / Limitations

- Matching is **simple substring-based** and may produce unexpected matches.
- Responses are **prewritten** — there is no dynamic generation.
- If no intent pattern matches, the bot uses the fallback message.

---

## License

MIT (see `LICENSE`)
