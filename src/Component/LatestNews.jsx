import React from "react";
import photo8 from "../assets/photo8.jpg";
import { FaUser } from "react-icons/fa";
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'

import { FaCalendarDays } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import food1 from "../assets/food1.jpg";
function LatestNews() {
  return (
    <>
      <div className="container w-full p-10 bg-[#fbf8f8]">
        <div className="max-w-100">
          <h1 className="text-5xl font-bold text-[#363636]">
            Latest news and events
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          <div className="bg-white p-4 rounded-2xl row-span-3">
            <img src={photo8} alt="" className="rounded-2xl w-full" />

            <h1 className="text-2xl md:text-4xl mt-5 font-bold text-[#363636]">
              We Have Received An Award For The Quality Of Our Work
            </h1>

            <p className="text-gray-600 mt-5">
              Donec adipiscing tristique risus nec feugiat in fermentum. Sapien
              eget mi proin sed libero. Et magnis dis parturient montes
              nascetur. Praesent semper feugiat nibh sed pulvinar proin gravida.
            </p>

            <button
              type="button"
              className="cursor-pointer font-bold mt-5 text-[#F29F05] hover:underline"
            >
              Read More
            </button>

            <hr className="mt-5 border-gray-400" />

            <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <FaUser />
                <span className="font-semibold">by Quickeat</span>
              </div>

              <div className="flex items-center gap-1.5">
                <FaCalendarDays />
                <span className="font-semibold">01.Jan.2022</span>
              </div>

              <div className="flex items-center gap-1.5">
                <FaEye />
                <span className="font-semibold">132</span>
              </div>
            </div>
          </div>



          <div className=" rounded flex flex-col md:flex-row gap-5 items-start h-fit mb-3 max-w-160">
            <img src={food1} alt="" className="w-46 h-46 rounded-2xl" />

            <div>
              <div className="flex gap-1  flex-wrap">
                <button className="bg-[#F29F05] text-white text-[15px] py-1 px-2 rounded-2xl hover:bg-transparent hover:text-[#F29F05]">
                  restaurant
                </button>
                <button className="bg-[#F29F05] text-white text-[15px] py-1 px-2 rounded-2xl hover:bg-transparent hover:text-[#F29F05]">
                  cooking
                </button>
               
              </div>

              <h1 className="text-2xl font-bold text-[#363636]">
                With Quickeat you can order food for the whole day
              </h1>

              <p className="text-gray-400 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor...
              </p>

              <div className="mt-1 flex flex-wrap gap-5 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <FaUser />
                  <span className="font-semibold">by Quickeat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCalendarDays />
                  <span className="font-semibold">01.Jan.2022</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaEye />
                  <span className="font-semibold">132</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" rounded flex flex-col md:flex-row gap-5 items-start h-fit mb-3 max-w-160">
            <img src={food2} alt="" className="w-46 h-46 rounded-2xl" />

            <div>
              <div className="flex gap-1  flex-wrap ">
                <button className="bg-[#F29F05] text-white text-[15px] py-1 px-2 rounded-2xl hover:bg-transparent hover:text-[#F29F05]">
                  restaurant
                </button>
                <button className="bg-[#F29F05] text-white text-[15px] py-1 px-2 rounded-2xl hover:bg-transparent hover:text-[#F29F05]">
                  cooking
                </button>
               
              </div>

              <h1 className="text-2xl font-bold text-[#363636]">
                With Quickeat you can order food for the whole day
              </h1>

              <p className="text-gray-400 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor...
              </p>

              <div className="mt-1 flex flex-wrap gap-5 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <FaUser />
                  <span className="font-semibold">by Quickeat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCalendarDays />
                  <span className="font-semibold">01.Jan.2022</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaEye />
                  <span className="font-semibold">132</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded flex flex-col md:flex-row gap-5 items-start h-fit mb- max-w-160">
            <img src={food3} alt="" className="w-46 h-46 rounded-2xl" />

            <div>
              <div className="flex gap-1  flex-wrap">
                <button className="bg-[#F29F05] text-white text-[15px] py-1 px-2 rounded-2xl hover:bg-transparent hover:text-[#F29F05]">
                  restaurant
                </button>
                <button className="bg-[#F29F05] text-white text-[15px] py-1 px-2 rounded-2xl hover:bg-transparent hover:text-[#F29F05]">
                  cooking
                </button>
              
              </div>

              <h1 className="text-2xl font-bold text-[#363636]">
                With Quickeat you can order food for the whole day
              </h1>

              <p className="text-gray-400 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor...
              </p>

              <div className="mt-1 flex flex-wrap gap-5 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <FaUser />
                  <span className="font-semibold">by Quickeat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCalendarDays />
                  <span className="font-semibold">01.Jan.2022</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaEye />
                  <span className="font-semibold">132</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNews;
