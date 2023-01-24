import React from "react";
import SectionInfo from "./SectionInfo";
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Pagination } from "swiper";

const Company = () => {
   return (
      <div className="flex flex-col md:flex-row gap-10 drop-shadow-2xl ">
         <div className="max-w-[574px] max-h-[359px] mb-10 sm:mb-0">
            <Swiper
               pagination={{
                  dynamicBullets: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <Card />
               </SwiperSlide>
               <SwiperSlide>
                  <Card />
               </SwiperSlide>
               <SwiperSlide>
                  <Card />
               </SwiperSlide>
            </Swiper>
         </div>
         <div className="w-full sm:w-3/4 flex items-center">
            <SectionInfo title="Grow Your Business and Join Our Happy Users" />
         </div>
      </div>
   );
};

export default Company;
