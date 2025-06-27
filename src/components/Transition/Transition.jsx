import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Transition = ({ children }) => {
  const [currentChild, changeChild] = useState(children);
  const overlap = useRef(null);
  const previousChildren = useRef(children);

  useGSAP(() => {
    if (previousChildren.current === children) {
      return;
    }
    console.log("second");

    let tl = gsap.timeline({});
    tl.set(overlap.current, {
      display: "flex",
    });
    tl.to(".bar", {
      height: "100%",
      stagger: {
        amount: 0.15,
        from: "start",
      },
      onComplete: () => {
        changeChild(children);
        previousChildren.current = children;
      },
    });
    tl.set(overlap.current, {
      rotate: 0,
    });
    tl.to(".bar", {
      height: "0%",
      stagger: {
        amount: 0.15,
        from: "end",
      },
    });
    tl.set(overlap.current, {
      display: "none",
    });
    tl.set(overlap.current, {
      rotate: 180,
    });
  }, [children]);

  return (
    <div className="">
      <div
        ref={overlap}
        className="h-full w-full fixed top-0 left-0 z-1000 hidden rotate-180"
      >
        <div className="w-1/5 bar bg-black h-[0%] border-1"></div>
        <div className="w-1/5 bar bg-black h-[0%] border-1"></div>
        <div className="w-1/5 bar bg-black h-[0%] border-1"></div>
        <div className="w-1/5 bar bg-black h-[0%] border-1"></div>
        <div className="w-1/5 bar bg-black h-[0%] border-1"></div>
      </div>
      {currentChild}
    </div>
  );
};

export default Transition;
