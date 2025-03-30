// app/dashboard/page.js
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PerformanceMetric from '../../components/dashboard/PerformanceMetric';
import DashboardButton from '../../components/dashboard/DashboardButton';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Authentication check would go here
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div className="bg-[#1EBF89] rounded-lg p-6 mb-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Hi Aliza</h2>
        <p className="text-lg">Welcome to Flight Ways.</p>
      </div>

      {/* Performance Rating */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">My Performance Rating (MPR)</h3>
          
          {/* Main Performance Metric */}
          <div className="my-4 w-full">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
                <span>Overall Performance</span>
                <span>82%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5">
                <div 
                  className="h-5 rounded-full bg-[#ebad3b]" 
                  style={{width: '82%'}}
                ></div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">Assessing My Achievements and Growth</p>
        </div>
        
        {/* Row of three metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PerformanceMetric 
            name="Tradhickness" 
            value={32} 
            color="bg-[#038c5e]"
          />
          <PerformanceMetric 
            name="Dementia Self Repeched" 
            value={10} 
            color="bg-[#f00c08]"
          />
          <PerformanceMetric 
            name="Test Report" 
            value={80} 
            color="bg-[#ebad3b]"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Quick Links</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* My Diary */}
          <DashboardButton icon="📖" text="My Dairy" className="bg-orange-500 hover:bg-orange-600 text-white" />
          <DashboardButton icon="📊" text="Dairy Reports" className="bg-orange-600 hover:bg-orange-700 text-white" />

          {/* Online Test */}
          <DashboardButton icon="🧪" text="Online Test" className="bg-blue-500 hover:bg-blue-600 text-white" />
          <DashboardButton icon="📋" text="Test Report" className="bg-purple-500 hover:bg-purple-600 text-white" />

          {/* Daily Time Table & Activity */}
          <DashboardButton icon="📅" text="Daily Time Table" className="bg-green-500 hover:bg-green-600 text-white" />
          <DashboardButton icon="📈" text="Daily Activity" className="bg-indigo-700 hover:bg-indigo-800 text-white" />

          {/* Educational Network & Personality Demerits */}
          <DashboardButton icon="🌐" text="Educational Network" className="bg-purple-800 hover:bg-purple-900 text-white" />
          <DashboardButton icon="⚠️" text="Personality Demerits" className="bg-pink-500 hover:bg-pink-600 text-white" />

          {/* Prizes & Motivational Video */}
          <DashboardButton icon="🏆" text="Prizes" className="bg-green-600 hover:bg-green-700 text-white" />
          <DashboardButton icon="🎬" text="Motivational Video" className="bg-yellow-900 hover:bg-yellow-800 text-white" />

          {/* Upload Video & Chat Room */}
          <DashboardButton icon="⬆️" text="Upload Video" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800" />
          <DashboardButton icon="💬" text="Chat Room" className="bg-teal-500 hover:bg-teal-600 text-white" />

          {/* Complaint & Invite Friends */}
          <DashboardButton icon="📩" text="Complaint & Suggestions" className="bg-red-700 hover:bg-red-800 text-white" />
          <DashboardButton icon="👥" text="Invite Friends" className="bg-blue-300 hover:bg-blue-400 text-gray-800" />
        </div>
      </div>
    </main>
  );
}