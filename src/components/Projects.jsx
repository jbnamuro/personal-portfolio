import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFont from "./useFont";
import { SplitText } from "gsap/SplitText";
import Project from "./Project";

const projects = [
  { id: "p1", title: "Project 1", description: "Description of Project 1", image: "/thingy.svg" },
  { id: "p2", title: "Project 2", description: "Description of Project 2", image: "/thingy.svg" },
  { id: "p3", title: "Project 3", description: "Description of Project 3", image: "/thingy.svg" },
  { id: "p4", title: "Project 4", description: "Description of Project 4", image: "/thingy.svg" },
];

const Projects = () => {
  const font = useFont();
  const projectRef = useRef(null);
  useGSAP(() => {
    if (!font) return;
  }, [font]);

  return (
    <div className="h-fit-content w-full bg-black text-white overflow-hidden">
      <div className="px-5 py-10 flex justify-between items-center">
        <h1 className="text-4xl">Selected Works</h1>
        <div className="bg-red-500 h-2 w-5">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="boxes flex">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
