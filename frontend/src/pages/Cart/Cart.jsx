import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mt-[100px]">
      <div>
        <div className="grid grid-cols-cartGrid items-center text-small text-gray-600">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="my-3 grid grid-cols-cartGrid items-center text-small text-black">
                  <img src={item.image} alt="" className="w-[50px]" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    X
                  </p>
                </div>
                <hr className="h-px border-none bg-[#e2e2e2]" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-20 flex justify-between gap-12vw phone:flex-col-reverse">
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="text-xl">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button
            onClick={() => navigate("/orders")}
            className="w-checkout cursor-pointer rounded-sm bg-red-500 py-3 text-sm text-white"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-[#555]">
              If you have a promo code, enter it here
            </p>
            <div className="mt-3 flex items-center justify-between rounded-md bg-[#eaeaea]">
              <input
                type="text"
                className="bg-transparent ps-3 focus:outline-none"
                placeholder="Promo code"
              />
              <button className="w-promoButton rounded-md bg-black px-[5px] py-[12px] text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
