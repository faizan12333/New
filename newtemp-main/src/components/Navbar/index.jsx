"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import logo from "/public/images/logo.webp";
import MobNav from "./MobNav";
import Link from "next/link";
import Wrapper from "../common/Wrapper";

function Navbar() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);



  return (
    <section className={`fixed top-0  flex w-full max-h-[100px] z-[200] items-center justify-around  tablet:justify-center transition-transform duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-[100px]'}`}>
      <Wrapper>
        <div
          className={
            "flex size-full  items-center justify-between rounded-b-3xl bg-pri_black/80 py-3 px-8  backdrop-blur-lg tablet:px-8 "
          }
        >
          <Link href={"/"}>
          <Image
            priority
            src={logo}
            alt="Xtreme Digitonix Logo"
            className=" size-16 tablet:size-20"
            />
            </Link>

          <nav className=" hidden items-center justify-center space-x-4 text-pri_yellow text-center tablet:flex">
            <ul className=" flex  space-x-4  *:px-6 *:py-4 *:tracking-wide *:transition-all *:duration-200 hover:*:bg-pri_yellow/10 ">
              <Link href="#about">
                <li>ABOUT US</li>
              </Link>
              <Link href="/#services">
                <li>SERVICES</li>
              </Link>
              <Link href="#contact">
                <li>CONTACT US</li>
              </Link>
            </ul>
            <Link
              href="#name"
              className="hidden bg-pri_yellow px-4 py-2 text-lg font-bold tracking-wider text-pri_black transition-all duration-200 hover:bg-yellow-400 tablet:block"
            >
              GET A QUOTE
            </Link>
          </nav>


          <MobNav />
        </div>
      </Wrapper>
    </section>
  );
}

export default Navbar;
