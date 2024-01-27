import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import monster from "../assets/monster-hero.png";
import Marquee from 'react-marquee-slider';
import airbus from "../assets/airbus_7d88239bc0.png"
import alphabet from "../assets/alphabet_92801f6406.png"
import atlassian from "../assets/atlassian_966d50d2ab.png"
import gm from "../assets/general_mills_9afceb963d.png"
import microsoft from "../assets/microsoft_6207bd004e.png"
import netlify from "../assets/netlify_d2ea35b1df.png"
import philips from "../assets/philips_cb93d42f49.png"
import verizon from "../assets/verizon_a2e689b09e.png"
import cvs from "../assets/cvs_1159d698ec.png"


const Banner = () => {

  const logos = [
    { id: 1, src: airbus, alt: 'Logo 1' },
    { id: 2, src: alphabet, alt: 'Logo 2' },
    { id: 3, src: atlassian, alt: 'Logo 1' },
    { id: 4, src: gm, alt: 'Logo 2' },
    { id: 5, src: microsoft, alt: 'Logo 1' },
    { id: 6, src: netlify, alt: 'Logo 2' },
    { id: 7, src: philips, alt: 'Logo 1' },
    { id: 8, src: verizon, alt: 'Logo 2' },
    { id: 9, src: cvs, alt: 'Logo 1' },
  ];
  return (
    <>
    <div className="lg:mt-20 mt-36 w-full flex flex-row lg:p-20 p-5 flex-wrap">
      {/* Left div */}
      <div className="lg:w-1/2 w-full">
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
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
        <img src={monster} alt="" className="h-full w-full object-cover" />
      </div>
     
    </div>
    <div className="  h-full mt-20 mb-20">
    <Marquee velocity={30}>
      {logos.map(logo => (
        <img key={logo.id} src={logo.src} alt={logo.alt} className="w-full h-full"/>
      ))}
    </Marquee>
</div>
    </>
  );
};

export default Banner;
