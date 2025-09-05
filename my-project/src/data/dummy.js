export const DUMMY_CHATS = [
{ id: "team-1", name: "Design Squad", lastMessage: "Pushed the updated Figma frames.", time: "10:12 AM", unread: 2 },
{ id: "team-2", name: "Backend Guild", lastMessage: "API v2 deployed to staging.", time: "Yesterday", unread: 0 },
{ id: "team-3", name: "All-Hands Planning", lastMessage: "Share questions for Q&A by EOD.", time: "Mon", unread: 4 },
{ id: "team-4", name: "Mobile Tigers", lastMessage: "RN 0.76 migration notes updated.", time: "Sun", unread: 0 },
];


export const DUMMY_THREADS = {
"team-1": [
{ id: "m1", from: "Me", text: "Morning team! Any blockers?", at: "10:01 AM" },
{ id: "m2", from: "Nina", text: "All good—uploaded new hero options.", at: "10:06 AM" },
{ id: "m3", from: "Ari", text: "Reviewing now.", at: "10:10 AM" },
],
"team-2": [
{ id: "m1", from: "Sam", text: "gRPC gateway is green.", at: "4:15 PM" },
{ id: "m2", from: "Me", text: "Nice! Can we expose healthcheck?", at: "4:18 PM" },
],
"team-3": [
{ id: "m1", from: "Ops", text: "Reminder: All-Hands Friday 4 PM.", at: "Mon 11:00 AM" },
],
"team-4": [
{ id: "m1", from: "Priya", text: "Android build succeeds on CI now.", at: "8:40 AM" },
],
};