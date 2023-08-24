import React from "react";

const Navbar = () => {
  let Links = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="border-b-2 border-black flex justify-between items-center py-4 px-8 bg-[#20232A] lg:px-24  md:px-16 sm:px-10 ">
      <a href="/" className=" text-md sm:text-xl animate__animated animate__backInDown">
        Developer
      </a>
      <ul className="flex flex-end items-center animate__animated animate__backInDown ">
        {Links.map((link, idx) => (
          <li
            className="ml-4 text-md sm:text-xl hover:animate-pulse transition duration-150 ease-out "
            key={idx}
          >
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
