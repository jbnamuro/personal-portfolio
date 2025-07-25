import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFont from "./useFont";
import { SplitText } from "gsap/SplitText";

const Projects = () => {
  const font = useFont();
  const projectRef = useRef(null);
  useGSAP(
    () => {
      if (!font) return;
      // gsap.to(".pin-here", {
      //   scrollTrigger: {
      //     trigger: ".pin-here",
      //     pin: true,
      //     start: "top top",
      //     endTrigger: ".project-wrapper",
      //     end: "bottom bottom",
      //     // markers: true,
      //   },
      // });

      // gsap.from(".img1", {
      //   scale: 0.8,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".img1",
      //     start: "top bottom",
      //     scrub: true,
      //     end: "40% center",
      //     // markers: true,
      //     onLeave: () => {
      //       gsap.to(".img1", {
      //         scale: 0.8,
      //         ease: "none",
      //         scrollTrigger: {
      //           trigger: ".img1",
      //           start: "60% center",
      //           // markers: true,
      //           scrub: true,
      //           end: "bottom top",
      //         },
      //       });
      //     },
      //   },
      // });

      // gsap.from(".img2", {
      //   scale: 0.8,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".img2",
      //     start: "top bottom",
      //     scrub: true,
      //     end: "40% center",
      //     // markers: true,
      //     onLeave: () => {
      //       gsap.to(".img2", {
      //         scale: 0.8,
      //         ease: "none",
      //         scrollTrigger: {
      //           trigger: ".img2",
      //           start: "60% center",
      //           // markers: true,
      //           scrub: true,
      //           end: "bottom top",
      //         },
      //       });
      //     },
      //   },
      // });

      // gsap.from(".img3", {
      //   scale: 0.8,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".img3",
      //     start: "top bottom",
      //     scrub: true,
      //     end: "40% center",
      //     // markers: true,
      //     onLeave: () => {
      //       gsap.to(".img3", {
      //         scale: 0.8,
      //         ease: "none",
      //         scrollTrigger: {
      //           trigger: ".img3",
      //           start: "60% center",
      //           // markers: true,
      //           scrub: true,
      //           end: "bottom top",
      //         },
      //       });
      //     },
      //   },
      // });

      const anims = [".projects"];
      anims.forEach((anim) => {
        SplitText.create(anim, {
          type: "lines",
          mask: "lines",
          onSplit: (self) => {
            gsap.from(self.lines, {
              yPercent: 100,
              duration: 1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: self.elements,
                start: "top 80%",
              },
            });
          },
        });
      });

      const lineanims = [".line-anim"];
      lineanims.forEach((self) => {
        gsap.to(self, {
          width: "100%",
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: self,
            start: "top 80%",
          },
        });
      });

      SplitText.create(".scroll-through", {
        type: "words",
        mask: "words",
        onSplit: (self) => {
          gsap.from(self.words, {
            stagger: 0.02,
            yPercent: 100,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: self.elements,
              start: "top 80%",
            },
          });
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

      gsap.to(".link2", {
        display: "block",
        duration: 0.1,
        scrollTrigger: {
          trigger: ".box2",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".link3", {
        display: "block",
        duration: 0.1,
        scrollTrigger: {
          trigger: ".box3",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { dependencies: [font], scope: projectRef }
  );
  return (
    <div
      ref={projectRef}
      id="projects"
      className="h-[250vh] font-light project-wrapper flex justify-center relative z-10 bg-black w-full"
    >
      <div className="h-full absolute flex flex-col justify-evenly  items-center">
        <div className="box1 w-[75vw] max-w-[500px] relative bg-black">
          {/* <div className="absolute h-[calc(100%+30px)] w-[calc(100%+30px)] -z-1 top-[50%] left-[50%] -translate-[50%] border-1 opacity-50"></div> */}
          {/* <div className="absolute h-[calc(100%+32px)] w-full bg-black -z-1 top-[50%] left-[50%] -translate-[50%]"></div> */}
          {/* <div className="absolute w-[calc(100%+32px)] h-full bg-black -z-1 top-[50%] left-[50%] -translate-[50%]"></div> */}

          <img
            src="./corner.jpg"
            alt="Corner Coffee cafe website"
            className="img1"
            fetchPriority="high"
          />
        </div>
        <div className="box2 w-[75vw] relative max-w-[500px] bg-black">
          {/* <div className="absolute h-[calc(100%+30px)] w-[calc(100%+30px)] -z-1 top-[50%] left-[50%] -translate-[50%] border-1 opacity-50"></div> */}
          {/* <div className="absolute h-[calc(100%+32px)] w-full bg-black -z-1 top-[50%] left-[50%] -translate-[50%]"></div> */}
          {/* <div className="absolute w-[calc(100%+32px)] h-full bg-black -z-1 top-[50%] left-[50%] -translate-[50%]"></div> */}
          <img
            src="./wbs.jpg"
            alt="wet basement systems website"
            className="img2"
            fetchPriority="high"
          />
        </div>
        <div className="box3 w-[75vw] relative max-w-[500px] bg-black">
          {/* <div className="absolute h-[calc(100%+30px)] w-[calc(100%+30px)] -z-1 top-[50%] left-[50%] -translate-[50%] border-1 opacity-50"></div> */}
          {/* <div className="absolute h-[calc(100%+32px)] w-full bg-black -z-1 top-[50%] left-[50%] -translate-[50%]"></div> */}
          {/* <div className="absolute w-[calc(100%+32px)] h-full bg-black -z-1 top-[50%] left-[50%] -translate-[50%]"></div> */}
          <img
            src="./portfolio.jpg"
            alt="personal portfolio concept website"
            className="img3"
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="sticky top-0 left-0 h-screen flex flex-col justify-between">
          <div className="px-5 bg-black pt-5">
            <h1 className="text-3xl font-normal projects mb-1">Projects</h1>
            <div className="flex justify-between">
              <p className="opacity-50 text-[3.5vw]/[4.5vw] md:text-xl scroll-through">
                Tech meets design — scroll through my digital experiments.
              </p>
              <p className="opacity-50 hidden">(scroll)</p>
            </div>
            <div className="w-0 line-anim h-[1px] mt-2 opacity-50 bg-white"></div>
          </div>
          <div className="pb-5 w-full px-5 group bg-black relative">
            <Link
              to="/learnCafe"
              className="link1 h-full absolute top-0 left-0 w-full z-100"
            ></Link>
            <Link
              to="/learnWBS"
              className="link2 h-full absolute top-0 left-0 w-full hidden z-100"
            ></Link>
            <Link
              to="/learnExperiment"
              className="link3 h-full absolute top-0 left-0 w-full hidden z-100"
            ></Link>
            <div className="flex pt-2 justify-between">
              <p className="opacity-50 group-hover:opacity-100 duration-500 ease-in-out learn">
                Learn More
              </p>
              <p className="opacity-50 group-hover:opacity-100 duration-500 ease-in-out click">
                (Click Here) →
              </p>
            </div>
            <div className="w-full h-[1px] my-2 relative">
              <div className="w-full line-anim2 h-full bg-white opacity-50 top-0 left-0 absolute"></div>
              <div className="w-0 h-full bg-white top-0 left-0 absolute group-hover:w-full duration-500 ease-in-out"></div>
            </div>
            <div className="flex justify-between">
              <div className="text-[7vw]/[7vw] md:text-5xl lg:text-6xl  relative font-normal">
                <h3 className="absolute mix-blend-difference first-split text-nowrap top-0 left-0">
                  Corner Coffee
                </h3>
                <h3 className="top-0 left-0 mix-blend-difference second-split absolute text-nowrap">
                  Wet Basement Systems
                </h3>
                <h3 className="top-0 left-0 mix-blend-difference third-split absolute text-nowrap">
                  Animation Experiment
                </h3>
              </div>

              <h2 className="text-[7vw]/[7vw] md:text-5xl lg:text-6xl xl:text-7xl  relative opacity-0 pointer-events-none">
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
