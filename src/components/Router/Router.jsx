import React from "react";
import { useEffect, useRef } from "react";
import Transition from "../Transition/Transition.jsx";
import App from "../../App";
import Learn from "../Learn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";

const Router = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 1,
        lerp: 0.5,
      }}
      ref={lenisRef}
    >
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Transition>
                <App />
              </Transition>
            }
          />
          <Route
            path="learnWBS"
            element={
              <Transition>
                <Learn
                  title="Wet Basement Systems"
                  description="A clean, straightforward website built for a Toronto-based
          waterproofing company, focusing on clarity, ease of navigation, and
          professional presentation."
                  video="./wbs.mp4"
                  link="https://wetbasementstoronto.com/"
                  next="/learnExperiment"
                />
              </Transition>
            }
          />
          <Route
            path="learnExperiment"
            element={
              <Transition>
                <Learn
                  title="Animation Experiment"
                  description="A concept site created to experiment with advanced animations and unconventional design. Built as a playground for testing creative front-end techniques and challenging typical design patterns."
                  video="./experiment.mp4"
                  link="https://experiment-website-90q.pages.dev/"
                  next="/learnCafe"
                />
              </Transition>
            }
          />
          <Route
            path="learnCafe"
            element={
              <Transition>
                <Learn
                  title="Corner Coffee"
                  description="This cafe website was designed to blend modern stylization with effortless usability. This creates an inviting online atmosphere that draws customers in and makes navigation a breeze, boosting their desire to visit. Focused on visual impact and ease of use."
                  video="./corner.mp4"
                  link="https://cafe-website-sage.vercel.app/"
                  next="/learnWBS"
                />
              </Transition>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
};

export default Router;
