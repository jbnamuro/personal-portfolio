import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Project = (props) => {
  useGSAP(() => {}, []);

  return (
    <div className="border-r-1 relative testing border-y-1 border-[rgba(255,255,255,0.3)] group hover:bg-white hover:text-black ease-in duration-150 h-150 min-w-full min-[600px]:min-w-100 2xl:min-w-1/4 flex flex-col justify-center items-center">
      <div className="h-1/2 flex justify-center w-full items-center">
        <img
          src={props.image}
          alt={props.title}
          className="group-hover:invert w-1/4"
        />
      </div>
      <div className=" w-full px-5 h-1/2 py-5 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl mb-2">{props.title}</h2>
          <p className="text-sm leading-relaxed">{props.description}</p>
          {props.tags && props.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {props.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-current rounded-full px-2 py-0.5 opacity-60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {props.link && (
          <Link
            to={props.link}
            className="cursor-pointer rounded-3xl border hover:bg-black ease-in duration-150 hover:text-white group-hover:border-black border-white px-4 py-2 w-fit absolute bottom-5"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
