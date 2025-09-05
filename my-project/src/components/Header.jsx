import React from "react";
import { useChat } from "../context/ChatContext.jsx";

export default function Header() {
  const { screen, setScreen } = useChat();

  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {screen !== "chats" && (
            <button
              className="rounded-xl border px-3 py-1.5 hover:bg-slate-50"
              onClick={() => setScreen("chats")} 
            >
              ←
            </button>
          )}
          <h3 className="font-bold">Smart Team Chat</h3>
          <span className="ml-2 text-xs rounded-full bg-slate-900 text-white px-2 py-0.5">Prototype</span>
        </div>
        <div className="text-sm text-slate-500">AI-first collaboration • Mocked actions</div>
      </div>
    </header>
  );
}
