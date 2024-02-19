import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import WhyUse from "./components/use/WhyUse";
// import Success from "./components/success/Success";
import Works from "./components/works/Works";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUse />
      <Works />
    </>
  );
};

export default App;
