// components/dashboard/DashboardButton.js
"use client";
import Image from 'next/image';

export default function DashboardButton({ icon, text, className }) {
  const isEmoji = !icon.startsWith('/');
  
  return (
    <button className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors h-full ${className}`}>
      {isEmoji ? (
        <span className="text-2xl mb-1">{icon}</span>
      ) : (
        <div className="w-10 h-10 mb-1 relative">
          <Image
            src={icon}
            alt={text}
            fill
            className="object-contain"
          />
        </div>
      )}
      <span className="text-xs text-center font-medium">{text}</span>
    </button>
  );
}