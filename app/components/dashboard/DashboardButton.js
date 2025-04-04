// components/dashboard/DashboardButton.js
"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const DashboardButton = ({ src, alt, path }) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <button 
      className="rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
      onClick={handleClick}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={250} 
        height={120} 
        className="w-full object-cover rounded-lg" 
      />
    </button>
  );
};
///Users/apple/Documents/SchoolProject/ui-flight-way-account/app/components/dashboard/DashboardButton.js
export default DashboardButton;