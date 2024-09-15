import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

export const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="flex items-center justify-between py-5">
      <Link to={"/"}>
        <img
          src={assets.logo}
          alt=""
          className="w-[150px] laptop:w-[140px] tablet:w-[120px]"
        />
      </Link>
      <ul className="flex gap-5 text-lg text-link laptop:text-[17px] tablet:gap-4 tablet:text-[16px] phone:hidden">
        <Link
        to={"/"}
          onClick={() => setMenu("Home")}
          className={
            menu === "Home"
              ? "cursor-pointer border-b-2 border-red-500 pb-1 text-red-500"
              : "cursor-pointer"
          }
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={
            menu === "Menu"
              ? "cursor-pointer border-b-2 border-red-500 pb-1 text-red-500"
              : "cursor-pointer"
          }
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile App")}
          className={
            menu === "Mobile App"
              ? "cursor-pointer border-b-2 border-red-500 pb-1 text-red-500"
              : "cursor-pointer"
          }
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={
            menu === "Contact Us"
              ? "cursor-pointer border-b-2 border-red-500 pb-1 text-red-500"
              : "cursor-pointer"
          }
        >
          Contact Us
        </a>
      </ul>
      <div className="flex items-center gap-10 laptop:gap-8 tablet:gap-5">
        <img
          src={assets.search_icon}
          alt=""
          className="w-auto laptop:w-[22px] tablet:w-5"
        />
        <div className="relative">
          <Link to={"/cart"}>
            {" "}
            <img
              src={assets.basket_icon}
              alt=""
              className="w-auto laptop:w-[22px] tablet:w-5"
            />
          </Link>

          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "absolute -right-2 -top-2 h-3 w-3 rounded-full bg-red-500"
            }
          ></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="cursor-pointer rounded-full border border-orange-600 px-[30px] py-[10px] text-link duration-300 hover:bg-[#fff4f2] laptop:px-[25px] laptop:py-2 tablet:px-[20px] tablet:py-[7px] tablet:text-[15px]"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
