import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Countdown from "./components/Countdown";
import BottleNecks from "./components/BottleNecks";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Testimonials/>
      <Countdown/>
      <BottleNecks/>
      <Features/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default App;
