import React from "react";

function Service() {
  return (
    <>
      <div className="container w-full p-6 md:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex justify-around   items-center gap-8">
          <div className="text-4xl md:text-5xl font-bold text-[#363636] text-center md:text-left md:w-1/4">
            <h1>Service shows good taste.</h1>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5 shadow-2xl p-10 rounded-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F29F05]">
              976
            </h1>
            <p className="text-center md:w-20">Satisfied Customer</p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5 shadow-2xl p-10 rounded-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F29F05]">
              12
            </h1>
            <p className="text-center md:w-20">Best Restaurants</p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5 shadow-2xl p-10 rounded-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F29F05]">
              1K +
            </h1>
            <p className="text-center md:w-20">Food Delivered</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
