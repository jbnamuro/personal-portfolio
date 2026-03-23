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
            path="learnCV"
            element={
              <Transition>
                <Learn
                  title="Computer Vision"
                  role="Full GUI & Collaborative Backend"
                  description="A computer vision capstone (COMP 4990) with three core capabilities. Object Detection uses YOLOv8 (yolov8n.pt) to detect and classify objects in video frames in real time, drawing bounding boxes and confidence scores directly onto the feed. Object Tracking extends this by following detected objects across consecutive frames using a dedicated tracker, allowing the system to maintain identities over time. 3D Point Cloud Reconstruction processes paired RGB-D datasets in TUM Freiburg benchmark format, combining color images, depth maps, camera intrinsics, and pose data to generate navigable 3D point clouds. Input sources include local video files, live RTSP streams, and RGB-D image datasets. The entire pipeline is controlled through a browser-based interface built with NiceGUI, where users can configure settings, watch live-annotated video output, and trigger point cloud generation on demand. Built collaboratively with Liam Mackenzie and Haydar Beydoun."
                  video=""
                  link="https://github.com/mackLiam/Comp_4990"
                  next="/learnPetSystem"
                />
              </Transition>
            }
          />
          <Route
            path="learnPetSystem"
            element={
              <Transition>
                <Learn
                  title="PetSystem"
                  role="Full UI & Collaborative Backend"
                  description="PetSystem is a full-stack pet adoption platform built with Flask and MySQL, designed around three distinct user roles. Customers can browse a live inventory filtered by species, rarity, maintenance level, and price, add pets to a shopping cart, and complete a secure checkout that automatically calculates a 13% tax. Staff members have access to a dedicated inventory dashboard with full CRUD operations to add, update, and remove pets from the catalog. Admins hold oversight over the entire platform, with tools to manage user accounts and review global order history. A core design decision was to push complex logic directly into the database. MySQL Stored Procedures handle transaction-safe checkouts and multi-parameter filtering, keeping the Python layer clean and the database authoritative. The UI is built with Jinja2 templates and custom CSS, designed around a clean, dashboard structured workflow. Built collaboratively by Jabari Namuro, Haydar Beydoun, Raad Islam, and Zakaria Hussein."
                  video=""
                  link="https://github.com/jbnamuro/PetSystem"
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
                  title="Personal Portfolio"
                  role="Full Stack"
                  description="This portfolio was built with a focus on motion and feel rather than static presentation. React handles the component architecture, while GSAP drives all animations, from scroll-triggered text reveals using SplitText to page transitions orchestrated between React Router navigation events. Tailwind CSS keeps styling fast and consistent, and Vite provides near-instant development builds. Smooth scrolling is handled through Lenis, synced directly with GSAP's ticker for frame-perfect easing. On the SEO side, the site includes structured meta tags, a JSON-LD schema, a generated sitemap, and a robots.txt, alongside a registered service worker for offline capability. The goal was a portfolio that feels alive, where the animations serve the content rather than distract from it."
                  video=""
                  link="https://github.com/jbnamuro/personal-portfolio"
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
                  role="Full Stack"
                  description="Corner Coffee is a front-end showcase built to explore what a modern, design-forward cafe website could look like. Built with React, Tailwind CSS, and GSAP, the project focuses on crafting a visual identity through motion with smooth section transitions, staggered reveals, and subtle interactive details that make the experience feel polished. JavaScript drives the interactive elements, while GSAP handles all animation timing and sequencing. The project was an exercise in balancing creative ambition with practical usability, resulting in a site that feels distinct without sacrificing clarity."
                  video="./corner.mp4"
                  link="https://cafe-website-sage.vercel.app/"
                  next="/learnCV"
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
