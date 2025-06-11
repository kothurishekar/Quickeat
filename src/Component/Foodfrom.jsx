import React from "react";
import photo1 from "../assets/photo-3.png";

function Foodfrom() {
  return (
    <>
      <div className="container p-4 sm:p-6 md:p-10 mx-auto w-full sm:bg-gradient-to-r from-orange-300 to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center gap-6 sm:gap-8 md:gap-10">
          <div>
            <img src={photo1} alt="" className="w-full max-w-md md:max-w-full h-auto object-contain" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl max-w-2xl font-bold text-[#363636]">
              Food from your favorite restaurants to your table
            </h1>
            <p className="text-base sm:text-lg md:text-[18px] text-gray-400 mt-4 sm:mt-5 max-w-2xl">
              Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec
              massa sapien faucibus et molestie. Vitae elementum curabitur vitae
              nunc.
            </p>
            <button
              type="button"
              className="bg-[#F29F05] text-amber-50 px-4 py-2 sm:py-3 mt-4 sm:mt-5 rounded-[10px] 
                hover:bg-transparent hover:text-[#F29F05] 
                border border-[#F29F05] 
                transform hover:scale-105 
                transition-all duration-300 ease-in-out mx-0 sm:mx-2 text-sm sm:text-base md:text-lg"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foodfrom;
