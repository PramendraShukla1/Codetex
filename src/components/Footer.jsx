import React from "react";
import logo from "../assets/logo_name.png";

const Footer = () => {
  return (
    <>
    <div className="lg:p-10 p-5 w-full flex lg:flex-row flex-col gap-10 flex-wrap mt-20 lg:mt-0">
      <div className="lg:w-1/6 w-1/2">
        <img src={logo} alt="" />
      </div>
      <div className="lg:w-4/5 w-full flex-wrap lg:justify-normal justify-between flex lg:gap-10 gap-14">
        <ul className="flex flex-col gap-5 text-gray-600 cursor-pointer ">
          <li className="font-bold">Platform</li>
          <li>Codetex CE Edition</li>
          <li>Codetex EE</li>
          <li>Codetex Cloud</li>
          <li>Pricing</li>
        </ul>

        <ul className="flex flex-col gap-5 text-gray-600 cursor-pointer">
          <li className="font-bold">Capabilities</li>
          <li>Instant API</li>
          <li>Authorization</li>
          <li>Performance</li>
          <li>Federation</li>
          <li>API Security</li>
          <li>Observability</li>
        </ul>
        <ul className="flex flex-col gap-5 text-gray-600 cursor-pointer">
          <li className="font-bold">Build</li>
          <li>Docs</li>
          <li>Changelog</li>
          <li>Codetex Hub</li>
          <li>GraphiQL</li>
        </ul>

        <ul className="flex flex-col gap-5 text-gray-600 cursor-pointer">
          <li className="font-bold">Learn</li>
          <li>Blog</li>
          <li>Tutorials</li>
          <li>Events</li>
        </ul>

        <ul className="flex flex-col gap-5 text-gray-600 cursor-pointer">
          <li className="font-bold">Company</li>
          <li>Our Story</li>
          <li>Careers</li>
          <li>Partners</li>
          <li>Legal</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="flex flex-col gap-5 text-gray-600 cursor-pointer">
          <li className="font-bold">Connect</li>
          <li>Community</li>
          <li>Discord</li>
        </ul>

        <ul className="flex flex-col gap-5 text-gray-600 cursor-pointer">
          <li className="font-bold"> Community</li>
          <li>Docs</li>
          <li>Help</li>
          <li>Github</li>
          <li>Swag Store</li>
          <li>Contact Sales</li>
        </ul>
      </div>
     
    </div>
    <div className="mt-10 flex justify-center mb-20">
        <a href="https://www.linkedin.com/in/pramendra-shukla-11812a221/" className="text-lg font-bold hover:text-gray-900 text-gray-600 cursor-pointer">Made With ❤️ By Pramendra Shukla</a>
        
      </div>
    </>
  );
};

export default Footer;
