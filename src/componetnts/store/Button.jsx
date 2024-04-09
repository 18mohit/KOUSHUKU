import React from "react";
import StoreData from "./StoreData";
import AOS from "aos";
// import "aos/dist/aos.css";

function Button({ menuItem, filterItems, setItems }) {
  // Filter out unique categories
  const uniqueCategories = Array.from(
    new Set(menuItem.map((item) => item.category))
  );

  return (
    <>
      <div className="bg-slate-800 sm:text-[1.8vw] text-[4vw]">
        <div
          // data-aos="fade-down"
          // data-aos-delay="100"
          className="flex justify-center"
        >
          <button
            className="hover:bg-slate-600 p-4 text-white "
            onClick={() => setItems(StoreData)}
          >
            All
          </button>

          {uniqueCategories.map((category, index) => (
            <button
              key={index} // Using index as key because there may be duplicate categories
              className="hover:bg-slate-600 p-4 text-white "
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Button;
