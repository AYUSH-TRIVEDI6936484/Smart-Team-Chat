import React from "react";
import { useChat } from "../context/ChatContext.jsx";

export default function Header() {
  const { screen, setScreen } = useChat();

  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Back button: visible only on mobile/tablet */}
          {screen !== "chats" && (
            <button
              className="rounded-lg sm:rounded-xl border px-2 sm:px-3 py-1 sm:py-1.5 hover:bg-slate-50 lg:hidden"
              onClick={() => setScreen("chats")}
            >
              ←
            </button>
          )}
          <h3 className="font-bold text-sm sm:text-base">Smart Team Chat</h3>
          <span className="ml-2 text-[10px] sm:text-xs rounded-full bg-slate-900 text-white px-1.5 sm:px-2 py-0.5">
            Prototype
          </span>
        </div>

        {/* Hide tagline on very small screens */}
        <div className="hidden sm:block text-sm text-slate-500">
          AI-first collaboration • Mocked actions
        </div>
      </div>
    </header>
  );
}
