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
          path="learnExperiment"
          element={
            <Transition>
              <Learn
                title="Wet Basement Systems"
                description="A clean, straightforward website built for a Toronto-based
          waterproofing company, focusing on clarity, ease of navigation, and
          professional presentation."
                video="./wbs.mp4"
                next="/learnWBS"
              />
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
                title="Wet Basement Systems"
                description="A clean, straightforward website built for a Toronto-based
          waterproofing company, focusing on clarity, ease of navigation, and
          professional presentation."
                video="./wbs.mp4"
                next="/learnExperiment"
              />
            </Transition>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
