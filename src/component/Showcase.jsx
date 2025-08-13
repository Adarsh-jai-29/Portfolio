import React from "react";
import { TypeAnimation } from "react-type-animation";

import AdarshJaiswalResume from "./../assets/images/AdarshJaiswalResume.pdf";
import AdarshPic from "../assets/images/adarsh-pic.jpg";
import { Download } from "lucide-react";

export default function Showcase() {
  return (
    <>
      <main className="showcase">
        <div className="flex flex-col items-center justify-center">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white tracking-[2px] mb-4">
          Hi,My name is
          <span className="purple"> Adarsh</span>
          <div className="div">and I am a passionate</div>
          <div className="purple">
            {" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "JavaScript Developer",
                2000,
                "React Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
          <div>
           <a
                href={AdarshJaiswalResume}
                download="AdarshJaiswalResume.pdf"
                className="flex  justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl m-auto mt-6 p-1 min-w-[96px] w-[12vw] items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
            Resume&nbsp; <Download />
              </a>
          </div>
          </div>
        {/* <a href="#">See Resume</a> */}
        <div className="picture">
          <img src={AdarshPic} />
        </div>
      </main>
      <hr />
      
    </>
  );
}
