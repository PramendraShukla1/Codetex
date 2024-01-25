import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Countdown from "./components/Countdown";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Testimonials/>
      <Countdown/>
    </>
  );
};

export default App;
