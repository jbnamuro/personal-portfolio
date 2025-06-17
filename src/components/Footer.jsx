import React from "react";

const Footer = () => {
  return (
    <div className="h-screen bg-black px-5 py-10 text-[4vh] footer flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between">
          <div>
            <p className="opacity-50 text-[3vh]">Navigate (04)</p>
            <p>Projects</p>
            <p>About</p>
            <p>Offers</p>
            <p>Contact</p>
          </div>
          <div>
            <p className="opacity-50 text-[3vh]">Connect (2)</p>
            <a
              href="https://www.linkedin.com/in/jabari-namuro-1b35ab2b9/"
              target="_blank"
            >
              LinkedIn
            </a>
            <br />
            <a href="https://github.com/jbnamuro" target="_blank">
              Github
            </a>
          </div>
          <div className="pointer-events-none"></div>
        </div>
        <div className="mt-5">
          <p className="opacity-50 text-[3vh]">Available (2)</p>
          <p>Freelance/Hire</p>
        </div>
        <div className="mt-5">
          <p className="opacity-50 text-[3vh]">Location (1)</p>
          <p>Toronto, Canada</p>
        </div>
        <div className="mt-5">
          <p className="opacity-50 text-[3vh]">Say hello (1)</p>
          <p>jabarinamuro@gmail.com</p>
        </div>
      </div>

      <div className="flex justify-between opacity-50">
        <p>JN</p>
        <p>&copy;2025</p>
      </div>
    </div>
  );
};

export default Footer;
