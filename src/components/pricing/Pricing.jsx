import React from "react";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import { RiHeartsFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

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

        <section>
          <div className="bg-[#F3F5F7]">
            <div className="flex items-center gap-2">
              <RiHeartsFill className="text-[#7C5CFC] text-[2rem]" />
              <h4 className="text-[#0D121F] text-[2rem] font-[600] leading-[48px] tracking-[-3%]">
                Free
              </h4>
            </div>
            <p className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
              Perfect plan to get started
            </p>
            <p className="text-[#0D121F] text-[2.5rem] font-[600] leading-[60px] tracking-[-3%] flex items-center gap-2">
              $0
              <span className="text-[1rem] text-[#596780] font-[500] leading-[27px] tracking-[-2%]">
                /month
              </span>
            </p>
            <p className="text-[#1A202C] max-w-[320px] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
              A free plan grants you access to some cool features of SAM.
            </p>

            {/* CONTAINER DETAILS */}

            <div></div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Pricing;
