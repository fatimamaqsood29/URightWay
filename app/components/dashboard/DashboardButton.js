"use client";
import Image from 'next/image';

const DashboardButton = ({ src, alt }) => {
  return (
    <button className="rounded-lg overflow-hidden">
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

export default DashboardButton;
//Created a new DashboardButton component that handles the button and image rendering
//Updated the main dashboard page to import and use this component
//Simplified the mapping in the Quick Links section by passing the props directly to the DashboardButton component
//This separation makes the code more modular and easier to maintain. The DashboardButton component can now be reused elsewhere in your application if needed