import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
    <div className="lg:w-full lg:h-[966px] lg:bg-[url('/hero-bg.svg')] bg-[url('/hero-bgmobile.svg')] bg-cover bg-no-repeat pb-[96px] lg:pb-[0px]">
      <Navbar></Navbar>
      <div className="container">
      <div className="lg:px-[60px] px-[20px] lg:mt-[228px] mt-[56px]">
        <h1 className="font-poppins font-[700] text-white lg:text-[40px] text-[20px] lg:text-start text-center">
        Make your comfort is <br></br>
         <Image className="hidden lg:block lg:absolute lg:ms-[70px]" width={226} height={60} alt="pointer 1" src="/pointer1.svg"/>
          our happiness
        </h1>
        <p className="font-poppins font-[400] text-white lg:text-[20px] mt-[24px] text-start hidden lg:block">Studio villa made of bamboo, located near the top of Mount Geulis <br /> with a stunning 180 degree bird's eye view.</p>
        <p className="font-poppins font-[400] text-white lg:text-[20px] mt-[24px] block lg:hidden text-center">Studio villa made of bamboo, located near the top of Mount Geulis with a stunning 180 degree bird's eye view.</p>
      </div>
      <div className="lg:mt-[32px] mt-[25px] lg:flex lg:px-[180px] flex justify-center px-[92px]">
      <button className="lg:hidden block text-white bg-primary lg:px-[35px] lg:py-[12px] py-[10px] w-[190px] lg:w-0 lg:rounded-[6px] font-poppins font-[400] lg:text-[20px]">
      Booking Now
      </button>
        </div>
      <div className="lg:flex mt-[16px] lg:mt-[0px] lg:justify-start lg:px-[60px] flex justify-center px-[92px]">
      <button className="text-primary bg-white lg:px-[35px] lg:mt-0 lg:py-[12px] w-[190px] lg:w-fit py-[10px] lg:rounded-[6px] font-poppins font-[400] lg:text-[20px]">
      Explore Rooms
      </button>
      <Image className="hidden lg:block lg:ms-[18px] lg:mt-[-50px]" width={54} height={50} alt="pointer 1" src="/arrowline.svg"/>
        </div>
    </div>
    </div>
    

    <div className="container lg:px-[80px] lg:w-full lg:mt-[-55px] mt-[-25px] px-[20px] pb-10 lg:pb-[0]">
      <div className="border lg:flex lg:h-[112px] h-[133px] border-1 bg-white shadow-md lg:rounded-[6px] lg:py-[20px] lg:px-0 px-[11px] lg:flex-wrap lg:justify-center">
      <div className="lg:flex lg:flex-wrap lg:justify-center">
      <button className="lg:py-[8px] lg:pe-[72px] py-[8px] px-[19px] font-poppins font-[400] lg:text-[20px] text-[#0A0A0A] flex items-center w-full lg:w-fit justify-between border-0 border-b-2 lg:border-0 lg:border-r-2">
                Room 
                <Image className='hidden lg:block ms-[24px]' src="/dropdownijo.svg" width={20} height={20} alt=''/>
                <Image className='lg:hidden block ms-[24px]' src="/dropdownijomobile.svg" width={12} height={12} alt=''/>
              </button>
              <div className="flex lg:flex">
      <button className="lg:py-[8px] lg:ps-[62px] lg:pe-[72px] pe-[60px] py-[8px] ps-[19px] text-[14px] font-poppins font-[400] lg:text-[20px] text-[#0A0A0A] flex items-center lg:w-fit justify-between border-0 border-r-2 mt-[12px] lg:mt-0 lg:border-0 lg:border-r-2">
                <Image className='hidden lg:block me-[27px]' src="/calendar.svg" width={20} height={20} alt=''/>
                <Image className='lg:hidden block me-[16px]' src="/calendar.svg" width={12} height={12} alt=''/>
                Check in
              </button>
      <button className="lg:py-[8px] lg:ps-[72px] lg:pe-[75px] py-[8px] ps-[19px] text-[14px] font-poppins font-[400] lg:text-[20px] text-[#0A0A0A] flex items-center lg:w-fit justify-between  mt-[12px] lg:mt-0">
                <Image className='hidden lg:block me-[27px]' src="/calendar.svg" width={20} height={20} alt=''/>
                <Image className='lg:hidden block me-[16px]' src="/calendar.svg" width={12} height={12} alt=''/>
                Check out
              </button>
              </div>
              <button className="hidden lg:block lg:py-[16px] rounded-[6px] py-[8px] font-poppins font-[400] lg:text-[20px] bg-primary text-white items-center w-full lg:w-[221px] justify-center  mt-[12px] lg:mt-0">
                Check availability
              </button>
      </div>
      </div>
      <button className="lg:py-[16px] lg:hidden py-[10px] font-poppins font-[400] lg:text-[20px] bg-primary text-white flex items-center w-full lg:w-[221px] justify-center mt-[-30px] lg:mt-0 lg:border-0 lg:border-r-2">
                Check availability
              </button>
    </div>

    <div className="container w-full lg:mt-[100px] lg:px-[80px] px-[20px]">
      <div className="lg:flex lg:flex-wrap lg:justify-between">
      <h1 className="font-poppins font-[600] lg:text-[40px] text-[16px] text-[#0A0A0A]">
      About Villa 
      <span className="text-primary"> Amadaha</span>
      </h1>
      <Image className='hidden lg:block me-[100px]' src="/dots.svg" width={104} height={118} alt=''/>
      </div>

      <div className="lg:mt-[53px] lg:flex lg:justify-between mx-auto">
   
      <Image className='lg:hidden block lg:z-10 mt-[19px]' src="/herocontentmobile.svg" width={368} height={190} alt=''/>
      <Image className='lg:block hidden lg:z-10' src="/herocontent.svg" width={368} height={368} alt=''/>
      <Image className='lg:block absolute hidden lg:mt-[20px] lg:ms-[20px]' src="/herocontentborder.svg" width={368} height={368} alt=''/>

      <div className="lg:float-end lg:me-[170px]">
      <p className="font-poppins font-[400] lg:text-[20px] lg:mt-[0px] mt-[16px] text-[14px] text-[#0A0A0A]">Villa Amadaha consist of Two Luxury Villas and one <br />
