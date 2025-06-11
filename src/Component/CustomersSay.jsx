import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { FaStar } from "react-icons/fa";

import { Navigation, Autoplay } from "swiper/modules";
import photo5 from "../assets/photo5.jpg";
import photo4 from "../assets/photo4.png";

function CustomersSay() {
  return (
    <>
      <div className="container w-full p-4 sm:p-6 md:p-10 lg:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-lg">
              What customers say about us
            </h1>
            <div className="w-full max-w-3xl py-6 md:py-10">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                }}
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="p-4 sm:p-5 md:p-6 space-y-4 bg-white rounded-xl">
                    <p className="text-sm sm:text-base md:text-lg">
                      "Dapibus ultrices in iaculis nunc sed augue lacus viverra
                      vitae. Mauris a diam maecenas sed enim. Egestas diam in arcu
                      cursus euismod quis. Quam quisque id diam vel."
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-cover rounded-full"
                        alt="hero"
                        src={photo5}
                      />
                      <div className="flex flex-col">
                        <h1 className="text-base sm:text-lg md:text-xl font-semibold">
                          Thomas Adamson
                        </h1>
                        <div className="flex text-[#F29F05] text-lg sm:text-xl md:text-2xl">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="p-4 sm:p-5 md:p-6 space-y-4 bg-white rounded-xl">
                    <p className="text-sm sm:text-base md:text-lg">
                      "Dapibus ultrices in iaculis nunc sed augue lacus viverra
                      vitae. Mauris a diam maecenas sed enim. Egestas diam in arcu
                      cursus euismod quis. Quam quisque id diam vel."
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-cover rounded-full"
                        alt="hero"
                        src={photo5}
                      />
                      <div className="flex flex-col">
                        <h1 className="text-base sm:text-lg md:text-xl font-semibold">
                          Thomas Adamson
                        </h1>
                        <div className="flex text-[#F29F05] text-lg sm:text-xl md:text-2xl">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Add more SwiperSlides if needed */}
              </Swiper>
            </div>
          </div>
          <div>
            <img src={photo4} alt="" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomersSay;
