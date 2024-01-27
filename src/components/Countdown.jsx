import React from "react";
import NumberCounter from "number-counter";

const Countdown = () => {
  return (
    <div className="lg:mt-20 mt-10 w-full flex flex-row flex-wrap lg:flex-nowrap justify-start lg:justify-normal">
      {/* <NumberCounter end={100} delay={5} className="increment" preFix="Up revenue:" postFix="$"/> */}
      <div className="lg:w-2/5 w-full flex flex-col items-center justify-between mb-10 lg:mb-0">
        <p className="text-6xl lg:font-bold font-semibold text-[#3970fd] flex"><NumberCounter end={600} start={300} delay={5} className="increment"/>M+</p>
        <p className="mt-5 text-lg font-semibold text-gray-500">Downloads</p>
      </div>
     <p className="text-8xl font-thin text-gray-300 hidden lg:block">|</p>
      <div className="lg:w-2/5 w-full flex flex-col items-center justify-between mb-10 lg:mb-0">
        <p className="text-6xl font-bold text-[#712ae3] flex"><NumberCounter end={30} delay={5} className="increment"/>K+</p>
        <p className="mt-5 text-lg font-semibold text-gray-500">GitHub stars</p>
      </div>
      <p className="text-8xl font-thin text-gray-300 hidden lg:block">|</p>
      <div className="lg:w-2/5 w-full flex flex-col items-center justify-between mb-10 lg:mb-0">
        <p className="text-6xl font-bold text-[#3ecae8] flex"><NumberCounter end={10} delay={5} className="increment"/>B+</p>
        <p className="mt-5 text-lg font-semibold text-gray-500">API calls served / day</p>
      </div>
    </div>
  );
};

export default Countdown;
