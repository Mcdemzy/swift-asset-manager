import React from "react";
import HeroImage from "../../assets/dashboard3.webp";
const Hero = () => {
  return (
    <>
      <section className="bg-[#0D121F]">
        <section className=" hero_section mb-3">
          <h1 className="text-6xl flex justify-center text-center ">
            All Your Assets <br /> managed in one place.
          </h1>

          <h3 className="text-2xl flex justify-center text-center mt-10">
            Your one-stop Asset Mangement platform.
            <br />
            Manage all your assets with Swift Asset Manager
          </h3>
        </section>
        <section className="flex justify-center mt-10 gap-2.5">
          <a
            href=""
            className="hero_demo w-30 p-4 h-16 flex justify-center text-center items-center"
          >
            Get a Free Demo
          </a>
          <a
            href=""
            className="hero_plans w-30 p-4 h-16 flex justify-center text-center items-center"
          >
            See Pricing Plans
          </a>
        </section>
        <div className="rough flex justify-center items-center ">
          <img
            src={HeroImage}
            alt="dashboard image"
            className="rounded-xl mb-3"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
