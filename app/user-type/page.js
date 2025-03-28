// app/user-type/page.js
import Link from 'next/link';

export default function UserTypePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Choose Your</h1>
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">UserType</h2>
        
        <div className="space-y-4">
          <Link 
            href="/student-signup" // or your student signup route
            className="block w-full px-4 py-3 text-lg font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Student
          </Link>
          
          <Link
            href="/institute-signup" // or your institute signup route
            className="block w-full px-4 py-3 text-lg font-medium text-center text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
          >
            Institute
          </Link>
        </div>

        <p className="text-sm text-center text-gray-500 mt-8">
          By using U Right Way you agree to our terms and policy
        </p>
      </div>
    </div>
  );
}
///second
"use client";

import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import Image from "next/image";

export default function FlightWayAccountForm() {
  const { register, handleSubmit } = useForm();
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    
    console.log(Object.fromEntries(formData));
    // Handle form submission with formData
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Header Section */}
        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-semibold text-gray-600">[Parent] / Student</h2>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Necessary Personal Information</h1>
          <p className="text-gray-600">Please fill out the form below to make your U flight Way Account.</p>
        </div>

        {/* Form Sections */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Personal Photo Section - Centered */}
          <div className="mb-8 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Photo</h3>
            <div 
              onClick={handleAvatarClick}
              className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors mb-4"
            >
              {preview ? (
                <Image 
                  src={preview} 
                  alt="Profile preview" 
                  width={128} 
                  height={128}
                  className="object-cover w-full h-full"
                />
              ) : (
                <svg 
                  className="w-16 h-16 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={handleAvatarClick}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Upload Photo
            </button>
          </div>

          {/* Full Name Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Full Name:</h3>
            <input
              {...register("fullName")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Name"
              required
            />
          </div>

          {/* Email & Password Section */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email:</h3>
              <input
                {...register("email")}
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Password:</h3>
              <input
                type="password"
                {...register("password")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Password"
                required
              />
            </div>
          </div>

          {/* Phone Number Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Phone Number:</h3>
            <input
              {...register("phoneNumber")}
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Country Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Country:</h3>
            <select
              {...register("country")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
              required
            >
              <option value="">Select Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          {/* State/Province Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">State/Province:</h3>
            <select
              {...register("state")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
              required
            >
              <option value="">Select State/Province</option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="Balochistan">Balochistan</option>
              <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
            </select>
          </div>

          {/* City Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">City:</h3>
            <select
              {...register("city")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
              required
            >
              <option value=""> City</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Peshawar">Peshawar</option>
            </select>
          </div>

          {/* District Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">District:</h3>
            <select
              {...register("district")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">District</option>
              <option value="Lahore District">Lahore District</option>
              <option value="Karachi District">Karachi District</option>
              <option value="Islamabad District">Islamabad District</option>
              <option value="Peshawar District">Peshawar District</option>
            </select>
          </div>

          {/* Total Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Total:</h3>
            <input
              {...register("total")}
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Total"
              required
            />
          </div>

          {/* Proceeds Payment Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Proceeds Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}