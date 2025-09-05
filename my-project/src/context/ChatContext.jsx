import React, { createContext, useContext, useMemo, useState } from "react";
import { DUMMY_CHATS as INITIAL_CHATS, DUMMY_THREADS as INITIAL_THREADS } from "../data/dummy.js";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [screen, setScreen] = useState("chats");          
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");                   
  const [activeChat, setActiveChat] = useState(null);
  const [chats, setChats] = useState(INITIAL_CHATS);
  const [threads, setThreads] = useState(INITIAL_THREADS);

  // Chat window state
  const [newMsg, setNewMsg] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [smartReply, setSmartReply] = useState(null);

  // New chat state
  const [newChatName, setNewChatName] = useState("");
  const [icebreaker, setIcebreaker] = useState(null);

  const filteredChats = useMemo(() => {
    let list = chats;
    if (tab === "unread") list = list.filter((c) => c.unread > 0);
    if (!search) return list;
    const q = search.toLowerCase();
    return list.filter((c) => c.name.toLowerCase().includes(q));
  }, [chats, tab, search]);

  const openChat = (c) => {
    setActiveChat(c);
    setScreen("chat");
    setShowSummary(false);
    setSmartReply(null);
  };

  const sendMessage = () => {
    if (!activeChat || !newMsg.trim()) return;
    const t = threads[activeChat.id] || [];
    const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    const updated = [...t, { id, from: "Me", text: newMsg, at: new Date().toLocaleTimeString() }];
    setThreads({ ...threads, [activeChat.id]: updated });
    setNewMsg("");
    // update preview row
    setChats((chs) =>
      chs.map((ch) => (ch.id === activeChat.id ? { ...ch, lastMessage: newMsg, time: "now", unread: 0 } : ch))
    );
  };

  const summarizeThread = () => setShowSummary(true);
  const suggestReply = () =>
    setSmartReply("Quick summary sounds great! Maybe ask if anyone needs help before EOD?");

  const startNewChat = () => {
    if (!newChatName.trim()) return;
    const id = `new-${Date.now()}`;
    const newChat = { id, name: newChatName.trim(), lastMessage: "Say hi 👋", time: "now", unread: 0 };
    setChats([newChat, ...chats]);
    setThreads({ ...threads, [id]: [] });
    setNewChatName("");
    openChat(newChat);
  };

  const generateIcebreaker = () => {
    setIcebreaker(
      `Hey ${newChatName || "there"}! 👋 I’m excited to collaborate. What’s the one thing we can ship this week to make the biggest impact?`
    );
  };

  const value = {
    // state
    screen, setScreen,
    search, setSearch,
    tab, setTab,
    activeChat, setActiveChat,
    chats, setChats,
    threads, setThreads,
    newMsg, setNewMsg,
    showSummary, setShowSummary,
    smartReply, setSmartReply,
    newChatName, setNewChatName,
    icebreaker, setIcebreaker,

    // derived
    filteredChats,

    // actions
    openChat,
    sendMessage,
    summarizeThread,
    suggestReply,
    startNewChat,
    generateIcebreaker,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
