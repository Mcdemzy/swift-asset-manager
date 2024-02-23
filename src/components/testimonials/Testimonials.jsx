import React from "react";
import TestimonialImage1 from "../../assets/testimonialImage1.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

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

        <section className="flex gap-5  w-[80%] m-auto mt-[80px]">
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

            <div className="mt-[40px] flex gap-6">
              <img
                src={TestimonialImage1}
                alt="Testimonial Image"
                className="rounded-[12px] w-[70px] h-[70px]"
              />
              <div className="mt-5">
                <h5 className="text-[#FFFFFF] text-[1.125rem] font-[700] leading-[27px] tracking-[-3%]">
                  Jimmy Bartney
                </h5>
                <p className="text-[#C3D4E9] text-[0.875rem] font-[400] leading-[21px] tracking-[-2%]">
                  Product Manager at Picko Lab
                </p>
              </div>
            </div>
          </div>
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

            <div className="mt-[40px] flex gap-6">
              <img
                src={TestimonialImage1}
                alt="Testimonial Image"
                className="rounded-[12px] w-[70px] h-[70px]"
              />
              <div className="mt-5">
                <h5 className="text-[#FFFFFF] text-[1.125rem] font-[700] leading-[27px] tracking-[-3%]">
                  Jimmy Bartney
                </h5>
                <p className="text-[#C3D4E9] text-[0.875rem] font-[400] leading-[21px] tracking-[-2%]">
                  Product Manager at Picko Lab
                </p>
              </div>
            </div>
          </div>
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

            <div className="mt-[40px] flex gap-6">
              <img
                src={TestimonialImage1}
                alt="Testimonial Image"
                className="rounded-[12px] w-[70px] h-[70px]"
              />
              <div className="mt-5">
                <h5 className="text-[#FFFFFF] text-[1.125rem] font-[700] leading-[27px] tracking-[-3%]">
                  Jimmy Bartney
                </h5>
                <p className="text-[#C3D4E9] text-[0.875rem] font-[400] leading-[21px] tracking-[-2%]">
                  Product Manager at Picko Lab
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ARROWS */}
        <div className="flex m-auto items-center justify-center mt-16 gap-8">
          <a href="#!">
            <FaArrowLeftLong className="bg-[#1A202C] text-[#C3D4E9] p-3 text-[3rem] rounded-full" />
          </a>
          <a href="#!">
            <FaArrowRightLong className="bg-[#7C5CFC] text-[#FFFFFF] p-3 text-[3rem] rounded-full" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
