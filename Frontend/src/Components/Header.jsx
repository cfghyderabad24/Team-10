import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className=" bg-black mx-auto flex justify-between items-center p-4 shadow-sm">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-bold">
          Team 10
        </h1>
      </div>

      {/* Profile button */}
      <button className="text-white hidden md:flex items-center py-2 px-5 rounded-full hover:bg-gray-900 transition-colors">
        Profile
      </button>

      {/* Mobile Menu */}
      {nav && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" onClick={() => setNav(false)}></div>
      )}

      {/* Side drawer menu */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-20 transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <AiOutlineClose
          onClick={() => setNav(false)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 font-bold"></h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li
              className="text-xl flex cursor-pointer w-full rounded-full p-2 hover:text-white hover:bg-black transition-colors"
              onClick={() => {
                setNav(false);
                navigate('/home');
              }}
            >
              Home
            </li>
            <li
              className="text-xl flex cursor-pointer w-full rounded-full p-2 hover:text-white hover:bg-black transition-colors"
              onClick={() => {
                setNav(false);
                navigate('/about');
              }}
            >
              About
            </li>
            <li
              className="text-xl flex cursor-pointer w-full rounded-full p-2 hover:text-white hover:bg-black transition-colors"
              onClick={() => {
                setNav(false);
                navigate('/help');
              }}
            >
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

