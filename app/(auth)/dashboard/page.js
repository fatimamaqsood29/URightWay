"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardButton from "../../components/dashboard/DashboardButton";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Authentication check would go here
  }, []);

  const quickLinks = [
    { src: "/Diary.png", alt: "My Diary", path: "/dashboard/diary" },
    { src: "/Reports.png", alt: "Diary Reports", path: "/dashboard/diary-reports" },
    { src: "/Test.png", alt: "Online Test", path: "/dashboard/online-test" },
    { src: "/OnlineTest.png", alt: "Test Report", path: "/dashboard/test-report" },
    { src: "/Daily.png", alt: "Daily Time Table", path: "/dashboard/time-table" },
    { src: "/DailyActivity.png", alt: "Daily Activity", path: "/dashboard/daily-activity" },
    { src: "/Eductional.png", alt: "Educational Network", path: "/dashboard/educational-network" },
    { src: "/Demerits.png", alt: "Personality Demerits", path: "/dashboard/demerits" },
    { src: "/Prizes.png", alt: "Prizes", path: "/dashboard/prizes" },
    { src: "/Motivational.png", alt: "Motivational Video", path: "/dashboard/motivational-videos" },
    { src: "/Upload.png", alt: "Upload Video", path: "/dashboard/upload-video" },
    { src: "/Chat.png", alt: "Chat Room", path: "/dashboard/chat" },
    { src: "/Complaint.png", alt: "Complaint & Suggestions", path: "/dashboard/complaints" },
    { src: "/Invite.png", alt: "Invite Friends", path: "/dashboard/invite" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg p-6 mb-6 text-gray-900 shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">Hi Aliza 👋</h2>
            <p className="text-lg">Welcome to U Right Ways.</p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-4">
              {/* Verified Button - Larger and more rounded */}
              <Button
                variant="contained"
                sx={{
                  padding: "12px 20px",
                  borderRadius: "16px", // Increased from 12px
                  textTransform: "none",
                  backgroundColor: "#82DB8A",
                  color: "#000",
                  border: "1px solid #A7F3D0",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px", // Increased from 8px
                  minWidth: "140px", // Increased from 120px
                  height: "70px", // Increased from 60px
                  "&:hover": {
                    backgroundColor: "#6BCB77",
                  },
                }}
              >
                <div className="bg-white rounded-full p-1.5 flex items-center justify-center w-9 h-9"> {/* Increased size */}
                  <Image 
                    src="/Rectangle.png" 
                    alt="Verified" 
                    width={18} // Slightly larger
                    height={18}
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Status:</div> {/* Slightly larger */}
                  <div className="text-base font-semibold">Verified</div> {/* Slightly larger */}
                </div>
              </Button>

              {/* Basic Button - Larger and more rounded */}
              <Button
                variant="contained"
                sx={{
                  padding: "12px 20px",
                  borderRadius: "16px", // Increased from 12px
                  textTransform: "none",
                  backgroundColor: "#7B7B7B",
                  color: "#FFF",
                  border: "1px solid #9E9E9E",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px", // Increased from 8px
                  minWidth: "140px", // Increased from 120px
                  height: "70px", // Increased from 60px
                  "&:hover": {
                    backgroundColor: "#6B6B6B",
                  },
                }}
              >
                <div className="bg-white rounded-full p-1.5 flex items-center justify-center w-9 h-9"> {/* Increased size */}
                  <Image 
                    src="/leaderboard-icon.png" 
                    alt="Basic" 
                    width={18} // Slightly larger
                    height={18}
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Level:</div> {/* Slightly larger */}
                  <div className="text-base font-semibold">Basic</div> {/* Slightly larger */}
                </div>
              </Button>
            </div>
            {/* Profile Image */}
            <div className="ml-4">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Performance Rating */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          My Performance Rating (MPR)
        </h3>
        <div className="my-4 w-full">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
              <span>Overall Performance</span>
              <span>72%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-5">
              <div
                className="h-5 rounded-full bg-[#ebad3b]"
                style={{ width: "62%" }}
              ></div>
            </div>
          </div>
        </div>
        <p className="text-gray-600">Assessing My Achievements and Growth</p>
        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Truthfulness */}
          <div className="bg-green-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
              <span>Truthfulness</span>
              <span>22%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-5">
              <div
                className="h-5 rounded-full bg-green-500"
                style={{ width: "22%" }}
              ></div>
            </div>
          </div>

          {/* Demerits Self Reported */}
          <div className="bg-red-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
              <span>Demerits Self Reported</span>
              <span>10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-5">
              <div
                className="h-5 rounded-full bg-[#ff006e]"
                style={{ width: "10%" }}
              ></div>
            </div>
          </div>

          {/* Test Report */}
          <div className="bg-amber-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
              <span>Test Report</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-5">
              <div
                className="h-5 rounded-full bg-[#ffbe0b]"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-2 gap-4">
          {quickLinks.map((item, index) => (
            <DashboardButton 
              key={index} 
              src={item.src} 
              alt={item.alt} 
              path={item.path}
            />
          ))}
        </div>
      </div>
    </main>
  );
}