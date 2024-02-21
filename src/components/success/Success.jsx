import React from "react";
import WhyUseImage1 from "../../assets/whyUseImage1.jpg";
import { FaCircleCheck } from "react-icons/fa6";

const Success = () => {
  return (
    <>
      <section className="bg-white text-black w-[90%] m-auto pt-[100px] pb-[100px]">
        <h3 className="text-[#7C5CFC] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%]">
          INCREASE PRODUCTIVITY
        </h3>
        <p className="text-[#0D121F] max-w-[634px] text-[2.5rem] font-[700] leading-[60px] tracking-[-3%]">
          Reduce Time in Doing Manual Work Managing Expenses
        </p>

        <section className="flex justify-between">
          <div>
            <div className="w-[368px] h-[56px] bg-[#F3F5F7] rounded-[30px] flex mt-[50px]">
              <div className="bg-[#7C5CFC] w-[169px] rounded-[30px] flex justify-center items-center text-[#FFFFFF]">
                With SAM
              </div>
              <div className="max-w-[195px] ml-[20px] rounded-[30px] flex justify-center items-center text-[#90A3BF]">
                Without SAM
              </div>
            </div>
            {/*  */}
            <div className="max-w-[526px] h-[294px] mt-[60px] flex flex-col gap-7">
              <h4 className="text-[#0D121F] text-[1.5rem] font-[700] leading-[36px] tracking-[-3%]">
                Track Business Expenses until its Milisecond
              </h4>
              <div className="max-w-[490px] flex">
                <FaCircleCheck className="text-[#9CD323] mt-[6px] mr-[5px] text-[1.1rem]" />
                <p className="text-[#0D121F] text-[1.13rem] font-[500] leading-[27px] tracking-[-2%]">
                  Analyze your business cost easily with group transaction
                  thorugh tagging feature.
                </p>
              </div>
              <div className="max-w-[490px] flex">
                <FaCircleCheck className="text-[#9CD323] mt-[6px] mr-[5px] text-[1.1rem]" />
                <p className="text-[#0D121F] text-[1.13rem] font-[500] leading-[27px] tracking-[-2%]">
                  Add more than one card for payment. Integrated with more than
                  50+ payment method and support bulk payment.
                </p>
              </div>
              <div className="max-w-[490px] flex">
                <FaCircleCheck className="text-[#9CD323] mt-[6px] mr-[5px] text-[1.1rem]" />
                <p className="text-[#0D121F] text-[1.13rem] font-[500] leading-[27px] tracking-[-2%]">
                  Arrange your business expenses by date, name, etc., with just
                  one click.
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="max-w-[486px] max-h-[434px] rounded-xl">
            <img src={WhyUseImage1} alt="" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Success;
