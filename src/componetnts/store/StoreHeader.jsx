import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import { FaStore } from "react-icons/fa6";
import StoreData from "./StoreData";

function StoreHeader({ menuItems }) {
  const [isMenuStore, setIsMenuStore] = useState(true);

  const toggleMenu = () => {
    setIsMenuStore(!isMenuStore);
  };

  return (
    <>
      <header className="bg-gray-800 bg-opacity-90 sm:text-[2vw] text-[3vw] text-sky-500 z-10">
        <div
          className={`sm:flex gap-6 block ${
            isMenuStore ? "hidden" : "sm:hidden"
          }`}
        >
          <div className={`cursor-auto transition-all p-3 `}>
            <div className="flex gap-2">
              {menuItems.map((val) => (
                <button className="w-10">{val}</button>
              ))}
            </div>
          </div>
        </div>
        
      </header>
    </>
  );
}

export default StoreHeader;
