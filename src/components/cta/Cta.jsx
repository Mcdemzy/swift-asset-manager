import React from "react";
import CtaImage from "../../assets/whyUseImage1.jpg";

const Cta = () => {
  return (
    <>
      <section className="bg-[#0D121F] flex gap-10 justify-between cta__container">
        {/* CTA CONTENT */}

        <div className="p-[40px] cta__content">
          <h3 className="text-[#7C5CFC] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%]">
            DOWNLOAD NOW!
          </h3>
          <h4 className="text-[#FFFFFF] max-w-[454px] text-[2.5rem] font-[700] leading-[60px] tracking-[-3%]">
            Start Tracking Your Business Assets Today
          </h4>
          <p className="text-[#596780] max-w-[568px] text-[1.25rem] font-[400] leading-[30px] tracking-[-2%] mt-4 mb-8">
            Here are some testimonials from our user after using SAM to manage
            their business assets.
          </p>
          <button className="w-[187px] h-[52px] bg-[#7C5CFC] flex justify-center items-center rounded-[30px] mt-4 text-[1rem] text-[#FFFFFF] font-[600] leading-[24px] tracking-[-2%]">
            Get a Free demo
          </button>
        </div>

        {/*  CTA IMAGE */}

        <div className="bg-[#FFFFFF] p-6 mt-[100px] rounded-tl-2xl cta__image">
          <img src={CtaImage} alt="" width={450} className="h-[fit-content]" />
        </div>
      </section>
    </>
  );
};

export default Cta;
