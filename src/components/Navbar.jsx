import React from "react";
import logo from "../assets/logo_name.png";
import { FcSearch } from "react-icons/fc";
import { FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full border-b-2 bg-white navbarReal shadow-lg fixed flex top-0 z-10 ">
      {/* leftDiv start*/}
      <div className="w-2/3 flex gap-14 items-center">
        <div className="lg:w-40 w-24 h-auto">
          <img src={logo} alt="" className="w-auto h-auto" />
        </div>
<div className=" gap-14 flex-row hidden lg:flex">


        <p className="text-lg font-semibold text-gray-600 hover:underline hover:underline-offset-8 cursor-pointer hover:text-gray-800">Product</p>
        <p className="text-lg font-semibold text-gray-600 hover:underline hover:underline-offset-8 cursor-pointer hover:text-gray-800">Developer</p>
        <p className="text-lg font-semibold text-gray-600 hover:underline hover:underline-offset-8 cursor-pointer hover:text-gray-800">Customer</p>
        <p className="text-lg font-semibold text-gray-600 hover:underline hover:underline-offset-8 cursor-pointer hover:text-gray-800">Company</p>
        <p className="text-lg font-semibold text-gray-600 hover:underline hover:underline-offset-8 cursor-pointer hover:text-gray-800">Pricing</p>
        </div>
      </div>
      {/* leftDiv end*/}

      {/* Right Div start */}
      <div className="w-1/3 flex items-center text-lg gap-5 justify-end">
        <div className="flex items-center gap-5">
        <FcSearch size={25} className="cursor-pointer"/>
            <div className="bg-[#dfe8fd] pt-1 pb-1 lg:pl-3 pl-1 pr-3 rounded-full hover:bg-[#417df9] cursor-pointer hidden lg:flex">
            <button className="flex items-center lg:text-lg text-sm gap-1 font-semibold text-[#5279e8] hover:text-white">
            Log In <FaAngleRight />
          </button>
            </div>
         
        </div>
        <div className="bg-[#417df9] lg:pt-1 lg:pb-1 pt-2 pb-2 lg:pl-3 lg:pr-3 pl-5 pr-5 rounded-full hover:bg-blue-800 cursor-pointer">
          <button className="flex w-24 lg:w-auto items-center lg:text-lg text-sm gap-1 font-normal  text-white">
            Get Started <FaAngleRight />
          </button>
        </div>
      </div>
      {/* Right Div end */}
    </div>
  );
};

export default Navbar;
