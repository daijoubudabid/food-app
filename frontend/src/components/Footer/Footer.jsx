import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      id="footer"
      className="mt-20 flex flex-col items-center gap-5 bg-[#323232] px-[8vw] py-5 pt-20 text-[#d9d9d9]"
    >
      <div className="grid w-full grid-cols-custom gap-20 phone:flex phone:flex-col">
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex
            unde dolores debitis facilis commodi voluptas veniam autem quos
            similique.
          </p>
          <div className="flex gap-5">
            <img
              src={assets.facebook_icon}
              className="w-10 cursor-pointer"
              alt=""
            />
            <img
              src={assets.twitter_icon}
              className="w-10 cursor-pointer"
              alt=""
            />
            <img
              src={assets.linkedin_icon}
              className="w-10 cursor-pointer"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-xl font-semibold text-white">COMPANY</h2>
          <ul>
            <li className="mb-3 cursor-pointer">Home</li>
            <li className="mb-3 cursor-pointer">About Us</li>
            <li className="mb-3 cursor-pointer">Delivery</li>
            <li className="mb-3 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-xl font-semibold text-white">Get In Touch</h2>
          <ul>
            <li className="mb-3 cursor-pointer">+1292292929</li>
            <li className="mb-3 cursor-pointer">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="my-5 h-[2px] w-full border-none bg-gray-500" />
      <p>Copyright 2024 @ Tomato.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;
