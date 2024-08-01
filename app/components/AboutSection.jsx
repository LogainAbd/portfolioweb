"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>C++</li>
        <li>C</li>
        <li>Python</li>
        <li>Assembly Language</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Altium</li>
        <li>Intel Quartus - FPGA</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>University of California, Davis</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>Software Engineer Fellowship in Headstarter</li>
        <li>TA in summer camp</li>
      </ul>
    )
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/Desk.png" width={500} height={500} alt="Desk" />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I'm a dedicated computer engineer who loves diving into both hardware and software projects. As a quick learner, 
            I'm always looking to expand my knowledge and skill set in this ever-evolving field. 
            I thrive in leadership roles and enjoy being a team player, always eager to collaborate with others to create innovative and impactful projects. 
            My enthusiasm for technology drives me to push boundaries and achieve exceptional results in every endeavor.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              {" "}Education{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
              {" "}Experience{" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;