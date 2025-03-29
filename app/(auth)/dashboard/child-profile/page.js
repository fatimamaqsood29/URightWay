"use client";

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { useRef, useState } from 'react';
import logo from "@/app/logo/URightWay.png";

export default function AddChildProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleAddClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      {/* Simple logo at the top */}
      <div className="mb-8 mt-4">
        <Image 
          src={logo} 
          alt="URightWay Logo" 
          width={120} 
          height={48} 
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Add Your Child's Profile</h1>
          <p className="text-gray-600">
            Easily add your child's details to personalize their experience. Enter their name, age, and preferences to get started.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-8 mb-8">
          {/* Existing child box */}
          {selectedImage && (
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 relative border-2 border-gray-300 rounded-lg overflow-hidden mb-2">
                <Image
                  src={selectedImage}
                  alt="Child profile"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-gray-700">Aliza</span>
            </div>
          )}

          {/* Add new child box */}
          <div className="flex flex-col items-center cursor-pointer" onClick={handleAddClick}>
            <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-2 hover:bg-gray-100 transition">
              <Plus size={32} className="text-gray-400" />
            </div>
            <span className="text-lg font-semibold text-gray-700">Add Student</span>
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
}