import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import StoreHome from "./store/StoreHome";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { isAuthenticated, user } = useAuth0();

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="bg-gray-900 bg-opacity-90 text-center justify-center sticky top-0 z-20">
        <h1 className="font-bold text-[5vw] sm:text-[2.2vw] shadow-blue">
          KOUSHUKU MARTIAL ARTS SCHOOL
        </h1>
      </div>
      <header className="bg-gray-700 bg-opacity-80 sm:text-[1.2vw] text-[3vw] text-white z-10">
        <ul
          className={`sm:flex gap-6 block ${
            isMenuOpen ? "hidden" : "sm:hidden"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition-all p-3 hover:bg-gray-600 hover:text-black ${
                isActive ? "text-black" : "text-white"
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/Admisson"
            className={({ isActive }) =>
              `sm:flex block cursor-pointer hover:text-black transition-all p-3 hover:bg-gray-600 ${
                isActive ? "text-black" : "text-white"
              }`
            }
          >
            ADMISSION FORM
          </NavLink>
          <NavLink
            to="/Exam"
            className={({ isActive }) =>
              `sm:flex block cursor-pointer hover:text-black transition-all p-3 hover:bg-gray-600 ${
                isActive ? "text-black" : "text-white"
              }`
            }
          >
            EXAM FORM
          </NavLink>
          <NavLink
            className="relative cursor-pointer hover:text-black transition-all p-3 hover:bg-gray-600"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <div className="flex">
              TRAINING
              <div className="relative top-2 left-1">
                <FaAngleDown />
              </div>
            </div>
            <ul
              className={`${
                isDropdownOpen ? "block sm:flex sm:flex-wrap" : "hidden"
              } absolute top-full sm:-left-36 left-2 bg-gray-700 bg-opacity-100 sm:w-[60vw] w-[25vw] shadow-md border-black rounded-2xl overflow-hidden z-20`}
            >
              <li className="w-1/2 sm:w-1/3 p-3 hover:bg-gray-600 hover:text-black text-white ">
                Mix Martial Arts(MMA)
              </li>
              <li className="w-1/2 sm:w-1/3 p-3 hover:bg-gray-600 hover:text-black text-white">
                Kickboxing
              </li>
              <li className="w-full sm:w-1/3 p-3 hover:bg-gray-600 hover:text-black text-white">
                Kung fu
              </li>
              <li className="w-full sm:w-1/3 p-3 hover:bg-gray-600 hover:text-black text-white">
                Karate
              </li>
              <li className="w-full sm:w-1/3 p-3 hover:bg-gray-600 hover:text-black text-white">
                Teakwondo
              </li>
              <li className="w-full sm:w-1/3 p-3 hover:bg-gray-600 hover:text-black text-white">
                Others
              </li>
            </ul>
          </NavLink>
          <NavLink
            to="/OurBranch"
            className={({ isActive }) =>
              `sm:flex block cursor-pointer hover:text-black transition-all p-3 hover:bg-gray-600 ${
                isActive ? "text-black" : "text-white"
              }`
            }
          >
            OUR BRANCH
          </NavLink>
          <NavLink
            to="/StoreHome"
            className={({ isActive }) =>
              `sm:flex block cursor-pointer hover:text-black transition-all p-3 hover:bg-gray-600 ${
                isActive ? "text-black" : "text-white"
              }`
            }
          >
            STORE
          </NavLink>
          <NavLink
            to="/Aboutus"
            className={({ isActive }) =>
              `sm:flex block cursor-pointer hover:text-black transition-all p-3 hover:bg-gray-600 ${
                isActive ? "text-black" : "text-white"
              }`
            }
          >
            ABOUT US
          </NavLink>
          <li className="mt-[0.6vw] absolute right-0 text-cyan-500">
            {/* <img src={user.profile} alt="" /> */}
            {isAuthenticated && <p>Uid: {user.name}</p>}
          </li>
        </ul>
        <li className={`${isMenuOpen ? "sm:hidden block" : "hidden"}`}>
          {/* Your menu items for mobile view */}
        </li>
        <li
          onClick={toggleMenu}
          className="sm:hidden block absolute right-0 top-10 text-[10vw] z-50 cursor-pointer text-violet-950"
        >
          <GrMenu />
        </li>
      </header>
    </>
  );
}

export default Header;
