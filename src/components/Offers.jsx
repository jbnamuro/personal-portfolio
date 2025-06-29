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

      const pselectors = [".p1", ".p2", ".p3"];
      pselectors.forEach((select) => {
        SplitText.create(select, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => {
            gsap.from(self.lines, {
              yPercent: 100,
              stagger: 0.2,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: self.elements,
                start: "top 80%",
                // markers: true,
              },
            });
          },
        });
      });

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

        gsap.to(".card2", {
          backgroundColor: "black",
          scrollTrigger: {
            trigger: ".card2",
            start: "top center",
            end: "top top",
            scrub: true,
            // markers: true,
          },
        });

        gsap.to(".card3", {
          backgroundColor: "black",
          scrollTrigger: {
            trigger: ".card2",
            start: "top center",
            endTrigger: ".card3",
            end: "top top",
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    // },
    { dependencies: [font] }
  );
  return (
    <div
      id="offers"
      className="h-[150vh] mt-5 pin relative flex flex-col justify-between"
    >
      <div className="h-[50vh]  w-full flex card1 bg-black  relative flex-col justify-center px-5">
        <div className="flex justify-between items-center">
          <div className="title-web">
            <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Offer)</p>
            <h2 className="text-[4vh]/[5vh] ">Website Development</h2>
          </div>
          <p>N/01</p>
        </div>
        <div className="mt-5 desc-web p1">
          <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Description)</p>
          <p className="text-[2.5vh] ">
            I provide professional, functional website development tailored to
            help elevate your business to the next level.
          </p>
        </div>
      </div>

      <div className=" h-[50vh]  relative card2 w-full left-0  bg-[#0A0A0A] flex flex-col justify-center px-5">
        <div className="flex justify-between items-center">
          <div className="title-uiux">
            <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Offer)</p>
            <h2 className="text-[4vh]/[5vh]">UIUX Design</h2>
          </div>
          <p>N/02</p>
        </div>
        <div className="mt-5 desc-uiux p2">
          <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Description)</p>
          <p className="text-[2.5vh]">
            I craft elegant and practical UI/UX designs that seamlessly align
            with each client's vision and user needs.
          </p>
        </div>
      </div>

      <div className=" relative w-full card3 left-0 h-[50vh]   bg-[#141414] flex flex-col justify-center px-5">
        <div className="flex justify-between items-center">
          <div className="title-branding">
            <p className="opacity-50 text-[1.5vh]/[1.5vh]">(Offer)</p>
            <h2 className="text-[4vh]/[5vh]">Branding Design</h2>
          </div>
          <p>N/03</p>
        </div>
        <div className="mt-5 desc-branding p3">
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
