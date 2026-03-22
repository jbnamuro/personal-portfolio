import React from "react";

const Project = (props) => {
  return (
    <div className="border-r-1 border-y-1 border-[rgba(255,255,255,0.3)] h-150 min-w-[500px] flex flex-col justify-center items-center">
      <img src={props.image} alt={props.title} className="h-2/3" />
      <div className="bg-red-500 w-full px-5 h-1/3 py-5">
        <h2 className="text-3xl mb-2">{props.title}</h2>
        <p className="mb-12">{props.description}</p>
        <button className="cursor-pointer rounded-3xl border border-white px-4 py-2">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Project;
