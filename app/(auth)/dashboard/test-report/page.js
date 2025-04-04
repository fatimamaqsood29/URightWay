import React from 'react';

const Dashboard = () => {
  const data = [
    { name: 'Islamic Duties', agree: 40, disagree: 60 },
    // ... rest of your data items
  ];

  return (
    <div className="dashboard">
      <h1>Task Report Dashboard</h1>
      <div className="charts-container">
        {data.map((item, index) => (
          <div key={index} className="chart-item">
            <h3 className="chart-title">{item.name}</h3>
            <svg width="100%" height="30" viewBox="0 0 200 30" className="w-full">
              <rect 
                x="0" 
                y="0" 
                width={`${item.agree}%`} 
                height="30" 
                className="fill-green-500 dark:fill-green-600"
                rx="4"
              />
              <rect 
                x={`${item.agree}%`} 
                y="0" 
                width={`${item.disagree}%`} 
                height="30" 
                className="fill-red-500 dark:fill-red-600"
                rx="4"
              />
              <text 
                x="50%" 
                y="18" 
                textAnchor="middle" 
                className="fill-white dark:fill-white/90 text-[12px]"
              >
                {item.agree}% Agree / {item.disagree}% Disagree
              </text>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;