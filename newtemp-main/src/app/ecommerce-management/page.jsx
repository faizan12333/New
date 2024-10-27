import About from "@/components/About/About";
import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";
import React from "react";

import img1 from "/public/images/about1.png";
import img2 from "/public/images/about2.png";
import tiktokImg from "/public/images/tiktok.png";
import shopifyImg from "/public/images/shopify.png";

import ilImg from "/public/images/illustrations/ecommerce.png";
import Contact from "@/components/Contact/Contact";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
  subsets: ["latin"],
});

function page() {
  return (
    <>
      <section className="flex size-full flex-col items-center justify-center !scroll-smooth bg-[url(/images/singleBg.png)]  bg-cover bg-center bg-no-repeat px-4 pt-[200px] text-white tablet:px-0 tablet:pt-[100px]">
        <Wrapper>
          <div className="flex size-full flex-col items-center justify-center space-y-16 pb-10 text-center tablet:h-screen tablet:pb-0">
            <h1 className="text-4xl font-bold tablet:text-6xl">
              ECOMMERCE MANAGEMENT
            </h1>
            <div className="flex flex-col justify-center tablet:flex-row tablet:justify-between tablet:space-x-20">
              <Image
                priority
                src={ilImg}
                alt="Xtreme Digitonix"
                className="mx-auto w-60  max-w-[450px] tablet:w-[50%] "
              />

              <p className="w-full text-center !leading-[40px] tablet:w-[50%]  tablet:text-lg">
                At Xtreme Digitonix, we offer a comprehensive suite of e
                commerce management services to propel your online business
                forward. Whether you{"'"}re drawn to the established reach of{" "}
                <span className="font-bold">Amazon FBA</span>, where we can
                guide you through both{" "}
                <span className="font-bold">private label</span> and{" "}
                <span className="font-bold">wholesale</span> strategies, or the
                exploding popularity of social commerce platforms like{" "}
                <span className="font-bold">TikTok Shop</span>, we have the
                expertise to navigate it all. Looking for a user friendly
                platform with complete control? We can help you establish your
                brand with a custom{" "}
                <span className="font-bold">Shopify white label</span> solution,
                or leverage the flexibility of{" "}
                <span className="font-bold">Shopify dropshipping</span> for
                streamlined inventory management. Let Xtreme Digitonix be your
                partner in e commerce success!
              </p>
            </div>
          </div>

          {/* Headings  */}
          <div className="flex flex-col items-center pb-20 text-center">
            {/* <div className="absolute top-0  z-[999] size-full bg-gradient-to-t from-black/50 from-10% to-black/10 to-90%" /> */}

            <div className="w-full backdrop-blur-sm ">
              <div className="size-full">
                <div className="flex flex-1 flex-col tablet:flex-row">
                  <Image
                    src={img1}
                    alt="about1"
                    className="w-full object-center tablet:w-[50%]"
                  />
                  <div className="flex w-full flex-col justify-center space-y-4  py-10 text-left tablet:w-[50%] tablet:px-10">
                    <p className="text-3xl font-semibold ">
                      Amazon Private Label
                    </p>
                    <p>
                      Dreaming of building your own brand on the booming Amazon
                      marketplace? Xtreme Digitonix can be your one-stop shop
                      for success. We{"'"}ll guide you through the entire
                      private label process, from identifying high-potential
                      products to crafting a unique brand identity and
                      packaging. Our experts will handle product sourcing,
                      inventory management, and Amazon listing optimization to
                      ensure your products stand out from the crowd. Partner
                      with Xtreme Digitonix and turn your Amazon private label
                      dream into a thriving reality.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col-reverse tablet:flex-row">
                  <div className="flex w-full flex-col justify-center space-y-4 py-10  text-left tablet:w-[50%] tablet:px-10">
                    <p className="text-3xl font-semibold ">Amazon Wholesale</p>
                    <p>
                      Are you ready to leverage the power of Amazon{"'"}s vast
                      customer base? Xtreme Digitonix can help you get started
                      with Amazon Wholesale. We{"'"}ll guide you through
                      sourcing products in bulk at discounted rates, optimizing
                      your listings for maximum visibility, and ensuring
                      efficient fulfillment. With our expertise, you can focus
                      on growing your business while we handle the
                      behind-the-scenes tasks of Amazon Wholesale. Contact
                      Xtreme Digitonix today and unlock the potential of your
                      ecommerce dreams!
                    </p>
                  </div>
                  <Image
                    src={img2}
                    alt="about1"
                    className="w-full object-center  tablet:w-[50%]"
                  />
                </div>
                {/* <div className="flex flex-col"></div> */}
              </div>
            </div>
            <div className="w-full backdrop-blur-sm ">
              <div className="size-full">
                <div className="flex flex-1 flex-col tablet:flex-row">
                  <Image
                    src={tiktokImg}
                    alt="about1"
                    className="w-full object-center tablet:w-[50%]"
                  />
                  <div className="flex w-full flex-col justify-center space-y-4  py-10 text-left tablet:w-[50%] tablet:px-10">
                    <p className="text-3xl font-semibold ">Tiktok Shop</p>
                    <p>
                      Shop the latest trends and discover hidden gems directly
                      from your favorite creators on TikTok Shop! This
                      innovative platform seamlessly blends entertainment with
                      shopping, allowing you to browse products while enjoying
                      engaging videos. Explore a vast selection of trendy
                      clothing, unique accessories, must-have beauty finds, and
                      more - all delivered straight to your door. With secure
                      payment options, hassle-free returns, and exciting in-app
                      features, TikTok Shop makes shopping fun, convenient, and
                      truly inspiring. Find what you love and support creators
                      you adore - all in one place!
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col-reverse tablet:flex-row">
                  <div className="flex w-full flex-col justify-center space-y-4 py-10  text-left tablet:w-[50%] tablet:px-10">
                    <p className="text-3xl font-semibold ">
                      Shopify White Label
                    </p>
                    <p>
                      Take your brand to the next level with our custom Shopify
                      white label services. We{"'"}ll handle the backend setup
                      and ongoing maintenance of your Shopify store, leaving you
                      free to focus on what matters most: building your brand
                      identity and connecting with customers. We{"'"}ll
                      seamlessly integrate your branding elements, ensuring a
                      cohesive customer experience that reflects your unique
                      style. With Xtreme Digitonix{"'"}s Shopify white label
                      expertise, you can launch your dream store quickly and
                      efficiently, without the technical complexities.
                    </p>
                  </div>
                  <Image
                    src={shopifyImg}
                    alt="about1"
                    className="w-full object-center  tablet:w-[50%]"
                  />
                </div>
                {/* <div className="flex flex-col"></div> */}
              </div>
            </div>
            <div className="flex flex-1 flex-col tablet:flex-row">
              <Image
                src={shopifyImg}
                alt="about1"
                className="w-full object-center tablet:w-[50%]"
              />
              <div className="flex w-full flex-col justify-center space-y-4  py-10 text-left tablet:w-[50%] tablet:px-10">
                <p className="text-3xl font-semibold ">Shopify Drop Shipping</p>
                <p>
                  Unleash your entrepreneurial spirit with Xtreme Digitonix{"'"}
                  s Shopify dropshipping services! Sell trending products
                  without managing inventory. We{"'"}ll handle order
                  fulfillment, so you can focus on building your brand and
                  reaching new customers. With our expertise and Shopify{"'"}s
                  user-friendly platform, launching your online store has never
                  been easier. Start your dropshipping journey today!
                </p>
              </div>
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
