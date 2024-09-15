import { useState } from "react";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="absolute z-10 grid h-full w-full bg-[#00000090]">
      <form className="w-login flex animate-fadeIn flex-col gap-6 place-self-center rounded-lg bg-white px-[30px] py-[25px] text-[#808080] duration-500">
        <div className="flex items-center justify-between text-black">
          <h2 className="text-xl font-semibold">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-5">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your name"
              className="rounded-md border border-[#c9c9c9] p-[10px] focus:outline-none"
              required
            />
          )}
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your email"
            className="rounded-md border border-[#c9c9c9] p-[10px] focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter your password"
            className="rounded-md border border-[#c9c9c9] p-[10px] focus:outline-none"
          />
          <button className="cursor-pointer rounded-md bg-red-500 p-[10px] text-[15px] text-white">
            {currState === "Sign Up" ? "Create an account" : "Login"}
          </button>
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              required
              className="mt-[6px] cursor-pointer"
            />
            <p>
              By continuing, I agree to the the terms of use & privacy policy
            </p>
          </div>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span
              className="cursor-pointer font-medium text-red-500"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span
              className="cursor-pointer font-medium text-red-500"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