Traditional Javanese House surrounded by a <br />
tranquil rain forest setting, traditional Indonesian <br />
houses anda a farm overlooking the area.</p>
<div className="lg:mt-[146px] mt-[8px] flex lg:flex">
  <div className="block">
  <p className="font-poppins font-[500] lg:text-[36px] text-[20px] text-[#0A0A0A]">+6 <span className="text-primary lg:text-[24px] text-[16px]"> / Room</span></p>
<p className="font-poppins font-[400] lg:text-[20px] text-[16px] text-[#404040]">Room options</p>
  </div>
  <div className="block ms-[29px] lg:ms-[46px]">
  <p className="font-poppins font-[500] lg:text-[36px] text-[20px] text-[#0A0A0A]">+6 <span className="text-primary lg:text-[24px] text-[16px]"> / facilities</span></p>
<p className="font-poppins font-[400] lg:text-[20px] text-[16px] text-[#404040]">Facilities Available</p>
  </div>

</div>
      </div>
      </div>
    </div>
    
    <div className=" w-full lg:mt-[161px] mt-[48px] lg:px-[140px] px-[20px]">
      <div className="lg:flex lg:flex-wrap lg:justify-center">
      <h1 className="font-poppins font-[600] lg:text-[40px] text-[16px] text-[#0A0A0A]">
      Our choise of
      <span className="text-primary"> Villa Studios</span>
      </h1>
      </div>

      <div className="flex justify-center w-full">
      <div className="lg:grid lg:grid-cols-3 lg:gap-[26px] gap-[31px] lg:mt-[48px] mt-[24px] grid grid-cols-2">
      <Image className='hidden absolute lg:block ml-[-60px] mt-[-80px]' src="/dots.svg" width={104} height={118} alt=''/>
          <div className="lg:w-[368px] w-[152px] lg:h-fit h-fit rounded-[6px] drop-shadow-md border-[1px] border-[#F5F5F5] bg-white">
            <div className="lg:px-[24px] px-[8px]">
          <Image className='mt-[19px]' src="/4bedroom.svg" width={320} height={322} alt=''/>
            </div>
          <div className="px-[8px] lg:px-[24px]">
          <div className="mt-[16px]">
            <p className="font-poppins font-[500] lg:text-[16px] text-[12px] text-[#130F26] lg:text-primary">
            4 Bedroom villa
            </p>
            </div>
            <div className="grid-cols-2 lg:grid mt-[16px] hidden">
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-[#0A0A0A]">
              Main Facilities
              </p>
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-[#0A0A0A]">
              Wifi provide, TV & Karaoke, <br /> Kitchen, Swimming pool
              </p>
            </div>
            <div className="lg:grid-cols-2 lg:grid hidden mt-[16px]">
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-[#0A0A0A] flex items-center gap-[8px]">
              <span><Image className='' src="/bed.svg" width={16} height={16} alt=''/></span>4 Beds
              </p>
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-[#0A0A0A] flex items-center gap-[8px]">
              <span><Image className='' src="/users.svg" width={16} height={16} alt=''/></span>8 persons
              </p>
            </div>
            <div className="mt-[16px]">
            <p className="font-poppins font-[500] lg:text-[20px] text-[14px] text-[#130F26] lg:text-primary lg:pb-[24px]">
            Rp 3.749.000 <span className="invisible lg:visible lg:text-[14px] text-[#616161] font-[400]">/night</span>
            </p>
            </div>
          </div>
          </div>
          <div className="lg:w-[368px] w-[152px] lg:h-fit h-fit rounded-[6px] drop-shadow-md border-[1px] border-[#F5F5F5] bg-primary">
            <div className="lg:px-[24px] px-[8px]">
          <Image className='mt-[19px]' src="/4bedroom.svg" width={320} height={322} alt=''/>
            </div>
          <div className="px-[8px] lg:px-[24px]">
          <div className="mt-[16px]">
            <p className="font-poppins font-[500] lg:text-[16px] text-[12px] text-white">
            4 Bedroom villa
            </p>
            </div>
            <div className="grid-cols-2 lg:grid mt-[16px] hidden">
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-white">
              Main Facilities
              </p>
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-white">
              Wifi provide, TV & Karaoke, <br /> Kitchen, Swimming pool
              </p>
            </div>
            <div className="lg:grid-cols-2 lg:grid hidden mt-[16px]">
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-white flex items-center gap-[8px]">
              <span><Image className='' src="/bedwhite.svg" width={16} height={16} alt=''/></span>4 Beds
              </p>
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-white flex items-center gap-[8px]">
              <span><Image className='' src="/userswhite.svg" width={16} height={16} alt=''/></span>8 persons
              </p>
            </div>
            <div className="mt-[16px]">
            <p className="font-poppins font-[500] lg:text-[20px] text-[14px] text-white lg:pb-[24px]">
            Rp 3.749.000 <span className="invisible lg:visible lg:text-[14px] font-[400]">/night</span>
            </p>
            </div>
          </div>
          </div>
          <div className="lg:w-[368px] hidden lg:block lg:h-fit rounded-[6px] drop-shadow-md border-[1px] border-[#F5F5F5] bg-white">
            <div className="lg:px-[24px]">
          <Image className='mt-[19px]' src="/4bedroom.svg" width={320} height={322} alt=''/>
            </div>
          <div className="px-[24px]">
          <div className="mt-[16px]">
            <p className="font-poppins font-[500] lg:text-[16px] text-[16px] text-primary">
            4 Bedroom villa
            </p>
            </div>
            <div className="grid-cols-2 grid mt-[16px]">
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-[#0A0A0A]">
              Main Facilities
              </p>
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-[#0A0A0A]">
              Wifi provide, TV & Karaoke, <br /> Kitchen, Swimming pool
              </p>
            </div>
            <div className="grid-cols-2 grid mt-[16px]">
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-[#0A0A0A] flex items-center gap-[8px]">
              <span><Image className='' src="/bed.svg" width={16} height={16} alt=''/></span>4 Beds
              </p>
              <p className="font-poppins font-[400] lg:text-[12px] text-[16px] text-[#0A0A0A] flex items-center gap-[8px]">
              <span><Image className='' src="/users.svg" width={16} height={16} alt=''/></span>8 persons
              </p>
            </div>
            <div className="mt-[16px]">
            <p className="font-poppins font-[500] lg:text-[20px] text-[16px] text-primary pb-[24px]">
            Rp 3.749.000 <span className="lg:text-[14px] text-[#616161] font-[400]">/night</span>
            </p>
            </div>
          </div>
          </div>
      </div>
      </div>
      <div className="lg:flex mt-[24px] lg:mt-[48px] lg:justify-center lg:px-[60px] flex justify-center px-[92px]">
      <button className="text-primary bg-[#CFE1E04D] lg:px-[35px] lg:mt-0 lg:py-[12px] w-[190px] lg:w-fit py-[10px] lg:rounded-[6px] font-poppins font-[400] lg:text-[20px]">
      See More villas
      </button>
        </div>
    </div>

    <div className="container w-full lg:mt-[161px] mt-[48px] lg:px-[80px] px-[20px]">
              <div className="lg:grid-cols-2 lg:gap-[53px] grid">
              <div className="">
        <div className="lg:flex lg:flex-wrap lg:justify-start justify-center">
      <h1 className="z-10 font-poppins font-[600] lg:text-[40px] text-[16px] lg:text-start text-center text-[#0A0A0A]">
      Various <span className="text-primary"> facilities</span> that<br />
      you can enjoy
      </h1>
      <Image className='hidden lg:block absolute ml-[-60px] mt-[-80px]' src="/dots.svg" width={104} height={118} alt=''/>
      </div>
      <p className="lg:mt-[24px] font-poppins font-[400] lg:text-[20px] lg:text-start text-center mt-[16px] text-[14px] text-[#9E9E9E]">
      We bring you together with your dream <br /> holiday
      </p>
        </div>
      <div className="lg:grid-cols-2 lg:grid lg:mt-0 mt-[16px] grid grid-cols-2 lg:gap-[47px] gap-[21px] px-[20px]">
      <Image className='hidden lg:block absolute ml-[-60px] mt-[170px]' src="/dots.svg" width={104} height={118} alt=''/>
      <div className="lg:w-[500px] lg:h-[324px] right-0 bg-[#F1F6F6] absolute hidden lg:block mt-[50px] ms-[150px]"></div>
      <Image className="hidden lg:block z-10" width={319} height={319} alt="pointer 1" src="/contentfacilities1.svg"/>
      <Image className="hidden lg:block z-10" width={319} height={319} alt="pointer 1" src="/contentfacilities2.svg"/>
      <Image className="block lg:hidden z-10" width={157} height={157} alt="pointer 1" src="/contentfacilities1.svg"/>
      <Image className="block lg:hidden z-10" width={157} height={157} alt="pointer 1" src="/contentfacilities2.svg"/>
      </div>
        </div>

    </div>

    <div className="container w-full lg:mt-[243px] mt-[48px] lg:px-[80px] px-[20px]">
              <div className="lg:grid-cols-2 lg:gap-[53px] grid">
              <div className="">
        <div className="lg:flex lg:flex-wrap lg:justify-start justify-center">
      <h1 className="z-10 font-poppins font-[600] lg:text-[40px] text-[16px] lg:text-start text-start text-[#0A0A0A]">
      What Our
      <Image className="hidden lg:block lg:absolute lg:ms-[210px]" width={190} height={8} alt="pointer 1" src="/arrowcustomer.svg"/>
      <Image className="block lg:hidden absolute ms-[95px]" width={54} height={3} alt="pointer 1" src="/arrowcustomermobile.svg"/>
 <span className="text-primary"> Customer</span><br />
 Are Saying
      </h1>
      <Image className='hidden lg:block absolute ml-[-60px] mt-[-80px]' src="/quote.svg" width={120} height={120} alt=''/>
      </div>
        </div>
      <div className="lg:flex lg:mt-0 mt-[16px] grid grid-cols-2 lg:gap-[0px] px-[20px] lg:ms-[400px]">
      <Image className='hidden lg:block' src="/arrowdefault.svg" width={29} height={12} alt=''/>
      <Image className='hidden lg:block ms-[20px]' src="/arrowactive.svg" width={62} height={24} alt=''/>
      </div>
        </div>
        <div className="flex justify-center w-full">
      <div className="lg:grid lg:grid-cols-3 lg:gap-[26px] gap-[31px] lg:mt-[48px] mt-[24px] grid grid-cols-1">
      <Image className='absolute lg:block mt-[80px] ml-[-60px] lg:mt-[200px]' src="/dots.svg" width={104} height={118} alt=''/>
      <Image className='hidden absolute lg:block mt-[80px] ms-[1100px] lg:mt-[-60px]' src="/dots.svg" width={104} height={118} alt=''/>
          <div className="lg:w-[368px] w-[335px] lg:h-fit h-fit rounded-[6px] drop-shadow-md border-[1px] border-[#F5F5F5] bg-white">
          <div className="px-[12px] py-[15px] lg:px-[24px] lg:py-[64px]">
          <div className="mt-[16px]">
            <p className="font-poppins font-[400] lg:text-[14px] text-[14px] text-[#130F26] lg:text-black">
            “The place is nice with a village atmosphere surrounded by trees, really cool”
            </p>
            </div>
            <div className="lg:flex lg:justify-start flex gap-[11px] lg:gap-[8px] mt-[32px]">
            <Image className='' src="/phillip.svg" width={40} height={40} alt=''/>
            <div className="block">
              <p className="font-poppins font-[400] lg:text-[12px] text-[12px] text-primary flex items-center gap-[8px]">
              Phillip Press 
              </p>
              <p className="font-poppins font-[400] lg:text-[10px] text-[10px] text-[#9E9E9E] flex items-center gap-[8px]">Traveler</p>
            </div>
            </div>
          </div>
          </div>
          <div className="lg:w-[368px] hidden lg:block w-[335px] lg:h-fit h-fit rounded-[6px] drop-shadow-md border-[1px] border-[#F5F5F5] bg-white">
          <div className="px-[12px] py-[15px] lg:px-[24px] lg:py-[64px]">
          <div className="mt-[16px]">
            <p className="font-poppins font-[400] lg:text-[14px] text-[14px] text-[#130F26] lg:text-black">
            “The place is nice with a village atmosphere surrounded by trees, really cool”
            </p>
            </div>
            <div className="lg:flex lg:justify-start flex gap-[11px] lg:gap-[8px] mt-[32px]">
            <Image className='' src="/tatiana.svg" width={40} height={40} alt=''/>
            <div className="block">
              <p className="font-poppins font-[400] lg:text-[12px] text-[12px] text-primary flex items-center gap-[8px]">
              Tatiana Levin
              </p>
              <p className="font-poppins font-[400] lg:text-[10px] text-[10px] text-[#9E9E9E] flex items-center gap-[8px]">Travel Blogger</p>
            </div>
            </div>
          </div>
          </div>
          <div className="lg:w-[368px] w-[335px] hidden lg:block lg:h-fit h-fit rounded-[6px] drop-shadow-md border-[1px] border-[#F5F5F5] bg-white">
          <div className="px-[12px] py-[15px] lg:px-[24px] lg:py-[64px]">
          <div className="mt-[16px]">
            <p className="font-poppins font-[400] lg:text-[14px] text-[14px] text-[#130F26] lg:text-black">
            “The place is nice with a village atmosphere surrounded by trees, really cool”
            </p>
            </div>
            <div className="lg:flex lg:justify-start flex gap-[11px] lg:gap-[8px] mt-[32px]">
            <Image className='' src="/kaiya.svg" width={40} height={40} alt=''/>
            <div className="block">
              <p className="font-poppins font-[400] lg:text-[12px] text-[12px] text-primary flex items-center gap-[8px]">
              Kaiya Vaccaro
              </p>
              <p className="font-poppins font-[400] lg:text-[10px] text-[10px] text-[#9E9E9E] flex items-center gap-[8px]">Digital Nomads</p>
            </div>
            </div>
          </div>
          </div>
          <div className="flex justify-end">
          <Image className='lg:hidden block' src="/arrowdefault.svg" width={20} height={12} alt=''/>
      <Image className='lg:hidden block ms-[8px]' src="/arrowactive.svg" width={34} height={24} alt=''/>
      </div>
      </div>
      </div>
    </div>

    <div className=" w-full lg:mt-[161px] mt-[48px] lg:px-[140px] px-[20px]">
      <div className="lg:flex lg:flex-wrap lg:justify-center">
      <Image className="hidden lg:block lg:absolute lg:ms-[80px]" width={168} height={48} alt="pointer 1" src="/pointerijo.svg"/>
      <h1 className="font-poppins font-[600] lg:text-[40px] text-[16px] text-[#0A0A0A]">
      Our
      <span className="text-primary"> Gallery</span>
      </h1>
      </div>

      <div className="flex justify-center w-full">
      <div className="lg:grid lg:grid-cols-2 lg:gap-[26px] gap-[31px] lg:mt-[48px] mt-[24px] grid grid-cols-2">
      <div className="lg:w-[611px] lg:h-[474px] bg-[#F1F6F6] absolute hidden lg:block mt-[80px] left-0"></div>
          <div className="lg:w-[564px] w-[152px] lg:h-fit h-fit rounded-[6px] drop-shadow-md">
              <Image className="lg:rounded-0 rounded-[4px]" width={564} height={515} alt="gal1" src="/gallery1.svg" />
          </div>
          <div className="lg:w-[564px] w-[152px] lg:h-fit h-fit rounded-[6px] drop-shadow-md">
          <Image className='hidden absolute lg:block mt-[80px] ms-[510px] -z-10 lg:mt-[450px]' src="/dots.svg" width={104} height={118} alt=''/>
              <Image className="lg:rounded-0 rounded-[4px]" width={564} height={248} alt="gal1" src="/gallery2.svg" />
              <p className="absolute lg:mt-[126px] lg:ms-[233px] mt-[34px] ms-[44px] font-poppins lg:text-[16px] text-[10px] font-[400] text-white underline ">More Photos</p>
              <Image className="lg:rounded-0 rounded-[4px] lg:mt-[18px] mt-[8px]" width={564} height={248} alt="gal1" src="/gallery3.svg" />
          </div>
      </div>
      </div>
    </div>

    <div className="lg:w-full w-full lg:h-[520px] h-[221px] bg-[url('/footerbanner.svg')] bg-cover bg-center bg-no-repeat">
      <div className="container">
      <div className="lg:px-[60px] lg:pt-[166px] pt-[63px] px-[20px] lg:mt-[215px] mt-[56px]">
        <h1 className="font-poppins font-[700] text-white lg:text-[40px] text-[20px] lg:text-start text-center">
        Make your comfort is <br></br>
          our happiness
        </h1>
      </div>
      <div className="lg:flex mt-[16px] lg:mt-[32px] lg:justify-start lg:px-[60px] flex justify-center px-[92px]">
      <button className="text-primary bg-white lg:px-[35px] lg:mt-0 lg:py-[12px] w-[190px] lg:w-fit py-[10px] lg:rounded-[6px] font-poppins font-[400] lg:text-[20px]">
      Book now
      </button>
        </div>
    </div>
    </div>

    <Footer></Footer>
    </>
  );
}