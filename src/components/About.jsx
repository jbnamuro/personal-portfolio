import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const About = () => {
  useGSAP(() => {
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
            end: "top top",
            // markers: true,
          },
        });
      },
    });
  });
  return (
    <div className="bg-black pt-5 px-5">
      <h2 className="opacity-50 text-2xl">About Me</h2>
      <p className="abt text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2">
        I'm Jabari, a creative frontend developer fueled by a passion for
        building interactive experiences that challenge the norm. Obsessed with
        crafting high-performing, visually engaging work and always chasing the
        next level of excellence.
      </p>
      <p className="mt-5 opacity-50 text-[3vw] md:text-lg lg:text-xl xl:text-2xl">
        Meticulously crafting through
      </p>
      <p className="opacity-50 text-[3vw] md:text-lg lg:text-xl xl:text-2xl pb-5">
        (Vision) → (Concept) → (Composition) → (Refinement) → (Delivery)
      </p>
    </div>
  );
};

export default About;
