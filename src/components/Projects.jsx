import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFont from "./useFont";
import { SplitText } from "gsap/SplitText";
import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Computer Vision",
    description:
      "Real time object detection & tracking using YOLOv8, plus 3D point cloud reconstruction from RGB-D video. Supports live RTSP streams, local video, and TUM benchmark datasets. Browser-based UI built with NiceGUI.",
    tags: ["Python", "YOLOv8", "NiceGUI", "OpenCV", "RGB-D"],
    image: "/eyeLogo.svg",
    link: "/learnCV",
  },
  {
    id: 2,
    title: "PetSystem",
    description:
      "Role based pet adoption platform with smart filtering by species, rarity, and price. Features secure dashboards for Customers, Staff, and Admins, a shopping cart with tax calculation, full inventory CRUD, and complex logic handled via MySQL Stored Procedures.",
    tags: ["Flask", "MySQL", "Jinja2", "Stored Procedures", "CSS"],
    image: "/paw.svg",
    link: "/learnPetSystem",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "This site. Built with React, GSAP for animations, and Tailwind CSS for styling. Vite powers the build, with page transitions handled via React Router and GSAP, and SEO covered through meta tags, JSON-LD schema, and a sitemap.",
    tags: ["React", "GSAP", "Tailwind CSS", "Vite"],
    image: "/folder.svg",
    link: "/learnPortfolio",
  },
  {
    id: 4,
    title: "Cafe Website",
    description:
      "A cafe website example build with smooth animations and a unique design.",
    tags: ["React", "JavaScript", "Tailwind CSS", "GSAP"],
    image: "/cup.svg",
    link: "/learnCafe",
  },
];

let runningAnimation = false;
let currentOffset = 0;

const Projects = () => {
  useEffect(() => {
    const handleResize = () => {
      currentOffset = 0;
      gsap.set(boxesRef.current, { x: 0 });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const font = useFont();
  const boxesRef = useRef(null);

  const slider = (direction) => {
    const boxes = boxesRef.current;
    if (!boxes || runningAnimation) return;

    const cardWidth = boxes.firstElementChild.getBoundingClientRect().width;
    const maxOffset = boxes.scrollWidth - window.innerWidth;

    if (direction === "next" && currentOffset < maxOffset) {
      currentOffset = Math.min(currentOffset + cardWidth, maxOffset);
    } else if (direction === "prev" && currentOffset > 0) {
      currentOffset = Math.max(currentOffset - cardWidth, 0);
    } else {
      return;
    }

    runningAnimation = true;
    gsap.to(boxes, {
      x: -currentOffset,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        runningAnimation = false;
      },
    });
  };
  useGSAP(() => {
    if (!font) return;
    const split = new SplitText(".selected", { type: "words", mask: "words" });
    gsap.from(split.words, {
      yPercent: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".selected",
        start: "top 75%",
      },
    });
  }, [font]);

  return (
    <div
      id="projects"
      className="h-fit-content w-full bg-black text-white overflow-hidden"
    >
      <div className="px-5 py-10 flex justify-between items-center">
        <h1 className="sm:text-4xl text-2xl selected">Selected Works</h1>
        <div className="flex gap-2 2xl:hidden">
          <div
            onClick={() => slider("prev")}
            className="bg-bright-red cursor-pointer opacity-50 flex hover:opacity-100 duration-150 ease-in justify-center items-center h-10 w-10 rounded-full"
          >
            <img src="/arrow.svg" alt="arrow" className="w-5" />
          </div>
          <div
            onClick={() => slider("next")}
            className="bg-bright-red cursor-pointer opacity-50 flex hover:opacity-100 duration-150 ease-in justify-center items-center h-10 w-10 rounded-full"
          >
            <img src="/arrow.svg" alt="arrow" className="w-5 rotate-180" />
          </div>
        </div>
      </div>
      <div ref={boxesRef} className="flex">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
