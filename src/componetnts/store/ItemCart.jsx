import React from "react";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../redux/Slices/CartSlice";

function ItemCart({ id, pname, price, src, qty }) {
  const dispatch = useDispatch();
  return (
    <div className="shadow shadow-slate-300 p-[2px] text-wrap">
      <div className="flex">
        <img
          src={src}
          alt={pname}
          className="sm:w-[7vw] w-[25vw] sm:h-[7vw] h-[25vw]"
        />
        <div className="flex justify-between sm:text-[1vw] text-[5vw] ml-2">
          <div className="sm:mt-[2vw] mt-[5vw] ml-[1vw] ">
            <h1 className="name">{pname}</h1>
            <div className="flex gap-2 mt-[1vw]">
              <LuMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
                className="mt-1 border-gray-600 border  cursor-pointer hover:bg-slate-600 hover:text-white "
              />
              <h1 className="quntity">{qty}</h1>
              <FiPlus
                onClick={() =>
                  qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
                }
                className="mt-1 border-gray-600 border cursor-pointer hover:bg-slate-600 hover:text-white "
              />
            </div>
          </div>
          <div className="sm:mt-[2.5vw] mt-[6vw] absolute sm:right-8 right-1">
            <h1
              onClick={() =>
                dispatch(removeFromCart({ id, pname, price, qty, src }))
              }
              className="delete ml-[1vw] cursor-pointer"
              id="delete_from_cart"
            >
              <MdDelete />
            </h1>
            <div className="mt-[1vw] -ml-[1vw]">
              <h1 className="price text-green-700">₹{price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
