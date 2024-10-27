import React from "react";
import { Montserrat, Playfair_Display } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import Wrapper from "../common/Wrapper";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
  subsets: ["latin"],
  style: ["italic", "normal"],
});

function Banner() {
  return (
    <section className="flex size-full h-screen flex-col items-center justify-around text-white pt-[100px]">
      <Wrapper
        className={"flex size-full h-full flex-col items-center justify-around"}
      >
        <div className="w-full hidden tablet:flex items-center justify-between text-3xl font-bold">
          <span>MARKETING</span>
          <span>PORTFOLIO</span>
        </div>

        <h1
          className={`${montserrat.className} z-10 animate-pulsy text-4xl font-bold leading-10 text-pri_yellow tablet:text-7xl `}
        >
          <span
            style={{ textShadow: "2px 2px 10px #fde93b" }}
            className={`${playfair.className} text-3xl italic tablet:text-6xl`}
          >
            DIGITAL
          </span>{" "}
          <span className="text-white">AGENCY</span>
        </h1>

        <div className="flex w-full items-center justify-center tablet:justify-between text-3xl font-bold">
          <span className="hidden tablet:inline ">+92 309 678 0750</span>
          <Link href={"#about"} className="flex  justify-center rounded-full border-4 border-pri_yellow  ">
            <IoIosArrowDown className="m-2 size-8 animate-heighty text-pri_yellow " />
          </Link>
          <span className="hidden tablet:inline">CONTACT US</span>
        </div>
      </Wrapper>
    </section>
  );
}

export default Banner;
