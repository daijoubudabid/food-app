import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="flex flex-col gap-5">
      <h1 className="text-3xl font-medium text-[#262626]">Explore Our Menu</h1>
      <p className="max-w-[60%] laptop:text-sm laptop:max-w-[100%] columns-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and satisfy your cravings and
        elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="my-5 flex items-center justify-between gap-8 text-center overflow-x-scroll scroll-bar">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              key={index}
            >
              <img
                src={item.menu_image}
                alt="menu-items"
                className={
                  category === item.menu_name
                    ? "w-[7.5vw] min-w-20 rounded-full border-4 border-red-500 p-[2px]"
                    : "w-[7.5vw] min-w-20 cursor-pointer duration-200"
                }
              />
              <p className="text-normal mt-3 cursor-pointer text-[#747474]">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-3 h-[2px] bg-[#e2e2e2]" />
    </div>
  );
};

export default ExploreMenu;
