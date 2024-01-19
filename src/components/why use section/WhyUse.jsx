import React from "react";
import WhyUseImage1 from "../../assets/whyUseImage1.jpg";
import WhyUseImage2 from "../../assets/whyUseImage2.png";
import WhyUseImage3 from "../../assets/whyUseImage3.png";

const WhyUse = () => {
  return (
    <>
      {/* FIRST WHY USE SAM SECTION  */}
      <section className="w-full h-[150vh] bg-white pt-[48px] px-[112px]">
        <h2 className="text-[#7C5CFC] font-[37.5rem] text-[1.25rem]">
          Why Use Swift Asset Manager
        </h2>
        <div className="flex gap-[120px] mt-5">
          <p className="text-[#040815] max-w-[15.625rem] text-[2.5rem] font-[700] leading-[3.75rem] tracking-[-0.075rem]">
            Easy, Simple, Affordable
          </p>
          <p className="max-w-[420px] text-[#596780] font-[400px] text-[20px] leading-[30px] tracking-[-0.4px]">
            Our platform helps your business in managing assets and expenses.
            These are some of the reasons why you should use our platform in
            managing assets.
          </p>
        </div>

        <div className="w-full h-[450px] mt-[50px] flex justify-center gap-[20px] ">
          <div className="w-[360px] rounded-[12px]">
            <div className="h-[310px] pt-[50px] pb-2 pr-[50px] bg-[#F3F5F7] rounded-[12px] mb-[16px]">
              <img src={WhyUseImage2} alt="" className="" />
            </div>
            <h3 className="text-[24px] font-[600px] leading-[36px] tracking-[-0.72px] text-[#040815] px-2">
              Clear payment history
            </h3>
            <p className="text-[16px] font-[400px] leading-[24px] tracking-[-0.32px] text-[#596780] p-2">
              Still writing manual expenses? Our platform breaks down every
              expense you log down to the millisecond!
            </p>
          </div>
          <div className="w-[360px]  rounded-[12px]">
            <div className="h-[310px] pt-[50px] pb-2 pr-[50px] bg-[#F3F5F7] rounded-[12px] mb-[16px]">
              <img src={WhyUseImage3} alt="" className="" />
            </div>
            <h3 className="text-[24px] font-[600px] leading-[36px] tracking-[-0.72px] text-[#040815] px-2">
              Use of multi-card payments
            </h3>
            <p className="text-[16px] font-[400px] leading-[24px] tracking-[-0.32px] text-[#596780] p-2">
              Have more than 1 bank account or credit/debit card? Our platform
              is already integrated with many banks around the world, for easier
              payments!
            </p>
          </div>
          <div className="w-[360px]  rounded-[12px]">
            <div className="h-[310px] pt-[50px] pb-2 pr-[50px] bg-[#F3F5F7] rounded-[12px] mb-[16px]">
              <img src={WhyUseImage3} alt="" className="" />
            </div>
            <h3 className="text-[24px] font-[600px] leading-[36px] tracking-[-0.72px] text-[#040815] px-2">
              Use of multi-card payments
            </h3>
            <p className="text-[1rem] font-[25rem] leading-[1.5rem] tracking-[-0.2rem] text-[#596780] p-2">
              Have more than 1 bank account or credit/debit card? Our platform
              is already integrated with many banks around the world, for easier
              payments!
            </p>
          </div>
        </div>
      </section>

      {/* SECOND WHY USE SAM SECTION */}
      <section className="bg-white">
        <div className="text-center">
          <h2 className="text-[#7C5CFC] text-[1.25rem] font-[37.5rem] leading-[1.875rem] tracking-[-0.025rem]">
            Why Use SAM
          </h2>

          <h3 className="text-[40px] font-[700px] leading-[3.75rem] tracking-[-0.075rem] text-[#040815] mb-[.625rem]">
            Easy, Simple, Affordable
          </h3>

          <p className="max-w-[37.5rem] text-center text-[#596780] flex items-center justify-center m-auto mb-[12.5rem]">
            Our platform helps your business in managing expenses. These are
            some of the reasons why you should use our platform in managing
            business finances.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyUse;
