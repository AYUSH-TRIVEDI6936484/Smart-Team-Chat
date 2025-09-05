import React from "react";
import { useChat } from "../context/ChatContext.jsx";
import { avatarFor } from "../lib/avatar.js";
import { Icon } from "../lib/icons.jsx";

export default function ChatWindow() {
  const {
    activeChat,
    showSummary, setShowSummary,
    smartReply, setSmartReply,
    threads,
    summarizeThread, suggestReply,
    newMsg, setNewMsg,
    sendMessage,
  } = useChat();

  return (
    <section className="h-full min-h-0 flex flex-col">
      <div className="h-full bg-white/90 border rounded-2xl shadow-sm flex flex-col min-h-0">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-3 font-semibold">
            {activeChat ? (
              <>
                <div
                  className={`h-8 w-8 rounded-full ${avatarFor(activeChat.name).cls} flex items-center justify-center text-xs font-semibold`}
                >
                  {avatarFor(activeChat.name).letter}
                </div>
                <span>{activeChat.name}</span>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> Online
                </span>
              </>
            ) : (
              <span className="text-slate-500">Open a chat</span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              className="rounded-xl bg-indigo-50 border border-indigo-100 text-slate-900 px-3 py-2 disabled:opacity-50"
              onClick={summarizeThread}
              disabled={!activeChat}
            >
              <span className="inline-flex items-center gap-1">
                <Icon name="sparkles" /> Summarize
              </span>
            </button>
            <button
              className="rounded-xl border px-3 py-2 hover:bg-slate-50 disabled:opacity-50"
              onClick={suggestReply}
              disabled={!activeChat}
            >
              <span className="inline-flex items-center gap-1">
                <Icon name="robot" /> Smart Reply
              </span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 flex-1 overflow-y-auto min-h-0">
          {showSummary && (
            <div className="rounded-xl border bg-slate-50 p-4 text-sm">
              <div className="font-medium text-slate-700 mb-1">AI Summary (placeholder)</div>
              <p>
                Design team is iterating on the hero; frames shared at 10:06 AM. Next step: confirm direction before noon.
                No blockers reported.
              </p>
            </div>
          )}

          <div className="space-y-3">
            {activeChat ? (
              (threads[activeChat.id] || []).map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[78%] rounded-2xl border px-4 py-2 ${
                    m.from === "Me" ? "ml-auto bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "bg-white"
                  }`}
                >
                  <div className="text-[11px] opacity-70 mb-0.5">
                    {m.from} · {m.at}
                  </div>
                  <div className="text-sm leading-relaxed">{m.text}</div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-slate-500">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">💬</div>
                <div className="font-medium">No chat selected</div>
                <div className="text-sm">Pick a conversation from the left or start a new one.</div>
              </div>
            )}
          </div>

          {smartReply && (
            <div className="flex items-center gap-2">
              <button
                className="rounded-full border bg-slate-50 px-3 py-1.5 text-sm"
                onClick={() => setNewMsg((p) => (p ? p : smartReply))}
              >
                <span className="inline-flex items-center gap-1">
                  <Icon name="robot" /> {smartReply}
                </span>
              </button>
              <button className="text-sm px-3 py-1.5" onClick={() => setSmartReply(null)}>
                Dismiss
              </button>
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="border-t p-3">
          <div className="flex items-end gap-2">
            <button className="rounded-xl border px-2.5 py-2 text-slate-600 disabled:opacity-50" disabled={!activeChat} title="Attach">
              <Icon name="paperclip" />
            </button>
            <button className="rounded-xl border px-2.5 py-2 text-slate-600 disabled:opacity-50" disabled={!activeChat} title="Emoji">
              <Icon name="smile" />
            </button>
            <textarea
              rows={2}
              className="w-full rounded-xl border px-3 py-2"
              placeholder={activeChat ? "Type a message" : "Pick a chat to start messaging"}
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              disabled={!activeChat}
            />
            <button
              className="inline-flex items-center gap-1 rounded-xl bg-slate-900 text-black dark:bg-white dark:text-slate-900 px-3 py-2 disabled:opacity-50"
              onClick={sendMessage}
              disabled={!activeChat || !newMsg.trim()}
            >
              <Icon name="send" /> Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
