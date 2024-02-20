import React from "react";
import WhyUseImage1 from "../../assets/whyUseImage1.jpg";

const Works = () => {
  return (
    <>
      <section className="bg-[#0D121F]">
        <section className="w-[85%] m-auto ">
          <div className="max-w-[588px] bg-[#F3F5F7] max-h-[536px] rounded-xl">
            <img
              src={WhyUseImage1}
              alt="works"
              className="pt-[60px] pl-[50px] rounded-xl"
            />
          </div>

          <div className="max-w-[526px]">
            <h3 className="text-[#7C5CFC] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%]">
              HOW IT WORKS
            </h3>
            <h4 className="text-[#FFFFFF] text-[2.5rem] font-[700] leading-[60px] tracking-[-3%]">
              Few Easy Steps and Done
            </h4>
            <p className="text-[#90A3BF] text-[1.25rem] font-[400] leading-[]">
              In just few easy step, you are all set to manage your business
              finances. Manage all expenses with Spend.In all in one place.
            </p>

            <div></div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Works;
