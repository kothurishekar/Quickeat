import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import photo1 from "../assets/photo1.png";

function Banner() {
  return (
    <div>
      <div className="banner pt-20 p-6 sm:p-20 bg-gradient-to-b sm:bg-gradient-to-r from-white to-orange-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="w-full sm:w-120">
            <h1 className="text-3xl sm:text-6xl w-full font-extrabold text-[#363636]">
              The Best Restaurants In Your Home
            </h1>
            <p className="text-base sm:text-[20px] text-gray-400 mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            {/* Dropdown */}
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              className="h-10 w-full sm:w-1/2 mb-4 shadow appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-1"
            >
              <option>Choose a Restaurant</option>
              <option>Choose a Restaurant 1</option>
              <option>Choose a Restaurant 2</option>
              <option>Choose a Restaurant 3</option>
            </select>

            {/* Button */}
            <button
              type="button"
              className="bg-[#F29F05] text-amber-50 px-4 py-3 rounded-[10px] 
                hover:bg-transparent hover:text-[#F29F05] 
                border border-[#F29F05] 
                transform hover:scale-105 
                transition-all duration-300 ease-in-out w-full sm:w-auto mx-2"
              
            >
              ORDER NOW
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <img
              src={photo1}
              alt="Food"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
