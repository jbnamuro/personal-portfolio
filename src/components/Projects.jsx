import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  useGSAP(() => {
    gsap.to(".pin-here", {
      scrollTrigger: {
        trigger: ".pin-here",
        pin: true,
        start: "top top",
        endTrigger: ".project-wrapper",
        end: "bottom bottom",
        // markers: true,
      },
    });
  });
  return (
    <div className="h-500 project-wrapper flex justify-center relative z-10 bg-black w-full">
      <div className="h-full absolute flex flex-col justify-around items-center">
        <div className="w-[100px] h-[100px] bg-white"></div>
        <div className="w-[100px] h-[100px] bg-red-500"></div>
        <div className="w-[100px] h-[100px] bg-blue-500"></div>
      </div>
      <div className="h-screen w-full">
        <div className="pin-here h-full flex flex-col justify-between">
          <div className="  px-5 pt-5">
            <h1 className="text-3xl">Projects</h1>
            <div className="flex justify-between">
              <p>Tech meets design — scroll through my digital experiments.</p>
              <p className="opacity-50 hidden">(scroll)</p>
            </div>
            <div className="w-full h-[1px] mt-2 opacity-50 bg-white"></div>
          </div>
          <div className="pb-5 w-full px-5">
            <div className="flex justify-between">
              <p>View More</p>
              <p className="opacity-50">(click →)</p>
            </div>
            <div className="w-full bg-white h-[1px] my-2"></div>
            <div className="flex justify-between">
              <h2 className="text-3xl">Wet Basement Systems</h2>
              <h2 className="">
                <sup>N/01</sup>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
