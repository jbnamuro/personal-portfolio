import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFont from "./useFont";
import { SplitText } from "gsap/SplitText";

const Projects = () => {
  const font = useFont();
  useGSAP(
    () => {
      if (!font) return;
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

      gsap.from(".img1", {
        scale: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: ".img1",
          start: "top bottom",
          scrub: true,
          end: "40% center",
          // markers: true,
          onLeave: () => {
            gsap.to(".img1", {
              scale: 0.7,
              ease: "none",
              scrollTrigger: {
                trigger: ".img1",
                start: "60% center",
                // markers: true,
                scrub: true,
                end: "bottom top",
              },
            });
          },
        },
      });

      gsap.from(".img2", {
        scale: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: ".img2",
          start: "top bottom",
          scrub: true,
          end: "40% center",
          // markers: true,
          onLeave: () => {
            gsap.to(".img2", {
              scale: 0.7,
              ease: "none",
              scrollTrigger: {
                trigger: ".img2",
                start: "60% center",
                // markers: true,
                scrub: true,
                end: "bottom top",
              },
            });
          },
        },
      });

      gsap.from(".img3", {
        scale: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: ".img3",
          start: "top bottom",
          scrub: true,
          end: "40% center",
          // markers: true,
          onLeave: () => {
            gsap.to(".img3", {
              scale: 0.7,
              ease: "none",
              scrollTrigger: {
                trigger: ".img3",
                start: "60% center",
                // markers: true,
                scrub: true,
                end: "bottom top",
              },
            });
          },
        },
      });

      const titles = SplitText.create(".first-split", {
        type: "words",
        mask: "words",
      });
      const titles2 = SplitText.create(".second-split", {
        type: "words",
        mask: "words",
      });
      const titles3 = SplitText.create(".third-split", {
        type: "words",
        mask: "words",
      });
      gsap.set(titles2.words, {
        yPercent: 100,
      });
      gsap.set(titles.words, {
        yPercent: 100,
      });
      gsap.set(titles3.words, {
        yPercent: 100,
      });
      gsap.to(titles.words, {
        yPercent: 0,
        stagger: 0.05,
        ease: "power4.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".box1",
          start: "top 75%",
          endTrigger: ".box2",
          end: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to(titles2.words, {
        yPercent: 0,
        stagger: 0.05,
        ease: "power4.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".box2",
          start: "top 75%",
          endTrigger: ".box3",
          end: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to(titles3.words, {
        yPercent: 0,
        stagger: 0.05,
        ease: "power4.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".box3",
          start: "top 75%",
          endTrigger: ".project-wrapper",
          end: "bottom bottom",
          toggleActions: "play none play reverse",
        },
      });
    },
    { dependencies: [font] }
  );
  return (
    <div className="h-600 project-wrapper flex justify-center relative z-10 bg-black w-full">
      <div className="h-full justify-evenly absolute flex flex-col  items-center">
        <div className="box1 w-[75vw] max-w-[600px] bg-black">
          <img
            src="./portfolio.jpg"
            alt="personal portfolio website"
            className="img1"
          />
        </div>
        <div className="box2 w-[75vw] max-w-[600px] bg-black">
          <img
            src="./wbs.jpg"
            alt="wet basement systems website"
            className="img2"
          />
        </div>
        <div className="box3 w-[75vw] max-w-[600px] bg-black">
          <img src="./prevport.jpg" alt="portfolio website" className="img3" />
        </div>
      </div>
      <div className="h-screen w-full">
        <div className="pin-here h-full flex flex-col justify-between">
          <div className="bg-black  px-5 pt-5">
            <h1 className="text-3xl">Projects</h1>
            <div className="flex justify-between">
              <p>Tech meets design — scroll through my digital experiments.</p>
              <p className="opacity-50 hidden">(scroll)</p>
            </div>
            <div className="w-full h-[1px] mt-2 opacity-50 bg-white"></div>
          </div>
          <div className="pb-5 bg-black w-full px-5">
            <div className="flex justify-between">
              <p>Learn More</p>
              <p className="opacity-50">(click →)</p>
            </div>
            <div className="w-full bg-white h-[1px] my-2"></div>
            <div className="flex justify-between">
              <div className="text-3xl relative">
                <h3 className="absolute mix-blend-difference first-split text-nowrap top-0 left-0">
                  Animation Experiment
                </h3>
                <h3 className="top-0 left-0 mix-blend-difference second-split absolute text-nowrap">
                  Wet Basement Systems
                </h3>
                <h3 className="top-0 left-0 mix-blend-difference third-split absolute text-nowrap">
                  Previous Portfolio
                </h3>
              </div>

              <h2 className="text-3xl relative opacity-0 pointer-events-none">
                easter egg
              </h2>
              <div className="">
                <sup>N/01</sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
