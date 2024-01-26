import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Countdown from "./components/Countdown";
import BottleNecks from "./components/BottleNecks";
import Features from "./components/Features";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Testimonials/>
      <Countdown/>
      <BottleNecks/>
      <Features/>
    </>
  );
};

export default App;
