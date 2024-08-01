"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import {motion, useInView} from "framer-motion"; 

const projectsData = [
  {
    id: 1,
    title: "VigilEye",
    description: "A biometric car security system.",
    image: "images/VigilEye.png",
    tag: ["All", "Web", "Hardware"],
    gitUrl: "https://github.com/kim15096/eec174-biometric-car",
    previewUrl: "https://drive.google.com/file/d/1YYMdshMpiNujSiicFrySloyhhwyX8RAe/view?usp=sharing",
  },
  {
    id: 2,
    title: "LED Pucks",
    description: "An interactive LED display.",
    image: "images/LEDPucks.png",
    tag: ["All", "Web", "Hardware"],
    gitUrl: "https://github.com/vickythai/EE-Emerge-2023-LEDPucks",
    previewUrl: "https://vickythai.github.io/EE-Emerge-2023-LEDPucks/team",
  },
  {
    id: 3,
    title: "AggieHub",
    description: "A platform connecting students.",
    image: "images/AggieHub.png",
    tag: ["All", "Web"],
    gitUrl: "https://devpost.com/software/aggie-hub-uvq5w6",
    previewUrl: "https://devpost.com/software/aggie-hub-uvq5w6",
  },
  {
    id: 4,
    title: "CovidSafe",
    description: "A COVID-19 safety application.",
    image: "images/CovidSafe.png",
    tag: ["All", "Web"],
    gitUrl: "https://devpost.com/software/covid-safe-km8pjt",
    previewUrl: "https://devpost.com/software/covid-safe-km8pjt",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(project => project.tag.includes(filter));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-bold text-3xl mb-8 text-center">
            My Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["All", "Hardware", "Web"].map((tag) => (
              <button
                key={tag}
                className={`rounded-full border-2 px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl text-white cursor-pointer transition-colors duration-300 ${
                  filter === tag ? 'border-primary-500' : 'border-slate-600 hover:border-white'
                }`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.li 
                key={index}
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
