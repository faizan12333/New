import About from "@/components/About/About";
import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";
import React from "react";

import ilImg from "/public/images/illustrations/marketing.png";
import Contact from "@/components/Contact/Contact";

function page() {
  return (
    <>

      <section className="pt-[200px] tablet:pt-[100px] flex size-full flex-col items-center justify-center  bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat text-white px-4 tablet:px-0 !scroll-smooth">
        <Wrapper>
          <div className="flex size-full tablet:h-screen flex-col items-center justify-center space-y-16 text-center pb-10 tablet:pb-0">
            <h1 className="text-4xl tablet:text-6xl font-bold">DIGITAL MARKETING & BRAND MARKETING</h1>
            <div className="flex flex-col tablet:space-x-20 justify-center tablet:flex-row tablet:justify-between">
              
                <Image  priority src={ilImg} alt="Xtreme Digitonix" className="w-60 max-w-[450px] mx-auto tablet:w-[50%] "/>
             
              <p className="flex w-full tablet:w-[50%] items-center justify-center tablet:text-lg  !leading-[40px]">
              
              In today{"'"}s digital age, a strong online presence is crucial. At Xtreme Digitonix, we bridge the gap between cutting edge digital marketing strategies and captivating brand design.  We don{"'"}t just create a logo, we craft a visual identity that resonates with your target audience.  Our expert team utilizes data-driven marketing tactics to amplify your brand message and drive real results. Let Xtreme Digitonix help you establish a powerful online presence that reflects your brand{"'"}s unique voice and propels you towards success.
             
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
