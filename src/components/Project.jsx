import React from "react";
//IMAGE
import ValorantWiki from "../assets/img/Valorant Wiki.png";
import TodoList from "../assets/img/todolist.jpg";

const Project = () => {
  const projectsList = [
    {
      name: "Valorant wiki",
      gitHubLink: "https://github.com/batuhantanir/Valorant-Wiki",
      img: ValorantWiki,
    },
    {
      name: "Todo List",
      gitHubLink: "https://github.com/batuhantanir/Todo-List",
      img: TodoList,
    },
  ];
  return (
    <div
      id="projects"
      className=" bg-[#46d4fa] px-8  lg:px-24 md:px-16 sm:px-10 xl:h-screen items-center "
    >
      <h3 className="wow text-center pt-4 xl:mb-18  xl:mb-28 font-semibold text-xl md:pt-8 lg:text-2xl shadow-black text-shadow shadow-black-400 animate__animated animate__zoomIn ">
        Projects
      </h3>
      <div className="flex flex-wrap justify-center mt-2  ">
        {projectsList.map((project, idx) => (
          <div
            className="wow flex  items-center justify-center m-2 animate__animated animate__fadeInUp"
            key={idx}
          >
            <img
              src={project.img}
              alt={project.name}
              className="border-2 w-56 sm:w-72 lg:w-96 "
            />
            <div className="flex flex-col p-4  items-center absolute">
              <div className="relative shadow-black text-shadow shadow-black-500">
                {project.name}
              </div>
              <a
                href={project.gitHubLink}
                target="_blank"
                className="border bg-[#20232A] shadow-lg shadow-black absolute text-center rounded p-1 mt-8 relative  w-36 h-10 hover:m-6 hover:animate-bounce transition duration-500 ease-in"
              >
                Go And See Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
