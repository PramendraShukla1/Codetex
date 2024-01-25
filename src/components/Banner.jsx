import React from "react";
import { FaAngleRight } from "react-icons/fa";
import monster from "../assets/monster-hero.png";

const Banner = () => {
  return (
    <>
    <div className="mt-20 w-full flex flex-row">
      {/* Left div */}
      <div className="w-1/2">
        <p className="text-5xl font-bold">
          <span className="text-[#80a3ff]">Instantly</span> build and ship APIs
          on all your data
        </p>
        <p className="mt-7 text-2xl text-gray-700 leading-10">
          Unblock product teams by instantly deploying flexible and secure
          GraphQL APIs without drowning in microservice complexity.
        </p>
        <div className="flex items-center gap-5 mt-7">
          <div className=" pt-3 pb-3 pl-5 pr-5 rounded-full hover:bg-[#417df9] cursor-pointer border border-[#417df9]">
            <button className="flex items-center text-md gap-1 font-normal text-[#5279e8] hover:text-white">
              Get Started <FaAngleRight />
            </button>
          </div>
          <div className="bg-[#417df9] pt-3 pb-3 pl-5 pr-5 rounded-full hover:bg-blue-800 cursor-pointer">
            <button className="flex items-center text-md gap-1 font-normal  text-white">
              Book a demo <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
      {/* Right div */}
      <div className="w-1/2">
        <img src={monster} alt="" className="h-full w-full object-cover" />
      </div>
     
    </div>
    <div className="border border-black mt-7 h-72">

</div>
    </>
  );
};

export default Banner;
