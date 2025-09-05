# Smart Team Chat UI

🚀 **Minimal React prototype** demonstrating how AI can enhance team communication with suggestions, summaries, and prompts.  
*(Built as part of the “Intern Task – Smart Team Chat UI” assignment.)*

---

## 🎯 Objective
The goal is to showcase **AI-first UI/UX** concepts in a lightweight chat interface.  
No real backend or chat integration is included—only **placeholders** for AI-powered features.

---

## Install & Run
- git clone https://github.com/AYUSH-TRIVEDI6936484/Smart-Team-Chat.git
- cd smart-team-chat-ui
- npm install
- npm run dev

## Folder Structure
smart-team-chat-ui/
├── src/
│   ├── components/        # UI components (Sidebar, ChatWindow, Header, etc.)
│   ├── context/           # ChatContext (state management)
│   ├── data/              # Dummy JSON data
│   ├── lib/               # Avatar + Icon utilities
│   ├── App.jsx            # Main app container
│   ├── main.jsx           # Entry point
│   └── index.css          # Tailwind global styles
├── package.json
└── README.md

## 📱 Features (Deliverables)

### 1. Chat List
- Displays dummy chat conversations (from JSON data).  
- Shows **chat name, avatar, last message, and time**.  
- Tabs for **All / Unread**.  
- Search bar with icon.  
- Scrollable list.

### 2. Chat Window
- Displays dummy messages in a thread.  
- Includes AI placeholder buttons:
  - **Summarize Thread** → shows a mock thread summary.  
  - **Smart Reply Suggestion** → shows a placeholder reply suggestion.  
- Auto-scrollable message area.

### 3. New Chat
- Opens when clicking **+ New**.  
- Enter participant name to create a chat.  
- AI placeholder:
  - **Generate Icebreaker** → generates a sample friendly intro message.  
- Hidden until activated; dismissed with **Back** button.

---

## 🛠️ Tech Stack
- **React (Web)** with Vite  
- **Tailwind CSS** for styling  
- **Context API** for state management  
- Dummy data only  

---

## ▶️ Getting Started

### Prerequisites
- Node.js **20.19+** or **22.12+** (Vite requires this).  
  Check version:
  ```bash
  node -v
