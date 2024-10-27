"use client";
import React from "react";
import Wrapper from "../common/Wrapper";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Playfair_Display } from "next/font/google";
import toast from "react-hot-toast";



const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const formSchema = z
  .object({
    name: z.string().min(2).max(50),
    email: z.string().email("Invalid Email Address").min(2).max(50),
    phno: z.string().min(2).max(15),
    message: z
      .string()
      .min(2, "Message is too short")
      .max(2500, "Max Limit Exceeded"),
  })
  .required();

function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phno: "",
      message: "",
    },
  });

async  function onSubmit(values) {



  const res = await fetch("https://formspree.io/f/xbjnwega", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values)
  })

  
  
  if(res.status == 200){
    toast.success('We received! Thank you',{
      duration: 5000,
      position: 'top-center',
    
      // Styling
      style: {
        backgroundColor: "#fde93b",
      },
      className: 'font-semibold tracking-wider text-lg',
    
   
    
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#121212',
        secondary: '#fde93b',
      },
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    })
    form.reset()
    return;
  }

  toast.error("Something went wrong. Try Again")


  }

  return (
    <section id="contact" className="flex size-full flex-col items-center justify-center bg-[url(/images/contact.png)] bg-cover bg-center bg-no-repeat text-white px-4 tablet:px-0 py-10">
      <Wrapper className="">
        <div className="flex size-full flex-col items-center space-y-8 justify-center">
          <div className="flex size-full flex-col items-center justify-center space-y-5 text-center ">
            <h5 className="text-5xl tablet:text-7xl font-bold">CONTACT <span className={`text-pri_yellow italic ${playfair.className}`}>US</span></h5>
            <p className=" text-xl text-pri_yellow">
            Ready to take your brand Xtreme? Contact us today.
            </p>
          </div>

          <div className="flex size-full flex-col items-center justify-center ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col items-center w-full tablet:min-w-[500px] space-y-8 rounded-3xl bg-pri_black/60  py-10 px-2 tablet:px-20 text-white backdrop-blur-xl tablet:max-w-[800px]"
              >
             
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                        id="name"
                          placeholder="Enter Your Name"
                          className="px-4 py-6 text-black "
                          {...field}
                        />
                      </FormControl>
                      {/* <div className="h-4  w-full" >
              <FormMessage />
              </div> */}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email Address"
                          className="px-4 py-6 text-black "
                          {...field}
                        />
                      </FormControl>
                      {/* <div className="h-4  w-full" >
              <FormMessage />
              </div> */}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phno"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Phone No.</FormLabel>
                      <FormControl>
                        <Input
                        type="number"
                          placeholder="Phone Number"
                          className="px-4 py-6 text-black remove-arrow"
                          {...field}
                        />
                      </FormControl>
                      {/* <div className="h-4  w-full" >
              <FormMessage />
              </div> */}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        {/* <Input placeholder="Phone Number" {...field} /> */}
                        <Textarea
                          placeholder="How can we help you?"
                          className="px-4 py-6 text-black "
                          {...field}
                        />
                      </FormControl>
                      {/* <div className="h-4  w-full" >
              <FormMessage  />
              </div> */}
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className={
                    "w-full bg-pri_yellow px-10 py-6 text-3xl tracking-wider text-pri_black hover:bg-yellow-400 "
                  }
                >
                  SEND
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Contact;
