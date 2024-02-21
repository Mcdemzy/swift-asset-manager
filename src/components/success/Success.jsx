import React, { useState } from "react";
import SuccessImage1 from "../../assets/successImage1.jpg";
import SuccessImage2 from "../../assets/successImage2.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

const Success = () => {
  const [showWithSamDetails, setShowWithSamDetails] = useState(true);

  const toggleDetails = () => {
    setShowWithSamDetails(!showWithSamDetails);
  };

  return (
    <>
      {/* FIRST SUCCESS STORY SECTION  */}
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
              <div
                className={`bg-[#7C5CFC] w-[195px] rounded-[30px] flex justify-center items-center text-[#FFFFFF] ${
                  showWithSamDetails
                    ? "bg-[#7C5CFC] clickable"
                    : "bg-[#F3F5F7] clickable"
                }`}
                onClick={toggleDetails}
              >
                <a href="#!">With SAM</a>
              </div>
              <div
                className={`w-[169px] ml-[20px] rounded-[30px] flex justify-center items-center text-[#90A3BF] ${
                  !showWithSamDetails
                    ? "bg-[#7C5CFC] clickable"
                    : "bg-[#F3F5F7] clickable"
                }`}
                onClick={toggleDetails}
              >
                <a href="#!">Without SAM</a>
              </div>
            </div>
            {/*  */}
            <div className="max-w-[526px] h-[294px] mt-[60px] flex flex-col gap-7">
              {showWithSamDetails ? (
                <>
                  <h4 className="text-[#0D121F] text-[1.5rem] font-[700] leading-[36px] tracking-[-3%]">
                    Track Business Expenses until its Milisecond
                  </h4>
                  <div className="max-w-[490px] flex">
                    <FaCircleCheck className="text-[#9CD323] mt-[6px] mr-[5px] text-[1.3rem]" />
                    <p className="text-[#0D121F] text-[1.13rem] font-[500] leading-[27px] tracking-[-2%]">
                      Analyze your business cost easily with group transaction
                      thorugh tagging feature.
                    </p>
                  </div>
                  <div className="max-w-[490px] flex">
                    <FaCircleCheck className="text-[#9CD323] mt-[6px] mr-[5px] text-[1.7rem]" />
                    <p className="text-[#0D121F] text-[1.13rem] font-[500] leading-[27px] tracking-[-2%]">
                      Add more than one card for payment. Integrated with more
                      than 50+ payment method and support bulk payment.
                    </p>
                  </div>
                  <div className="max-w-[490px] flex">
                    <FaCircleCheck className="text-[#9CD323] mt-[6px] mr-[5px] text-[1.1rem]" />
                    <p className="text-[#0D121F] text-[1.13rem] font-[500] leading-[27px] tracking-[-2%]">
                      Arrange your business expenses by date, name, etc., with
                      just one click.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-[#0D121F] text-[1.5rem] font-[700] leading-[36px] tracking-[-3%]">
                    Taking too long to tidy up your assets makes your business
                    unproductive
                  </h4>
                  <div className="max-w-[490px] flex">
                    <MdCancel className="text-[#FF4423] mt-[6px] mr-[5px] text-[1.2rem]" />
                    <p className="text-[#0D121F] text-[1.13rem] font-[500] leading-[27px] tracking-[-2%]">
                      Complex recording process due to every administrative file
                      in a different place.
                    </p>
                  </div>
                  <div className="max-w-[490px] flex">
                    <MdCancel className="text-[#FF4423] mt-[6px] mr-[5px] text-[1.5rem]" />
                    <p className="text-[#0D121F] text-[1.13rem] font-[500] leading-[27px] tracking-[-2%]">
                      Need more effort to pay manually one by one invoice
                      because there is no payment accommodation.
                    </p>
                  </div>
                  <div className="max-w-[490px] flex">
                    <MdCancel className="text-[#FF4423] mt-[6px] mr-[5px] text-[1.5rem]" />
                    <p className="text-[#0D121F] text-[1.13rem] font-[500] leading-[27px] tracking-[-2%]">
                      Manual data arranging needs a long time because the
                      different months/years are not in the same place.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/*  */}
          <div className="max-w-[486px] max-h-[434px] rounded-xl">
            {showWithSamDetails ? (
              <img src={SuccessImage1} alt="SuccessImage1" />
            ) : (
              <img src={SuccessImage2} alt="SuccessImage2" />
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default Success;
