import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Learn from "./components/Learn.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import Transition from "./components/Transition/Transition.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);
// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis({ duration: 1 });

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById("root")).render(
  <StrictMode>
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
                video="./wbs.mp4"
                next="/learnPortfolio"
              />
            </Transition>
          }
        />
        <Route
          path="learnPortfolio"
          element={
            <Transition>
              <Learn
                title="Previous Portfolio"
                description="An early portfolio built as part of my learning journey into front-end development and design. It reflects the foundations of my skills and marks the beginning of my exploration into web animation, layout, and user interface experimentation."
                video="./old.mp4"
                next="/learnWBS"
              />
            </Transition>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
