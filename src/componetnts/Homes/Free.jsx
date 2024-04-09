import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Free() {
  useEffect((f) => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="bg-gray-900 bg-opacity-100 flex p-10 free  text-black ">
        <h1
          className="sm:text-[3vw] text-[7vw] font-serif"
          data-aos="fade-down"
        >
          Now, it’s time for you to try out our FREE <br />
          <samp
            className="text-left sm:ml-[40vw] ml-[0vw]"
            data-aos="fade-down"
          >
            trial lesson!
          </samp>
        </h1>
        <button
          className="b2 sm:h-[5vw] h-[15vw] bg-gray-900 w-[60vw] sm:w-[10vw]  rounded-xl border text-white p-3 ml-[10vw] sm:mt-0 mt-[33vw] sm:text-[1.2vw] text-[3vw]"
          data-aos="fade-down"
        >
          GET STARTED
        </button>
      </div>
    </>
  );
}

export default Free;
