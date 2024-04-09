import React, { useState } from "react";
import StoreData from "./StoreData";
import ItemCart from "./ItemCart";
import { useDispatch, useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [activeCart, setActiveCart] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  dispatch({ type: "cart/initializeqty", payload: { qty: 2 } });

  console.log(cartItems);

  const toastHandler = () => {
    // <ToastContainer />
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    console.log("tosted");
    // dibugger;
  };
  return (
    <>
      <ToastContainer />
      <div
        className={`cartH z-20 translate-full duration-700 translate-x-0 fixed right-0 top-0 w-[80vw] sm:w-[25vw] h-full overflow-y-auto overflow-x-hidden bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between sticky top-0 bg-slate-300">
          <h1 className="font-bold  text-[2vw]">My Cart</h1>
          <h1 className="mr-3">Total item :{totalQty} </h1>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <ItemCart
                key={item.id}
                id={item.id}
                pname={item.pname}
                price={item.price}
                qty={item.qty}
                src={item.src}
                toastHandler={toastHandler}
              />
            );
          })
        ) : (
          <h1 className="text-center text-xl pt-[16.6vw] pb-[16.6vw]">
            No items in the cart.
          </h1>
        )}

        <div className={`sticky top-[95vh]`}>
          <h1 className="p-3 text-green-600 bg-slate-300">
            Total Ammount :{totalPrice} ₹{" "}
          </h1>
          <div className=" grid grid-cols-2 font-mono text-[4vw] sm:text-[1.3vw]">
            <button
              onClick={() => setActiveCart(!activeCart)}
              className="bg-yellow-600 p-4 w-[40vw] sm:w-[12.5vw]  "
            >
              Close
            </button>
            <button className="bg-gray-800 p-4 w-[40vw] sm:w-[12.5vw] ">
              Payment
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setActiveCart(!activeCart)}
        className="fixed bottom-[1vw] right-0 mr-[3vw] sm:text-[3vw] cursor-pointer"
      >
        <div className="sm:w-[1.5vw] sm:h-[1.5vw] w-[4vw] h-[4vw] bg-red-800 rounded-full sm:-ml-[0.5vw] -ml-[0.9vw] -mb-[0.3vw] sm:text-[1vw] text-[4vw]">
          <h1 className="sm:pl-2 p-0">{totalQty}</h1>
        </div>
        <MdShoppingCart className="text-[10vw] sm:text-[3vw]" />
      </div>
    </>
  );
}

export default Cart;
