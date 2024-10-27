import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

import logo from "/public/images/logo.webp";

function Footer() {
  return (
    <section className="flex size-full items-center justify-center bg-pri_black text-white">
      <Wrapper className={""}>
        <div className="flex size-full flex-col items-center tablet:flex-row tablet:justify-between ">
          <div className="size-full flex flex-col-reverse tablet:flex-row items-center  tablet:justify-between py-4">
            <div className="flex flex-col items-center tablet:items-start text-center tablet:text-start pt-5 tablet:pt-0">
              <Image
                priority
                src={logo}
                alt="Xtreme Digitonix Logo"
                className="size-24 tablet:size-32"
              />
              <p className="pt-5 tablet:text-base text-sm">
                ©2024, Xtreme Digitonix LLC. All Rights Reserved.
              </p>
            </div>

            <div className="text-center tablet:text-start">
              <p className=" tablet:text-lg font-bold text-pri_yellow">
                GIVE US A CALL
              </p>
              <p className="text-xl tablet:text-3xl font-bold">+1 628-262-3643</p>
              <p className="">
                <span className="pt-5 tablet:text-lg font-bold tracking-wider">
                  Email:
                </span>{" "}
                <span className="tracking-wider">
                  Xtremedigitonix@outlook.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Footer;
