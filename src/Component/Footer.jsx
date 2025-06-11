import React from "react";
import { FaBowlFood, FaLocationDot, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className="w-full bg-gray-900 p-5 sm:p-10 lg:p-20">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="p-4">
            <div className="logo">
              <a href="#" className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white">
                <FaBowlFood />
                QUICK<span className="text-[#F29F05]">EAT</span>
              </a>
            </div>
            <div className="mb-5 text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 mt-5">
                The Best Restaurants in Your Home
              </h1>
              <p className="text-gray-400">
                Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus pretium quam.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="p-4 rounded">
            <h1 className="font-extrabold text-[20px] text-gray-400">MENU</h1>
            <ul className="text-[15px] max-w-fit font-semibold text-gray-400">
              <li className="pt-5 hover:text-[#F29F05]">Home</li>
              <li className="pt-5 hover:text-[#F29F05]">About Us</li>
              <li className="pt-5 hover:text-[#F29F05]">Restaurants</li>
              <li className="pt-5 hover:text-[#F29F05]">Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="p-4 rounded text-gray-400">
            <h1 className="font-extrabold text-[20px] text-gray-400">CONTACT</h1>

            <div className="flex items-start gap-2 mt-5">
              <FaLocationDot />
              <p className="max-w-xs">1717 Harrison St, San Francisco, CA 94103, United States</p>
            </div>

            <hr className="my-4 border-gray-600" />

            <div className="flex items-center gap-2 mt-3">
              <FaEnvelope />
              <p>quickeat@mail.net</p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <IoCall />
              <p>+1 425 326 16 27</p>
            </div>

            <div className="flex gap-5 mt-6 text-2xl sm:text-3xl items-center">
              <FaFacebookF className="border p-2 rounded-full" />
              <FaInstagram className="border p-2 rounded-full" />
              <FaTwitter className="border p-2 rounded-full" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-10 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4">
          <p className="text-center md:text-left">Copyright © 2023. QuickEat. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <p className="hover:text-[#F29F05] cursor-pointer">Privacy Policy</p>
            <p className="hover:text-[#F29F05] cursor-pointer">Terms & Services</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
