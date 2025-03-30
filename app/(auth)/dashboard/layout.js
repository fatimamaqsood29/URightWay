// app/dashboard/layout.js
"use client";
import Navbar from '../../components/dashboard/Navbar';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Navbar />
      <div className="flex-1 md:ml-64 lg:ml-80 xl:ml-96 mt-16 md:mt-0">
        {children}
      </div>
    </div>
  );
}