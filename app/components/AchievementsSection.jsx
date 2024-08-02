'use client';
import React, { useEffect, useState } from 'react';

const achievementsList = [
  {
    metric: "Projects",
    value: 30,
    postfix: "+",
    prefix: "",
  },
  {
    metric: "Users",
    value: 50,
    postfix: "~",
    prefix: "",
  },
  {
    metric: "Awards",
    value: 5,
    postfix: "",
    prefix: "",
  },
  {
    metric: "Years",
    value: 5,
    postfix: "",
    prefix: "",
  },
];

const Achievement = ({ value, prefix, postfix, metric }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className='flex flex-col items-center justify-center w-full sm:w-auto'>
      <h2 className='text-white text-3xl sm:text-4xl font-bold flex flex-row'>
        {prefix}
        <span>{displayValue}</span>
        {postfix}
      </h2>
      <p className='text-[#ADB7BE] text-sm sm:text-base'>{metric}</p>
    </div>
  );
};

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4'>
      <div className='border-[#33353F] border rounded-md py-8 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-around gap-8'>
        {achievementsList.map((achievement, index) => (
          <Achievement
            key={index}
            value={achievement.value}
            prefix={achievement.prefix}
            postfix={achievement.postfix}
            metric={achievement.metric}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
