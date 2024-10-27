import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";


function SocialBar() {
  return <div className="size-full fixed top-[50%] z-[500] bg-green-300 w-fit h-fit  hidden flex-col tablet:flex  ">
    <ul className="w-fit flex flex-col space-y-5 bg-pri_yellow py-4 px-2  *:transition-all cursor-pointer  hover:*:duration-150 hover:*:scale-75 *:w-full">
        <Link href={'https://www.facebook.com/people/Xtreme-Digitonix/61557029914651/?mibextid=YMEMSu'} ><FaFacebookF className="size-6" /></Link>
        <Link href={'https://www.instagram.com/xtremedigitonix/'}><FaInstagram  className="size-6" /></Link>
        {/* <li><FaLinkedin className="size-6"  /></li> */}
        <Link href={"https://api.whatsapp.com/send?phone=923096780750"}><FaWhatsapp  className="size-6" /></Link>
    </ul>

  </div>;
}

export default SocialBar;
