"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import logo from "@/app/logo/URightWay.png";

export default function Dashboard() {
  const router = useRouter();

  // In a real app, you would check authentication status here
  useEffect(() => {
    // If not authenticated, redirect to login
    // const isAuthenticated = checkAuthStatus();
    // if (!isAuthenticated) router.push('/login');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Flight Ways Logo"
              width={120}
              height={40}
              className="mr-4"
            />
            <h1 className="text-xl font-semibold text-gray-800">Flight Ways</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center">
              <Image
                src="/path-to-user-avatar.jpg"
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="ml-2 text-sm font-medium">Aliza</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <div className="bg-[#1EBF89] rounded-lg p-6 mb-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Hi Aliza</h2>
          <p className="text-lg">Welcome to Flight Ways.</p>
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* My Performance Rating */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">My Performance Rating (MPR)</h3>
            <p className="text-gray-600 mb-4">Assessing My Achievements and Growth</p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Tradiableness</span>
                  <span>22%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#1EBF89] h-2.5 rounded-full" style={{width: '22%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Dementia and Ingested</span>
                  <span>10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#1EBF89] h-2.5 rounded-full" style={{width: '10%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Test Report</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#1EBF89] h-2.5 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <DashboardButton icon="📝" text="My Diary" />
              <DashboardButton icon="📊" text="Diary Reports" />
              <DashboardButton icon="🧪" text="Online Test" />
              <DashboardButton icon="📋" text="Test Report" />
              <DashboardButton icon="⏰" text="Daily Time Table" />
              <DashboardButton icon="🏃" text="Daily Activity" />
              <DashboardButton icon="🌐" text="Educational Network" />
              <DashboardButton icon="⚠️" text="Personality Demerits" />
              <DashboardButton icon="🏆" text="Prizes" />
              <DashboardButton icon="🎬" text="Motivational Video" />
              <DashboardButton icon="⬆️" text="Upload Video" />
              <DashboardButton icon="💬" text="Chat Room" />
              <DashboardButton icon="📣" text="Complaint & Suggestions" />
              <DashboardButton icon="👥" text="Invite Friends" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function DashboardButton({ icon, text }) {
  return (
    <button className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
      <span className="text-2xl mb-2">{icon}</span>
      <span className="text-sm text-center">{text}</span>
    </button>
  );
}