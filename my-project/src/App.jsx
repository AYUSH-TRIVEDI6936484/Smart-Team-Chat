import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NewChat from "./components/NewChat.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
import Footer from "./components/Footer.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";

export default function App() {
  return (
    <ChatProvider>
      {/* Full viewport; no page scroll */}
      <div className="h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-white text-slate-900 grid grid-rows-[auto,1fr,auto]">
        <Header />

        {/* Main row */}
        <main className="h-full px-4 flex justify-center items-center overflow-hidden">
          {/* Workspace now stretches full width */}
          <div className="w-full rounded-2xl border bg-white/70 backdrop-blur p-4 shadow-sm grid lg:grid-cols-3 gap-5 h-[88%] overflow-hidden">
            <div className="min-h-0 flex flex-col overflow-hidden">
              <Sidebar />
              <NewChat />
            </div>
            <div className="lg:col-span-2 min-h-0">
              <ChatWindow />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ChatProvider>
  );
}
