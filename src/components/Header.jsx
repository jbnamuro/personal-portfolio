import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useFont from "./useFont";
import { SplitText } from "gsap/SplitText";
import { useLenis } from "lenis/react";

const Header = () => {
  const menuCont = useRef(null);
  const [menu, openMenu] = useState(false);
  const [clickable, changeClick] = useState(false);
  const font = useFont();

  // Store SplitText instances to prevent recreation
  const splitTextRefs = useRef({
    purp: null,
    navigate: null,
    connect: null,
    hello: null,
  });

  //     if (clickable) {
  //     openMenu(false);
  //     // console.log(menu);
  //     changeClick(false);
  //   }
  // }}

  const lenis = useLenis();
  const scrollToSection = (target) => {
    if (clickable) {
      if (lenis) {
        lenis.scrollTo(`#${target}`, {
          duration: 1,
        });
        openMenu(false);
        // console.log(menu);
        changeClick(false);
      }
    }
  };

  useGSAP(
    () => {
      if (!font) return;

      // Create SplitText instances only once
      if (!splitTextRefs.current.purp) {
        splitTextRefs.current.purp = SplitText.create(".purp", {
          type: "words",
          mask: "words",
        });
        splitTextRefs.current.navigate = SplitText.create(".navigate", {
          type: "words",
          mask: "words",
        });
        splitTextRefs.current.connect = SplitText.create(".connect", {
          type: "words",
          mask: "words",
        });
        splitTextRefs.current.hello = SplitText.create(".hello", {
          type: "words",
          mask: "words",
        });
      }

      const { purp, navigate, connect, hello } = splitTextRefs.current;

      if (menu) {
        gsap.set(".menu", {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        let opentl = gsap.timeline({
          onComplete: () => {
            changeClick(true);
          },
        });
        opentl.set(".menu", {
          visibility: "visible",
        });
        opentl.to(".menu", {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 0.7,
          ease: "power2.inOut",
        });
        opentl.from(
          purp.words,
          {
            yPercent: 100,
            stagger: {
              from: "end",
              amount: 0.12,
            },
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
        opentl.from(
          navigate.words,
          {
            yPercent: 100,
            stagger: {
              from: "end",
              amount: 0.1,
            },
            duration: 0.8,
            ease: "power4.out",
          },
          "<"
        );
        opentl.from(
          connect.words,
          {
            yPercent: 100,
            stagger: {
              from: "end",
              amount: 0.1,
            },
            duration: 0.8,
            ease: "power4.out",
          },
          "<"
        );
        opentl.from(
          hello.words,
          {
            yPercent: 100,
            stagger: {
              from: "end",
              amount: 0.1,
            },
            duration: 0.8,
            ease: "power4.out",
          },
          "<"
        );
      }
      if (!menu) {
        let closemenu = gsap.timeline({
          onComplete: () => {
            changeClick(true);
          },
        });
        closemenu.to(".menu", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.7,
          ease: "power2.inOut",
        });
        closemenu.set(".menu", {
          visibility: "hidden",
        });
      }
    },
    { dependencies: [menu, font], scope: menuCont }
  );

  // Cleanup SplitText instances on unmount
  useGSAP(
    () => {
      return () => {
        Object.values(splitTextRefs.current).forEach((splitText) => {
          if (splitText) {
            splitText.revert();
          }
        });
      };
    },
    { scope: menuCont }
  );

  return (
    <div
      ref={menuCont}
      className="fixed top-0 left-0 w-full z-100 flex justify-between px-5 py-2 text-xl"
    >
      <div className="h-svh w-full absolute top-0 left-0 menu invisible flex flex-col bg-black">
        <p
          className="underline px-5 py-2 self-end cursor-pointer"
          onClick={() => {
            if (clickable) {
              openMenu(false);
              // console.log(menu);
              changeClick(false);
            }
          }}
        >
          Close
        </p>
        <div className=" px-5 h-full flex flex-col justify-around">
          <div className="purp">
            <p className="opacity-50 text-[3vh]">(Philosophy)</p>
            <h3 className="text-[6vh]">
              Purposeful <br /> Design <br /> Beautiful <br /> Aesthetics
            </h3>
          </div>
          <div className="w-full bg-white h-[1px] opacity-50"></div>
          <div className="">
            <div className="flex justify-between">
              <div className="text-[4vh] navigate">
                <p className="opacity-50 text-[3vh]">Navigate (04)</p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection("projects");
                  }}
                >
                  Projects
                </p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection("about");
                  }}
                >
                  About
                </p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection("offers");
                  }}
                >
                  Offers
                </p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </p>
              </div>
              <div className="text-[4vh] connect">
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
            <div className="mt-10 hello">
              <p className="opacity-50 text-[3vh]">Say hello (1)</p>
              <p className="text-[4vh]">jabarinamuro@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="relative z-100"></p>
      <p
        className="underline cursor-pointer"
        onClick={() => {
          if (clickable) {
            openMenu(true);
            // console.log(menu);
            changeClick(false);
          }
        }}
      >
        Menu
      </p>
    </div>
  );
};

export default Header;
