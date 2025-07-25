import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const Learn = (props) => {
  return (
    <div className="px-5 py-8 relative text-[2vh]/[2vh] md:text-[2vw]/[2vw] md:h-svh md:min-h-[50vw] lg:text-2xl">
      <div className="flex justify-between">
        <Link to="/" className="underline">
          ← Return
        </Link>
        <Link to={props.next} className="underline">
          Next →
        </Link>
      </div>

      <div className="hidden md:block mt-8">
        <div className="h-fit flex flex-col justify-between">
          <div className="title-web flex">
            <div className="mr-4 w-[30%]">
              <p className="opacity-50 text-[2vw]/[2.5vw] lg:text-2xl font-light">
                (Project)
              </p>
              <h2 className="text-[3vw]/[3vw] mt-2 lg:text-4xl">
                {props.title}
              </h2>
            </div>
            <div className="w-[70%] pl-2">
              <p className="opacity-50 text-[2vw]/[2.5vw] lg:text-2xl font-light">
                (Role)
              </p>
              <p className="text-[3vw]/[3vw] mt-2 lg:text-4xl">
                UI/UX & Development
              </p>
            </div>
          </div>

          <div className="absolute p-5 bottom-0 left-0 mt-20 flex desc-web">
            <div className="min-w-[30%] overflow-hidden">
              <p className="opacity-50 text-[2vw]/[2vw] lg:text-2xl font-light">
                (Video)
              </p>
              <video
                src={props.video}
                autoPlay
                playsInline
                loop
                muted
                preload="none"
                className="mt-5 max-h-100 w-[100%] max-w-100"
              />
            </div>
            <div className="min-w-[70%] pl-4 flex flex-col justify-between">
              <div>
                <p className="opacity-50 lg:text-2xl mb-2 text-[2vw]/[2vw] font-light">
                  (Description)
                </p>
                <p className="text-[3vw]/[3.5vw] lg:text-4xl font-light">
                  {props.description}
                  {/* A clean, straightforward website built for a Toronto-based
                        waterproofing company, focusing on clarity, ease of navigation, and
                        professional presentation. */}
                </p>
              </div>
              <a href={props.link} target="_blank">
                <div className="group">
                  <div className="mt-5 flex justify-between opacity-50 group-hover:opacity-100 ease-in-out duration-500">
                    <p className="text-[2vw]/[2vw] lg:text-2xl">Visit Site</p>
                    <p className="text-[2vw]/[2vw] lg:text-2xl">→</p>
                  </div>
                  <div className="w-full h-[1px] mt-2 relative">
                    <div className="absolute top-0 left-0 h-full w-full opacity-50 bg-white"></div>
                    <div className="absolute top-0 left-0 h-full w-[0%] bg-white group-hover:w-full duration-500 ease-in-out"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between items-center mt-5">
          <div className="title-web">
            <p className="opacity-50 text-[2vh]/[2vh] mt-5 font-light">
              (Project)
            </p>
            <h2 className="text-[5vh]/[5.5vh]">{props.title}</h2>
          </div>
        </div>
        <div className="mt-5 desc-web">
          <p className="opacity-50 text-[2vh]/[2vh] font-light">
            (Description)
          </p>
          <p className="text-[4vh]/[4.5vh] font-light">
            {props.description}
            {/* A clean, straightforward website built for a Toronto-based
                waterproofing company, focusing on clarity, ease of navigation, and
                professional presentation. */}
          </p>
        </div>
        <a href={props.link} target="_blank">
          <div className="group">
            <div className="mt-5 flex justify-between opacity-50 group-hover:opacity-100 ease-in-out duration-500">
              <p className="text-[2vh]/[2vh]">Visit Site</p>
              <p className="text-[2vh]/[2vh]">→</p>
            </div>
            <div className="w-full h-[1px] mt-2 relative">
              <div className="absolute top-0 left-0 h-full w-full opacity-50 bg-white"></div>
              <div className="absolute top-0 left-0 h-full w-[0%] bg-white group-hover:w-full duration-500 ease-in-out"></div>
            </div>
          </div>
        </a>
        <div>
          <p className="mt-10 opacity-50 text-[2vh]/[2vh] font-light">(Role)</p>
          <p className="text-[5vh]/[5.5vh]">UI/UX & Development</p>
        </div>
        <div className="flex items-center flex-col">
          <div>
            <p className="mt-5 opacity-50 text-[2vh]/[2vh] font-light">
              (Video)
            </p>
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
