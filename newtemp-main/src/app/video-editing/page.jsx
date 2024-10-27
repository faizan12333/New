import About from "@/components/About/About";
import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";
import React from "react";

import ilImg from "/public/images/illustrations/video.png";
import Contact from "@/components/Contact/Contact";

function page() {
  return (
    <>

      <section className="pt-[200px] tablet:pt-[100px] flex size-full flex-col items-center justify-center  bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat text-white px-4 tablet:px-0 !scroll-smooth">
        <Wrapper>
          <div className="flex size-full tablet:h-screen flex-col items-center justify-center space-y-16 text-center pb-10 tablet:pb-0">
            <h1 className="text-4xl tablet:text-6xl font-bold">VIDEO EDITING</h1>
            <div className="flex flex-col tablet:space-x-20 justify-center tablet:flex-row tablet:justify-between">
              
                <Image priority src={ilImg} alt="Xtreme Digitonix" className="w-60 max-w-[450px]  mx-auto tablet:w-[50%] "/>
             
              <p className="flex w-full tablet:w-[50%] items-center justify-center tablet:text-lg  !leading-[40px]">
              
              In today{"'"}s digital age, captivating video content is essential for grabbing attention and leaving a lasting impression. At Xtreme Digitonix, our expert video editors bring your story to life with stunning visuals, seamless transitions, and engaging sound design. We handle everything from raw footage to polished masterpieces, ensuring your message resonates with your target audience. Whether you need a dynamic product explainer, a heart-tugging social media ad, or a professional explainer video, we craft videos that convert.
             
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
