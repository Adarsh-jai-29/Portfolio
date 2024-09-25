import React from "react";
import { TypeAnimation } from "react-type-animation";

import AdarshJaiswalResume from "../images/AdarshJaiswalResume.pdf";
import AdarshPic from "../images/adarsh-pic.jpg";

export default function Showcase() {
  return (
    <>
      <main className="showcase">
        <div className="text">
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
          <div>
            <a
              href={AdarshJaiswalResume}
              download=""
              className="download-resume-btn"
              id="download-resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* <a href="#">See Resume</a> */}
        <div className="picture">
          <img src={AdarshPic} />
        </div>
      </main>
      <hr />
      <h1 className="my-pr text">My PROjects...</h1>
    </>
  );
}
