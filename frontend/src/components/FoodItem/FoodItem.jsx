import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  const {cartItems, addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className="m-auto w-full animate-fadeIn rounded-2xl shadow-lg duration-300">
      <div className="relative">
        <img src={image} className="w-full rounded-t-2xl" alt="" />
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            className="absolute bottom-4 right-4 w-9 cursor-pointer rounded-full"
            alt=""
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-3 p-2 bg-white rounded-full">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              width={30}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              width={30}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex min-h-[50px] items-center justify-between">
          <p className="text-xl font-medium">{name}</p>
          <img src={assets.rating_starts} width={70} alt="" />
        </div>
        <p className="text-xs text-[#676767]">{description}</p>
        <p className="my-3 text-xl text-red-500">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
