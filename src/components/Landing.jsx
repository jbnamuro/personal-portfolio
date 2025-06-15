import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white text-[4.2vw]/[4.2vw] mt-[10%] p-2 h-[60%] max-h-120 flex font-light flex-col justify-between w-[75%] text-black">
        <div className="opacity-50 flex justify-between">
          <p className="">Jabari Namuro</p>
          <p>Based in Canada</p>
        </div>
        <div>
          <p>Digital Developer/Designer</p>
          <h1 className="font-medium text-nowrap text-[7.5vw]/[7.5vw]">
            Purposeful Design <br />
            Beautiful Aesthetics
          </h1>
        </div>
      </div>
      <div className="text-center mt-5 bottom-2 w-[70%]">
        <p className="font-bold text-[3.5vw]">
          CRAFTING ANIMATED, INTERACTIVE WEB EXPERIENCES THAT ELEVATE BRANDS AND
          CAPTIVATE USERS.
        </p>
        <p className="opacity-50 mt-2">(scroll)</p>
      </div>
    </div>
  );
};

export default Landing;
