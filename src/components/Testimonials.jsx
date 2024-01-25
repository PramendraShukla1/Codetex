import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="mt-10 w-full flex gap-8">
      <div className="w-1/3 h-full rounded-2xl bg-white shadow-lg p-9 hover:shadow-2xl cursor-pointer">
        {/* Head section  */}
        <div className="w-full flex gap-5 flex-wrap">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/hasura-cms-uploads/image/upload/v1687017264/karthik_arxjv4_5037d09676.png"
              alt=""
              width={60}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xl ">Karthik Srinivasan</p>
            <p className="text-sm text-gray-600">
              Sol. Architect, Philips Heathcare
            </p>
          </div>
        </div>
        <div className="mt-10">
            <p className="text-lg text-gray-600">"Achieving this timeframe in a highly regulated environment like healthcare is phenomenal."</p>
        </div>
        <hr className="mt-44"/>
        <div className="w-full flex gap-5 mt-5">
          <div className="flex items-center bg-blue-600 w-full h-16 rounded-2xl p-2">
            <img
              src="https://res.cloudinary.com/hasura-cms-uploads/image/upload/v1687016993/philips_Logo_11d579c6fb.png"
              alt=""
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[16px] text-gray-600">How Philips Healthcare accelerated development by 4x with codetex</p>
            <p className="mt-3 text-[14px] text-blue-600 flex items-center">Read the case study <FaAngleRight/></p>
            
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full rounded-2xl bg-white shadow-lg p-9 hover:shadow-2xl cursor-pointer">
        {/* Head section  */}
        <div className="w-full flex gap-5">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/hasura-cms-uploads/image/upload/v1687205090/jagannath_72e76d8435.png"
              alt=""
              width={60}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xl ">Karthik Srinivasan</p>
            <p className="text-sm text-gray-600">
              Sol. Architect, Philips Heathcare
            </p>
          </div>
        </div>
        <div className="mt-10">
            <p className="text-lg text-gray-600">"Achieving this timeframe in a highly regulated environment like healthcare is phenomenal."</p>
        </div>
        <hr className="mt-44"/>
        <div className="w-full flex gap-5 mt-5">
          <div className="flex items-center bg-green-600 w-full h-16 rounded-2xl p-2">
            <img
              src="https://res.cloudinary.com/hasura-cms-uploads/image/upload/v1687016994/Nutrien_Logo_4c1351fafa.png"
              alt=""
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[16px] text-gray-600">How Philips Healthcare accelerated development by 4x with codetex</p>
            <p className="mt-3 text-[14px] text-blue-600 flex items-center">Read the case study <FaAngleRight/></p>
            
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full rounded-2xl bg-white shadow-lg p-9 hover:shadow-2xl cursor-pointer">
        {/* Head section  */}
        <div className="w-full flex gap-5">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/hasura-cms-uploads/image/upload/v1690271327/brandon_martin_1_5fe7a12eb1.png"
              alt=""
              width={60}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xl ">Karthik Srinivasan</p>
            <p className="text-sm text-gray-600">
              Sol. Architect, Philips Heathcare
            </p>
          </div>
        </div>
        <div className="mt-10">
            <p className="text-lg text-gray-600">"Achieving this timeframe in a highly regulated environment like healthcare is phenomenal."</p>
        </div>
        <hr className="mt-44"/>
        <div className="w-full flex gap-5 mt-5">
          <div className="flex items-center bg-white border w-full h-16 rounded-2xl p-3">
            <img
              src="https://res.cloudinary.com/hasura-cms-uploads/image/upload/v1690271388/image_16_0299af59a3.png"
              alt=""
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[16px] text-gray-600">How Philips Healthcare accelerated development by 4x with codetex</p>
            <p className="mt-3 text-[14px] text-blue-600 flex items-center">Read the case study <FaAngleRight/></p>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonials;
