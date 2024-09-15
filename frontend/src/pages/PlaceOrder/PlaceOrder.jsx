import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="mt-[100px] flex items-start justify-between gap-12">
      <div className="w-full max-w-placeOrderLeft">
        <p className="mb-12 text-[30px] font-semibold">Delivery Information</p>
        <div className="flex gap-3">
          <input
            className="mb-4 w-full rounded-md border border-[#c5c5c5] p-[10px] outline-red-500"
            type="text"
            placeholder="First name"
          />
          <input
            className="mb-4 w-full rounded-md border border-[#c5c5c5] p-[10px] outline-red-500"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="mb-4 w-full rounded-md border border-[#c5c5c5] p-[10px] outline-red-500"
          type="email"
          placeholder="Email address"
        />
        <input
          className="mb-4 w-full rounded-md border border-[#c5c5c5] p-[10px] outline-red-500"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="mb-4 w-full rounded-md border border-[#c5c5c5] p-[10px] outline-red-500"
            type="text"
            placeholder="City"
          />
          <input
            className="mb-4 w-full rounded-md border border-[#c5c5c5] p-[10px] outline-red-500"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="mb-4 w-full rounded-md border border-[#c5c5c5] p-[10px] outline-red-500"
            type="text"
            placeholder="Zip code"
          />
          <input
            className="mb-4 w-full rounded-md border border-[#c5c5c5] p-[10px] outline-red-500"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="mb-4 w-full rounded-md border border-[#c5c5c5] p-[10px] outline-red-500"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="w-full max-w-placeOrderRight">
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
          <button className="mt-8 w-checkout cursor-pointer rounded-sm bg-red-500 py-3 text-sm text-white">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
