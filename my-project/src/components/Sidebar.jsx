import React from "react";
import { useChat } from "../context/ChatContext.jsx";
import { avatarFor } from "../lib/avatar.js";
import { Icon } from "../lib/icons.jsx";

export default function Sidebar() {
  const { filteredChats, openChat, activeChat, search, setSearch, tab, setTab, setScreen } = useChat();

  return (
    <aside className="space-y-5 min-h-0 flex flex-col">
      <div className="bg-white/90 border rounded-2xl shadow-sm flex flex-col min-h-0 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="font-semibold">Chats</div>
          <button
            onClick={() => setScreen("new")}
            className="inline-flex items-center gap-1 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-50"
            title="Start new chat"
          >
            <Icon name="plus" /> New
          </button>
        </div>

        <div className="p-4 space-y-4 flex-1 min-h-0 flex flex-col">
          {/* Search */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Icon name="search" className="h-5 w-5 text-slate-500" />
            </span>
            <input
              type="text"
              className="w-full rounded-xl border pl-10 pr-3 py-2 text-sm placeholder-slate-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 text-sm">
            <button
              className={`flex-1 rounded-lg px-3 py-1.5 ${
                tab === "all" ? "bg-white shadow" : "hover:bg-white/50"
              }`}
              onClick={() => setTab("all")}
            >
              All
            </button>
            <button
              className={`flex-1 rounded-lg px-3 py-1.5 ${
                tab === "unread" ? "bg-white shadow" : "hover:bg-white/50"
              }`}
              onClick={() => setTab("unread")}
            >
              Unread
            </button>
          </div>

          {/* Scrollable chat list */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {filteredChats.map((c) => {
              const { letter, cls } = avatarFor(c.name);
              return (
                <button
                  key={c.id}
                  onClick={() => openChat(c)}
                  className={`w-full rounded-2xl border p-3 text-left hover:shadow-sm transition ${
                    activeChat?.id === c.id ? "border-slate-900" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${cls}`}
                    >
                      {letter}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium truncate">{c.name}</div>
                        <div className="text-xs text-slate-500 ml-2 shrink-0">{c.time}</div>
                      </div>
                      <div className="text-sm text-slate-600 truncate">{c.lastMessage}</div>
                    </div>
                  </div>
                  {c.unread ? (
                    <div className="mt-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700 border border-indigo-100">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> {c.unread} new
                      </span>
                    </div>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
