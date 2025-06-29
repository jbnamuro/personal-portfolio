import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useFont from "./useFont";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const Offers = () => {
  const font = useFont();
  useGSAP(
    () => {
      if (!font) return;

      const selectors = [".title-web", ".title-uiux", ".title-branding"];
      const splits = selectors.map((select) =>
        SplitText.create(select, {
          type: "lines",
          mask: "lines",
        })
      );

      splits.forEach((split) => {
        gsap.from(split.lines, {
          yPercent: 100,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: split.elements,
            start: "top 95%",
          },
        });
      });

      gsap.set(".card2", {
        yPercent: 100,
      });
      gsap.set(".card3", {
        yPercent: 200,
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin",
          start: "top top",
          endTrigger: ".footer",
          end: "center top",
          scrub: true,
          pin: true,
          ignoreMobileResize: true,
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
          backgroundColor: "black",
        },
        "<"
      );
      tl.to(
        ".card3",
        {
          yPercent: 100,
          ease: "none",
          backgroundColor: "#0A0A0A",
        },
        "<"
      );
      tl.to(".card3", {
        yPercent: 0,
        ease: "none",
        backgroundColor: "black",
      });
      tl.to(
        ".card2",
        {
          scale: 0.85,
          ease: "none",
        },
        "<"
      );
    },
    { dependencies: [font] }
  );
  return (
    <div
      id="offers"
      className="h-[50vh] mt-5 pin relative flex flex-col justify-between"
    >
      <div className="h-full w-full flex card1 bg-black absolute flex-col justify-center px-5">
        <div className="flex justify-between items-center">
          <div className="title-web">
            <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Offer)</p>
            <h2 className="text-[4vh]/[5vh] ">Website Development</h2>
          </div>
          <p>N/01</p>
        </div>
        <div className="mt-5 desc-web">
          <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Description)</p>
          <p className="text-[2.5vh]">
            I provide professional, functional website development tailored to
            help elevate your business to the next level.
          </p>
        </div>
      </div>

      <div className="absolute card2 w-full left-0  bg-[#0A0A0A] h-full flex flex-col justify-center px-5">
        <div className="flex justify-between items-center">
          <div className="title-uiux">
            <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Offer)</p>
            <h2 className="text-[4vh]/[5vh]">UIUX Design</h2>
          </div>
          <p>N/02</p>
        </div>
        <div className="mt-5 desc-uiux">
          <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Description)</p>
          <p className="text-[2.5vh]">
            I craft elegant and practical UI/UX designs that seamlessly align
            with each client's vision and user needs.
          </p>
        </div>
      </div>

      <div className="absolute w-full card3 left-0 h-full  bg-[#141414] flex flex-col justify-center px-5">
        <div className="flex justify-between items-center">
          <div className="title-branding">
            <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Offer)</p>
            <h2 className="text-[4vh]/[5vh]">Branding Design</h2>
          </div>
          <p>N/03</p>
        </div>
        <div className="mt-5 desc-branding">
          <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Description)</p>
          <p className="text-[2.5vh]">
            I deliver strategic, impactful branding design that strengthens your
            business identity and sets you apart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
