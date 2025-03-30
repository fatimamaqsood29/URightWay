// components/dashboard/NavItem.js
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItem({ icon, text, href, badge = 0, mobile = false }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link 
      href={href} 
      className={`flex items-center ${mobile ? 'p-3 text-lg' : 'p-2'} rounded-lg transition-colors ${active ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
    >
      <div className="relative">
        <div className={`${mobile ? 'h-8 w-8' : 'h-6 w-6'} ${active ? 'text-[#1EBF89]' : 'text-gray-700'}`}>
          {icon}
        </div>
        {badge > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {badge}
          </div>
        )}
      </div>
      <span className={`${mobile ? 'ml-4' : 'ml-3'} font-medium ${active ? 'text-[#1EBF89]' : 'text-gray-700'}`}>
        {text}
      </span>
    </Link>
  );
}