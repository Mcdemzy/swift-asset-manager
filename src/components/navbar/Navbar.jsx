import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiMiniBars2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <section className="bg-[#0D121F] h-20 flex justify-around items-center navbar">
        {/* Logo Container */}
        <div className="w-[144px] bg-red-300 h-[32px]"></div>

        {/* Nav Items */}
        <div>
          <ul className="flex gap-10">
            <li>
              <a href="#!" className="flex">
                Products <FaChevronDown className="mt-[7px] ml-[3px]" />
              </a>
            </li>
            <li>
              <a href="#!">Benefit</a>
            </li>
            <li>
              <a href="#!">How it Works</a>
            </li>
            <li>
              <a href="#!">Pricing</a>
            </li>
            <li>
              <a href="#!" className="flex">
                Company <FaChevronDown className="mt-[7px] ml-[3px]" />
              </a>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="flex  items-center gap-8">
          <a href="#!">Login</a>
          <a
            href="#!"
            className="w-[125px] bg-[#7C5CFC] rounded-[30px] h-[52px] flex justify-center items-center"
          >
            Get Demo
          </a>
        </div>
      </section>
    </>
  );
};

export default Navbar;
