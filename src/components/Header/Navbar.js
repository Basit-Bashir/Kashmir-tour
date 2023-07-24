import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../Assets/logo.png";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  const navLinks = [
    { title: "Places", to: "places" },
    { title: "Plans", to: "plans" },
    { title: "Gallery", to: "gallery" },
    { title: "Contact", to: "contact" },
  ];
  return (
    <>
      <section className="space-x-4 p-6 bg-gradient-to-b from-green-500">
        <div className="flex place-items-center justify-between bg-transparent">
          <img src={img} alt="pic" className="h-14 w-auto" />
          <div className="hidden md:flex gap-8 bg-transparent">
            {navLinks.map(({ title, to }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="active"
                className="bg-transparent rounded-lg border-black px-3 py-2 transition-all duration-500 hover:bg-black hover:text-white cursor-pointer tracking-widest text-xl"
              >
                {title}
              </Link>
            ))}
          </div>
          <div className="md:hidden bg-transparent text-xl">
            <button onClick={toggleNavBar}>
              {isOpen ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className="bg-transparent text-2xl"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHamburger}
                  className="bg-transparent text-2xl text-green-900"
                />
              )}
            </button>
          </div>
        </div>
      </section>
      <div
        className={`flex flex-col items-center transition-all duration-500 ease-in-out bg-gradient-to-b from-green-500 ${
          isOpen ? "opacity-100 max-h-screen " : "opacity-0 max-h-0"
        }`}
      >
        {navLinks.map(({ title, to }) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            className="bg-transparent rounded-lg px-3 py-2 transition-all duration-500 hover:bg-black hover:text-white cursor-pointer tracking-widest text-xl"
          >
            {title}
          </Link>
        ))}
      </div>
    </>
  );
};
export default Navbar;
