import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const Learn = (props) => {
  return (
    <div className="m-5 text-[2.5vh]/[2.5vh]">
      <div className="flex justify-between">
        <Link to="/" className="">
          ← Return
        </Link>
        <Link to={props.next}>Next →</Link>
      </div>
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
      <div>
        <p className="mt-5 opacity-50">(Video)</p>
        <video
          src={props.video}
          autoPlay
          playsInline
          loop
          muted
          preload="none"
          className="mt-2 w-full"
        />
      </div>
    </div>
  );
};

export default Learn;
