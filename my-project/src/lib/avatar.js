const palette = [
"bg-blue-100 text-blue-700",
"bg-emerald-100 text-emerald-700",
"bg-rose-100 text-rose-700",
"bg-amber-100 text-amber-700",
"bg-indigo-100 text-indigo-700",
"bg-fuchsia-100 text-fuchsia-700",
"bg-cyan-100 text-cyan-700",
];


export function avatarFor(name) {
const letter = (name?.[0] || "?").toUpperCase();
const idx = (name?.charCodeAt(0) || 0) % palette.length;
return { letter, cls: palette[idx] };
}