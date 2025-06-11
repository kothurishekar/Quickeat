import React from "react";
import { FaBell } from "react-icons/fa";
import illustration4 from "../assets/illustration4.png";

function Subscribe() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full p-20">
        {/* Image */}
        <div className="">
          <img src={illustration4} className="w-full h-auto" alt="" />
        </div>

        {/* Content */}
        <div className="w-full max-w-xl text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#363636]">
            Get the menu of your favorite restaurants every day
          </h1>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-5 w-full">
            <div className="p-4 shadow rounded-2xl flex items-center gap-2 bg-white w-full">
              <FaBell className="text-[#F29F05]" />
              <input
                type="text"
                placeholder="Enter your email"
                className="border-none outline-none w-full text-[16px]"
              />
            </div>

            <button className="w-full sm:w-auto py-4 px-6 rounded-2xl cursor-pointer bg-[#F29F05] text-white font-semibold hover:bg-[#d88f04] transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
