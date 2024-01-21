import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <>
    <section className="">
        <div className="">
          <div className="lg:grid lg:grid-cols-2">
              <div className="w-full hidden lg:block bg-[url('/bg-login.svg')] py-[186px] px-[52px] bg-cover bg-center bg-inherit">
                <h1 className="font-poppins font-[700] text-white text-[40px] mt-[735px]">Villa Amadaha</h1>
                <p className="font-poppins font-[500] text-white text-[18px]">The great place for peace life</p>
                <div className="flex justify-center mt-[15px]">
                <Image className="" width={60} height={14} alt="pointer 1" src="/horizondots.svg"/>
                </div>
            </div>
            <div className="w-full lg:px-[119px] sticky px-[32px] py-[82px] lg:py-[186px] items-center">
            <form>
              <h1 className="text-[#171717] font-[700] font-poppins text-[32px] lg:text-[32px] lg:leading-normal">
              Sign Up
              </h1>
              <div className="grid grid-cols-2 justify-center mt-[24px] p-[4px] lg:mt-[24px] lg:p-[4px] rounded-[6px] bg-[#F5F5F5]">
                <Link href="/login" className="w-full text-base text-center font-bold text-[#808080] bg-transparent py-[10px] rounded-md px-8">Sign In</Link>
                <Link href="/register" className="w-full text-base text-center font-bold text-primary bg-white py-[10px] rounded-md px-8">Sign Up</Link>
              </div>
              <div className="flex flex-wrap mt-10">
                <label className="text-[16px] font-poppins text-[#171717] mb-[8px] font-[400]">Name</label>
                    <input type="name" id="name" placeholder="Name" className="w-full bg-white ring-[#808080] ring-1 text-dark py-[10px] px-[16px] rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap mt-10">
                <label className="text-[16px] font-poppins text-[#171717] mb-[8px] font-[400]">Email</label>
                    <input type="email" id="email" placeholder="Email" className="w-full bg-white ring-[#808080] ring-1 text-dark py-[10px] px-[16px] rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap mt-10">
                <label className="text-[16px] font-poppins text-[#171717] mb-[8px] font-[400]">Phone Number</label>
                    <input type="phone number" id="phone number" placeholder="Phone Number" className="w-full bg-white ring-[#808080] ring-1 text-dark py-[10px] px-[16px] rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap mt-10">
                <label className="text-[16px] font-poppins text-[#171717] mb-[8px] font-[400]">Password</label>
                    <input type="password" id="password" placeholder="Password" className="w-full bg-white ring-[#808080] ring-1 text-dark py-[10px] px-[16px] rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap mt-[24px] justify-center">
                <button className="w-full text-[16px] font-poppins text-white mb-[8px] font-[600] bg-primary py-[10px] rounded-md px-8">Sign In</button>
              </div>
              <div className="flex flex-wrap mt-5 justify-center">
                <button type="submit" className="text-[16px] font-poppins text-[#808080] mb-[8px] font-[400]">Forgot Password? <span className="text-primary font-[700] underline"><Link href="/Auth/Registerrecruiters">Click Here</Link> </span></button>
              </div>
              <div className="flex flex-wrap mt-5 justify-center">
                <button type="submit" className="text-[14px] font-poppins text-[#808080] mb-[8px] font-[400]">Or</button>
              </div>
              <div className="flex flex-wrap mt-5 justify-center">
                <button className="w-full text-[16px] font-poppins font-[600] text-[#171717] border border-1 border-[#171717] bg-white py-[10px] rounded-md px-[16px] items-center flex justify-center"><Image className="lg:me-[16px]" width={17} height={17} alt="pointer 1" src="/google.svg"/>Sign In with Google</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}