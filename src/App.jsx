import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import WhyUse from "./components/use/WhyUse";
import Success from "./components/success/Success";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUse />
      <Success />
    </>
  );
};

export default App;
