import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const Learn = (props) => {
  return (
    <div className="px-5 py-8 md:h-screen min-h-screen flex flex-col">
      <div className="flex justify-between">
        <Link to="/" className="underline">
          ← Return
        </Link>
        <Link to={props.next} className="underline">
          Next →
        </Link>
      </div>

      <div className="hidden py-10 md:flex flex-col justify-between flex-1">
        <div className="h-fit flex flex-col justify-between">
          <div className="title-web flex">
            <div className="mr-4 w-[30%]">
              <p className="opacity-50 md:text-2xl lg:text-3xl font-light">
                (Project)
              </p>
              <h2 className="md:text-3xl lg:text-4xl mt-2">
                {props.title}
              </h2>
            </div>
            <div className="w-[70%] pl-2">
              <p className="opacity-50 md:text-2xl lg:text-3xl font-light">
                (Role)
              </p>
              <p className="md:text-3xl lg:text-4xl mt-2">{props.role}</p>
            </div>
          </div>
        </div>
        <div className="flex desc-web w-full">
          <div className="w-full flex flex-col justify-between">
            <div>
              <p className="opacity-50 mb-2 mt-5 md:text-2xl lg:text-3xl font-light ">
                (Description)
              </p>
              <p className="md:text-2xl lg:text-3xl font-light">
                {props.description}
              </p>
            </div>
          </div>
        </div>
        <a href={props.link} target="_blank">
          <div className="group">
            <div className="mt-5 flex justify-between opacity-50 group-hover:opacity-100 ease-in-out duration-500">
              <p className="md:text-2xl lg:text-3xl">Visit Site</p>
              <p className="md:text-2xl lg:text-3xl">→</p>
            </div>
            <div className="w-full h-[1px] mt-2 relative">
              <div className="absolute top-0 left-0 h-full w-full opacity-50 bg-white"></div>
              <div className="absolute top-0 left-0 h-full w-[0%] bg-white group-hover:w-full duration-500 ease-in-out"></div>
            </div>
          </div>
        </a>
      </div>

      <div className="md:hidden flex-1 justify-between flex flex-col">
        <div>
          <div className="flex justify-between items-center mt-5">
            <div className="title-web">
              <p className="opacity-50 text-md font-light">
                (Project)
              </p>
              <h2 className="text-lg">{props.title}</h2>
            </div>
          </div>
          <div>
            <p className="opacity-50 mt-5 text-md font-light">(Role)</p>
            <p className="text-lg">{props.role}</p>
          </div>
        </div>
        <div className="mt-5 desc-web">
          <p className="opacity-50 text-md font-light">
            (Description)
          </p>
          <p className="text-md font-light">
            {props.description}
            {/* A clean, straightforward website built for a Toronto-based
                waterproofing company, focusing on clarity, ease of navigation, and
                professional presentation. */}
          </p>
        </div>
        <a href={props.link} target="_blank">
          <div className="group mt-5">
            <div className="flex justify-between opacity-50 group-hover:opacity-100 ease-in-out duration-500">
              <p className="text-md">Visit Site</p>
              <p className="text-md">→</p>
            </div>
            <div className="w-full h-[1px] mt-2 relative">
              <div className="absolute top-0 left-0 h-full w-full opacity-50 bg-white"></div>
              <div className="absolute top-0 left-0 h-full w-[0%] bg-white group-hover:w-full duration-500 ease-in-out"></div>
            </div>
          </div>
        </a>
      </div>
    </div >
  );
};

export default Learn;
