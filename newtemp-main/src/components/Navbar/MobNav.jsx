import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "/public/images/logo.webp";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


 function MobNav() {
  return (
    <header className="flex items-center tablet:hidden h-20 w-fit !z-[99999999999]  ">
        <Sheet >
      <SheetTrigger asChild>
      <RxHamburgerMenu size={30} color="#fde93b" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className={"flex justify-center items-center space-y-5 size-full"} >
          <div>
          <Image
            priority
            src={logo}
            alt="Xtreme Digitonix Logo"
            className=" size-16 tablet:size-20"
          />
          </div>

          <nav className=" flex flex-col items-center justify-center space-x-4 text-pri_yellow text-center ">
            <ul className=" flex flex-col items-center   *:px-6 *:py-4 *:tracking-wide *:transition-all *:duration-200 hover:*:bg-pri_yellow/10 ">
              <SheetClose asChild>

              <Link href="#about">
                <li>ABOUT US</li>
              </Link>
              </SheetClose>
              <SheetClose asChild>
              <Link href="/#services">
                <li>SERVICES</li>
              </Link>
              </SheetClose>
              <SheetClose asChild>
              <Link href="#contact">
                <li>CONTACT US</li>
              </Link>
              </SheetClose>
            </ul>
            <Link
              href="#name"
              className="hidden bg-pri_yellow px-4 py-2 text-lg font-bold tracking-wider text-pri_black transition-all duration-200 hover:bg-yellow-400 tablet:block"
            >
              GET A QUOTE
            </Link>
          </nav>

          <ul className="w-fit flex justify-center items-center space-x-8 py-4 px-2  *:transition-all cursor-pointer  hover:*:duration-150 hover:*:scale-75 *:w-full *:bg-pri_yellow *:rounded-full  *:px-2 *:py-2">
        <Link href={"https://www.facebook.com/people/Xtreme-Digitonix/61557029914651/?mibextid=YMEMSu"}><FaFacebookF className="size-6" /></Link>
        <Link href={"https://www.instagram.com/xtremedigitonix/"}><FaInstagram  className="size-6" /></Link>
        {/* <li><FaLinkedin className="size-6"  /></li> */}
        <Link href={""}><FaWhatsapp  className="size-6" /></Link>
    </ul>


  
         
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </header>
    )
}


export default MobNav


