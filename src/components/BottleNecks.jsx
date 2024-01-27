import React from "react";
import beforeImg from "../assets/beforeImg.png";
import afterImg from "../assets/afterImg.png";

const BottleNecks = () => {
  return (
    <div className="flex justify-center flex-wrap p-5">
    <div className="lg:mt-20 mt-10  shadow-xl bg-white rounded-2xl h-full p-10 lg:w-5/6 w-full flex flex-wrap justify-between">
      {/* Left Div */}
      <div className="lg:w-1/2 w-full">
        <p className="text-lg font-bold text-[#2058e4]">DATA BOTTLENECKS</p>
        <p className="mt-5 text-2xl font-bold">
          Building data backends is slowing your modernization
        </p>
        <p className="mt-11 text-lg text-gray-500">
          Many modernization projects involve breaking the monolith into
          domain-oriented microservices servicing multiple products and apps.
          Eventually, this causes a few bottlenecks:
        </p>
        <ul className="mt-10 list-disc text-gray-500 text-lg flex flex-col gap-5">
          <li>
            Building, operating, and evolving domain APIs / services is slow and
            time-consuming.
          </li>
          <li>
            Consuming data from decentralized domain APIs gets more complex,
            resulting in duplicated integration efforts or BFFs.
          </li>
        </ul>
        <div className="w-full mt-5 flex gap-5">
          <div className="lg:w-1/5 w-2/3">
            <p className="rounded-full pl-2 pr-2 pt-1 pb-1 bg-[#dfe8ff] font-semibold text-gray-600 flex place-content-center">
              End Result
            </p>
          </div>
          <div className="w-4/5">
            <p className="text-lg text-gray-500">
              Enterprises are slow (or worse, unable) to ship new features and
              experiences!
            </p>
          </div>
        </div>
        <hr className="mt-28 mb-28" />

        <p className="text-lg font-bold text-[#2058e4]">UNLOCK DATA ACCESS</p>
        <p className="mt-5 text-2xl font-bold">
          Codetex Data Delivery Network: Free the backend
        </p>
        <p className="mt-11 text-lg text-gray-500">
          Codetex removes these bottlenecks, enabling you to ship new products
          and features radically faster.
        </p>
        <ul className="mt-10 list-disc text-gray-500 text-lg flex flex-col gap-5">
          <li>
            With extensible data connectors, build and run high-quality APIs on
            any domain data (database, service, etc.) in a matter of minutes.
          </li>
          <li>
            Instantly compose individual data domains (subgraphs) into a
            supergraph, eliminating data access and integration challenges.
          </li>
        </ul>
      </div>
      {/* Right Div */}
      <div className="w-1/2 place-content-end items-start lg:flex hidden">
        <img src={beforeImg} alt="" className="h-[400px] w-[400px]" />
      </div>
    </div>
    </div>
  );
};

export default BottleNecks;
