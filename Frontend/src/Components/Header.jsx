import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm bg-white">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-bold">
          Team 10
        </h1>
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-center w-full sm:w-auto">
        <div className="bg-gray-100 rounded-full flex items-center px-4 py-2 w-full sm:w-[400px] lg:w-[500px] shadow-md border border-gray-300">
          <AiOutlineSearch size={20} className="text-gray-500 mr-2" />
          <input
            className="bg-transparent p-2 w-full focus:outline-none text-gray-700"
            type="text"
            placeholder="Search Projects"
          />
        </div>
      </div>

      {/* Profile button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 px-5 rounded-full hover:bg-gray-800 transition-colors">
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

