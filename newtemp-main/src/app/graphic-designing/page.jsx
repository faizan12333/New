import About from "@/components/About/About";
import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";
import React from "react";

import ilImg from "/public/images/illustrations/graphic.png";
import Contact from "@/components/Contact/Contact";

function page() {
  return (
    <>

      <section className="pt-[200px] tablet:pt-[100px] flex size-full flex-col items-center justify-center  bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat text-white px-4 tablet:px-0 !scroll-smooth">
        <Wrapper>
          <div className="flex size-full tablet:h-screen flex-col items-center justify-center space-y-16 text-center pb-10 tablet:pb-0">
            <h1 className="text-4xl tablet:text-6xl font-bold">GRAPHIC DESIGNING</h1>
            <div className="flex flex-col tablet:space-x-20 justify-center tablet:flex-row tablet:justify-between">
              
                <Image priority src={ilImg} alt="Xtreme Digitonix" className="w-60 max-w-[450px]  mx-auto tablet:w-[50%] "/>
             
              <p className="flex w-full tablet:w-[50%] items-center justify-center tablet:text-lg  !leading-[40px]">
              
              At Xtreme Digitonix, our passionate graphic design team brings your brand identity to life. We craft visually stunning and impactful designs that resonate with your target audience. From logos and social media graphics to website layouts and marketing materials, we translate your vision into a cohesive brand aesthetic that strengthens your presence across all platforms. We don{"'"}t just create graphics, we create strategic visual experiences that elevate your brand and drive results.
             
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
