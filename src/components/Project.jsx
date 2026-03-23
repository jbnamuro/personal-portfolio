import React from "react";

const Project = (props) => {
  return (
    <div className="border-r-1 border-y-1 border-[rgba(255,255,255,0.3)] h-120 min-w-100 flex flex-col justify-center items-center">
      <div className="h-1/2 flex justify-center w-full items-center bg-blue-500"><img src={props.image} alt={props.title} className="invert w-1/4" /></div>
      <div className="bg-red-500 w-full px-5 h-1/2 py-5">
        <h2 className="text-3xl mb-2">{props.title}</h2>
        <p className="mb-19">{props.description}</p>
        <button className="cursor-pointer rounded-3xl border border-white px-4 py-2">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Project;
