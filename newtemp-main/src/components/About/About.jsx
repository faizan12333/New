import React from "react";
import img1 from "/public/images/about1.png";
import img2 from "/public/images/about2.png";
import Image from "next/image";
import Wrapper from "../common/Wrapper";
import { Montserrat, Playfair_Display } from "next/font/google";
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

function About() {
  return (
    <section id="about" className=" flex size-full flex-col items-center bg-[url('/images/aboutBg.png')] bg-center bg-cover bg-no-repeat px-2 tablet:px-0 py-10">
      <div className="relative flex size-full flex-col items-center ">
        <Wrapper className={"size-full  !justify-start "}>
          <div className=" flex flex-col items-center  rounded-t-3xl border border-b-0 border-zinc-200  text-center">
          {/* <div className="absolute top-0  z-[999] size-full bg-gradient-to-t from-black/50 from-10% to-black/10 to-90%" /> */}
            <div className="space-y-2 py-6">
              <h4
                className={`text-4xl tablet:text-7xl ${montserrat.className} font-bold`}
              >
                ABOUT{" "}
                <span
                //   style={{ textShadow: "2px 2px 10px #fde93b" }}
                //   className={`${playfair.className} animate-pulsy text-3xl italic text-pri_yellow tablet:text-7xl`}
                >
                  US
                </span>
              </h4>
              <p>GET MORE INFO ABOUT OUR AGENCY</p>
            </div>

            <div className="w-full backdrop-blur-sm bg-white/30">
              <div className="h-4 w-full bg-pri_yellow" />
              <div className="size-full">
                <div className="flex flex-col tablet:flex-row flex-1">
                  <Image
                    src={img1}
                    alt="about1"
                    className="w-full tablet:w-[55%] object-center"
                  />
                  <div className="flex w-full tablet:w-[45%] flex-col justify-center  space-y-4 tablet:px-10 py-10 text-left">
                    <p className="text-3xl font-semibold ">WHO WE ARE?</p>
                    <p>
                    At Xtreme Digitonix, we{"'"}re not just a digital marketing agency; we{"'"}re your strategic partners, crafting the blueprint for your brand{"'"}s success story.  Ready to push the boundaries and achieve Xtreme growth? We bring innovation, strategy, and creativity to every project, specializing in digital marketing, graphic design, and bespoke solutions.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse tablet:flex-row flex-1">
                  <div className="flex w-full tablet:w-[55%] flex-col justify-center space-y-4  tablet:px-10 py-10 text-left">
                    <p className="text-3xl font-semibold ">WHAT WE DO?</p>
                    <p>
                    Our commitment is to excellence, fostering transparent collaboration and a client-centric approach. We transform your vision into tangible results, taking your brand to new heights.  Join us on a transformative journey -  Elevate your business with Xtreme Digitonix, where possibilities meet precision.
                    </p>
                    <Link href={"#services"} className="w-fit bg-pri_yellow px-6 py-3 text-xl tracking-widest transition-all duration-200 hover:bg-yellow-400">
                      DICOVER MORE
                    </Link>
                  </div>
                  <Image
                    src={img2}
                    alt="about1"
                    className="w-full tablet:w-[45%]  object-center"
                  />
                </div>
                {/* <div className="flex flex-col"></div> */}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

export default About;
