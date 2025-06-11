import React from 'react'
import photo6 from '../assets/photo6.jpg'
import photo7 from '../assets/photo7.jpg'

function JoinPartnership() {
  return (
    <>
      <div className="container bg-gray-800 px-4 sm:px-6 md:px-10 py-10 w-full">
        <div className="text-2xl sm:text-4xl md:text-5xl text-white font-bold text-center">
          Want to Join Partnership?
        </div>

        <div className="flex flex-col sm:flex-row justify-around items-center gap-10 sm:gap-8 px-2 sm:px-4 md:px-6 py-10 sm:py-16">
          
          {/* Left Block */}
          <div className="relative w-full sm:w-1/2 max-w-xl">
            <img src={photo6} alt="" className="w-full h-auto rounded-xl" />

            {/* Responsive block position */}
            <div className="rounded-2xl  w-full sm:w-[90%] md:w-[600px]  sm:h-[370px] border-[#F29F05] border-8 sm:absolute sm:bottom-[20px] sm:left-[20px]  sm:mt-0 p-4 sm:p-6 flex flex-col justify-end">
              <div className="gap-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Join Courier</h2>
                <button className="bg-[#F29F05] text-white text-sm sm:text-base px-4 py-2 rounded-lg mt-4 sm:mt-5 hover:bg-[#d88f04] transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="relative w-full sm:w-1/2 max-w-xl">
            <img src={photo7} alt="" className="w-full h-auto rounded-xl" />

            <div className="rounded-2xl  w-full sm:w-[90%] md:w-[600px]  sm:h-[370px] border-[#F29F05] border-8 sm:absolute sm:bottom-[20px] sm:left-[20px]  sm:mt-0 p-4 sm:p-6 flex flex-col justify-end">

              <div className="gap-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Join Merchant</h2>
                <button className="bg-[#F29F05] text-white text-sm sm:text-base px-4 py-2 rounded-lg mt-4 sm:mt-5 hover:bg-[#d88f04] transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default JoinPartnership;
