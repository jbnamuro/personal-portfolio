import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useFont from "./useFont";

const Landing = () => {
  const homeRef = useRef(null);
  const font = useFont();
  useGSAP(
    () => {
      if (!font) return;
      gsap.set(".white-box", {
        y: 50,
      });
      gsap.to(".white-box", {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      });

      gsap.to(".white-box img", {
        rotate: 360,
        repeat: -1,
        duration: 10,
        ease: "none",
      });

      const landing = SplitText.create(".landing-info", {
        type: "lines",
        mask: "lines",
        onSplit: (self) => {
          gsap.set(".land-text1", {
            opacity: 1,
          });
          gsap.set(".land-text2", {
            opacity: 0.5,
          });
          gsap.from(self.lines, {
            yPercent: 100,
            stagger: 0.1,
            duration: 2,
            ease: "power4.out",
          });
        },
      });

      if (!ScrollTrigger.isTouch) {
        gsap.to(".scale-this", {
          y: -200,
          scale: 0.9,
          scrollTrigger: {
            trigger: ".landing-cont",
            start: "top top",
            end: "bottom top",
            // markers: true,
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });
      } else {
        gsap.to(".scale-this", {
          scrollTrigger: {
            trigger: ".landing-cont",
            start: "top top",
            end: "bottom top",
            // markers: true,
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });
      }
    },
    { scope: homeRef.current, dependencies: [font] }
  );
  return (
    <div ref={homeRef}>
      <div className="landing-cont flex flex-col justify-center items-center top-0 left-0 h-svh -z-1 w-full">
        <div className="w-full h-full bg-[url(/background.jpg)] bg-cover bg-no-repeat absolute top-0 left-0 -z-1 opacity-30"></div>
        <div className="w-full h-full flex justify-center items-center flex-col scale-this ">
          <div className="bg-white white-box text-[3vw]/[3vw] opacity-0 md:text-xl p-4 aspect-5/6  max-h-100 max-w-150 flex font-light flex-col justify-between w-[75%] text-black">
            <div className="opacity-50 flex justify-between">
              <p className="text-[3.5vw]/[3.5vw] md:text-xl">Jabari Namuro</p>
              <p className="text-[3.5vw]/[3.5vw] md:text-xl">Based in Canada</p>
            </div>
            <div>
              <p>Digital Developer/Designer</p>
              <div className="relative w-fit">
                <h1 className="font-medium text-nowrap text-[7.5vw]/[7.5vw] md:text-6xl">
                  Purposeful Design <br />
                  Beautiful Aesthetics
                </h1>
                <img
                  src="/flower.svg"
                  className="absolute right-[2.5vw] -top-[1vw] md:right-[25px] md:-top-[10px] max-w-[25px] w-[3.5vw]"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-10 bottom-2 w-[70%] landing-info max-w-150">
            {/* <p className="font-medium text-[3.5vw] md:text-lg opacity-0 land-text1">
              CRAFTING ANIMATED, INTERACTIVE WEB EXPERIENCES THAT ELEVATE BRANDS
              AND CAPTIVATE USERS.
            </p> */}
            {/* <p className="mt-2 font-light text-[3.5vw] md:text-lg land-text2 opacity-0">
              (↓)
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
