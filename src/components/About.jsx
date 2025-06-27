import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFont from "./useFont";
import { SplitText } from "gsap/SplitText";

const About = () => {
  const font = useFont();
  useGSAP(
    () => {
      if (!font) return;
      const abttitle = SplitText.create(".abt-title", {
        type: "words",
        mask: "words",
      });

      gsap.from(abttitle.words, {
        yPercent: 100,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".abt-title",
          start: "top 60%",
          // toggleActions: "play none none reverse",
        },
      });
      const abtPara = SplitText.create(".abt", {
        type: "words",
        autoSplit: true,
        onSplit: (self) => {
          gsap.from(self.words, {
            opacity: 0.1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".abt",
              start: "top 60%",
              scrub: 1,
              end: "bottom 70%",
              // markers: true,
            },
          });
        },
      });

      const met = SplitText.create(".met", {
        type: "words",
        mask: "words",
      });

      const vis = SplitText.create(".vis", {
        type: "words",
        mask: "words",
      });

      gsap.from(met.words, {
        yPercent: 100,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".met",
          start: "top 70%",
          // toggleActions: "play none none reverse",
        },
      });

      gsap.from(vis.words, {
        yPercent: 100,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".met",
          start: "top 70%",
          // toggleActions: "play none none reverse",
        },
      });
    },
    { dependencies: [font] }
  );
  return (
    <div id="about" className="bg-black pt-5 px-5">
      <h2 className="abt-title opacity-50 text-xl">About Me</h2>
      <p className="abt text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2">
        I'm Jabari, a creative frontend developer fueled by a passion for
        building interactive experiences that challenge the norm. Obsessed with
        crafting high-performing, visually engaging work and always chasing the
        next level of excellence.
      </p>
      <p className="mt-5 met opacity-50 text-[3vw] md:text-lg lg:text-xl xl:text-2xl">
        Meticulously crafting
      </p>
      <p className="opacity-50 vis text-[3vw] md:text-lg lg:text-xl xl:text-2xl pb-5">
        (Vision) → (Concept) → (Composition) → (Refinement) → (Delivery)
      </p>
    </div>
  );
};

export default About;
