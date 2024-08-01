"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <section className="flex flex-col sm:flex-row items-center justify-between">
        <motion.div
         initial = {{opacity: 0, scale: 0.5}} 
         animate={{opacity: 1, scale: 1}} 
         transition={{duration: 0.5}} 
        className="sm:w-7/12 text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-5xl sm:text-6xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Logain Abdelhafiz',
                1000,
                'Computer Engineer',
                1000,
                'AI Engineer',
                1000,
                'Hardware Engineer',
                1000,
                'Software Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Mobile Developer',
                1000,
                'Web Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block text-4xl sm:text-5xl lg:text-6xl"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my portfolio! Scroll down to discover more about my journey, projects, and how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
            <a 
              href="https://www.linkedin.com/in/logain-abdelhafiz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-auto rounded-full mr-4 mb-3 sm:mb-0 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-center"
            >
              Hire Me
            </a>
            <a 
              href="https://drive.google.com/file/d/1s0lYo1uP8tBPM2ShGKWXOdMU5szsHz-1/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white text-center"
            >
              <span className="block bg-black border-2 border-transparent rounded-full px-5 py-2 hover:border-gradient-to-br from-blue-500 via-primary-500 to-secondary-500">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
         initial = {{opacity: 0, scale: 0.5}} 
         animate={{opacity: 1, scale: 1}} 
         transition={{duration: 0.5}} 
         className="sm:w-5/12 flex justify-center mt-6 sm:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center mt-4 sm:mt-8 lg:mt-12">
            <Image 
              src="/images/hijabi.png"
              alt="hijabi"
              className="absolute w-[100%] h-[100%] lg:w-[95%] lg:h-[95%]"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default HeroSection;
