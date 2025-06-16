import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Landing = () => {
  const homeRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(".landing-cont", {
        y: -200,
        scrollTrigger: {
          trigger: ".landing-cont",
          start: "top top",
          // markers: true,
          scrub: true,
        },
      });
    },
    { scope: homeRef.current }
  );
  return (
    <div
      ref={homeRef}
      className="landing-cont flex flex-col justify-center items-center top-0 left-0 h-screen fixed w-full"
    >
      <div className="w-full h-full bg-[url(/background.jpg)] bg-cover bg-no-repeat absolute top-0 left-0 -z-1 opacity-50"></div>
      <div className="bg-white text-[3.5vw]/[3.5vw] md:text-2xl mt-[10%] p-4 aspect-5/6 max-h-120 0 max-w-200 flex font-light flex-col justify-between w-[75%] text-black">
        <div className="opacity-50 flex justify-between">
          <p className="">Jabari Namuro</p>
          <p>Based in Canada</p>
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
      <div className="text-center mt-10 bottom-2 w-[70%] max-w-150">
        <p className="font-bold text-[3vw] md:text-xl">
          CRAFTING ANIMATED, INTERACTIVE WEB EXPERIENCES THAT ELEVATE BRANDS AND
          CAPTIVATE USERS.
        </p>
        <p className="opacity-50 mt-2 text-[3vw] md:text-xl">(scroll)</p>
      </div>
    </div>
  );
};

export default Landing;
