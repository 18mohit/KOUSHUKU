import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import AOS from "aos";
// import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slices/CartSlice";

function Product({ src, pname, id, price, rating, item, toastHandler }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<IoStar key={i} />);
    }
    return stars;
  };
  
  const dispatch = useDispatch();
  console.log("toastHandler type:", typeof toastHandler); 
  return (
    <>
      <div className="bg-slate-500 bg-opacity-90 pb-10 pt-10">
        <div
          // data-aos="fade-down"
          // data-aos-delay="400"
          className="grid sm:grid-cols-4 grid-cols-2 sm:ml-[6vw] ml-[10vw] gap-10 "
        >
          {item.map((val) => (
            <div
              className="main bg-slate-600 w-[30vw] sm:w-[15vw] font-serif hover:shadow-2xl shadow-indigo-900 rounded-lg overflow-hidden"
              key={val.id}
            >
              <div className="w-[30vw] sm:w-[15vw] h-[28vw] sm:h-[16vw] bg-slate-700 object-cover">
                <img
                  className="img w-[30vw] sm:w-[15vw] h-[28vw] sm:h-[16vw] ;"
                  src={val.src}
                  alt={val.pname}
                />
              </div>
              <div className="sm:-mt-[3vw] -mt-[4vw]  flex text-[4vw] text-yellow-400 sm:ml-[10vw] ml-[15vw] ">
                {renderStars(val.rating)}
              </div>
              <h1 className="name sm:text-[1.5vw] text-[4vw] ">{val.pname}</h1>
              <div className="flex justify-between">
                <h1 className="price sm:text-[1.5vw] text-[4vw]">
                  ₹ {val.price}
                </h1>

                <button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        id: val.id,
                        price: val.price,
                        pname: val.pname,
                        src: val.src,
                        qty: 1,
                      })
                    );
                    toastHandler();
                    dibugger;
                  }}
                  id={val.btnid}
                  className="btn bg-slate-700 sm:text-[1.5vw] text-[2.5vw] sm:w-[6vw] w-[13vw] text-white cursor-pointer rounded-sm"
                >
                  BUY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
