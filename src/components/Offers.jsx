import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Offers = () => {
  useGSAP(() => {
    gsap.set(".card2", {
      yPercent: 100,
    });
    gsap.set(".card3", {
      yPercent: 200,
    });

    gsap.to(".card1", {
      backgroundColor: "#141414",
      scrollTrigger: {
        trigger: ".card1",
        start: "bottom bottom",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to(".card2", {
      backgroundColor: "#0A0A0A",
      scrollTrigger: {
        trigger: ".card1",
        start: "bottom bottom",
        end: "top top",
        scrub: true,
      },
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin",
        start: "top top",
        endTrigger: ".footer",
        end: "center top",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });
    tl.to(".card1", {
      scale: 0.85,
      ease: "none",
    });

    tl.to(
      ".card2",
      {
        yPercent: 0,
        ease: "none",
      },
      "<"
    );
    tl.to(
      ".card3",
      {
        yPercent: 100,
        ease: "none",
      },
      "<"
    );
    tl.to(".card3", {
      yPercent: 0,
      ease: "none",
    });
    tl.to(
      ".card2",
      {
        scale: 0.85,
        ease: "none",
      },
      "<"
    );
  });
  return (
    <div className="h-[50vh] mt-5 pin relative flex flex-col justify-between">
      <div className="h-full w-full flex card1 rounded-2xl bg-black absolute flex-col justify-center px-5">
        <div className="flex justify-between items-center">
          <h2 className="text-[4vh]">Website Development</h2>
          <p>N/01</p>
        </div>
        <p className="mt-2 text-[2.5vh]">
          I provide professional, functional website development tailored to
          help elevate your business to the next level.
        </p>
      </div>

      <div className="absolute card2 w-full left-0 rounded-2xl bg-black h-full flex flex-col justify-center px-5">
        <div className="flex justify-between items-center">
          <h2 className="text-[4vh]">Website Development</h2>
          <p>N/02</p>
        </div>
        <p className="mt-2 text-[2.5vh]">
          I provide professional, functional website development tailored to
          help elevate your business to the next level.
        </p>
      </div>

      <div className="absolute w-full card3 left-0 h-full rounded-2xl  bg-black flex flex-col justify-center px-5">
        <div className="flex justify-between items-center">
          <h2 className="text-[4vh]">Website Development</h2>
          <p>N/03</p>
        </div>
        <p className="mt-2 text-[2.5vh]">
          I provide professional, functional website development tailored to
          help elevate your business to the next level.
        </p>
      </div>
    </div>
  );
};

export default Offers;
