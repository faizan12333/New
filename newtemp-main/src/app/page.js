import About from "@/components/About/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex size-full flex-col items-center justify-between ">
      <div className=" flex flex-col  bg-[url('/images/bannerBg.webp')] bg-center bg-cover size-full"> 
      {/* <Navbar /> */}
      <Banner/>
      </div>
      <About/>
      <Services/>
      <Contact/>

    </section>
  );
}
