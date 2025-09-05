import React from "react";
import { useChat } from "../context/ChatContext.jsx";

export default function NewChat() {
  const {
    newChatName,
    setNewChatName,
    startNewChat,
    generateIcebreaker,
    icebreaker,
    screen,
  } = useChat();

  if (screen !== "new") return null;

  return (
    <div className="bg-white/90 border rounded-xl sm:rounded-2xl shadow-sm mt-3 sm:mt-5">
      {/* Header */}
      <div className="px-3 sm:px-4 py-2 sm:py-3 border-b font-semibold text-sm sm:text-base">
        Start a Chat
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 space-y-3">
        {/* Input */}
        <input
          className="w-full rounded-lg sm:rounded-xl border px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base"
          value={newChatName}
          onChange={(e) => setNewChatName(e.target.value)}
          placeholder="Participant name"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            className="rounded-lg sm:rounded-xl bg-slate-900 text-black dark:bg-white dark:text-slate-900 px-3 py-1.5 sm:py-2 text-sm sm:text-base"
            onClick={startNewChat}
          >
            Create
          </button>
          <button
            className="rounded-lg sm:rounded-xl bg-indigo-50 border border-indigo-100 text-slate-900 px-3 py-1.5 sm:py-2 text-sm sm:text-base"
            onClick={generateIcebreaker}
          >
            🤖 Generate Icebreaker
          </button>
        </div>

        {/* Icebreaker result */}
        {icebreaker && (
          <div className="rounded-lg sm:rounded-xl border bg-slate-50 p-2 sm:p-3 text-xs sm:text-sm">
            <div className="mb-1 font-medium text-slate-700">AI Icebreaker</div>
            <p>{icebreaker}</p>
          </div>
        )}
      </div>
    </div>
  );
}
