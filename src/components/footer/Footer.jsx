import React from "react";

const Footer = () => {
  return (
    <>
      <section
        className="min-h-[100vh]
      "
      >
        {/* FOOTER CONTAINER */}
        <section className="footer__container">
          <div className="w-[188px] mb-[40px] footer__header">
            {/* <img src="" alt="" /> */}
            <h2>S.A.M</h2>
            <p className="text-[#596780] text-[1.125rem] font-[400] leading-[27px] tracking-[-2%] ">
              Data visualization, and expense management for your business.
            </p>
          </div>

          <div className="flex justify-between footer">
            {/* Product */}
            <div>
              <h3 className="text-[#1A202C] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%] mb-5">
                Product
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Digital Invoice</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Insights</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Reimbursements</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Virtual Assistant</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Artificial Intelligence</a>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div className="">
              <h3 className="text-[#1A202C] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%] mb-5">
                Company
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">About Us</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Newsletters</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Our Partners</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Career</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="text-[#1A202C] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%] mb-5">
                Product
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Blog</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Pricing</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">FAQ</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Events</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Ebook & Guide</a>
                </li>
              </ul>
            </div>
            {/* Follow Us */}
            <div className="">
              <h3 className="text-[#1A202C] text-[1.25rem] font-[600] leading-[30px] tracking-[-2%] mb-5">
                Follow Us
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">LinkedIn</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Twitter</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Instagram</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">Facebook</a>
                </li>
                <li className="text-[#596780] text-[1rem] font-[400] leading-[24px] tracking-[-2%]">
                  <a href="#!">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Footer;
