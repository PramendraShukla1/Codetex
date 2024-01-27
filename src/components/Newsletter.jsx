import React from "react";
import monster_end from "../assets/monster-end.png";
import github from "../assets/github.png";
import discord from "../assets/discord.png";
import { FaArrowRight } from "react-icons/fa6";
import camera from "../assets/camera.png";
import lines from "../assets/lines.png";
import newsletter from "../assets/newsletter.png";
const Newsletter = () => {
  return (
    <div className="mt-20 lg:p-20 p-5">
      <div className="w-full flex flex-wrap lg:flex-nowrap">
        <div className="lg:w-1/2 w-full">
          <p className="text-[#81a4ff] text-sm font-bold ">CONNECT AND GROW</p>
          <h1 className="mt-5 text-4xl font-extrabold">
            Join the Codetex Community
          </h1>
          <p className="mt-5 text-xl text-gray-600 mb-10">
            Whether seasoned or just starting out, our vibrant community offers
            opportunities to connect with like-minded folks, gain valuable
            insights, access expert guidance, and accelerate your dev projects.
          </p>
          <div>
            <div className="w-full flex gap-10 flex-wrap lg:flex-nowrap">
              <div className="lg:w-2/5 w-full h-full bg-white rounded-2xl p-5 ">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center h-12">
                    <img src={discord} width={40} alt="" />
                    <h1 className="font-bold">Discord</h1>
                  </div>
                  <FaArrowRight className="text-gray-500" />
                </div>
                <hr className="mt-5 mb-5" />
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center h-12">
                    <img src={github} width={40} alt="" />
                    <h1 className="font-bold">GitHub</h1>
                  </div>
                  <FaArrowRight className="text-gray-500" />
                </div>
                <hr className="mt-5 mb-5" />
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center h-12">
                    <img src={github} width={40} alt="" />
                    <h1 className="font-bold">Discussions</h1>
                  </div>
                  <FaArrowRight className="text-gray-500" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full h-full bg-white rounded-2xl p-4">
                <div className="flex justify-center">
                  <img src={camera} alt="" className="w-28" />
                </div>
                <p className="font-semibold mt-5 text-center">
                  Community Call: Launch Day
                </p>
                <p className="mb-5 mt-5 text-center text-gray-600">
                  Join our call on the 4th Thursday of every month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-end justify-end place-content-end mt-10 lg:mt-0 mb-10 lg:mb-0 ">
          <img src={monster_end} alt="" />
        </div>
      </div>

      <div className="bg-white mt-20 w-full flex flex-row h-full gap-5 flex-wrap lg:flex-nowrap  shadow-xl rounded-2xl lg:p-20 p-10">
        <div className="lg:w-1/2 w-full lg:border-r-2 h-full">
          <img src={newsletter} alt="" className="lg:w-48 w-36" />
          <p className="mt-5 lg:text-2xl text-xl text-gray-600">
            Subscribe to stay up-to-date on all things Codetex. One newsletter,
            once a month.
          </p>
          <div className="flex gap-3 items-center mt-5 ">
            <input
              type="text"
              className="w-2/3  outline-none border rounded-full lg:p-3 p-2 border-gray-300 placeholder:p-3 text-gray-600"
              placeholder="Your Email*"
            />
            <button className="lg:p-3 p-2 border flex items-center gap-0 border-blue-600 rounded-full text-blue-500 hover:text-white hover:bg-blue-600 font-semibold text-sm lg:text-lg">
              Subscribe<FaArrowRight/>
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex flex-col justify-end">
        <img src={lines} alt="" className="lg:w-80 w-52" />
          <p className="mt-5 lg:text-2xl text-xl text-gray-600">
          Accelerate development and data access with radically reduced complexity.
          </p>
          <div className="flex gap-3 items-center mt-5">
            
            <button className="p-3 flex items-center gap-1 border border-blue-600 rounded-full text-blue-500 hover:text-white hover:bg-blue-600 font-semibold ">
            Get started for free <FaArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
