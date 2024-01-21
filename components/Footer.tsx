import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
    <footer className="w-full lg:px-[80px] bg-[#F3F6F6] px-[20px]">
        <div className="lg:container flex justify-center w-full">
      <div className="lg:grid lg:ms-[65px] lg:py-[55px] lg:grid-cols-3 grid grid-cols-3 lg:gap-[216px] gap-[20px] mt-[24px]">
        <div className="lg:w-fit w-full block">
      <h3 className="font-poppins font-[500] lg:text-[28px] text-[16px]">Quick Links</h3>
          <ul className="lg:mt-[48px] font-poppins font-[400] text-[14px] lg:text-[20px]">
            <li className="lg:mt-0 mt-[16px]">About</li>
            <li className="lg:mt-[24px] mt-[8px]">Facility</li>
            <li className="lg:mt-[24px] mt-[8px]">Gallery</li>
          </ul>
        </div>
        <div className="lg:w-fit w-full block">
      <h3 className="font-poppins font-[500] lg:text-[28px] text-[16px]">Room Categorys</h3>
          <ul className="lg:mt-[48px] font-poppins font-[400] text-[14px] lg:text-[20px]">
            <li className="lg:mt-0 mt-[16px]">4 Bedroom Villa</li>
            <li className="lg:mt-[24px] mt-[8px]">2 Bedroom Villa</li>
            <li className="lg:mt-[24px] mt-[8px]">Joglo House</li>
            <li className="lg:mt-[24px] mt-[8px]">Bamboo Studio</li>
            <li className="lg:mt-[24px] mt-[8px]">Bamboo House</li>
          </ul>
        </div>
        <div className="lg:w-fit w-full block">
      <h3 className="font-poppins font-[500] lg:text-[28px]">Contact Us</h3>
      <Image className="mt-[16px] lg:hidden block" width={76} height={20} alt="pointer 1" src="/contacts.svg"/>
          <ul className="hidden lg:block lg:mt-[48px] font-poppins font-[400] text-[14px] lg:text-[20px]">
            <li>Jl. Bukit Pelangi, Gunung Geulis,
Sukaraja, Kab. Bogor, 
Jawa Barat</li>
            <li className="lg:mt-[24px] mt-[8px]">+ 62812345678</li>
            <li className="lg:mt-[24px] mt-[8px]">example@gmail.com</li>
          </ul>
        </div>

      </div>
      </div>
    </footer>
    </>
  );
}