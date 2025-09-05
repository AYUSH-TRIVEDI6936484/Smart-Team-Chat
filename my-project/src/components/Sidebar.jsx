import React from "react";
import { useChat } from "../context/ChatContext.jsx";
import { avatarFor } from "../lib/avatar.js";
import { Icon } from "../lib/icons.jsx";

export default function Sidebar() {
  const {
    filteredChats,
    openChat,
    activeChat,
    search,
    setSearch,
    tab,
    setTab,
    setScreen,
  } = useChat();

  return (
    <aside className="space-y-3 sm:space-y-5 min-h-0 flex flex-col">
      <div className="bg-white/90 border rounded-xl sm:rounded-2xl shadow-sm flex flex-col min-h-0 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b">
          <div className="font-semibold text-sm sm:text-base">Chats</div>
          <button
            onClick={() => setScreen("new")}
            className="inline-flex items-center gap-1 rounded-lg sm:rounded-xl border px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-slate-50"
            title="Start new chat"
          >
            <Icon name="plus" className="h-4 w-4" /> <span className="hidden sm:inline">New</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 flex-1 min-h-0 flex flex-col">
          {/* Search */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Icon name="search" className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500" />
            </span>
            <input
              type="text"
              className="w-full rounded-lg sm:rounded-xl border pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2 text-sm placeholder-slate-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 rounded-lg sm:rounded-xl bg-slate-100 p-0.5 sm:p-1 text-xs sm:text-sm">
            <button
              className={`flex-1 rounded-md sm:rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 ${
                tab === "all" ? "bg-white shadow" : "hover:bg-white/50"
              }`}
              onClick={() => setTab("all")}
            >
              All
            </button>
            <button
              className={`flex-1 rounded-md sm:rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 ${
                tab === "unread" ? "bg-white shadow" : "hover:bg-white/50"
              }`}
              onClick={() => setTab("unread")}
            >
              Unread
            </button>
          </div>

          {/* Scrollable chat list */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-0.5 sm:pr-1">
            {filteredChats.map((c) => {
              const { letter, cls } = avatarFor(c.name);
              return (
                <button
                  key={c.id}
                  onClick={() => openChat(c)}
                  className={`w-full rounded-xl sm:rounded-2xl border p-2.5 sm:p-3 text-left hover:shadow-sm transition ${
                    activeChat?.id === c.id ? "border-slate-900" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xs sm:text-sm font-semibold ${cls}`}
                    >
                      {letter}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium truncate text-sm sm:text-base">
                          {c.name}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 ml-1 sm:ml-2 shrink-0">
                          {c.time}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 truncate">
                        {c.lastMessage}
                      </div>
                    </div>
                  </div>
                  {c.unread ? (
                    <div className="mt-1 sm:mt-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs text-indigo-700 border border-indigo-100">
                        <span className="inline-block h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-indigo-600" />{" "}
                        {c.unread} new
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
