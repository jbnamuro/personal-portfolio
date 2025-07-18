import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useFont from "./useFont";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLenis } from "lenis/react";

const Footer = () => {
  const footerRef = useRef(null);
  const font = useFont();

  const lenis = useLenis();
  const scrollToSection = (target) => {
    if (lenis) {
      lenis.scrollTo(`#${target}`, {
        duration: 1,
      });
      openMenu(false);
      // console.log(menu);
      changeClick(false);
    }
  };
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

      gsap.to(".line-anim", {
        width: "100%",
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".line-anim",
          start: "top 90%",
          // markers: true,
        },
      });
    },
    { dependencies: [font], scope: footerRef }
  );
  return (
    <div id="contact" ref={footerRef}>
      <div className="h-svh bg-black px-5 pb-5 text-[4vh] footer flex flex-col justify-between">
        <div className="h-[1px] line-anim w-[0%] bg-white opacity-50"></div>
        <div className="">
          <div className="flex justify-between">
            <div className="navigate">
              <p className="opacity-50 text-[3vh] text-nowrap font-light">
                Navigate (04)
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  scrollToSection("projects");
                }}
              >
                Projects
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  scrollToSection("about");
                }}
              >
                About
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  scrollToSection("offers");
                }}
              >
                Offers
              </p>
            </div>
            <div className="connect">
              <p className="opacity-50 text-[3vh] text-nowrap font-light">
                Connect (2)
              </p>
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
            <p className="opacity-50 text-[3vh] text-nowrap font-light">
              Available (2)
            </p>
            <p>Freelance/Hire</p>
          </div>
          <div className="mt-5 location">
            <p className="opacity-50 text-[3vh] text-nowrap font-light">
              Location (1)
            </p>
            <p>Toronto, Canada</p>
          </div>
          <div className="mt-5 hello">
            <p className="opacity-50 text-[3vh] text-nowrap font-light">
              Say hello (1)
            </p>
            <p>jabarinamuro@gmail.com</p>
          </div>
        </div>
        <div className="flex text-lg md:text-xl lg:text-2xl xl:text-3xl justify-between opacity-50">
          <p>JN</p>
          <p>&copy;2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
