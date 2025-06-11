import React from "react";
import est from "../assets/est.jpg";
import est2 from "../assets/est1 2.jpg";
import est3 from "../assets/est3.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function BestRestaurant() {
    return (
        <>
            <div className="container mx-auto w-full p-6 sm:p-10 lg:p-20 bg-gray-100 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Section */}
                    <div>
                        <h1 className="text-3xl md:text-5xl max-w-lg font-bold text-[#363636]">
                            12 Best Restaurants in Your City
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg mt-5 max-w-lg">
                            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
                            tellus in metus vulputate.
                        </p>
                    </div>

                    {/* Image Section 1 */}
                    <div className="bg-white w-full rounded-2xl flex flex-col sm:flex-row gap-6 sm:gap-10 justify-around py-6 sm:py-10 px-4 sm:px-6">
                        <div className="flex-shrink-0">
                            <img src={est} alt="restaurant" className="rounded-2xl w-full sm:w-40 md:w-56" />
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold cursor-pointer hover:text-[#F29F05] max-w-fit">
                                Kennington Lane Cafe
                            </h1>
                            <div className="flex text-[#F29F05] text-xl sm:text-2xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <div className="mt-2 flex flex-wrap">
                                <button className="border px-2 rounded-2xl mt-2 mr-2 text-[#F29F05] cursor-pointer hover:bg-[#F29F05] hover:text-white">
                                    american
                                </button>
                                <button className="border px-2 rounded-2xl mt-2 mr-2 text-[#F29F05] cursor-pointer hover:bg-[#F29F05] hover:text-white">
                                    steakhouse
                                </button>
                                <button className="border px-2 rounded-2xl mt-2 mr-2 text-[#F29F05] cursor-pointer hover:bg-[#F29F05] hover:text-white">
                                    seafood
                                </button>
                            </div>
                            <p className="max-w-lg text-gray-400 mt-2 text-sm sm:text-base">
                                Non enim praesent elementum facilisis leo vel fringilla. Lectus
                                proin nibh nisl condimentum id. Quis varius quam quisque id diam
                                vel.
                            </p>
                        </div>
                    </div>

                    {/* Image Section 2 */}
                    <div className="bg-white w-full rounded-2xl flex flex-col sm:flex-row gap-6 sm:gap-10 justify-around py-6 sm:py-10 px-4 sm:px-6">
                        <div className="flex-shrink-0">
                            <img src={est2} alt="restaurant" className="rounded-2xl w-full sm:w-40 md:w-56" />
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold cursor-pointer hover:text-[#F29F05] max-w-fit">
                                The Wilmington
                            </h1>
                            <div className="flex text-[#F29F05] text-xl sm:text-2xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className="mt-2 flex flex-wrap">
                                <button className="border px-2 rounded-2xl mt-2 mr-2 text-[#F29F05] cursor-pointer hover:bg-[#F29F05] hover:text-white">
                                    american
                                </button>
                                <button className="border px-2 rounded-2xl mt-2 mr-2 text-[#F29F05] cursor-pointer hover:bg-[#F29F05] hover:text-white">
                                    steakhouse
                                </button>
                                <button className="border px-2 rounded-2xl mt-2 mr-2 text-[#F29F05] cursor-pointer hover:bg-[#F29F05] hover:text-white">
                                    seafood
                                </button>
                            </div>
                            <p className="max-w-lg text-gray-400 mt-2 text-sm sm:text-base">
                                Non enim praesent elementum facilisis leo vel fringilla.
                                Lectus proin nibh nisl condimentum id. Quis varius quam
                                quisque id diam vel.
                            </p>
                        </div>
                    </div>

                    {/* Image Section 3 */}
                    <div className="w-full rounded-2xl flex flex-col sm:flex-row gap-6 sm:gap-10 justify-around py-6 sm:py-10 px-4 sm:px-6">
                        <div className="flex-shrink-0">
                            <img src={est3} alt="restaurant" className="rounded-2xl w-full sm:w-40 md:w-56" />
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold cursor-pointer hover:text-[#F29F05] max-w-fit">
                                Kings Arms
                            </h1>
                            <div className="flex text-[#F29F05] text-xl sm:text-2xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <div className="mt-2 flex flex-wrap">
                                <button className="border px-2 rounded-2xl mt-2 mr-2 text-[#F29F05] cursor-pointer hover:bg-[#F29F05] hover:text-white">
                                    healthy
                                </button>
                                <button className="border px-2 rounded-2xl mt-2 mr-2 text-[#F29F05] cursor-pointer hover:bg-[#F29F05] hover:text-white">
                                    steakhouse
                                </button>
                                <button className="border px-2 rounded-2xl mt-2 mr-2 text-[#F29F05] cursor-pointer hover:bg-[#F29F05] hover:text-white">
                                    vegetarian
                                </button>
                            </div>
                            <p className="max-w-lg text-gray-400 mt-2 text-sm sm:text-base">
                                Non enim praesent elementum facilisis leo vel fringilla. Lectus
                                proin nibh nisl condimentum id. Quis varius quam quisque id diam
                                vel.
                            </p>
                        </div>
                    </div>
                </div>

                {/* See All Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[#F29F05] cursor-pointer mx-auto border w-fit px-10 py-4 rounded-2xl mt-10 hover:bg-[#F29F05] hover:text-white transition-all duration-300">
                    <button className="text-base sm:text-lg">SEE ALL</button>
                    <FaArrowRight />
                </div>
            </div>
        </>
    );
}

export default BestRestaurant;
