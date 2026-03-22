import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFont from "./useFont";
import { SplitText } from "gsap/SplitText";
import Project from "./Project";

const Projects = () => {
  const font = useFont();
  const projectRef = useRef(null);
  useGSAP(() => {
    if (!font) return;
  }, [font]);

  return (
    <div className="h-fit-content w-full bg-black text-white overflow-hidden">
      <div className="boxes flex">
        <Project title="Project 1" description="Description of Project 1" image="/thingy.svg"/>
        <Project title="Project 2" description="Description of Project 2" image="/thingy.svg"/>
        <Project title="Project 3" description="Description of Project 3" image="/thingy.svg"/>
      </div>
    </div>
  );
};

export default Projects;
