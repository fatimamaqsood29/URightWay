// app/dashboard/demerits-test/page.js
import React from 'react';

const DemeritsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Demerits Reports</h1>

      {/* Student Demerits Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Student Demerits</h2>
        
     
        {/* Progress Bar */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-2 relative">
          <div 
            className="h-full bg-[#F9A508] absolute" 
            style={{ width: '60%' }}
          ></div>
        </div>

        

        {/* Bottom Percentage Markers */}
        <div className="flex justify-between text-sm text-gray-500">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((percent) => (
            <span key={`student-bottom-${percent}`}>{percent}%</span>
          ))}
        </div>
        {/* Success Indicator */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-[#F9A508]"></div>
          <span className="text-[#F9A508] font-medium">60% Success</span>
        </div>

        {/* Remaining Indicator */}
        <div className="flex items-center gap-2 mt-2">
          <div className="w-3 h-3 border border-gray-400"></div>
          <span className="text-gray-600">40% Remaining</span>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Parent Demerits Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Parent Demerits</h2>
        
       

        {/* Progress Bar */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-2 relative">
          <div 
            className="h-full bg-[#377D00] absolute" 
            style={{ width: '60%' }}
          ></div>
        </div>

        {/* Bottom Percentage Markers */}
        <div className="flex justify-between text-sm text-gray-500">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((percent) => (
            <span key={`parent-bottom-${percent}`}>{percent}%</span>
          ))}
        </div>

        {/* Success Indicator */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-[#377D00]"></div>
          <span className="text-[#377D00] font-medium">60% Success</span>
        </div>

        {/* Remaining Indicator */}
        <div className="flex items-center gap-2 mt-2">
          <div className="w-3 h-3 border border-gray-400"></div>
          <span className="text-gray-600">20% Remaining</span>
        </div>
      </div>


        </div>
  );
};

export default DemeritsPage;