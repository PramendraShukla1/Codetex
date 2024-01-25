import React from "react";
import logo from "../assets/logo_name.png";
import { FcSearch } from "react-icons/fc";
import { FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full flex">
      {/* leftDiv start*/}
      <div className="w-2/3 flex gap-14 items-center">
        <div className="w-40 h-auto">
          <img src={logo} alt="" className="w-auto h-auto" />
        </div>
<div className="flex gap-14 flex-row">


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
        <FcSearch size={25}/>
            <div className="bg-[#dfe8fd] pt-1 pb-1 pl-3 pr-3 rounded-full hover:bg-[#417df9] cursor-pointer">
            <button className="flex items-center text-lg gap-1 font-semibold text-[#5279e8] hover:text-white">
            Log In <FaAngleRight />
          </button>
            </div>
         
        </div>
        <div className="bg-[#417df9] pt-1 pb-1 pl-3 pr-3 rounded-full hover:bg-blue-800 cursor-pointer">
          <button className="flex items-center text-lg gap-1 font-normal  text-white">
            Get Started <FaAngleRight />
          </button>
        </div>
      </div>
      {/* Right Div end */}
    </div>
  );
};

export default Navbar;
