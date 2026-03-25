import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Router from "./components/Router/Router.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);
// ScrollTrigger.normalizeScroll(true);

// Clean up old service worker for returning visitors (safe to remove after a few weeks)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((r) => r.unregister());
  });
  caches.keys().then((names) => names.forEach((n) => caches.delete(n)));
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
