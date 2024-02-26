import React from "react";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import { RiHeartsFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

const Pricing = () => {
  return (
    <>
      <section className=" mt-[100px] pb-[20px]">
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

        <section className="flex gap-6 flex-wrap m-auto justify-center items-center mt-[40px]">
          <div className="bg-[#F3F5F7] max-w-[384px] p-[25px] rounded-xl">
            <div className="flex items-center gap-2">
              <RiHeartsFill className="text-[#7C5CFC] text-[2rem]" />
              <h4 className="text-[#0D121F] text-[2rem] font-[600] leading-[48px] tracking-[-3%]">
                Free
              </h4>
            </div>
            <p className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
              Perfect plan to get started
            </p>
            <p className="text-[#0D121F] text-[2.5rem] font-[600] leading-[60px] tracking-[-3%] flex items-center gap-2 mt-6 mb-6">
              $0
              <span className="text-[1rem] text-[#596780] font-[500] leading-[27px] tracking-[-2%]">
                /month
              </span>
            </p>
            <p className="text-[#1A202C] max-w-[320px] text-[1rem] font-[400] leading-[24px] tracking-[-2%] mb-8">
              A free plan grants you access to some cool features of SAM.
            </p>

            {/* CONTAINER DETAILS */}

            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Sync accross device</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">5 workspace</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Collaborate with 5 user</span>
              </p>
              <p className="flex items-center gap-4">
                <MdCancel className="text-[#596780] text-[1.5rem]" />
                <span className="text-[#0D121F]">Sharing permission</span>
              </p>
              <p className="flex items-center gap-4">
                <MdCancel className="text-[#596780] text-[1.5rem]" />
                <span className="text-[#0D121F]">Admin tools</span>
              </p>
              <p className="flex items-center gap-4">
                <MdCancel className="text-[#596780] text-[1.5rem]" />
                <span className="text-[#0D121F]">100+ integrations</span>
              </p>
            </div>
            <button className="w-[320px] h-[52px] bg-[#7C5CFC] flex justify-center items-center rounded-[30px] mt-4 text-[1rem] text-[#FFFFFF] font-[600] leading-[24px] tracking-[-2%]">
              Start Your Free Trial
            </button>
          </div>
          {/*  */}
          <div className="bg-[#F3F5F7] max-w-[384px] p-[25px] rounded-xl">
            <div className="flex items-center gap-2">
              <RiHeartsFill className="text-[#7C5CFC] text-[2rem]" />
              <h4 className="text-[#0D121F] text-[2rem] font-[600] leading-[48px] tracking-[-3%]">
                Pro
              </h4>
            </div>
            <p className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
              Perfect plan for professionals!
            </p>
            <p className="text-[#0D121F] text-[2.5rem] font-[600] leading-[60px] tracking-[-3%] flex items-center gap-2 mt-6 mb-6">
              $12
              <span className="text-[1rem] text-[#596780] font-[500] leading-[27px] tracking-[-2%]">
                /month
              </span>
            </p>
            <p className="text-[#1A202C] max-w-[320px] text-[1rem] font-[400] leading-[24px] tracking-[-2%] mb-8">
              For professionals only! Start arranging your expenses with our
              best templates.
            </p>
            {/* CONTAINER DETAILS */}
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Everything in Free Plan</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Unlimited workspace</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Collaborative workspace</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Sharing permission</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Admin tools</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">100+ integrations</span>
              </p>
            </div>
            <button className="w-[320px] h-[52px] bg-[#7C5CFC] flex justify-center items-center rounded-[30px] mt-4 text-[1rem] text-[#FFFFFF] font-[600] leading-[24px] tracking-[-2%]">
              Get Started
            </button>
          </div>
          {/*  */}
          <div className="bg-[#F3F5F7] max-w-[384px] p-[25px] rounded-xl">
            <div className="flex items-center gap-2">
              <RiHeartsFill className="text-[#7C5CFC] text-[2rem]" />
              <h4 className="text-[#0D121F] text-[2rem] font-[600] leading-[48px] tracking-[-3%]">
                Ultimate
              </h4>
            </div>
            <p className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
              Best suits for great company!
            </p>
            <p className="text-[#0D121F] text-[2.5rem] font-[600] leading-[60px] tracking-[-3%] flex items-center gap-2 mt-6 mb-6">
              $33
              <span className="text-[1rem] text-[#596780] font-[500] leading-[27px] tracking-[-2%]">
                /month
              </span>
            </p>
            <p className="text-[#1A202C] max-w-[320px] text-[1rem] font-[400] leading-[24px] tracking-[-2%] mb-8">
              If you are a finance manager at a big company, this plan is a
              perfect match.
            </p>

            {/* CONTAINER DETAILS */}

            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Everything in Pro Plan</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">
                  Daily performance reports
                </span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Dedicated assistant</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Artificial intelligence</span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">
                  Marketing tools & automations
                </span>
              </p>
              <p className="flex items-center gap-4">
                <FaCircleCheck className="text-[#9CD323] text-[1.5rem]" />
                <span className="text-[#0D121F]">Advanced security</span>
              </p>
            </div>
            <button className="w-[320px] h-[52px] bg-[#7C5CFC] flex justify-center items-center rounded-[30px] mt-4 text-[1rem] text-[#FFFFFF] font-[600] leading-[24px] tracking-[-2%]">
              Get Started
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Pricing;

// Editing Pricing Component list
