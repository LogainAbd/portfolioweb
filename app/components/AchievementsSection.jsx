'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
    () => import('react-animated-numbers'),
    { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "30",
    postfix: "+",
    prefix: "",
  },
  {
    metric: "Users",
    value: "50",
    postfix: "~",
    prefix: "",
  },
  {
    metric: "Awards",
    value: "5",
    postfix: "",
    prefix: "",
  },
  {
    metric: "Years",
    value: "5",
    postfix: "",
    prefix: "",
  },
];

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4'>
      <div className='border-[#33353F] border rounded-md py-8 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-around gap-8'>
        {achievementsList.map((achievement, index) => (
          <div key={index} className='flex flex-col items-center justify-center'>
            <h2 className='text-white text-3xl sm:text-4xl font-bold flex flex-row'>
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value, 10)}
                locale='en-US'
                className='text-white text-4xl font-bold'
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 280, friction: 90 }
                ]}
              />
              {achievement.postfix}
            </h2>
            <p className='text-[#ADB7BE] text-sm sm:text-base'>{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
