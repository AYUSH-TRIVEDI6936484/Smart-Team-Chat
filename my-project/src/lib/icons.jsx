export const ICONS = {
    search: "M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z",
    plus: "M12 5v14M5 12h14",
    sparkles: "M12 3l1.8 3.6L18 9l-4.2.9L12 14l-1.8-4.1L6 9l4.2-1.4L12 3zm6 8l.9 1.8L21 15l-2.1.4L18 18l-.9-2.6L15 15l2.1-1.2L18 11zM6 13l.7 1.4L8 15l-1.3.3L6 17l-.7-1.7L4 15l1.3-.6L6 13z",
    robot: "M12 2v4M8 6h8a3 3 0 0 1 3 3v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a3 3 0 0 1 3-3zm-2 6h.01M16 8h.01M8 14h8",
    send: "M22 2L11 13M22 2l-7 20-4-9-9-4z",
    paperclip: "M21.44 11.05l-9.19 9.19a5 5 0 1 1-7.07-7.07l9.19-9.19a3.5 3.5 0 1 1 4.95 4.95l-9.2 9.2a2 2 0 1 1-2.83-2.83l8.13-8.13",
    smile: "M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01",
};


export function Icon({ name, className = "h-4 w-4" }) {
    const d = ICONS[name];
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d={d} />
        </svg>
    );
}