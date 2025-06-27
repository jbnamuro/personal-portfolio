import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const Learn = (props) => {
  return (
    <div className="p-5 relative text-[2vw]/[2vw] md:h-svh md:min-h-[50vw]">
      <div className="flex justify-between">
        <Link to="/" className="">
          ← Return
        </Link>
        <Link to={props.next}>Next →</Link>
      </div>

      <div className="hidden md:block mt-5">
        <div className="h-fit flex flex-col justify-between">
          <div className="title-web flex">
            <div className="mr-4 w-[30%]">
              <p className="opacity-50 text-[2vw]/[2vw]">(Project)</p>
              <h2 className="text-[3vw] mt-2 ">{props.title}</h2>
            </div>
            <div className="w-[70%] pl-2">
              <p className="opacity-50 text-[2vw]/[2vw]">(Role)</p>
              <p className="text-[3vw] mt-2">UI/UX & Development</p>
            </div>
          </div>

          <div className="absolute p-5 bottom-0 left-0 mt-20 flex desc-web">
            <div className="min-w-[30%] overflow-hidden">
              <p className="opacity-50 text-[2vw]/[2vw]">(Video)</p>
              <video
                src={props.video}
                autoPlay
                playsInline
                loop
                muted
                preload="none"
                className="mt-2 max-h-100 w-[100%] max-w-100"
              />
            </div>
            <div className="min-w-[70%] pl-4 flex flex-col justify-between">
              <div>
                <p className="opacity-50 mb-2 text-[2vw]/[2vw]">
                  (Description)
                </p>
                <p className="text-[3vw]/[3.5vw]">
                  {props.description}
                  {/* A clean, straightforward website built for a Toronto-based
                      waterproofing company, focusing on clarity, ease of navigation, and
                      professional presentation. */}
                </p>
              </div>
              <div className="group">
                <div className="mt-5 flex justify-between opacity-50 group-hover:opacity-100 ease-in-out duration-500">
                  <p className="text-[2vw]/[2vw]">Visit Site</p>
                  <p className="text-[2vw]/[2vw]">→</p>
                </div>
                <div className="w-full h-[1px] mt-2 relative">
                  <div className="absolute top-0 left-0 h-full w-full opacity-50 bg-white"></div>
                  <div className="absolute top-0 left-0 h-full w-[0%] bg-white group-hover:w-full duration-500 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between items-center mt-5">
          <div className="title-web">
            <p className="opacity-50">(Project)</p>
            <h2 className="text-[5vh]/[5.5vh] ">{props.title}</h2>
          </div>
        </div>
        <div className="mt-5 desc-web">
          <p className="opacity-50">(Description)</p>
          <p className="text-[5vh]/[5.5vh]">
            {props.description}
            {/* A clean, straightforward website built for a Toronto-based
              waterproofing company, focusing on clarity, ease of navigation, and
              professional presentation. */}
          </p>
        </div>
        <a href={props.link} target="_blank">
          <div className="group">
            <div className="mt-5 flex justify-between opacity-50 group-hover:opacity-100 ease-in-out duration-500">
              <p className="">Visit Site</p>
              <p>→</p>
            </div>
            <div className="w-full h-[1px] mt-2 relative">
              <div className="absolute top-0 left-0 h-full w-full opacity-50 bg-white"></div>
              <div className="absolute top-0 left-0 h-full w-[0%] bg-white group-hover:w-full duration-500 ease-in-out"></div>
            </div>
          </div>
        </a>
        <div>
          <p className="mt-10 opacity-50">(Role)</p>
          <p className="text-[5vh]/[5.5vh]">UI/UX & Development</p>
        </div>
        <div className="flex items-center flex-col">
          <div>
            <p className="mt-5 opacity-50">(Video)</p>
            <video
              src={props.video}
              autoPlay
              playsInline
              loop
              muted
              preload="none"
              className="mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
