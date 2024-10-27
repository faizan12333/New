import About from "@/components/About/About";
import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";
import React from "react";

import ilImg from "/public/images/illustrations/website.png";
import Contact from "@/components/Contact/Contact";

function page() {
  return (
    <>

      <section className="pt-[200px] tablet:pt-[100px] flex size-full flex-col items-center justify-center  bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat text-white px-4 tablet:px-0 !scroll-smooth">
        <Wrapper>
          <div className="flex size-full tablet:h-screen flex-col items-center justify-center space-y-16 text-center pb-10 tablet:pb-0">
            <h1 className="text-4xl tablet:text-6xl font-bold">WEBSITE DEVELOPMENT</h1>
            <div className="flex flex-col tablet:space-x-20 justify-center tablet:flex-row tablet:justify-between">
              
                <Image priority src={ilImg} alt="Xtreme Digitonix" className="w-60 max-w-[450px]  mx-auto tablet:w-[50%] "/>
             
              <p className="flex w-full tablet:w-[50%] items-center justify-center tablet:text-lg  !leading-[40px]">
              
              At Xtreme Digitonix, we believe your website is the cornerstone of your digital identity. Our expert web developers build visually stunning and user friendly websites that not only showcase your brand but also drive conversions. We specialize in crafting custom websites tailored to your specific needs, whether it{"'"}s a simple brochureware site, a complex e-commerce platform, or an interactive landing page. We leverage the latest technologies and best practices to ensure your website is fast, secure, and optimized for search engines. Let us transform your vision into a website that captures attention, engages visitors, and achieves your digital goals.
             
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
