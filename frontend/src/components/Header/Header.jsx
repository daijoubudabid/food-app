import React from "react";

const Header = () => {
  return (
    <div className="relative my-8 h-[34vw] bg-banner bg-contain bg-no-repeat">
      <div className="tablet:max-w-[50%] phone:max-w-[65%] absolute bottom-[10%] left-[6vw] flex max-w-[50%] animate-fadeIn flex-col items-start gap-[1.5vw] ">
        <h2 className="text-responsive font-medium text-white">
          Order Your Favorite Food Here
        </h2>
        <p className="phone:hidden text-[1vw] text-white">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and satisfy your cravings and
          elevate your dining experience, one delicious meal at a time.
        </p>
        <button className="phone:py-[2vw] phone:px-[4vw] rounded-full bg-white px-[2vw] py-[1vw] text-small font-medium text-[#747474]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
