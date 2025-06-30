import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import SEO from "./components/SEO";

const App = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jabari Namuro Portfolio",
    description:
      "Portfolio website showcasing frontend development and web design projects",
    url: "https://jabarinamuro.com/",
    mainEntity: {
      "@type": "Person",
      name: "Jabari Namuro",
      jobTitle: "Frontend Developer",
      description:
        "Frontend developer and web designer based in Toronto, specializing in modern web development and animations.",
      image: "/portfolio.jpg",
      knowsAbout: [
        "Frontend Development",
        "Web Design",
        "React",
        "JavaScript",
        "CSS",
        "Web Animations",
        "User Experience Design",
      ],
    },
  };

  return (
    <>
      <SEO
        title="Frontend Developer & Web Designer"
        description="Frontend developer and web designer based in Toronto. Specializing in modern web development, animations, and creative user experiences. View my portfolio of projects."
        keywords="frontend developer, web designer, Toronto, React, JavaScript, CSS, animations, portfolio, web development"
        url="https://jabarinamuro.com/"
        structuredData={structuredData}
      />
      <Header />
      <Landing />
      <Projects />
      <About />
      <Offers />
      <Footer />
    </>
  );
};

export default App;
