import About from "@/components/About/About";
import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";
import React from "react";

import ilImg from "/public/images/illustrations/consultation.png";
import Contact from "@/components/Contact/Contact";

function page() {
  return (
    <>

      <section className="pt-[200px] tablet:pt-[100px] flex size-full flex-col items-center justify-center  bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat text-white px-4 tablet:px-0 !scroll-smooth">
        <Wrapper>
          <div className="flex size-full tablet:h-screen flex-col items-center justify-center space-y-16 text-center pb-10 tablet:pb-0">
            <h1 className="text-4xl tablet:text-6xl font-bold">CONSULTATION</h1>
            <div className="flex flex-col tablet:space-x-20 justify-center tablet:flex-row tablet:justify-between">
              
                <Image priority src={ilImg} alt="Xtreme Digitonix" className="w-60 max-w-[450px]   mx-auto tablet:w-[50%] "/>
             
              <p className="flex w-full tablet:w-[50%] items-center justify-center tablet:text-lg  !leading-[40px]">
              
              Are you ready to unlock your brand{"'"}s full potential? Our free service consultation is the first step towards achieving your digital goals. During this personalized session, we{"'"}ll discuss your specific needs and challenges, answer any questions you may have, and outline a customized plan to elevate your online presence. Let{"'"}s work together to craft a strategy that propels your brand forward - contact us today to schedule your consultation!
             
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
      <About />
      <Contact />
      </>
  );
}

export default page;
