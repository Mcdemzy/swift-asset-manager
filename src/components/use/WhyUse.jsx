import React from "react";
import WhyUseImage1 from "../../assets/whyUseImage1.jpg";
import { IoWalletOutline } from "react-icons/io5";
import { LuFileText } from "react-icons/lu";
import { MdOutlineStorage } from "react-icons/md";

const WhyUse = () => {
  return (
    <>
      <section className="min-h-[100vh] mt-[100px]">
        <h3 className="text-[1.25rem] font-[600] leading-[30px] tracking-[-2%] text-[#7C5CFC] text-center">
          WHY USE SAM
        </h3>
        <h4 className="text-[2.5rem] font-[700] leading-[60px] tracking-[-3%] text-[#040815] text-center">
          Easy, Simple, Affordable
        </h4>
        <p className="max-w-[712px]  mt-5 m-auto text-[1.25rem] font-[400] leading-[30px] tracking-[-2%] text-[#596780] text-center">
          Our platform helps your business in managing expenses. These are some
          of the reasons why you should use our platform in managing business
          finances.
        </p>

        {/* WRAPPER */}
        <div className="pl-[10%] m-auto flex mt-[80px] gap-5 mb-[100px]">
          <div className="max-w-[497px] min-h-[376px] mt-5 flex flex-col gap-[32px]">
            <div className="flex gap-5">
              <IoWalletOutline className="bg-[#7C5CFC] text-[2.5rem] p-[5px] rounded-xl" />
              <div className="max-w-[415px]">
                <h3 className="text-[1.5rem] font-[600] leading-[36px] tracking-[-3%] text-[#040815]">
                  Automatic Invoice Payment
                </h3>
                <span className="text-[1rem] font-[400] leading-[24px] tracking-[-2%] text-[#596780] block mt-2">
                  Automatic payments help you to arrange payments on a certain
                  date without doing it manually again.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <LuFileText className="bg-[#7C5CFC] text-[2.5rem] p-[5px] rounded-xl" />
              <div className="max-w-[415px]">
                <h3 className="text-[1.5rem] font-[600] leading-[36px] tracking-[-3%] text-[#040815]">
                  Clear payment history
                </h3>
                <span className="text-[1rem] font-[400] leading-[24px] tracking-[-2%] text-[#596780] block mt-2">
                  Clear payment history helps you to track your business
                  expenses on specific dates.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <MdOutlineStorage className="bg-[#7C5CFC] text-[2.5rem] p-[5px] rounded-xl" />
              <div className="max-w-[415px]">
                <h3 className="text-[1.5rem] font-[600] leading-[36px] tracking-[-3%] text-[#040815]">
                  Use of multi-card payments
                </h3>
                <span className="text-[1rem] font-[400] leading-[24px] tracking-[-2%] text-[#596780] block mt-2">
                  Have more than one debit or credit card? Don't worry, we
                  support payments using more than one card.
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-[608px] max-h-[413px] bg-[#F3F5F7] pt-[50px] pl-[50px] rounded-xl">
            <img
              src={WhyUseImage1}
              alt=""
              className="w-[100%] rounded-[10.66px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUse;
