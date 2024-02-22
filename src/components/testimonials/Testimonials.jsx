import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="bg-black pt-[100px] pb-[100px]">
        <h3 className="text-[#7C5CFC] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%] text-center">
          WHAT THEY SAY
        </h3>
        <h4 className="text-[#FFFFFF] text-[2.5rem] font-[700] leading-[60px] tracking-[-3%] text-center pt-[20px]">
          Our User Kind Words
        </h4>
        <p className="max-w-[568px] m-auto text-[#90A3BF] text-[1.25rem] font-[400] leading-[30px] tracking-[-2%] text-center ">
          Here are some testimonials from our user after using SAM to manage
          their business assets.
        </p>
        {/* MAIN TESTIMONIAL */}

        <div>
          <div className="bg-[#1A202C] w-[384px] h-[363px] rounded-xl p-[20px] ">
            <h4 className="text-[#FFFFFF] text-[1.125rem] font-[600] leading-[27px] tracking-[-2]">
              It’s just incredible!
            </h4>
            <p className="text-[#F3F5F7] text-[1rem] font-[500] leading-[24px] tracking-[-2%] mt-5 border-b-2 pb-10 border-[#90A3BF]">
              It’s just 1 month since I’m using SAM to manage my business
              assets, but the result is very satisfying! My business finance is
              now more neat than before, thanks to SAM!
            </p>
            {/* User Section */}

            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
