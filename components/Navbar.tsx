// components/Navbar.tsx
"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
        <nav className="container bg-transparent lg:px-[80px] lg:py-[25px] py-[16px] px-[20px]">
      <div className="mx-auto flex items-center lg:justify-between">
        {/* Sandwich bar for both Desktop and Mobile */}
          <Link
          href=""
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:border-none lg:flex"
          >
            <div className="block lg:py-[11px]">
            <div className="w-[25px] h-[3px] bg-white mb-1"></div>
            <div className="w-[25px] h-[3px] bg-white mb-1"></div>
            <div className="w-[25px] h-[3px] bg-white mb-1"></div>
            <div className="w-[25px] h-[3px] bg-white"></div>
            </div>
          </Link>
          <div className="items-center hidden lg:block absolute ms-[48px] group">
              <Link href="/category" className="py-[8px] px-[10px] font-poppins font-[400] text-[16px] text-white flex items-center">
                Villa category <Image className='ms-[7px]' src="/dropdown.svg" width={10} height={10} alt=''/>
              </Link>
              <div className="hidden group-hover:block absolute lg:w-[163px] w-[133px] py-[8px] px-[5px] bg-white rounded-0 rounded-tr-[6px] rounded-b-[6px] text-black">
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  4 Bedroom villa
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  2 Bedroom villa
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  Joglo house
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  Kudus house
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  Bamboo house
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  Bamboo studio
                </Link>
            </div>
        </div>
        <div className="hidden lg:flex items-center float-end justify-end">
      <Link href="#" className="lg:me-[48px] font-poppins font-[400] text-[16px] text-white">
                  Contact us
      </Link>
      <Link href="/login" className="bg-primary px-[32px] py-[8px] font-poppins font-[400] text-[16px] text-white">
                  Login
      </Link>
      </div>
        {/* Navigation Links */}
      </div>
      {/* Dropdown content */}
      {isOpen && (
        <div className="lg:flex fixed container flex items-center mt-[7px]">
          <div className="text-sm bg-white py-[8px] px-[5px] lg:w-[124px] w-[133px] rounded-0 rounded-tr-[6px] rounded-b-[6px]">
            <Link href="/" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
              Home
            </Link>
            <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
              About
            </Link>
            <div className="relative group lg:hidden block">
              <Link href="/category" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                Villa category
              </Link>
              <div className="hidden group-hover:block absolute ms-[140px] lg:w-[133px] w-[133px] py-[8px] px-[5px] bg-white rounded-0 rounded-tr-[6px] rounded-b-[6px] text-black">
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  4 Bedroom villa
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  2 Bedroom villa
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  Joglo house
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  Kudus house
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  Bamboo house
                </Link>
                <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
                  Bamboo studio
                </Link>
              </div>
            </div>
            <Link href="#" className="block py-[8px] px-[10px] border-0 border-b font-poppins font-[400] text-[12px] text-black">
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>

  );
};

export default Navbar;
