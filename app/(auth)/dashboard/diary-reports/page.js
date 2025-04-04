'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Box, Button, Dialog, DialogContent, IconButton } from '@mui/material';

const tasks = [
  { name: 'Islamic Duties', agree: 40, disagree: 60, color: '#FFA36A' },
  { name: 'Parents', agree: 90, disagree: 10, color: '#FC80CA' },
  { name: 'Health', agree: 30, disagree: 70, color: '#F9A508' },
  { name: 'Personality', agree: 50, disagree: 50, color: '#4BAC00' },
  { name: 'Etiquettes', agree: 80, disagree: 20, color: '#03B0CF' },
  { name: 'Bearance', agree: 60, disagree: 40, color: '#FF4F4F' },
  { name: 'Dream & Mission', agree: 20, disagree: 80, color: '#6191F9' },
  { name: 'Decipline', agree: 30, disagree: 70, color: '#DB8FF9' },
  { name: 'Hardworking', agree: 60, disagree: 40, color: '#FE9554' },
  { name: 'Love Pakistan', agree: 60, disagree: 40, color: '#8F8383' },
  { name: 'Amount Spent', agree: 50, disagree: 50, color: '#0EB4C0' },
  { name: 'Cleanliness', agree: 50, disagree: 50, color: '#87B6D8' },
  { name: 'Self confidence', agree: 50, disagree: 50, color: '#B67649' },
  { name: 'In School/College', agree: 50, disagree: 50, color: '#8866D8' },
];

const getCircleClipPath = (percentage) => {
  // Calculate the Y position based on percentage (0% = bottom, 100% = top)
  const yPos = 100 - percentage;
  return `polygon(0% ${yPos}%, 100% ${yPos}%, 100% 100%, 0% 100%)`;
};

export default function DairyReportPage() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const calendarRef = useRef(null);

  const handleOpenCalendar = () => {
    setOpenCalendar(true);
  };

  const handleCloseCalendar = () => {
    setOpenCalendar(false);
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openCalendar && calendarRef.current && !calendarRef.current.contains(event.target)) {
        handleCloseCalendar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openCalendar]);

  return (
    <div className="space-y-6">
      {/* Dairy Report Section */}
      <div className="p-6 bg-white rounded-lg shadow-md relative">
        {/* Calendar Icon Top Right */}
        <div className="absolute top-4 right-4">
          <IconButton onClick={handleOpenCalendar} size="small">
            <CalendarTodayIcon fontSize="small" />
          </IconButton>
        </div>

        <h1 className="text-2xl font-bold mb-2">Dairy Report</h1>
        <p className="text-gray-600 mb-6">Comprehensive Analysis of Dairy Report</p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Dairy Report Chat</h2>

          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row gap-2 mb-8 bg-white p-4 rounded-lg relative">
            {/* Left Column - Image (always visible) */}
            <div className="flex-1">
              <div className="relative w-full h-64">
                <Image 
                  src="/Pichart.png" 
                  alt="Dairy Report Chart"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Task List */}
            <div className="flex-1 lg:pl-4 relative">
              {/* Calendar Overlay (absolute positioned on right) */}
              {openCalendar && (
                <div 
                  ref={calendarRef}
                  className="absolute right-0 top-0 z-10 bg-white p-2 rounded-lg border border-gray-200 shadow-lg w-80"
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      value={selectedDate}
                      onChange={(newValue) => setSelectedDate(newValue)}
                      views={['day', 'month']}
                      className="border-0"
                    />
                  </LocalizationProvider>
                  <div className="flex justify-end mt-2">
                    <Button 
                      size="small" 
                      onClick={handleCloseCalendar}
                      className="text-sm"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}

              <div className="mb-3">
                <h3 className="text-lg font-medium">Today</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 mr-2 rounded-sm"></span>
                  Total Task
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 mr-2 rounded-sm"></span>
                  Completed Task
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 mr-2 rounded-sm"></span>
                  Pending Task
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Task Report Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          📖 Task Report
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Increased gap between items */}
          {tasks.map((task, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center">
              <div className="relative w-24 h-24 mr-6"> {/* Increased circle size from w-16/h-16 to w-24/h-24 */}
                {/* Background circle */}
                <svg width="96" height="96" viewBox="0 0 36 36" className="absolute">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="#ddd" // Background color
                  />
                </svg>
                
                {/* Filled portion (using clip-path) */}
                <div 
                  className="absolute w-full h-full"
                  style={{
                    clipPath: getCircleClipPath(task.agree),
                  }}
                >
                  <svg width="96" height="96" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill={task.color}
                    />
                  </svg>
                </div>
                
                {/* Percentage text - increased font size */}
                <div className="absolute w-full h-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-800"> {/* Changed from text-xs to text-sm */}
                    {task.agree}%
                  </span>
                </div>
              </div>
              
              <div>
                <h2 className="font-semibold text-lg">{task.name}</h2>
                <p className="text-gray-600 text-sm">• Agree: {task.agree}%</p>
                <p className="text-gray-600 text-sm">• Disagree: {task.disagree}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}