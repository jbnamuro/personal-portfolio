import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useFont from "./useFont";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const Footer = () => {
  const footerRef = useRef(null);
  const font = useFont();
  useGSAP(
    () => {
      if (!font) return;
      const navigate = SplitText.create(".navigate", {
        type: "lines",
        mask: "lines",
      });
      const connect = SplitText.create(".connect", {
        type: "lines",
        mask: "lines",
      });
      const hello = SplitText.create(".hello", {
        type: "lines",
        mask: "lines",
      });

      const available = SplitText.create(".available", {
        type: "lines",
        mask: "lines",
      });

      const location = SplitText.create(".location", {
        type: "lines",
        mask: "lines",
      });

      gsap.from(navigate.lines, {
        yPercent: 100,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".navigate",
          start: "top 90%",
          // markers: true,
        },
      });

      // Animate "connect"
      gsap.from(connect.lines, {
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".connect",
          start: "top 90%",
          // markers: true,
        },
      });

      gsap.from(available.lines, {
        yPercent: 100,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".available",
          start: "top 90%",
          // markers: true, // optional for debugging
        },
      });

      gsap.from(location.lines, {
        yPercent: 100,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".location",
          start: "top 90%",
          // markers: true, // optional for debugging
        },
      });

      // Animate "hello"
      gsap.from(hello.lines, {
        yPercent: 100,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hello",
          start: "top 90%",
          // markers: true,
        },
      });
    },
    { dependencies: [font], scope: footerRef }
  );
  return (
    <div ref={footerRef}>
      <div className="h-screen bg-black px-5 py-10 text-[4vh] footer flex flex-col justify-between">
        <div className="">
          <div className="flex justify-between">
            <div className="navigate">
              <p className="opacity-50 text-[3vh] text-nowrap">Navigate (04)</p>
              <p>Projects</p>
              <p>About</p>
              <p>Offers</p>
              <p>Contact</p>
            </div>
            <div className="connect">
              <p className="opacity-50 text-[3vh] text-nowrap">Connect (2)</p>
              <a
                href="https://www.linkedin.com/in/jabari-namuro-1b35ab2b9/"
                target="_blank"
              >
                LinkedIn
              </a>
              <br />
              <a href="https://github.com/jbnamuro" target="_blank">
                Github
              </a>
            </div>
            <div className="pointer-events-none"></div>
          </div>
          <div className="mt-5 available">
            <p className="opacity-50 text-[3vh] text-nowrap">Available (2)</p>
            <p>Freelance/Hire</p>
          </div>
          <div className="mt-5 location">
            <p className="opacity-50 text-[3vh] text-nowrap">Location (1)</p>
            <p>Toronto, Canada</p>
          </div>
          <div className="mt-5 hello">
            <p className="opacity-50 text-[3vh] text-nowrap">Say hello (1)</p>
            <p>jabarinamuro@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-between opacity-50">
          <p>JN</p>
          <p>&copy;2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
