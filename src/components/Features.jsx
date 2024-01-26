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
    <div className="flex justify-center flex-col place-content-center items-center">
      <div className="mt-20 w-5/6 shadow-xl bg-white rounded-2xl h-full p-10">
        <div className="w-full flex justify-center ">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">
              Build reliable microservices without worrying about API
              infrastructure
            </h1>
          </div>
          <div className="w-1/2">
            <p className="text-xl text-gray-600">
              Hasura is the fastest way for developers to create a full-featured
              and production-grade API, with the ability to compose and bring in
              business logic using customizable open source connectors.
            </p>
          </div>
        </div>
        <div className="mt-10 w-full flex gap-10 flex-wrap justify-center">
          <div className="w-2/5 border border-gray-300 p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <TbClockCog
                size={50}
                className="border rounded-full bg-[#fff3d4] p-1"
              />
            </div>
            <div className="w-5/6">
              <p className="text-lg text-gray-600">
                Build microservices in any programming language, extending
                Hasura’s robust API server
              </p>
            </div>
          </div>
          <div className="w-2/5 border border-gray-300 p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <FaBoxOpen
                size={50}
                className="border rounded-full bg-[#fff3d4] p-1"
              />
            </div>
            <div className="w-5/6">
              <p className="text-lg text-gray-600">
                Instantly deliver powerful full-featured APIs, managing complex
                queries, relationships, mutations, and validations
              </p>
            </div>
          </div>
          <div className="w-2/5 border border-gray-300 p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <GiFrozenBlock
                size={50}
                className="border rounded-full bg-[#fff3d4] p-1"
              />
            </div>
            <div className="w-5/6">
              <p className="text-lg text-gray-600">
                Speed up API authoring with our comprehensive code-driven and
                declarative workflows that help design, build, deploy, iterate,
                and maintain APIs
              </p>
            </div>
          </div>
          <div className="w-2/5 border border-gray-300 p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <FaNetworkWired
                size={50}
                className="border rounded-full bg-[#fff3d4] p-1"
              />
            </div>
            <div className="w-5/6">
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

      <div className="mt-20 w-5/6 shadow-2xl bg-white rounded-xl h-full p-10">
        <div className="w-full flex justify-center gap-5">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">
              Instantly compose a planet-scale supergraph for your data domains
            </h1>
          </div>
          <div className="w-1/2">
            <p className="text-xl text-gray-600">
              Hasura is the easiest way for teams to collaborate on and evolve a
              supergraph, with a blazing-fast and federated CI/CD experience.
            </p>
          </div>
        </div>
        <div className="mt-10 w-full flex gap-10 flex-wrap justify-center">
          <div className="w-2/5 border border-gray-300 p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <TbClockCog
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="w-5/6">
              <p className="text-lg text-gray-600">
                Grow your supergraph incrementally by seamlessly integrating
                modular building blocks (subgraphs)
              </p>
            </div>
          </div>
          <div className="w-2/5 border border-gray-300 p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <FaBoxOpen
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="w-5/6">
              <p className="text-lg text-gray-600">
                Standardized API schema across subgraphs for composability.
              </p>
            </div>
          </div>
          <div className="w-2/5 border border-gray-300 p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <GiFrozenBlock
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="w-5/6">
              <p className="text-lg text-gray-600">
                Federated SDLC and governance with namespaces, environments, and
                schema registry with granular access control (coming soon)
              </p>
            </div>
          </div>
          <div className="w-2/5 border border-gray-300 p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <FaNetworkWired
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="w-5/6">
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
      <div className="mt-20 w-5/6 shadow-xl bg-white rounded-2xl h-full ">
        <div className="w-full flex gap-10">
          <div className="w-1/2 p-20">
            <p className="font-bold text-[#81a4ff] text-sm">INTEGRATIONS</p>
            <h1 className="text-4xl font-bold">
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
          <div className="w-1/2 flex justify-end place-content-end items-end ">
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
      <div className="mt-20 w-5/6 shadow-xl bg-white rounded-2xl h-full p-20 flex gap-5">
<div className="w-1/2">
    <p className="text-[#81a4ff] text-sm font-bold">MODERNIZE DELIVERY</p>
    <h1 className="font-bold text-4xl mt-7">Fundamentally transform data access and API development</h1>
    <p className="mt-5 text-lg text-gray-500">Faster API development equals a massive reduction in cost, complexity, and time to market.</p>
    <div className="flex items-end justify-start mt-24">
    <img src={stack} width={250} alt="" />
    </div>
    <p className="mt-5 flex gap-1 items-center font-bold text-sm text-[#5279e8] cursor-pointer">Get the whitepaper <RxArrowRight/></p>

</div>
<div className="w-1/2">
<div className=" p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <AiOutlineThunderbolt
                size={50}
                className="border rounded-full bg-[#dfe8ff] p-1"
              />
            </div>
            <div className="w-5/6">
                <h1 className="mb-3 text-2xl font-bold">Build new applications faster</h1>
              <p className="text-lg text-gray-600">
                Speed up API authoring with our comprehensive code-driven and
                declarative workflows that help design, build, deploy, iterate,
                and maintain APIs
              </p>
            </div>
          </div>
          <div className=" p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <RxColorWheel
                size={50}
                className="border rounded-full bg-[#ede1ff] p-1"
              />
            </div>
            <div className="w-5/6">
                <h1 className="mb-3 text-2xl font-bold">Build new applications faster</h1>
              <p className="text-lg text-gray-600">
                Speed up API authoring with our comprehensive code-driven and
                declarative workflows that help design, build, deploy, iterate,
                and maintain APIs
              </p>
            </div>
          </div>
          <div className=" p-10 rounded-2xl flex gap-8">
            <div className="w-1/6">
              <SlPuzzle
                size={50}
                className="border rounded-full bg-[#c2f4ff] p-1"
              />
            </div>
            <div className="w-5/6">
                <h1 className="mb-3 text-2xl font-bold">Build new applications faster</h1>
              <p className="text-lg text-gray-600">
                Speed up API authoring with our comprehensive code-driven and
                declarative workflows that help design, build, deploy, iterate,
                and maintain APIs
              </p>
            </div>
          </div>
</div>
      </div>
    </div>
  );
};

export default Features;
