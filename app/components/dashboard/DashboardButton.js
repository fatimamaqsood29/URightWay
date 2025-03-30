// components/dashboard/DashboardButton.js
"use client";

export default function DashboardButton({ icon, text, className }) {
  return (
    <button className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors h-full ${className}`}>
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-xs text-center font-medium">{text}</span>
    </button>
  );
}