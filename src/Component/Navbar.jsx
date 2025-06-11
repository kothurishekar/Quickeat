import React, { useState } from "react";
import { FaBowlFood } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger Icons
import { FaBagShopping } from "react-icons/fa6";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav flex justify-between items-center px-6 py-4 fixed top-0 right-0 left-0 ">
        {/* Logo */}
        <div className="logo">
          <a href="" className="flex items-center gap-1 text-[25px] font-bold">
            {" "}
            <FaBowlFood />
            QUICK<span className="text-[#F29F05]">EAT</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            <li className="hover:text-[#F29F05] cursor-pointer">Home</li>
            <li className="hover:text-[#F29F05] cursor-pointer">About Us</li>
            <li className="hover:text-[#F29F05] cursor-pointer">Restaurants</li>
            <li className="hover:text-[#F29F05] cursor-pointer">Pages</li>
            <li className="hover:text-[#F29F05] cursor-pointer">Contacts</li>
          </ul>
        </div>

        {/* Toggle Button (Visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="cart hidden md:flex items-center gap-2">
          <FaBagShopping className="text-[#F29F05] bg-amber-50 text-4xl p-2 rounded-[10px]  "  />
          <button
            type="button"
            className="bg-[#F29F05] text-amber-50 px-4 py-2 rounded-2xl
           
             hover:bg-transparent hover:text-[#F29F05] 
             border border-[#F29F05] 
             transform hover:scale-105 
             transition-all duration-300 ease-in-out"
          >
            ORDER NOW
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pt-20 py-4">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-[#F29F05] cursor-pointer">Home</li>
            <li className="hover:text-[#F29F05] cursor-pointer">About Us</li>
            <li className="hover:text-[#F29F05] cursor-pointer">Restaurants</li>
            <li className="hover:text-[#F29F05] cursor-pointer">Pages</li>
            <li className="hover:text-[#F29F05] cursor-pointer">Contacts</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
