import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import WhyUse from "./components/use/WhyUse";
import Works from "./components/works/Works";
import Success from "./components/success/Success";
import Testimonials from "./components/testimonials/Testimonials";
import Pricing from "./components/pricing/Pricing";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUse />
      <Works />
      <Success />
      <Testimonials />
      <Pricing />
    </>
  );
};

export default App;
