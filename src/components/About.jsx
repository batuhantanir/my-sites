import React from "react";
import code from "../assets/img/code.jpg";

const About = () => {
  return (
    <div id="about" className="wow bg-[#2dcefa] xl:h-screen  items-center ">
      <h3 className="text-center pt-4 xl:mb-18  xl:mb-28 font-semibold text-xl md:pt-8 lg:text-2xl shadow-black text-shadow shadow-black-400 animate__animated animate__zoomIn ">
        About
      </h3>
      <div className=" grid gap-x-8 gap-y-4 border-none px-8 grid-cols-1 grid-rows-2  lg:px-24   md:px-16 md:gap-y-6 sm:px-10 sm:grid-cols-2 sm:grid-rows-1 items-center ">
        <div className=" wow border-4 rounded mt-6 sm:my-6 sm:row-start-2 animate__animated animate__zoomInLeft">
          <img src={code} alt="code img" />
        </div>
        <div className="wow row-start-2 sm:my-6 text-xl animate__animated  animate__zoomInRight">
          <p>
            Hello, <span className="text-[#20232A]">I'm Batuhan TANIR.</span>{" "}
            React Frontend Developing yourself as a developer working and
            passionate about these topics I am. Created by teamwork to take
            projects to the next level. I like to be on the front lines. A
            valuable asset to companies and organizations I look forward to the
            opportunity to contribute. you can{" "}
            <a href="#contact" className="text-red-500 hover:text-red-700">
              contact me
            </a>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
