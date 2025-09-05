import React from "react";
import { useChat } from "../context/ChatContext.jsx";

export default function NewChat() {
  const { newChatName, setNewChatName, startNewChat, generateIcebreaker, icebreaker, screen } = useChat();

  if (screen !== "new") return null;

  return (
    <div className="bg-white/90 border rounded-2xl shadow-sm mt-5">
      <div className="px-4 py-3 border-b font-semibold">Start a Chat</div>
      <div className="p-4 space-y-3">
        <input
          className="w-full rounded-xl border px-3 py-2"
          value={newChatName}
          onChange={(e) => setNewChatName(e.target.value)}
          placeholder="Participant name"
        />
        <div className="flex gap-2">
          <button
            className="rounded-xl bg-slate-900 text-black dark:bg-white dark:text-slate-900 px-3 py-2"
            onClick={startNewChat}
          >
            Create
          </button>
          <button
            className="rounded-xl bg-indigo-50 border border-indigo-100 text-slate-900 px-3 py-2"
            onClick={generateIcebreaker}
          >
            🤖 Generate Icebreaker
          </button>
        </div>
        {icebreaker && (
          <div className="rounded-xl border bg-slate-50 p-3 text-sm">
            <div className="mb-1 font-medium text-slate-700">AI Icebreaker</div>
            <p>{icebreaker}</p>
          </div>
        )}
      </div>
    </div>
  );
}
