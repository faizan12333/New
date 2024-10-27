import React from "react";
import Wrapper from "../common/Wrapper";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import ecImg from "/public/images/services/ecommerce.webp";
import marketingImg from "/public/images/services/digitalmarketing.webp";
import graphicImg from "/public/images/services/graphic.webp";
import videoImg from "/public/images/services/videoediting.webp";
import websiteImg from "/public/images/services/website.webp";
import consultImg from "/public/images/services/consult.webp";
import Link from "next/link";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
  subsets: ["latin"],
  style: ["italic", "normal"],
});

function Services() {
  return (
    <section id="services" className="flex size-full flex-col items-center justify-center bg-pri_black bg-[url(/images/servicesBg.png)]  bg-cover bg-center bg-no-repeat px-4 py-10 tablet:py-16 text-white tablet:px-0">
      <Wrapper className="">
        <div className="flex size-full flex-col items-center justify-center space-y-5 text-center">
          <div className="flex size-full flex-col items-center justify-center space-y-5">
            <h5 className="text-4xl tablet:text-6xl font-bold">
              <span className={`italic text-pri_yellow ${playfair.className}`}>
                OUR
              </span>{" "}
              SERVICES
            </h5>
            <p className="text-base tablet:text-xl text-pri_yellow">
            Transforming Visions into Digital Domination
            </p>
          </div>

          <div className="grid size-full grid-cols-1 place-items-center gap-10 *:h-[480px] *:max-w-[400px] *:bg-[url(/images/servicesCard.png)] *:bg-cover *:bg-center *:bg-no-repeat tablet:grid-cols-2 lp:grid-cols-3">
            <div className="col-span-1 flex flex-col items-center ">
              <div>
                <Image src={ecImg} alt="xtreme digitonix" className="w-full " />
                <div className="h-4 w-full bg-pri_yellow" />
              </div>

              <div className=" flex size-full flex-col justify-between space-y-4  px-4 pb-6 pt-4 items-center">
                <div className=" flex flex-col space-y-4">
                  <p className="text-2xl tablet:text-4xl font-bold">
                    E Commerce Store Management
                  </p>
                  <p>
                  Ecommerce Management service goes beyond 
                  </p>
                </div>
                <Link href={"/ecommerce-management"} className="w-fit bg-pri_yellow px-8 py-4 text-xl tracking-wider text-black transition-all duration-200 hover:bg-yellow-400">
                  MORE INFO
                </Link>
              </div>
            </div>
            <div className="col-span-1 flex flex-col ">
              <div>
                <Image
                  src={marketingImg}
                  alt="xtreme digitonix"
                  className="w-full "
                />
                <div className="h-4 w-full bg-pri_yellow" />
              </div>

              <div className=" flex size-full flex-col justify-between space-y-4  px-4 pb-6 pt-4 items-center">
                <div className=" flex flex-col space-y-4">
                  <p className="text-2xl tablet:text-4xl font-bold">
                    Digital Marketing / Brand Designing
                  </p>
                  <p>
                  Bridge the gap between cutting edge digital marketing strategies
                  </p>
                </div>
                <Link href={"/digital-marketing"} className="w-fit bg-pri_yellow px-8 py-4 text-xl tracking-wider text-black transition-all duration-200 hover:bg-yellow-400">
                  MORE INFO
                </Link>
              </div>
            </div>
            <div className="col-span-1 flex flex-col ">
              <div>
                <Image
                  src={graphicImg}
                  alt="xtreme digitonix"
                  className="w-full "
                />
                <div className="h-4 w-full bg-pri_yellow" />
              </div>

              <div className=" flex size-full flex-col justify-between space-y-4  px-4 pb-6 pt-4 items-center">
                <div className=" flex flex-col space-y-4">
                  <p className="text-2xl tablet:text-4xl font-bold">Graphic Designing</p>
                  <p>
                  We craft visually stunning and impactful designs that resonate with your target audience
                  </p>
                </div>
                <Link href={"/graphic-designing"} className="w-fit bg-pri_yellow px-8 py-4 text-xl tracking-wider text-black transition-all duration-200 hover:bg-yellow-400">
                  MORE INFO
                </Link>
              </div>
            </div>
            <div className="col-span-1 flex flex-col ">
              <div>
                <Image
                  src={videoImg}
                  alt="xtreme digitonix"
                  className="w-full "
                />
                <div className="h-4 w-full bg-pri_yellow" />
              </div>

              <div className=" flex size-full flex-col justify-between space-y-4  px-4 pb-6 pt-4 items-center">
                <div className=" flex flex-col space-y-4">
                  <p className="text-2xl tablet:text-4xl font-bold">Video Editing</p>
                  <p>
                  Everything from raw footage to polished masterpieces
                  </p>
                </div>
                <Link href={"/video-editing"} className="w-fit bg-pri_yellow px-8 py-4 text-xl tracking-wider text-black transition-all duration-200 hover:bg-yellow-400">
                  MORE INFO
                </Link>
              </div>
            </div>
            <div className="col-span-1 flex flex-col ">
              <div>
                <Image
                  src={websiteImg}
                  alt="xtreme digitonix"
                  className="w-full "
                />
                <div className="h-4 w-full bg-pri_yellow" />
              </div>

              <div className=" flex size-full flex-col justify-between space-y-4  px-4 pb-6 pt-4 items-center">
                <div className=" flex flex-col space-y-4">
                  <p className="text-2xl tablet:text-4xl font-bold">Website Development</p>
                  <p>
                  Specialize in crafting custom websites
                  </p>
                </div>
                <Link href={"/website-development"} className="w-fit bg-pri_yellow px-8 py-4 text-xl tracking-wider text-black transition-all duration-200 hover:bg-yellow-400">
                  MORE INFO
                </Link>
              </div>
            </div>
            <div className="col-span-1 flex flex-col ">
              <div>
                <Image
                  src={consultImg}
                  alt="xtreme digitonix"
                  className="w-full "
                />
                <div className="h-4 w-full bg-pri_yellow" />
              </div>

              <div className=" flex size-full flex-col justify-between space-y-4  px-4 pb-6 pt-4 items-center">
                <div className=" flex flex-col space-y-4">
                  <p className="text-2xl tablet:text-4xl font-bold">Consultation</p>
                  <p>
                  Ready to unlock your brand{"'"}s full potential?
                  </p>
                </div>
                <Link href={"/consultation"} className="w-fit bg-pri_yellow px-8 py-4 text-xl tracking-wider text-black transition-all duration-200 hover:bg-yellow-400">
                  MORE INFO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Services;
