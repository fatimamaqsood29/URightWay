// components/dashboard/PerformanceMetric.js
"use client";

export default function PerformanceMetric({ name, value, color }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
        <span>{name}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div 
          className={`h-2.5 rounded-full ${color}`} 
          style={{width: `${value}%`}}
        ></div>
      </div>
      <div className="text-xs text-gray-500">
        {value < 30 ? 'Needs Improvement' : 
         value < 60 ? 'Average' : 
         value < 80 ? 'Good' : 'Excellent'}
      </div>
    </div>
  );
}