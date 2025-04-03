"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PerformanceMetric from "../../components/dashboard/PerformanceMetric";
import DashboardButton from "../../components/dashboard/DashboardButton";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LooksOneIcon from "@mui/icons-material/LooksOne";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Authentication check would go here
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg p-6 mb-6 text-gray-900 shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">Hi Aliza 👋</h2>
            <p className="text-lg">Welcome to U Right Ways.</p>
          </div>
          <div className="flex">
            <Button
              variant="contained"
              color="success"
              startIcon={<CheckCircleIcon />}
              sx={{
                fontSize: "1rem",
                padding: "8px 16px",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#4CAF50",
                marginRight: "12px",
                "&:hover": {
                  backgroundColor: "#3e8e41",
                },
              }}
            >
              Verified
            </Button>

            <Button
              variant="contained"
              color="default"
              startIcon={<LooksOneIcon />}
              sx={{
                fontSize: "1rem",
                padding: "8px 16px",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#e0e0e0",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#bdbdbd",
                },
              }}
            >
              Basic
            </Button>
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

        {/* Performance Metrics
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <PerformanceMetric
            name="Truthfulness"
            value={22}
            color="bg-[#3a86ff]"
            textColor="text-white"
          />
          <PerformanceMetric
            name="Demerits Self Reported"
            value={10}
            color="bg-[#ff006e]"
            textColor="text-white"
          />
          <PerformanceMetric
            name="Test Report"
            value={60}
            color="bg-[#ffbe0b]"
            textColor="text-white"
          />
        </div> */}
        {/* Performance Metrics */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  {/* Truthfulness - Now with Green Colors */}
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
          {[
            { src: "/Diary.png", alt: "My Diary" },
            { src: "/Reports.png", alt: "Diary Reports" },
            { src: "/Test.png", alt: "Online Test" },
            { src: "/OnlineTest.png", alt: "Test Report" },
            { src: "/Daily.png", alt: "Daily Time Table" },
            { src: "/DailyActivity.png", alt: "Daily Activity" },
            { src: "/Eductional.png", alt: "Educational Network" },
            { src: "/Demerits.png", alt: "Personality Demerits" },
            { src: "/Prizes.png", alt: "Prizes" },
            { src: "/Motivational.png", alt: "Motivational Video" },
            { src: "/Upload.png", alt: "Upload Video" },
            { src: "/Chat.png", alt: "Chat Room" },
            { src: "/Complaint.png", alt: "Complaint & Suggestions" },
            { src: "/Invite.png", alt: "Invite Friends" },
          ].map((item, index) => (
            <DashboardButton key={index} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </main>
  );
}