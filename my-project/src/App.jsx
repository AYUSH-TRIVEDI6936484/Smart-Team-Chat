import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NewChat from "./components/NewChat.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
import Footer from "./components/Footer.jsx";
import { ChatProvider, useChat } from "./context/ChatContext.jsx";

function Layout() {
  const { screen } = useChat();

  return (
    <div className="h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-white text-slate-900 grid grid-rows-[auto,1fr,auto]">
      <Header />

      <main className="h-full px-2 sm:px-4 flex justify-center items-center overflow-hidden">
        <div className="w-full rounded-2xl border bg-white/70 backdrop-blur p-3 sm:p-4 shadow-sm h-[88%] overflow-hidden">
          {/* 💻 Laptop/Desktop layout (unchanged) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-5 h-full">
            <div className="min-h-0 flex flex-col overflow-hidden">
              <Sidebar />
              <NewChat />
            </div>
            <div className="lg:col-span-2 min-h-0">
              <ChatWindow />
            </div>
          </div>

          {/* 📱 Mobile/Tablet layout */}
          <div className="lg:hidden h-full">
            {screen === "chats" && (
              <div className="h-full flex flex-col overflow-hidden">
                <Sidebar />
              </div>
            )}
            {screen === "new" && (
              <div className="h-full flex flex-col overflow-hidden">
                <NewChat />
              </div>
            )}
            {screen === "chat" && (
              <div className="h-full flex flex-col overflow-hidden">
                <ChatWindow />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ChatProvider>
      <Layout />
    </ChatProvider>
  );
}
