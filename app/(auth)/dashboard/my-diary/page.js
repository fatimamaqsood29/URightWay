// pages/my-diary.js
import React from "react";
import {
  FiChevronDown,
  FiCheckCircle,
  FiClock,
  FiCheck,
  FiSearch,
} from "react-icons/fi";
import {
  FaTasks,
  FaClock as FaClockSolid,
  FaCheckCircle as FaCheckCircleSolid,
} from "react-icons/fa";

const categories = [
  {
    label: "Islamic Duties",
    tag: "Reading",
    tasks: ["Program", "Facilitation", "Dracul Pelt", "Reminder", "Benet on Hadd"],
    bgColor: "#FFA36A",
    iconBg: "#FFF7C2"
  },
  {
    label: "Parents Obedience",
    tag: "Reading",
    tasks: ["Father", "Mother", "Elder Sibling"],
    bgColor: "#FC80CA",
    iconBg: "#FC37AC"
  },
  {
    label: "Health",
    tag: "Reading",
    tasks: ["Exercise", "Sports", "Unthoughts Things", "Teeth Brush", "Drink Water", 
           "Stepping", "Cool Water", "Sugar Use", "Less Eating", "Balance Diet", 
           "Fast Foods", "Hand Wash", "Slow Eating", "Natural Environment", "Decrease"],
    bgColor: "#F9A508",
    iconBg: "#E39608"
  },
  {
    label: "Personality Groom",
    tag: "Reading",
    tasks: ["Dressing", "Hairs", "Stoes", "Gate", "Speaking"],
    bgColor: "#4BAC00",
    iconBg: "#377D00"
  },
 
  {
    label: "Etiquettes",
    tag: "Reading",
    tasks: ["Lic", "Truthfulness", "Respect", "Help", "Quoret", "Abuse", 
           "Theft", "Backbiting", "Jealous", "Promise", "Remove Hardie", "Shout"],
    bgColor: "#03B0CF",
    iconBg: "#009BB7"
  },
  {
    label: "Bearance",
    tag: "Complete",
    tasks: ["Parents Debate", "Anyone Debate", "Forgive Mistake"],
    bgColor: "#FF4F4F",
    iconBg: "#FC2B2B"
  },
  {
    label: "My Dream & Mission",
    tag: "Complete",
    tasks: ["My Dream", "To Achieve Goal"],
    bgColor: "#6191F9",
    iconBg: "#3271FB"
  },
  {
    label: "Discipline & Time Management",
    tag: "Complete",
    tasks: ["Discipline Chart", "Self Study", "Mobile Use", "Waste Time", "Tomorrow"],
    bgColor: "#DB8FF9",
    iconBg: "#E39BFF"
  },
  {
    label: "Hardworking",
    tag: "Reading",
    tasks: ["Hardwork"],
    bgColor: "#FE9554",
    iconBg: "#FF7118"
  },
  {
    label: "Love With Pakistan",
    tag: "Reading",
    tasks: ["Responsible Citizen", "Emotional Attachment", "Respect of Law"],
    bgColor: "#8F8383",
    iconBg: "#737373"
  },
  {
    label: "Amount Spent",
    tag: "Complete",
    tasks: ["Packet Money", "Barrow", "Wasteful spending", "Save Money"],
    bgColor: "#0EB4C0",
    iconBg: "#48BFC8"
  },
  {
    label: "Cleanliness",
    tag: "Reading",
    tasks: ["Take Bath", "Dress", "Name", "Class Room", "Street", "Pakistan"],
    bgColor: "#87B6D8",
    iconBg: "#74B0DC"
  },
  {
    label: "Self Confidence",
    tag: "Complete",
    tasks: ["Positive Thinking", "Self Talk", "Own Quantities"],
    bgColor: "#B67649",
    iconBg: "#AB4B06"
  },
 
 
  {
    label: "In School/College",
    tag: "Complete",
    tasks: ["Attendees", "Lots/in Time", "Home Work", "Teacher Intention", 
           "Subject Teacher Leave", "Subject Learning", "Insulated By Teacher"],
    bgColor: "#8866D8",
    iconBg: "#8552FC"
  },
];

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const MyDiary = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold mb-2">Islamic Duties</h1>
          <p className="text-gray-600">
            Stay True, Stay Honest. Complete Your Tasks with Integrity.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="flex justify-center items-center mb-1">
              <FaTasks className="text-black mr-2" size={24} />
              <p className="text-3xl font-bold text-black">24</p>
            </div>
            <p className="text-gray-600">Total Tasks</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="flex justify-center items-center mb-1">
              <FaClockSolid className="text-yellow-500 mr-2" size={24} />
              <p className="text-3xl font-bold text-black">12</p>
            </div>
            <p className="text-gray-600">Pending Tasks</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="flex justify-center items-center mb-1">
              <FaCheckCircleSolid className="text-green-500 mr-2" size={24} />
              <p className="text-3xl font-bold text-black">12</p>
            </div>
            <p className="text-gray-600">Completed Tasks</p>
          </div>
        </div>

        {/* Daily Task Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Daily Tasks</h2>
            <FiChevronDown className="text-gray-500 text-lg" />
          </div>
          <div className="flex space-x-6 text-sm">
            <button className="flex items-center text-gray-700">
              <FiCheckCircle className="mr-1.5" size={16} />
              All
            </button>
            <button className="flex items-center text-gray-700">
              <FiClock className="mr-1.5" size={16} />
              Pending
            </button>
            <button className="flex items-center text-gray-700">
              <FiCheck className="mr-1.5" size={16} />
              Completed
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="relative">
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search Your Tasks"
              className="w-full py-2 pl-9 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Task Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 flex flex-col"
              style={{ 
                backgroundColor: category.bgColor, 
                color: 'white',
                height: '300px'
              }}
            >
              <div className="flex items-center mb-4">
                <span 
                  className="text-xs font-medium px-2.5 py-0.5 rounded"
                  style={{ backgroundColor: category.iconBg, color: 'black' }}
                >
                  {category.tag}
                </span>
                <h3 className="ml-2 font-bold text-lg">
                  {category.label}
                </h3>
              </div>
              
              <div className="space-y-3 overflow-y-auto flex-grow">
                {chunkArray(category.tasks, 5).map((taskGroup, groupIndex) => (
                  <div key={groupIndex} className="flex flex-wrap gap-2">
                    {taskGroup.map((task, taskIndex) => (
                      <span 
                        key={taskIndex} 
                        className="text-sm"
                      >
                        {task}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default MyDiary;