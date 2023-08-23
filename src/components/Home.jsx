import React from "react";
//IMAGE
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";
import gmail from "../assets/img/gmail.png";
import instagram from "../assets/img/instagram.png";
import profile from "../assets/img/c4fa5642-5148-40eb-8198-95a653f40e65.jpg";

const Home = () => {
  const socialMedia = [
    {
      name: "linkedin",
      img: linkedin,
      link: "https://www.linkedin.com/in/batuhan-tanir/",
    },
    { name: "github", img: github, link: "https://github.com/batuhantanir" },
    { name: "gmail", img: gmail, link: "mailto:batuhan.tanir00@gmail.com" },
    {
      name: "instagram",
      img: instagram,
      link: "https://www.instagram.com/36batu/",
    },
  ];

  return (
    <div className="grid grid-rows-1 grid-cols-2 sm:auto-rows-auto justify-between items-center p-6 text-white border-y  bg-[#14c8f9] border-none px-8  lg:px-24 md:px-16 sm:px-10 xl:h-screen  ">
      <div className=" mx-8 animate__animated animate__backInLeft ">
        <p className=" grid mb-1 xl:text-5xl lg:text-3xl sm:text-xl mb-4 ">
          Hi,{" "}
          <span className=" inline-block font-bold xl:text-9xl lg:text-6xl sm:text-3xl drop-shadow-xl shadow-black text-shadow-lg shadow-black-500 text-[#20232A]">
            I'm Batuhan,
          </span>{" "}
          Jr.React Web Developer
        </p>
        <ul className="grid grid-rows-1 grid-cols-8 items-center xl:grid-cols-12 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-6  ">
          {socialMedia.map((sm, idx) => (
            <a
              href={sm.link}
              target="_blank"
              className=" hover:mb-2 shadow-black shadow-lg hover:shadow-none p-1 mx-0.5  bg-white rounded-full lg:h-18 md:w-12 sm:w-9 ease-in duration-300 hover:bg-[#414755]"
              key={idx}
            >
              <img
                className="w-9 lg:h-18 lg:p-1 md:w-12 md:px-0.5 sm:w-9 sm:p-px "
                src={sm.img}
                alt={sm.name}
              />
            </a>
          ))}
        </ul>
      </div>
      <div className=" w-full border-4 rounded-md hover:rotate-6 transition-all duration-300 bg-white animate__animated animate__backInRight animate__slow ">
        <img src={profile} alt="profile Photo" />
      </div>
    </div>
  );
};

export default Home;
