import React from "react";
import { TbClockCog } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa6";
import { GiFrozenBlock } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RxArrowRight, RxColorWheel } from "react-icons/rx";
import { SlPuzzle } from "react-icons/sl";
import stack from "../assets/stack.png"
import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaNetworkWired,
} from "react-icons/fa";
import video from "../assets/video.mp4";

const Features = () => {
  return (
    <div className="flex justify-center flex-col place-content-center items-center p-5">
      <div className="mt-20 lg:w-5/6 w-full shadow-xl bg-white rounded-2xl h-full p-10">
        <div className="w-full flex justify-center flex-wrap">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl font-bold text-gray-800">
              Build reliable microservices without worrying about API
              infrastructure
            </h1>
          </div>
          <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
            <p className="text-xl text-gray-600">
              Codetex is the fastest way for developers to create a full-featured
              and production-grade API, with the ability to compose and bring in
              business logic using customizable open source connectors.
            </p>
          </div>
        </div>
        <div className="mt-10 w-full flex gap-10 flex-wrap justify-center">
          <div className="lg:w-2/5 w-full border border-gray-300 lg:p-10 p-5 rounded-2xl flex gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <TbClockCog
                size={50}
                className="border rounded-full bg-[#fff3d4] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
              <p className="text-lg text-gray-600">
                Build microservices in any programming language, extending
                Codetex robust API server
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full border border-gray-300 lg:p-10 p-5 rounded-2xl flex gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <FaBoxOpen
                size={50}
                className="border rounded-full bg-[#fff3d4] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
              <p className="text-lg text-gray-600">
                Instantly deliver powerful full-featured APIs, managing complex
                queries, relationships, mutations, and validations
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full border border-gray-300 lg:p-10 p-5 rounded-2xl flex gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <GiFrozenBlock
                size={50}
                className="border rounded-full bg-[#fff3d4] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
              <p className="text-lg text-gray-600">
                Speed up API authoring with our comprehensive code-driven and
                declarative workflows that help design, build, deploy, iterate,
                and maintain APIs
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full border border-gray-300 lg:p-10 p-5 rounded-2xl flex gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <FaNetworkWired
                size={50}
                className="border rounded-full bg-[#fff3d4] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
              <p className="text-lg text-gray-600">
                Protect APIs with a powerful authorization engine featuring
                fine-grained access controls
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-md text-[#417df9] cursor-pointer flex gap-2 items-center">
            Learn more about autogenerating APIs <FaArrowAltCircleRight />
          </p>
        </div>
      </div>

      <div className="mt-20 lg:w-5/6 w-full shadow-xl bg-white rounded-xl h-full p-10">
        <div className="w-full flex justify-center gap-5 flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl font-bold text-gray-800">
              Instantly compose a planet-scale supergraph for your data domains
            </h1>
          </div>
          <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
            <p className="text-xl text-gray-600">
              Codetex is the easiest way for teams to collaborate on and evolve a
              supergraph, with a blazing-fast and federated CI/CD experience.
            </p>
          </div>
        </div>
        <div className="mt-10 w-full flex gap-10 flex-wrap justify-center">
          <div className="lg:w-2/5 w-full border border-gray-300 lg:p-10 p-5 rounded-2xl flex gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <TbClockCog
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
              <p className="text-lg text-gray-600">
                Grow your supergraph incrementally by seamlessly integrating
                modular building blocks (subgraphs)
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full border border-gray-300 lg:p-10 p-5 rounded-2xl flex gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <FaBoxOpen
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
              <p className="text-lg text-gray-600">
                Standardized API schema across subgraphs for composability.
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full border border-gray-300 lg:p-10 p-5 rounded-2xl flex gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <GiFrozenBlock
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
              <p className="text-lg text-gray-600">
                Federated SDLC and governance with namespaces, environments, and
                schema registry with granular access control (coming soon)
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full border border-gray-300 lg:p-10 p-5 rounded-2xl flex gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <FaNetworkWired
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
              <p className="text-lg text-gray-600">
                Blazing-fast query execution with detailed query plan and
                analysis
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-md text-[#417df9] cursor-pointer flex gap-2 items-center">
            Learn more about supergraph architectures
            <FaArrowAltCircleRight />
          </p>
        </div>
      </div>
      <div className="mt-20 lg:w-5/6 w-full shadow-xl bg-white rounded-2xl h-full ">
        <div className="w-full flex gap-10 flex-col lg:flex-row flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full lg:p-20 p-10">
            <p className="font-bold text-[#81a4ff] text-sm">INTEGRATIONS</p>
            <h1 className="lg:text-4xl text-3xl font-bold mt-5 lg:mt-0">
              Instant API on 100+ data sources
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Empower developers to effortlessly generate APIs by connecting to
              existing databases, GraphQL and REST APIs, eliminating the need
              for manual API creation while enabling rapid, scalable application
              development.
            </p>
            <button className="border p-3 font-bold border-[#417df9] text-[#417df9] flex gap-1 items-center mt-5 rounded-full hover:text-white hover:bg-blue-700">
              See all databases <FaArrowRight />
            </button>
          </div>
          <div className="lg:w-1/2 w-full flex justify-end place-content-end items-end ">
            <video
              src={video}
              autoPlay
              muted
              loop
              type="video/mp4"
              className="rounded-2xl rounded-l-none rounded-tl-2xl"
            ></video>
          </div>
        </div>
      </div>
      <div className="mt-20 lg:w-5/6 w-full shadow-xl bg-white rounded-2xl h-full lg:p-20 p-10 flex gap-5 flex-wrap lg:flex-nowrap">
<div className="lg:w-1/2 w-full ">
    <p className="text-[#81a4ff] text-sm font-bold">MODERNIZE DELIVERY</p>
    <h1 className="font-bold text-3xl lg:text-4xl mt-7">Fundamentally transform data access and API development</h1>
    <p className="mt-5 text-lg text-gray-500">Faster API development equals a massive reduction in cost, complexity, and time to market.</p>
    <div className="flex flex-col justify-start">

   
    <div className="flex items-end justify-start mt-24 flex-wrap lg:flex-nowrap">
    <img src={stack} width={250} alt="" />
    </div>
    <p className="mt-5 flex gap-1 items-center font-bold text-sm text-[#5279e8] cursor-pointer">Get the whitepaper <RxArrowRight/></p>
    </div>
</div>
<div className="lg:w-1/2 w-full">
<div className=" p-5 rounded-2xl flex lg:gap-8 gap-5 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <AiOutlineThunderbolt
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
                <h1 className="mb-3 text-2xl font-bold">Build new applications faster</h1>
              <p className="text-lg text-gray-600">
              Build new applications or add new features to an existing application in days instead of weeks, using the power of GraphQL and self-serve access to data.
              </p>
            </div>
          </div>
          <div className=" p-5 rounded-2xl flex lg:gap-8 gap-5 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <RxColorWheel
                size={50}
                className="border rounded-full bg-[#ede1ff] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
                <h1 className="mb-3 text-2xl font-bold">Accelerate modernization</h1>
              <p className="text-lg text-gray-600">
              Fast track cloud migration, frontend and backend modernization, and application re-architecture projects by automating 80% of your API development work.
              </p>
            </div>
          </div>
          <div className="p-5 rounded-2xl flex lg:gap-8 gap-5 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/6 w-full">
              <SlPuzzle
                size={50}
                className="border rounded-full bg-[#c2f4ff] p-1"
              />
            </div>
            <div className="lg:w-5/6 w-full">
                <h1 className="mb-3 text-2xl font-bold">Standardize data access org-wide</h1>
              <p className="text-lg text-gray-600">
              Replace direct database access with a scalable, performant, and secure data API to create a unified and federated “core data service.”
              </p>
            </div>
          </div>
</div>
      </div>
    </div>
  );
};

export default Features;
