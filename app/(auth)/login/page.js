"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/app/logo/URightWay.png";

export default function Login() {
  const [activeTab, setActiveTab] = useState('parent');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Login | U Right Way</title>
        <meta name="description" content="Login to U Right Way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1629470937900-f9ef0f2a8086?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Login Form Section */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            {/* Logo positioned top left */}
            <div className="absolute top-4 left-4 md:left-8">
              <Image
                src={logo}
                alt="URightWay Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-col items-center mb-6">
              <div className="flex space-x-4 mb-8 mt-16">
                <button
                  onClick={() => setActiveTab('parent')}
                  className={`px-8 py-3 rounded-md text-base font-medium flex items-center transition-colors ${
                    activeTab === 'parent' 
                      ? 'bg-[#1EBF89] text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Parent
                </button>
                <button
                  onClick={() => setActiveTab('student')}
                  className={`px-8 py-3 rounded-md text-base font-medium flex items-center transition-colors ${
                    activeTab === 'student' 
                      ? 'bg-[#1EBF89] text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Student
                </button>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center mb-2">Welcome to U Right Way</h1>
            <p className="text-gray-600 text-center mb-8">Login to continue the app.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EBF89] transition-colors"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="***********"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1EBF89] pr-10 transition-colors"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1EBF89] text-white py-3 px-4 rounded-md hover:bg-[#18a678] focus:outline-none focus:ring-2 focus:ring-[#1EBF89] focus:ring-offset-2 font-medium transition-colors"
                >
                  Log in
                </button>
              </div>

              <div className="flex justify-between items-center text-sm pt-4">
                <Link 
                  href="/forgot-email" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Forgot Email
                </Link>
                <span className="text-gray-400 mx-2">|</span>
                <Link 
                  href="/forget-pin" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Forgot Password
                </Link>
              </div>

              <div className="pt-6">
                <p className="text-xs text-gray-500 text-center">
                  By using U Right Way you agree to our terms and policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}