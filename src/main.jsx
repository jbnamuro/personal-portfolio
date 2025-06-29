import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Router from "./components/Router/Router.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);
// ScrollTrigger.normalizeScroll(true);
ScrollTrigger.config({ ignoreMobileResize: true });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
