import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";

function Numbers() {
  const [count, setCount] = useState(false);
  useEffect(() => {
    AOS.init({duration:1000})
  },[]);
  return (
    <>
      <div className="bg-zinc-600 text-center sm:text-[3vw] text-[7vw] ">
        <h1 className="koushuku font-serif" data-aos="fade-down">Our Numbers</h1>
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className="flex flex-col sm:flex-row sm:justify-around sm:mx-auto sm:space-y-0 am:ml-0 ml-[30vw] text-center space-y-10 pt-2 pb-10">
            <div className="bg-slate-900 hover:bg-slate-500 cursor-pointer sm:h-[10vw] h-[25vw] sm:w-[16vw] w-[40vw] rounded-lg"
                 data-aos="fade-down">
              <h1 className="sm:pt-8 pt-5  text-white sm:text-[2.4vw] text-[6vw]  ">
                {count && (
                  <CountUp start={0} end={98} duration={2.75}></CountUp>
                )}
                %
              </h1>
              <p className="text-slate-300 sm:text-[1.2vw] text-[3vw] ">
                Customer Satisfaction Rate
              </p>
            </div>
            <div className="bg-slate-900 hover:bg-slate-500 cursor-pointer sm:h-[10vw] h-[25vw] sm:w-[16vw] w-[40vw] rounded-lg" data-aos="fade-down">
              <h1 className="sm:pt-8 pt-5 text-white sm:text-[2.4vw] text-[6vw]  ">
                {count && (
                  <CountUp start={0} end={20} duration={4.75}></CountUp>
                )}
                +
              </h1>
              <p className="text-slate-300 sm:text-[1.2vw] text-[3vw] ">
                Number of Branches
              </p>
            </div>
            <div className="bg-slate-900 hover:bg-slate-500 cursor-pointer sm:h-[10vw] h-[25vw] sm:w-[16vw] w-[40vw] rounded-lg" data-aos="fade-down">
              <h1 className="sm:pt-8 pt-5 text-white sm:text-[2.4vw] text-[6vw]  ">
                {count && (
                  <CountUp start={0} end={100} duration={6.75}></CountUp>
                )}
                +
              </h1>
              <p className="text-slate-300 sm:text-[1.2vw] text-[3vw] ">
                Certified Instructors
              </p>
            </div>
            <div className="bg-slate-900 hover:bg-slate-500 cursor-pointer sm:h-[10vw] h-[25vw] sm:w-[16vw] w-[40vw] rounded-lg" data-aos="fade-down">
              <h1 className="sm:pt-8 pt-5 text-white sm:text-[2.4vw] text-[6vw]  ">
                {count && (
                  <CountUp start={0} end={80} duration={5.75}></CountUp>
                )}
                %
              </h1>
              <p className="text-slate-300 sm:text-[1.2vw] text-[3vw] ">
                Success Rate in Competitions
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Numbers;
