import React from "react";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";

const Pricing = () => {
  return (
    <>
      <section className="h-[100vh] mt-[100px]">
        <section>
          <h3 className="text-[#0D121F] text-[2.5rem] font-[700] leading-[60px] tracking-[-3%] text-center">
            Ready to Get Started?
          </h3>
          <h4 className="text-[#596780] text-[1.25rem] font-[400] leading-[30px] tracking-[-2%] text-center mt-4">
            Choose a plan that suits your business needs
          </h4>
          <div className="flex justify-center mt-[50px] gap-1 items-center">
            <p className="text-[#0D121F] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%]">
              Monthly
            </p>
            <a href="#!">
              <FaToggleOff className="text-[#7C5CFC] text-[2.2rem]" />
            </a>
            <p className="text-[#0D121F] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%]">
              Yearly
            </p>
          </div>
          <p className="text-[#0D121F] w-[89px] bg-[#E7DEFE] text-[0.875rem] font-[500] leading-[21px] tracking-[-2%] m-auto text-center mt-3 p-1 rounded-[30px]">
            Save 65%
          </p>
        </section>

        {/* MAIN PRICING SECTION */}

        <section></section>
      </section>
    </>
  );
};

export default Pricing;
