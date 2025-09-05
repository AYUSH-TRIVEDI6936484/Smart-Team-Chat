import { useChat } from "../context/ChatContext";

export default function Header() {
    const { screen, setScreen } = useChat();
    return (
        <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {screen !== "chats" && (
                        <button onClick={() => setScreen("chats")} className="p-2 rounded-full hover:bg-slate-100" aria-label="Back">←</button>
                    )}
                    <div className="text-xl font-extrabold tracking-tight">Smart Team Chat</div>
                    <span className="text-xs bg-slate-900 text-white/90 rounded-full px-2 py-0.5">Prototype</span>
                </div>
                <div className="text-xs text-slate-500 hidden sm:block">AI-first collaboration • Mocked actions</div>
            </div>
        </header>
    );
}